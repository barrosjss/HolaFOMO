'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Tabs, 
  Tab, 
  IconButton, 
  Tooltip, 
  CircularProgress, 
  ToggleButton, 
  ToggleButtonGroup,
  SxProps,
  Theme
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyAll as CopyIcon, Preview as PreviewIcon, Code as CodeIcon, PhoneAndroid, DesktopWindows } from '@mui/icons-material';

// Type for email components
type EmailComponentType = {
  name: string;
  component: React.ComponentType<any>;
  description: string;
};

// Styled components
const EmailListContainer = ({ children, sx = {} }: { children: React.ReactNode, sx?: SxProps<Theme> }) => (
  <Paper 
    elevation={0}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'divider',
      overflow: 'hidden',
      width: '100%',
      ...sx
    }}
  >
    {children}
  </Paper>
);

const PreviewContainer = ({ children, sx = {} }: { children: React.ReactNode, sx?: SxProps<Theme> }) => (
  <Paper 
    elevation={0}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'divider',
      overflow: 'hidden',
      ...sx
    }}
  >
    {children}
  </Paper>
);

// Main EmailViewer component
const EmailViewer = () => {
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState<boolean>(false);
  const [sourceCode, setSourceCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [emailComponents, setEmailComponents] = useState<EmailComponentType[]>([]);

  // Event handlers
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedEmailIndex(newValue);
    setViewMode('preview');
  };

  const handleDeviceViewChange = (event: React.MouseEvent<HTMLElement>, newDeviceView: 'desktop' | 'mobile') => {
    if (newDeviceView !== null) {
      setDeviceView(newDeviceView);
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'preview' ? 'code' : 'preview');
  };

  const fetchSourceCode = useCallback(async (componentName: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/email-source?component=${componentName}`);
      if (!response.ok) throw new Error('Failed to fetch source code');
      const data = await response.text();
      setSourceCode(data);
    } catch (error) {
      console.error('Error fetching source code:', error);
      setSourceCode('// Error loading source code');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const copyToClipboard = async () => {
    if (!sourceCode) return;
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  // Load components on mount
  useEffect(() => {
    const loadComponents = async () => {
      try {
        const mod = await import('../../components/emails');
        const components: EmailComponentType[] = [];
        
        Object.entries(mod).forEach(([key, value]) => {
          if (key !== 'default' && key !== '__esModule') {
            components.push({
              name: key,
              component: value as React.ComponentType<any>,
              description: `Preview of the ${key} email template`
            });
          }
        });
        
        setEmailComponents(components);
      } catch (error) {
        console.error('Error loading email components:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadComponents();
  }, []);

  // Fetch source code when view mode changes to 'code' or when email changes
  const selectedEmail = emailComponents[selectedEmailIndex];
  useEffect(() => {
    if (viewMode === 'code' && selectedEmail?.name) {
      fetchSourceCode(selectedEmail.name);
    }
  }, [viewMode, selectedEmailIndex, selectedEmail?.name, fetchSourceCode]);

  const EmailComponent = selectedEmail?.component;

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (emailComponents.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5">No email components found.</Typography>
      </Container>
    );
  }

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: 4,
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Email Templates
        </Typography>
        <Typography color="text.secondary">
          Preview and test all available email templates
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
        gap: 4,
        minHeight: '70vh',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}>
        {/* Email List */}
        <EmailListContainer>
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Available Templates
            </Typography>
          </Box>
          <Box sx={{ overflow: 'auto', flex: 1 }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={selectedEmailIndex}
              onChange={handleTabChange}
              sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiTabs-scroller': {
                  overflow: 'visible !important'
                }
              }}
              TabIndicatorProps={{
                style: { display: 'none' },
              }}
            >
              {emailComponents.map((email, index) => (
                <Tab
                  key={email.name}
                  label={
                    <Box
                      sx={{
                        textAlign: 'left',
                        width: '100%',
                        p: 1,
                        borderRadius: 1,
                        bgcolor: selectedEmailIndex === index ? 'action.selected' : 'transparent',
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      <Typography variant="subtitle2" fontWeight={500}>
                        {email.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {email.description}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    alignItems: 'flex-start',
                    minHeight: 'auto',
                    p: 0,
                    m: 0.5,
                    '&.Mui-selected': {
                      bgcolor: 'transparent',
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </EmailListContainer>

        {/* Email Preview/Code */}
        <PreviewContainer>
          <Box 
            sx={{ 
              p: 2, 
              borderBottom: '1px solid', 
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="subtitle1" fontWeight={600}>
                {selectedEmail?.name}
              </Typography>
              {viewMode === 'preview' && (
                <ToggleButtonGroup
                  value={deviceView}
                  exclusive
                  onChange={handleDeviceViewChange}
                  size="small"
                  sx={{
                    ml: 2,
                    '& .MuiToggleButtonGroup-grouped': {
                      border: '1px solid rgba(0, 0, 0, 0.12)',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(249, 95, 46, 0.08)',
                        color: '#F95F2E',
                        '&:hover': {
                          backgroundColor: 'rgba(249, 95, 46, 0.12)',
                        },
                      },
                      '&:not(:first-of-type)': {
                        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
                      },
                    },
                  }}
                >
                  <ToggleButton value="desktop" size="small" aria-label="Desktop view">
                    <DesktopWindows fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="caption">Desktop</Typography>
                  </ToggleButton>
                  <ToggleButton value="mobile" size="small" aria-label="Mobile view">
                    <PhoneAndroid fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="caption">Mobile</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            </Box>
            <Box>
              {viewMode === 'code' && (
                <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
                  <IconButton 
                    size="small" 
                    onClick={copyToClipboard}
                    sx={{ mr: 1 }}
                    disabled={isLoading || !sourceCode}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title={viewMode === 'preview' ? 'View code' : 'View preview'}>
                <IconButton 
                  size="small" 
                  onClick={toggleViewMode}
                  disabled={isLoading}
                >
                  {viewMode === 'preview' ? (
                    <CodeIcon fontSize="small" />
                  ) : (
                    <PreviewIcon fontSize="small" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ 
            flex: 1,
            overflow: 'auto',
            overflowX: 'hidden',
            bgcolor: viewMode === 'code' ? '#1e1e1e' : 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: viewMode === 'preview' ? 4 : 0,
            width: '100%',
            maxWidth: '100%',
          }}>
            {viewMode === 'preview' ? (
              <Box 
                sx={{
                  width: deviceView === 'mobile' ? '375px' : '100%',
                  maxWidth: '100%',
                  transition: 'width 0.3s ease',
                  border: '1px solid #eee',
                  borderRadius: 1,
                  overflow: 'hidden',
                  overflowX: 'hidden',
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                <Box sx={{ 
                  width: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  overflow: 'auto',
                  overflowX: 'hidden',
                  '&::-webkit-scrollbar': { display: 'none' },
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  '& *': {
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                  },
                  '& table': {
                    maxWidth: '100%',
                    tableLayout: 'fixed',
                  },
                  '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                  },
                }}>
                      {EmailComponent && <EmailComponent />}
                </Box>
                    </Box>
                  ) : (
              <Box sx={{ width: '100%', height: '100%' }}>
                      {isLoading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%" minHeight="400px">
                          <CircularProgress />
                        </Box>
                      ) : (
                        <SyntaxHighlighter
                          language="typescript"
                          style={atomDark}
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            fontSize: '0.875rem',
                      height: '100%',
                          }}
                        >
                    {sourceCode || '// No source code available'}
                        </SyntaxHighlighter>
                      )}
                    </Box>
                  )}
                </Box>
        </PreviewContainer>
              </Box>
      </Container>
  );
};

export default EmailViewer;

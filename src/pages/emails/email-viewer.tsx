'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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
  useTheme,
  useMediaQuery,
  SxProps,
  Theme
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyAll as CopyIcon, Preview as PreviewIcon, Code as CodeIcon, PhoneAndroid, DesktopWindows } from '@mui/icons-material';
import Head from 'next/head';

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

const EmailViewer = () => {
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [sourceCode, setSourceCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [emailComponents, setEmailComponents] = useState<EmailComponentType[]>([]);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const selectedEmail = emailComponents[selectedEmailIndex];
  const EmailComponent = selectedEmail?.component;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedEmailIndex(newValue);
    setViewMode('preview');
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'preview' ? 'code' : 'preview');
  };

  const handleDeviceViewChange = (event: React.MouseEvent<HTMLElement>, newDeviceView: 'desktop' | 'mobile') => {
    if (newDeviceView !== null) {
      setDeviceView(newDeviceView);
    }
  };

  const copyToClipboard = async () => {
    if (!selectedEmail) return;
    
    try {
      await navigator.clipboard.writeText(sourceCode || '');
      // You can add a snackbar or toast notification here
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

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
    <Container maxWidth="xl" sx={{ py: 4 }}>
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
        minHeight: '70vh'
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
                <Tooltip title="Copy code">
                  <IconButton 
                    size="small" 
                    onClick={copyToClipboard}
                    sx={{ mr: 1 }}
                  >
                    <CopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title={viewMode === 'preview' ? 'View code' : 'View preview'}>
                <IconButton 
                  size="small" 
                  onClick={toggleViewMode}
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
            bgcolor: viewMode === 'code' ? '#1e1e1e' : 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: viewMode === 'preview' ? 4 : 0,
          }}>
            {viewMode === 'preview' ? (
              <Box 
                sx={{
                  width: deviceView === 'mobile' ? '390px' : '100%',
                  maxWidth: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: 1
                }}
              >
                <Box sx={{ 
                  width: '100%',
                  height: '100%',
                  overflow: 'auto',
                  '&::-webkit-scrollbar': { display: 'none' },
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none'
                }}>
                  {EmailComponent && <EmailComponent />}
                </Box>
              </Box>
            ) : (
              <Box sx={{ width: '100%', height: '100%' }}>
                <SyntaxHighlighter
                  language="typescript"
                  style={atomDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.875rem',
                    height: '100%',
                    minHeight: '500px',
                  }}
                  showLineNumbers
                >
                  {sourceCode || '// Loading source code...'}
                </SyntaxHighlighter>
              </Box>
            )}
          </Box>
        </PreviewContainer>
      </Box>
    </Container>
  );
};

export default EmailViewer;

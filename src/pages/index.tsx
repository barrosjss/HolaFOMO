import { Box, Card, CardContent, Container, Grid, Stack, Typography, alpha } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { Email, Widgets, ArrowForward } from '@mui/icons-material';

const sections = [
  {
    title: 'Correos Electrónicos',
    emoji: '📧',
    description: 'Visualiza y prueba las plantillas de correo electrónico de FOMO',
    href: '/emails',
    icon: Email,
    color: 'primary' as const,
  },
  {
    title: 'Componentes UI',
    emoji: '🧩',
    description: 'Explora y prueba los componentes de la interfaz de FOMO',
    href: '/components',
    icon: Widgets,
    color: 'secondary' as const,
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Head>
        <title>FOMO - Entorno de Desarrollo</title>
        <meta name="description" content="Entorno de desarrollo para prototipos y pruebas de la plataforma FOMO" />
      </Head>

      <Container maxWidth="lg" sx={{ py: 8, flex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2.5,
              py: 1,
              mb: 3,
              borderRadius: 10,
              backgroundColor: alpha('#F95F2E', 0.08),
              border: '1px solid',
              borderColor: alpha('#F95F2E', 0.2),
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.5 },
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                letterSpacing: '0.05em',
              }}
            >
              Entorno de Desarrollo
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #2D2A29 0%, #6C757D 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bienvenido a FOMO
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Herramientas y recursos para el desarrollo de la plataforma
          </Typography>

          {/* Decorative Line */}
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #F95F2E 0%, #736CED 100%)',
              mx: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Cards - Usando Stack en lugar de Grid */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ mb: 8 }}
        >
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isPrimary = section.color === 'primary';

            return (
              <Box key={index} sx={{ flex: 1 }}>
                <Link href={section.href} passHref style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: 'divider',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: isPrimary
                          ? '0 12px 40px rgba(249, 95, 46, 0.2)'
                          : '0 12px 40px rgba(115, 108, 237, 0.2)',
                        borderColor: isPrimary ? 'primary.main' : 'secondary.main',
                        '& .card-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                        '& .arrow-icon': {
                          transform: 'translateX(4px)',
                        },
                      },
                    }}
                  >
                    {/* Gradient Background */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '40%',
                        height: '100%',
                        background: isPrimary
                          ? `linear-gradient(135deg, ${alpha('#F95F2E', 0.05)} 0%, transparent 100%)`
                          : `linear-gradient(135deg, ${alpha('#736CED', 0.05)} 0%, transparent 100%)`,
                        pointerEvents: 'none',
                      }}
                    />

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                      }}
                    >
                      {/* Icon Container */}
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 3,
                          mb: 3,
                          background: isPrimary
                            ? `linear-gradient(135deg, ${alpha('#F95F2E', 0.1)} 0%, ${alpha('#F95F2E', 0.05)} 100%)`
                            : `linear-gradient(135deg, ${alpha('#736CED', 0.1)} 0%, ${alpha('#736CED', 0.05)} 100%)`,
                          border: '1px solid',
                          borderColor: isPrimary
                            ? alpha('#F95F2E', 0.2)
                            : alpha('#736CED', 0.2),
                          transition: 'all 0.3s ease',
                        }}
                        className="card-icon"
                      >
                        <IconComponent
                          sx={{
                            fontSize: 36,
                            color: isPrimary ? 'primary.main' : 'secondary.main',
                          }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {section.emoji} {section.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          flexGrow: 1,
                          lineHeight: 1.6,
                        }}
                      >
                        {section.description}
                      </Typography>

                      {/* CTA */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: isPrimary ? 'primary.main' : 'secondary.main',
                          fontWeight: 500,
                        }}
                      >
                        <Typography sx={{ fontWeight: 500 }}>Ver más</Typography>
                        <ArrowForward
                          className="arrow-icon"
                          sx={{
                            fontSize: 20,
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            );
          })}
        </Stack>

        {/* Info Card */}
        <Card
          sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: alpha('#736CED', 0.03),
            borderLeft: '4px solid',
            borderLeftColor: 'secondary.main',
            mb: 8,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              💡 <strong>Nota:</strong> Este es un entorno de desarrollo. Los cambios realizados
              aquí son solo para pruebas y no afectan el sistema en producción.
            </Typography>
          </CardContent>
        </Card>

        {/* Footer */}
        <Box sx={{ textAlign: 'center' }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 10,
                backgroundColor: 'grey.100',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                Versión 1.0
              </Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 10,
                backgroundColor: 'grey.100',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {new Date().getFullYear()} © FOMO
              </Typography>
            </Box>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Construido con ❤️ para el equipo de desarrollo
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
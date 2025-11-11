'use client';

import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';

interface EventInvitationEmailProps {
  recipientName?: string;
  eventTitle?: string;
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  eventUrl?: string;
}

export const EventInvitationEmail = ({
  recipientName = 'Sarah Mitchell',
  eventTitle = 'Lanzamiento Exclusivo de Producto',
  eventDate = '15 - 16 de Marzo, 2025',
  eventTime = '19:00 - 23:00 hrs',
  eventLocation = 'The Modern Gallery, Centro',
  eventUrl = '#',
}: EventInvitationEmailProps) => {
  const previewText = `${recipientName} te ha invitado a ${eventTitle}`;

  return (
    <Html>
      <Head>
        <title>{previewText}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Img
              src="https://holafomo.com/_next/static/media/logo-fomo.15220965.svg"
              width="80"
              height="80"
              alt="FOMO"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={content}>
            {/* Invitation Text */}
            <Text style={invitationText}>
              {recipientName} te ha invitado a
            </Text>

            {/* Event Title */}
            <Heading style={heading}>{eventTitle}</Heading>

            {/* Tagline */}
            <Text style={tagline}>No todos saben lo que está por suceder...</Text>
            <Text style={taglineBold}>Pero tú puedes enterarte antes que nadie.</Text>

            {/* Spacer */}
            <Section style={spacer} />

            {/* Event Details Card */}
            <Section style={detailsCard}>
              {/* Fecha */}
              <Section style={detailItem}>
                <Text style={detailIcon}>📅</Text>
                <Section>
                  <Text style={detailLabel}>Fecha</Text>
                  <Text style={detailValue}>{eventDate}</Text>
                </Section>
              </Section>

              {/* Hora */}
              <Section style={detailItem}>
                <Text style={detailIcon}>⏰</Text>
                <Section>
                  <Text style={detailLabel}>Hora</Text>
                  <Text style={detailValue}>{eventTime}</Text>
                </Section>
              </Section>

              {/* Ubicación */}
              <Section style={detailItem}>
                <Text style={detailIcon}>📍</Text>
                <Section>
                  <Text style={detailLabel}>Ubicación</Text>
                  <Text style={detailValue}>{eventLocation}</Text>
                </Section>
              </Section>
            </Section>

            {/* Badge */}
            <Section style={badgeContainer}>
              <Section style={badge}>
                <Text style={badgeText}>✨ Estás en la lista especial</Text>
              </Section>
            </Section>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <a href={eventUrl} style={button}>
                Ver Evento
              </a>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Este evento es organizado a través de <span style={footerBrand}>FOMO</span>
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} FOMO. Todos los derechos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles - FOMO Design System
const body = {
  backgroundColor: '#F8F9FA', // --color-bg-lightest
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: '560px',
  margin: '0 auto',
  backgroundColor: '#FFFFFF', // --color-white
};

const logoSection = {
  padding: '48px 24px 32px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
  display: 'block',
};

const content = {
  padding: '0 40px 48px',
};

const invitationText = {
  fontSize: '15px',
  color: '#6C757D', // --color-text-medium
  textAlign: 'center' as const,
  margin: '0 0 12px 0',
  fontWeight: '400',
};

const heading = {
  fontSize: '36px', // --font-size-4xl
  fontWeight: '700', // --font-weight-bold
  color: '#F95F2E', // --color-primary
  textAlign: 'center' as const,
  margin: '0 0 24px 0',
  lineHeight: '1.2', // --line-height-tight
  letterSpacing: '-0.5px',
};

const tagline = {
  fontSize: '14px', // --font-size-sm
  color: '#ADB5BD', // --color-text-light
  textAlign: 'center' as const,
  margin: '0 0 8px 0',
  fontStyle: 'italic',
};

const taglineBold = {
  fontSize: '18px', // --font-size-lg
  color: '#2D2A29', // --color-text-secondary
  textAlign: 'center' as const,
  margin: '0 0 40px 0',
  fontWeight: '600', // --font-weight-semibold
};

const spacer = {
  height: '8px',
};

const detailsCard = {
  backgroundColor: '#F8F9FA', // --color-bg-lightest
  borderRadius: '12px', // --border-radius-lg
  padding: '32px 28px',
  marginBottom: '32px', // --spacing-xl
  border: '1px solid #E9ECEF', // --border-color-light
};

const detailItem = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px', // --spacing-md
  marginBottom: '24px', // --spacing-lg
};

const detailIcon = {
  fontSize: '24px',
  margin: '2px 0 0 0',
  lineHeight: '1',
  minWidth: '24px',
};

const detailLabel = {
  fontSize: '12px', // --font-size-xs
  color: '#6C757D', // --color-text-medium
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  fontWeight: '600', // --font-weight-semibold
  margin: '0 0 6px 0',
};

const detailValue = {
  fontSize: '16px', // --font-size-base
  color: '#000000', // --color-text-primary
  fontWeight: '500', // --font-weight-medium
  margin: 0,
  lineHeight: '1.5', // --line-height-normal
};

const badgeContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px', // --spacing-xl
};

const badge = {
  display: 'inline-block',
  backgroundColor: '#F0EEFF', // --color-bg-info
  borderRadius: '9999px', // --border-radius-full
  padding: '12px 24px',
  border: '1px solid #D4D0FA', // --color-disabled-secondary
};

const badgeText = {
  fontSize: '14px', // --font-size-sm
  color: '#736CED', // --color-secondary
  margin: 0,
  fontWeight: '600', // --font-weight-semibold
};

const buttonContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#F95F2E', // --color-primary
  color: '#FFFFFF', // --color-white
  padding: '16px 40px',
  borderRadius: '8px', // --border-radius-md
  textDecoration: 'none',
  display: 'inline-block',
  fontWeight: '600', // --font-weight-semibold
  fontSize: '16px', // --font-size-base
  textAlign: 'center' as const,
  letterSpacing: '0.2px',
  boxShadow: '0 4px 12px rgba(249, 95, 46, 0.25)', // --shadow-primary
};

const footer = {
  padding: '32px 40px',
  textAlign: 'center' as const,
  borderTop: '1px solid #E9ECEF', // --border-color-light
  backgroundColor: '#F8F9FA', // --color-bg-lightest
};

const footerText = {
  fontSize: '14px', // --font-size-sm
  color: '#6C757D', // --color-text-medium
  margin: '0 0 8px 0',
  fontWeight: '400', // --font-weight-normal
};

const footerBrand = {
  fontWeight: '700', // --font-weight-bold
  color: '#F95F2E', // --color-primary
};

const footerCopyright = {
  fontSize: '12px', // --font-size-xs
  color: '#ADB5BD', // --color-text-light
  margin: 0,
};

export default EventInvitationEmail;
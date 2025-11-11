'use client';

import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components';

interface WelcomeEmailProps {
  userName?: string;
}

export const WelcomeEmail = ({ userName = 'Usuario' }: WelcomeEmailProps) => {
  const previewText = `¡Bienvenido a FOMO, ${userName}!`;

  return (
    <Html>
      <Head>
        <title>{previewText}</title>
        <style>{`
          .btn-primary {
            background-color: #F95F2E;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            font-weight: 500;
            text-align: center;
          }
          .btn-primary:hover {
            background-color: #E54718;
          }
        `}</style>
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={heading}>¡Bienvenido a FOMO!</Heading>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={paragraph}>Hola {userName},</Text>
            <Text style={paragraph}>
              ¡Gracias por unirte a FOMO! Estamos emocionados de tenerte a bordo.
            </Text>
            <Text style={{ ...paragraph, marginBottom: '24px' }}>
              Con FOMO podrás gestionar tus tareas de manera más eficiente y nunca perderte de nada importante.
            </Text>

            <Section style={buttonContainer}>
              <a href="#" style={button}>
                Comenzar a usar FOMO
              </a>
            </Section>

            <Text style={disclaimer}>
              Si no creaste una cuenta con nosotros, por favor ignora este correo.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} FOMO. Todos los derechos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const body = {
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: '600px',
  margin: '40px auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #eaeaea',
};

const header = {
  backgroundColor: '#F95F2E',
  padding: '24px',
  textAlign: 'center' as const,
};

const heading = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const content = {
  padding: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
  margin: '0 0 16px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
};

const button = {
  backgroundColor: '#F95F2E',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  fontWeight: 500,
  textAlign: 'center' as const,
};

const disclaimer = {
  fontSize: '14px',
  color: '#666666',
  margin: 0,
};

const footer = {
  backgroundColor: '#f9f9f9',
  padding: '16px',
  textAlign: 'center' as const,
  borderTop: '1px solid #eaeaea',
};

const footerText = {
  fontSize: '12px',
  color: '#888888',
  margin: 0,
};

export default WelcomeEmail;
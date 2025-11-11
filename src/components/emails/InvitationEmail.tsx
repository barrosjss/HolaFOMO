import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export const InvitationEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Inauguración FOMO - 3 de mayo, 4pm</Preview>
      <Container style={container}>
        <Section style={logoSection}>
          <Img
            src="https://holafomo.com/_next/static/media/logo-fomo.15220965.svg"
            width="60"
            height="40"
            alt="FOMO Logo"
            style={logo}
          />
        </Section>
        
        <Heading style={heading}>Hola 👋</Heading>
        
        <Text style={text}>
          Soy <strong>GodoFredo</strong> y quiero que seas de los primeros en enterarte de mi próximo evento:
        </Text>

        <Section style={eventDetails}>
          <Text style={eventTitle}>
            <strong>Inauguración FOMO</strong>
          </Text>
          <Text style={eventItem}>
            📅 <strong>3 de mayo</strong>
          </Text>
          <Text style={eventItem}>
            🕓 <strong>4pm</strong>
          </Text>
          <Text style={eventItem}>
            📍 <strong>Oficinas de FOMO</strong>
          </Text>
        </Section>

        <Section style={buttonSection}>
          <Button
            style={button}
            href="https://holafomo.com/es/event/MzQ5?q=Lanzamiento-Impacto-Glocal"
          >
            Inscríbete aquí
          </Button>
        </Section>

        <Text style={specialNote}>
          ✨ <em>Estás en mi lista especial y puedes verlo antes que los demás.</em>
        </Text>

        <Text style={footer}>
          Nos vemos pronto,
          <br />
          <strong>GodoFredo</strong>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logo = {
  margin: '0 auto',
};

const heading = {
  fontSize: '28px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginBottom: '16px',
};

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333333',
  marginBottom: '24px',
};

const eventDetails = {
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  padding: '24px',
  marginBottom: '32px',
};

const eventItem = {
  fontSize: '16px',
  lineHeight: '28px',
  color: '#1a1a1a',
  margin: '4px 0',
};

const eventTitle = {
  fontSize: '20px',
  lineHeight: '32px',
  color: '#000000',
  margin: '0 0 16px 0',
  fontWeight: '700',
};

const buttonSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#F95F2E',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  cursor: 'pointer',
};

const specialNote = {
  fontSize: '15px',
  lineHeight: '22px',
  color: '#666666',
  textAlign: 'center' as const,
  marginBottom: '32px',
  padding: '16px',
  backgroundColor: '#F4F0F9',
  borderRadius: '8px',
};

const footer = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#666666',
  marginTop: '32px',
};

InvitationEmail.PreviewProps = {} as any;

export default InvitationEmail;
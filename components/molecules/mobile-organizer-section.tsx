'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import { OrganizerSection } from '@/components/organisms/event/OrganizerSection';
import { Organizer, CoHost } from '@/components/types/organizer.types';

interface MobileOrganizerSectionProps {
  organizer: Organizer;
  coHosts: CoHost[];
}

export function MobileOrganizerSection({ organizer, coHosts }: MobileOrganizerSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  return (
    <OrganizerSection 
      organizer={organizer} 
      coHosts={coHosts} 
      isMobile={isMobile} 
    />
  );
}

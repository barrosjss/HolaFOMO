import { Event } from './event.types';
import { CoHost } from './organizer.types';

export interface EventDetailContentProps {
  // Event data
  eventId: string;
  event?: Event;
  loading?: boolean;
  
  // Callbacks
  onShare?: () => void;
  onSave?: (eventId: string) => void;
  onBuyTickets?: (eventId: string) => void;
  onOrganizerClick?: (organizerId: string) => void;
  onCoHostClick?: (coHostId: string) => void;
  onImageClick?: (imageUrl: string) => void;
  onMapClick?: () => void;
  onReportIssue?: (eventId: string) => void;
  
  // UI Configuration
  className?: string;
  
  // Section toggles
  showOrganizerSection?: boolean;
  showCoHostsSection?: boolean;
  showSimilarEvents?: boolean;
  showShareButton?: boolean;
  showSaveButton?: boolean;
  showReportButton?: boolean;
  showMapPreview?: boolean;
  showFullDescription?: boolean;
  showTicketsSection?: boolean;
  
  // Custom content
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  customTicketsSection?: React.ReactNode;
  customOrganizerSection?: React.ReactNode;
  customCoHostsSection?: React.ReactNode;
  customSimilarEventsSection?: React.ReactNode;
  
  // Styling
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
  
  // Localization
  translations?: {
    shareButton?: string;
    saveButton?: string;
    reportButton?: string;
    buyTicketsButton?: string;
    freeLabel?: string;
    soldOutLabel?: string;
    fromPriceLabel?: string;
    toPriceLabel?: string;
    dateLabel?: string;
    timeLabel?: string;
    locationLabel?: string;
    organizerLabel?: string;
    coHostsLabel?: string;
    similarEventsLabel?: string;
    descriptionLabel?: string;
    scheduleLabel?: string;
    ticketsLabel?: string;
    mapLabel?: string;
    galleryLabel?: string;
    shareEventLabel?: string;
    saveEventLabel?: string;
    reportEventLabel?: string;
    eventEndedLabel?: string;
    eventCancelledLabel?: string;
    eventPostponedLabel?: string;
    eventDraftLabel?: string;
    eventPrivateLabel?: string;
    eventPublicLabel?: string;
    eventOnlineLabel?: string;
    eventOfflineLabel?: string;
    eventHybridLabel?: string;
    eventFreeLabel?: string;
    eventPaidLabel?: string;
    eventDonationLabel?: string;
    eventRegistrationLabel?: string;
    eventRegistrationClosedLabel?: string;
    eventRegistrationOpenLabel?: string;
    eventRegistrationFullLabel?: string;
    eventRegistrationLimitedLabel?: string;
    eventRegistrationUnlimitedLabel?: string;
    eventRegistrationRequiredLabel?: string;
    eventRegistrationNotRequiredLabel?: string;
    eventRegistrationPendingLabel?: string;
    eventRegistrationApprovedLabel?: string;
    eventRegistrationRejectedLabel?: string;
    eventRegistrationWaitlistLabel?: string;
    eventRegistrationWaitlistAvailableLabel?: string;
    eventRegistrationWaitlistFullLabel?: string;
    eventRegistrationWaitlistClosedLabel?: string;
    eventRegistrationWaitlistPendingLabel?: string;
    eventRegistrationWaitlistApprovedLabel?: string;
    eventRegistrationWaitlistRejectedLabel?: string;
    eventRegistrationWaitlistCancelledLabel?: string;
  };
  
  // Analytics
  onAnalyticsEvent?: (eventName: string, properties?: Record<string, any>) => void;
  
  // Error handling
  onError?: (error: Error) => void;
  
  // Performance optimization
  lazyLoadImages?: boolean;
  lazyLoadOffset?: number;
  
  // Accessibility
  ariaLabels?: {
    eventImage?: string;
    eventTitle?: string;
    eventDate?: string;
    eventTime?: string;
    eventLocation?: string;
    eventOrganizer?: string;
    eventCoHosts?: string;
    eventDescription?: string;
    eventTickets?: string;
    eventMap?: string;
    eventGallery?: string;
    shareButton?: string;
    saveButton?: string;
    reportButton?: string;
    buyTicketsButton?: string;
  };
  
  // Testing
  testId?: string;
}

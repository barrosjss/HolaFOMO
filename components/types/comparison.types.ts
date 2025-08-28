export interface ComparisonItem {
  feature: string;
  fomo: string | boolean;
  traditional: string | boolean;
  tooltip?: string;
}

export interface ComparisonSectionProps {
  title?: string;
  subtitle?: string;
  comparisons?: ComparisonItem[];
  cta?: {
    text: string;
    href: string;
  };
  footerText?: string;
}

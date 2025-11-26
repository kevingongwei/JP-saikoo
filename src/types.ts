export interface CompanyInfoItem {
  label: string;
  value: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  details?: string[];
  iconName: 'server' | 'code' | 'briefcase' | 'globe';
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: 'award' | 'book' | 'shield';
}
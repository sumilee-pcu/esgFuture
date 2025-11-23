// Common type definitions

export interface Notice {
  id: string;
  category: 'general' | 'submission' | 'conference';
  title: string;
  content: string;
  authorId: string;
  isPinned: boolean;
  views: number;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Journal {
  id: string;
  volume: number;
  issue: number;
  publishedYear: number;
  publishedMonth: number;
  coverImage?: string;
  description?: string;
}

export interface Member {
  id: string;
  email: string;
  nameKo: string;
  nameEn: string;
  affiliationKo: string;
  affiliationEn: string;
  position: string;
  phone: string;
  memberType: 'regular' | 'student' | 'lifetime';
  membershipExpiry?: Date;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

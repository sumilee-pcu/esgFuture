// User types
export interface User {
  id: string;
  email: string;
  nameKo: string;
  nameEn: string;
  affiliationKo: string;
  affiliationEn: string;
  position: string;
  phone: string;
  address: string;
  orcid?: string;
  memberType: "일반" | "학생" | "평생";
  isReviewer: boolean;
  isEditor: boolean;
  createdAt: string;
  updatedAt: string;
}

// Paper types
export interface Paper {
  id: string;
  submissionType: "일반" | "긴급";
  language: "국문" | "영문";
  titleKo: string;
  titleEn: string;
  abstractKo: string;
  abstractEn: string;
  keywords: string[];
  researchField: string;
  hasFunding: boolean;
  fundingInfo?: string;
  status:
    | "작성중"
    | "투고완료"
    | "심사중"
    | "수정요청"
    | "게재확정"
    | "게재불가";
  submittedAt: string;
  updatedAt: string;
  acceptedAt?: string;
  authors: Author[];
  files: PaperFile[];
  reviews: Review[];
}

export interface Author {
  id: string;
  paperId: string;
  userId?: string;
  nameKo: string;
  nameEn: string;
  affiliationKo: string;
  affiliationEn: string;
  email: string;
  orcid?: string;
  authorType: "제1저자" | "공동저자";
  isCorresponding: boolean;
  authorOrder: number;
}

export interface PaperFile {
  id: string;
  paperId: string;
  fileType: "본문" | "심사의견" | "동의서" | "표절검사" | "이해상충";
  fileName: string;
  filePath: string;
  fileSize: number;
  version: number;
  uploadedAt: string;
}

// Review types
export interface Review {
  id: string;
  paperId: string;
  reviewerId: string;
  assignedAt: string;
  dueDate: string;
  status: "배정됨" | "진행중" | "완료";
  decision?: "게재가" | "수정후게재" | "수정후재심" | "게재불가";
  comments?: string;
  submittedAt?: string;
}

// Payment types
export interface Payment {
  id: string;
  userId: string;
  paperId?: string;
  paymentType: "연회비" | "심사료" | "게재료";
  amount: number;
  status: "대기" | "완료" | "실패" | "환불";
  paymentMethod?: "카드" | "계좌이체" | "무통장";
  paymentKey?: string;
  paidAt?: string;
  receiptUrl?: string;
}

// Notice types
export interface Notice {
  id: string;
  category: "학회공지" | "투고안내" | "학술대회" | "시스템공지";
  title: string;
  content: string;
  authorId: string;
  isPinned: boolean;
  views: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

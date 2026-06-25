export type RequestStatus = 'pending' | 'approved' | 'denied';

export interface Document {
  name: string;
  url: string;
}

export interface UpgradeRequest {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  createdAtUtc: string;
  status: RequestStatus;
  nationalIdFront: string;
  nationalIdBack: string | null;
  certificates: Document[];
  rejectionReason: string | null;
  reviewedAt: string | null;
  reviewedBy: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface PastRequest {
  id: string;
  createdAtUtc: string;
  title: string;
  status: RequestStatus;
  rejectionReason: string | null;
}

export interface ApiUpgradeRequest {
  id: string;
  userName: string;
  userId: string;
  subject: string | null;
  approveStatus: string;
  createdAt: string;
}

export interface ApiPaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ApiDocument {
  type: 'IDFront' | 'IDBack' | 'Certificate' | 'License';
  file: string;
}

export interface ApiRequestDetails {
  id: string;
  status: string;
  rejectionReason: string | null;
  adminId: string | null;
  reviewedAt: string | null;
  createdAt: string;
  updatedAt: string;
  documents: ApiDocument[];
  user: {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    twoFactorEnabled: boolean;
    roles: string[];
    profile: null;
  };
}
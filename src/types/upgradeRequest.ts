export type RequestStatus = 'pending' | 'approved' | 'denied';

export interface Document {
  name: string;
  size: string;
  uploadedAt: string;
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
  languages: string[];
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
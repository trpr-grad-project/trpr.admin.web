export type SupportStatus = 'Read' | 'Unread';

export interface ApiSupportUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phoneNumber: string | null;
  rating: string | null;
}

export interface ApiSupport {
  id: string;
  user: ApiSupportUser;
  subject: string;
  description: string;
  status: SupportStatus;
  createdAtUTC: string;
}

export interface ApiSupportResponse {
  items: ApiSupport[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
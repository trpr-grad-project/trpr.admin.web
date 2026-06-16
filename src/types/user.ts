export interface UserProfile {
  id: string;
  bio: string;
  languages: {
    id: string;
    name: string;
    code: string;
    nativeName: string;
    icon: string;
  }[];
}

export interface ApiUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
  twoFactorEnabled: boolean;
  roles: string[];
  profile: UserProfile | null;
}

export interface ApiUsersResponse {
  items: ApiUser[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
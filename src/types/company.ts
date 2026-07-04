export interface CompanyGuide {
  id: string;

  userName: string;

  firstName: string;
  lastName: string;

  email: string | null;
  phoneNumber: string | null;

  rating: string;
}

export interface Company {
  id: string;

  identifier: string;

  description: string;

  name: string;

  logo: string;

  guides: CompanyGuide[];
}

export interface CompaniesResponse {
  items: Company[];

  page: number;
  pageSize: number;

  totalItems: number;
  totalPages: number;
}
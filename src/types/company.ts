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

export interface CreateCompanyDto {
  identifier: string;

  name: string;

  description: string;

  logo: string;

  password: string | null;
}

export interface CompanyGuideLookup {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;

  email: string | null;
  phoneNumber: string | null;

  rating: string;
}

export interface CreateTripSegmentDto {
  duration: number;
  dayDate: string;
  placesIds: string[];
}

export interface CreateTripDto {
  price: number;
  guideId: string;
  themeId: number;

  title: string;
  description: string;

  startDate: string;
  endDate: string;

  segments: CreateTripSegmentDto[];

  images: string[];

  maxParticipantsCount: number;

  autoApprove: boolean;
}

export interface CreateCompanyTripSegmentDto {
  duration: number;
  dayDate: string;
  placesIds: string[];
}

export interface CreateCompanyTripDto {
  price: number;
  guideId: string;
  themeId: number;

  title: string;
  description: string;

  startDate: string;
  endDate: string;

  segments: CreateCompanyTripSegmentDto[];

  images: string[];

  maxParticipantsCount: number;

  autoApprove: boolean;
}
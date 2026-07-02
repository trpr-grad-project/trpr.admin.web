export interface TripLookup {
  id: string;
  name: string;
}

export interface TripTag {
  id: string;
  name: string;
}

export interface TripGovernorate {
  id: string;
  name: string;
}

export interface TripCategory {
  id: string;
  name: string;
}

export interface TripPlace {
  id: string;
  title: string;
  description: string;
  averageVisitTime: string;

  categoryId: string;
  governorateId: string;

  latitude: string;
  longitude: string;

  governorate: TripGovernorate;
  category: TripCategory;

  tags: TripTag[];
}

export interface TripSegment {
  day: string;
  duration: string;
  places: TripPlace[];
}

export interface ApiTrip {
  tripId: string;

  createdByUser: string;

  theme: string;

  creatorRoles: string[];

  title: string;

  autoApprove: boolean;

  description: string;

  price: string;

  startDate: string;

  imagesUrls: string[];

  tripVisibility: "Public" | "Private";

  status:
  | "UnderReview"
  | "Published"
  | "Bidding"
  | "Ready"
  | "Started"
  | "Finished"
  | "Rejected"
  | "Canceled";

  segments: TripSegment[];

  tripTime: string;

  maxParticipantsCount: string;

  guideId: string | null;

  rejectionReason: string | null;
}

export interface TripsResponse {
  items: ApiTrip[];

  page: number;
  pageSize: number;

  totalItems: number;
  totalPages: number;
}

export interface TripFormData {
  themes: TripLookup[];
}

export interface TripUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;

  email: string | null;
  phoneNumber: string | null;

  rating: string;
}

export interface TripBidding {
  id: string;

  tripId: string;

  guideId: string;

  guideUsername: string;
  guideFirstName: string;
  guideLastName: string;

  proposedPrice: string;

  proposalMessage: string | null;

  createdAtUTC: string;
}

export interface TripBiddingsPage {
  items: TripBidding[];

  nextCursor: string | null;

  hasNextPage: boolean;
}

export interface TripDetailsResponse {
  id: string;

  createdByUser: TripUser;

  creatorRoles: string[];

  theme: string;

  title: string;
  description: string;

  price: string;

  autoApprove: boolean;

  startDate: string;
  tripTime: string;

  imagesUrls: string[];

  tripVisibility: number;

  status:
  | "UnderReview"
  | "Published"
  | "Bidding"
  | "Ready"
  | "Started"
  | "Finished"
  | "Rejected"
  | "Canceled";

  publishMode: number;

  rejectionReason: string | null;

  segments: TripSegment[];

  maxParticipantsCount: string;

  approvedParticipants: TripUser[];

  pendingParticipants: TripUser[];

  guideId: string | null;

  createdAtUTC: string;

  biddingsPage: TripBiddingsPage;
}


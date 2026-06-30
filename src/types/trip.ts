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

  themeId: string;

  creatorRoles: string[];

  title: string;
  description: string;

  price: string;
  expectedDuration: string;

  startDate: string;
  tripTime: string;

  imagesUrls: string[];

  tripVisibility: "Public" | "Private";

  publishMode: "DirectPublish" | "Bidding";

  segments: TripSegment[];

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
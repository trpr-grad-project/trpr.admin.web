export interface PlaceLookup {
  id: string;
  name: string;
}

export interface PlacesFormData {
  categories: PlaceLookup[];
  governorates: PlaceLookup[];
  tags: PlaceLookup[];
}

export interface PlaceTag {
  id: string;
  name: string;
}

export interface PlaceGovernorate {
  id: string;
  name: string;
}

export interface PlaceCategory {
  id: string;
  name: string;
}

export interface ApiPlace {
  id: string;
  title: string;
  description: string;
  averageVisitTime: string;
  categoryId: string;
  governorateId: string;
  latitude: string;
  longitude: string;
  userId: string | null;

  governorate: PlaceGovernorate;
  category: PlaceCategory;
  tags: PlaceTag[];
}

export interface ApiPlacesResponse {
  items: ApiPlace[];
  nextCursor: string | null;
  hasNextPage: boolean;
}
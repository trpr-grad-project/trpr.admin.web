import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../index";
import type {
  PlacesFormData,
  ApiPlacesResponse,
  ApiPlace,
  SavePlaceRequest,
} from "../../types/place";

interface GetPlacesParams {
  governorateId?: string;
  longitude?: string;
  latitude?: string;
  radiusInMeters?: string;
  title?: string;
  lastPlaceId?: string;
  pageSize?: number;
}

export const placesApi = createApi({
  reducerPath: "placesApi",

  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ["Place"],

  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1",

    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;

      const token = state.auth.accessToken;
      const userId = state.auth.user?.id;
      const userRole = state.auth.user?.role;

      if (token) headers.set("Authorization", `Bearer ${token}`);
      if (userId) headers.set("X-User-Id", userId);
      if (userRole) {
        headers.set("X-User-Role", JSON.stringify([userRole]));
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPlacesFormData: builder.query<PlacesFormData, void>({
      query: () => ({
        url: "/places/form-data",
      }),

      providesTags: ["Place"],
    }),

    getPlaces: builder.query<ApiPlacesResponse, GetPlacesParams>({
      query: ({
        governorateId,
        longitude,
        latitude,
        radiusInMeters,
        title,
        lastPlaceId,
        pageSize,
      }) => ({
        url: "/places",

        params: {
          GovernorateId: governorateId || undefined,
          Longitude: longitude || undefined,
          Latitude: latitude || undefined,
          RadiusInMeters: radiusInMeters || undefined,
          Title: title || undefined,
          LastPlaceId: lastPlaceId || undefined,
          PageSize: pageSize || undefined,
        },
      }),

      providesTags: ["Place"],
    }),

    createPlace: builder.mutation<ApiPlace, SavePlaceRequest>({
      query: (body) => ({
        url: "/places",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Place"],
    }),

    updatePlace: builder.mutation<
      ApiPlace,
      { id: string; body: SavePlaceRequest }
    >({
      query: ({ id, body }) => ({
        url: `/places/${id}`,
        method: "PUT",
        body,
      }),

      invalidatesTags: ["Place"],
    }),
  }),
});

export const {
  useGetPlacesFormDataQuery,
  useGetPlacesQuery,
  useCreatePlaceMutation,
  useUpdatePlaceMutation,
} = placesApi;
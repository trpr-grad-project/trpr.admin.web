import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../index";
import type {
  TripDetailsResponse,
  TripFormData,
  TripsResponse,
} from "../../types/trip";

interface GetTripsParams {
  page: number;
  pageSize: number;

  status?: number;

  themeId?: string;
  governorateId?: string;

  title?: string;

  minPrice?: number;
  maxPrice?: number;

  latitude?: string;
  longitude?: string;
  radiusInMeters?: number;

  tripType?: number;
}

interface ChangeTripStatusBody {
  id: string;
  isApproved: boolean;
  rejectionReason: string | null;
}

export const tripsApi = createApi({
  reducerPath: "tripsApi",

  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ["Trip"],

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
    getTripsFormData: builder.query<TripFormData, void>({
      query: () => ({
        url: "/trip/form-data",
      }),
    }),

    getTrips: builder.query<TripsResponse, GetTripsParams>({
      query: ({
        page,
        pageSize,
        status,
        themeId,
        governorateId,
        title,
        minPrice,
        maxPrice,
        latitude,
        longitude,
        radiusInMeters,
        tripType,
      }) => ({
        url: "/trip/admin",

        params: {
          Page: page,
          PageSize: pageSize,

          Status: status ?? undefined,

          ThemeId: themeId || undefined,
          GovernorateId: governorateId || undefined,

          Title: title || undefined,

          MinPrice: minPrice ?? undefined,
          MaxPrice: maxPrice ?? undefined,

          Latitude: latitude || undefined,
          Longitude: longitude || undefined,
          RadiusInMeters: radiusInMeters ?? undefined,

          TripType: tripType ?? undefined,
        },
      }),

      providesTags: ["Trip"],
    }),

    getTripDetails: builder.query<TripDetailsResponse, string>({
      query: (id) => ({
        url: `/trip/${id}`,
      }),

      providesTags: (_result, _error, id) => [{ type: "Trip", id }],
    }),

    changeTripStatus: builder.mutation<void, ChangeTripStatusBody>({
      query: (body) => ({
        url: "/trip/change-status",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Trip"],
    }),
  }),
});

export const {
  useGetTripsFormDataQuery,
  useGetTripsQuery,
  useGetTripDetailsQuery,
  useChangeTripStatusMutation,
} = tripsApi;


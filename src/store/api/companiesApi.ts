import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../index";
import type { CompaniesResponse } from "../../types/company";

interface GetCompaniesParams {
  page: number;
  pageSize: number;

  identifier?: string;
  companyName?: string;
}

export const companiesApi = createApi({
  reducerPath: "companiesApi",

  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ["Company"],

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
    getCompanies: builder.query<
      CompaniesResponse,
      GetCompaniesParams
    >({
      query: ({
        page,
        pageSize,
        identifier,
        companyName,
      }) => ({
        url: "/company",

        params: {
          Page: page,
          PageSize: pageSize,

          Identifier: identifier || undefined,
          CompanyName: companyName || undefined,
        },
      }),

      providesTags: ["Company"],
    }),
  }),
});

export const {
  useGetCompaniesQuery,
} = companiesApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../index";
import type {
  CompaniesResponse,
  Company,
  CreateCompanyDto,
  CompanyGuide,
  CreateCompanyTripDto,
} from "../../types/company";

interface GetCompaniesParams {
  page: number;
  pageSize: number;

  identifier?: string;
  companyName?: string;
}

interface AddGuideToCompanyParams {
  companyId: string;
  guideId: string;
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

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      if (userId) {
        headers.set("X-User-Id", userId);
      }

      if (userRole) {
        headers.set("X-User-Role", JSON.stringify([userRole]));
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCompanies: builder.query<CompaniesResponse, GetCompaniesParams>({
      query: ({ page, pageSize, identifier, companyName }) => ({
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

    getCompanyById: builder.query<Company, string>({
      query: (id) => ({
        url: `/company/${id}`,
      }),

      providesTags: (_result, _error, id) => [
        {
          type: "Company",
          id,
        },
      ],
    }),

    getCompanyGuides: builder.query<CompanyGuide[], void>({
      query: () => ({
        url: "/company/guides",
      }),
    }),

    uploadImages: builder.mutation<string[], File>({
      query: (file) => {
        const formData = new FormData();

        formData.append("request", file);

        return {
          url: "/trip/images/upload-images",
          method: "POST",
          body: formData,
        };
      },
    }),

    createCompany: builder.mutation<Company, CreateCompanyDto>({
      query: (body) => ({
        url: "/company",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Company"],
    }),

    createCompanyTrip: builder.mutation<
      void,
      CreateCompanyTripDto
    >({
      query: (body) => ({
        url: "/trip/company",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Company"],
    }),
    
    addGuideToCompany: builder.mutation<void, AddGuideToCompanyParams>({
      query: ({ companyId, guideId }) => ({
        url: `/company/${companyId}/guides/${guideId}`,
        method: "POST",
      }),
      
      invalidatesTags: (_result, _error, { companyId }) => [
        { type: "Company", id: companyId },
        "Company",
      ],
    }),
  }),
});

export const {
  useGetCompaniesQuery,
  useGetCompanyByIdQuery,
  useGetCompanyGuidesQuery,
  useUploadImagesMutation,
  useCreateCompanyMutation,
  useCreateCompanyTripMutation,
  useAddGuideToCompanyMutation,
} = companiesApi;
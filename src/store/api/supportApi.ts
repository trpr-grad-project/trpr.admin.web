import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';
import type {
  ApiSupport,
  ApiSupportResponse,
  SupportStatus,
} from '../../types/support';

interface GetSupportParams {
  page: number;
  pageSize: number;
  status?: SupportStatus;
  subjectSearch?: string;
  nameSearch?: string;
}

export const supportApi = createApi({
  reducerPath: 'supportApi',
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['Support'],

  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;

      const token = state.auth.accessToken;
      const userId = state.auth.user?.id;
      const userRole = state.auth.user?.role;

      if (token) headers.set('Authorization', `Bearer ${token}`);
      if (userId) headers.set('X-User-Id', userId);
      if (userRole) {
        headers.set('X-User-Role', JSON.stringify([userRole]));
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSupportRequests: builder.query<
      ApiSupportResponse,
      GetSupportParams
    >({
      query: ({
        page,
        pageSize,
        status,
        subjectSearch,
        nameSearch,
      }) => ({
        url: '/support',
        params: {
          Page: page,
          PageSize: pageSize,
          ...(status ? { Status: status } : {}),
          ...(subjectSearch ? { SubjectSearch: subjectSearch } : {}),
          ...(nameSearch ? { NameSearch: nameSearch } : {}),
        },
      }),
      providesTags: ['Support'],
    }),

    getSupportById: builder.query<ApiSupport, string>({
      query: (id) => ({
        url: `/support/${id}`,
      }),
      providesTags: ['Support'],
    }),
  }),
});

export const {
  useGetSupportRequestsQuery,
  useGetSupportByIdQuery,
} = supportApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';
import type { ApiUpgradeRequest, ApiPaginatedResponse, ApiRequestDetails } from '../../types/upgradeRequest';

export type ApiStatus = 'Pending' | 'Approved' | 'Rejected';

interface GetRequestsParams {
  page: number;
  pageSize: number;
  sortByUpdatedate: boolean;
  status: ApiStatus;
}

interface ChangeStatusParams {
  upgradeRequestId: string;
  status: 0 | 1 | 2;
  rejectionReason: string | null;
}

export const upgradeRequestsApi = createApi({
  reducerPath: 'upgradeRequestsApi',
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.accessToken;
      const userId = state.auth.user?.id;
      const userRole = state.auth.user?.role;

      if (token) headers.set('Authorization', `Bearer ${token}`);
      if (userId) headers.set('X-User-Id', userId);
      if (userRole) headers.set('X-User-Role', JSON.stringify([userRole]));

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUpgradeRequests: builder.query<ApiPaginatedResponse<ApiUpgradeRequest>, GetRequestsParams>({
      query: ({ page, pageSize, sortByUpdatedate, status }) => ({
        url: '/guide/requests',
        params: { page, pageSize, sortByUpdatedate, status },
      }),
    }),
    getUpgradeRequestDetails: builder.query<ApiRequestDetails[], string>({
      query: (requestId) => ({
        url: `/guide/${requestId}`,
      }),
    }),
    changeRequestStatus: builder.mutation<void, ChangeStatusParams>({
      query: (body) => ({
        url: '/guide/change-status',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { 
  useGetUpgradeRequestsQuery, 
  useGetUpgradeRequestDetailsQuery,
  useChangeRequestStatusMutation,
} = upgradeRequestsApi;
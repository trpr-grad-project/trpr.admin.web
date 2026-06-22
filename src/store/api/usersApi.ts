import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';
import type { ApiUsersResponse, ApiUser } from '../../types/user';

interface GetUsersParams {
  page: number;
  pageSize: number;
  search?: string;
}

interface UpdateRolesParams {
  userId: string;
  roles: string[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
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
    getUsers: builder.query<ApiUsersResponse, GetUsersParams>({
      query: ({ page, pageSize, search }) => ({
        url: '/users',
        params: {
          Page: page,
          PageSize: pageSize,
          ...(search ? { Search: search } : {}),
        },
      }),
    }),
    getUserById: builder.query<ApiUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
    updateUserRoles: builder.mutation<void, UpdateRolesParams>({
      query: ({ userId, roles }) => ({
        url: `/users/${userId}/roles`,
        method: 'PUT',
        body: { roles },
      }),
    }),
  }),
});

export const { 
  useGetUsersQuery, 
  useGetUserByIdQuery, 
  useDeleteUserMutation,
  useUpdateUserRolesMutation,
} = usersApi;
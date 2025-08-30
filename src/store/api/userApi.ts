import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserType } from '../../types/api-types';


export interface UsersResponse {
  data: UserType[];
  total: number;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://687124747ca4d06b34b97d3d.mockapi.io/api/userId',
    timeout: 70000,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => '/',
      providesTags: ['User'],
      transformResponse: (response: UserType[]) => ({
        data: response,
        total: response.length
      }),
    }),
    getUserById: builder.query<UserType, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
    createUser: builder.mutation<UserType, Partial<UserType>>({
      query: (user) => ({
        url: '/',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useLazyGetUsersQuery,
  useCreateUserMutation,
} = userApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  tagTypes: ['posts'],
  reducerPath: 'postsApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6805ee0eca467c15be6a7236.mockapi.io',
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['posts'],
    }),
    addPost: builder.mutation({
      query: body => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['posts'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postsApi;

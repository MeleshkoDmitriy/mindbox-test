import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/url";


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: (params) => ({
                url: `/tasks${params}`,
                method: 'GET'
            }),
            providesTags: ["tasks"],
        }),
        updateTaskStatus: builder.mutation({
          query: (task) => ({
              url: `/tasks/${task.id}`,
              method: 'PATCH',
              body: { isDone: !task.isDone }
          }),
          invalidatesTags: ["tasks"],
        }),
        postTask: builder.mutation({
            query: (body) => ({
                url: '/tasks',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["tasks"]
        }),
        deleteTaskById: builder.mutation({
          query: (id) => ({
            url: `/tasks/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags: ["tasks"]
        })
        
    })
})

export const { 
  useGetTasksQuery,  
  usePostTaskMutation,
  useDeleteTaskByIdMutation,
  useUpdateTaskStatusMutation,
} = apiSlice;
// src/store/pagesApi.js
import { apiSlice } from "./apiSlice";

export const pagesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPages: builder.query({
            query: (page = 1) => `/pages?page=${page}`,
            providesTags: [{ type: "Pages" }]
        }),
        createPage: builder.mutation({
            query: (pageData) => ({
                url: "/pages",
                method: "POST",
                body: pageData,
            }),
            invalidatesTags: ["Pages"],
        }),
        getHtmlContent: builder.query({
            query: (urlPath) => ({
                url: urlPath, // e.g., '/dashboard.html'
                responseHandler: (response) => response.text(), // force text response
            }),
        }),
    }),
});

export const { useGetPagesQuery, useCreatePageMutation, useGetHtmlContentQuery } = pagesApi;

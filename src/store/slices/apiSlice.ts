import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://cms-themes.pages.dev";

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Pages", "Templates"],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            //for authentication
            // const token = localStorage.getItem("token"); // Example authentication
            // if (token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: () => ({}), // Extend in other slices
});
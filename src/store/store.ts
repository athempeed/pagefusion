import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from './slices/sidebar';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
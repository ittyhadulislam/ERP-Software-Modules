import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./app/apiSlice"
import EmpInfoSlice from "./features/EmpInfo/EmpInfoSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,

        empInfo: EmpInfoSlice
    },
    middleWare: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleWare)
})
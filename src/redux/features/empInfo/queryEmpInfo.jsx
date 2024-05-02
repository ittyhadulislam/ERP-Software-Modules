import { empInfo } from "../../../api/api";
import { apiSlice } from "../../app/apiSlice";


export const empInfoQuery = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEmpInfo: builder.query({
            query: () => ({
                url: `${empInfo}`,
                method: "GET"
            })
        })
    })
})

// export const { } = empInfoQuery;
export const { use } = empInfoQuery;

// export const useGetEmpInfo = empInfoQuery.useGetEmpInfo
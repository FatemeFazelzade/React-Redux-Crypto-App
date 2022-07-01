import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b59378c653msh0798c0c48ee2339p1d8e6fjsn237da8431fc8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'   
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins")
        })
    })
})

export const useGetCryptosQuery = createApi;
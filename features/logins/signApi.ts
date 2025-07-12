import { api } from "../api/apiSlice";
import { UserProps } from "../../types/User";

export const signApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createAccount: builder.mutation<UserProps, Partial<UserProps>>({
            query: (data) => ({ url: '/api/signup', method: 'POST', body: data }),
            invalidatesTags: ['signup']
        }),
    }),
    overrideExisting: true
});

export const {
    useCreateAccountMutation,
} = signApi;
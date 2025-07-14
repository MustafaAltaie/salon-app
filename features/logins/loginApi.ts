import { api } from "../api/apiSlice";
import { UserProps } from "../../types/User";

export const signApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation<Partial<UserProps>, { email: string, password: string }>({
            query: ({ email, password }) => ({ url: '/api/login', method: 'POST', body: { email, password } }),
            invalidatesTags: ['login']
        }),
        updateUser: builder.mutation<Partial<UserProps>, { id: string, data: Partial<UserProps> }>({
            query: ({ id, data }) => ({ url: `/api/login/${id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['login']
        }),
        changePassword: builder.mutation<{ message: string }, { id: string, newPassword: string }>({
            query: ({ id, newPassword }) => ({ url: `/api/login/changePassword/${id}`, method: 'PATCH', body: { newPassword } }),
            invalidatesTags: ['login']
        }),
        uploadImage: builder.mutation<void, FormData>({
            query: (formData) => ({ url: '/api/login/image', method: 'POST', body: formData }),
            invalidatesTags: ['login']
        }),
        deleteImage: builder.mutation<void, string>({
            query: (imageName) => ({ url: `/api/login/deleteImage/${imageName}`, method: 'DELETE' }),
            invalidatesTags: ['login']
        }),
    }),
    overrideExisting: true,
});

export const {
    useLoginUserMutation,
    useUpdateUserMutation,
    useChangePasswordMutation,
    useUploadImageMutation,
    useDeleteImageMutation,
} = signApi;
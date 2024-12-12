// lib/api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const API = {
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.get(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    },

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.post(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    },

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.put(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    },

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.delete(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    },

    handleError(error: any): never {
        if (axios.isAxiosError(error)) {
            // Handle specific Axios error types
            if (error.response) {
                // The request was made and the server responded with a status code
                throw new Error(error.response.data.message || 'Server Error');
            } else if (error.request) {
                // The request was made but no response was received
                throw new Error('No response received from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                throw new Error('Error setting up the request');
            }
        }
        throw error;
    }
};

// Utility function for handling API errors
export function handleApiError(error: any): string {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.message || error.message || 'An unexpected error occurred';
    }
    return 'An unexpected error occurred';
}
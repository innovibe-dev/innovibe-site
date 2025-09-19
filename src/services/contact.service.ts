import { AxiosResponse } from "axios";
import api from "@/lib/api.service";

// Contact form data interface
export interface ContactForm {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  message: string;
}

// API response type
interface ApiResponse {
  status: boolean;
  data?: any;
  message?: string;
  errors?: Record<string, string[]>;
}

export const contactApi = {
  submitContactForm: async (formData: ContactForm): Promise<ApiResponse> => {
    try {
      const response: AxiosResponse<ApiResponse> = await api.post(
        "contactus",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      throw error;
    }
  },
};

export default contactApi;
import { AxiosResponse } from "axios";
import api from "@/lib/api.service";

// Contact form data interface
export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// API response type
interface ApiResponse {
  status: boolean;
  data?: any;
  message?: string;
}

export const contactApi = {
  // ✅ Submit contact form
  submitContactForm: async (formData: ContactForm): Promise<ApiResponse> => {
    try {
      console.log('Sending contact form data:', JSON.stringify(formData, null, 2));
      
      const response: AxiosResponse<ApiResponse> = await api.post(
        "/contactus",
        formData
      );
      
      console.log('Contact form submission successful. Response:', response.data);
      return response.data;
      
    } catch (error: any) {
      console.error('Error submitting contact form:');
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received. Request:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error:', error.message);
      }
      throw error;
    }
  },
};

export default contactApi;

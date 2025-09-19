import { AxiosResponse } from "axios";
import api from "@/lib/api.service";

export interface Author {
  name: string;
}

export interface Category {

  name: string;
}

export interface Tag {
  id: number | string;
  name: string;
}

export interface Blog {
  id: number | string;
  title: string;
  content: string;
  description: string;
  slug: string;
  status: string;
  image: string | null;
  seo_title?: string;
  seo_description?: string;
  author: Author;
  category: Category;
  tags?: Tag[];
  created_at?: string;
  updated_at?: string;
}

// Blog related API calls
export const blogApi = {
  // ✅ Get all blogs
  getAllBlogs: async (): Promise<Blog[]> => {
    try {
      const response: AxiosResponse<{
        status: boolean;
        data: { posts: Blog[] };
      }> = await api.get("/posts");

      // API response: { status: true, data: { posts: [...] } }
      return response.data.data.posts;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  // ✅ Get single blog by ID
  getBlogById: async (id: string): Promise<Blog> => {
    try {
      const response: AxiosResponse<{ status: boolean; data: Blog }> =
        await api.get(`/posts/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching blog with id ${id}:`, error);
      throw error;
    }
  },
};

export default blogApi;

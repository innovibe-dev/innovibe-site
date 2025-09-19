import { AxiosResponse } from "axios";
import api from "@/lib/api.service";

export interface Author {
  id: number | string;
  name: string;
  email: string;
}

export interface Category {
  id: number | string;
  name: string;
  slug: string;
}

export interface Tag {
  id: number | string;
  name: string;
  slug: string;
}

export interface Blog {
  id: number | string;
  title: string;
  content: string;
  description: string;
  slug: string;
  status: string; // e.g. "published", "draft"
  image: string | null;
  seo_title?: string;
  seo_description?: string;
  author: Author;
  category: Category;
  tags?: Tag[];
  created_at?: string;
  updated_at?: string;
}

export interface Comment {
  id: string;
  blogId: string;
  author: string;
  content: string;
  createdAt: string;
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

  // ✅ Create a new blog
  createBlog: async (
    blogData: Omit<Blog, "id" | "author" | "category">
  ): Promise<Blog> => {
    try {
      const response: AxiosResponse<{ status: boolean; data: Blog }> =
        await api.post("/blogs", blogData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  },
};

// Comment related API calls
export const commentApi = {
  // ✅ Get comments for a specific blog
  getCommentsByBlogId: async (blogId: string): Promise<Comment[]> => {
    try {
      const response: AxiosResponse<{ status: boolean; data: Comment[] }> =
        await api.get(`/blogs/${blogId}/comments`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching comments for blog ${blogId}:`, error);
      throw error;
    }
  },

  // ✅ Create a new comment
  createComment: async (
    commentData: Omit<Comment, "id" | "createdAt">
  ): Promise<Comment> => {
    try {
      const response: AxiosResponse<{ status: boolean; data: Comment }> =
        await api.post("/comments", commentData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  },

  // ✅ Delete a comment
  deleteComment: async (commentId: string): Promise<void> => {
    try {
      await api.delete(`/comments/${commentId}`);
    } catch (error) {
      console.error(`Error deleting comment ${commentId}:`, error);
      throw error;
    }
  },
};

export default { blogApi, commentApi };

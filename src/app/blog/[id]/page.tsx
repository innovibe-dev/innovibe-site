"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogApi } from "@/services/blog.service";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string | number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string | number;
  category: string;
  featured: boolean;
  image: string;
}

// ✅ Date formatter (handles ISO + Unix timestamps)
const formatDate = (dateInput?: string | number) => {
  if (!dateInput) return "No date";

  let date: Date;

  if (typeof dateInput === "number") {
    // Unix timestamp (seconds)
    date = new Date(dateInput * 1000);
  } else if (/^\d+$/.test(dateInput)) {
    // String but numeric → Unix timestamp
    date = new Date(parseInt(dateInput, 10) * 1000);
  } else {
    // ISO string
    date = new Date(dateInput);
  }

  if (isNaN(date.getTime())) return String(dateInput);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = React.useState<BlogPost | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Create slug from title
  const createSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const allBlogs = await blogApi.getAllBlogs();
        const foundBlog = allBlogs.find(
          (blog) => createSlug(blog.title) === id
        );

        if (foundBlog) {
          const blogPost: BlogPost = {
            id: String(foundBlog.id),
            title: foundBlog.title,
            content: foundBlog.content,
            excerpt: foundBlog.description,
            author: foundBlog.author?.name || "Unknown Author",
            date: foundBlog.created_at || "",
            category: foundBlog.category?.name || "Uncategorized",
            featured: false,
            image: foundBlog.image || "",
          };
          setBlog(blogPost);
          setError(null);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation /><br /><br /><br />

        <div className="flex-grow bg-gray-50 py-12" >
            {/* Back link */}
          <Link
            href="/blog"
            className="text-blue-600 hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Blog Image (smaller + rounded corners) */}
            <div className="relative h-45 w-full md:h-52 mt-8 rounded-lg overflow-hidden">
              <Image
                src={blog.image || "/images/blog-placeholder.jpg"}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8">
              {/* Category and Date */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{blog.author}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              {/* Content */}
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-6">{blog.excerpt}</p>

                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Author Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <User size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {blog.author}
                      </h3>
                      <p className="text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

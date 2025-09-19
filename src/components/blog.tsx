"use client";

import React, { useState, useEffect } from "react";
import { blogApi, Blog } from "@/services/blog.service";
import { Search, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";

// Categories and their corresponding colors
export const blogCategories = [
  "All",
  "Event Planning",
  "Weddings",
  "Corporate Events",
  "Virtual Events",
  "Sustainability",
  "Technology",
  "EV Parts",
];

export const categoryColors = {
  "Event Planning": "#FF6B6B",
  Weddings: "#FF9E7D",
  "Corporate Events": "#FFD166",
  "Virtual Events": "#06D6A0",
  Sustainability: "#118AB2",
  Technology: "#4F46E5",
  "EV Parts": "#7E22CE",
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [articles, setArticles] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const blogs = await blogApi.getAllBlogs();
        setArticles(blogs);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Sorting logic
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "Newest") {
      return (
        new Date(b.created_at || "").getTime() -
        new Date(a.created_at || "").getTime()
      );
    }
    if (sortBy === "Oldest") {
      return (
        new Date(a.created_at || "").getTime() -
        new Date(b.created_at || "").getTime()
      );
    }
    return 0; // placeholder for "Most Popular"
  });

  // Filtering
  const filteredArticles = sortedArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryName = article.category?.name || "Uncategorized";
    const matchesFilter = filterBy === "All" || categoryName === filterBy;

    return matchesSearch && matchesFilter;
  });

  // Format date consistently
  const formatDate = (dateString?: string) => {
    if (!dateString) return "No date";
    // Handle Unix timestamp (if it's a number string)
    const timestamp = parseInt(dateString);
    const date = !isNaN(timestamp) && timestamp > 1000000000 
      ? new Date(timestamp * 1000) 
      : new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Create slug from title
  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // ✅ Article card
  const ArticleCard: React.FC<{ article: Blog }> = ({ article }) => (
    <Link href={`/blog/${createSlug(article.title)}`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
        {/* Image Section */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url(${article.image || "/placeholder.png"})`,
          }}
        />

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(article.created_at)}</span>
            </div>
          </div>

          <div className="mb-2">
            <span
              className="text-xs font-medium text-white px-3 py-1 rounded-full"
              style={{
                backgroundColor:
                  categoryColors[
                    article.category?.name as keyof typeof categoryColors
                  ] || "#6B7280",
              }}
            >
              {article.category?.name || "Uncategorized"}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {article.author?.name || "Unknown Author"}
            </span>
            <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Header Section */}
         <br /><br />
        <section id="blog" className="py-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">
              EV Insights & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Stay informed with the latest trends, tips, and insights from
              India&apos;s electric vehicle industry.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                {blogCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* All Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Articles  ({filteredArticles.length})
          </h2>

          {loading ? (
            <div className="text-center py-8">Loading articles...</div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-2">No articles found</div>
              <p className="text-sm text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;

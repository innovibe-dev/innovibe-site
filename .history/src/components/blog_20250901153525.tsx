""
import React, { useState } from 'react';

import { Search, Calendar, Clock, ChevronRight, Filter } from 'lucide-react';

type Article = {
  id: number;
  featured: boolean;
  date: string;
  readTime: string;
  category: string;
  title: string;
  description: string;
  author: string;
  image: string;
};

const FeaturedArticles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Newest');
  const [filterBy, setFilterBy] = useState('All');

  const articles: Article[] = [
    {
      id: 1,
      featured: true,
      date: '1/15/2024',
      readTime: '8 min read',
      category: 'Industry Insights',
      title: 'The Future of Electric Vehicles in India: Trends and Opportunities',
      description: 'Explore the rapidly evolving EV landscape in India, government initiatives, and emerging opportunities for businesses and consumers.',
      author: 'Sri Hari Kolasa',
      image: '/placeholder-image.jpg'
    },
    {
      id: 2,
      featured: true,
      date: '12/28/2023',
      readTime: '10 min read',
      category: 'Conversion',
      title: 'Converting Your Petrol Vehicle to Electric: A Complete Guide',
      description: 'Discover the process, benefits, and considerations of converting your conventional vehicle to electric power.',
      author: 'Conversion Team',
      image: '/placeholder-image.jpg'
    },
    {
      id: 3,
      featured: true,
      date: '12/15/2023',
      readTime: '12 min read',
      category: 'Product Review',
      title: 'Best Electric Scooters in India 2024: Complete Buyer\'s Guide',
      description: 'Comprehensive review of the top electric scooters available in India, comparing features, price, and performance.',
      author: 'Product Team',
      image: '/placeholder-image.jpg'
    },
    {
      id: 4,
      featured: true,
      date: '1/15/2024',
      readTime: '8 min read',
      category: 'Industry Insights',
      title: 'The Future of Electric Vehicles in India: Trends and Opportunities',
      description: 'Explore the rapidly evolving EV landscape in India, government initiatives, and emerging opportunities for businesses and consumers.',
      author: 'Sri Hari Kolasa',
      image: '/placeholder-image.jpg'
    },
    {
      id: 5,
      featured: false,
      date: '1/10/2024',
      readTime: '6 min read',
      category: 'Technical Guide',
      title: 'Complete Guide to EV Charging Infrastructure in India',
      description: 'Everything you need to know about EV charging stations, types of chargers, and the growing infrastructure network.',
      author: 'Technical Team',
      image: '/placeholder-image.jpg'
    },
    {
      id: 6,
      featured: false,
      date: '1/5/2024',
      readTime: '5 min read',
      category: 'Maintenance',
      title: 'Essential Maintenance Tips for Electric Two-Wheelers',
      description: 'Keep your electric scooter or bike in perfect condition with these expert maintenance tips and best practices.',
      author: 'Service Team',
      image: '/placeholder-image.jpg'
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const allArticles = articles;

  const ArticleCard = ({ article, isLarge = false }: { article: Article; isLarge?: boolean }) => (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${isLarge ? 'h-full' : 'h-full'}`}>
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
        <div className="absolute top-4 left-4">
          {article.featured && (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          )}
        </div>
        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white/40 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        {/* Category */}
        <div className="mb-3">
          <span className="text-sm font-medium text-blue-600">{article.category}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>
        
        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-700">{article.author}</span>
          </div>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium group">
            Read More
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Featured Articles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filters */}
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All</option>
                <option>Industry Insights</option>
                <option>Technical Guide</option>
                <option>Product Review</option>
                <option>Maintenance</option>
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Most Popular</option>
                <option>By Category</option>
              </select>
              <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* All Articles Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          All Articles <span className="text-gray-500 font-normal">({allArticles.length})</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.map((article) => (
            <ArticleCard key={`all-${article.id}`} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedArticles;
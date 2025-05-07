
import { useState, useEffect } from 'react';
import { blogArticles } from '@/data/blogData';
import ArticleCard from '@/components/blog/ArticleCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(blogArticles);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(blogArticles.map(article => article.category)))];
  
  useEffect(() => {
    const filtered = blogArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredArticles(filtered);
  }, [searchQuery, activeCategory]);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Air Fryer Insights & Recipes
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert tips, tricks, and recipes to help you make the most of your air fryer.
          </p>
          <div className="max-w-lg mx-auto flex gap-2">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-orange-200 focus:ring-orange-500"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="bg-white py-8 border-b">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category 
                    ? "bg-orange-500 hover:bg-orange-600" 
                    : "text-gray-700 border-orange-200 hover:bg-orange-50"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Articles */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                className="mt-4 bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

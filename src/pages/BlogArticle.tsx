
import { useParams, Navigate } from 'react-router-dom';
import { blogArticles } from '@/data/blogData';
import BlogContent from '@/components/blog/BlogContent';
import ArticleCard from '@/components/blog/ArticleCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogArticle = () => {
  const { slug } = useParams();
  
  const article = blogArticles.find(article => article.slug === slug);
  
  if (!article) {
    return <Navigate to="/blog" />;
  }
  
  const relatedArticles = article.related
    .map(id => blogArticles.find(article => article.id === id))
    .filter(Boolean);
  
  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={article.cover}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:text-orange-200">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <BlogContent
        title={article.title}
        date={article.date}
        author={article.author}
        readTime={article.readTime}
        category={article.category}
        content={<div dangerouslySetInnerHTML={{ __html: article.content }} />}
      />
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                relatedArticle && <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogArticle;

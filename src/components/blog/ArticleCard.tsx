
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  cover: string;
  date: string;
  category: string;
  readTime: string;
}

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="overflow-hidden border-orange-100 h-full flex flex-col recipe-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.cover} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime} read</span>
        </div>
        <CardTitle className="text-xl text-gray-800">{article.title}</CardTitle>
        <div className="mb-1">
          <span className="inline-block bg-orange-100 text-orange-800 rounded-full px-2 py-0.5 text-xs font-semibold">
            {article.category}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">
          {article.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/blog/${article.slug}`} 
          className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
        >
          Read Article
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;

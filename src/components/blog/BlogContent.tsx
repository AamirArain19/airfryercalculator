
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogContentProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
  relatedLinks?: Array<{
    title: string;
    url: string;
  }>;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  date,
  author,
  readTime,
  category,
  content,
  relatedLinks,
}) => {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} read</span>
          <span className="mx-2">•</span>
          <span>By {author}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        
        <div className="mb-6">
          <span className="inline-block bg-orange-100 text-orange-800 rounded-full px-3 py-1 text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <div className="prose prose-orange max-w-none">
        {content}
      </div>
      
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Related Articles</h3>
          <ul className="space-y-2">
            {relatedLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="text-orange-600 hover:text-orange-800 font-medium">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default BlogContent;

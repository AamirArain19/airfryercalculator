
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Chicken",
    description: "From wings to breasts, cook perfectly juicy chicken in your air fryer.",
    link: "/recipes/chicken",
    image: "https://images.unsplash.com/photo-1609016954720-74df5b4a6975?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    title: "Vegetables",
    description: "Crispy, caramelized veggies ready in minutes with less oil.",
    link: "/recipes/vegetables",
    image: "https://images.unsplash.com/photo-1584270354955-9b5f0555c9d1?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    title: "Fish & Seafood",
    description: "Quick-cooking seafood with perfect texture and no fishy smell.",
    link: "/recipes/fish",
    image: "https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    title: "Desserts",
    description: "Yes, you can make delicious sweets in your air fryer too!",
    link: "/recipes/desserts",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=400&h=300&auto=format&fit=crop"
  }
];

const FoodCategoryCards = () => {
  return (
    <section className="section-container py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Popular Air Fryer Categories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our most popular food categories with specialized cooking times and tips.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-orange-100 recipe-card h-full">
            <div className="h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{category.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link 
                to={category.link} 
                className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
              >
                View Recipes
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FoodCategoryCards;

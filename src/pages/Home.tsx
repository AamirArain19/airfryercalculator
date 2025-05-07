
import CalculatorForm from "@/components/calculator/CalculatorForm";
import FeaturedTips from "@/components/calculator/FeaturedTips";
import FoodCategoryCards from "@/components/calculator/FoodCategoryCards";
import FAQSection from "@/components/calculator/FAQSection";
import CTA from "@/components/widgets/CTA";
import Newsletter from "@/components/widgets/Newsletter";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative calculator-gradient py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Perfect Air Fryer Results, <span className="text-orange-600">Every Time</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Our smart calculator provides precise cooking times and temperatures for any food, 
                adjusted to your portion size and air fryer model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#calculator" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Use Calculator Now
                </a>
                <a href="#tips" className="bg-white text-orange-600 border border-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                  View Air Fryer Tips
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1621980628955-a3e4cc6b62ba?q=80&w=500&auto=format&fit=crop" 
                  alt="Air Fryer with Food" 
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-orange-600 font-bold text-xl">400°F</div>
                  <div className="text-gray-600">Perfect Crisp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="bg-white py-16">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Air Fryer Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get personalized cooking times and temperatures based on your food type and portion size.
              No more guesswork or overcooked meals!
            </p>
          </div>
          <CalculatorForm />
        </div>
      </section>
      
      {/* Tips Section */}
      <section id="tips" className="bg-white">
        <FeaturedTips />
      </section>
      
      {/* Food Categories Section */}
      <FoodCategoryCards />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Call to Action */}
      <CTA />
    </div>
  );
};

export default Home;

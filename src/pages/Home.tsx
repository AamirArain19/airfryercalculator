import CalculatorForm from "@/components/calculator/CalculatorForm";
import FeaturedTips from "@/components/calculator/FeaturedTips";
import FoodCategoryCards from "@/components/calculator/FoodCategoryCards";
import FAQSection from "@/components/calculator/FAQSection";
import CTA from "@/components/widgets/CTA";
import Newsletter from "@/components/widgets/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, Calculator } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section with New Content */}
      <section className="relative py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-center">
            Oven to Air Fryer Conversion: Chart, Calculator & Tips
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <img 
              src="/api/placeholder/600/400" 
              alt="Air fryer cooking basket with food" 
              className="rounded-xl w-full h-auto shadow-md"
            />
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              So you've just unboxed your shiny new air fryer, and now you're staring at your favorite oven recipes wondering, "How on earth do I make these work?" Don't worry—I've been there too! Converting recipes from conventional oven to air fryer doesn't have to be complicated or intimidating. In fact, with a few simple adjustments, you'll be air frying like a pro in no time.
            </p>
            <p>
              In this guide, I'll walk you through everything you need to know about converting those tried-and-true oven recipes to work perfectly in your air fryer. Let's dive in!
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Do You Need to Convert Oven Recipes for an Air Fryer?</h2>
            <p>
              Before we get to the actual conversion process, let's quickly understand why we can't just use the exact same temperature and time settings:
            </p>
            <ol>
              <li><strong>Different heating methods</strong>: Air fryers use rapid air circulation technology that cooks food faster than conventional ovens.</li>
              <li><strong>Smaller cooking space</strong>: The compact size of air fryers means heat is more concentrated around your food.</li>
              <li><strong>Enhanced efficiency</strong>: Air fryers typically require less time and lower temperatures to achieve the same (or better!) results as an oven.</li>
            </ol>
            <p>
              Think of your air fryer as a mini convection oven on steroids—it's more powerful and efficient, which means adjustments are necessary to prevent overcooked, dry food.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How to Convert Oven Recipes to Air Fryer Settings</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">The Basic Conversion Formula</h3>
            <p>
              Here's a simple two-step process you can follow for most recipes:
            </p>
            <p>
              <strong>Step 1: Adjust the temperature</strong>
            </p>
            <ul>
              <li>Reduce the oven temperature by 25°F (about 15°C)</li>
              <li>For example: If your oven recipe calls for 350°F, set your air fryer to 325°F</li>
            </ul>
            <p>
              <strong>Step 2: Reduce the cooking time</strong>
            </p>
            <ul>
              <li>Start by reducing the cooking time by about 20%</li>
              <li>For example: If your oven recipe says 30 minutes, try 24 minutes in the air fryer</li>
            </ul>
            <p>
              Remember, this is just a starting point! Since air fryers can vary by brand and model, you'll want to check your food earlier than you think necessary the first few times you make a conversion.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Oven to Air Fryer Conversion Chart</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 px-4 py-2">Oven Temperature</th>
                    <th className="border border-gray-300 px-4 py-2">Air Fryer Temperature</th>
                    <th className="border border-gray-300 px-4 py-2">Oven Time</th>
                    <th className="border border-gray-300 px-4 py-2">Air Fryer Time Adjustment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">325°F (165°C)</td>
                    <td className="border border-gray-300 px-4 py-2">300°F (150°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">350°F (175°C)</td>
                    <td className="border border-gray-300 px-4 py-2">325°F (165°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">375°F (190°C)</td>
                    <td className="border border-gray-300 px-4 py-2">350°F (175°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">400°F (200°C)</td>
                    <td className="border border-gray-300 px-4 py-2">375°F (190°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">425°F (220°C)</td>
                    <td className="border border-gray-300 px-4 py-2">400°F (200°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">450°F (230°C)</td>
                    <td className="border border-gray-300 px-4 py-2">425°F (220°C)</td>
                    <td className="border border-gray-300 px-4 py-2">30 min</td>
                    <td className="border border-gray-300 px-4 py-2">24 min (reduced by 20%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Food-Specific Conversion Tips</h3>
            <p>Different foods may require slightly different approaches:</p>
            
            <h4 className="text-lg font-bold mt-4 mb-2">Baked Goods</h4>
            <ul>
              <li>Reduce temperature by 25°F</li>
              <li>Check at 1/3 less time than original recipe</li>
              <li>Example: Muffins at 350°F for 18 minutes → Air fryer at 325°F for 12 minutes</li>
            </ul>
            
            <h4 className="text-lg font-bold mt-4 mb-2">Meat & Poultry</h4>
            <ul>
              <li>Temperature reduction of 25°F</li>
              <li>Time reduction of 20-30%</li>
              <li>Always use a meat thermometer to check doneness!</li>
              <li>Example: Chicken breasts at 375°F for 30 minutes → Air fryer at 350°F for 20-24 minutes</li>
            </ul>
            
            <h4 className="text-lg font-bold mt-4 mb-2">Vegetables</h4>
            <ul>
              <li>Same temperature or 25°F lower</li>
              <li>Check at half the original time</li>
              <li>Example: Roasted potatoes at 400°F for 40 minutes → Air fryer at 375°F for 20 minutes</li>
            </ul>
            
            <h4 className="text-lg font-bold mt-4 mb-2">Frozen Foods</h4>
            <ul>
              <li>Reduce temperature by 10-15°F</li>
              <li>Check at 3/4 of the original time</li>
              <li>Example: Frozen pizza at 425°F for 15 minutes → Air fryer at 410°F for 11-12 minutes</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Oven to Air Fryer Conversion Calculator</h2>
            <p>
              Not a fan of math? No problem! Use this simple process to calculate your conversion:
            </p>
            <ol>
              <li>Temperature: Subtract 25°F from the oven temperature</li>
              <li>Time: Multiply the original time by 0.8 (to reduce by 20%)</li>
            </ol>
            <p>
              For example:
            </p>
            <ul>
              <li>Oven recipe: 375°F for 40 minutes</li>
              <li>Air fryer conversion: 350°F for 32 minutes (40 × 0.8 = 32)</li>
            </ul>
            
            <div className="mt-8 mb-8 flex flex-wrap gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                <Link to="#calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Use Our Calculator</span>
                </Link>
              </Button>
              <Button variant="outline" className="border-orange-200 hover:bg-orange-50 text-orange-700" size="lg">
                <Download className="h-5 w-5 mr-2" />
                <span>Download Printable Chart</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Keep as is */}
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
      
      {/* Continue with more content from the article */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Can I use aluminum foil or parchment paper in my air fryer?</h3>
            <p>
              <strong>Yes, but with caution!</strong> You can use foil or parchment paper in your air fryer, but make sure:
            </p>
            <ul>
              <li>It doesn't cover more than 3/4 of the basket (air needs to circulate)</li>
              <li>It's weighed down with food (so it doesn't fly into the heating element)</li>
              <li>You never preheat with just paper/foil in the basket</li>
              <li>For parchment, use perforated parchment paper made specifically for air fryers</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Why is my food coming out dry in the air fryer?</h3>
            <p>
              Dry food usually means it's been cooked too long or at too high a temperature. Remember that air fryers are more efficient than ovens! Try:
            </p>
            <ul>
              <li>Using a light spritz of oil on your food</li>
              <li>Checking food earlier than you think necessary</li>
              <li>Reducing the temperature by an additional 10-15°F</li>
              <li>Adding a small ramekin with a tablespoon of water for baked goods</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Do I need to preheat my air fryer?</h3>
            <p>
              Most recipes benefit from preheating, but it doesn't need to be as long as an oven:
            </p>
            <ul>
              <li>2-3 minutes for smaller air fryers</li>
              <li>3-5 minutes for larger models</li>
              <li>Some newer models have automatic preheat functions</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Should I flip or shake the food while air frying?</h3>
            <p>
              <strong>Absolutely!</strong> For most foods (especially things like fries, nuggets, or vegetables), giving the basket a shake or flipping food halfway through cooking ensures even browning. Some recipes might need more frequent turning.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">My air fryer cooks too quickly. What should I do?</h3>
            <p>
              If you find your air fryer is more powerful than our conversion chart suggests:
            </p>
            <ul>
              <li>Reduce the temperature by an additional 10-15°F</li>
              <li>Check food at half the original oven time rather than 80%</li>
              <li>Use an instant-read thermometer to prevent overcooking meats</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Bonus Tips for Air Fryer Success</h2>
            <p>Want to take your air fryer game to the next level? Here are some pro tips:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">For Extra Crispy Results:</h3>
            <ol>
              <li><strong>Don't overcrowd the basket</strong> – Air needs to circulate! Cook in batches if necessary.</li>
              <li><strong>Pat foods dry</strong> before air frying, especially meats and vegetables.</li>
              <li><strong>Use a light spray of oil</strong> rather than nothing at all – even a teaspoon can make a huge difference.</li>
              <li><strong>For breaded items</strong>, spray the food lightly with oil after breading for that golden-brown finish.</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Prevent Smoking:</h3>
            <ol>
              <li>Add a tablespoon of water to the drawer beneath the basket for fatty foods</li>
              <li>Clean your air fryer thoroughly between uses</li>
              <li>Trim excess fat from meats before cooking</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Perfect Air Fryer Baking:</h3>
            <ol>
              <li>Use appropriate baking containers that fit in your air fryer</li>
              <li>Reduce both temperature and time more significantly (30°F lower, 30% less time)</li>
              <li>Tent with foil if the top is browning too quickly</li>
            </ol>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Ready to Convert Your Favorite Recipes?</h2>
            <p>
              Converting oven recipes to air fryer settings gets easier with practice. Soon, you'll develop an intuition for how your specific air fryer model operates and how different foods respond.
            </p>
            
            <div className="mt-6 mb-8 flex flex-wrap gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <FileText className="h-5 w-5 mr-2" />
                <span>Get More Air Fryer Recipes</span>
              </Button>
            </div>
            
            <p>
              Have you successfully converted a favorite oven recipe to the air fryer? Share your experience in the comments below! I'd love to hear about your air fryer adventures.
            </p>
            
            <p className="italic mt-4">
              Happy air frying!
            </p>
          </div>
        </div>
      </section>
      
      {/* Keep existing additional sections */}
      <FAQSection />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default Home;

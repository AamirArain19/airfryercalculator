
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Air Fryer Pro
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted resource for air fryer cooking guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Air Fryer Pro was born out of necessity when our founder, Sarah Johnson, received an air fryer as a gift in 2019 and couldn't find reliable cooking guides that adjusted for portion sizes and different models.
              </p>
              <p className="text-gray-600 mb-4">
                After months of testing, documenting, and adjusting recipes, Sarah realized she had compiled valuable data that could help others master their air fryers. She teamed up with Chef Michael Chen and tech expert Mark Reynolds to create a tool that would take the guesswork out of air fryer cooking.
              </p>
              <p className="text-gray-600">
                Today, Air Fryer Pro is used by thousands of home cooks daily to achieve perfect cooking results. Our calculator algorithm is continuously refined based on user feedback and additional testing, ensuring you get the most accurate cooking instructions possible.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556910633-5c0d8886e0af?q=80&w=600&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="bg-orange-50 py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that cooking healthy, delicious food at home should be simple, enjoyable, and accessible to everyone.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 italic">
                "Our mission is to empower home cooks to get the most out of their air fryers through accurate information, inspiring recipes, and a supportive community. We're committed to helping people cook healthier meals with less stress and better results."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team combines culinary expertise, technical knowledge, and a passion for helping others cook better.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop" 
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Johnson</h3>
                <p className="text-orange-600 mb-3">Founder & Food Scientist</p>
                <p className="text-gray-600">
                  With a background in food science and a passion for healthy cooking, Sarah leads our recipe development and testing team.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop" 
                  alt="Chef Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Michael Chen</h3>
                <p className="text-orange-600 mb-3">Executive Chef</p>
                <p className="text-gray-600">
                  A professional chef with over 15 years of experience, Michael brings culinary expertise and creativity to our recipe collection.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=400&auto=format&fit=crop" 
                  alt="Mark Reynolds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Mark Reynolds</h3>
                <p className="text-orange-600 mb-3">Technology Expert</p>
                <p className="text-gray-600">
                  Mark oversees our calculator algorithm development and ensures our technology delivers accurate, user-friendly results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-orange-600 text-white py-12">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
            Whether you're having trouble with our calculator, want to suggest a feature, or just want to share your air fryer success story, we'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

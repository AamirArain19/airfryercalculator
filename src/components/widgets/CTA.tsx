
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-orange-600 text-white py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Perfect Your Air Fryer Cooking?
        </h2>
        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
          Use our calculator to get custom cooking times and temperatures for any recipe. 
          No more guesswork, just perfectly cooked food every time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
            <Link to="/" className="text-current">Try The Calculator</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
            <Link to="/blog" className="text-current">Read Our Air Fryer Tips</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

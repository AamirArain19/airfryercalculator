
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tips = [
  {
    title: "Preheat Your Air Fryer",
    description: "For most recipes, preheating your air fryer for 3-5 minutes helps achieve better crispiness and even cooking.",
    icon: "🔥"
  },
  {
    title: "Don't Overcrowd",
    description: "Always arrange food in a single layer with space between pieces to ensure proper air circulation.",
    icon: "📏"
  },
  {
    title: "Shake or Flip",
    description: "Shake the basket or flip food halfway through cooking time to ensure all sides cook evenly.",
    icon: "🔄"
  },
  {
    title: "Use Minimal Oil",
    description: "A light spray of oil on food enhances crispiness. Too much oil can cause smoking.",
    icon: "🛢️"
  },
  {
    title: "Check Early",
    description: "Air fryers cook faster than ovens. Check food 2-3 minutes before the recommended time.",
    icon: "⏱️"
  },
  {
    title: "Clean After Each Use",
    description: "Wipe down the air fryer after each use to prevent odor transfer and buildup.",
    icon: "🧽"
  }
];

const FeaturedTips = () => {
  return (
    <section className="section-container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Pro Air Fryer Tips</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these expert tips to get the most out of your air fryer and achieve perfect results every time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="border-orange-100 hover:shadow-md transition-shadow recipe-card">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{tip.icon}</span>
                {tip.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                {tip.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTips;

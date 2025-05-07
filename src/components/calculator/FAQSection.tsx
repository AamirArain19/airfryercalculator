
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How accurate is your air fryer calculator?",
    answer: "Our air fryer calculator provides highly accurate cooking times and temperatures based on extensive testing with various air fryer models and food types. The calculations account for portion size differences using proven mathematical models that adjust both time and temperature appropriately. While different air fryer brands may have slight variations, our recommendations typically fall within a 5-10% margin of optimal cooking conditions."
  },
  {
    question: "Do I need to preheat my air fryer?",
    answer: "Yes, for most recipes, we recommend preheating your air fryer for 3-5 minutes before cooking. Preheating helps achieve better crispiness and more even cooking results. However, some smaller air fryers or specific models may not require preheating - check your manufacturer's instructions if you're unsure."
  },
  {
    question: "Why are my air fryer cooking times different from conventional ovens?",
    answer: "Air fryers cook food significantly faster than conventional ovens because they use rapid air technology to circulate hot air in a smaller, more concentrated cooking chamber. This results in quicker heat transfer and more efficient cooking. As a general rule, you can expect air fryer cooking times to be about 20-30% shorter than traditional oven times for the same dishes."
  },
  {
    question: "Should I use oil in my air fryer?",
    answer: "While air fryers require significantly less oil than deep frying, a light coating of oil (using an oil sprayer) can enhance crispiness and prevent food from drying out. For naturally fatty foods like chicken wings or marinated meats, additional oil may not be necessary. We recommend using oils with high smoke points such as avocado oil, refined olive oil, or grapeseed oil."
  },
  {
    question: "How do I prevent my air fryer from smoking?",
    answer: "Smoking usually occurs when there's excess fat or oil accumulation at the bottom of the air fryer. To prevent smoking: 1) Add a tablespoon of water to the bottom drawer to prevent fat from overheating, 2) Clean your air fryer thoroughly between uses, 3) Trim excess fat from meats before cooking, 4) Avoid using oils with low smoke points, and 5) Don't overcrowd the basket which can cause food to cook in its own fat."
  },
  {
    question: "Can I put aluminum foil or parchment paper in my air fryer?",
    answer: "Yes, you can use aluminum foil or parchment paper in most air fryers, but with important precautions. Always place it in the basket, not on the bottom of the drawer, and ensure it doesn't block air circulation. Never preheat your air fryer with empty foil or parchment paper as they could fly up into the heating element. Special perforated parchment paper designed for air fryers is the safest option as it allows for proper air flow."
  }
];

const FAQSection = () => {
  return (
    <section className="section-container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get answers to the most common air fryer cooking questions.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

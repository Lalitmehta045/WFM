import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which locations do you currently serve?",
    answer:
      "We operate across major metropolitan and industrial centres in India. Coverage is regularly expanded—please contact our sales team or submit a query via the contact form to confirm service availability for your location.",
  },
  {
    question: "What differentiates Wipeout from other facility service providers?",
    answer:
      "Wipeout combines technology-led workflows, trained personnel and sustainable products to deliver consistent outcomes. Our Operational Excellence Model enforces standardized processes, safety compliance and measurable KPIs—backed by dedicated account management and quality audits.",
  },
  {
    question: "Can you tailor services to our facility's requirements?",
    answer:
      "Yes. We perform a site assessment to design a customised service plan that includes scope, frequency, SLAs and reporting. Quotes and schedules are prepared to meet your operational needs and budget constraints.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer:
      "Yes. We prioritise low-toxicity, biodegradable products that meet recognised safety standards. Product datasheets (MSDS) and compatibility guidance for sensitive environments are available on request.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto w-full overflow-x-hidden px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Clear, concise answers to commonly asked questions about our services, coverage and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 border-primary/10 rounded-lg px-3 sm:px-4 md:px-6 hover:border-primary/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

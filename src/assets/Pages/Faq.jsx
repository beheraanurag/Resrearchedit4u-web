import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqs from '../content/faqdata';

const Faq = () => {
  return (
    <div className="max-w-[800px] mx-auto px-2.5 mt-8">
      <h2 className="text-[2.2rem] font-serif text-[#0B2662] mb-10 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-300 rounded-lg mb-3 px-4 py-2.5 bg-gray-50">
            <AccordionTrigger className="font-semibold text-lg hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 pt-2.5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;

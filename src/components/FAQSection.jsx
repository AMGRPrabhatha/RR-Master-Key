import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    question: "How long does it take to import a vehicle from Japan?",
    answer: "Typically, the entire process from winning the auction in Japan to the vehicle arriving in Colombo takes about 4 to 6 weeks, depending on shipping schedules and customs clearance."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept secure Bank Transfers, Letters of Credit (L/C), and other standard corporate payment methods to ensure a transparent and safe transaction."
  },
  {
    question: "Do you handle all the customs clearing process?",
    answer: "Yes, our service is completely end-to-end. We handle all documentation, shipping, and customs clearance so you can simply receive your keys."
  },
  {
    question: "Are the Japanese auction grades reliable?",
    answer: "Absolutely. Japanese auction houses use very strict and standardized grading systems. We also perform our own secondary multi-point inspections before export."
  },
  {
    question: "Can I order a specific custom vehicle configuration?",
    answer: "Yes! Our specialized sourcing team can hunt down specific trims, colors, and rare JDM exclusive models directly from the auction network."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq-section">
      <div className="faq-left">
        <h2>
          <span className="faq-title-dark">Frequently Asked</span>
          <br/>
          <span className="faq-title-light">Question</span>
        </h2>
        <p>Find answers to the most common questions about our vehicle importing process, including bidding, payment, and delivery details.</p>
      </div>
      
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                {openIndex === index ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

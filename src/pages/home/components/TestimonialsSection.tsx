import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is TSCP confidential?',
      answer: 'Yes. TSCP provides confidential care and handles patient information privately.',
      link: '/get-help',
      linkText: 'Get Help'
    },
    {
      question: 'Do all locations have an onsite pharmacy?',
      answer: 'Yes. Each TSCP location includes both a clinic and an onsite pharmacy.',
      link: '/locations',
      linkText: 'View Locations'
    },
    {
      question: 'What is pharmacist prescribing?',
      answer: 'Pharmacist prescribing allows qualified pharmacists to assess and prescribe certain medications where permitted.',
      link: '/treatments/pharmacist-prescribing',
      linkText: 'Learn More'
    },
    {
      question: 'Do I need a referral?',
      answer: 'Referral requirements vary. Contact TSCP to discuss next steps.',
      link: '/contact',
      linkText: 'Contact Us'
    },
    {
      question: 'Which GTA locations do you have?',
      answer: 'TSCP operates clinics across North York, Thornhill, Scarborough, and Etobicoke in the Greater Toronto Area.',
      link: '/locations',
      linkText: 'View All Locations'
    },
    {
      question: 'What addiction treatment services are available?',
      answer: 'TSCP offers methadone treatment, suboxone treatment, kadain treatment, and support for quitting smoking and alcohol.',
      link: '/treatments/addiction-treatment',
      linkText: 'View Treatments'
    },
    {
      question: 'What mental health services do you provide?',
      answer: 'TSCP provides treatment for anxiety, depression, ADHD, insomnia, and other mental health conditions with professional clinical support.',
      link: '/treatments',
      linkText: 'View All Services'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Find answers to common questions about TSCP services, locations, and treatment options.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1" itemProp="name">
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <i className="ri-arrow-down-s-line text-2xl"></i>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 text-base leading-relaxed mb-4" itemProp="text">
                        {faq.answer}
                      </p>
                      <a
                        href={faq.link}
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors cursor-pointer group"
                      >
                        <span>{faq.linkText}</span>
                        <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            <span>Contact Us</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

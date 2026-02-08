import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function SuboxoneTreatmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Suboxone Treatment Toronto | TSCP Clinic-Based Suboxone Program';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'TSCP provides clinic-based Suboxone treatment for opioid addiction across the Greater Toronto Area with onsite pharmacy support. No referral required. Same-day appointments may be available.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'suboxone treatment Toronto, buprenorphine naloxone, suboxone clinic, opioid treatment, addiction treatment, onsite pharmacy, GTA suboxone program, same-day suboxone';
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = window.location.href;
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = currentUrl;
      document.head.appendChild(newCanonical);
    }

    const lastModified = document.querySelector('meta[name="last-modified"]');
    const modifiedDate = new Date().toISOString();
    if (lastModified) {
      lastModified.setAttribute('content', modifiedDate);
    } else {
      const newLastModified = document.createElement('meta');
      newLastModified.name = 'last-modified';
      newLastModified.content = modifiedDate;
      document.head.appendChild(newLastModified);
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Suboxone Treatment' }
  ];

  const schemaData = {
    type: 'MedicalWebPage' as const,
    name: 'Suboxone Treatment Services',
    description: 'TSCP provides clinic-based Suboxone treatment for opioid addiction across the Greater Toronto Area with onsite pharmacy support. No referral required.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=professional%20medical%20clinic%20healthcare%20provider%20discussing%20suboxone%20treatment%20with%20patient%20modern%20comfortable%20consultation%20room%20supportive%20clinical%20environment%20natural%20lighting%20organized%20medical%20space&width=1200&height=630&seq=suboxone-treatment-hero-003&orientation=landscape',
    provider: {
      name: 'Toronto Safe Clinics and Pharmacies',
      url: 'https://tscp.ca',
      telephone: '+1-416-555-0123',
      address: {
        streetAddress: '123 Medical Center Drive',
        addressLocality: 'Toronto',
        addressRegion: 'Ontario',
        postalCode: 'M5V 3A8',
        addressCountry: 'CA'
      }
    },
    breadcrumb: [
      { name: 'Home', item: window.location.origin },
      { name: 'Treatments', item: window.location.origin + '/treatments' },
      { name: 'Suboxone Treatment', item: window.location.href }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Is Suboxone treatment confidential?',
      answer: 'Yes. All Suboxone treatment at TSCP is confidential. Your personal information and treatment details are protected under healthcare privacy laws and handled with complete discretion.'
    },
    {
      question: 'Do I need a referral for Suboxone treatment?',
      answer: 'No referral is required. You can contact TSCP directly to discuss Suboxone treatment options and schedule an appointment.'
    },
    {
      question: 'Are same-day appointments available?',
      answer: 'Same-day or fast-access appointments may be available depending on clinic capacity and scheduling. Contact TSCP to check current availability.'
    },
    {
      question: 'Do all TSCP locations have an onsite pharmacy?',
      answer: 'Yes. Every TSCP location includes both a clinic and an onsite pharmacy, allowing for coordinated prescribing and dispensing in one convenient location.'
    },
    {
      question: 'How do I get started with Suboxone treatment?',
      answer: 'Contact TSCP directly by phone or through our online form. No referral is needed. Our team will discuss your needs and help schedule a clinical assessment.'
    }
  ];

  const locations = [
    { name: 'North York', path: '/locations/north-york' },
    { name: 'Thornhill', path: '/locations/thornhill' },
    { name: 'Scarborough', path: '/locations/scarborough' },
    { name: 'Etobicoke', path: '/locations/etobicoke' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Contact TSCP Directly',
      description: 'No referral is needed. Reach out by phone or online form.'
    },
    {
      number: '02',
      title: 'Same-Day or Fast-Access Appointment',
      description: 'Appointments may be available quickly, depending on scheduling.'
    },
    {
      number: '03',
      title: 'Clinical Assessment',
      description: 'Meet with our healthcare team to discuss your needs and options.'
    },
    {
      number: '04',
      title: 'Ongoing Care and Follow-Up',
      description: 'Receive continued support and monitoring throughout your treatment.'
    }
  ];

  const relatedTreatments = [
    { name: 'Addiction Treatment', path: '/treatments/addiction-treatment' },
    { name: 'Methadone Treatment', path: '/treatments/methadone-treatment' },
    { name: 'Kadain Treatment', path: '/treatments/kadain-treatment' },
    { name: 'Quit Alcohol Support', path: '/treatments/quit-alcohol' },
    { name: 'Quit Smoking Support', path: '/treatments/quit-smoking' }
  ];

  return (
    <div className="suboxone-treatment-page bg-white">
      <SEOSchema data={schemaData} />
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section 
        className="relative h-64 sm:h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://readdy.ai/api/search-image?query=professional%20medical%20clinic%20healthcare%20provider%20discussing%20suboxone%20treatment%20with%20patient%20modern%20comfortable%20consultation%20room%20supportive%20clinical%20environment%20natural%20lighting%20organized%20medical%20space&width=1920&height=600&seq=suboxone-treatment-hero-004&orientation=landscape)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-white">
          {/* Desktop Breadcrumb */}
          <nav className="hidden sm:block mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>

          {/* Mobile Breadcrumb */}
          <nav className="sm:hidden mb-4" aria-label="Breadcrumb">
            <Link 
              to="/treatments" 
              className="inline-flex items-center text-white/90 hover:text-white text-sm transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Treatments
            </Link>
          </nav>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Suboxone Treatment Services
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
            TSCP provides clinic-based Suboxone treatment for opioid addiction across the Greater Toronto Area with onsite pharmacy support. No referral is required, and same-day or fast-access appointments may be available.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN - Main Content */}
            <article className="lg:col-span-2 space-y-12">
              
              {/* Section 1 - What Is Suboxone Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Is Suboxone Treatment?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Suboxone is a combination medication containing buprenorphine and naloxone. It is used as part of medically supervised treatment for opioid addiction. Suboxone helps reduce cravings and withdrawal symptoms while supporting recovery and stabilization. At TSCP, Suboxone treatment is provided in a clinical setting with ongoing medical supervision.
                </p>
              </section>

              {/* Section 2 - Who Suboxone Treatment May Be For */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Who Suboxone Treatment May Be For
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Individuals with opioid dependence</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">People seeking clinic-based treatment</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Those who may benefit from structured medical support</p>
                  </li>
                </ul>
              </section>

              {/* Section 3 - How TSCP Provides Suboxone Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  How TSCP Provides Suboxone Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Clinical assessment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Confidential care</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Ongoing monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Onsite pharmacy coordination</p>
                  </div>
                </div>
              </section>

              {/* Section 4 - Clinic + Pharmacy */}
              <section className="bg-[#F8F6F3] p-6 sm:p-8 rounded-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Clinic Care With Onsite Pharmacy Support
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Each TSCP location includes both a clinic and an onsite pharmacy. This allows for coordinated prescribing and dispensing in one convenient location, making treatment more accessible and streamlined for patients.
                </p>
              </section>

              {/* Section 5 - What to Expect */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  What to Expect
                </h2>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center bg-[#8B7355] text-white rounded-lg font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 - Locations */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Our Clinic Locations
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  TSCP offers Suboxone treatment services across four GTA locations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {locations.map((location, index) => (
                    <Link
                      key={index}
                      to={location.path}
                      className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-[#8B7355] rounded-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <i className="ri-map-pin-line text-[#8B7355] text-2xl"></i>
                        </div>
                        <span className="font-semibold text-gray-900 group-hover:text-[#8B7355]">
                          {location.name}
                        </span>
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 group-hover:text-[#8B7355] text-xl"></i>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 7 - FAQs */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  {faqItems.map((item, index) => (
                    <article 
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#8B7355] transition-all duration-300 shadow-sm hover:shadow-md"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-5 sm:p-6 text-left hover:bg-[#F8F6F3] transition-colors cursor-pointer"
                        aria-expanded={openFaqIndex === index}
                      >
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4 flex-1" itemProp="name">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#8B7355] rounded-full">
                          <i 
                            className={`text-white text-xl transition-transform duration-300 ${
                              openFaqIndex === index ? 'ri-subtract-line' : 'ri-add-line'
                            }`}
                          ></i>
                        </div>
                      </button>
                      {openFaqIndex === index && (
                        <div 
                          className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-gray-200 bg-[#F8F6F3]/50"
                          itemScope 
                          itemProp="acceptedAnswer" 
                          itemType="https://schema.org/Answer"
                        >
                          <p className="text-gray-700 leading-relaxed" itemProp="text">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>

            </article>

            {/* RIGHT COLUMN - Sticky Sidebar (Desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                
                {/* Card 1 - Get Help */}
                <div className="bg-[#F8F6F3] p-6 rounded-lg shadow-lg">
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    Get Help With Suboxone Treatment
                  </h2>
                  <p className="text-sm text-gray-700 mb-6">
                    TSCP offers same-day or fast-access appointments for Suboxone treatment depending on availability. No referral is required. Care is confidential and provided in a clinic setting with onsite pharmacy support.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-[#8B7355] mt-0.5"></i>
                      <span><strong>Same-day treatment options available*</strong></span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-[#8B7355] mt-0.5"></i>
                      <span>Same-day or fast-access appointments</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-[#8B7355] mt-0.5"></i>
                      <span>No referral required</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-[#8B7355] mt-0.5"></i>
                      <span>Confidential clinic care</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">*Availability-based</p>

                  {/* Primary CTA */}
                  <Link
                    to="/get-help"
                    className="flex items-center justify-center gap-2 w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Get Help Today
                  </Link>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Submitting this request does not commit you to treatment.
                  </p>
                </div>

                {/* Card 2 - Related Treatments */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Related Treatment Options
                  </h2>
                  <nav className="space-y-2">
                    {relatedTreatments.map((treatment, index) => (
                      <Link
                        key={index}
                        to={treatment.path}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-[#8B7355] hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{treatment.name}</span>
                          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/treatments"
                      className="block p-3 text-center text-[#8B7355] hover:text-[#6d5a43] font-semibold text-sm cursor-pointer"
                    >
                      View all treatments →
                    </Link>
                  </nav>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <Link
          to="/get-help"
          className="block w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors text-center cursor-pointer whitespace-nowrap"
        >
          Get Help
        </Link>
      </div>

      <Footer />
    </div>
  );
}

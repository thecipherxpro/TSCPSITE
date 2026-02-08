import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function MethadoneTreatmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Methadone Treatment Toronto | TSCP Clinic-Based Methadone Program';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'TSCP provides clinic-based methadone treatment for opioid addiction across the Greater Toronto Area with onsite pharmacy support. No referral required. Same-day or fast-access appointments may be available.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'methadone treatment Toronto, methadone clinic GTA, opioid addiction treatment, methadone program, onsite pharmacy, no referral required, same-day methadone treatment';
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
    { label: 'Methadone Treatment' }
  ];

  const schemaData = {
    type: 'MedicalWebPage' as const,
    name: 'Methadone Treatment Services',
    description: 'TSCP provides clinic-based methadone treatment for opioid addiction across the Greater Toronto Area with onsite pharmacy support at every location.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=professional%20healthcare%20clinic%20consultation%20room%20medical%20provider%20discussing%20treatment%20plan%20with%20patient%20comfortable%20supportive%20environment%20modern%20medical%20facility%20clean%20organized%20space%20natural%20lighting%20compassionate%20care%20setting&width=1200&height=630&seq=methadone-hero-main-001&orientation=landscape',
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
      { name: 'Methadone Treatment', item: window.location.href }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Is methadone treatment confidential?',
      answer: 'Yes. All methadone treatment at TSCP is confidential. Your personal information and treatment details are protected under healthcare privacy laws.'
    },
    {
      question: 'Do I need a referral for methadone treatment?',
      answer: 'No referral is required. You can contact TSCP directly to discuss methadone treatment options and schedule an appointment.'
    },
    {
      question: 'Are same-day appointments available?',
      answer: 'Same-day or fast-access appointments may be available depending on clinic capacity and scheduling. Contact TSCP to check current availability.'
    },
    {
      question: 'Do all TSCP locations have an onsite pharmacy?',
      answer: 'Yes. Each TSCP location includes both a clinic and an onsite pharmacy, allowing for coordinated prescribing and dispensing in one convenient location.'
    },
    {
      question: 'How do I get started with methadone treatment?',
      answer: 'Contact TSCP directly by phone or through the website. You will receive a clinical assessment, and if appropriate, treatment can begin. No referral is needed.'
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
      description: 'No referral needed. Call or submit a request online.',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Same-Day or Fast-Access Appointment',
      description: 'Appointments may be available quickly, depending on scheduling.',
      icon: 'ri-calendar-check-line'
    },
    {
      number: '03',
      title: 'Clinical Assessment',
      description: 'Meet with a healthcare provider for evaluation and treatment planning.',
      icon: 'ri-stethoscope-line'
    },
    {
      number: '04',
      title: 'Ongoing Treatment and Follow-Up',
      description: 'Regular monitoring and support throughout your treatment journey.',
      icon: 'ri-heart-pulse-line'
    }
  ];

  const relatedTreatments = [
    { name: 'Addiction Treatment', path: '/treatments/addiction-treatment' },
    { name: 'Suboxone Treatment', path: '/treatments/suboxone-treatment' },
    { name: 'Kadain Treatment', path: '/treatments/kadain-treatment' },
    { name: 'Quit Alcohol Support', path: '/treatments/quit-alcohol' },
    { name: 'Quit Smoking Support', path: '/treatments/quit-smoking' }
  ];

  return (
    <div className="methadone-treatment-page bg-white">
      <SEOSchema data={schemaData} />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=professional%20healthcare%20clinic%20consultation%20room%20medical%20provider%20discussing%20treatment%20plan%20with%20patient%20comfortable%20supportive%20environment%20modern%20medical%20facility%20clean%20organized%20space%20natural%20lighting%20compassionate%20care%20setting&width=1920&height=600&seq=methadone-hero-main-002&orientation=landscape)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white py-12 sm:py-16">
          <div className="hidden sm:block mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="sm:hidden mb-4">
            <Link 
              to="/treatments" 
              className="inline-flex items-center text-white/90 hover:text-white text-sm transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Treatments
            </Link>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Methadone Treatment Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto px-4 mb-6 sm:mb-8 leading-relaxed">
            TSCP provides clinic-based methadone treatment for opioid addiction across the Greater Toronto Area, with onsite pharmacy support at every location. No referral is required, and same-day or fast-access appointments may be available.
          </p>
          <Link
            to="/get-help"
            className="inline-flex items-center justify-center bg-[#8B7355] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors cursor-pointer whitespace-nowrap text-base sm:text-lg"
          >
            Get Help With Methadone Treatment
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN - SCROLLABLE MAIN CONTENT */}
            <article className="lg:col-span-2 space-y-12">
              
              {/* Section 1 - What Is Methadone Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Is Methadone Treatment?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Methadone is a medication used in the treatment of opioid addiction. It is provided under medical supervision as part of a structured treatment program.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Methadone treatment helps reduce cravings and withdrawal symptoms, allowing individuals to focus on recovery and stabilizing their lives. At TSCP, methadone treatment is provided in a clinical setting with ongoing medical monitoring.
                </p>
              </section>

              {/* Section 2 - Who Methadone Treatment May Be For */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Who Methadone Treatment May Be For
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Individuals with opioid dependence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">People seeking structured medical treatment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Those who benefit from regular clinic care</p>
                  </div>
                </div>
              </section>

              {/* Section 3 - How TSCP Provides Methadone Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  How TSCP Provides Methadone Treatment
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
                    <p className="text-gray-700">Ongoing monitoring</p>
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
                    <p className="text-gray-700">Onsite pharmacy coordination</p>
                  </div>
                </div>
              </section>

              {/* Section 4 - Clinic and Onsite Pharmacy Care */}
              <section className="bg-[#F8F6F3] p-6 sm:p-8 rounded-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Clinic Care With Onsite Pharmacy Support
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Each TSCP location includes both a clinic and an onsite pharmacy. This integrated approach allows for coordinated prescribing and dispensing in one convenient location.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Having the clinic and pharmacy together means your treatment and medication management are handled seamlessly, reducing the need to visit multiple locations.
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
                        <div className="w-16 h-16 flex items-center justify-center bg-[#8B7355] text-white rounded-lg">
                          <i className={`${step.icon} text-2xl`}></i>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="text-sm font-semibold text-[#8B7355] mb-1">{step.number}</div>
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
                  TSCP offers methadone treatment services across four GTA locations, each with an onsite pharmacy.
                </p>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </nav>
              </section>

              {/* Section 7 - FAQs */}
              <section itemScope itemType="https://schema.org/FAQPage">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
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

            {/* RIGHT COLUMN - STICKY PANEL */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                
                {/* CARD 1 - GET HELP (PRIMARY) */}
                <div className="bg-[#F8F6F3] p-6 rounded-lg shadow-lg border-2 border-[#8B7355]/20">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    Get Help With Methadone Treatment
                  </h3>
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    TSCP offers same-day or fast-access appointments for methadone treatment, depending on availability. No referral is required. Care is confidential and provided in a clinic setting with onsite pharmacy support.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-time-line text-[#8B7355]"></i>
                      <span><strong>Same-day treatment options available*</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-calendar-check-line text-[#8B7355]"></i>
                      <span>Same-day or fast-access appointments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-file-forbid-line text-[#8B7355]"></i>
                      <span>No referral required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-shield-check-line text-[#8B7355]"></i>
                      <span>Confidential clinic care</span>
                    </div>
                  </div>

                  <Link
                    to="/get-help"
                    className="flex items-center justify-center gap-2 w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors cursor-pointer whitespace-nowrap mb-3"
                  >
                    <i className="ri-heart-pulse-line text-xl"></i>
                    Get Help Today
                  </Link>

                  <p className="text-xs text-gray-500 text-center italic">
                    *Availability-based. Submitting this request does not commit you to treatment.
                  </p>
                </div>

                {/* CARD 2 - RELATED TREATMENTS */}
                <nav className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Related Treatment Options
                  </h3>
                  <div className="space-y-2">
                    {relatedTreatments.map((treatment, index) => (
                      <Link
                        key={index}
                        to={treatment.path}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-[#8B7355] hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{treatment.name}</span>
                          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/treatments"
                    className="block mt-4 pt-4 border-t border-gray-200 text-center text-[#8B7355] hover:text-[#6d5a43] font-semibold text-sm cursor-pointer"
                  >
                    View all treatments →
                  </Link>
                </nav>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#8B7355] p-4 shadow-lg z-40">
        <Link
          to="/get-help"
          className="flex items-center justify-center gap-2 w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-heart-pulse-line text-xl"></i>
          Get Help
        </Link>
      </div>

      <Footer />
    </div>
  );
}

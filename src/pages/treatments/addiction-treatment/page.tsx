import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function AddictionTreatmentPage() {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // SEO Meta tags
    document.title = 'Addiction Treatment Services Toronto | TSCP Clinic-Based Care';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'TSCP provides clinic-based addiction treatment with onsite pharmacy support across the Greater Toronto Area. Confidential, respectful care including methadone, suboxone, and comprehensive addiction support services. Medical assessment-based treatment plans.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'addiction treatment Toronto, substance abuse treatment, methadone clinic, suboxone treatment, addiction recovery, onsite pharmacy, confidential addiction care, GTA addiction services, quit smoking, quit alcohol';
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
    { label: 'Treatments', path: '/treatments' },
    { label: 'Addiction Treatment' }
  ];

  const schemaData = {
    type: 'MedicalWebPage' as const,
    name: 'Addiction Treatment Services',
    description: 'TSCP provides clinic-based addiction treatment with onsite pharmacy support across the Greater Toronto Area. Confidential, respectful care based on medical assessment.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=professional%20compassionate%20therapist%20counseling%20patient%20in%20modern%20comfortable%20therapy%20office%20setting%20warm%20supportive%20atmosphere%20person%20receiving%20addiction%20treatment%20guidance%20peaceful%20healing%20environment%20natural%20lighting&width=1200&height=630&seq=addiction-treatment-hero-001&orientation=landscape',
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
      { name: 'Addiction Treatment', item: window.location.href }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Is addiction treatment confidential?',
      answer: 'Yes. Addiction treatment at TSCP is confidential. All conversations, appointments, and personal information are handled privately and respectfully in accordance with healthcare privacy standards. Only authorized clinic staff are involved in your care.'
    },
    {
      question: 'Do I need a referral to start addiction treatment?',
      answer: 'No referral is needed. You can contact TSCP directly to request help. Our clinics accept self-referrals, which means you do not need to see another doctor or provider before reaching out.'
    },
    {
      question: 'Can I get a same-day appointment?',
      answer: 'In many cases, yes. TSCP offers same-day or fast access appointments, depending on availability and location. Contact the clinic as early as possible to discuss appointment options.'
    },
    {
      question: 'What types of addiction treatment are available?',
      answer: 'Treatment options are discussed after a clinical assessment and may include medically supervised care such as Methadone, Suboxone, Kadain, and support for quitting alcohol or smoking, when clinically appropriate.'
    },
    {
      question: 'Do all TSCP locations have an onsite pharmacy?',
      answer: 'Yes. Every TSCP location includes both a clinic and an onsite pharmacy. This allows treatment and prescriptions to be coordinated in one place, making care more convenient.'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d5t4dmg396gdsp2ho06g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => {
          setFormStatus('idle');
          setIsMobileFormOpen(false);
        }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsFormSubmitting(false);
    }
  };

  const treatmentOptions = [
    {
      title: 'Methadone Treatment',
      path: '/treatments/methadone-treatment',
      icon: 'ri-medicine-bottle-line'
    },
    {
      title: 'Suboxone Treatment',
      path: '/treatments/suboxone-treatment',
      icon: 'ri-capsule-line'
    },
    {
      title: 'Kadain Treatment',
      path: '/treatments/kadain-treatment',
      icon: 'ri-syringe-line'
    },
    {
      title: 'Support for Quitting Smoking',
      path: '/treatments/quit-smoking',
      icon: 'ri-smoke-line'
    },
    {
      title: 'Support for Quitting Alcohol',
      path: '/treatments/quit-alcohol',
      icon: 'ri-goblet-line'
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
      title: 'Contact TSCP',
      description: 'Reach out by phone or form',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Private Conversation',
      description: 'Speak with clinic staff confidentially',
      icon: 'ri-chat-3-line'
    },
    {
      number: '03',
      title: 'Clinical Assessment',
      description: 'Discussion of options and needs',
      icon: 'ri-stethoscope-line'
    },
    {
      number: '04',
      title: 'Ongoing Care',
      description: 'Follow-up and continued support',
      icon: 'ri-heart-pulse-line'
    }
  ];

  return (
    <div className="addiction-treatment-page bg-white">
      <SEOSchema data={schemaData} />
      <Header />

      {/* Hero Section with Breadcrumb - FIXED */}
      <section className="relative w-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=professional%20compassionate%20therapist%20counseling%20patient%20in%20modern%20comfortable%20therapy%20office%20setting%20warm%20supportive%20atmosphere%20person%20receiving%20addiction%20treatment%20guidance%20peaceful%20healing%20environment%20natural%20lighting&width=1920&height=600&seq=addiction-treatment-hero-002&orientation=landscape)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center text-white relative z-10 py-12 sm:py-16">
          {/* Desktop Breadcrumb */}
          <div className="hidden sm:block mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Mobile Breadcrumb */}
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
            Addiction Treatment Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto px-4 mb-6 sm:mb-8 leading-relaxed">
            TSCP provides clinic-based addiction treatment with onsite pharmacy support across the Greater Toronto Area. Care is confidential, respectful, and based on medical assessment.
          </p>
          <Link
            to="/get-help"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap text-base sm:text-lg"
          >
            Get Help With Addiction Treatment
          </Link>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN - Main Content */}
            <article className="lg:col-span-2 space-y-12">
              
              {/* Section 1 - What Is Addiction Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Is Addiction Treatment?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Addiction treatment focuses on helping individuals reduce or stop substance use through medical care and professional support. At TSCP, treatment plans are based on individual needs and delivered in a safe clinical environment.
                </p>
              </section>

              {/* Section 2 - How TSCP Can Help */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  How TSCP Supports Addiction Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Private clinic consultations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Medically supervised treatment options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Onsite pharmacy support at each location</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Ongoing care and follow-up</p>
                  </div>
                </div>
              </section>

              {/* Section 3 - Treatment Options */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Treatment Options
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  Treatment options are discussed after clinical assessment and may include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatmentOptions.map((option, index) => (
                    <Link
                      key={index}
                      to={option.path}
                      className="group flex items-center gap-4 p-4 bg-soft-bg hover:bg-primary rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-white group-hover:bg-white/20 rounded-lg transition-colors">
                        <i className={`${option.icon} text-primary group-hover:text-white text-2xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                          {option.title}
                        </h3>
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 group-hover:text-white text-xl"></i>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 4 - Clinic + Pharmacy */}
              <section className="bg-soft-bg p-6 sm:p-8 rounded-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Clinic Care With Onsite Pharmacy Support
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Each TSCP location includes both a clinic and an onsite pharmacy. This allows treatment and prescriptions to be coordinated in one place, helping make care easier and more accessible.
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
                        <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-lg">
                          <i className={`${step.icon} text-2xl`}></i>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="text-sm font-semibold text-primary mb-1">{step.number}</div>
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
                  TSCP offers addiction treatment services across four GTA locations.
                </p>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {locations.map((location, index) => (
                    <Link
                      key={index}
                      to={location.path}
                      className="flex items-center justify-between p-4 border-2 border-border-light hover:border-primary rounded-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <i className="ri-map-pin-line text-primary text-2xl"></i>
                        </div>
                        <span className="font-semibold text-gray-900 group-hover:text-primary">
                          {location.name}
                        </span>
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 group-hover:text-primary text-xl"></i>
                    </Link>
                  ))}
                </nav>
              </section>

              {/* Section 7 - FAQs */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Common Questions About Addiction Treatment
                </h2>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  {faqItems.map((item, index) => (
                    <article 
                      key={index}
                      className="bg-white border-2 border-border-light rounded-lg overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-5 sm:p-6 text-left hover:bg-soft-bg transition-colors cursor-pointer"
                        aria-expanded={openFaqIndex === index}
                      >
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 pr-4 flex-1" itemProp="name">
                          {item.question}
                        </h4>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary rounded-full">
                          <i 
                            className={`text-white text-xl transition-transform duration-300 ${
                              openFaqIndex === index ? 'ri-subtract-line' : 'ri-add-line'
                            }`}
                          ></i>
                        </div>
                      </button>
                      {openFaqIndex === index && (
                        <div 
                          className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-border-light bg-soft-bg/50"
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

            {/* RIGHT COLUMN - Sticky Lead Panel (Desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-soft-bg p-6 rounded-lg shadow-lg border-2 border-primary/20">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    Get Help With Addiction Treatment
                  </h3>
                  <p className="text-sm text-gray-700 mb-6">
                    Confidential support is available. Speak with our clinic team to discuss next steps.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-time-line text-primary"></i>
                      <span><strong>Same-day treatment options available*</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-calendar-check-line text-primary"></i>
                      <span>Same-day or fast-access appointments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-file-forbid-line text-primary"></i>
                      <span>No referral required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-shield-check-line text-primary"></i>
                      <span>Confidential clinic care</span>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href="tel:+14165550123"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors mb-4 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    Call Now
                  </a>

                  <div className="text-center text-sm text-gray-500 mb-4">OR</div>

                  {/* Lead Form */}
                  <form 
                    id="addiction-treatment-form"
                    data-readdy-form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <select
                        name="preferredLocation"
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-700"
                      >
                        <option value="">Preferred Location (optional)</option>
                        <option value="North York">North York</option>
                        <option value="Thornhill">Thornhill</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="Etobicoke">Etobicoke</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isFormSubmitting}
                      className="w-full bg-secondary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isFormSubmitting ? 'Submitting...' : 'Request Help'}
                    </button>

                    {formStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                        Thank you! We'll contact you soon.
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center italic">
                      *Availability-based. Submitting this request does not commit you to treatment.
                    </p>
                  </form>

                  {/* Trust Notes */}
                  <div className="mt-6 pt-6 border-t border-border-light space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-shield-check-line text-primary"></i>
                      <span>Confidential care</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-hospital-line text-primary"></i>
                      <span>Licensed clinic environment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-medicine-bottle-line text-primary"></i>
                      <span>Onsite pharmacy support</span>
                    </div>
                  </div>
                </div>

                {/* Related Treatments Card */}
                <nav className="bg-white p-6 rounded-lg shadow-md border border-border-light">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Related Treatment Options
                  </h3>
                  <div className="space-y-2">
                    {treatmentOptions.map((treatment, index) => (
                      <Link
                        key={index}
                        to={treatment.path}
                        className="block p-3 bg-soft-bg rounded-lg hover:bg-primary hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{treatment.title}</span>
                          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/treatments"
                    className="block mt-4 pt-4 border-t border-border-light text-center text-primary hover:text-secondary font-semibold text-sm cursor-pointer"
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary p-4 shadow-lg z-40">
        <button
          onClick={() => setIsMobileFormOpen(true)}
          className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap"
        >
          Get Help Now
        </button>
      </div>

      {/* Mobile Form Modal */}
      {isMobileFormOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-border-light p-4 flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Get Help With Addiction Treatment
              </h3>
              <button
                onClick={() => setIsMobileFormOpen(false)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-700 mb-6">
                Confidential support is available. Speak with our clinic team to discuss next steps.
              </p>

              {/* Primary CTA */}
              <a
                href="tel:+14165550123"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors mb-4 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-xl"></i>
                Call Now
              </a>

              <div className="text-center text-sm text-gray-500 mb-4">OR</div>

              {/* Lead Form */}
              <form 
                id="addiction-treatment-form-mobile"
                data-readdy-form
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <select
                    name="preferredLocation"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-gray-700"
                  >
                    <option value="">Preferred Location (optional)</option>
                    <option value="North York">North York</option>
                    <option value="Thornhill">Thornhill</option>
                    <option value="Scarborough">Scarborough</option>
                    <option value="Etobicoke">Etobicoke</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-secondary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isFormSubmitting ? 'Submitting...' : 'Request Help'}
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                    Thank you! We'll contact you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Submitting this form does not commit you to treatment.
                </p>
              </form>

              {/* Trust Notes */}
              <div className="mt-6 pt-6 border-t border-border-light space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-shield-check-line text-primary"></i>
                  <span>Confidential care</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-hospital-line text-primary"></i>
                  <span>Licensed clinic environment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-medicine-bottle-line text-primary"></i>
                  <span>Onsite pharmacy support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function KadainTreatmentPage() {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Kadain Treatment Toronto | TSCP Clinic-Based Kadain Program';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'TSCP provides clinic-based Kadain treatment with onsite pharmacy support across the Greater Toronto Area. Medically supervised slow-release morphine therapy for opioid use disorder. Confidential, respectful care with ongoing clinical support.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'kadain treatment Toronto, slow release morphine, kadain clinic, opioid treatment, addiction treatment, onsite pharmacy, GTA kadain program, confidential kadain care';
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
    { label: 'Kadain Treatment' }
  ];

  const schemaData = {
    type: 'MedicalWebPage' as const,
    name: 'Kadain Treatment Services',
    description: 'TSCP provides clinic-based Kadain treatment with onsite pharmacy support across the Greater Toronto Area. Medically supervised care for opioid use disorder.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=professional%20medical%20clinic%20healthcare%20provider%20discussing%20treatment%20with%20patient%20modern%20comfortable%20consultation%20room%20supportive%20clinical%20environment%20natural%20lighting%20organized%20medical%20space&width=1200&height=630&seq=kadain-treatment-hero-001&orientation=landscape',
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
      { name: 'Kadain Treatment', item: window.location.href }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is Kadain treatment?',
      answer: 'Kadain is a slow-release morphine medication used to treat opioid use disorder. It provides steady medication levels throughout the day, helping to reduce cravings and withdrawal symptoms while supporting recovery and stabilization.'
    },
    {
      question: 'How is Kadain different from other treatments?',
      answer: 'Kadain is a slow-release formulation that provides consistent medication levels over 24 hours. Your healthcare provider will discuss whether Kadain or another treatment option is most appropriate based on your individual clinical assessment.'
    },
    {
      question: 'Is Kadain treatment confidential?',
      answer: 'Yes. All Kadain treatment at TSCP is confidential. Your personal information and treatment details are protected under healthcare privacy laws and handled with complete discretion.'
    },
    {
      question: 'How long does Kadain treatment last?',
      answer: 'The duration of Kadain treatment varies based on individual needs and clinical assessment. Some individuals may require short-term treatment, while others benefit from longer-term maintenance therapy. Your treatment plan is personalized.'
    },
    {
      question: 'Do I need to visit the clinic daily?',
      answer: 'Initially, more frequent visits may be required for medication dispensing and monitoring. As treatment progresses and stability is achieved, the frequency of visits may be adjusted based on clinical assessment and regulations.'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d5u5fm9dkj8fk0537os0', {
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

  const locations = [
    { name: 'North York', path: '/locations/north-york' },
    { name: 'Thornhill', path: '/locations/thornhill' },
    { name: 'Scarborough', path: '/locations/scarborough' },
    { name: 'Etobicoke', path: '/locations/etobicoke' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Contact',
      description: 'Call or submit a form to speak with our team',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Clinical Assessment',
      description: 'Meet with a healthcare provider for evaluation',
      icon: 'ri-stethoscope-line'
    },
    {
      number: '03',
      title: 'Treatment Plan',
      description: 'Receive a personalized Kadain treatment plan',
      icon: 'ri-file-list-3-line'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Regular monitoring and adjustments as needed',
      icon: 'ri-heart-pulse-line'
    }
  ];

  return (
    <div className="kadain-treatment-page bg-white">
      <SEOSchema data={schemaData} />
      <Header />

      <section 
        className="relative h-64 sm:h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://readdy.ai/api/search-image?query=professional%20medical%20clinic%20healthcare%20provider%20discussing%20treatment%20with%20patient%20modern%20comfortable%20consultation%20room%20supportive%20clinical%20environment%20natural%20lighting%20organized%20medical%20space&width=1920&height=600&seq=kadain-treatment-hero-002&orientation=landscape)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-white">
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

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Kadain Treatment Services
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
            TSCP provides clinic-based Kadain treatment with onsite pharmacy support. Medically supervised care for opioid use disorder in a confidential, respectful environment.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Is Kadain Treatment?
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Kadain is a slow-release morphine medication used to treat opioid use disorder. It provides steady medication levels throughout the day, helping to reduce cravings and withdrawal symptoms while supporting recovery and stabilization.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  At TSCP, Kadain treatment is provided in a clinical setting with ongoing medical supervision. Each treatment plan is individualized based on clinical assessment and patient needs.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  How TSCP Supports Kadain Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Medically supervised treatment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Onsite pharmacy at each location</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">24-hour slow-release formulation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#8B7355] text-xl"></i>
                    </div>
                    <p className="text-gray-700">Confidential and respectful care</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F6F3] p-6 sm:p-8 rounded-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Clinic Care With Onsite Pharmacy Support
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Each TSCP location includes both a clinic and an onsite pharmacy. This integrated approach allows for coordinated care, with your treatment and medication dispensing managed in one convenient location.
                </p>
              </div>

              <div>
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
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Our Clinic Locations
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  TSCP offers Kadain treatment services across four GTA locations.
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
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Common Questions About Kadain Treatment
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
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 pr-4 flex-1" itemProp="name">
                          {item.question}
                        </h4>
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
              </div>

            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-[#F8F6F3] p-6 rounded-lg shadow-lg">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    Get Help With Kadain Treatment
                  </h3>
                  <p className="text-sm text-gray-700 mb-6">
                    Confidential support is available. Speak with our clinic team to discuss next steps.
                  </p>

                  <a
                    href="tel:+14165550123"
                    className="flex items-center justify-center gap-2 w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors mb-4 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    Call Now
                  </a>

                  <div className="text-center text-sm text-gray-500 mb-4">OR</div>

                  <form 
                    id="kadain-treatment-form"
                    data-readdy-form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <input type="text" name="firstName" placeholder="First Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                    <input type="text" name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                    <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                    <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                    <select name="preferredLocation" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm text-gray-700">
                      <option value="">Preferred Location (optional)</option>
                      <option value="North York">North York</option>
                      <option value="Thornhill">Thornhill</option>
                      <option value="Scarborough">Scarborough</option>
                      <option value="Etobicoke">Etobicoke</option>
                    </select>

                    <button type="submit" disabled={isFormSubmitting} className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
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

                  <div className="mt-6 pt-6 border-t border-gray-300 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-shield-check-line text-[#8B7355]"></i>
                      <span>Confidential care</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-hospital-line text-[#8B7355]"></i>
                      <span>Licensed clinic environment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-medicine-bottle-line text-[#8B7355]"></i>
                      <span>Onsite pharmacy support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <button onClick={() => setIsMobileFormOpen(true)} className="w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors cursor-pointer whitespace-nowrap">
          Get Help Now
        </button>
      </div>

      {isMobileFormOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-gray-900">Get Help With Kadain Treatment</h3>
              <button onClick={() => setIsMobileFormOpen(false)} className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-700 mb-6">Confidential support is available. Speak with our clinic team to discuss next steps.</p>
              <a href="tel:+14165550123" className="flex items-center justify-center gap-2 w-full bg-[#8B7355] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6d5a43] transition-colors mb-4 cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line text-xl"></i>
                Call Now
              </a>
              <div className="text-center text-sm text-gray-500 mb-4">OR</div>
              <form id="kadain-treatment-form-mobile" data-readdy-form onSubmit={handleFormSubmit} className="space-y-4">
                <input type="text" name="firstName" placeholder="First Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                <input type="text" name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm" />
                <select name="preferredLocation" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] text-sm text-gray-700">
                  <option value="">Preferred Location (optional)</option>
                  <option value="North York">North York</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Scarborough">Scarborough</option>
                  <option value="Etobicoke">Etobicoke</option>
                </select>
                <button type="submit" disabled={isFormSubmitting} className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
                  {isFormSubmitting ? 'Submitting...' : 'Request Help'}
                </button>
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">Thank you! We'll contact you soon.</div>
                )}
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">Something went wrong. Please try again.</div>
                )}
                <p className="text-xs text-gray-500 text-center">Submitting this form does not commit you to treatment.</p>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-300 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-shield-check-line text-[#8B7355]"></i>
                  <span>Confidential care</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-hospital-line text-[#8B7355]"></i>
                  <span>Licensed clinic environment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-medicine-bottle-line text-[#8B7355]"></i>
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

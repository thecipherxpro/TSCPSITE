import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function GetHelpAddictionTreatmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    additionalInfo: ''
  });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Get Help With Addiction Treatment | TSCP Toronto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'Request confidential addiction treatment support from TSCP. No referral required. Same-day or fast-access appointments may be available across the Greater Toronto Area.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'addiction treatment help, get addiction help Toronto, addiction support GTA, same-day addiction treatment, confidential addiction care, MAT treatment, medication-assisted treatment';
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
    { label: 'Get Help', path: '/get-help' },
    { label: 'Addiction Treatment' }
  ];

  const schemaData = {
    type: 'MedicalWebPage' as const,
    name: 'Get Help With Addiction Treatment',
    description: 'Request confidential addiction treatment support from TSCP. No referral required. Same-day or fast-access appointments may be available.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=compassionate%20healthcare%20professional%20welcoming%20patient%20into%20modern%20bright%20medical%20clinic%20comfortable%20reception%20area%20supportive%20environment%20natural%20lighting%20professional%20medical%20setting%20warm%20inviting%20atmosphere&width=1200&height=630&seq=get-help-addiction-hero-001&orientation=landscape',
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
      { name: 'Get Help', item: window.location.origin + '/get-help' },
      { name: 'Addiction Treatment', item: window.location.href }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'additionalInfo') {
      if (value.length <= 500) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSubmit = new FormData(formElement);
      
      const response = await fetch('https://readdy.ai/api/form/d5uigkhdkj8fk0537tv0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSubmit as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          location: '',
          additionalInfo: ''
        });
        setCharCount(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      title: 'Fill out the form or call TSCP directly',
      icon: 'ri-hand-heart-line'
    },
    {
      title: 'Visit one of our 4 GTA clinic locations',
      icon: 'ri-hospital-line'
    },
    {
      title: 'Same-day clinical evaluation when available',
      icon: 'ri-stethoscope-line'
    },
    {
      title: 'Personalized treatment plan often created same day',
      icon: 'ri-file-list-3-line'
    },
    {
      title: 'Get medication at our onsite pharmacy if prescribed',
      icon: 'ri-medicine-bottle-line'
    }
  ];

  const treatmentServices = [
    { name: 'Medication-Assisted Treatment (MAT)', path: '/treatments/addiction-treatment' },
    { name: 'Methadone Treatment', path: '/treatments/methadone-treatment' },
    { name: 'Suboxone Treatment', path: '/treatments/suboxone-treatment' },
    { name: 'Kadain Treatment', path: '/treatments/kadain-treatment' },
    { name: 'Quit Alcohol Support', path: '/treatments/quit-alcohol' },
    { name: 'Quit Smoking Support', path: '/treatments/quit-smoking' }
  ];

  const faqItems = [
    {
      question: 'Is addiction treatment confidential?',
      answer: 'Yes. All addiction treatment at TSCP is completely confidential. Your personal information and treatment details are protected under healthcare privacy laws and handled with complete discretion.'
    },
    {
      question: 'Do I need a referral?',
      answer: 'No. You do not need a referral to access addiction treatment services at TSCP. You can contact us directly to discuss your needs and schedule an appointment.'
    },
    {
      question: 'Are same-day appointments available?',
      answer: 'Same-day or fast-access appointments may be available depending on clinic capacity and current scheduling. Contact TSCP to check availability at your preferred location.'
    },
    {
      question: 'Can a treatment plan be created the same day?',
      answer: 'Often, yes. Depending on the clinical assessment and your individual needs, a treatment plan can frequently be created during your first visit.'
    },
    {
      question: 'Do all locations have an onsite pharmacy?',
      answer: 'Yes. Every TSCP location includes both a clinic and an onsite pharmacy, allowing for coordinated care and convenient medication access in one location.'
    }
  ];

  const locations = [
    { name: 'North York', path: '/locations/north-york', icon: 'ri-map-pin-line' },
    { name: 'Thornhill', path: '/locations/thornhill', icon: 'ri-map-pin-line' },
    { name: 'Scarborough', path: '/locations/scarborough', icon: 'ri-map-pin-line' },
    { name: 'Etobicoke', path: '/locations/etobicoke', icon: 'ri-map-pin-line' }
  ];

  return (
    <div className="get-help-addiction-page bg-white">
      <SEOSchema data={schemaData} />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-auto min-h-[500px] flex items-center justify-center bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://readdy.ai/api/search-image?query=compassionate%20healthcare%20professional%20welcoming%20patient%20into%20modern%20bright%20medical%20clinic%20comfortable%20reception%20area%20supportive%20environment%20natural%20lighting%20professional%20medical%20setting%20warm%20inviting%20atmosphere&width=1920&height=800&seq=get-help-addiction-hero-002&orientation=landscape)`,
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
              to="/get-help" 
              className="inline-flex items-center text-white/90 hover:text-white text-sm transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Get Help
            </Link>
          </nav>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Help With Addiction Treatment
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
            TSCP provides confidential, clinic-based addiction treatment across the GTA with onsite pharmacy support. No referral is required, and same-day or fast-access appointments may be available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#lead-form"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              Request Help
              <i className="ri-arrow-down-line"></i>
            </a>
            <a
              href="tel:+14165550123"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              <i className="ri-phone-line"></i>
              Call Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-check-line text-green-400"></i>
              <span>No referral needed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-time-line text-green-400"></i>
              <span>Same-day or fast-access appointments*</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-calendar-check-line text-green-400"></i>
              <span>Same-day treatment plan discussion*</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-hospital-line text-green-400"></i>
              <span>Onsite pharmacy at every location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN - Main Content */}
            <article className="lg:col-span-2 space-y-12">
              
              {/* Section 1 - How the Process Works - Simple Professional Design */}
              <section className="mb-12">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  How the Process Works
                </h2>
                
                <ul className="space-y-4">
                  {processSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <i className={`${step.icon} text-primary text-xl`}></i>
                      </div>
                      <p className="text-gray-700">{step.title}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 2 - Types of Addiction Treatment */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Addiction Treatment Services Offered
                </h2>
                <p className="text-base text-gray-700 mb-6">
                  TSCP provides a range of evidence-based addiction treatment services tailored to individual needs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatmentServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="flex items-center gap-3 p-4 bg-white border-2 border-border-light hover:border-primary rounded-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-arrow-right-circle-line text-primary text-2xl group-hover:scale-110 transition-transform"></i>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Note: Treatment options depend on clinical assessment.
                </p>
              </section>

              {/* Section 3 - What to Expect */}
              <section className="bg-soft-bg p-6 sm:p-8 rounded-lg">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Confidential conversation with clinic staff</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Clinical assessment by a licensed professional</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Clear next steps explained</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-700">Ongoing support and follow-up</p>
                  </li>
                </ul>
              </section>

              {/* Section 4 - Lead Form */}
              <section id="lead-form" className="scroll-mt-24">
                <div className="bg-white border-2 border-border-light rounded-lg p-6 sm:p-8 shadow-lg">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Request Confidential Support
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and a member of our team will contact you to discuss next steps.
                  </p>

                  <form 
                    onSubmit={handleSubmit}
                    data-readdy-form
                    className="space-y-5"
                  >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                          placeholder="(416) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Preferred Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                        Preferred Clinic Location <span className="text-gray-500">(Optional)</span>
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm cursor-pointer"
                      >
                        <option value="">Select a location</option>
                        <option value="North York">North York</option>
                        <option value="Thornhill">Thornhill</option>
                        <option value="Scarborough">Scarborough</option>
                        <option value="Etobicoke">Etobicoke</option>
                      </select>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
                        Additional Information <span className="text-gray-500">(Optional)</span>
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                        placeholder="Please share any additional details that may help us assist you better..."
                      ></textarea>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-gray-500">
                          Maximum 500 characters
                        </p>
                        <p className="text-xs text-gray-500">
                          {charCount}/500
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Help
                          <i className="ri-send-plane-line"></i>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-lg flex items-start gap-3">
                        <i className="ri-check-circle-line text-xl flex-shrink-0 mt-0.5"></i>
                        <div>
                          <p className="font-semibold">Request submitted successfully!</p>
                          <p className="text-sm">A member of our team will contact you shortly to discuss next steps.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-lg flex items-start gap-3">
                        <i className="ri-error-warning-line text-xl flex-shrink-0 mt-0.5"></i>
                        <div>
                          <p className="font-semibold">Submission failed</p>
                          <p className="text-sm">Please try again or call us directly at (416) 555-0123.</p>
                        </div>
                      </div>
                    )}

                    {/* Micro-copy */}
                    <p className="text-sm text-gray-600 text-center">
                      Submitting this form does not commit you to treatment. A clinic team member will contact you to discuss next steps.
                    </p>

                    {/* Privacy Reassurance */}
                    <p className="text-xs text-gray-500 text-center">
                      <i className="ri-lock-line mr-1"></i>
                      Your information is handled confidentially.
                    </p>
                  </form>
                </div>
              </section>

              {/* Section 5 - FAQ */}
              <section>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
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
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4 flex-1" itemProp="name">
                          {item.question}
                        </h3>
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

            {/* RIGHT COLUMN - Sticky Sidebar (Desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                
                {/* Card 1 - Our Locations */}
                <div className="bg-soft-bg p-6 rounded-lg shadow-lg border-2 border-border-light">
                  <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Our Clinic Locations
                  </h2>
                  <p className="text-sm text-gray-700 mb-5">
                    Choose the TSCP location most convenient for you. All locations include a clinic and onsite pharmacy.
                  </p>
                  <nav className="space-y-3">
                    {locations.map((location, index) => (
                      <Link
                        key={index}
                        to={location.path}
                        className="flex items-center justify-between p-4 bg-white border-2 border-border-light hover:border-primary rounded-lg transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <i className={`${location.icon} text-primary text-2xl`}></i>
                          </div>
                          <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {location.name}
                          </span>
                        </div>
                        <i className="ri-arrow-right-line text-gray-400 group-hover:text-primary text-xl transition-colors"></i>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Card 2 - Contact TSCP */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-border-light">
                  <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Contact TSCP
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="tel:+14165550123"
                      className="flex items-center gap-3 p-4 bg-soft-bg hover:bg-primary hover:text-white rounded-lg transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <i className="ri-phone-line text-2xl text-primary group-hover:text-white"></i>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 group-hover:text-white/80">Phone</p>
                        <p className="font-semibold">(416) 555-0123</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@tscp.ca"
                      className="flex items-center gap-3 p-4 bg-soft-bg hover:bg-primary hover:text-white rounded-lg transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <i className="ri-mail-line text-2xl text-primary group-hover:text-white"></i>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 group-hover:text-white/80">Email</p>
                        <p className="font-semibold">info@tscp.ca</p>
                      </div>
                    </a>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-center">
                    Our team is available to answer questions and explain next steps.
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border-light p-4 shadow-lg z-40">
        <div className="flex gap-3">
          <a
            href="#lead-form"
            onClick={scrollToForm}
            className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center cursor-pointer whitespace-nowrap"
          >
            Get Help
          </a>
          <a
            href="tel:+14165550123"
            className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-soft-bg transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line"></i>
            Call
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

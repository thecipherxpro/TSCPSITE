import { useEffect, useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import Breadcrumbs from '../../components/base/Breadcrumbs';
import SEOSchema from '../../components/base/SEOSchema';

export default function GetHelpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    treatmentType: '',
    urgency: '',
    insuranceStatus: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Get Help - Request Treatment | TSCP Toronto Addiction & Mental Health Services';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Request treatment for addiction or mental health services at TSCP. Fill out our confidential intake form for same-day or fast-access appointments. No referral required.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'get help addiction, treatment request, intake form, addiction help Toronto, mental health help, confidential treatment');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Get Help', href: '/get-help' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, String(value));
      });

      const response = await fetch('https://readdy.ai/api/form/d5uf0pb0o41p73073evg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredContact: 'phone',
          treatmentType: '',
          urgency: '',
          insuranceStatus: '',
          message: '',
          consent: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOSchema 
        type="WebPage"
        title="Get Help - Request Treatment | TSCP Toronto"
        description="Request treatment for addiction or mental health services at TSCP. Fill out our confidential intake form for same-day or fast-access appointments."
        url="https://tscp.com/get-help"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center text-white mt-6 sm:mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Request Treatment Today
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-4">
              Take the first step toward recovery. Complete our confidential intake form and our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <div className="flex items-center gap-2 text-white">
                <i className="ri-phone-line text-2xl"></i>
                <span className="text-lg font-semibold">Need immediate help?</span>
              </div>
              <a 
                href="tel:(555)123-4567"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                      Confidential Treatment Request Form
                    </h2>
                    <p className="text-text-muted text-sm sm:text-base">
                      All information is kept strictly confidential. Submitting this form does not commit you to treatment.
                    </p>
                  </div>

                  <form id="treatment-intake-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <i className="ri-user-line text-primary"></i>
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-text-dark mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-text-dark mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <i className="ri-contacts-line text-primary"></i>
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-text-dark mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredContact" className="block text-sm font-semibold text-text-dark mb-2">
                            Preferred Contact Method <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="preferredContact"
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
                          >
                            <option value="phone">Phone Call</option>
                            <option value="email">Email</option>
                            <option value="text">Text Message</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Treatment Information */}
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <i className="ri-heart-pulse-line text-primary"></i>
                        Treatment Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="treatmentType" className="block text-sm font-semibold text-text-dark mb-2">
                            Type of Treatment Needed <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="treatmentType"
                            name="treatmentType"
                            value={formData.treatmentType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
                          >
                            <option value="">Select treatment type</option>
                            <option value="methadone">Methadone Treatment</option>
                            <option value="suboxone">Suboxone Treatment</option>
                            <option value="kadain">Kadain Treatment</option>
                            <option value="addiction">General Addiction Treatment</option>
                            <option value="anxiety">Anxiety Treatment</option>
                            <option value="depression">Depression Treatment</option>
                            <option value="adhd">ADHD Treatment</option>
                            <option value="insomnia">Insomnia Treatment</option>
                            <option value="weight-loss">Medical Weight Loss</option>
                            <option value="quit-smoking">Quit Smoking</option>
                            <option value="quit-alcohol">Quit Alcohol</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="urgency" className="block text-sm font-semibold text-text-dark mb-2">
                            How Soon Do You Need Help? <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
                          >
                            <option value="">Select urgency level</option>
                            <option value="immediate">Immediately (Same Day)</option>
                            <option value="urgent">Within 1-3 Days</option>
                            <option value="soon">Within 1 Week</option>
                            <option value="flexible">Flexible Timeline</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="insuranceStatus" className="block text-sm font-semibold text-text-dark mb-2">
                            Insurance Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="insuranceStatus"
                            name="insuranceStatus"
                            value={formData.insuranceStatus}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
                          >
                            <option value="">Select insurance status</option>
                            <option value="private">Private Insurance</option>
                            <option value="ohip">OHIP Coverage</option>
                            <option value="both">Both Private & OHIP</option>
                            <option value="none">No Insurance</option>
                            <option value="unsure">Not Sure</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-3 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="Tell us anything else that might help us serve you better..."
                      ></textarea>
                      <p className="text-xs text-text-muted mt-1">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    {/* Consent */}
                    <div className="bg-gray-50 p-4 rounded-md">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-primary border-border-light rounded focus:ring-2 focus:ring-primary cursor-pointer"
                        />
                        <span className="text-sm text-text-dark">
                          I consent to TSCP contacting me regarding my treatment request. I understand that all information is confidential and submitting this form does not commit me to treatment. <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>

                    {/* Submit Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start gap-3">
                        <i className="ri-checkbox-circle-line text-green-600 text-xl flex-shrink-0 mt-0.5"></i>
                        <div>
                          <h4 className="font-bold text-green-800 mb-1">Request Submitted Successfully!</h4>
                          <p className="text-sm text-green-700">
                            Thank you for reaching out. Our team will contact you within 24 hours using your preferred contact method.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                        <i className="ri-error-warning-line text-red-600 text-xl flex-shrink-0 mt-0.5"></i>
                        <div>
                          <h4 className="font-bold text-red-800 mb-1">Submission Failed</h4>
                          <p className="text-sm text-red-700">
                            We're sorry, something went wrong. Please try again or call us directly at (555) 123-4567.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line"></i>
                          Submit Treatment Request
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-text-muted">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>

              {/* Right Column - Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Why Choose TSCP */}
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <i className="ri-shield-check-line text-primary"></i>
                    Why Choose TSCP?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="ri-check-line text-primary text-lg flex-shrink-0 mt-0.5"></i>
                      <span className="text-sm text-text-muted">
                        <strong className="text-text-dark">Same-Day Appointments</strong> available based on availability
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-check-line text-primary text-lg flex-shrink-0 mt-0.5"></i>
                      <span className="text-sm text-text-muted">
                        <strong className="text-text-dark">No Referral Required</strong> to start treatment
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-check-line text-primary text-lg flex-shrink-0 mt-0.5"></i>
                      <span className="text-sm text-text-muted">
                        <strong className="text-text-dark">Onsite Pharmacy</strong> at all clinic locations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-check-line text-primary text-lg flex-shrink-0 mt-0.5"></i>
                      <span className="text-sm text-text-muted">
                        <strong className="text-text-dark">Confidential Care</strong> in a professional setting
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-check-line text-primary text-lg flex-shrink-0 mt-0.5"></i>
                      <span className="text-sm text-text-muted">
                        <strong className="text-text-dark">4 GTA Locations</strong> for your convenience
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border-light">
                    <h4 className="font-bold text-text-dark mb-3 text-sm">Our Locations:</h4>
                    <div className="space-y-2">
                      <a href="/locations/north-york" className="block text-sm text-primary hover:underline cursor-pointer">
                        <i className="ri-map-pin-line mr-1"></i> North York
                      </a>
                      <a href="/locations/thornhill" className="block text-sm text-primary hover:underline cursor-pointer">
                        <i className="ri-map-pin-line mr-1"></i> Thornhill
                      </a>
                      <a href="/locations/scarborough" className="block text-sm text-primary hover:underline cursor-pointer">
                        <i className="ri-map-pin-line mr-1"></i> Scarborough
                      </a>
                      <a href="/locations/etobicoke" className="block text-sm text-primary hover:underline cursor-pointer">
                        <i className="ri-map-pin-line mr-1"></i> Etobicoke
                      </a>
                    </div>
                  </div>
                </div>

                {/* Crisis Support */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                    <i className="ri-alarm-warning-line"></i>
                    Crisis Support
                  </h3>
                  <p className="text-sm text-red-600 mb-4">
                    If you're in immediate danger or having thoughts of self-harm, please get help right away.
                  </p>
                  <a 
                    href="tel:988"
                    className="block w-full bg-red-600 text-white px-4 py-3 text-center font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Call 988 (Crisis Line)
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lock-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-text-dark mb-2">100% Confidential</h3>
                <p className="text-sm text-text-muted">Your privacy is protected by law</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-text-dark mb-2">24-Hour Response</h3>
                <p className="text-sm text-text-muted">We'll contact you within one business day</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-text-dark mb-2">No Obligation</h3>
                <p className="text-sm text-text-muted">Free consultation with no commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import Breadcrumbs from '../../components/base/Breadcrumbs';
import SEOSchema from '../../components/base/SEOSchema';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone',
    urgency: 'normal'
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Contact Us - TSCP Addiction and Mental Health Treatment | Get in Touch Today';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact TSCP for addiction treatment and mental health services. Call us, visit our locations, or send us a message. We are here to help you start your recovery journey.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'contact TSCP, addiction treatment contact, mental health contact, recovery center contact, treatment center phone');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'phone',
        urgency: 'normal'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      title: 'Call Us',
      description: 'Speak with our intake specialists 24/7',
      value: '(555) 123-4567',
      link: 'tel:(555)123-4567',
      icon: 'ri-phone-line',
      urgent: false
    },
    {
      title: 'Crisis Line',
      description: 'Immediate help for mental health emergencies',
      value: '988',
      link: 'tel:988',
      icon: 'ri-alarm-warning-line',
      urgent: true
    },
    {
      title: 'Email Us',
      description: 'Send us a message anytime',
      value: 'info@tscp.com',
      link: 'mailto:info@tscp.com',
      icon: 'ri-mail-line',
      urgent: false
    },
    {
      title: 'Main Office',
      description: 'Visit our administrative headquarters',
      value: '123 Main Street, Downtown\nMetropolitan City, State 12345',
      link: '#',
      icon: 'ri-map-pin-line',
      urgent: false
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
    { day: '24/7 Crisis Line', hours: '988' }
  ];

  return (
    <>
      <SEOSchema 
        type="WebPage"
        title="Contact Us - TSCP Addiction and Mental Health Treatment"
        description="Contact TSCP for addiction treatment and mental health services. Call us, visit our locations, or send us a message. We are here to help you start your recovery journey."
        url="https://tscp.com/contact"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center text-white mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We're here to help you take the first step towards recovery. 
              Reach out today for confidential support and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Multiple ways to connect with our compassionate team of professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                  info.urgent 
                    ? 'border-red-200 bg-red-50 hover:border-red-300' 
                    : 'border-border-light bg-gray-50 hover:border-primary'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  info.urgent ? 'bg-red-500 text-white' : 'bg-primary text-white'
                }`}>
                  <i className={`${info.icon} text-2xl`}></i>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  info.urgent ? 'text-red-700' : 'text-text-dark'
                }`}>
                  {info.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {info.description}
                </p>
                <a 
                  href={info.link}
                  className={`inline-block font-semibold hover:underline cursor-pointer ${
                    info.urgent ? 'text-red-600' : 'text-primary'
                  }`}
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md border border-border-light p-8">
                <h3 className="text-2xl font-bold text-text-dark mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-text-dark mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                      >
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-text-dark mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                      >
                        <option value="normal">Normal (1-2 business days)</option>
                        <option value="urgent">Urgent (Same day)</option>
                        <option value="crisis">Crisis (Call 988 immediately)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-border-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm resize-vertical"
                      placeholder="Please tell us about your situation and how we can help..."
                    />
                    <div className="text-sm text-text-muted mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-primary text-white px-6 py-4 font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex items-center gap-2 text-green-700">
                        <i className="ri-check-line text-lg"></i>
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Office Hours & Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
                  <i className="ri-time-line text-primary"></i>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">{schedule.day}</span>
                      <span className="text-text-dark font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="ri-shield-check-line"></i>
                  Confidential & Secure
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  All communications are confidential and HIPAA compliant. 
                  Your privacy is our priority.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <i className="ri-lock-line"></i>
                  <span>SSL Encrypted</span>
                </div>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-text-dark mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  If you're experiencing a mental health crisis or thoughts of self-harm:
                </p>
                <a 
                  href="tel:988"
                  className="block w-full bg-red-600 text-white px-4 py-3 text-center font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap mb-3"
                >
                  Call Crisis Line: 988
                </a>
                <a 
                  href="/get-help"
                  className="block w-full bg-primary text-white px-4 py-3 text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get Help Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

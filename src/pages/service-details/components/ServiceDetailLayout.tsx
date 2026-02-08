import { useEffect, useState } from 'react';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

interface ServiceDetailData {
  title: string;
  breadcrumb: string;
  heroImage: string;
  description: string[];
  benefits: {
    title: string;
    description: string;
    list: string[];
    image: string;
  };
  benefitCards: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  process: {
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  whyChoose: {
    title: string;
    description: string;
    list: string[];
    videoImage: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
}

interface ServiceDetailLayoutProps {
  data: ServiceDetailData;
}

export default function ServiceDetailLayout({ data }: ServiceDetailLayoutProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // SEO Meta tags
  useEffect(() => {
    document.title = `${data.title} | Toronto Safe Clinics and Pharmacies`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = data.description[0];
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = `${data.title.toLowerCase()}, addiction treatment, mental health, TSCP, Toronto clinics, GTA healthcare`;
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    // Canonical URL
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
  }, [data]);

  const breadcrumbItems = [
    { label: 'Services', href: '/#services' },
    { label: data.breadcrumb }
  ];

  const schemaData = {
    type: 'MedicalProcedure' as const,
    name: data.title,
    description: data.description[0],
    url: window.location.href,
    image: data.heroImage,
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
    medicalSpecialty: ['Addiction Medicine', 'Mental Health', 'Substance Abuse Treatment', 'Psychiatry'],
    treatmentApproach: data.benefits.list,
    availableService: [{
      name: data.title,
      description: data.description[0]
    }],
    faq: data.faqs,
    breadcrumb: [
      { name: 'Home', item: window.location.origin },
      { name: 'Services', item: `${window.location.origin}/#services` },
      { name: data.breadcrumb, item: window.location.href }
    ]
  };

  const getRelatedServiceLink = (serviceName: string) => {
    const serviceMap: { [key: string]: string } = {
      'Addiction Treatment': '/treatments/addiction-treatment',
      'Methadone Treatment': '/treatments/methadone-treatment',
      'Suboxone Treatment': '/treatments/suboxone-treatment',
      'Kadain Treatment': '/treatments/kadain-treatment',
      'Quit Smoking': '/treatments/quit-smoking',
      'Quit Alcohol': '/treatments/quit-alcohol',
      'Depression Treatment': '/treatments/depression',
      'Anxiety Treatment': '/treatments/anxiety',
      'ADHD Treatment': '/treatments/adhd',
      'Insomnia Treatment': '/treatments/insomnia',
      'Medical Weight Loss': '/treatments/medical-weight-loss',
      'Pharmacist Prescribing': '/treatments/pharmacist-prescribing'
    };
    return serviceMap[serviceName] || '#';
  };

  return (
    <div className="service-detail-page">
      <SEOSchema data={schemaData} />
      
      {/* Hero Section */}
      <div 
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${data.heroImage})`,
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {data.title}
          </h1>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Service Description */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none mb-8">
                {data.description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="relative">
                <img 
                  src={data.heroImage} 
                  alt={`${data.title} at TSCP`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                    {data.benefits.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{data.benefits.description}</p>
                  <ul className="space-y-3">
                    {data.benefits.list.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14B8A6] flex items-center justify-center mt-0.5 mr-3">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img 
                    src={data.benefits.image} 
                    alt={`Benefits of ${data.title}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {data.benefitCards.map((card, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <img src={card.icon} alt={card.title} className="w-16 h-16" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 text-center">
                {data.process.title}
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                {data.process.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.process.steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-2xl font-bold">{step.number}</span>
                      </div>
                      {index < data.process.steps.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200"></div>
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose TSCP */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                    {data.whyChoose.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{data.whyChoose.description}</p>
                  <ul className="space-y-3">
                    {data.whyChoose.list.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <i className="ri-check-double-line text-[#14B8A6] mr-3 mt-1 text-xl"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src={data.whyChoose.videoImage}
                    alt="Why Choose TSCP"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg cursor-pointer">
                      <i className="ri-play-fill text-4xl text-[#8B7355] ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faqs.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                      <i className={`ri-add-line text-2xl text-[#8B7355] transition-transform flex-shrink-0 ${openFaqIndex === index ? 'rotate-45' : ''}`}></i>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Services */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8 sticky top-24">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Related Services</h3>
              <div className="space-y-3">
                {data.relatedServices.map((service, index) => (
                  <a 
                    key={index}
                    href={getRelatedServiceLink(service)}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-[#8B7355] hover:text-white transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{service}</span>
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </a>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="bg-[#8B7355] p-6 rounded-lg text-white text-center mt-8">
                <div className="mb-4">
                  <i className="ri-phone-line text-4xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Need Help Today?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Speak with our caring team about {data.title.toLowerCase()}
                </p>
                <a 
                  href="tel:+14165550123"
                  className="bg-white text-[#8B7355] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mb-2 whitespace-nowrap"
                >
                  Call Now
                </a>
                <p className="text-xs opacity-80 mt-2">Available 24/7 for support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

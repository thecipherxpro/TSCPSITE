import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import Breadcrumbs from '../../components/base/Breadcrumbs';
import SEOSchema from '../../components/base/SEOSchema';

export default function TreatmentsPage() {
  useEffect(() => {
    // SEO Meta tags
    document.title = 'Toronto Addiction & Mental Health Treatments | TSCP Services';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = 'Comprehensive addiction treatment and mental health services in Toronto and GTA. Expert care for substance abuse, anxiety, depression, ADHD, insomnia, and weight management. Evidence-based treatments with compassionate support.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = descriptionText;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'addiction treatment Toronto, mental health services, substance abuse treatment, methadone clinic, suboxone treatment, anxiety therapy, depression treatment, ADHD treatment, insomnia treatment, medical weight loss, Toronto clinics, GTA healthcare';
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

    // Last modified
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
    { label: 'Treatments' }
  ];

  const schemaData = {
    type: 'WebPage' as const,
    name: 'Addiction & Mental Health Treatments',
    description: 'Comprehensive addiction treatment and mental health services in Toronto and GTA. Expert care for substance abuse, anxiety, depression, ADHD, insomnia, and weight management.',
    url: window.location.href,
    image: 'https://readdy.ai/api/search-image?query=modern%20medical%20clinic%20interior%20with%20comfortable%20waiting%20area%20professional%20healthcare%20environment%20natural%20lighting%20calming%20atmosphere%20minimalist%20design%20medical%20facility&width=1200&height=630&seq=treatments-hero-001&orientation=landscape',
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
      { name: 'Treatments', item: window.location.href }
    ]
  };

  const addictionTreatments = [
    {
      title: 'Addiction Treatment',
      slug: '/treatments/addiction-treatment',
      description: 'Comprehensive addiction treatment programs with evidence-based therapies and compassionate care for lasting recovery.',
      image: 'https://readdy.ai/api/search-image?query=professional%20therapist%20counseling%20patient%20in%20modern%20comfortable%20therapy%20office%20setting%20warm%20supportive%20atmosphere%20person%20receiving%20addiction%20treatment%20guidance%20peaceful%20healing%20environment%20natural%20lighting&width=800&height=600&seq=addiction-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Methadone Treatment',
      slug: '/treatments/methadone-treatment',
      description: 'Medically supervised methadone maintenance therapy for opioid addiction with ongoing support and monitoring.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20professional%20providing%20medication%20consultation%20to%20patient%20in%20clinical%20setting%20medical%20treatment%20discussion%20compassionate%20care%20environment%20professional%20medical%20office&width=800&height=600&seq=methadone-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Suboxone Treatment',
      slug: '/treatments/suboxone-treatment',
      description: 'Effective suboxone therapy for opioid dependence with personalized treatment plans and comprehensive care.',
      image: 'https://readdy.ai/api/search-image?query=doctor%20consulting%20with%20patient%20about%20medication%20assisted%20treatment%20modern%20clinic%20professional%20healthcare%20consultation%20supportive%20medical%20environment&width=800&height=600&seq=suboxone-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Kadian Treatment',
      slug: '/treatments/kadain-treatment',
      description: 'Specialized Kadian therapy for chronic pain management and opioid addiction treatment with expert medical supervision.',
      image: 'https://readdy.ai/api/search-image?query=medical%20professional%20discussing%20pain%20management%20options%20with%20patient%20in%20comfortable%20office%20setting%20caring%20healthcare%20provider%20compassionate%20treatment%20consultation&width=800&height=600&seq=kadian-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Quit Smoking',
      slug: '/treatments/quit-smoking',
      description: 'Proven smoking cessation programs combining medication, counseling, and behavioral support for lasting success.',
      image: 'https://readdy.ai/api/search-image?query=person%20receiving%20smoking%20cessation%20counseling%20from%20healthcare%20professional%20supportive%20therapy%20session%20quit%20smoking%20support%20comfortable%20medical%20office%20encouraging%20atmosphere&width=800&height=600&seq=smoking-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Quit Alcohol',
      slug: '/treatments/quit-alcohol',
      description: 'Comprehensive alcohol addiction treatment with medical detox, therapy, and long-term recovery support.',
      image: 'https://readdy.ai/api/search-image?query=therapist%20providing%20alcohol%20addiction%20counseling%20to%20patient%20in%20peaceful%20therapy%20room%20recovery%20support%20session%20compassionate%20care%20environment%20professional%20treatment%20setting&width=800&height=600&seq=alcohol-card-redesign-001&orientation=landscape'
    }
  ];

  const mentalHealthTreatments = [
    {
      title: 'Depression Treatment',
      slug: '/treatments/depression',
      description: 'Evidence-based depression therapy combining medication management and counseling for improved mental wellness.',
      image: 'https://readdy.ai/api/search-image?query=compassionate%20therapist%20counseling%20patient%20with%20depression%20in%20warm%20comfortable%20therapy%20office%20supportive%20mental%20health%20treatment%20peaceful%20healing%20environment&width=800&height=600&seq=depression-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Anxiety Treatment',
      slug: '/treatments/anxiety',
      description: 'Specialized anxiety treatment programs with cognitive behavioral therapy and medication when needed.',
      image: 'https://readdy.ai/api/search-image?query=patient%20practicing%20relaxation%20techniques%20with%20therapist%20in%20calming%20therapy%20space%20anxiety%20treatment%20session%20peaceful%20supportive%20environment%20mental%20wellness%20care&width=800&height=600&seq=anxiety-card-redesign-001&orientation=landscape'
    },
    {
      title: 'ADHD Treatment',
      slug: '/treatments/adhd',
      description: 'Comprehensive ADHD management with medication, behavioral strategies, and ongoing support for all ages.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20provider%20consulting%20patient%20about%20ADHD%20treatment%20in%20modern%20medical%20office%20professional%20assessment%20session%20supportive%20care%20environment%20focus%20management&width=800&height=600&seq=adhd-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Insomnia Treatment',
      slug: '/treatments/insomnia',
      description: 'Effective insomnia therapy using cognitive behavioral techniques and sleep hygiene education for better rest.',
      image: 'https://readdy.ai/api/search-image?query=therapist%20discussing%20sleep%20therapy%20with%20patient%20in%20comfortable%20consultation%20room%20insomnia%20treatment%20guidance%20peaceful%20calming%20office%20environment%20restful%20atmosphere&width=800&height=600&seq=insomnia-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Medical Weight Loss',
      slug: '/treatments/medical-weight-loss',
      description: 'Physician-supervised weight loss programs with personalized nutrition plans and medication when appropriate.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20professional%20creating%20personalized%20weight%20management%20plan%20with%20patient%20modern%20clinic%20healthy%20lifestyle%20consultation%20supportive%20medical%20environment%20wellness%20care&width=800&height=600&seq=weightloss-card-redesign-001&orientation=landscape'
    },
    {
      title: 'Pharmacist Prescribing',
      slug: '/treatments/pharmacist-prescribing',
      description: 'Convenient pharmacist prescribing services for minor ailments and medication management with expert care.',
      image: 'https://readdy.ai/api/search-image?query=professional%20pharmacist%20consulting%20with%20patient%20in%20modern%20pharmacy%20setting%20medication%20counseling%20accessible%20healthcare%20trusted%20pharmaceutical%20service&width=800&height=600&seq=pharmacist-card-redesign-001&orientation=landscape'
    }
  ];

  return (
    <div className="treatments-page">
      <SEOSchema data={schemaData} />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://readdy.ai/api/search-image?query=modern%20medical%20clinic%20interior%20with%20comfortable%20waiting%20area%20professional%20healthcare%20environment%20natural%20lighting%20calming%20atmosphere%20minimalist%20design%20medical%20facility&width=1920&height=800&seq=treatments-hero-002&orientation=landscape)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-white py-12 sm:py-16">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Our Treatments &amp; Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive addiction treatment and mental health services in Toronto and GTA. Expert care with compassionate support for your journey to wellness.
          </p>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* Addiction Treatment Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#8B7355] uppercase tracking-wider text-sm font-semibold mb-4 block">
              Addiction Recovery
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Addiction Treatment Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Evidence-based addiction treatment programs designed to help you overcome substance dependence and build a foundation for lasting recovery with compassionate, professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {addictionTreatments.map((treatment, index) => (
              <article key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <Link to={treatment.slug} className="block">
                  <div className="relative h-80 sm:h-96 overflow-hidden">
                    <img 
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                        {treatment.title}
                      </h3>
                      
                      <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium uppercase tracking-wider mr-2">Read More</span>
                        <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#8B7355] uppercase tracking-wider text-sm font-semibold mb-4 block">
              Mental Wellness
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Mental Health Treatment Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Professional mental health care addressing anxiety, depression, ADHD, insomnia, and weight management. Our expert team provides personalized treatment plans for improved mental wellness and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mentalHealthTreatments.map((treatment, index) => (
              <article key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <Link to={treatment.slug} className="block">
                  <div className="relative h-80 sm:h-96 overflow-hidden">
                    <img 
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                        {treatment.title}
                      </h3>
                      
                      <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium uppercase tracking-wider mr-2">Read More</span>
                        <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#8B7355] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Journey to Wellness?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed px-4">
              Our compassionate team is here to support you every step of the way. Contact us today to learn more about our treatment programs and take the first step toward a healthier, happier life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+14165550123"
                className="bg-white text-[#8B7355] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase text-sm tracking-wider hover:bg-gray-100 transition-colors inline-flex items-center whitespace-nowrap cursor-pointer w-full sm:w-auto justify-center"
              >
                <i className="ri-phone-line mr-2 text-lg"></i>
                Call Now: (416) 555-0123
              </a>
              <a 
                href="/#appointment"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-[#8B7355] transition-colors inline-flex items-center whitespace-nowrap cursor-pointer w-full sm:w-auto justify-center"
              >
                <i className="ri-calendar-line mr-2 text-lg"></i>
                Book Appointment
              </a>
            </div>
            <p className="text-sm text-white/80 mt-4 sm:mt-6">
              Available 24/7 for support and emergency consultations
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

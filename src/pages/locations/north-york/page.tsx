import { useEffect } from 'react';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function NorthYorkLocationPage() {
  useEffect(() => {
    document.title = 'North York Addiction Treatment Center | TSCP Keele Street Location | M3J 3L8';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Visit TSCP North York Addiction Treatment Center at 3472 Keele St. Comprehensive addiction treatment, mental health services, and OHIP+ covered care in North York, ON M3J 3L8. Call (416) 633-9999.'
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'North York addiction treatment, Keele Street treatment center, addiction services North York, mental health North York, OHIP+ North York, M3J 3L8 treatment'
      );
    }

    // Helper to create or update a meta tag
    const upsertMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('geo.position', '43.7615;-79.4769');
    upsertMeta('geo.region', 'CA-ON');
    upsertMeta('geo.placename', 'North York, Ontario');
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'North York', href: '/locations/north-york' },
  ];

  const location = {
    name: 'North York Addiction Treatment Center',
    address: '3472 Keele St',
    city: 'North York',
    province: 'ON',
    postalCode: 'M3J 3L8',
    phone: '(416) 633-9999',
    coordinates: { lat: 43.7615, lng: -79.4769 },
    hours: {
      'Monday - Friday': '8:00 AM - 4:00 PM',
      Saturday: '10:00 AM - 2:00 PM',
      Sunday: '10:00 AM - 2:00 PM',
    },
    services: [
      'Addiction Treatment Services',
      'Mental Health Services',
      'Virtual Walk-In Clinic',
      'OHIP+ Covered Treatments and Visits',
      'Low Income Support',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20medical%20clinic%20building%20modern%20healthcare%20facility%20with%20clean%20architecture%20welcoming%20entrance%20natural%20lighting%20accessible%20parking%20in%20North%20York%20Ontario%20urban%20setting&width=800&height=500&seq=northyork-hero&orientation=landscape',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.9!2d-79.4769!3d43.7615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzQxLjQiTiA3OcKwMjgnMzYuOCJX!5e0!3m2!1sen!2sca!4v1234567893',
  };

  const nearbyAreas = [
    'Downsview',
    'York University',
    'Jane and Finch',
    'Bathurst Manor',
    'Wilson Heights',
    'Amesbury',
    'Yorkdale',
    'Sheppard West',
  ];

  const faqs = [
    {
      question: 'Where is the North York TSCP location?',
      answer:
        'Our North York addiction treatment center is located at 3472 Keele St, North York, ON M3J 3L8. We are conveniently situated on Keele Street with easy access from Highway 401 and Highway 400, and served by TTC bus routes.',
    },
    {
      question: 'What are the hours for the North York location?',
      answer:
        'We are open Monday to Friday from 8:00 AM to 4:00 PM, and Saturday and Sunday from 10:00 AM to 2:00 PM. We offer weekend availability to better serve our community.',
    },
    {
      question: 'Is parking available at the North York center?',
      answer:
        'Yes, we have convenient on-site parking available for all patients and visitors at our Keele Street location in North York.',
    },
    {
      question: 'Do you accept OHIP+ at the North York location?',
      answer:
        'Yes, our North York treatment center accepts OHIP+ and provides covered treatments and visits. We also offer low income support programs to ensure accessible care for all.',
    },
  ];

  return (
    <>
      <SEOSchema
        data={{
          type: 'HealthAndBeautyBusiness',
          name: location.name,
          description: `${location.name} provides comprehensive addiction treatment and mental health services in North York, Ontario. Located at ${location.address}, we offer OHIP+ covered treatments, virtual walk-in clinic, and support for individuals seeking recovery from addiction and mental health challenges.`,
          url: 'https://tscp.com/locations/north-york',
          image: location.image,
          provider: {
            name: 'TSCP',
            url: 'https://tscp.com',
            telephone: location.phone,
            address: {
              streetAddress: location.address,
              addressLocality: location.city,
              addressRegion: location.province,
              postalCode: location.postalCode,
              addressCountry: 'CA',
            },
          },
          medicalSpecialty: location.services,
          faq: faqs,
          breadcrumb: breadcrumbItems.map((item) => ({
            name: item.label,
            item: `https://tscp.com${item.href}`,
          })),
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img
            src={location.image}
            alt={`${location.name} exterior building view at Keele Street in North York`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center text-white mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{location.name}</h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Comprehensive Addiction Treatment &amp; Mental Health Services in North York
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-fill text-2xl"></i>
                <span>
                  {location.address}, {location.city}
                </span>
              </div>
              <div className="hidden sm:block text-white/50">|</div>
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-2xl"></i>
                <a href={`tel:${location.phone}`} className="hover:text-accent transition-colors cursor-pointer">
                  {location.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white border-b border-border-light">
        <div className="container mx-auto px-6">
          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto"
            aria-label="Quick actions for North York location"
          >
            <a
              href={`tel:${location.phone}`}
              className="bg-primary text-white px-8 py-4 text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              Call Now
            </a>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-primary text-primary px-8 py-4 text-center font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-map-line text-xl"></i>
              Get Directions
            </a>
            <a
              href="/get-help"
              className="bg-accent text-text-dark px-8 py-4 text-center font-semibold hover:bg-accent/80 transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-calendar-line text-xl"></i>
              Book Appointment
            </a>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Location Details - Show only on mobile */}
            <div className="lg:hidden mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-border-light">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3 sm:mb-4 flex items-center gap-2">
                  <i className="ri-information-line text-primary text-xl sm:text-2xl"></i>
                  <span>Location Details</span>
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">Address</h4>
                    <address className="not-italic text-text-muted text-xs sm:text-sm">
                      {location.address}
                      <br />
                      {location.city}, {location.province} {location.postalCode}
                    </address>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">Phone</h4>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">Hours</h4>
                    <dl className="space-y-1 text-xs sm:text-sm">
                      {Object.entries(location.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between gap-2">
                          <dt className="text-text-muted">{day}:</dt>
                          <dd className="text-text-dark font-medium text-right">{hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-border-light space-y-2 sm:space-y-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="block w-full bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                    >
                      <i className="ri-phone-line mr-2"></i>
                      Call Now
                    </a>
                    <a
                      href="/get-help"
                      className="block w-full bg-accent text-text-dark px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-accent/80 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                    >
                      <i className="ri-calendar-line mr-2"></i>
                      Book Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About Section */}
                <article>
                  <h2 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <i className="ri-hospital-line text-primary"></i>
                    About Our North York Location
                  </h2>
                  <div className="prose prose-lg max-w-none text-text-muted space-y-4">
                    <p>
                      <strong>Welcome to TSCP's North York Addiction Treatment Center</strong>, conveniently
                      located on Keele Street in North York. Our comprehensive facility provides addiction
                      treatment and mental health services to residents of North York, Downsview, York
                      University area, and surrounding Toronto communities.
                    </p>
                    <p>
                      At our North York location, we understand that seeking help for addiction and mental
                      health challenges takes courage. Our compassionate team of healthcare professionals is
                      dedicated to providing personalized, evidence-based treatment in a supportive and
                      non-judgmental environment. We work with each patient to develop individualized care
                      plans that address their unique needs and goals.
                    </p>
                    <p>
                      Located at 3472 Keele St, our North York addiction treatment center is easily accessible
                      from Highway 401 and Highway 400, with convenient TTC connections. We offer extended
                      weekday hours and weekend availability, along with ample parking to make accessing
                      treatment as convenient as possible for our patients and their families.
                    </p>
                  </div>
                </article>

                {/* Services Section */}
                <article>
                  <h2 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <i className="ri-heart-pulse-line text-primary"></i>
                    Services Available in North York
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {location.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md border border-border-light hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="ri-check-line text-primary text-xl"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-text-dark mb-1">{service}</h3>
                            <p className="text-sm text-text-muted">
                              {service === 'Addiction Treatment Services' && 'Comprehensive programs for substance abuse recovery'}
                              {service === 'Mental Health Services' && 'Professional support for anxiety, depression, and more'}
                              {service === 'Virtual Walk-In Clinic' && 'Convenient online consultations from home'}
                              {service === 'OHIP+ Covered Treatments and Visits' && 'Fully covered care for eligible patients'}
                              {service === 'Low Income Support' && 'Financial assistance programs available'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Doctor's Schedule Section */}
                <article>
                  <h2 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <i className="ri-calendar-check-line text-primary"></i>
                    Doctor's Schedule
                  </h2>
                  <div className="bg-white rounded-lg shadow-md border border-border-light overflow-hidden">
                    <div className="divide-y divide-border-light">
                      {/* Monday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Monday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="ri-user-line text-primary"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-text-dark">Dr. Lao</p>
                                <p className="text-sm text-text-muted">8:00 AM – 5:00 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tuesday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Tuesday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="ri-user-line text-primary"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-text-dark">Dr. Lao</p>
                                <p className="text-sm text-text-muted">8:00 AM – 5:00 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wednesday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Wednesday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="ri-user-line text-primary"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-text-dark">Dr. Lao</p>
                                <p className="text-sm text-text-muted">8:00 AM – 5:00 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Thursday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Thursday</h3>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <i className="ri-user-line text-primary"></i>
                                </div>
                                <div>
                                  <p className="font-semibold text-text-dark">Dr. Sadik</p>
                                  <p className="text-sm text-text-muted">8:00 AM – 4:00 PM</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <i className="ri-user-line text-primary"></i>
                                </div>
                                <div>
                                  <p className="font-semibold text-text-dark">Dr. Nasirinejad</p>
                                  <p className="text-sm text-text-muted">4:00 PM – 6:00 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Friday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Friday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="ri-user-line text-primary"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-text-dark">Dr. Lao</p>
                                <p className="text-sm text-text-muted">8:00 AM – 5:00 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Saturday */}
                      <div className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Saturday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="ri-user-line text-primary"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-text-dark">Dr. Sadik</p>
                                <p className="text-sm text-text-muted">9:00 AM – 1:00 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sunday */}
                      <div className="p-6 bg-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark mb-2">Sunday</h3>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="ri-close-line text-gray-500"></i>
                              </div>
                              <div>
                                <p className="font-semibold text-gray-500">Closed</p>
                                <p className="text-sm text-text-muted">Not available</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <i className="ri-information-line mr-2"></i>
                      <strong>Note:</strong> Doctor schedules are subject to change. Please call ahead to confirm availability.
                    </p>
                  </div>
                </article>

                {/* Why Choose Section */}
                <article>
                  <h2 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <i className="ri-star-line text-primary"></i>
                    Why Choose Our North York Center
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-primary text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-2">Accessible Location</h3>
                        <p className="text-text-muted text-sm">Easy access from Highway 401, 400, and TTC routes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-heart-line text-primary text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-2">Expert Care Team</h3>
                        <p className="text-text-muted text-sm">Experienced addiction and mental health specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-shield-check-line text-primary text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-2">OHIP+ Coverage</h3>
                        <p className="text-text-muted text-sm">Fully covered treatments for eligible patients</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-calendar-check-line text-primary text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-2">Weekend Hours</h3>
                        <p className="text-text-muted text-sm">Open Saturday and Sunday afternoons</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Served */}
                <article>
                  <h2 className="text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
                    <i className="ri-community-line text-primary"></i>
                    Serving North York Communities
                  </h2>
                  <p className="text-text-muted mb-6">
                    Our North York addiction treatment center proudly serves patients from throughout North York
                    and nearby areas, including:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {nearbyAreas.map((area, index) => (
                      <div
                        key={index}
                        className="bg-white px-4 py-3 rounded-lg border border-border-light text-center text-text-dark font-medium text-sm hover:border-primary transition-colors"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              {/* Sidebar - Hide on mobile, show on desktop */}
              <aside className="hidden lg:block lg:col-span-1 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-border-light sticky top-24">
                  <h3 className="text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
                    <i className="ri-information-line text-primary"></i>
                    Location Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-text-dark mb-2 text-sm">Address</h4>
                      <address className="not-italic text-text-muted text-sm">
                        {location.address}
                        <br />
                        {location.city}, {location.province} {location.postalCode}
                      </address>
                    </div>

                    <div>
                      <h4 className="font-bold text-text-dark mb-2 text-sm">Phone</h4>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-bold text-text-dark mb-2 text-sm">Hours</h4>
                      <dl className="space-y-1 text-sm">
                        {Object.entries(location.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <dt className="text-text-muted">{day}:</dt>
                            <dd className="text-text-dark font-medium">{hours}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="pt-4 border-t border-border-light space-y-3">
                      <a
                        href={`tel:${location.phone}`}
                        className="block w-full bg-primary text-white px-6 py-3 text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                      >
                        <i className="ri-phone-line mr-2"></i>
                        Call Now
                      </a>
                      <a
                        href="/get-help"
                        className="block w-full bg-accent text-text-dark px-6 py-3 text-center font-semibold hover:bg-accent/80 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                      >
                        <i className="ri-calendar-line mr-2"></i>
                        Book Visit
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">Find Us in North York</h2>
            <div className="rounded-lg overflow-hidden shadow-xl border border-border-light">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${location.name} at ${location.address}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">
              Common Questions About Our North York Location
            </h2>
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-border-light"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-bold text-text-dark mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-text-muted" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Recovery in North York?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our North York location today for a confidential consultation. We're here to help you
              take the first step toward healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${location.phone}`}
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
              >
                Call {location.phone}
              </a>
              <a
                href="/get-help"
                className="bg-accent text-text-dark px-8 py-4 text-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

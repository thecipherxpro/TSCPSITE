import { useEffect, useState } from 'react';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import Breadcrumbs from '../../../components/base/Breadcrumbs';
import SEOSchema from '../../../components/base/SEOSchema';

export default function ScarboroughLocationPage() {
  const [currentDay, setCurrentDay] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title =
      'Scarborough Addiction Treatment Center | TSCP Kennedy Road Location | M1P 2L4';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Visit TSCP Scarborough Addiction Treatment Center at 1261 Kennedy Rd, Unit 2. Comprehensive addiction treatment, mental health services, and OHIP+ covered care in Scarborough, ON M1P 2L4. Call (416) 490-0499.'
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'Scarborough addiction treatment, Kennedy Road treatment center, addiction services Scarborough, mental health Scarborough, OHIP+ Scarborough, M1P 2L4 treatment'
      );
    }

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('geo.position', '43.7315;-79.2644');
    ensureMeta('geo.region', 'CA-ON');
    ensureMeta('geo.placename', 'Scarborough, Ontario');

    // Get current day and check if open
    const checkOpenStatus = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[now.getDay()];
      setCurrentDay(day);

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      let open = false;
      switch (day) {
        case 'Monday':
        case 'Wednesday':
          open = currentTime >= 8 * 60 && currentTime < 17 * 60;
          break;
        case 'Tuesday':
          open = currentTime >= 7.5 * 60 && currentTime < 18 * 60;
          break;
        case 'Thursday':
          open = currentTime >= 8 * 60 && currentTime < 18 * 60;
          break;
        case 'Friday':
          open = currentTime >= 8 * 60 && currentTime < 13 * 60;
          break;
        case 'Saturday':
          open = currentTime >= 9 * 60 && currentTime < 13 * 60;
          break;
        case 'Sunday':
          open = false;
          break;
      }
      setIsOpen(open);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Scarborough', href: '/locations/scarborough' },
  ];

  const location = {
    name: 'Scarborough Addiction Treatment Center',
    address: '1261 Kennedy Rd, Unit 2',
    city: 'Scarborough',
    province: 'ON',
    postalCode: 'M1P 2L4',
    phone: '(416) 490-0499',
    coordinates: { lat: 43.7315, lng: -79.2644 },
    hours: {
      'Monday': '8:00 AM - 5:00 PM',
      'Tuesday': '7:30 AM - 6:00 PM',
      'Wednesday': '8:00 AM - 5:00 PM',
      'Thursday': '8:00 AM - 6:00 PM',
      'Friday': '8:00 AM - 1:00 PM',
      'Saturday': '9:00 AM - 1:00 PM',
      'Sunday': 'Closed',
    },
    services: [
      'Addiction Treatment Services',
      'Mental Health Services',
      'Virtual Walk-In Clinic',
      'OHIP+ Covered Treatments and Visits',
      'Low Income Support',
    ],
    image:
      'https://readdy.ai/api/search-image?query=modern%20medical%20clinic%20building%20exterior%20with%20glass%20windows%20professional%20healthcare%20facility%20urban%20setting%20clean%20architecture%20welcoming%20entrance%20with%20natural%20lighting%20and%20parking%20area%20in%20Scarborough%20Ontario&width=1200&height=600&seq=scarborough-hero&orientation=landscape',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5!2d-79.2644!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzUzLjQiTiA3OcKwMTUnNTEuOCJX!5e0!3m2!1sen!2sca!4v1234567890',
  };

  const nearbyAreas = [
    'Kennedy Park',
    'Ionview',
    'Clairlea',
    'Dorset Park',
    'Bendale',
    'Midland Park',
    'West Hill',
    'Birch Cliff',
  ];

  const faqs = [
    {
      question: 'Where is the Scarborough TSCP location?',
      answer:
        'Our Scarborough addiction treatment center is located at 1261 Kennedy Rd, Unit 2, Scarborough, ON M1P 2L4. We are easily accessible from Highway 401 and served by TTC bus routes along Kennedy Road.',
    },
    {
      question: 'What are the hours for the Scarborough location?',
      answer:
        'We are open Monday 8:00 AM - 5:00 PM, Tuesday 7:30 AM - 6:00 PM, Wednesday 8:00 AM - 5:00 PM, Thursday 8:00 AM - 6:00 PM, Friday 8:00 AM - 1:00 PM, Saturday 9:00 AM - 1:00 PM, and closed on Sunday. We offer flexible scheduling to accommodate your needs.',
    },
    {
      question: 'Is parking available at the Scarborough center?',
      answer:
        'Yes, we have convenient on-site parking available for all patients and visitors at our Kennedy Road location in Scarborough.',
    },
    {
      question: 'Do you accept OHIP+ at the Scarborough location?',
      answer:
        'Yes, our Scarborough treatment center accepts OHIP+ and provides covered treatments and visits. We also offer low income support programs to ensure everyone can access the care they need.',
    },
  ];

  const doctorSchedule = [
    {
      day: 'Monday',
      doctors: [{ name: 'Dr. Lao', hours: '8:00 AM – 5:00 PM' }]
    },
    {
      day: 'Tuesday',
      doctors: [{ name: 'Dr. Lao', hours: '7:30 AM – 6:00 PM' }]
    },
    {
      day: 'Wednesday',
      doctors: [{ name: 'Dr. Lao', hours: '8:00 AM – 5:00 PM' }]
    },
    {
      day: 'Thursday',
      doctors: [
        { name: 'Dr. Sadik', hours: '8:00 AM – 4:00 PM' },
        { name: 'Dr. Nasirinejad', hours: '4:00 PM – 6:00 PM' }
      ]
    },
    {
      day: 'Friday',
      doctors: [{ name: 'Dr. Lao', hours: '8:00 AM – 1:00 PM' }]
    },
    {
      day: 'Saturday',
      doctors: [{ name: 'Dr. Sadik', hours: '9:00 AM – 1:00 PM' }]
    },
    {
      day: 'Sunday',
      doctors: []
    }
  ];

  return (
    <>
      <SEOSchema
        data={{
          type: 'HealthAndBeautyBusiness',
          name: location.name,
          description: `${location.name} provides comprehensive addiction treatment and mental health services in Scarborough, Ontario. Located at ${location.address}, we offer OHIP+ covered treatments, virtual walk-in clinic, and support for individuals seeking recovery from addiction and mental health challenges.`,
          url: 'https://tscp.com/locations/scarborough',
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

      {/* Hero Section - Fully Responsive */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src={location.image}
            alt={`${location.name} exterior building view at Kennedy Road in Scarborough`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="mb-4 sm:mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {location.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 opacity-90 px-4">
              Comprehensive Addiction Treatment &amp; Mental Health Services in Scarborough
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-fill text-lg sm:text-xl md:text-2xl" />
                <span className="text-center sm:text-left">
                  {location.address}, {location.city}
                </span>
              </div>
              <div className="hidden sm:block text-white/50">|</div>
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-lg sm:text-xl md:text-2xl" />
                <a
                  href={`tel:${location.phone}`}
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  {location.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions - Fully Responsive */}
      <section className="py-4 sm:py-6 md:py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-4xl mx-auto"
            aria-label="Quick actions for Scarborough location"
          >
            <a
              href={`tel:${location.phone}`}
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-lg sm:text-xl" />
              <span>Call Now</span>
            </a>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-map-line text-lg sm:text-xl" />
              <span>Get Directions</span>
            </a>
            <a
              href="/get-help"
              className="bg-accent text-text-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-center font-semibold hover:bg-accent/80 transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
            >
              <i className="ri-calendar-line text-lg sm:text-xl" />
              <span>Book Appointment</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Main Content - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Location Details - Show only on mobile */}
            <div className="lg:hidden mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3 sm:mb-4 flex items-center gap-2">
                  <i className="ri-information-line text-primary text-xl sm:text-2xl" />
                  <span>Location Details</span>
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">
                      Address
                    </h4>
                    <address className="not-italic text-text-muted text-xs sm:text-sm">
                      {location.address}
                      <br />
                      {location.city}, {location.province} {location.postalCode}
                    </address>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">
                      Phone
                    </h4>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-text-dark text-xs sm:text-sm">
                        Hours
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        isOpen 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <dl className="space-y-1 text-xs sm:text-sm">
                      {Object.entries(location.hours).map(([day, hrs]) => (
                        <div 
                          key={day} 
                          className={`flex justify-between gap-2 py-1 px-2 rounded ${
                            day === currentDay ? 'bg-primary/10 font-semibold' : ''
                          }`}
                        >
                          <dt className={day === currentDay ? 'text-primary' : 'text-text-muted'}>
                            {day}:
                          </dt>
                          <dd className={day === currentDay ? 'text-primary' : 'text-text-dark font-medium'}>
                            {hrs}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-2 sm:space-y-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="block w-full bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                    >
                      <i className="ri-phone-line mr-2" />
                      Call Now
                    </a>
                    <a
                      href="/get-help"
                      className="block w-full bg-accent text-text-dark px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-accent/90 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                    >
                      <i className="ri-calendar-line mr-2" />
                      Book Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-10 md:space-y-12">
                {/* About Section */}
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <i className="ri-hospital-line text-primary text-2xl sm:text-3xl" />
                    <span>About Our Scarborough Location</span>
                  </h2>
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-text-muted space-y-3 sm:space-y-4">
                    <p>
                      <strong>Welcome to TSCP's Scarborough Addiction Treatment Center</strong>, conveniently located on Kennedy Road in the heart of Scarborough. Our state-of-the-art facility provides comprehensive addiction treatment and mental health services to residents of Scarborough and surrounding communities.
                    </p>
                    <p>
                      At our Scarborough location, we understand the unique challenges faced by individuals struggling with addiction and mental health issues. Our dedicated team of healthcare professionals offers personalized treatment plans tailored to each patient's specific needs, ensuring the highest quality of care in a comfortable and supportive environment.
                    </p>
                    <p>
                      Located at 1261 Kennedy Rd, Unit 2, our Scarborough addiction treatment center is easily accessible by public transit and offers convenient parking for patients and visitors. We serve the entire Scarborough community, including Kennedy Park, Ionview, Clairlea, Dorset Park, and surrounding neighborhoods.
                    </p>
                  </div>
                </article>

                {/* Services Section - Responsive Grid */}
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <i className="ri-heart-pulse-line text-primary text-2xl sm:text-3xl"></i>
                    <span>Services Available in Scarborough</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {location.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="ri-check-line text-primary text-lg sm:text-xl"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-text-dark mb-1 text-sm sm:text-base">{service}</h3>
                            <p className="text-xs sm:text-sm text-text-muted">
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

                {/* Doctor's Schedule - 2 Column Grid */}
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <i className="ri-calendar-check-line text-primary text-2xl sm:text-3xl"></i>
                    <span>Doctor's Schedule</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {doctorSchedule.map((schedule) => {
                      const isToday = schedule.day === currentDay;
                      const isClosed = schedule.doctors.length === 0;
                      
                      return (
                        <div
                          key={schedule.day}
                          className={`bg-white rounded-lg shadow-md border-2 transition-all ${
                            isToday 
                              ? 'border-primary ring-2 ring-primary/20' 
                              : 'border-gray-200'
                          } ${isClosed ? 'bg-gray-50' : ''}`}
                        >
                          <div className="p-4 sm:p-5">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className={`text-base sm:text-lg font-bold ${
                                isToday ? 'text-primary' : 'text-text-dark'
                              }`}>
                                {schedule.day}
                              </h3>
                              {isToday && (
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  isOpen 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-red-100 text-red-700'
                                }`}>
                                  {isOpen ? 'Open Now' : 'Closed'}
                                </span>
                              )}
                            </div>
                            
                            {isClosed ? (
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                  <i className="ri-close-line text-gray-500 text-sm sm:text-base"></i>
                                </div>
                                <div className="flex-1">
                                  <p className="font-semibold text-gray-500 text-sm sm:text-base">Closed</p>
                                  <p className="text-xs sm:text-sm text-text-muted">Not available</p>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {schedule.doctors.map((doctor, idx) => (
                                  <div key={idx} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                      isToday ? 'bg-primary/20' : 'bg-primary/10'
                                    }`}>
                                      <i className={`ri-user-line text-sm sm:text-base ${
                                        isToday ? 'text-primary' : 'text-primary'
                                      }`}></i>
                                    </div>
                                    <div className="flex-1">
                                      <p className={`font-semibold text-sm sm:text-base ${
                                        isToday ? 'text-primary' : 'text-text-dark'
                                      }`}>
                                        {doctor.name}
                                      </p>
                                      <p className="text-xs sm:text-sm text-text-muted">{doctor.hours}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-800">
                      <i className="ri-information-line mr-2"></i>
                      <strong>Note:</strong> Doctor schedules are subject to change. Please call ahead to confirm availability.
                    </p>
                  </div>
                </article>

                {/* Why Choose - Responsive Grid */}
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <i className="ri-star-line text-primary text-2xl sm:text-3xl" />
                    <span>Why Choose Our Scarborough Center</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-primary text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-1 sm:mb-2 text-sm sm:text-base">Convenient Location</h3>
                        <p className="text-text-muted text-xs sm:text-sm">
                          Easy access from Highway 401 and TTC routes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-heart-line text-primary text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-1 sm:mb-2 text-sm sm:text-base">Expert Care Team</h3>
                        <p className="text-text-muted text-xs sm:text-sm">
                          Experienced addiction and mental health specialists
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-shield-check-line text-primary text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-1 sm:mb-2 text-sm sm:text-base">OHIP+ Coverage</h3>
                        <p className="text-text-muted text-xs sm:text-sm">
                          Fully covered treatments for eligible patients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-primary text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark mb-1 sm:mb-2 text-sm sm:text-base">Flexible Hours</h3>
                        <p className="text-text-muted text-xs sm:text-sm">
                          Extended weekday and Saturday hours available
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Served - Responsive Grid */}
                <article>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <i className="ri-community-line text-primary text-2xl sm:text-3xl" />
                    <span>Serving Scarborough Communities</span>
                  </h2>
                  <p className="text-text-muted mb-4 sm:mb-6 text-sm sm:text-base">
                    Our Scarborough addiction treatment center proudly serves patients from throughout Scarborough and nearby areas, including:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {nearbyAreas.map((area, index) => (
                      <div
                        key={index}
                        className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 text-center text-text-dark font-medium text-xs sm:text-sm hover:border-primary transition-colors"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              {/* Sidebar - Responsive - Hide on mobile, show on desktop */}
              <aside className="hidden lg:block lg:col-span-1 space-y-6 sm:space-y-8">
                {/* Contact Card - Sticky on Desktop */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 lg:sticky lg:top-24">
                  <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3 sm:mb-4 flex items-center gap-2">
                    <i className="ri-information-line text-primary text-xl sm:text-2xl" />
                    <span>Location Details</span>
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">
                        Address
                      </h4>
                      <address className="not-italic text-text-muted text-xs sm:text-sm">
                        {location.address}
                        <br />
                        {location.city}, {location.province} {location.postalCode}
                      </address>
                    </div>

                    <div>
                      <h4 className="font-bold text-text-dark mb-1 sm:mb-2 text-xs sm:text-sm">
                        Phone
                      </h4>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer text-sm sm:text-base"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-text-dark text-xs sm:text-sm">
                          Hours
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          isOpen 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {isOpen ? 'Open' : 'Closed'}
                        </span>
                      </div>
                      <dl className="space-y-1 text-xs sm:text-sm">
                        {Object.entries(location.hours).map(([day, hrs]) => (
                          <div 
                            key={day} 
                            className={`flex justify-between gap-2 py-1 px-2 rounded ${
                              day === currentDay ? 'bg-primary/10 font-semibold' : ''
                            }`}
                          >
                            <dt className={day === currentDay ? 'text-primary' : 'text-text-muted'}>
                              {day}:
                            </dt>
                            <dd className={day === currentDay ? 'text-primary' : 'text-text-dark font-medium'}>
                              {hrs}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-2 sm:space-y-3">
                      <a
                        href={`tel:${location.phone}`}
                        className="block w-full bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                      >
                        <i className="ri-phone-line mr-2" />
                        Call Now
                      </a>
                      <a
                        href="/get-help"
                        className="block w-full bg-accent text-text-dark px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-center font-semibold hover:bg-accent/90 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                      >
                        <i className="ri-calendar-line mr-2" />
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

      {/* Map Section - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 sm:mb-8 text-center">
              Find Us in Scarborough
            </h2>
            <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="400"
                className="sm:h-[450px] md:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${location.name} at ${location.address}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 sm:mb-8 text-center">
              Common Questions About Our Scarborough Location
            </h2>
            <div
              className="space-y-3 sm:space-y-4"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-base sm:text-lg font-bold text-text-dark mb-2 sm:mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-text-muted text-sm sm:text-base" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Recovery in Scarborough?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-4">
              Contact our Scarborough location today for a confidential consultation. We're here to help you take the first step toward healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href={`tel:${location.phone}`}
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
              >
                Call {location.phone}
              </a>
              <a
                href="/get-help"
                className="bg-accent text-text-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer whitespace-nowrap rounded-lg"
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

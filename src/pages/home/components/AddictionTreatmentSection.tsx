export default function AddictionTreatmentSection() {
  const services = [
    {
      title: 'Addiction Treatment',
      description: 'Private, clinic-based support to discuss addiction treatment options.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-1.jpg',
      links: {
        getHelp: '/get-help/addiction-treatment',
        learnMore: '/treatments/addiction-treatment'
      }
    },
    {
      title: 'Kadain Treatment',
      description: 'Kadain treatment provided when clinically appropriate, with medical monitoring.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-2.jpg',
      links: {
        getHelp: '/get-help/kadain',
        learnMore: '/treatments/kadain-treatment'
      }
    },
    {
      title: 'Methadone Treatment',
      description: 'Medically supervised methadone treatment when clinically appropriate.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-3.jpg',
      links: {
        getHelp: '/get-help/methadone',
        learnMore: '/treatments/methadone-treatment'
      }
    },
    {
      title: 'Suboxone Treatment',
      description: 'Suboxone treatment offered following clinical assessment.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-4.jpg',
      links: {
        getHelp: '/get-help/suboxone',
        learnMore: '/treatments/suboxone-treatment'
      }
    },
    {
      title: 'Quit Smoking',
      description: 'Clinical support to help individuals reduce or quit smoking.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-5.jpg',
      links: {
        getHelp: '/get-help/quit-smoking',
        learnMore: '/treatments/quit-smoking'
      }
    },
    {
      title: 'Quit Alcohol',
      description: 'Clinic-based support for individuals seeking help with alcohol use.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-6.jpg',
      links: {
        getHelp: '/get-help/quit-alcohol',
        learnMore: '/treatments/quit-alcohol'
      }
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark leading-tight">
              Addiction Treatment Services
            </h2>
          </div>
          <a
            href="#all-services"
            className="bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
          >
            View All Services
          </a>
        </div>

        <p className="text-text-light text-base mb-12 max-w-3xl">
          Clinic-based addiction treatment with onsite pharmacy support across the GTA.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.links.getHelp}
                    className="bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap text-center uppercase tracking-wide"
                  >
                    Get Help
                  </a>
                  <a
                    href={service.links.learnMore}
                    className="border border-border-light text-text-dark px-6 py-3 text-sm font-medium hover:bg-accent transition-all duration-300 cursor-pointer whitespace-nowrap text-center uppercase tracking-wide"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-light text-base">
            <span className="text-primary font-semibold">Free</span> Let's make something great work together.{' '}
            <a href="#contact" className="text-primary hover:text-secondary underline cursor-pointer">
              Get Free Quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

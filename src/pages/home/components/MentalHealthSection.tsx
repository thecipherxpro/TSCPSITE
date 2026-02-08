export default function MentalHealthSection() {
  const services = [
    {
      title: 'Depression',
      description: 'Confidential clinic-based care and support for depression.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-1.jpg',
      links: {
        getHelp: '/get-help/depression',
        learnMore: '/treatments/depression'
      }
    },
    {
      title: 'Insomnia',
      description: 'Clinical assessment and care for sleep-related concerns.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-2.jpg',
      links: {
        getHelp: '/get-help/insomnia',
        learnMore: '/treatments/insomnia'
      }
    },
    {
      title: 'Medical Weight Loss',
      description: 'Medically supervised weight loss focused on health and safety.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-3.jpg',
      links: {
        getHelp: '/get-help/weight-loss',
        learnMore: '/treatments/medical-weight-loss'
      }
    },
    {
      title: 'Pharmacist Prescribing',
      description: 'Pharmacist prescribing services available at select locations.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-4.jpg',
      links: {
        learnMore: '/treatments/pharmacist-prescribing'
      }
    },
    {
      title: 'Anxiety',
      description: 'Clinical care and support for anxiety-related concerns.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-5.jpg',
      links: {
        getHelp: '/get-help/anxiety',
        learnMore: '/treatments/anxiety'
      }
    },
    {
      title: 'ADHD',
      description: 'Assessment and treatment for Attention-Deficit / Hyperactivity Disorder.',
      image: 'https://html.awaikenthemes.com/hipno/images/service-image-6.jpg',
      links: {
        getHelp: '/get-help/adhd',
        learnMore: '/treatments/adhd'
      }
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark leading-tight">
              Mental Health Treatment Services
            </h2>
          </div>
        </div>

        <p className="text-text-light text-base mb-12 max-w-3xl">
          Clinic-based care for common mental health conditions across the GTA.
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
                  {service.links.getHelp && (
                    <a
                      href={service.links.getHelp}
                      className="bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap text-center uppercase tracking-wide"
                    >
                      Get Help
                    </a>
                  )}
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
      </div>
    </section>
  );
}

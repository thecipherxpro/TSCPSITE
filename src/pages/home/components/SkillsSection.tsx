export default function SkillsSection() {
  const features = [
    {
      icon: 'https://html.awaikenthemes.com/hipno/images/icon-why-choose-1.svg',
      title: 'Experienced Professionals',
      description: 'Our team consists of licensed therapists with years of experience.'
    },
    {
      icon: 'https://html.awaikenthemes.com/hipno/images/icon-why-choose-2.svg',
      title: 'Client-Centered Approach',
      description: 'We prioritize your unique needs and goals in every session.'
    },
    {
      icon: 'https://html.awaikenthemes.com/hipno/images/icon-why-choose-3.svg',
      title: 'Safe and Confidential Environment',
      description: 'Your privacy and comfort are our top priorities.'
    },
    {
      icon: 'https://html.awaikenthemes.com/hipno/images/icon-why-choose-4.svg',
      title: 'Commitment to Growth',
      description: 'We support your journey toward lasting positive change.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://html.awaikenthemes.com/hipno/images/why-choose-img-1.jpg"
              alt="Why choose us"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32">
              <img
                src="https://html.awaikenthemes.com/hipno/images/contact-circle-img.svg"
                alt="Decoration"
                className="w-full h-full animate-spin-slow"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
              Trusted care, lasting positive change
            </h2>
            <p className="text-text-light text-base mb-8 leading-relaxed">
              With a commitment to compassionate, evidence-based care, we empower individuals to create lasting positive change in their lives. Our team of experienced therapists provides.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-dark mb-1">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row gap-6 items-start">
              <img
                src="https://html.awaikenthemes.com/hipno/images/why-choose-img-2.jpg"
                alt="Mental wellness"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  Choosing Us for Mental Wellness
                </h3>
                <p className="text-text-light text-sm mb-4 leading-relaxed">
                  Choosing us for your mental wellness means partnering with a dedicated team of professionals committed to your growth and healing. Our holistic approach combines evidence-based therapies, personalized support, and a compassionate.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

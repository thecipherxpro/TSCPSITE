export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://html.awaikenthemes.com/hipno/images/about-img-1.jpg"
                  alt="Clinic consultation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src="https://html.awaikenthemes.com/hipno/images/about-img-2.jpg"
                  alt="Professional care"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="pt-12">
                <img
                  src="https://html.awaikenthemes.com/hipno/images/about-img-1.jpg"
                  alt="Treatment support"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Customer Review Box */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-text-dark font-semibold mb-3">
                Customer Review <span className="text-primary">27,120</span>
              </p>
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://html.awaikenthemes.com/hipno/images/customer-img-${i}.jpg`}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold border-2 border-white">
                  27k
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
              Guiding minds, healing hearts, finding peace
            </h2>
            <p className="text-text-light text-base mb-8 leading-relaxed">
              At our mental therapy and counseling center, we are dedicated to guiding individuals on a journey toward inner peace and resilience.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Our Vision</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Our vision is to create a world where mental wellness is accessible, stigma-free, and empowering, enabling individuals to lead.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Our Mission</h3>
                <ul className="space-y-2">
                  {[
                    'Provide Compassionate Care',
                    'Promote Mental Wellness',
                    'Encourage Lifelong Healing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-text-light text-sm">
                      <i className="ri-checkbox-circle-fill text-primary"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap text-center uppercase tracking-wide"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="bg-accent text-text-dark px-8 py-4 text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap text-center uppercase tracking-wide"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

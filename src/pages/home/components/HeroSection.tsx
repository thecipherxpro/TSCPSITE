
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: 'url(https://html.awaikenthemes.com/hipno/images/hero-bg.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      
      <div className="container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Welcome Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block text-accent text-sm sm:text-base font-medium uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              Welcome to TSCP
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Your Journey to Recovery Starts Here&nbsp;
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 sm:mb-10">
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Dedicated to helping community members heal, with over 10+ years of experience in addiction treatment and mental health services
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto">
              <a
                href="/get-help"
                className="w-full sm:w-auto bg-primary text-white px-8 sm:px-10 lg:px-12 py-4 lg:py-5 text-base sm:text-lg font-semibold hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide text-center rounded-sm shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
              <a
                href="/locations"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 lg:px-12 py-4 lg:py-5 text-base sm:text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide text-center rounded-sm"
              >
                Find Locations
              </a>
            </div>
          </div>

          {/* Trust Badges - Centered Two Column Layout */}
          <div className="w-full">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  'MAT Program',
                  'Harm Control', 
                  'Medication Delivery',
                  'Family Counselling'
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center justify-center text-white py-3 sm:py-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-center">
                      <i className="ri-checkbox-circle-fill text-accent flex-shrink-0 text-lg sm:text-sm"></i>
                      <span className="text-sm sm:text-base lg:text-lg font-medium leading-tight">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

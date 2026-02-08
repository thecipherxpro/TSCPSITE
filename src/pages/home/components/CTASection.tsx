export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-soft-bg rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Get Help Now
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Need to speak with a clinic?
              </h2>
              <p className="text-text-light text-base mb-8 leading-relaxed">
                Clinic and Onsite Pharmacy Care
              </p>
              <a
                href="/locations"
                className="inline-block bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
              >
                Find a Location
              </a>
            </div>

            {/* Image */}
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://html.awaikenthemes.com/hipno/images/cta-img.png"
                alt="Professional therapist"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

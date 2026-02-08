export default function CaseStudySection() {
  const caseStudies = [
    {
      title: 'Social Anxiety Breakthrough',
      description: 'Through a personalized approach, this case study explores the journey of overcoming social anxiety.',
      image: 'https://html.awaikenthemes.com/hipno/images/case-study-img-1.jpg',
      link: '/case-study/social-anxiety'
    },
    {
      title: 'Stronger Relationships',
      description: 'Through a personalized approach, this case study explores the journey of overcoming social anxiety.',
      image: 'https://html.awaikenthemes.com/hipno/images/case-study-img-2.jpg',
      link: '/case-study/relationships'
    },
    {
      title: 'Stress Management Success',
      description: 'Through a personalized approach, this case study explores the journey of overcoming social anxiety.',
      image: 'https://html.awaikenthemes.com/hipno/images/case-study-img-3.jpg',
      link: '/case-study/stress-management'
    }
  ];

  return (
    <section id="case-study" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Case Study's
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark leading-tight">
              Real Stories of Healing and Growth
            </h2>
          </div>
          <a
            href="#all-cases"
            className="bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
          >
            View All Case Study's
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <a href={study.link} className="block">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors">
                  <a href={study.link} className="cursor-pointer">
                    {study.title}
                  </a>
                </h3>
                <p className="text-text-light text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>
                <a
                  href={study.link}
                  className="inline-flex items-center text-primary text-sm font-medium hover:text-secondary transition-colors cursor-pointer uppercase tracking-wide"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

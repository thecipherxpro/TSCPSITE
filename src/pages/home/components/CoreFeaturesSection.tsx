import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function CoreFeaturesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const treatments = [
    {
      id: 'addiction',
      title: 'Addiction Treatment',
      icon: 'ri-heart-pulse-line',
      description: 'Comprehensive addiction treatment programs designed to help you overcome substance dependencies with medical support, counselling, and ongoing care.',
      image: 'https://readdy.ai/api/search-image?query=professional%20medical%20therapy%20session%20in%20modern%20bright%20clinic%20with%20counselor%20and%20patient%20having%20supportive%20conversation%2C%20warm%20natural%20lighting%2C%20clean%20minimalist%20office%20setting%2C%20hopeful%20atmosphere%2C%20high%20quality%20photography&width=800&height=600&seq=addiction-treatment-bento-modern&orientation=landscape',
      learnLink: '/treatments/addiction-treatment',
      helpLink: '/get-help/addiction-treatment'
    },
    {
      id: 'methadone',
      title: 'Methadone Treatment',
      icon: 'ri-medicine-bottle-line',
      description: 'Safe and effective methadone maintenance treatment to help manage opioid dependency with medical supervision and counselling support.',
      image: 'https://readdy.ai/api/search-image?query=medical%20professional%20preparing%20methadone%20medication%20in%20clean%20modern%20pharmacy%20clinic%20with%20organized%20medical%20supplies%2C%20bright%20professional%20healthcare%20environment%2C%20safety%20and%20precision%20focus%2C%20high%20quality%20photography&width=500&height=600&seq=methadone-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/methadone-treatment',
      helpLink: '/get-help/methadone'
    },
    {
      id: 'suboxone',
      title: 'Suboxone Treatment',
      icon: 'ri-capsule-line',
      description: 'Evidence-based Suboxone therapy for opioid use disorder, providing relief from withdrawal symptoms and reducing cravings safely.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20provider%20consulting%20patient%20about%20medication%20treatment%20in%20comfortable%20modern%20medical%20office%2C%20professional%20and%20caring%20atmosphere%2C%20natural%20light%2C%20clean%20clinical%20setting%2C%20high%20quality%20photography&width=500&height=600&seq=suboxone-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/suboxone-treatment',
      helpLink: '/get-help/suboxone'
    },
    {
      id: 'adhd',
      title: 'ADHD',
      icon: 'ri-focus-3-line',
      description: 'Comprehensive ADHD assessment and treatment for adults, including medication management and behavioral strategies to improve focus and daily functioning.',
      image: 'https://readdy.ai/api/search-image?query=professional%20clinical%20assessment%20session%20for%20adult%20ADHD%20in%20modern%20bright%20medical%20office%20with%20focused%20patient%20and%20understanding%20physician%2C%20calm%20supportive%20environment%2C%20high%20quality%20photography&width=500&height=600&seq=adhd-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/adhd',
      helpLink: '/get-help/adhd'
    },
    {
      id: 'anxiety',
      title: 'Anxiety',
      icon: 'ri-mind-map',
      description: 'Professional anxiety treatment combining therapy and medication management to help you regain control and find peace in your daily life.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20therapy%20session%20in%20calming%20modern%20office%20with%20therapist%20and%20patient%20in%20comfortable%20setting%2C%20soft%20natural%20lighting%2C%20serene%20atmosphere%20with%20plants%2C%20high%20quality%20photography&width=500&height=600&seq=anxiety-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/anxiety',
      helpLink: '/get-help/anxiety'
    },
    {
      id: 'depression',
      title: 'Depression',
      icon: 'ri-emotion-line',
      description: 'Compassionate depression treatment with experienced professionals who provide therapy, medication management, and ongoing support.',
      image: 'https://readdy.ai/api/search-image?query=supportive%20counseling%20session%20in%20warm%20inviting%20therapy%20office%20with%20natural%20light%20and%20comfortable%20seating%2C%20hopeful%20healing%20atmosphere%2C%20professional%20therapist%20creating%20safe%20space%2C%20high%20quality%20photography&width=500&height=600&seq=depression-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/depression',
      helpLink: '/get-help/depression'
    },
    {
      id: 'insomnia',
      title: 'Insomnia',
      icon: 'ri-moon-clear-line',
      description: 'Effective insomnia treatment addressing sleep disorders through medical evaluation, behavioral therapy, and when needed, medication support.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20consultation%20for%20sleep%20therapy%20with%20calm%20serene%20atmosphere%2C%20soft%20blue%20lighting%20suggesting%20night%20time%2C%20comfortable%20professional%20medical%20setting%2C%20high%20quality%20photography&width=500&height=600&seq=insomnia-treatment-bento-modern&orientation=portrait',
      learnLink: '/treatments/insomnia',
      helpLink: '/get-help/insomnia'
    },
    {
      id: 'weight-loss',
      title: 'Medical Weight Loss',
      icon: 'ri-heart-pulse-line',
      description: 'Medically supervised weight loss programs with physician guidance, personalized nutrition plans, and when appropriate, medication support.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20professional%20discussing%20weight%20loss%20plan%20with%20patient%20in%20modern%20bright%20medical%20office%2C%20healthy%20lifestyle%20concept%2C%20fresh%20vegetables%20and%20medical%20charts%2C%20professional%20supportive%20atmosphere%2C%20high%20quality%20photography&width=800&height=600&seq=weight-loss-treatment-bento-modern&orientation=landscape',
      learnLink: '/treatments/medical-weight-loss',
      helpLink: '/get-help/weight-loss'
    }
  ];

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-[#f8fafb] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#14b8a6]/10 px-4 py-2 rounded-full mb-4">
            <i className="ri-heart-pulse-line text-[#14b8a6] text-lg"></i>
            <span className="text-[#14b8a6] text-sm font-medium">Treatment Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4">
            How can we help today?
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of treatment options designed to support your journey to wellness
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                index === 0 || index === 7 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1' : 'sm:col-span-1 lg:col-span-1'
              }`}
            >
              {/* Image Container */}
              <div className={`relative w-full overflow-hidden ${
                index === 0 || index === 7 ? 'h-64 sm:h-80 lg:h-96' : 'h-64 sm:h-72 lg:h-80'
              }`}>
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Icon Badge - Top Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg group-hover:bg-[#14b8a6] group-hover:scale-110 transition-all duration-300">
                    <i className={`${treatment.icon} text-xl sm:text-2xl text-[#14b8a6] group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="relative p-5 sm:p-6 lg:p-7 bg-white">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-2 sm:mb-3 leading-tight group-hover:text-[#14b8a6] transition-colors duration-300">
                  {treatment.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-2">
                  {treatment.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href={treatment.learnLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f1f5f9] text-[#1e293b] px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-semibold hover:bg-[#14b8a6] hover:text-white transition-all duration-300 whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-book-open-line text-base"></i>
                    <span>Learn More</span>
                  </a>
                  <a
                    href={treatment.helpLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#14b8a6] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-semibold hover:bg-[#0f9b8e] hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-hand-heart-line text-base"></i>
                    <span>Get Help</span>
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#14b8a6] rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 border-t border-[#e2e8f0]"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14b8a6] mb-2">25+</div>
              <div className="text-xs sm:text-sm lg:text-base text-[#64748b] leading-tight">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14b8a6] mb-2">99%</div>
              <div className="text-xs sm:text-sm lg:text-base text-[#64748b] leading-tight">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14b8a6] mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base text-[#64748b] leading-tight">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

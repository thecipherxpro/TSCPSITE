
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function FeaturesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="bg-[#f8fafb] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Left Column - Virtual Consultation (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-[#d4e8f0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <i className="fas fa-bolt text-[#1e3a5f] text-xs"></i>
                </div>
                <span className="text-[#1e3a5f] text-xs font-medium">Health Care Everywhere with</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3 sm:mb-4 leading-tight">Virtual Consultation</h3>
              <p className="text-[#1e3a5f]/70 text-sm mb-4 sm:mb-6 leading-relaxed">
                Meet a Medicross Clinic provider online from the comfort of your home by video calling from your mobile phone or computer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <i className="fas fa-check text-[#1e3a5f] text-xs flex-shrink-0"></i>
                  <span className="text-[#1e3a5f] text-sm">Meet Leading Medical Experts</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <i className="fas fa-check text-[#1e3a5f] text-xs flex-shrink-0"></i>
                  <span className="text-[#1e3a5f] text-sm">Conveniently Arrange your Time</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <i className="fas fa-check text-[#1e3a5f] text-xs flex-shrink-0"></i>
                  <span className="text-[#1e3a5f] text-sm">It's Quick and Convenient to get the Diagnosis</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <i className="fas fa-check text-[#1e3a5f] text-xs flex-shrink-0"></i>
                  <span className="text-[#1e3a5f] text-sm">Caregiver or Translator can Join you</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-medium hover:bg-[#2d4a6f] transition-colors cursor-pointer whitespace-nowrap"
              >
                Read More Virtual Visits
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>

            {/* Video Call Image */}
            <div className="mt-4 sm:mt-6">
              <div className="w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20medical%20video%20consultation%20call%20on%20laptop%20screen%20showing%20friendly%20doctor%20and%20happy%20patient%20smiling%20during%20virtual%20healthcare%20appointment%2C%20modern%20telemedicine%20interface%2C%20clean%20bright%20medical%20office%20background%2C%20high%20quality%20professional%20photography&width=400&height=300&seq=virtual-consult-img-001&orientation=landscape"
                  alt="Virtual Consultation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Middle Column - 2 Cards Stacked (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5">
            {/* Doctors Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f5f5f5] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1e3a5f] rounded-full mb-4 sm:mb-5">
                  <i className="fas fa-user-md text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight">Our Doctors Medicross</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-5">
                  Select a doctor and schedule an appointment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada.
                </p>
              </div>
              <a
                href="#doctors"
                className="inline-flex items-center gap-2 text-[#1e3a5f] text-sm font-medium hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
              >
                View All Doctor
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </motion.div>

            {/* Appointments Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f5c563] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1e3a5f] rounded-full mb-4 sm:mb-5">
                  <i className="fas fa-calendar-check text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-2 sm:mb-3 leading-tight">Book An Appointments</h3>
                <p className="text-[#1e3a5f]/70 text-sm leading-relaxed mb-4 sm:mb-5">
                  Call +1 800-123-1234 or click to request a same-day appointment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 text-[#1e3a5f] text-sm font-medium hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
              >
                Request An Appointment
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Single Stats Card (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1e3a5f] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full"
            >
              {/* Years of Experience */}
              <div className="flex flex-col mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full mb-3 sm:mb-4">
                  <i className="fas fa-award text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5c563] mb-1 sm:mb-2">
                  25+
                </h3>
                <p className="text-white text-sm lg:text-base">
                  Years of Experience in the Medical Field
                </p>
              </div>

              {/* Customer Satisfaction */}
              <div className="flex flex-col mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full mb-3 sm:mb-4">
                  <i className="fas fa-smile text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5c563] mb-1 sm:mb-2">
                  99%
                </h3>
                <p className="text-white text-sm lg:text-base">
                  Customer Satisfaction is Our Success
                </p>
              </div>

              {/* Honorary Awards */}
              <div className="flex flex-col">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full mb-3 sm:mb-4">
                  <i className="fas fa-trophy text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5c563] mb-1 sm:mb-2">
                  16
                </h3>
                <p className="text-white text-sm lg:text-base">
                  Honorary Award for Best Quality Hospital
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

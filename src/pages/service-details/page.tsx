import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function ServiceDetailsPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const services = [
    'Couples Counseling',
    'Adolescent Counseling',
    'Depression Counseling',
    'Stress Counseling',
    'Meditation Counseling',
  ];

  const benefits = [
    'Improved emotional well-being',
    'Increased self-awareness',
    'Resilience and coping skills',
    'Better relationships',
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description:
        "The process begins with an in-depth conversation to understand your challenges, goals, and personal history. This helps us create a clear roadmap for your therapy journey.",
    },
    {
      number: '02',
      title: 'Tailored Approach',
      description:
        "The process begins with an in-depth conversation to understand your challenges, goals, and personal history. This helps us create a clear roadmap for your therapy journey.",
    },
    {
      number: '03',
      title: 'Collaborative Sessions',
      description:
        "The process begins with an in-depth conversation to understand your challenges, goals, and personal history. This helps us create a clear roadmap for your therapy journey.",
    },
  ];

  const whyChoose = [
    'Personal growth and empowerment',
    'Proven, evidence-based techniques',
    'Build resilience and confidence',
    'Emotional clarity and support',
  ];

  const faqs = [
    {
      question: 'What is Methadone Treatment, and how can it help me?',
      answer:
        "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
    },
    {
      question: "What if I don't feel a connection with my therapist?",
      answer:
        "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
    },
    {
      question: 'What should I expect in my first session?',
      answer:
        "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
    },
    {
      question: 'Will therapy be covered by my insurance?',
      answer:
        "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
    },
    {
      question: 'How long does therapy usually take?',
      answer:
        "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://html.awaikenthemes.com/hipno/images/page-header-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Methadone Treatment
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 text-sm text-white/80"
          >
            <a href="/" className="hover:text-white transition-colors cursor-pointer">
              home
            </a>
            <span>/</span>
            <a href="/#services" className="hover:text-white transition-colors cursor-pointer">
              services
            </a>
            <span>/</span>
            <span className="text-white">methadone treatment</span>
          </motion.nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              {/* Services Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 sm:p-8 mb-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-6">
                  services category
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-text-light hover:text-primary transition-colors cursor-pointer py-2 border-b border-gray-200 group"
                      >
                        <span className="text-sm sm:text-base">{service}</span>
                        <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-lg"
              >
                <div className="flex items-center justify-center mb-6 -space-x-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://html.awaikenthemes.com/hipno/images/customer-img-${num}.jpg`}
                        alt={`Customer ${num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-4 text-center">
                  Still have you any question?
                </h3>
                <a
                  href="tel:+01789859664"
                  className="block w-full bg-primary text-white text-center py-3 px-6 font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap"
                >
                  +01 789 859 664
                </a>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {/* Feature Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 sm:mb-12 overflow-hidden rounded-lg"
              >
                <img
                  src="https://html.awaikenthemes.com/hipno/images/service-image-2.jpg"
                  alt="Methadone Treatment"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-6 sm:space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-text-light text-sm sm:text-base leading-relaxed"
                >
                  At we understand that every individual's journey is unique. Our methadone treatment
                  program is tailored to your specific needs, challenges, and goals. Whether you're
                  seeking support for opioid addiction, withdrawal management, or long-term recovery,
                  we provide a safe and compassionate environment where you can heal and rebuild your
                  life.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-text-light text-sm sm:text-base leading-relaxed"
                >
                  Our approach integrates evidence-based medical treatment and empathetic counseling to
                  help you achieve lasting recovery. Together, we'll work to develop strategies that
                  empower you to live a more balanced, fulfilling life free from addiction.
                </motion.p>

                {/* Therapy Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6">
                      Treatment benefits
                    </h2>
                    <p className="text-text-light text-sm sm:text-base mb-4 sm:mb-6">
                      Methadone treatment offers a path to greater stability, emotional balance and
                      long-term recovery.
                    </p>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-primary text-lg mt-0.5 flex-shrink-0"></i>
                          <span className="text-text-light text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src="https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg"
                      alt="Treatment Benefits"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Benefits Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 p-6 sm:p-8 rounded-lg"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg"
                        alt="Icon"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3">
                      improved health
                    </h3>
                    <p className="text-text-light text-sm sm:text-base">
                      Treatment helps manage withdrawal symptoms, reduce cravings and lead to better
                      physical and mental health.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-50 p-6 sm:p-8 rounded-lg"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src="https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg"
                        alt="Icon"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-3">
                      enhanced coping skills
                    </h3>
                    <p className="text-text-light text-sm sm:text-base">
                      Treatment helps develop healthy coping mechanisms and strategies for long-term
                      recovery and relapse prevention.
                    </p>
                  </motion.div>
                </div>

                {/* How It Works */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mt-12 sm:mt-16 mb-4 sm:mb-6"
                >
                  How methadone treatment works
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-text-light text-sm sm:text-base leading-relaxed mb-8 sm:mb-12"
                >
                  Methadone treatment begins with understanding your unique situation and recovery goals.
                  Through tailored medical supervision and counseling, we use proven techniques to
                  address your challenges and foster lasting recovery.
                </motion.p>

                {/* Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 sm:space-x-6"
                    >
                      <div className="flex-shrink-0">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary/20">
                          {step.number}
                        </h2>
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why Choose */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mt-12 sm:mt-16 mb-4 sm:mb-6"
                >
                  Why Choose Our Treatment
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-text-light text-sm sm:text-base leading-relaxed mb-6"
                >
                  Our methadone treatment provides a safe, supportive environment to overcome addiction,
                  rebuild your life, and achieve lasting recovery.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3 mb-8 sm:mb-12"
                >
                  {whyChoose.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-primary text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-text-light text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </motion.ul>

                {/* Video Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src="https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg"
                    alt="Video Background"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="ri-play-fill text-2xl sm:text-3xl text-primary ml-1"></i>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* FAQs */}
              <div className="mt-16 sm:mt-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-8 sm:mb-12"
                >
                  Frequently asked questions
                </motion.h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-semibold text-text-dark pr-4">
                          <span className="text-primary mr-2">{index + 1}.</span>
                          {faq.question}
                        </span>
                        <i
                          className={`ri-${
                            activeAccordion === index ? 'subtract' : 'add'
                          }-line text-xl text-primary flex-shrink-0 transition-transform`}
                        ></i>
                      </button>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 sm:px-6 pb-4 sm:pb-6"
                        >
                          <p className="text-text-light text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Get a free consultation
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <a
                href="tel:+01789859664"
                className="inline-flex items-center justify-center space-x-3 bg-white text-primary px-6 py-3 font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill text-xl"></i>
                <span>+01 789 859 664</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-3 bg-text-dark text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-message-3-fill text-xl"></i>
                <span>+01 789 859 664</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

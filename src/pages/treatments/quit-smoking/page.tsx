import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function QuitSmokingPage() {
  const serviceData = {
    title: 'Quit Smoking Program',
    breadcrumb: 'Quit Smoking',
    heroImage: 'https://readdy.ai/api/search-image?query=Healthcare%20professional%20counseling%20patient%20about%20smoking%20cessation%20in%20modern%20medical%20clinic%20with%20supportive%20environment%20and%20educational%20materials%20about%20quitting%20smoking&width=800&height=400&seq=quit-smoking-hero&orientation=landscape',
    description: [
      'TSCP provides comprehensive smoking cessation support to help individuals reduce or quit smoking through evidence-based clinical approaches. Our healthcare professionals understand that quitting smoking is challenging and offer personalized support to help you achieve your goals.',
      'Our quit smoking program combines medical support, behavioral counseling, and practical strategies to address both the physical and psychological aspects of nicotine dependence. We work with you to develop a personalized plan that fits your lifestyle and increases your chances of long-term success.',
    ],
    benefits: {
      title: 'Benefits of Quitting Smoking',
      description: 'Quitting smoking provides immediate and long-term health benefits while improving your overall quality of life and financial well-being.',
      list: [
        'Improved cardiovascular and respiratory health',
        'Reduced risk of cancer and other smoking-related diseases',
        'Better sense of taste and smell',
        'Increased energy levels and improved fitness'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Health Improvement',
        description: 'Quitting smoking rapidly improves lung function, circulation, and reduces risk of heart disease and cancer.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Support & Guidance',
        description: 'Professional support and proven strategies significantly increase your chances of successfully quitting smoking.'
      }
    ],
    process: {
      title: 'How Our Quit Smoking Program Works',
      description: 'Our smoking cessation program provides structured support and proven strategies to help you successfully quit smoking and maintain long-term abstinence.',
      steps: [
        {
          number: '01',
          title: 'Assessment & Planning',
          description: 'We evaluate your smoking history, triggers, and previous quit attempts to develop a personalized cessation plan tailored to your needs.'
        },
        {
          number: '02',
          title: 'Treatment Options',
          description: 'We discuss various cessation aids including nicotine replacement therapy, prescription medications, and behavioral strategies.'
        },
        {
          number: '03',
          title: 'Ongoing Support',
          description: 'Regular follow-up appointments provide continued support, monitor progress, and adjust your quit plan as needed for success.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Smoking Cessation',
      description: 'TSCP provides evidence-based smoking cessation support with personalized treatment plans and ongoing professional guidance.',
      list: [
        'Healthcare professionals experienced in smoking cessation',
        'Personalized quit plans based on your smoking history',
        'Access to proven cessation medications and therapies',
        'Behavioral counseling and coping strategies',
        'Ongoing support throughout your quit journey',
        'Non-judgmental, supportive treatment environment'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'What methods do you use to help people quit smoking?',
        answer: 'We offer various evidence-based approaches including nicotine replacement therapy, prescription medications, behavioral counseling, and personalized quit plans tailored to your specific needs and smoking patterns.'
      },
      {
        question: 'How many attempts does it typically take to quit smoking successfully?',
        answer: 'Many people require multiple quit attempts before achieving long-term success. This is normal and does not indicate failure. Each attempt provides valuable learning experiences that increase future success rates.'
      },
      {
        question: 'Will I gain weight when I quit smoking?',
        answer: 'Some people experience modest weight gain when quitting smoking, but this can be managed with proper planning. We provide strategies for healthy eating and physical activity during your quit process.'
      },
      {
        question: 'How long do withdrawal symptoms last?',
        answer: 'Nicotine withdrawal symptoms typically peak within the first few days and gradually decrease over 2-4 weeks. We provide support and strategies to help manage these temporary symptoms.'
      },
      {
        question: 'Can you help if I\'ve tried to quit before and failed?',
        answer: 'Absolutely. Previous quit attempts provide valuable information about what works and what doesn\'t for you. We use this experience to develop a more effective, personalized quit plan.'
      }
    ],
    relatedServices: [
      'Addiction Treatment',
      'Quit Alcohol',
      'Anxiety Treatment',
      'Depression Treatment',
      'Medical Weight Loss',
      'Insomnia Treatment'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Quit Smoking' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ServiceDetailLayout data={serviceData} />
      </div>
      <Footer />
    </div>
  );
}

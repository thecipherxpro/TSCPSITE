import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function InsomniaPage() {
  const serviceData = {
    title: 'Insomnia Treatment Services',
    breadcrumb: 'Insomnia Treatment',
    heroImage: 'https://readdy.ai/api/search-image?query=Peaceful%20medical%20clinic%20with%20healthcare%20provider%20consulting%20patient%20about%20sleep%20disorders%20and%20insomnia%20treatment%20in%20calming%20clinical%20environment%20with%20sleep%20health%20educational%20materials&width=800&height=400&seq=insomnia-hero&orientation=landscape',
    description: [
      'TSCP provides clinical assessment and care for sleep-related concerns, including insomnia and other sleep disorders. Our healthcare professionals understand how sleep problems can significantly impact your daily life, work performance, and overall health and well-being.',
      'Our insomnia treatment program focuses on identifying the underlying causes of sleep difficulties and developing personalized treatment approaches. We offer evidence-based treatments in a supportive clinical environment to help you achieve better sleep quality and duration.',
    ],
    benefits: {
      title: 'Insomnia Treatment Benefits',
      description: 'Professional insomnia treatment helps restore healthy sleep patterns, improve daytime functioning, and enhance overall quality of life.',
      list: [
        'Improved sleep quality and duration',
        'Better daytime energy and alertness',
        'Enhanced mood and emotional regulation',
        'Improved work performance and concentration'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Sleep Quality',
        description: 'Professional treatment helps restore natural sleep patterns and improve overall sleep quality for better rest.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Daytime Function',
        description: 'Better sleep leads to improved energy, focus, and performance in daily activities and work responsibilities.'
      }
    ],
    process: {
      title: 'How Insomnia Treatment Works',
      description: 'Our insomnia treatment program provides comprehensive assessment and evidence-based treatments to help you achieve healthy, restorative sleep.',
      steps: [
        {
          number: '01',
          title: 'Sleep Assessment',
          description: 'A comprehensive evaluation of your sleep patterns, habits, medical history, and factors that may be contributing to your insomnia.'
        },
        {
          number: '02',
          title: 'Treatment Planning',
          description: 'Development of a personalized treatment plan that may include sleep hygiene education, behavioral therapy, and medication when appropriate.'
        },
        {
          number: '03',
          title: 'Sleep Monitoring',
          description: 'Regular follow-up appointments to track your sleep improvement, adjust treatments as needed, and provide ongoing support.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Insomnia Treatment',
      description: 'TSCP provides professional insomnia treatment with experienced healthcare providers using evidence-based approaches to sleep medicine.',
      list: [
        'Healthcare professionals experienced in sleep disorders',
        'Comprehensive sleep assessment and evaluation',
        'Evidence-based treatment approaches for insomnia',
        'Personalized treatment plans for individual sleep needs',
        'Sleep hygiene education and behavioral therapy',
        'Medication management when clinically appropriate'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'What causes insomnia?',
        answer: 'Insomnia can be caused by various factors including stress, anxiety, depression, medical conditions, medications, poor sleep habits, or environmental factors. Our healthcare professionals conduct thorough assessments to identify contributing factors.'
      },
      {
        question: 'How is insomnia diagnosed?',
        answer: 'Insomnia diagnosis involves a comprehensive evaluation of your sleep patterns, medical history, lifestyle factors, and may include sleep diaries or questionnaires to understand your specific sleep difficulties.'
      },
      {
        question: 'What treatments are available for insomnia?',
        answer: 'Treatment options include cognitive behavioral therapy for insomnia (CBT-I), sleep hygiene education, relaxation techniques, lifestyle modifications, and medication when appropriate. Treatment is tailored to your specific needs.'
      },
      {
        question: 'How long does insomnia treatment take?',
        answer: 'Treatment duration varies depending on the underlying causes and individual response. Some people see improvement within weeks, while chronic insomnia may require longer-term treatment and management.'
      },
      {
        question: 'Can insomnia be cured without medication?',
        answer: 'Many cases of insomnia can be effectively treated without medication through behavioral therapy, sleep hygiene improvements, and lifestyle changes. Medication may be used short-term or when other approaches are insufficient.'
      }
    ],
    relatedServices: [
      'Anxiety Treatment',
      'Depression Treatment',
      'ADHD Treatment',
      'Medical Weight Loss',
      'Addiction Treatment',
      'Pharmacist Prescribing'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Insomnia Treatment' }
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

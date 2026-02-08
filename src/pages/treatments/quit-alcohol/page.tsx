import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function QuitAlcoholPage() {
  const serviceData = {
    title: 'Alcohol Use Support Program',
    breadcrumb: 'Quit Alcohol',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20consultation%20room%20with%20medical%20provider%20discussing%20alcohol%20cessation%20support%20with%20patient%20in%20comfortable%20clinical%20setting%20with%20health%20education%20materials&width=800&height=400&seq=quit-alcohol-hero&orientation=landscape',
    description: [
      'TSCP provides clinic-based support for individuals seeking help with alcohol use concerns. Our healthcare professionals offer a safe, non-judgmental environment where you can discuss your relationship with alcohol and explore treatment options that may be appropriate for your situation.',
      'Our approach focuses on understanding your individual needs and circumstances while providing medical evaluation and support. We work collaboratively with you to develop strategies and connect you with appropriate resources for addressing alcohol-related concerns.',
    ],
    benefits: {
      title: 'Benefits of Addressing Alcohol Use',
      description: 'Addressing alcohol use concerns can lead to significant improvements in physical health, mental well-being, and overall quality of life.',
      list: [
        'Improved physical health and liver function',
        'Better sleep quality and energy levels',
        'Enhanced mental clarity and emotional stability',
        'Stronger relationships and social connections'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Health Recovery',
        description: 'Reducing or eliminating alcohol use leads to significant improvements in physical and mental health outcomes.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Professional Support',
        description: 'Access to healthcare professionals who understand alcohol-related concerns and can provide appropriate medical guidance.'
      }
    ],
    process: {
      title: 'How Our Alcohol Support Program Works',
      description: 'Our program provides compassionate, professional support to help you address alcohol use concerns and develop strategies for positive change.',
      steps: [
        {
          number: '01',
          title: 'Initial Consultation',
          description: 'A confidential discussion about your alcohol use patterns, concerns, and goals in a safe, non-judgmental healthcare environment.'
        },
        {
          number: '02',
          title: 'Assessment & Planning',
          description: 'Medical evaluation and development of an appropriate support plan that may include medical interventions and referrals to specialized services.'
        },
        {
          number: '03',
          title: 'Ongoing Support',
          description: 'Regular follow-up appointments to monitor progress, provide continued support, and adjust your care plan as needed.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Alcohol Use Support',
      description: 'TSCP provides professional, compassionate support for alcohol-related concerns in a confidential healthcare environment.',
      list: [
        'Licensed healthcare professionals with addiction medicine knowledge',
        'Confidential, non-judgmental treatment environment',
        'Medical evaluation and monitoring services',
        'Coordination with specialized addiction treatment services',
        'Flexible appointment scheduling to fit your needs',
        'Comprehensive approach addressing physical and mental health'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'How do I know if I need help with alcohol use?',
        answer: 'If alcohol use is affecting your health, relationships, work, or daily life, or if you have concerns about your drinking patterns, it may be beneficial to speak with a healthcare professional for evaluation and guidance.'
      },
      {
        question: 'Is alcohol treatment confidential?',
        answer: 'Yes, all discussions and treatment for alcohol-related concerns are strictly confidential. We follow all privacy regulations to protect your personal health information.'
      },
      {
        question: 'What happens during my first appointment?',
        answer: 'Your first appointment involves a confidential discussion about your alcohol use, health history, and concerns. We conduct a medical evaluation and discuss appropriate support options based on your individual needs.'
      },
      {
        question: 'Do you provide detox services?',
        answer: 'We provide medical evaluation and can coordinate with appropriate detox facilities if needed. The safety and medical supervision of alcohol withdrawal is our priority.'
      },
      {
        question: 'Can family members be involved in treatment?',
        answer: 'With your consent, family members can be involved in your care planning. We also provide guidance on family support and can refer to family counseling services when appropriate.'
      }
    ],
    relatedServices: [
      'Addiction Treatment',
      'Quit Smoking',
      'Depression Treatment',
      'Anxiety Treatment',
      'Insomnia Treatment',
      'ADHD Treatment'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Quit Alcohol' }
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

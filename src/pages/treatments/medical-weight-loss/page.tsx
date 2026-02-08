import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function MedicalWeightLossPage() {
  const serviceData = {
    title: 'Medical Weight Loss Program',
    breadcrumb: 'Medical Weight Loss',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20medical%20clinic%20with%20healthcare%20provider%20discussing%20medically%20supervised%20weight%20loss%20program%20with%20patient%20in%20modern%20clinical%20setting%20with%20health%20assessment%20materials&width=800&height=400&seq=weight-loss-hero&orientation=landscape',
    description: [
      'TSCP provides medically supervised weight loss programs focused on health and safety. Our healthcare professionals offer comprehensive weight management services that address both the physical and behavioral aspects of weight loss in a supportive clinical environment.',
      'Our medical weight loss approach includes thorough health assessment, personalized treatment planning, and ongoing medical supervision to ensure safe and effective weight loss. We focus on sustainable lifestyle changes and evidence-based treatments to help you achieve your health goals.',
    ],
    benefits: {
      title: 'Medical Weight Loss Benefits',
      description: 'Medically supervised weight loss provides safe, effective results with professional guidance and ongoing health monitoring.',
      list: [
        'Improved cardiovascular health and blood pressure',
        'Better diabetes management and blood sugar control',
        'Increased energy levels and mobility',
        'Enhanced self-confidence and quality of life'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Health Improvement',
        description: 'Medical weight loss leads to significant improvements in overall health, reducing risk of chronic diseases.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Medical Supervision',
        description: 'Professional medical oversight ensures safe weight loss with monitoring of health markers and progress.'
      }
    ],
    process: {
      title: 'How Medical Weight Loss Works',
      description: 'Our medical weight loss program provides comprehensive, medically supervised care to help you achieve sustainable weight loss safely.',
      steps: [
        {
          number: '01',
          title: 'Health Assessment',
          description: 'Comprehensive medical evaluation including health history, current medications, and assessment of weight-related health conditions.'
        },
        {
          number: '02',
          title: 'Personalized Plan',
          description: 'Development of a customized weight loss plan that may include dietary guidance, exercise recommendations, and medical interventions when appropriate.'
        },
        {
          number: '03',
          title: 'Ongoing Support',
          description: 'Regular monitoring appointments to track progress, adjust treatment plans, and provide continued medical supervision throughout your weight loss journey.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Medical Weight Loss',
      description: 'TSCP provides medically supervised weight loss with experienced healthcare professionals focused on safe, sustainable results.',
      list: [
        'Licensed healthcare professionals with weight management expertise',
        'Medically supervised programs with health monitoring',
        'Personalized treatment plans based on individual health needs',
        'Evidence-based weight loss medications when appropriate',
        'Comprehensive approach addressing nutrition and lifestyle',
        'Ongoing support and monitoring throughout your journey'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'Who is a candidate for medical weight loss?',
        answer: 'Medical weight loss may be appropriate for individuals with a BMI over 30, or over 27 with weight-related health conditions like diabetes or hypertension. Our healthcare professionals conduct thorough evaluations to determine candidacy.'
      },
      {
        question: 'What does medical supervision include?',
        answer: 'Medical supervision includes regular health monitoring, blood work when needed, medication management, progress tracking, and adjustments to your weight loss plan based on your response and health status.'
      },
      {
        question: 'Are weight loss medications safe?',
        answer: 'When prescribed and monitored by qualified healthcare professionals, weight loss medications can be safe and effective. We carefully evaluate each patient\'s health status and monitor for any side effects or complications.'
      },
      {
        question: 'How much weight can I expect to lose?',
        answer: 'Weight loss results vary for each individual based on starting weight, health conditions, adherence to the program, and other factors. We focus on sustainable, healthy weight loss of 1-2 pounds per week.'
      },
      {
        question: 'Will I need to follow a specific diet?',
        answer: 'We provide nutritional guidance and may recommend specific dietary approaches based on your health needs and preferences. The goal is to develop sustainable eating habits that support long-term weight management.'
      }
    ],
    relatedServices: [
      'ADHD Treatment',
      'Depression Treatment',
      'Anxiety Treatment',
      'Insomnia Treatment',
      'Pharmacist Prescribing',
      'Quit Smoking'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Medical Weight Loss' }
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

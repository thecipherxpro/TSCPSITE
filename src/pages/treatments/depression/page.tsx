import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function DepressionPage() {
  const serviceData = {
    title: 'Depression Treatment Services',
    breadcrumb: 'Depression Treatment',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20mental%20health%20clinic%20with%20healthcare%20provider%20offering%20depression%20treatment%20consultation%20in%20warm%20supportive%20medical%20office%20with%20comfortable%20seating%20and%20therapeutic%20environment&width=800&height=400&seq=depression-hero&orientation=landscape',
    description: [
      'TSCP provides confidential clinic-based care and support for depression through licensed healthcare professionals across the Greater Toronto Area. We understand that depression can significantly impact your daily life, relationships, and overall well-being, and we are here to provide compassionate, professional support.',
      'Our depression treatment approach focuses on comprehensive clinical evaluation, personalized treatment planning, and ongoing support to help you manage depression symptoms and work toward improved mental health. We provide a safe, non-judgmental environment where you can receive the care you need.',
    ],
    benefits: {
      title: 'Depression Treatment Benefits',
      description: 'Professional depression treatment helps alleviate symptoms, improve mood stability, and restore your ability to enjoy life and maintain healthy relationships.',
      list: [
        'Reduced depressive symptoms and improved mood',
        'Better sleep patterns and energy levels',
        'Enhanced motivation and daily functioning',
        'Improved relationships and social connections'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Mood Improvement',
        description: 'Professional treatment helps stabilize mood, reduce depressive symptoms, and restore emotional well-being.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Life Restoration',
        description: 'Treatment helps restore your ability to engage in activities you enjoy and maintain meaningful relationships.'
      }
    ],
    process: {
      title: 'How Depression Treatment Works',
      description: 'Our depression treatment program provides comprehensive, evidence-based care to help you overcome depression and maintain long-term mental wellness.',
      steps: [
        {
          number: '01',
          title: 'Clinical Assessment',
          description: 'A thorough evaluation of your depression symptoms, medical history, and life circumstances to understand your unique situation and needs.'
        },
        {
          number: '02',
          title: 'Treatment Development',
          description: 'We create a personalized treatment plan that may include therapy, medication management, and lifestyle modifications tailored to your specific needs.'
        },
        {
          number: '03',
          title: 'Ongoing Care',
          description: 'Regular follow-up appointments to monitor your progress, adjust treatment as needed, and provide continuous support throughout your recovery journey.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Depression Treatment',
      description: 'TSCP provides professional, compassionate depression treatment with experienced healthcare providers in a supportive clinical environment.',
      list: [
        'Licensed mental health professionals with depression treatment expertise',
        'Evidence-based treatment approaches and therapies',
        'Personalized treatment plans based on individual needs',
        'Confidential and non-judgmental treatment environment',
        'Flexible scheduling to accommodate your commitments',
        'Comprehensive approach addressing all aspects of mental health'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'How do I know if I have depression that needs professional treatment?',
        answer: 'If you experience persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, or thoughts of self-harm for more than two weeks, professional evaluation is recommended. Our healthcare providers can help assess your symptoms and determine appropriate treatment.'
      },
      {
        question: 'What types of depression treatment do you offer?',
        answer: 'We offer various evidence-based treatments including individual therapy, medication management when appropriate, and lifestyle counseling. Treatment plans are personalized based on your specific symptoms and needs.'
      },
      {
        question: 'How long does depression treatment take?',
        answer: 'Treatment duration varies for each individual. Some people notice improvement within weeks, while others may require longer-term treatment. We work with you to monitor progress and adjust the treatment timeline based on your response and needs.'
      },
      {
        question: 'Will I need medication for depression?',
        answer: 'Not everyone with depression requires medication. Treatment decisions are based on symptom severity, individual assessment, and your preferences. We discuss all available options and work together to determine the best approach for you.'
      },
      {
        question: 'Is depression treatment covered by insurance?',
        answer: 'Many insurance plans cover depression treatment services. We recommend checking with your insurance provider about coverage details. Our office can help verify your benefits and discuss payment options.'
      }
    ],
    relatedServices: [
      'Anxiety Treatment',
      'ADHD Treatment',
      'Insomnia Treatment',
      'Addiction Treatment',
      'Medical Weight Loss',
      'Pharmacist Prescribing'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Depression Treatment' }
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

import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function ADHDPage() {
  const serviceData = {
    title: 'ADHD Assessment and Treatment',
    breadcrumb: 'ADHD Treatment',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20medical%20clinic%20with%20healthcare%20provider%20conducting%20ADHD%20assessment%20and%20treatment%20consultation%20in%20modern%20clinical%20setting%20with%20educational%20materials%20and%20comfortable%20consultation%20area&width=800&height=400&seq=adhd-hero&orientation=landscape',
    description: [
      'TSCP provides assessment and treatment for Attention-Deficit/Hyperactivity Disorder (ADHD) through structured clinical care and ongoing support. Our healthcare professionals understand the impact ADHD can have on work, relationships, and daily functioning, and we offer comprehensive evaluation and treatment services.',
      'Our ADHD program includes thorough assessment, personalized treatment planning, and ongoing monitoring to help you manage ADHD symptoms effectively. We work with adults who may have been recently diagnosed or those seeking better management of existing ADHD symptoms.',
    ],
    benefits: {
      title: 'ADHD Treatment Benefits',
      description: 'Professional ADHD treatment helps improve focus, organization, and daily functioning while reducing the impact of ADHD symptoms on your life.',
      list: [
        'Improved focus and concentration abilities',
        'Better organization and time management skills',
        'Enhanced work and academic performance',
        'Reduced impulsivity and emotional regulation'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Enhanced Focus',
        description: 'Treatment helps improve attention span, concentration, and ability to complete tasks effectively.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Life Management',
        description: 'Learn strategies and skills to better manage daily responsibilities, work tasks, and personal relationships.'
      }
    ],
    process: {
      title: 'How ADHD Assessment and Treatment Works',
      description: 'Our ADHD program provides comprehensive assessment and evidence-based treatment to help you effectively manage ADHD symptoms.',
      steps: [
        {
          number: '01',
          title: 'Comprehensive Assessment',
          description: 'A thorough evaluation including medical history, symptom assessment, and psychological testing to accurately diagnose ADHD and understand your specific needs.'
        },
        {
          number: '02',
          title: 'Treatment Planning',
          description: 'Development of a personalized treatment plan that may include medication management, behavioral strategies, and lifestyle modifications.'
        },
        {
          number: '03',
          title: 'Ongoing Management',
          description: 'Regular follow-up appointments to monitor treatment effectiveness, adjust medications as needed, and provide continued support.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for ADHD Treatment',
      description: 'TSCP provides expert ADHD assessment and treatment with experienced healthcare professionals in a supportive clinical environment.',
      list: [
        'Healthcare professionals experienced in adult ADHD diagnosis',
        'Comprehensive assessment and diagnostic testing',
        'Evidence-based treatment approaches and medications',
        'Personalized treatment plans for individual needs',
        'Ongoing monitoring and medication management',
        'Support for developing coping strategies and life skills'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'Can adults be diagnosed with ADHD?',
        answer: 'Yes, many adults are diagnosed with ADHD later in life. Adult ADHD may present differently than childhood ADHD, often affecting work performance, relationships, and daily organization. Our healthcare professionals are experienced in adult ADHD assessment.'
      },
      {
        question: 'What does an ADHD assessment involve?',
        answer: 'ADHD assessment includes a comprehensive medical and psychological evaluation, symptom questionnaires, review of childhood and current symptoms, and may include psychological testing to accurately diagnose ADHD.'
      },
      {
        question: 'How effective is ADHD medication?',
        answer: 'ADHD medications are highly effective for most people when properly prescribed and monitored. Stimulant and non-stimulant medications can significantly improve focus, attention, and daily functioning.'
      },
      {
        question: 'Are there non-medication treatments for ADHD?',
        answer: 'Yes, behavioral strategies, organizational skills training, lifestyle modifications, and counseling can be effective components of ADHD treatment, either alone or in combination with medication.'
      },
      {
        question: 'How long will I need ADHD treatment?',
        answer: 'ADHD is typically a lifelong condition, but treatment needs may vary over time. Some people require ongoing medication management, while others may benefit from periodic check-ins and strategy adjustments.'
      }
    ],
    relatedServices: [
      'Anxiety Treatment',
      'Depression Treatment',
      'Insomnia Treatment',
      'Medical Weight Loss',
      'Addiction Treatment',
      'Pharmacist Prescribing'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'ADHD Treatment' }
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

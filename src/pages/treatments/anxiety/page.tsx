import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function AnxietyPage() {
  const serviceData = {
    title: 'Anxiety Treatment Services',
    breadcrumb: 'Anxiety Treatment',
    heroImage: 'https://readdy.ai/api/search-image?query=Calm%20professional%20healthcare%20clinic%20with%20therapist%20providing%20anxiety%20treatment%20consultation%20in%20serene%20medical%20office%20with%20comfortable%20seating%20and%20calming%20environment&width=800&height=400&seq=anxiety-hero&orientation=landscape',
    description: [
      'TSCP provides comprehensive anxiety treatment services through licensed clinics across the GTA. Our healthcare professionals understand that anxiety can significantly impact daily life, relationships, and overall well-being. We offer evidence-based treatment approaches in a supportive, confidential environment.',
      'Our anxiety treatment focuses on clinical evaluation, personalized treatment planning, and ongoing support to help you manage anxiety symptoms effectively. We work collaboratively with you to develop coping strategies and treatment approaches that fit your lifestyle and recovery goals.',
    ],
    benefits: {
      title: 'Anxiety Treatment Benefits',
      description: 'Professional anxiety treatment helps reduce symptoms, improve daily functioning, and enhance overall quality of life through evidence-based approaches.',
      list: [
        'Reduced anxiety symptoms and panic attacks',
        'Improved sleep quality and daily functioning',
        'Enhanced coping skills and stress management',
        'Better relationships and social interactions'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Symptom Relief',
        description: 'Professional treatment significantly reduces anxiety symptoms, improving your ability to function in daily life.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Coping Skills',
        description: 'Learn effective strategies and techniques to manage anxiety triggers and maintain long-term mental wellness.'
      }
    ],
    process: {
      title: 'How Anxiety Treatment Works',
      description: 'Our anxiety treatment program provides structured, evidence-based care to help you understand and manage anxiety symptoms effectively.',
      steps: [
        {
          number: '01',
          title: 'Clinical Assessment',
          description: 'A comprehensive evaluation of your anxiety symptoms, triggers, and impact on daily life to develop an appropriate treatment plan.'
        },
        {
          number: '02',
          title: 'Treatment Planning',
          description: 'We develop a personalized treatment approach that may include therapy, medication management, and lifestyle modifications based on your needs.'
        },
        {
          number: '03',
          title: 'Ongoing Support',
          description: 'Regular follow-up appointments to monitor progress, adjust treatment as needed, and provide continued support for managing anxiety.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Anxiety Treatment',
      description: 'TSCP provides professional anxiety treatment with experienced healthcare providers in a supportive, confidential clinical environment.',
      list: [
        'Licensed mental health professionals with anxiety treatment expertise',
        'Evidence-based treatment approaches and therapies',
        'Personalized treatment plans tailored to your specific needs',
        'Flexible scheduling to accommodate your lifestyle',
        'Confidential and supportive treatment environment',
        'Coordination with other healthcare providers when needed'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'What types of anxiety disorders do you treat?',
        answer: 'We provide treatment for various anxiety disorders including generalized anxiety disorder, panic disorder, social anxiety, and anxiety related to specific situations or triggers. Our healthcare professionals conduct thorough evaluations to determine the most appropriate treatment approach.'
      },
      {
        question: 'How long does anxiety treatment typically take?',
        answer: 'Treatment duration varies depending on individual needs and the severity of symptoms. Some patients experience improvement within weeks, while others may benefit from longer-term treatment. We work with you to determine the optimal treatment timeline.'
      },
      {
        question: 'Will I need medication for anxiety treatment?',
        answer: 'Medication is one potential treatment option, but not all patients require medication. Treatment decisions are based on your individual assessment, symptom severity, and personal preferences. We discuss all available options with you.'
      },
      {
        question: 'Can anxiety be treated without medication?',
        answer: 'Yes, many anxiety disorders can be effectively treated through therapy, lifestyle modifications, and coping strategies. We offer various non-medication approaches and work with you to find the most effective treatment combination.'
      },
      {
        question: 'What should I expect during my first appointment?',
        answer: 'Your first appointment involves a comprehensive discussion about your anxiety symptoms, triggers, medical history, and treatment goals. We conduct a clinical assessment and begin developing a personalized treatment plan based on your needs.'
      }
    ],
    relatedServices: [
      'Depression Treatment',
      'ADHD Treatment',
      'Insomnia Treatment',
      'Addiction Treatment',
      'Quit Smoking',
      'Medical Weight Loss'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Anxiety Treatment' }
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

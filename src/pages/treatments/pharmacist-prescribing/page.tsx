import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceDetailLayout from '../../service-details/components/ServiceDetailLayout';

export default function PharmacistPrescribingPage() {
  const serviceData = {
    title: 'Pharmacist Prescribing Services',
    breadcrumb: 'Pharmacist Prescribing',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20pharmacy%20clinic%20with%20licensed%20pharmacist%20providing%20prescribing%20consultation%20to%20patient%20in%20modern%20clinical%20pharmacy%20setting%20with%20medication%20management%20resources&width=800&height=400&seq=pharmacist-hero&orientation=landscape',
    description: [
      'Pharmacist prescribing services may be available at select TSCP locations where permitted by provincial regulations. Our qualified pharmacists can assess certain conditions and prescribe specific medications as part of coordinated healthcare delivery.',
      'When available, pharmacist prescribing services are provided by licensed pharmacists with additional prescribing authority. These services are integrated with our comprehensive healthcare approach to provide convenient access to medication management and treatment.',
    ],
    benefits: {
      title: 'Pharmacist Prescribing Benefits',
      description: 'Pharmacist prescribing services provide convenient access to medication management and treatment for appropriate conditions.',
      list: [
        'Convenient access to qualified prescribing services',
        'Integrated medication management and counseling',
        'Coordination with other healthcare providers',
        'Expert pharmaceutical knowledge and guidance'
      ],
      image: 'https://html.awaikenthemes.com/hipno/images/service-entry-img.jpg'
    },
    benefitCards: [
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-1.svg',
        title: 'Expert Knowledge',
        description: 'Pharmacists bring specialized medication expertise and pharmaceutical knowledge to prescribing decisions.'
      },
      {
        icon: 'https://html.awaikenthemes.com/hipno/images/icon-service-benefit-2.svg',
        title: 'Integrated Care',
        description: 'Pharmacist prescribing is coordinated with other healthcare services for comprehensive patient care.'
      }
    ],
    process: {
      title: 'How Pharmacist Prescribing Works',
      description: 'Our pharmacist prescribing services follow established protocols and regulations to provide safe, appropriate medication management.',
      steps: [
        {
          number: '01',
          title: 'Assessment & Evaluation',
          description: 'The pharmacist conducts a thorough assessment of your condition, medical history, and current medications to determine appropriate treatment.'
        },
        {
          number: '02',
          title: 'Prescribing Decision',
          description: 'Based on the assessment and within their scope of practice, the pharmacist may prescribe appropriate medications for eligible conditions.'
        },
        {
          number: '03',
          title: 'Follow-up Care',
          description: 'Ongoing monitoring and follow-up to ensure medication effectiveness, manage any side effects, and coordinate with other healthcare providers.'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose TSCP for Pharmacist Prescribing',
      description: 'TSCP provides pharmacist prescribing services with qualified professionals in appropriate clinical settings where permitted.',
      list: [
        'Licensed pharmacists with prescribing authority',
        'Integration with comprehensive healthcare services',
        'Medication expertise and pharmaceutical knowledge',
        'Coordination with physicians and other healthcare providers',
        'Convenient access to medication management',
        'Professional clinical environment and standards'
      ],
      videoImage: 'https://html.awaikenthemes.com/hipno/images/service-entry-video-bg.jpg'
    },
    faqs: [
      {
        question: 'What conditions can pharmacists prescribe for?',
        answer: 'Pharmacist prescribing scope varies by province and individual qualifications. Generally, pharmacists may prescribe for certain minor ailments, medication renewals, and specific conditions within their authorized scope of practice.'
      },
      {
        question: 'Is pharmacist prescribing available at all TSCP locations?',
        answer: 'Pharmacist prescribing services are available at select TSCP locations where we have qualified pharmacists with prescribing authority. Please contact your preferred location to confirm availability.'
      },
      {
        question: 'How does pharmacist prescribing differ from physician prescribing?',
        answer: 'Pharmacist prescribing is typically limited to specific conditions and medications within their scope of practice. For complex conditions or medications outside their scope, pharmacists will refer you to appropriate physicians.'
      },
      {
        question: 'Do I need a referral for pharmacist prescribing services?',
        answer: 'Referrals are typically not required for pharmacist prescribing services for conditions within their scope. However, coordination with your primary healthcare provider is important for comprehensive care.'
      },
      {
        question: 'Are prescriptions from pharmacists covered by insurance?',
        answer: 'Prescriptions written by authorized pharmacists are generally treated the same as physician prescriptions for insurance coverage purposes. Check with your insurance provider for specific coverage details.'
      }
    ],
    relatedServices: [
      'Addiction Treatment',
      'Methadone Treatment',
      'Suboxone Treatment',
      'Medical Weight Loss',
      'ADHD Treatment',
      'Anxiety Treatment'
    ]
  };

  const breadcrumbItems = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Pharmacist Prescribing' }
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

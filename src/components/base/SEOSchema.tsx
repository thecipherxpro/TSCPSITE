import { useEffect } from 'react';

interface SchemaData {
  type: 'MedicalProcedure' | 'MedicalCondition' | 'HealthAndBeautyBusiness' | 'WebPage';
  name: string;
  description: string;
  url?: string;
  image?: string;
  provider?: {
    name: string;
    url: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  medicalSpecialty?: string[];
  treatmentApproach?: string[];
  availableService?: Array<{
    name: string;
    description: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumb?: Array<{
    name: string;
    item: string;
  }>;
}

interface SEOSchemaProps {
  data?: SchemaData;
  type?: 'MedicalProcedure' | 'MedicalCondition' | 'HealthAndBeautyBusiness' | 'WebPage';
  title?: string;
  description?: string;
  url?: string;
}

export default function SEOSchema({ data, type, title, description, url }: SEOSchemaProps) {
  useEffect(() => {
    // Remove any existing schema
    const existingSchema = document.querySelector('#schema-json-ld');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Support both data object and individual props
    const schemaData = data || {
      type: type || 'WebPage',
      name: title || '',
      description: description || '',
      url: url || window.location.href
    };

    const schema: any = {
      '@context': 'https://schema.org',
      '@type': schemaData.type,
      name: schemaData.name,
      description: schemaData.description,
      url: schemaData.url || window.location.href,
      image: schemaData.image,
    };

    if (schemaData.provider) {
      schema.provider = {
        '@type': 'HealthAndBeautyBusiness',
        name: schemaData.provider.name,
        url: schemaData.provider.url,
        telephone: schemaData.provider.telephone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: schemaData.provider.address.streetAddress,
          addressLocality: schemaData.provider.address.addressLocality,
          addressRegion: schemaData.provider.address.addressRegion,
          postalCode: schemaData.provider.address.postalCode,
          addressCountry: schemaData.provider.address.addressCountry,
        },
      };
    }

    if (schemaData.medicalSpecialty) {
      schema.medicalSpecialty = schemaData.medicalSpecialty;
    }

    if (schemaData.treatmentApproach) {
      schema.treatmentApproach = schemaData.treatmentApproach;
    }

    if (schemaData.availableService) {
      schema.availableService = schemaData.availableService.map(service => ({
        '@type': 'MedicalProcedure',
        name: service.name,
        description: service.description,
      }));
    }

    if (schemaData.faq && schemaData.faq.length > 0) {
      schema.mainEntity = schemaData.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }));
    }

    if (schemaData.breadcrumb) {
      schema.breadcrumb = {
        '@type': 'BreadcrumbList',
        itemListElement: schemaData.breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      };
    }

    // Create and append schema script
    const script = document.createElement('script');
    script.id = 'schema-json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const schemaElement = document.querySelector('#schema-json-ld');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [data, type, title, description, url]);

  return null;
}

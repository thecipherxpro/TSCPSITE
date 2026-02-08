import { useEffect, useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import Breadcrumbs from '../../components/base/Breadcrumbs';
import SEOSchema from '../../components/base/SEOSchema';

export default function LocationsPage() {
  const [postalCode, setPostalCode] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Locations - TSCP Addiction and Mental Health Treatment Centers | Find a Clinic Near You';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find TSCP addiction and mental health treatment locations near you. We provide comprehensive care across multiple clinics with convenient locations and flexible scheduling.');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'TSCP locations, addiction treatment centers, mental health clinics, treatment locations, recovery centers near me');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Locations', path: '/locations' }
  ];

  const locations = [
    {
      name: 'Scarborough Addiction Treatment Center',
      address: '1261 Kennedy Rd, Unit 2',
      city: 'Scarborough, ON M1P 2L4',
      postalCode: 'M1P 2L4',
      coordinates: { lat: 43.7315, lng: -79.2644 },
      phone: '(416) 490-0499',
      hours: {
        'Monday - Friday': '8:00 AM - 5:00 PM',
        'Saturday': '9:00 AM - 1:00 PM',
        'Sunday': 'Closed'
      },
      services: [
        'Addiction Treatment Services',
        'Mental Health Services',
        'Virtual Walk-In Clinic',
        'OHIP+ Covered Treatments and Visits',
        'Low Income Support'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20medical%20clinic%20building%20exterior%20with%20glass%20windows%20professional%20healthcare%20facility%20urban%20setting%20clean%20architecture%20welcoming%20entrance%20with%20natural%20lighting%20and%20parking%20area&width=400&height=300&seq=scarborough-center&orientation=landscape',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5!2d-79.2644!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzUzLjQiTiA3OcKwMTUnNTEuOCJX!5e0!3m2!1sen!2sca!4v1234567890'
    },
    {
      name: 'Toronto Addiction Treatment Centre',
      address: '3426 Lake Shore Blvd W',
      city: 'Etobicoke, ON M8W 1N3',
      postalCode: 'M8W 1N3',
      coordinates: { lat: 43.5890, lng: -79.5103 },
      phone: '(905) 891-2345',
      hours: {
        'Monday - Friday': '9:00 AM - 3:00 PM',
        'Saturday': '9:00 AM - 3:00 PM',
        'Sunday': '10:00 AM - 2:00 PM'
      },
      services: [
        'Addiction Treatment Services',
        'Mental Health Services',
        'Virtual Walk-In Clinic',
        'OHIP+ Covered Treatments and Visits',
        'Low Income Support'
      ],
      image: 'https://readdy.ai/api/search-image?query=contemporary%20healthcare%20facility%20with%20landscaping%20medical%20treatment%20center%20suburban%20location%20welcoming%20entrance%20with%20natural%20lighting%20professional%20medical%20building%20with%20accessible%20parking&width=400&height=300&seq=toronto-center&orientation=landscape',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2!2d-79.5103!3d43.5890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM1JzIwLjQiTiA3OcKwMzAnMzcuMSJX!5e0!3m2!1sen!2sca!4v1234567891'
    },
    {
      name: 'Thornhill Addiction Treatment Center',
      address: '8108 Yonge St, Unit 3-4',
      city: 'Thornhill, ON L4J 1W4',
      postalCode: 'L4J 1W4',
      coordinates: { lat: 43.8215, lng: -79.4278 },
      phone: '+1-905-709-9985',
      hours: {
        'Monday - Friday': '8:00 AM - 3:00 PM',
        'Saturday': '9:00 AM - 12:00 PM',
        'Sunday': '9:00 AM - 11:00 AM'
      },
      services: [
        'Addiction Treatment Services',
        'Mental Health Services',
        'Virtual Walk-In Clinic',
        'OHIP+ Covered Treatments and Visits',
        'Low Income Support'
      ],
      image: 'https://readdy.ai/api/search-image?query=wellness%20center%20building%20with%20healing%20garden%20modern%20therapeutic%20facility%20peaceful%20environment%20natural%20elements%20integrated%20with%20architecture%20professional%20medical%20center%20with%20green%20spaces&width=400&height=300&seq=thornhill-center&orientation=landscape',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.8!2d-79.4278!3d43.8215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ5JzE3LjQiTiA3OcKwMjUnNDAuMSJX!5e0!3m2!1sen!2sca!4v1234567892'
    },
    {
      name: 'North York Addiction Treatment Center',
      address: '3472 Keele St',
      city: 'North York, ON M3J 3L8',
      postalCode: 'M3J 3L8',
      coordinates: { lat: 43.7615, lng: -79.4876 },
      phone: '(416) 633-9999',
      hours: {
        'Monday - Friday': '8:00 AM - 4:00 PM',
        'Saturday': '10:00 AM - 2:00 PM',
        'Sunday': '10:00 AM - 2:00 PM'
      },
      services: [
        'Addiction Treatment Services',
        'Mental Health Services',
        'Virtual Walk-In Clinic',
        'OHIP+ Covered Treatments and Visits',
        'Low Income Support'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20medical%20clinic%20building%20exterior%20with%20glass%20windows%20professional%20healthcare%20facility%20urban%20setting%20clean%20architecture%20welcoming%20entrance%20accessible%20design%20with%20parking%20facilities&width=400&height=300&seq=northyork-center&orientation=landscape',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3!2d-79.4876!3d43.7615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ1JzQxLjQiTiA3OcKwMjknMTUuNCJX!5e0!3m2!1sen!2sca!4v1234567893'
    }
  ];

  // Postal code coordinates mapping (approximate center points for postal code areas)
  const postalCodeCoordinates: Record<string, { lat: number; lng: number }> = {
    'M1P': { lat: 43.7315, lng: -79.2644 },
    'M8W': { lat: 43.5890, lng: -79.5103 },
    'L4J': { lat: 43.8215, lng: -79.4278 },
    'M3J': { lat: 43.7615, lng: -79.4876 },
    'M1B': { lat: 43.8066, lng: -79.1943 },
    'M1C': { lat: 43.7845, lng: -79.1604 },
    'M1E': { lat: 43.7635, lng: -79.1887 },
    'M1G': { lat: 43.7709, lng: -79.2169 },
    'M1H': { lat: 43.7734, lng: -79.2394 },
    'M1J': { lat: 43.7447, lng: -79.2394 },
    'M1K': { lat: 43.7279, lng: -79.2620 },
    'M1L': { lat: 43.7111, lng: -79.2845 },
    'M1M': { lat: 43.7164, lng: -79.2394 },
    'M1N': { lat: 43.6922, lng: -79.2644 },
    'M1R': { lat: 43.7500, lng: -79.2958 },
    'M1S': { lat: 43.7942, lng: -79.2620 },
    'M1T': { lat: 43.7816, lng: -79.3043 },
    'M1V': { lat: 43.8152, lng: -79.2845 },
    'M1W': { lat: 43.7995, lng: -79.3183 },
    'M1X': { lat: 43.8361, lng: -79.2056 },
    'M4A': { lat: 43.7253, lng: -79.3155 },
    'M4B': { lat: 43.7063, lng: -79.3099 },
    'M4C': { lat: 43.6953, lng: -79.3183 },
    'M4E': { lat: 43.6763, lng: -79.2930 },
    'M4G': { lat: 43.7090, lng: -79.3634 },
    'M4H': { lat: 43.7053, lng: -79.3493 },
    'M4J': { lat: 43.6853, lng: -79.3380 },
    'M4K': { lat: 43.6790, lng: -79.3521 },
    'M4L': { lat: 43.6689, lng: -79.3155 },
    'M4M': { lat: 43.6595, lng: -79.3408 },
    'M4N': { lat: 43.7280, lng: -79.3887 },
    'M4P': { lat: 43.7127, lng: -79.3901 },
    'M4R': { lat: 43.7153, lng: -79.4056 },
    'M4S': { lat: 43.7043, lng: -79.3887 },
    'M4T': { lat: 43.6895, lng: -79.3831 },
    'M4V': { lat: 43.6859, lng: -79.4000 },
    'M4W': { lat: 43.6795, lng: -79.3775 },
    'M4X': { lat: 43.6678, lng: -79.3676 },
    'M4Y': { lat: 43.6658, lng: -79.3831 },
    'M5A': { lat: 43.6542, lng: -79.3606 },
    'M5B': { lat: 43.6571, lng: -79.3789 },
    'M5C': { lat: 43.6514, lng: -79.3754 },
    'M5E': { lat: 43.6447, lng: -79.3732 },
    'M5G': { lat: 43.6579, lng: -79.3873 },
    'M5H': { lat: 43.6505, lng: -79.3845 },
    'M5J': { lat: 43.6408, lng: -79.3817 },
    'M5K': { lat: 43.6471, lng: -79.3817 },
    'M5L': { lat: 43.6481, lng: -79.3799 },
    'M5M': { lat: 43.7332, lng: -79.4197 },
    'M5N': { lat: 43.7116, lng: -79.4169 },
    'M5P': { lat: 43.6969, lng: -79.4113 },
    'M5R': { lat: 43.6727, lng: -79.4056 },
    'M5S': { lat: 43.6626, lng: -79.4000 },
    'M5T': { lat: 43.6532, lng: -79.4000 },
    'M5V': { lat: 43.6289, lng: -79.3944 },
    'M5W': { lat: 43.6464, lng: -79.3748 },
    'M5X': { lat: 43.6484, lng: -79.3822 },
    'M6A': { lat: 43.7180, lng: -79.4648 },
    'M6B': { lat: 43.7090, lng: -79.4451 },
    'M6C': { lat: 43.6937, lng: -79.4282 },
    'M6E': { lat: 43.6890, lng: -79.4535 },
    'M6G': { lat: 43.6695, lng: -79.4225 },
    'M6H': { lat: 43.6690, lng: -79.4422 },
    'M6J': { lat: 43.6479, lng: -79.4197 },
    'M6K': { lat: 43.6368, lng: -79.4282 },
    'M6L': { lat: 43.7137, lng: -79.4900 },
    'M6M': { lat: 43.6911, lng: -79.4760 },
    'M6N': { lat: 43.6731, lng: -79.4872 },
    'M6P': { lat: 43.6616, lng: -79.4648 },
    'M6R': { lat: 43.6489, lng: -79.4563 },
    'M6S': { lat: 43.6516, lng: -79.4844 },
    'M7A': { lat: 43.6623, lng: -79.3887 },
    'M8V': { lat: 43.6056, lng: -79.5013 },
    'M8X': { lat: 43.6537, lng: -79.5069 },
    'M8Y': { lat: 43.6363, lng: -79.4985 },
    'M8Z': { lat: 43.6289, lng: -79.5208 },
    'M9A': { lat: 43.6678, lng: -79.5322 },
    'M9B': { lat: 43.6509, lng: -79.5547 },
    'M9C': { lat: 43.6435, lng: -79.5772 },
    'M9L': { lat: 43.7563, lng: -79.5647 },
    'M9M': { lat: 43.7284, lng: -79.4760 },
    'M9N': { lat: 43.7063, lng: -79.5183 },
    'M9P': { lat: 43.6963, lng: -79.5323 },
    'M9R': { lat: 43.6889, lng: -79.5547 },
    'M9V': { lat: 43.7395, lng: -79.5884 },
    'M9W': { lat: 43.7063, lng: -79.5940 },
    'L3R': { lat: 43.9474, lng: -79.3732 },
    'L3S': { lat: 43.9332, lng: -79.3493 },
    'L3T': { lat: 43.8842, lng: -79.4451 },
    'L4C': { lat: 43.8563, lng: -79.3732 },
    'L4E': { lat: 43.8689, lng: -79.4282 },
    'L4G': { lat: 43.8995, lng: -79.4648 },
    'L4H': { lat: 43.8689, lng: -79.4985 },
    'L4K': { lat: 43.8216, lng: -79.5013 },
    'L4L': { lat: 43.8042, lng: -79.4648 }
  };

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const handleSearch = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    
    setError('');
    setSearchResult(null);
    
    if (!postalCode.trim()) {
      setError('Please enter a postal code');
      return;
    }

    setIsSearching(true);

    // Normalize postal code (remove spaces, convert to uppercase)
    const normalizedPostalCode = postalCode.replace(/\s/g, '').toUpperCase();
    
    // Extract first 3 characters (Forward Sortation Area)
    const fsa = normalizedPostalCode.substring(0, 3);

    // Get coordinates for the postal code
    const userCoords = postalCodeCoordinates[fsa];

    if (!userCoords) {
      setError('Postal code not found. Please enter a valid Ontario postal code.');
      setIsSearching(false);
      return;
    }

    // Calculate distances to all locations
    const locationsWithDistance = locations.map(location => ({
      ...location,
      distance: calculateDistance(
        userCoords.lat,
        userCoords.lng,
        location.coordinates.lat,
        location.coordinates.lng
      )
    }));

    // Sort by distance and get the closest
    locationsWithDistance.sort((a, b) => a.distance - b.distance);
    const closest = locationsWithDistance[0];

    setTimeout(() => {
      setSearchResult(closest);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <SEOSchema 
        type="WebPage"
        title="Locations - TSCP Addiction and Mental Health Treatment Centers"
        description="Find TSCP addiction and mental health treatment locations near you. We provide comprehensive care across multiple clinics with convenient locations and flexible scheduling."
        url="https://tscp.com/locations"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center text-white mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Locations
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Find convenient treatment centers across the metropolitan area. 
              Professional care close to home.
            </p>
          </div>
        </div>
      </section>

      {/* Location Finder Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <i className="ri-map-pin-line text-primary text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                Find Your Nearest Location
              </h2>
              <p className="text-lg text-text-muted">
                Enter your postal code to discover the closest treatment center to you
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="postal-code" className="block text-sm font-medium text-text-dark mb-2">
                    Postal Code
                  </label>
                  <input
                    id="postal-code"
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="e.g., M1P 2L4"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                    maxLength={7}
                  />
                </div>
                <div className="sm:pt-7">
                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="w-full sm:w-auto bg-primary text-white px-8 py-3 font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSearching ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        Searching...
                      </>
                    ) : (
                      <>
                        <i className="ri-search-line"></i>
                        Find Location
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <i className="ri-error-warning-line text-red-500 text-xl mt-0.5"></i>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </div>

            {/* Search Result */}
            {searchResult && (
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-primary animate-fadeIn">
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                  <div className="flex items-center gap-3 text-white">
                    <i className="ri-map-pin-fill text-3xl"></i>
                    <div>
                      <h3 className="text-2xl font-bold">Closest Location Found</h3>
                      <p className="text-white/90">
                        {searchResult.distance.toFixed(1)} km away from you
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-text-dark mb-6">
                    {searchResult.name}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Address & Contact */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <i className="ri-map-pin-line text-primary text-xl mt-1"></i>
                        <div>
                          <p className="text-text-dark font-medium">{searchResult.address}</p>
                          <p className="text-text-muted">{searchResult.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="ri-phone-line text-primary text-xl"></i>
                        <a 
                          href={`tel:${searchResult.phone}`}
                          className="text-text-dark font-medium hover:text-primary transition-colors cursor-pointer"
                        >
                          {searchResult.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="ri-time-line text-primary text-xl mt-1"></i>
                        <div className="flex-1">
                          <p className="text-text-dark font-medium mb-2">Hours:</p>
                          <div className="space-y-1">
                            {Object.entries(searchResult.hours).map(([day, hours]) => (
                              <div key={day} className="flex justify-between text-sm">
                                <span className="text-text-muted">{day}:</span>
                                <span className="text-text-dark font-medium">{hours as string}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h5 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                        <i className="ri-heart-pulse-line text-primary"></i>
                        Services Available:
                      </h5>
                      <div className="space-y-2">
                        {searchResult.services.map((service: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <i className="ri-check-line text-primary text-lg"></i>
                            <span className="text-text-muted text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-light">
                    <a 
                      href={`tel:${searchResult.phone}`}
                      className="flex-1 bg-primary text-white px-6 py-4 text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
                    >
                      <i className="ri-phone-line"></i>
                      Call Now
                    </a>
                    <a 
                      href={searchResult.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-transparent border-2 border-primary text-primary px-6 py-4 text-center font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
                    >
                      <i className="ri-map-line"></i>
                      Get Directions
                    </a>
                    <a 
                      href="/get-help"
                      className="flex-1 bg-accent text-text-dark px-6 py-4 text-center font-semibold hover:bg-accent/80 transition-colors cursor-pointer whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
                    >
                      <i className="ri-calendar-line"></i>
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              All Treatment Centers
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              We operate multiple state-of-the-art facilities designed to provide comprehensive 
              addiction treatment and mental health services in a comfortable, healing environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <article 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-border-light hover:shadow-xl transition-shadow"
                itemScope 
                itemType="https://schema.org/MedicalClinic"
              >
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-1/3">
                    <div className="h-64 lg:h-full overflow-hidden">
                      <img 
                        src={location.image}
                        alt={`${location.name} - Addiction and Mental Health Treatment Center in ${location.city}`}
                        title={`${location.name} exterior view`}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        itemProp="image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-2/3 p-8">
                    <div className="lg:flex lg:gap-8">
                      <div className="lg:flex-1">
                        <h3 className="text-2xl font-bold text-text-dark mb-4" itemProp="name">
                          {location.name}
                        </h3>
                        
                        {/* Address & Contact */}
                        <div className="space-y-3 mb-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                          <div className="flex items-start gap-3">
                            <i className="ri-map-pin-line text-primary text-xl mt-0.5" aria-hidden="true"></i>
                            <address className="not-italic">
                              <span itemProp="streetAddress">{location.address}</span>
                              <br />
                              <span itemProp="addressLocality">{location.city.split(',')[0]}</span>,{' '}
                              <span itemProp="addressRegion">ON</span>{' '}
                              <span itemProp="postalCode">{location.postalCode}</span>
                              <meta itemProp="addressCountry" content="CA" />
                            </address>
                          </div>
                          <div className="flex items-center gap-3">
                            <i className="ri-phone-line text-primary text-xl" aria-hidden="true"></i>
                            <a 
                              href={`tel:${location.phone}`}
                              className="text-text-dark font-medium hover:text-primary transition-colors cursor-pointer"
                              itemProp="telephone"
                              aria-label={`Call ${location.name} at ${location.phone}`}
                            >
                              {location.phone}
                            </a>
                          </div>
                          <meta itemProp="geo" content={`${location.coordinates.lat},${location.coordinates.lng}`} />
                          <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" className="hidden">
                            <meta itemProp="latitude" content={location.coordinates.lat.toString()} />
                            <meta itemProp="longitude" content={location.coordinates.lng.toString()} />
                          </div>
                        </div>

                        {/* Services */}
                        <div className="mb-6">
                          <h4 className="font-bold text-text-dark mb-3">Services Available:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {location.services.map((service, serviceIndex) => (
                              <li 
                                key={serviceIndex} 
                                className="flex items-center gap-2"
                                itemProp="medicalSpecialty"
                              >
                                <i className="ri-check-line text-primary text-sm" aria-hidden="true"></i>
                                <span className="text-text-muted text-sm">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hours */}
                        <div className="mb-6" itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                          <h4 className="font-bold text-text-dark mb-3">
                            <i className="ri-time-line text-primary mr-2" aria-hidden="true"></i>
                            Operating Hours:
                          </h4>
                          <dl className="space-y-1">
                            {Object.entries(location.hours).map(([day, hours]) => {
                              const dayRange = day.split(' - ');
                              const isRange = dayRange.length === 2;
                              
                              return (
                                <div key={day} className="flex justify-between text-sm">
                                  <dt className="text-text-muted font-medium">{day}:</dt>
                                  <dd className="text-text-dark font-medium">{hours as string}</dd>
                                  {isRange ? (
                                    <>
                                      <meta itemProp="dayOfWeek" content={dayRange[0]} />
                                      <meta itemProp="dayOfWeek" content={dayRange[1]} />
                                    </>
                                  ) : (
                                    <meta itemProp="dayOfWeek" content={day} />
                                  )}
                                  <meta itemProp="opens" content={(hours as string).split(' - ')[0]} />
                                  <meta itemProp="closes" content={(hours as string).split(' - ')[1] || 'Closed'} />
                                </div>
                              );
                            })}
                          </dl>
                        </div>

                        {/* Actions */}
                        <nav className="flex flex-col sm:flex-row gap-3" aria-label={`Actions for ${location.name}`}>
                          <a 
                            href={`tel:${location.phone}`}
                            className="bg-primary text-white px-6 py-3 text-center font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                            aria-label={`Call ${location.name}`}
                          >
                            <i className="ri-phone-line mr-2" aria-hidden="true"></i>
                            Call Location
                          </a>
                          <a 
                            href="/get-help"
                            className="bg-transparent border-2 border-primary text-primary px-6 py-3 text-center font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer whitespace-nowrap rounded-lg"
                            aria-label={`Schedule a visit at ${location.name}`}
                          >
                            <i className="ri-calendar-line mr-2" aria-hidden="true"></i>
                            Schedule Visit
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="h-80 border-t border-border-light">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing location of ${location.name} at ${location.address}, ${location.city}`}
                    aria-label={`Interactive map for ${location.name}`}
                  ></iframe>
                </div>

                {/* Hidden structured data for better SEO */}
                <div className="hidden">
                  <meta itemProp="priceRange" content="$$" />
                  <meta itemProp="url" content={`https://tscp.com/locations#${location.postalCode}`} />
                  <span itemProp="description">
                    {location.name} provides comprehensive addiction treatment and mental health services including {location.services.join(', ')}. Located at {location.address}, {location.city}.
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Contact any of our locations to schedule a confidential assessment 
              and begin your journey to healing and recovery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-help"
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Help Today
              </a>
              <a 
                href="/contact"
                className="bg-transparent border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

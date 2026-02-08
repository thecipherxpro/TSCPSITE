import { useState } from 'react';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    services: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                  >
                    <option value="">Select Service</option>
                    <option value="individual">Personalized Individual Therapy</option>
                    <option value="couples">Supportive Couples Counseling</option>
                    <option value="youth">Youth and Adolescent Counseling</option>
                    <option value="anxiety">Anxiety and Depression Support</option>
                    <option value="stress">Stress and Anger Management</option>
                    <option value="mindfulness">Mindfulness and Meditation Practices</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
                >
                  Book An Appointment
                </button>
              </form>
            </div>

            {/* Content */}
            <div className="bg-primary p-8 md:p-12 text-white">
              <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                Appointment
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Make an appointment
              </h2>
              <p className="text-white/90 text-base mb-8 leading-relaxed">
                Schedule your handyman service with ease. Choose a date and time that works best for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img
                      src="https://html.awaikenthemes.com/hipno/images/icon-appointment-item-1.svg"
                      alt="Customer Service"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Customer Services</h3>
                    <p className="text-white/80 text-sm">+91 - 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img
                      src="https://html.awaikenthemes.com/hipno/images/icon-appointment-item-2.svg"
                      alt="Opening Hours"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
                    <p className="text-white/80 text-sm">Mon - Sat (09:00 - 21:00 Sunday (Closed))</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Partner
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
              In collaboration with
            </h2>
            <p className="text-text-light text-base max-w-2xl mx-auto">
              Our trusted partner provides compassionate mental health therapy and counseling services to support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 1, 2, 3].map((i, index) => (
              <div key={index} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
                <img
                  src={`https://html.awaikenthemes.com/hipno/images/partner-logo-${i}.svg`}
                  alt={`Partner ${i}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const treatmentServices = {
    addiction: [
      { name: 'Addiction Treatment', href: '/treatments/addiction-treatment' },
      { name: 'Methadone Treatment', href: '/treatments/methadone-treatment' },
      { name: 'Suboxone Treatment', href: '/treatments/suboxone-treatment' },
      { name: 'Kadain Treatment', href: '/treatments/kadain-treatment' },
      { name: 'Quit Smoking', href: '/treatments/quit-smoking' },
      { name: 'Quit Alcohol', href: '/treatments/quit-alcohol' },
    ],
    mentalHealth: [
      { name: 'Anxiety Treatment', href: '/treatments/anxiety' },
      { name: 'Depression Treatment', href: '/treatments/depression' },
      { name: 'ADHD Treatment', href: '/treatments/adhd' },
      { name: 'Insomnia Treatment', href: '/treatments/insomnia' },
      { name: 'Medical Weight Loss', href: '/treatments/medical-weight-loss' },
      { name: 'Pharmacist Prescribing', href: '/treatments/pharmacist-prescribing' },
    ],
  };

  const locations = [
    { name: 'North York', href: '/locations/north-york' },
    { name: 'Thornhill', href: '/locations/thornhill' },
    { name: 'Scarborough', href: '/locations/scarborough' },
    { name: 'Etobicoke', href: '/locations/etobicoke' },
  ];

  const handleMegaMenuEnter = (menu: string) => {
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 z-50">
              <h1 className="text-2xl font-bold text-text-dark">
                TSCP
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-sm font-medium transition-colors cursor-pointer text-text-dark hover:text-primary"
              >
                Home
              </a>

              <a
                href="/get-help"
                className="text-sm font-medium transition-colors cursor-pointer text-text-dark hover:text-primary"
              >
                Get Help
              </a>

              {/* Treatments Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMegaMenuEnter('treatments')}
                onMouseLeave={handleMegaMenuLeave}
              >
                <a
                  href="/treatments"
                  className="text-sm font-medium transition-colors cursor-pointer flex items-center text-text-dark hover:text-primary"
                >
                  Treatments
                  <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${
                    activeMegaMenu === 'treatments' ? 'rotate-180' : ''
                  }`}></i>
                </a>

                {/* Mega Menu Dropdown */}
                {activeMegaMenu === 'treatments' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Addiction Treatment */}
                        <div>
                          <h3 className="text-lg font-bold text-text-dark mb-4 pb-2 border-b-2 border-primary">
                            Addiction Treatment
                          </h3>
                          <ul className="space-y-3">
                            {treatmentServices.addiction.map((service, index) => (
                              <li key={index}>
                                <a
                                  href={service.href}
                                  className="flex items-center text-sm text-text-dark hover:text-primary transition-colors cursor-pointer"
                                >
                                  <span>{service.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Mental Health Services */}
                        <div>
                          <h3 className="text-lg font-bold text-text-dark mb-4 pb-2 border-b-2 border-secondary">
                            Mental Health Services
                          </h3>
                          <ul className="space-y-3">
                            {treatmentServices.mentalHealth.map((service, index) => (
                              <li key={index}>
                                <a
                                  href={service.href}
                                  className="flex items-center text-sm text-text-dark hover:text-secondary transition-colors cursor-pointer"
                                >
                                  <span>{service.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="mt-8 pt-6 border-t border-border-light">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-text-dark font-semibold mb-1">Need help choosing?</p>
                            <p className="text-xs text-text-dark/60">Our team is here to guide you</p>
                          </div>
                          <a
                            href="/get-help"
                            className="bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
                          >
                            Get Help Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/locations"
                className="text-sm font-medium transition-colors cursor-pointer text-text-dark hover:text-primary"
              >
                Locations
              </a>

              <a
                href="/contact"
                className="text-sm font-medium transition-colors cursor-pointer text-text-dark hover:text-primary"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA Button */}
            <a
              href="/get-help"
              className="hidden lg:inline-block bg-primary text-white px-6 py-3 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
            >
              Get Help Now
            </a>

            {/* Mobile Header Right Section */}
            <div className="lg:hidden flex items-center gap-3">
              {/* CTA Button */}
              <a
                href="/get-help"
                className="bg-primary text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer whitespace-nowrap"
              >
                Get Help
              </a>
              
              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <i className="ri-close-line text-2xl text-text-dark"></i>
                ) : (
                  <i className="ri-menu-line text-2xl text-text-dark"></i>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full Screen Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 top-16 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="h-full overflow-y-auto">
            <nav className="px-6 py-4">
              {/* Home Link */}
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block text-lg font-medium text-primary py-4 border-b border-primary/20 cursor-pointer"
              >
                Home
              </a>

              {/* Treatments - Expandable */}
              <div className="border-b border-primary/20">
                <button
                  onClick={() => toggleMobileMenu('treatments')}
                  className="w-full flex items-center justify-between text-lg font-medium text-primary py-4 cursor-pointer"
                  aria-expanded={mobileExpandedMenu === 'treatments'}
                >
                  <span>Treatments</span>
                  <i className={`ri-arrow-down-s-line text-xl text-primary transition-transform duration-300 ${
                    mobileExpandedMenu === 'treatments' ? 'rotate-180' : ''
                  }`}></i>
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenu === 'treatments' 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 pl-4">
                    {/* Addiction Treatment */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-text-dark/50 uppercase tracking-wider mb-2">
                        Addiction Treatment
                      </p>
                      <ul className="space-y-0">
                        {treatmentServices.addiction.map((service, index) => (
                          <li key={index}>
                            <a
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block text-base text-primary py-2 cursor-pointer hover:text-secondary transition-colors"
                            >
                              {service.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mental Health */}
                    <div>
                      <p className="text-xs font-semibold text-text-dark/50 uppercase tracking-wider mb-2">
                        Mental Health
                      </p>
                      <ul className="space-y-0">
                        {treatmentServices.mentalHealth.map((service, index) => (
                          <li key={index}>
                            <a
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block text-base text-primary py-2 cursor-pointer hover:text-secondary transition-colors"
                            >
                              {service.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations - Expandable */}
              <div className="border-b border-primary/20">
                <button
                  onClick={() => toggleMobileMenu('locations')}
                  className="w-full flex items-center justify-between text-lg font-medium text-primary py-4 cursor-pointer"
                  aria-expanded={mobileExpandedMenu === 'locations'}
                >
                  <span>Locations</span>
                  <i className={`ri-arrow-down-s-line text-xl text-primary transition-transform duration-300 ${
                    mobileExpandedMenu === 'locations' ? 'rotate-180' : ''
                  }`}></i>
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpandedMenu === 'locations' 
                      ? 'max-h-[300px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 pl-4">
                    <ul className="space-y-0">
                      {locations.map((location, index) => (
                        <li key={index}>
                          <a
                            href={location.href}
                            onClick={closeMobileMenu}
                            className="block text-base text-primary py-2 cursor-pointer hover:text-secondary transition-colors"
                          >
                            {location.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Get Help */}
              <a
                href="/get-help"
                onClick={closeMobileMenu}
                className="block text-lg font-medium text-primary py-4 border-b border-primary/20 cursor-pointer"
              >
                Get Help
              </a>

              {/* Contact */}
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="block text-lg font-medium text-primary py-4 border-b border-primary/20 cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

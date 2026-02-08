export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Organization */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i className="ri-hospital-line text-2xl text-teal-700"></i>
              </div>
              <h3 className="text-xl font-bold text-white">
                TSCP
              </h3>
            </div>
            <p className="text-teal-50 text-sm leading-relaxed mb-6">
              For our patients with impairments resulting from injury or illness experience here. TSCP provides comprehensive addiction treatment and mental health services across the Greater Toronto Area.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Useful Links</h3>
            <nav aria-label="Useful links navigation">
              <ul className="space-y-3">
                <li>
                  <a
                    href="/treatments"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Treatments
                  </a>
                </li>
                <li>
                  <a
                    href="/locations"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Our Locations
                  </a>
                </li>
                <li>
                  <a
                    href="/get-help"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Get Help
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
            <nav aria-label="Main navigation">
              <ul className="space-y-3">
                <li>
                  <a
                    href="/treatments/addiction-treatment"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Addiction Treatment
                  </a>
                </li>
                <li>
                  <a
                    href="/treatments/methadone-treatment"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Methadone Treatment
                  </a>
                </li>
                <li>
                  <a
                    href="/treatments/suboxone-treatment"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Suboxone Treatment
                  </a>
                </li>
                <li>
                  <a
                    href="/treatments/adhd"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    ADHD Treatment
                  </a>
                </li>
                <li>
                  <a
                    href="/treatments/anxiety"
                    className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer inline-block"
                  >
                    Mental Health
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-teal-50 text-sm mb-6 leading-relaxed">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-12 rounded-full bg-white/10 border border-white/20 text-white placeholder-teal-100 text-sm focus:outline-none focus:border-white/40 transition-all"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-teal-700 rounded-full flex items-center justify-center hover:bg-teal-50 transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                <i className="ri-send-plane-fill text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-50 text-sm text-center md:text-left">
              © {currentYear} <a href="https://readdy.ai/?ref=logo" className="hover:text-white transition-colors cursor-pointer" rel="nofollow">Bravis-themes</a>. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="/privacy-policy" 
                className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-use" 
                className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Terms and Conditions
              </a>
              <a 
                href="/contact" 
                className="text-teal-50 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

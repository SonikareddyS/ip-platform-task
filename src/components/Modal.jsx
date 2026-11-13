
import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Server,
  LifeBuoy
} from 'lucide-react';

export default function Navbar({ onOpenGetStarted, onOpenSupport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'why-ip-store',
        'ip-solutions',
        'how-it-works',
        'faq'
      ];

      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Features', href: '#why-ip-store', id: 'why-ip-store' },
    { name: 'IP Solutions', href: '#ip-solutions', id: 'ip-solutions' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'FAQs', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">

        <div className="flex items-center justify-between gap-2">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 sm:gap-3 shrink-0 group focus:outline-none"
            aria-label="IP Store Homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#172554] flex items-center justify-center text-white shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform">
              <Server className="w-5 h-5 text-[#059669]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#172554] flex items-center gap-1.5 leading-none">
                IP Store
                <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
              </span>

              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-slate-500 mt-1 whitespace-nowrap">
                Static IP Infrastructure
              </span>
            </div>
          </a>

          {/* Navigation Links - Tablet and Desktop */}
          <nav
            className="hidden md:flex items-center gap-0.5 lg:gap-1"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2 lg:px-2.5 xl:px-3 py-2 text-[11px] lg:text-xs xl:text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${isActive
                      ? 'text-[#172554] bg-slate-100/80 font-semibold'
                      : 'text-slate-600 hover:text-[#172554] hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons - Tablet and Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 shrink-0">

            <button
              type="button"
              onClick={onOpenSupport}
              className="inline-flex items-center gap-1 px-1.5 lg:px-2 py-2 text-[11px] lg:text-xs font-medium text-slate-600 hover:text-[#172554] hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors cursor-pointer"
            >
              <LifeBuoy className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-500 shrink-0" />
              <span>Contact Support</span>
            </button>

            <button
              type="button"
              onClick={onOpenGetStarted}
              className="inline-flex items-center justify-center gap-1 px-2.5 lg:px-3.5 xl:px-5 py-2.5 rounded-lg text-[11px] lg:text-xs xl:text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
            </button>

          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#172554] hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200">

            <div className="flex flex-col space-y-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${activeSection === link.id
                      ? 'text-[#172554] bg-slate-100 font-semibold'
                      : 'text-slate-700 hover:text-[#172554] hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSupport();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <LifeBuoy className="w-4 h-4 text-slate-600" />
                  <span>Contact Support</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-colors cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

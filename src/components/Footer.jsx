import { Server, LifeBuoy, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenSupport, onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0b132b] text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#172554] flex items-center justify-center text-white border border-blue-900/50 shadow-md">
                <Server className="w-5 h-5 text-[#059669]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
                  IP Store
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mt-1">
                  Static IP Infrastructure
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A reliable and flexible static IP management platform for algorithmic trading setups, quant developers and trading teams. Dedicated IPv4 and IPv6 connectivity with flexible broker management.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenSupport}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <LifeBuoy className="w-3.5 h-3.5 text-[#059669]" />
                <span>Contact Technical Support</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#why-ip-store"
                  onClick={(e) => scrollToSection(e, '#why-ip-store')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#ip-solutions"
                  onClick={(e) => scrollToSection(e, '#ip-solutions')}
                  className="hover:text-white transition-colors"
                >
                  IP Solutions
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Options Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              IP Solutions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#ip-solution-ipv4"
                  onClick={(e) => scrollToSection(e, '#ip-solution-ipv4')}
                  className="hover:text-white transition-colors"
                >
                  Static IPv4 Address
                </a>
              </li>
              <li>
                <a
                  href="#ip-solution-ipv6"
                  onClick={(e) => scrollToSection(e, '#ip-solution-ipv6')}
                  className="hover:text-white transition-colors"
                >
                  Static IPv6 Address
                </a>
              </li>
              <li>
                <a
                  href="#broker-management"
                  onClick={(e) => scrollToSection(e, '#broker-management')}
                  className="hover:text-white transition-colors"
                >
                  Broker Management
                </a>
              </li>
              <li>
                <a
                  href="#referral-benefits"
                  onClick={(e) => scrollToSection(e, '#referral-benefits')}
                  className="hover:text-white transition-colors"
                >
                  Referral Programme
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenSupport}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                <span>Company contact & legal details to be configured.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 IP Store. All rights reserved. Static IP Infrastructure for Algorithmic Trading.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}


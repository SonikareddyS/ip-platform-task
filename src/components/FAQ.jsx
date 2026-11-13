import { useState } from 'react';
import { Plus, Minus, HelpCircle, LifeBuoy } from 'lucide-react';

export default function FAQ({ onOpenSupport }) {
  // Support open/close of questions; default first question open
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is a static IP address?',
      a: 'A static IP address is an IP address that remains assigned consistently rather than changing periodically. It can be used in compatible trading infrastructure and broker API configurations.',
    },
    {
      q: 'What is the difference between IPv4 and IPv6?',
      a: 'IPv4 and IPv6 are two versions of the Internet Protocol. They differ in addressing formats and technical capabilities. The appropriate option depends on your network setup and broker compatibility.',
    },
    {
      q: 'Can I change my broker after purchasing an IP?',
      a: 'Yes. You can request a broker configuration change while your subscription is active. Applicable charges and broker-side whitelisting requirements may apply.',
    },
    {
      q: 'Can I add another broker in the middle of my subscription?',
      a: 'Yes. You can request an additional supported broker during your active subscription. Additional charges may apply and will be communicated before confirmation.',
    },
    {
      q: 'Will my subscription expire if I change brokers?',
      a: 'No. A broker configuration change does not automatically terminate your active IP subscription. Your original subscription and renewal dates remain unchanged unless the applicable service terms state otherwise.',
    },
    {
      q: 'Does purchasing a static IP guarantee broker API access?',
      a: "No. API access is subject to the broker's eligibility criteria, technical requirements, approval and IP-whitelisting process.",
    },
    {
      q: 'Can I use the same IP with multiple brokers?',
      a: "This depends on the platform's technical configuration and each broker's policies. Each broker's IP mapping and applicable regulatory requirements must be followed.",
    },
    {
      q: 'How can I earn referral benefits?',
      a: "Share your referral link. Eligible referrals may qualify for rewards under the published referral programme terms.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#059669] bg-emerald-50 border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about static IP allocations, broker configuration changes, whitelisting, and subscription management.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#059669]/40 shadow-md ring-1 ring-[#059669]/10'
                    : 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                    isOpen ? 'text-[#172554]' : 'text-slate-800'
                  }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#059669] text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Helpdesk Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center sm:flex sm:items-center sm:justify-between gap-6">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="text-base font-bold text-[#172554]">
              Have additional technical questions?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Our technical team can guide you on broker whitelisting and IP compatibility.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSupport}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer shrink-0"
          >
            <LifeBuoy className="w-4 h-4 text-slate-600" />
            <span>Contact Support</span>
          </button>
        </div>

      </div>
    </section>
  );
}


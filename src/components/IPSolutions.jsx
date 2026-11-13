import { 
  Check, 
  ArrowRight, 
  Server, 
  Globe, 
  ShieldCheck,
  Info
} from 'lucide-react';

export default function IPSolutions({ onSelectSolution }) {
  const solutions = [
    {
      id: 'ipv4',
      badge: 'IPv4 Architecture',
      subtitle: 'Internet Protocol Version 4',
      product: 'Static IPv4 Address',
      description: 'A dedicated IPv4 option for compatible broker API and trading infrastructure configurations.',
      features: [
        'Static IP allocation',
        'Broker configuration support',
        'Subscription management',
      ],
      pricing: 'Pricing to be configured.',
      cta: 'Explore IPv4',
      versionBadge: 'IPv4',
      pillColor: 'bg-blue-50 text-[#172554] border-blue-200',
      icon: Server,
      accentBorder: 'border-blue-200 hover:border-[#172554]',
      headerBg: 'bg-[#172554] text-white',
      ipSample: '198.51.100.24',
      technicalSpec: '32-bit dotted-decimal address space with universal financial API compatibility.'
    },
    {
      id: 'ipv6',
      badge: 'IPv6 Architecture',
      subtitle: 'Internet Protocol Version 6',
      product: 'Static IPv6 Address',
      description: 'An IPv6 option for compatible systems and broker environments that support IPv6 connectivity.',
      features: [
        'IPv6 address allocation',
        'Configuration assistance',
        'Subscription management',
      ],
      pricing: 'Pricing to be configured.',
      cta: 'Explore IPv6',
      versionBadge: 'IPv6',
      pillColor: 'bg-emerald-50 text-[#059669] border-emerald-200',
      icon: Globe,
      accentBorder: 'border-emerald-200 hover:border-[#059669]',
      headerBg: 'bg-[#059669] text-white',
      ipSample: '2001:0db8:85a3::8a2e',
      technicalSpec: '128-bit hexadecimal address block with native protocol routing for modern setups.'
    },
  ];

  return (
    <section id="ip-solutions" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#172554] bg-slate-100 border border-slate-200">
            IP SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
            Choose the IP Address That Fits Your Setup.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Evaluate dedicated static IPv4 and IPv6 connectivity options configured to match your broker API endpoints and trading system architecture.
          </p>
        </div>

        {/* Two Visually Differentiated Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isV4 = item.id === 'ipv4';

            return (
              <div
                key={item.id}
                id={`ip-solution-${item.id}`}
                className={`flex flex-col justify-between rounded-3xl border-2 transition-all duration-300 shadow-sm hover:shadow-xl bg-white overflow-hidden ${
                  isV4 
                    ? 'border-slate-200 hover:border-[#172554]' 
                    : 'border-slate-200 hover:border-[#059669]'
                }`}
              >
                {/* Card Header & Visual Identifier */}
                <div>
                  <div className={`p-6 sm:p-8 ${isV4 ? 'bg-slate-50 border-b border-slate-100' : 'bg-emerald-50/50 border-b border-emerald-100'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.pillColor}`}>
                        {item.badge}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
                        isV4 ? 'bg-[#172554] text-white' : 'bg-[#059669] text-white'
                      }`}>
                        {item.versionBadge}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {item.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#172554]">
                        {item.product}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Visual IP node sample */}
                    <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-inner flex items-center justify-between font-mono text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isV4 ? 'text-[#172554]' : 'text-[#059669]'}`} />
                        <span className="truncate">{item.ipSample}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans uppercase font-bold shrink-0 ml-2">
                        Dedicated
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Included Features
                      </h4>
                      <ul className="space-y-3.5">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isV4 ? 'bg-blue-100 text-[#172554]' : 'bg-emerald-100 text-[#059669]'
                            }`}>
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical spec note */}
                    <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-normal">
                      {item.technicalSpec}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Exact Pricing & CTA */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 bg-white space-y-4">
                  {/* Pricing Notice */}
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Subscription Tier</span>
                      <strong className="text-base sm:text-lg font-bold text-[#172554]">
                        {item.pricing}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Info className="w-3 h-3 text-slate-400" />
                        Admin-configured
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => onSelectSolution(item.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all transform active:scale-[0.99] cursor-pointer shadow-sm ${
                      isV4
                        ? 'bg-[#172554] hover:bg-[#1e3a8a] text-white hover:shadow-md hover:shadow-blue-950/20'
                        : 'bg-[#059669] hover:bg-[#047857] text-white hover:shadow-md hover:shadow-emerald-950/20'
                    }`}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Broker configuration note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
            <span>
              Both IPv4 and IPv6 allocations are managed through your centralized dashboard with full broker whitelisting support.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

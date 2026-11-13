import { 
  Server, 
  SlidersHorizontal, 
  Gift, 
  ArrowRight,
  Shield,
  Layers,
  Users
} from 'lucide-react';

export default function WhyIPStore({ onLearnMore }) {
  const cards = [
    {
      id: 'dedicated',
      title: 'Dedicated IP Infrastructure',
      description: 'Choose from IPv4 and IPv6 options for supported trading API configurations.',
      icon: Server,
      badge: 'Dedicated Resources',
      details: [
        'Dedicated static IPv4 & IPv6 allocations',
        'Built for trading API whitelisting',
        'Zero shared proxy pools'
      ],
      accent: 'emerald',
    },
    {
      id: 'broker',
      title: 'Flexible Broker Management',
      description: 'Request broker changes or add supported brokers without waiting for your current subscription to end.',
      icon: SlidersHorizontal,
      badge: 'Dynamic Routing',
      details: [
        'Mid-subscription broker changes',
        'Support for multiple broker mappings',
        'Streamlined whitelisting workflow'
      ],
      accent: 'navy',
    },
    {
      id: 'referral',
      title: 'Referral Benefits',
      description: 'Invite others to the IP Store and access referral benefits under the programme\'s applicable terms.',
      icon: Gift,
      badge: 'Community Rewards',
      details: [
        'Shareable referral links',
        'Eligible subscription incentives',
        'Clear dashboard tracking'
      ],
      accent: 'emerald',
    },
  ];

  return (
    <section id="why-ip-store" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#059669] bg-emerald-50 border border-emerald-200">
            WHY IP STORE
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight">
            Your Trading Infrastructure. <br className="hidden sm:inline" />
            Your Configuration. Your Control.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Managing trading infrastructure shouldn't mean being locked into a single broker configuration.
          </p>
          
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            IP Store gives you a centralised way to purchase and manage static IP addresses, configure supported broker connections, and make changes while your subscription remains active.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id === 'referral' ? 'referral-benefits' : card.id === 'broker' ? 'broker-management' : card.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Icon & Badge */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-[#172554] text-white flex items-center justify-center shadow-md shadow-blue-950/15 group-hover:bg-[#059669] transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#172554] group-hover:text-[#059669] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <ul className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-500">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#172554] group-hover:text-[#059669] transition-colors w-full cursor-pointer"
                >
                  <span>Learn more about setup</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Supporting trust strip */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 text-[#059669]" />
            <span className="text-xs font-medium text-slate-700">Deterministic IP Whitelisting</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Layers className="w-5 h-5 text-[#172554]" />
            <span className="text-xs font-medium text-slate-700">Multi-Broker API Mapping</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-[#059669]" />
            <span className="text-xs font-medium text-slate-700">Centralised Account Dashboard</span>
          </div>
        </div>

      </div>
    </section>
  );
}

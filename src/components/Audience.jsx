import { 
  Code2, 
  UserCheck, 
  Users2, 
  Cpu, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Audience({ onExploreSetup }) {
  const audiences = [
    {
      id: 'algo-devs',
      title: 'Algo Developers',
      description: 'Developers working with trading APIs and automated execution systems.',
      icon: Code2,
      useCases: ['Automated execution scripts', 'Websocket feed stability', 'Persistent API whitelisting'],
    },
    {
      id: 'independent',
      title: 'Independent Traders',
      description: 'Traders managing their own compatible automated trading setups.',
      icon: UserCheck,
      useCases: ['Single-trader bot instances', 'Session continuity', 'Simplified broker setup'],
    },
    {
      id: 'teams',
      title: 'Trading Teams',
      description: 'Teams coordinating supported infrastructure configurations.',
      icon: Users2,
      useCases: ['Multi-account coordination', 'Strategy segregation', 'Centralised subscription view'],
    },
    {
      id: 'fintech',
      title: 'API & Fintech Developers',
      description: 'Technology teams building applications that connect with broker APIs.',
      icon: Cpu,
      useCases: ['Broker-facing middleware', 'Multi-broker connectivity', 'High-throughput architecture'],
    },
  ];

  return (
    <section id="who-can-use" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#172554] bg-slate-100 border border-slate-200">
            WHO CAN USE IP STORE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
            Infrastructure for Different Trading Setups.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Whether you develop custom algorithmic execution models or build commercial broker integration layers, IP Store provides reliable static IP connectivity.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#172554] text-white flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#059669] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#172554] mb-2 group-hover:text-[#059669] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Common Applications
                    </span>
                    <ul className="space-y-1.5">
                      {item.useCases.map((uc) => (
                        <li key={uc} className="text-xs text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onExploreSetup}
                  className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#172554] group-hover:text-[#059669] transition-colors w-full cursor-pointer"
                >
                  <span>Explore configuration</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional infrastructure assurance */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600">
            Dedicated IPs configured to comply with individual broker security protocols and whitelisting standards.
          </p>
        </div>

      </div>
    </section>
  );
}

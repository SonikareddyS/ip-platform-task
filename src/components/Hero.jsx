
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Server,
  SlidersHorizontal,
  CreditCard,
  CheckCircle2,
  Wifi,
  Globe
} from 'lucide-react';

export default function Hero({ onGetStarted, onExploreFeatures }) {
  const trustPoints = [
    {
      title: 'Dedicated Static IP Addresses',
      description: 'Persistent network identity for consistent broker connectivity.',
      icon: Server,
    },
    {
      title: 'IPv4 & IPv6 Options',
      description: 'Tailored configurations for modern and legacy API requirements.',
      icon: Layers,
    },
    {
      title: 'Flexible Broker Management',
      description: 'Seamlessly configure and adjust supported broker connections.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Transparent Subscription Management',
      description: 'Clear duration terms with no hidden infrastructure lock-ins.',
      icon: CreditCard,
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#172554] text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      {/* Background Gradients */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-[#059669]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-sm shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
              </span>
              <span>Enterprise Static IP Infrastructure</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]">
              Static IP Infrastructure <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                Built for Algo Trading.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              A reliable and flexible IP management platform for algorithmic trading setups. Get dedicated IPv4 and IPv6 connectivity with the freedom to manage your broker configurations as your trading requirements evolve.
            </p>

            {/* CTA Buttons - Updated Tablet Alignment */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">

              <button
                type="button"
                onClick={onGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get Your Static IP</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>

              <button
                type="button"
                onClick={onExploreFeatures}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Features</span>
              </button>

            </div>

            {/* Micro Assurance */}
            <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
              <span>Dedicated static allocations · Broker whitelisting support · Zero shared pools</span>
            </p>

          </div>

          {/* Right Column: IPv4 and IPv6 Cards */}
          <div className="lg:col-span-5 relative">

            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">

              {/* IPv4 Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden group hover:border-emerald-400/50 transition-all">

                <div className="flex items-center justify-between mb-3">

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#059669]/20 border border-[#059669]/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                      v4
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        Dedicated IPv4 Node
                      </h2>
                      <p className="text-[11px] text-slate-400 font-mono">
                        32-bit Address Space
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Assigned
                  </span>

                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 font-mono text-sm sm:text-base text-emerald-300 flex items-center justify-between">
                  <span className="tracking-wider">198.51.100.24</span>
                  <span className="text-[11px] text-slate-400">/32 Dedicated</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    Broker Gateway
                  </span>
                  <span className="font-medium text-slate-200">
                    Whitelisting Ready
                  </span>
                </div>

              </div>

              {/* IPv6 Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden group hover:border-emerald-400/50 transition-all">

                <div className="flex items-center justify-between mb-3">

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 font-mono font-bold text-xs">
                      v6
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        Dedicated IPv6 Node
                      </h2>
                      <p className="text-[11px] text-slate-400 font-mono">
                        128-bit Next-Gen Block
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <Globe className="w-3 h-3" />
                    Active
                  </span>

                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 font-mono text-xs sm:text-sm text-blue-200 flex items-center justify-between overflow-x-auto">
                  <span className="tracking-wide truncate">
                    2001:0db8:85a3::8a2e
                  </span>
                  <span className="text-[11px] text-slate-400 shrink-0 ml-2">
                    /128 Node
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Protocol Routing
                  </span>
                  <span className="font-medium text-slate-200">
                    Native Direct Path
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Supporting Trust Points */}
        <div className="mt-14 pt-10 border-t border-white/15">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {trustPoints.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#059669]/20 border border-[#059669]/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

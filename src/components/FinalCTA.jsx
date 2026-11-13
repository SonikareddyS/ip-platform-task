import { ArrowRight, LifeBuoy, Server, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA({ onGetStarted, onContactSupport }) {
  return (
    <section className="relative py-20 md:py-28 bg-[#172554] text-white overflow-hidden">
      {/* Background Radial Pattern & Glows */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#059669]/15 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Floating Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-sm shadow-inner">
          <Server className="w-4 h-4 text-emerald-400" />
          <span>Centralised IP Infrastructure for Algorithmic Setups</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Build Your Trading Setup With Flexible IP Infrastructure.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Choose your IP, configure supported brokers and manage your subscription through one platform.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-xl shadow-emerald-950/40 hover:shadow-emerald-900/60 transform hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onContactSupport}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all cursor-pointer"
          >
            <LifeBuoy className="w-5 h-5 text-slate-400" />
            <span>Contact Support</span>
          </button>
        </div>

        {/* Bottom Feature Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            Dedicated Static IPv4 & IPv6
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            Flexible Broker Management
          </span>
          <span className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#059669]" />
            Transparent Subscription Control
          </span>
        </div>

      </div>
    </section>
  );
}


import { 
  UserPlus, 
  Layers, 
  CreditCard, 
  SlidersHorizontal, 
  LayoutDashboard, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function HowItWorks({ onGetStarted }) {
  const steps = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Register on IP Store and access your customer dashboard.',
      icon: UserPlus,
      tag: 'Registration',
    },
    {
      step: '02',
      title: 'Choose Your IP',
      description: 'Select IPv4 or IPv6 based on your technical requirements and broker compatibility.',
      icon: Layers,
      tag: 'Selection',
    },
    {
      step: '03',
      title: 'Complete Your Purchase',
      description: 'Choose the available subscription plan and complete payment.',
      icon: CreditCard,
      tag: 'Subscription',
    },
    {
      step: '04',
      title: 'Configure Your Broker',
      description: 'Submit the required broker configuration details and complete the broker-side whitelisting process.',
      icon: SlidersHorizontal,
      tag: 'Whitelisting',
    },
    {
      step: '05',
      title: 'Manage Your Subscription',
      description: 'Monitor your IP status, renewal date, broker configuration and additional services from your dashboard.',
      icon: LayoutDashboard,
      tag: 'Dashboard',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-[#059669] bg-emerald-50 border border-emerald-200">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight">
            Get Your Static IP in a Few Simple Steps.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            A clear and structured deployment path designed to get your dedicated IP operational and whitelisted with minimal setup overhead.
          </p>
        </div>

        {/* 5 Connected Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number & Connector Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-xl bg-slate-100 text-[#172554] font-mono font-bold text-sm flex items-center justify-center group-hover:bg-[#172554] group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#172554] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Micro progression check */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#059669] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Step {index + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Flow Bottom Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#172554]">
              Ready to configure your algo trading static IP?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your IP family and submit your broker whitelisting details today.
            </p>
          </div>
          <button
            type="button"
            onClick={onGetStarted}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-colors cursor-pointer"
          >
            <span>Start Step 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}


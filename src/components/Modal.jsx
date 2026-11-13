
import { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Server,
  Headset,
  ShieldCheck
} from 'lucide-react';

export default function Modal({
  isOpen,
  type = 'get-started',
  initialSolution = 'ipv4',
  onClose
}) {
  const [solution, setSolution] = useState(initialSolution);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSolution(initialSolution);
  }, [initialSolution]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSupport = type === 'support';
  const isLegal = type === 'legal';

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only: no backend submission is connected.
    alert(
      'The form UI is working, but submission is not connected to a backend yet.'
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#172554] px-6 py-7 text-white">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
            {isSupport ? (
              <Headset className="h-6 w-6 text-emerald-400" />
            ) : isLegal ? (
              <ShieldCheck className="h-6 w-6 text-emerald-400" />
            ) : (
              <Server className="h-6 w-6 text-emerald-400" />
            )}
          </div>

          <h2
            id="modal-title"
            className="text-2xl font-bold"
          >
            {isSupport
              ? 'Contact Support'
              : isLegal
                ? 'Legal Information'
                : 'Get Your Static IP'}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {isSupport
              ? 'Tell us how we can help with your IP infrastructure.'
              : isLegal
                ? 'Please review the applicable terms and policies for IP Store.'
                : 'Get started with dedicated IP infrastructure for your trading setup.'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isLegal ? (
            <div className="space-y-4 text-sm leading-6 text-slate-600">
              <p>
                This section is reserved for the official IP Store
                terms of service, privacy policy and other legal
                information.
              </p>
              <p>
                Please add the approved legal content before making
                this information publicly available.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg bg-[#172554] px-5 py-3 font-semibold text-white hover:bg-blue-900"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {!isSupport && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Choose your IP solution
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {['ipv4', 'ipv6'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSolution(item)}
                        className={`rounded-xl border p-4 text-left transition ${solution === item
                            ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600'
                            : 'border-slate-200 hover:border-slate-400'
                          }`}
                      >
                        <Server
                          className={`mb-2 h-5 w-5 ${solution === item
                              ? 'text-emerald-600'
                              : 'text-slate-500'
                            }`}
                        />
                        <span className="block font-semibold text-slate-800">
                          {item.toUpperCase()}
                        </span>
                        <span className="text-xs text-slate-500">
                          Dedicated IP
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {isSupport && (
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    How can we help?
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your query..."
                    required
                    rows={3}
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#059669] px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#047857] active:scale-[0.98]"
              >
                {isSupport ? 'Submit Support Request' : 'Continue'}
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-slate-400">
                This is a frontend demonstration. Form submission
                requires backend integration.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

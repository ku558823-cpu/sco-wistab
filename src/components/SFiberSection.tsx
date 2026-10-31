/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Wifi, 
  Check, 
  Zap, 
  Tv, 
  PhoneCall, 
  Download, 
  ShieldCheck, 
  ArrowRight,
  Gauge
} from 'lucide-react';
import { SFIBER_PLANS } from '../data/scoData.ts';
import { SFiberPlan } from '../types/sco.ts';

interface SFiberSectionProps {
  onCheckFeasibility: () => void;
  onApplyConnection: (plan: SFiberPlan) => void;
}

export const SFiberSection: React.FC<SFiberSectionProps> = ({
  onCheckFeasibility,
  onApplyConnection
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="sco-badge bg-sky-100 text-[#0284C7] mb-2">
              TRUE FIBER-TO-THE-HOME (FTTH)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
              SFiber Ultra High-Speed Optical Broadband
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Connect to Pakistan’s highest-altitude optical fiber highway. Enjoy symmetrical upload and download speeds up to 100 Mbps, unthrottled unlimited bandwidth, free landline calls, and crystal-clear IPTV.
            </p>
          </div>

          <button
            onClick={onCheckFeasibility}
            className="btn-sfiber-blue text-xs sm:text-sm font-bold shadow-md self-start md:self-end"
          >
            <Wifi className="w-4 h-4 mr-1.5" />
            Check Fiber Feasibility in My Sector
          </button>
        </div>

        {/* SFiber Official Banner Graphic from sco.gov.pk */}
        <div className="mb-10 rounded-xl overflow-hidden border border-slate-200 shadow-md h-40 sm:h-52 relative group">
          <img
            src="https://sco.gov.pk/static/media/SFIBERv2.16b301ea7621b0125060.jpg"
            alt="SFiber Optical Broadband Infrastructure"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00381c]/90 via-[#004d26]/60 to-transparent flex items-center p-6 sm:p-8">
            <div className="max-w-md text-white space-y-1">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded">
                100% GIGABIT FIBER CORE
              </span>
              <h3 className="text-lg sm:text-2xl font-black">
                Unlimited High-Speed Home & Enterprise FTTH
              </h3>
              <p className="text-xs text-emerald-100 hidden sm:block">
                Zero buffering in 4K streaming • Ultra-low latency for competitive esports & software houses
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SFIBER_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'border-[#0284C7] shadow-lg ring-2 ring-[#0284C7]/20 relative'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0284C7] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs">
                  Most Popular Choice
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Optical FTTH
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {plan.name}
                </h3>

                {/* Speed Gauge Banner */}
                <div className="p-4 bg-sky-50/70 rounded-lg border border-sky-100 text-center mb-5">
                  <div className="flex items-baseline justify-center gap-1 text-[#0284C7]">
                    <span className="text-4xl font-black">{plan.speedMbps}</span>
                    <span className="text-sm font-bold">Mbps</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 block mt-1">
                    Symmetrical Speed (Upload & Download)
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>{plan.dataLimit}</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>{plan.freeVoiceMins} Mins</strong> Free SPhone Voice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{plan.freeIptv ? 'Free Smart IPTV App' : 'Optional IPTV Add-on'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Optical ONT Gigabit Dual-Band Router</span>
                  </li>
                </ul>

                <p className="text-[11px] text-slate-500 italic mb-4">
                  "{plan.idealFor}"
                </p>
              </div>

              {/* Bottom Price & Button */}
              <div className="pt-4 border-t border-slate-100">
                <div className="mb-4">
                  <span className="text-[11px] text-slate-400 block font-medium">Monthly Line Rent</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900">
                      Rs. {plan.monthlyRent}
                    </span>
                    <span className="text-xs text-slate-500">/ month + tax</span>
                  </div>
                </div>

                <button
                  onClick={() => onApplyConnection(plan)}
                  className={`w-full text-xs font-bold py-2.5 rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    plan.popular
                      ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Order SFiber Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official S-Fiber & Smart TV Triple Play Showcase (CarouselOne) */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-black/10">
          <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
            <img
              src="/assets/aistudio/CarouselOne.b57434e17e86f4cd9183_4a0da36d.jpg"
              alt="Enjoy with S-Fiber & Smart TV - Voice + Internet + IPTV"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent flex items-center p-6 sm:p-10">
              <div className="max-w-xl text-white space-y-2">
                <span className="sco-badge bg-[#006633] text-amber-300 border border-emerald-400/50">
                  TRIPLE PLAY BUNDLE • VOICE + INTERNET + IPTV
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  Enjoy with S-Fiber & Smart TV
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 hidden sm:block">
                  Transform your home entertainment with high-speed optical broadband, Android 4K Smart TV box, and free digital voice calling.
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <button
                    onClick={onCheckFeasibility}
                    className="btn-sfiber-blue text-xs font-bold shadow-md"
                  >
                    Check Smart TV Feasibility
                  </button>
                  <a
                    href="tel:111726726"
                    className="px-4 py-2 rounded bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    Order Smart TV Box (111-726-726)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SFiber Technology Guarantees */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006633] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Ultra-Low Gaming Latency</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Direct submarine fiber backhaul routing delivers ping under 25ms to major gaming & cloud servers.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Dual-Band 5GHz Optical ONT</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Next-gen optical network terminal provided with extended wall-penetrating Wi-Fi coverage.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">24/7 Mountain Field Splicing</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Specialized all-weather optical linemen ready for quick restoration even during harsh winter snow.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

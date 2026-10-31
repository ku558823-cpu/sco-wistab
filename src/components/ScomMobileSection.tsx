/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Smartphone, 
  Wifi, 
  PhoneCall, 
  MessageSquare, 
  Zap, 
  Check, 
  ArrowRight,
  Filter,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { SCOM_PACKAGES } from '../data/scoData.ts';
import { ScomPackage } from '../types/sco.ts';

interface ScomMobileSectionProps {
  onRechargePackage: (pkg: ScomPackage) => void;
  onOpenEsim: () => void;
}

export const ScomMobileSection: React.FC<ScomMobileSectionProps> = ({
  onRechargePackage,
  onOpenEsim
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'trending' | 'super-card' | 'data' | 'hybrid' | 'social'>('all');
  const [subscribedModalPkg, setSubscribedModalPkg] = useState<ScomPackage | null>(null);

  const filteredPackages = selectedFilter === 'all'
    ? SCOM_PACKAGES
    : selectedFilter === 'trending'
    ? SCOM_PACKAGES.filter(p => p.popular || Boolean(p.tag))
    : SCOM_PACKAGES.filter(p => p.category === selectedFilter);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SCOM_Logo.png/300px-SCOM_Logo.png"
                alt="SCOM 4G Logo"
                className="h-9 object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="sco-badge bg-orange-100 text-[#EA580C]">
                SCOM 4G LTE CELLULAR NETWORK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
              SCOM 4G Super Cards & Data Bundles
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Azad Jammu & Kashmir and Gilgit-Baltistan’s most extensive 4G cellular coverage. Enjoy blazing-fast data speeds, high-altitude mountain connectivity, and zero hidden deductions.
            </p>
          </div>

          {/* Promotional Image Showcase with User's Photo replacing model */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2.5 p-2 rounded-xl border border-emerald-200 shadow-xs bg-emerald-50/70">
              <div className="w-12 h-14 rounded-lg overflow-hidden border border-emerald-400 shadow-xs shrink-0">
                <img
                  src="/assets/aistudio/Screenshot_2025-06-06_050615_e2b26080.png"
                  alt="SCOM Brand Ambassador"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left pr-2">
                <span className="text-[10px] font-black uppercase text-[#006633] block">SCOM 4G Ambassador</span>
                <span className="text-xs font-bold text-slate-800 block">Official Face of SCOM</span>
                <span className="text-[10px] text-slate-500">Connecting AJ&K & GB</span>
              </div>
            </div>
            <div className="w-40 h-16 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white flex items-center justify-center p-1">
              <img
                src="/assets/aistudio/MobilePrepaid.e62c1b110028ad277519_2d707ff8.png"
                alt="SCOM 4G Mobile Network"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Flagship SCOM 4G Mobile Banner with User Photo (replacing the model) */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-gradient-to-r from-[#004f25] via-[#006633] to-[#003618] text-white shadow-xl border border-emerald-500/40 relative">
          {/* Subtle concentric rings like SCOM MobilePrepaid artwork */}
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border border-emerald-400/20 pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 rounded-full border border-emerald-400/20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-10 relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <img
                  src="/assets/aistudio/download_2127cb7c.png"
                  alt="SCO Official Logo"
                  className="h-9 object-contain bg-white/95 px-2.5 py-1 rounded-md shadow-xs"
                />
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-900 shadow-xs">
                  ★ SCOM 4G OFFICIAL NETWORK
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  4G MOBILE <span className="text-amber-300">NETWORK</span>
                </h3>
                <p className="text-sm sm:text-base text-emerald-100 font-medium mt-3 max-w-xl leading-relaxed">
                  Join millions of satisfied subscribers with SCOM 4G LTE. Experience crystal-clear high-altitude voice calling, high-speed 4G data bundles, and true freedom with zero balance deduction.
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-semibold text-emerald-50">Dial <strong className="text-amber-300 font-mono">*111#</strong> for Instant Balance</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-semibold text-emerald-50">Super Cards with <strong className="text-white">Zero Deductions</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-semibold text-emerald-50">Instant <strong className="text-white">S-Paisa</strong> Online Top-up</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-lg">
                  <Check className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-semibold text-emerald-50">Seamless <strong className="text-white">Nationwide Roaming</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    if (filteredPackages.length > 0) {
                      onRechargePackage(filteredPackages[0]);
                    }
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-extrabold shadow-md transition-all flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
                  <span>Quick Recharge / Load</span>
                </button>
                <button
                  onClick={onOpenEsim}
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-emerald-300" />
                  <span>Get SCOM eSIM / SIM</span>
                </button>
                <a
                  href="tel:355"
                  className="px-4 py-2.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 text-emerald-200 text-xs font-bold border border-emerald-500/40 transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                  <span>Dial 355 Helpline</span>
                </a>
              </div>
            </div>

            {/* Right Column: User's Photo replacing model */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[270px] sm:max-w-[300px] w-full">
                {/* Glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-300 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden border-2 border-white/80 bg-slate-900 shadow-2xl">
                  <img
                    src="/assets/aistudio/Screenshot_2025-06-06_050615_e2b26080.png"
                    alt="SCOM 4G Brand Ambassador"
                    className="w-full h-80 sm:h-96 object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#006633]/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-emerald-300/40 shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>Official SCOM Ambassador</span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span className="text-sm font-black text-white">SCOM 4G Brand Face</span>
                      <Check className="w-4 h-4 text-sky-400 stroke-[3]" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-300 block">
                      Azad Jammu & Kashmir • Gilgit-Baltistan
                    </span>
                    <span className="text-[10px] text-emerald-200/80 block mt-0.5">
                      Fastest 4G Mobile Network
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg mb-8 w-fit">
          {[
            { id: 'all', label: 'All Offers' },
            { id: 'trending', label: '🔥 Trending Offers' },
            { id: 'super-card', label: 'Super Cards' },
            { id: 'data', label: '4G Data Buckets' },
            { id: 'hybrid', label: 'Hybrid Bundles' },
            { id: 'social', label: 'Social Packs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#EA580C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badge & Validity */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {pkg.validity}
                  </span>
                  {pkg.tag && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-orange-100 text-[#EA580C]">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Main Feature Highlight (Data GB) */}
                <div className="p-3 bg-orange-50/60 rounded-lg border border-orange-100 mb-4 text-center">
                  <span className="text-2xl font-black text-[#EA580C]">
                    {pkg.dataGb} {typeof pkg.dataGb === 'number' ? 'GB' : ''}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 block mt-0.5">
                    High-Speed 4G LTE Data
                  </span>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2 text-xs text-slate-600 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                      SCOM to SCOM Mins:
                    </span>
                    <strong className="text-slate-800">{pkg.onNetMins}</strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                      Other Network Mins:
                    </span>
                    <strong className="text-slate-800">{pkg.offNetMins}</strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                      All-Net SMS:
                    </span>
                    <strong className="text-slate-800">{pkg.sms}</strong>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Consumer Price (Incl. Tax)</span>
                    <span className="text-xl font-black text-slate-900">
                      Rs. {pkg.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Dial Code</span>
                    <span className="text-xs font-bold font-mono text-[#006633] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {pkg.dialCode}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSubscribedModalPkg(pkg)}
                  className="w-full btn-scom-orange text-xs font-bold py-2.5 shadow-sm justify-center"
                >
                  <Zap className="w-3.5 h-3.5 mr-1.5" />
                  <span>Activate / Subscribe</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tourist 4G SIM & Khunjerab Pass Banner */}
        <div className="mt-12 rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-gradient-to-r from-[#004d26] to-[#002613] text-white">
          <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden">
            <img
              src="/assets/aistudio/CarouselTwo.cbc76b0ce2b198a546aa_c41e9348.png"
              alt="Pak China Comm Centre Khunjerab Pass - Travel with SCOM"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-6 sm:p-8">
              <div className="max-w-xl space-y-2">
                <span className="sco-badge bg-amber-400 text-slate-900">
                  TRAVEL WITH SCOM • KHUNJERAB PASS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Experience lightning-fast connectivity with our cutting-edge 4G Services!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 hidden sm:block">
                  Pak China Comm Centre — High-altitude SCOM 4G coverage at the northern-most gateway of Pakistan.
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <button
                    onClick={onOpenEsim}
                    className="px-4 py-2 rounded bg-white text-[#006633] text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    Get SCOM Tourist eSIM
                  </button>
                  <a
                    href="tel:355"
                    className="px-4 py-2 rounded bg-[#EA580C] text-white text-xs font-bold hover:bg-[#C2410C] transition-colors shadow-sm"
                  >
                    Dial 355 Helpline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Subscription Dialog Modal */}
      {subscribedModalPkg && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h4 className="font-bold text-slate-900 text-base">
                Activate {subscribedModalPkg.name}
              </h4>
              <button
                onClick={() => setSubscribedModalPkg(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center space-y-1">
              <span className="text-xs text-slate-600 block">Dial USSD from your SCOM mobile:</span>
              <strong className="text-2xl font-black font-mono text-[#EA580C] block">
                {subscribedModalPkg.dialCode}
              </strong>
              <span className="text-xs text-slate-500 block">Or recharge Rs. {subscribedModalPkg.price} via S-Paisa</span>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Data Volume:</span>
                <strong className="text-slate-900">{subscribedModalPkg.dataGb} GB 4G</strong>
              </div>
              <div className="flex justify-between">
                <span>Validity:</span>
                <strong className="text-slate-900">{subscribedModalPkg.validity}</strong>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <strong className="text-[#006633] text-sm">Rs. {subscribedModalPkg.price}.00</strong>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  onRechargePackage(subscribedModalPkg);
                  setSubscribedModalPkg(null);
                }}
                className="flex-1 btn-scom-orange text-xs font-bold py-2.5"
              >
                Recharge & Activate Now
              </button>
              <button
                onClick={() => setSubscribedModalPkg(null)}
                className="px-4 py-2.5 rounded border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

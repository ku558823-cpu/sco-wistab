/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  PhoneCall, 
  MessageSquare, 
  Check, 
  ArrowRight, 
  Wifi, 
  Tv, 
  Sparkles, 
  Copy, 
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Users
} from 'lucide-react';
import { TRENDING_PACKAGES } from '../data/scoData.ts';
import { TrendingPackage } from '../types/sco.ts';

interface TrendingPackagesSectionProps {
  onRechargePackage: (pkg: TrendingPackage) => void;
  onCheckFeasibility: () => void;
  onApplyFiber: () => void;
}

export const TrendingPackagesSection: React.FC<TrendingPackagesSectionProps> = ({
  onRechargePackage,
  onCheckFeasibility,
  onApplyFiber
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'scom' | 'super-card' | 'sfiber' | 'special'>('all');
  const [activeModalPkg, setActiveModalPkg] = useState<TrendingPackage | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredPackages = activeFilter === 'all'
    ? TRENDING_PACKAGES
    : TRENDING_PACKAGES.filter(p => p.category === activeFilter);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="trending-packages" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-100 text-[#EA580C] border border-orange-200 shadow-xs">
                <Flame className="w-4 h-4 fill-[#EA580C] text-[#EA580C] animate-pulse" />
                TRENDING PACKAGES • MOST SUBSCRIBED
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-500">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                Updated Today
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00381c] tracking-tight">
              Most Popular Packages in AJ&K & Gilgit-Baltistan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Discover the highest-rated SCOM 4G Super Cards, massive data bundles, and SFiber optical broadband plans selected by over 2.5 million subscribers.
            </p>
          </div>

          {/* Key Stat Badge */}
          <div className="hidden lg:flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-xl p-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#006633] text-amber-300 flex items-center justify-center font-black">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-left text-xs">
              <span className="text-slate-500 block font-medium">Regional Subscribers</span>
              <span className="text-sm font-black text-[#006633]">2,500,000+ Active</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-xl mb-8 w-fit border border-slate-200/80">
          {[
            { id: 'all', label: 'All Trending (8)', icon: Flame },
            { id: 'super-card', label: 'Super Cards', icon: CreditCard },
            { id: 'scom', label: '4G Data & Hybrid', icon: Zap },
            { id: 'sfiber', label: 'SFiber & IPTV', icon: Wifi },
            { id: 'special', label: 'Students & Night', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#EA580C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => {
            const isFiber = pkg.serviceType === 'sfiber';
            const isHot = pkg.badgeType === 'hot';
            const isSuper = pkg.badgeType === 'super';

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between relative bg-white overflow-hidden ${
                  isHot 
                    ? 'border-orange-300 shadow-md ring-1 ring-orange-200 hover:shadow-xl' 
                    : isSuper
                    ? 'border-emerald-300 shadow-md ring-1 ring-emerald-200 hover:shadow-xl'
                    : 'border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Top Badge Strip */}
                <div className={`px-4 py-2 flex items-center justify-between text-[11px] font-black uppercase tracking-wider ${
                  isHot 
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white' 
                    : isSuper
                    ? 'bg-gradient-to-r from-[#006633] to-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>{pkg.badge}</span>
                  </span>
                  <span className="text-[10px] font-bold opacity-90">{pkg.validity}</span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Service Type */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                        isFiber 
                          ? 'bg-sky-100 text-sky-800 border border-sky-200' 
                          : 'bg-emerald-100 text-[#006633] border border-emerald-200'
                      }`}>
                        {pkg.categoryLabel}
                      </span>
                      {pkg.subscriberCount && (
                        <span className="text-[10px] text-slate-500 font-semibold">
                          {pkg.subscriberCount}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Main Feature Highlight (Data or Speed) */}
                    <div className={`p-3 rounded-xl mb-4 text-center border ${
                      isFiber 
                        ? 'bg-sky-50/80 border-sky-100 text-sky-900' 
                        : 'bg-orange-50/70 border-orange-100 text-[#EA580C]'
                    }`}>
                      <div className="flex items-center justify-center gap-1.5">
                        {isFiber ? <Wifi className="w-5 h-5 text-sky-600" /> : <Zap className="w-5 h-5 text-[#EA580C] fill-[#EA580C]" />}
                        <span className="text-2xl font-black tracking-tight">
                          {pkg.dataDisplay}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 block mt-0.5">
                        {isFiber ? `${pkg.speedMbps} Mbps Optical Bandwidth` : 'High-Speed 4G LTE Data'}
                      </span>
                    </div>

                    {/* Specs Matrix */}
                    <div className="space-y-2 text-xs text-slate-600 mb-4 bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Voice Mins:</span>
                        </span>
                        <strong className="text-slate-800">{pkg.voiceDisplay}</strong>
                      </div>

                      {pkg.offNetDisplay && (
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-500">
                            {isFiber ? <Tv className="w-3.5 h-3.5 text-indigo-600" /> : <PhoneCall className="w-3.5 h-3.5 text-amber-600" />}
                            <span>{isFiber ? 'TV / Voice:' : 'Off-Net Mins:'}</span>
                          </span>
                          <strong className="text-slate-800">{pkg.offNetDisplay}</strong>
                        </div>
                      )}

                      {pkg.smsDisplay && (
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-500">
                            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                            <span>SMS Limit:</span>
                          </span>
                          <strong className="text-slate-800">{pkg.smsDisplay}</strong>
                        </div>
                      )}
                    </div>

                    {/* USP Banner */}
                    <div className="p-2 bg-emerald-50/60 rounded-md border border-emerald-100 text-[11px] text-emerald-900 font-medium mb-4 flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{pkg.highlightBenefit}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Consumer Price (Incl. Tax)</span>
                        <span className="text-xl font-black text-slate-900">
                          Rs. {pkg.price}
                          <span className="text-xs font-semibold text-slate-500">{pkg.pricePeriod}</span>
                        </span>
                      </div>
                      {pkg.dialCode && (
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block font-mono">Activation</span>
                          <span className="text-xs font-bold font-mono text-[#006633] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {pkg.dialCode}
                          </span>
                        </div>
                      )}
                    </div>

                    {isFiber ? (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={onCheckFeasibility}
                          className="px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer text-center"
                        >
                          Check City
                        </button>
                        <button
                          onClick={onApplyFiber}
                          className="px-3 py-2.5 rounded-lg bg-[#006633] hover:bg-[#004d26] text-white text-xs font-bold transition-colors cursor-pointer text-center"
                        >
                          Apply FTTH
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveModalPkg(pkg)}
                          className="px-3 py-2.5 rounded-lg border border-orange-200 bg-orange-50/60 hover:bg-orange-100/70 text-[#EA580C] text-xs font-bold transition-colors cursor-pointer text-center"
                        >
                          Dial Code
                        </button>
                        <button
                          onClick={() => onRechargePackage(pkg)}
                          className="btn-scom-orange text-xs font-bold py-2.5 shadow-xs justify-center cursor-pointer"
                        >
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          <span>Recharge</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick Activation Modal */}
      {activeModalPkg && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-orange-100 text-[#EA580C]">
                  <Flame className="w-4 h-4 fill-[#EA580C]" />
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  Activate {activeModalPkg.name}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalPkg(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-orange-50/80 rounded-xl border border-orange-200 text-center space-y-2">
              <span className="text-xs text-slate-600 block">Dial USSD directly from your SCOM SIM:</span>
              <div className="flex items-center justify-center gap-3">
                <strong className="text-3xl font-black font-mono text-[#EA580C]">
                  {activeModalPkg.dialCode}
                </strong>
                <button
                  onClick={() => handleCopyCode(activeModalPkg.dialCode || '*111#')}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-orange-200 text-slate-700 hover:bg-orange-100 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3 text-[#EA580C]" />
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-[11px] text-slate-500 block">Or recharge Rs. {activeModalPkg.price} via S-Paisa</span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between">
                <span>Data Volume:</span>
                <strong className="text-slate-900">{activeModalPkg.dataDisplay}</strong>
              </div>
              <div className="flex justify-between">
                <span>Voice Limit:</span>
                <strong className="text-slate-900">{activeModalPkg.voiceDisplay}</strong>
              </div>
              <div className="flex justify-between">
                <span>Validity:</span>
                <strong className="text-slate-900">{activeModalPkg.validity}</strong>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200">
                <span>Consumer Price (Incl. Tax):</span>
                <strong className="text-[#006633] text-sm font-extrabold">Rs. {activeModalPkg.price}.00</strong>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  onRechargePackage(activeModalPkg);
                  setActiveModalPkg(null);
                }}
                className="flex-1 btn-scom-orange text-xs font-bold py-2.5 cursor-pointer justify-center"
              >
                Recharge & Activate Now
              </button>
              <button
                onClick={() => setActiveModalPkg(null)}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
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

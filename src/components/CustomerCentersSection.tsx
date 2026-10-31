/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Check, 
  Building2, 
  Search, 
  Navigation,
  Globe
} from 'lucide-react';
import { CUSTOMER_CENTERS } from '../data/scoData.ts';

export const CustomerCentersSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCenters = CUSTOMER_CENTERS.filter((center) => {
    const matchesRegion = selectedRegion === 'All' || center.region === selectedRegion;
    const matchesSearch = 
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="sco-badge bg-emerald-100 text-[#006633] mb-2">
              REGIONAL TOUCHPOINTS & FRANCHISES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
              Customer Facilitation Centers (CFCs)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Visit our regional flagship customer facilitation centers for immediate SIM replacement, biometric verification, SFiber bookings, duplicate bill settlement, and corporate connectivity consultations.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="w-40 h-20 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=300"
                alt="SCO Customer Care Helpdesk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Directorate General SCO Headquarters & Central Customer Facilitation Complex */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] lg:h-auto overflow-hidden bg-slate-900 group">
            <img
              src="/assets/aistudio/SCOBuilding.2cab6dc91635cbd451d6_c959e273.jpg"
              alt="Directorate General Special Communications Organization Headquarters Building"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#006633]/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow-xs tracking-wider border border-white/20">
              DG SCO CENTRAL HEADQUARTERS
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xs text-white p-3 rounded-lg border border-white/10 flex items-center justify-between text-xs">
              <span className="font-semibold flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-400" />
                Qasim Market, Rawalpindi / Sector H-9 Islamabad
              </span>
              <span className="text-emerald-300 font-bold hidden sm:inline">UAN: 111-726-726</span>
            </div>
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-white">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#006633] bg-emerald-100 px-2 py-0.5 rounded uppercase">
                  Flagship Complex
                </span>
                <span className="text-xs text-slate-500 font-semibold">Established 1976</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Central Customer Care & Corporate Directorate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                The apex technological complex coordinating telecommunication networks, international CPEC optical fiber backhaul, software technology parks, and customer facilitation centers across AJ&amp;K and Gilgit-Baltistan.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-semibold mb-6">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Executive Corporate Desk</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Biometric SIM Verification</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>SFiber Enterprise Gateway</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>24/7 Network Operations</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href="tel:111726726"
                className="btn-sco-green text-xs font-bold shadow-xs py-2 px-4 inline-flex items-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call HQ UAN (111-726-726)
              </a>
              <a
                href="https://maps.google.com/?q=Special+Communications+Organization+Headquarters+Rawalpindi"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-slate-500" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-full sm:w-auto">
            {['All', 'AJ&K', 'GB', 'Rawalpindi HQ'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${
                  selectedRegion === reg
                    ? 'bg-[#006633] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {reg === 'All' ? 'All Centers' : reg}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by city or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 h-10 text-xs rounded border border-slate-300 focus:border-[#006633] outline-none"
            />
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((c) => (
            <div
              key={c.id}
              className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#006633] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase">
                    {c.region}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{c.district}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                  {c.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{c.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`tel:${c.phone.replace(/\D/g, '')}`} className="font-semibold text-[#006633] hover:underline">
                      {c.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{c.timing}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    On-Site Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.services.map((srv, i) => (
                      <span key={i} className="text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={`tel:${c.phone.replace(/\D/g, '')}`}
                  className="text-xs font-bold text-[#006633] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Facilitation Desk</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(c.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3 text-slate-500" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

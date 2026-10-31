/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Bus, 
  Trophy, 
  Activity, 
  Award, 
  Accessibility, 
  Flag, 
  Maximize2, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users
} from 'lucide-react';
import { SCO_IMAGES } from '../data/scoImages.ts';

export const CSRSection: React.FC = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeInitiative, setActiveInitiative] = useState<number | null>(null);

  const CSR_INITIATIVES = [
    {
      id: 'free-bus-wifi',
      title: 'Free Public Wi-Fi in Commuter Buses',
      badge: 'Public Transport',
      icon: Bus,
      color: 'text-pink-600 bg-pink-50 border-pink-200',
      description: 'Free high-speed 4G Wi-Fi onboard public transport including the Pink Bus service for female commuters, students, and tourists in Gilgit, Skardu, and Muzaffarabad.',
      metric: '15+ Buses Connected',
      highlight: 'Powered by SCOM 4G'
    },
    {
      id: 'girls-football',
      title: 'Gilgit-Baltistan Girls Football League (GB GFL)',
      badge: 'Women in Sports',
      icon: Trophy,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'SCO is the proud official sponsor of the GB Girls Football League, providing sports kits, professional training camps, and national championship platforms for young mountain girls.',
      metric: '500+ Female Athletes',
      highlight: 'Champions of the North'
    },
    {
      id: 'jashn-azadi-football',
      title: 'Jashn-e-Azadi Football Tournament',
      badge: 'Youth Sports',
      icon: Activity,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Annual Independence Cup football tournament organized across Gilgit-Baltistan to nurture grassroots talent and promote healthy sports culture among youth.',
      metric: '32 Teams Competing',
      highlight: 'Grassroots Talent'
    },
    {
      id: 'martial-arts',
      title: 'Taekwondo & Snooker Championships',
      badge: 'Athletic Excellence',
      icon: Award,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'Full sponsorship and equipment backing for regional champions in Martial Arts, Taekwondo, and the prestigious SCO Snooker Championship across AJ&K & GB.',
      metric: '25+ Medalists Funded',
      highlight: 'National Representation'
    },
    {
      id: 'disability-support',
      title: 'Disability Inclusivity & Support Conference',
      badge: 'Special Needs Care',
      icon: Accessibility,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      description: 'Dedicated welfare initiatives including specialized telecom accessibility, vocational equipment, and award recognition for persons with disabilities.',
      metric: '1,200+ Beneficiaries',
      highlight: 'Equal Digital Access'
    },
    {
      id: 'kashmir-solidarity',
      title: 'Kashmir Solidarity & Community Uplift',
      badge: 'National Solidarity',
      icon: Flag,
      color: 'text-[#006633] bg-emerald-50 border-emerald-200',
      description: 'Active observation of Kashmir Solidarity Day on 5th February, disaster relief communications, and preservation of local cultural heritage in mountain valleys.',
      metric: 'Regional Solidarity',
      highlight: '5th Feb Community Drives'
    }
  ];

  return (
    <section id="csr-welfare" className="py-16 md:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#006633] border border-emerald-200 shadow-xs">
                <HeartHandshake className="w-4 h-4 text-[#006633]" />
                CSR & PUBLIC WELFARE • ADD VALUE TO LIFE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00381c] tracking-tight">
              SCO Public Welfare Activities & CSR
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Beyond telecommunications, Special Communications Organization (SCO) is deeply invested in the social, educational, and cultural uplift of Azad Jammu & Kashmir and Gilgit-Baltistan.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl shadow-xs shrink-0">
            <Users className="w-5 h-5 text-[#006633]" />
            <div className="text-xs">
              <span className="text-slate-500 block font-medium">Community Impact</span>
              <strong className="text-sm font-black text-[#006633]">Over 500,000 Lives Touched</strong>
            </div>
          </div>
        </div>

        {/* Flagship CSR Banner Showcase */}
        <div className="mb-14 rounded-2xl overflow-hidden border-2 border-emerald-600/30 shadow-2xl relative bg-slate-900 group">
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 md:aspect-16/9 max-h-[640px] overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src="/assets/aistudio/CSRBanner.64b7820df97f8e995ae1_a4d96dbf.png"
              alt="SCO Public Welfare Activities 2023 - Corporate Social Responsibility"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Hover Overlay with Lightbox trigger */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="pointer-events-auto px-5 py-2.5 rounded-full bg-white/95 text-slate-900 font-bold text-xs shadow-xl flex items-center gap-2 hover:bg-white hover:scale-105 transition-all cursor-pointer"
              >
                <Maximize2 className="w-4 h-4 text-[#006633]" />
                <span>View High-Resolution Banner</span>
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="text-white">
                <span className="text-[10px] sm:text-xs font-black uppercase text-amber-300 tracking-wider block">
                  ★ SPECIAL COMMUNICATIONS ORGANIZATION • ADD VALUE TO LIFE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  SCO Public Welfare Activities: Empowering Mountain Youth, Women & Persons with Disabilities
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Poster</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
              Core Welfare Initiatives
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#00381c]">
              How SCO Serves the People of AJ&K & Gilgit-Baltistan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CSR_INITIATIVES.map((initiative, idx) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={initiative.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs ${initiative.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {initiative.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#006633] transition-colors leading-snug mb-2">
                      {initiative.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#006633]">{initiative.metric}</span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {initiative.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats Ticker */}
        <div className="bg-gradient-to-r from-[#00381c] via-[#004d26] to-[#002b16] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-emerald-600/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/60">
            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">15+</span>
              <span className="text-xs text-emerald-100 mt-1 block">Free Wi-Fi Buses</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">500+</span>
              <span className="text-xs text-emerald-100 mt-1 block">Female Footballers</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">25+</span>
              <span className="text-xs text-emerald-100 mt-1 block">Championships Sponsored</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">100%</span>
              <span className="text-xs text-emerald-100 mt-1 block">Non-Profit Reinvestment</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {showLightbox && (
        <div 
          onClick={() => setShowLightbox(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
          >
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-sm sm:text-base">
                  SCO Public Welfare Activities 2023 — Add Value to Life
                </h4>
              </div>
              <button
                onClick={() => setShowLightbox(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60">
              <img
                src="/assets/aistudio/CSRBanner.64b7820df97f8e995ae1_a4d96dbf.png"
                alt="SCO Public Welfare Activities 2023 - Full Resolution"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="p-3 bg-slate-900 border-t border-slate-800 text-center text-xs text-slate-400">
              Special Communications Organization (SCO) Corporate Social Responsibility (CSR)
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

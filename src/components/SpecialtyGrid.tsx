/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  Bone, 
  Stethoscope, 
  Cpu, 
  Clock, 
  ArrowRight, 
  Check, 
  Video, 
  MapPin,
  Filter
} from 'lucide-react';
import { CLINICAL_PATHWAYS } from '../data/mockData.ts';
import { SpecialtyPathway } from '../types/clinical.ts';

interface SpecialtyGridProps {
  onSelectPathway: (pathwayId: string) => void;
  onBookPathway: (pathwayId: string) => void;
}

export const SpecialtyGrid: React.FC<SpecialtyGridProps> = ({
  onSelectPathway,
  onBookPathway
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'urgent' | 'specialty' | 'diagnostics'>('all');

  const filteredPathways = activeCategory === 'all' 
    ? CLINICAL_PATHWAYS 
    : CLINICAL_PATHWAYS.filter(p => p.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-[#0284C7]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#E05A2B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Bone': return <Bone className="w-5 h-5 text-indigo-600" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-600" />;
      default: return <Stethoscope className="w-5 h-5 text-[#0284C7]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="badge-eyebrow mb-2">
              CLINICAL SPECIALTY PATHWAYS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-[#0D2137]">
              Direct Specialist Access by Clinical Discipline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Every pathway connects you directly with credentialed medical specialists. Upfront transparent flat fees include the clinical encounter, comprehensive treatment plan, and direct prescription routing.
            </p>
          </div>

          {/* Category Filter Pills (Squared-off, no pill style!) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E2E8F0] rounded">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'urgent', label: 'Urgent Care' },
              { id: 'specialty', label: 'Medical Specialties' },
              { id: 'diagnostics', label: 'Imaging & Labs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-[#0D2137] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0D2137] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pathway Cards Grid (12-column responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPathways.map((pathway) => (
            <div
              key={pathway.id}
              className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card flex flex-col justify-between hover:border-slate-300 transition-all hover:translate-y-[-2px]"
            >
              <div>
                {/* Header: Icon & Eyebrow & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-[#F4F8FA] border border-[#E2E8F0] flex items-center justify-center">
                    {getIcon(pathway.icon)}
                  </div>
                  {pathway.badge && (
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded uppercase tracking-wider">
                      {pathway.badge}
                    </span>
                  )}
                </div>

                {/* Eyebrow tag */}
                <span className="text-[11px] font-bold tracking-[0.08em] text-[#0284C7] uppercase block mb-1">
                  {pathway.eyebrow}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0D2137] leading-tight mb-2">
                  {pathway.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {pathway.description}
                </p>

                {/* Common Conditions Chips */}
                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Common Conditions Treated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pathway.conditions.map((c, i) => (
                      <span
                        key={i}
                        className="text-[12px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#E2E8F0] mt-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Transparent Flat Fee</span>
                    <span className="text-xl font-bold text-[#0D2137]">
                      ${pathway.flatFee}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 block flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      Turnaround
                    </span>
                    <span className="text-xs font-semibold text-teal-700">
                      {pathway.turnaroundTime}
                    </span>
                  </div>
                </div>

                {/* Card CTA: Primary Terracotta action or Secondary */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectPathway(pathway.id)}
                    className="h-10 px-3 text-xs font-semibold text-[#0D2137] border border-[#0D2137] rounded hover:bg-slate-50 transition-colors flex items-center justify-center"
                  >
                    View Doctors
                  </button>
                  <button
                    onClick={() => onBookPathway(pathway.id)}
                    className="h-10 px-3 text-xs font-semibold text-white bg-[#E05A2B] hover:bg-[#C84B1F] rounded transition-colors flex items-center justify-center gap-1 shadow-xs active:translate-y-0.5"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Guarantee Callout */}
        <div className="mt-12 bg-white rounded border border-[#E2E8F0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-clinical-card">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#0D2137]">
              Need a Specialist Discipline Not Listed Here?
            </h4>
            <p className="text-sm text-slate-600">
              Our direct clinical coordinators route referrals to over 40+ sub-specialties across our academic medical network within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8004122273"
              className="btn-secondary-clinical text-xs"
            >
              Call Clinical Desk: (800) 412-CARE
            </a>
            <button
              onClick={() => onBookPathway('urgent-care')}
              className="btn-cta text-xs"
            >
              Request Specialty Triage
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

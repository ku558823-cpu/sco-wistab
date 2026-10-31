/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  FileText,
  Search
} from 'lucide-react';
import { CLINICAL_PATHWAYS } from '../data/mockData.ts';

interface HeroSectionProps {
  onStartBooking: (specialistId?: string, specialtyId?: string) => void;
  onExplorePricing: () => void;
  onSelectPathway: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartBooking,
  onExplorePricing,
  onSelectPathway
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('cardiology');
  const [selectedFormat, setSelectedFormat] = useState<'virtual' | 'in-person'>('virtual');
  const [selectedUrgency, setSelectedUrgency] = useState('today');

  const handleFastTriageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartBooking(undefined, selectedSpecialty);
  };

  return (
    <section className="bg-[#0D2137] text-white relative overflow-hidden border-b border-[#000917]">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clinical Authority Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clinical Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-sky-500/10 border border-sky-400/20 text-sky-300">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em]">
                Direct-Access Specialist Care • No Referral Required
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Immediate Medical Access to{' '}
              <span className="text-sky-300">Board-Certified Specialists</span>.
              Zero Bureaucracy.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Bypass weeks of gatekeeper delays. Consult directly with top cardiologists, dermatologists, orthopedic surgeons, and urgent clinicians via high-definition video or regional physical medical centers.
            </p>

            {/* Three Institutional Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Same-Day MD Slots</h4>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Under 15 min virtual connect</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-white/5 border border-white/10">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Zero Surprise Bills</h4>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Fixed upfront cash & insurance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Direct Prescriptions</h4>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Sent instantly to pharmacy</p>
                </div>
              </div>
            </div>

            {/* Fast Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onStartBooking()}
                className="btn-cta text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Direct Consultation
              </button>
              <button
                onClick={onExplorePricing}
                className="btn-secondary-white text-sm"
              >
                <FileText className="w-4 h-4 mr-2 text-slate-300" />
                View Transparent Fee Schedule
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Triage & Fast Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#0D2137] rounded-lg p-6 sm:p-7 shadow-clinical-float border border-[#E2E8F0]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0284C7] block">
                    Instant Clinical Triage
                  </span>
                  <h3 className="text-lg font-bold text-[#0D2137] mt-0.5">
                    Match with a Specialist
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                  Live Clinicians Online
                </div>
              </div>

              <form onSubmit={handleFastTriageSubmit} className="space-y-4">
                {/* Specialty Select */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1.5">
                    Select Clinical Specialty / Need
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full input-clinical font-medium"
                  >
                    {CLINICAL_PATHWAYS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.turnaroundTime}) — ${p.flatFee}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Care Format Toggle */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1.5">
                    Preferred Consultation Format
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('virtual')}
                      className={`h-11 px-3 text-xs font-semibold rounded border flex items-center justify-center gap-2 transition-colors ${
                        selectedFormat === 'virtual'
                          ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      HD Video Visit
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('in-person')}
                      className={`h-11 px-3 text-xs font-semibold rounded border flex items-center justify-center gap-2 transition-colors ${
                        selectedFormat === 'in-person'
                          ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Regional Clinic
                    </button>
                  </div>
                </div>

                {/* Urgency Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1.5">
                    Clinical Urgency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'urgent', label: 'Under 1 hr', sub: 'Urgent Care' },
                      { id: 'today', label: 'Today', sub: 'Priority' },
                      { id: 'week', label: 'This Week', sub: 'Flexible' }
                    ].map((urg) => (
                      <button
                        key={urg.id}
                        type="button"
                        onClick={() => setSelectedUrgency(urg.id)}
                        className={`p-2 rounded text-center border text-xs transition-colors ${
                          selectedUrgency === urg.id
                            ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-semibold">{urg.label}</div>
                        <div className="text-[10px] text-slate-500">{urg.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transparent Price Preview */}
                <div className="p-3 rounded bg-[#F4F8FA] border border-[#E2E8F0] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500">All-Inclusive Transparent Fee:</span>
                    <div className="font-bold text-[#0D2137] text-sm">
                      ${CLINICAL_PATHWAYS.find(p => p.id === selectedSpecialty)?.flatFee || 145} Flat Cash Rate
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
                    Zero Surcharges
                  </span>
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  className="w-full btn-cta justify-center text-sm font-semibold shadow-sm"
                >
                  <span>Review Available Doctors & Times</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  HIPAA & SOC-2 Verified
                </span>
                <span>No insurance required</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Clinical Accreditation Strip */}
      <div className="border-t border-white/10 bg-[#000917]/70 py-4 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
              Clinical Direct Standard:
            </span>
            <span>U.S. Licensed MDs & DOs Only</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="font-bold text-white">4.96/5</span> Patient Satisfaction
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="font-bold text-white">12 min</span> Avg Time to Physician
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="font-bold text-white">100%</span> Pricing Transparency
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

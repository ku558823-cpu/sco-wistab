/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Award, 
  Building, 
  HeartHandshake 
} from 'lucide-react';
import { PATIENT_REVIEWS } from '../data/mockData.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-eyebrow mb-2">
            CLINICAL EXCELLENCE & PATIENT OUTCOMES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2137]">
            Verified Direct Care Patient Reviews
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Independent clinical reviews authenticated post-encounter. We measure physician listening time, diagnostic clarity, and fulfillment of transparent billing commitments.
          </p>
        </div>

        {/* Quality Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded border border-[#E2E8F0] shadow-clinical-card">
            <span className="text-3xl font-black text-[#0D2137] block">4.96</span>
            <div className="flex items-center text-amber-500 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium">Overall Clinical Satisfaction</span>
          </div>

          <div className="bg-white p-5 rounded border border-[#E2E8F0] shadow-clinical-card">
            <span className="text-3xl font-black text-[#0284C7] block">&lt; 12 min</span>
            <div className="text-xs font-bold text-teal-700 mt-1">Direct MD Connection</div>
            <span className="text-xs text-slate-500 font-medium">Zero gatekeeper waitlists</span>
          </div>

          <div className="bg-white p-5 rounded border border-[#E2E8F0] shadow-clinical-card">
            <span className="text-3xl font-black text-emerald-700 block">100%</span>
            <div className="text-xs font-bold text-emerald-800 mt-1">Price Transparency</div>
            <span className="text-xs text-slate-500 font-medium">0 Surprise hospital bills</span>
          </div>

          <div className="bg-white p-5 rounded border border-[#E2E8F0] shadow-clinical-card">
            <span className="text-3xl font-black text-[#0D2137] block">98.4%</span>
            <div className="text-xs font-bold text-sky-800 mt-1">First-Visit Resolution</div>
            <span className="text-xs text-slate-500 font-medium">Immediate diagnostic plan</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#F4F8FA] border border-slate-200 flex items-center justify-center font-bold text-xs text-[#0D2137]">
                      {rev.patientInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-[#0D2137]">Verified Patient</span>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200">
                          <CheckCircle2 className="w-3 h-3 text-teal-600" />
                          Direct Encounter
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date} • {rev.visitType}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-[#0D2137]">
                  Treated by: {rev.doctorName} ({rev.specialty})
                </span>
                <span className="flex items-center gap-1 text-teal-700 font-medium">
                  <Clock className="w-3 h-3" />
                  {rev.waitTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

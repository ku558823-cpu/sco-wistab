/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Lock, 
  Award, 
  Phone, 
  MapPin, 
  Mail, 
  AlertCircle 
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#000917] text-white border-t border-white/10 pt-16 pb-24 sm:pb-16 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0D2137] border border-white/20 flex items-center justify-center text-teal-400">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                CLINICAL<span className="text-[#0284C7] font-black ml-0.5">DIRECT</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              An authoritative direct-care medical network connecting patients directly with board-certified attending specialists. Transparent cash & insurance pricing, zero hospital facility fees, and decisive clinical stewardship.
            </p>

            <div className="pt-2 flex flex-col gap-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Direct Clinical Helpline: <strong>(800) 412-CARE</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>clinicaldesk@clinicaldirect.org</span>
              </div>
            </div>
          </div>

          {/* Clinical Disciplines */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">
              Care Disciplines
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectTab('pathways')} className="hover:text-white transition-colors">
                  Urgent Clinical Triage
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pathways')} className="hover:text-white transition-colors">
                  Cardiology & Vascular
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pathways')} className="hover:text-white transition-colors">
                  Dermatology & Skin
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pathways')} className="hover:text-white transition-colors">
                  Orthopedics & Sports Med
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pathways')} className="hover:text-white transition-colors">
                  Endocrinology & Diabetes
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-white transition-colors">
                  3T MRI & Direct Scans
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing & Compliance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-teal-400">
              Patient Transparency
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-white transition-colors">
                  Transparent Fee Schedule
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-white transition-colors">
                  No Surprises Act Pledge
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-white transition-colors">
                  Good Faith Estimates
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('portal')} className="hover:text-white transition-colors">
                  Superbills & HSA / FSA Receipts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('locations')} className="hover:text-white transition-colors">
                  Regional Ambulatory Clinics
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Compliance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-slate-300">
              Accreditations
            </h4>
            <div className="space-y-2 text-slate-400 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>HIPAA Compliant & Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <Lock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>SOC2 Type II Security Standard</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>CLIA & ACR Certified Labs</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-cta text-xs w-full justify-center"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Medical Emergency & Legal Disclaimers */}
        <div className="pt-8 space-y-4 text-[11px] text-slate-400 leading-relaxed">
          <div className="p-3 rounded bg-white/5 border border-white/10 flex items-start gap-2.5 text-slate-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>EMERGENCY MEDICAL NOTICE:</strong> Clinical Direct provides non-emergent outpatient medical consultations and scheduled diagnostic evaluations. If you are experiencing chest pain, stroke symptoms, acute respiratory distress, or severe hemorrhage, call 911 or visit the nearest hospital emergency room immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <p>
              © {new Date().getFullYear()} Clinical Direct Healthcare Medical Group, P.C. All rights reserved. Dr. Adrian Vance, MD, FACC (Medical Director).
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="hover:text-white cursor-pointer">Privacy Practices (HIPAA)</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Telehealth Terms</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Nondiscrimination</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

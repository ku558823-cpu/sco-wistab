/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  ExternalLink,
  Lock,
  FileText
} from 'lucide-react';

interface ScoFooterProps {
  onNavigateTab: (tabId: string) => void;
}

export const ScoFooter: React.FC<ScoFooterProps> = ({
  onNavigateTab
}) => {
  return (
    <footer className="bg-[#002613] text-white border-t border-emerald-950 pt-16 pb-12 text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Identity & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="rounded-lg bg-white p-2 border border-emerald-500/40 inline-flex items-center justify-center shadow-xs shrink-0 max-w-[160px]">
                <img
                  src="/assets/aistudio/download_2127cb7c.png"
                  alt="Special Communications Organization (SCO) Official Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-white block">
                  SPECIAL COMMUNICATIONS ORGANIZATION
                </span>
                <span className="text-[11px] text-emerald-300 block">
                  Ministry of Information Technology &amp; Telecommunication
                </span>
              </div>
            </div>

            <p className="text-emerald-200/80 leading-relaxed text-xs max-w-sm">
              Established in 1976, SCO is a public sector telecommunications organization under the Ministry of IT & Telecom, responsible for operating, maintaining, and innovating telecom and digital infrastructure across Azad Jammu & Kashmir and Gilgit-Baltistan.
            </p>

            <div className="pt-2 space-y-1.5 text-emerald-100">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>SCOM Helpline: <strong>Dial 355</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Universal Access Number (UAN): <strong>111-726-726</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>support@sco.gov.pk | info@sco.gov.pk</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-amber-400">
              Telecom Services
            </h4>
            <ul className="space-y-2 text-emerald-200/80">
              <li>
                <button onClick={() => onNavigateTab('scom')} className="hover:text-white transition-colors">
                  SCOM 4G Prepaid & Postpaid
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('scom')} className="hover:text-white transition-colors">
                  SCOM Super Cards & Data
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('sfiber')} className="hover:text-white transition-colors">
                  SFiber Optical FTTH Broadband
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('spaisa')} className="hover:text-white transition-colors">
                  S-Paisa Branchless Banking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('scom')} className="hover:text-white transition-colors">
                  Digital eSIM Online Booking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('stps')} className="hover:text-white transition-colors">
                  Software Technology Parks (STP)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Portals */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">
              Online Portals & Tools
            </h4>
            <ul className="space-y-2 text-emerald-200/80">
              <li>
                <button onClick={() => onNavigateTab('tools')} className="hover:text-white transition-colors">
                  Online Bill Inquiry & Duplicate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tools')} className="hover:text-white transition-colors">
                  Quick Mobile Recharge & Load
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tools')} className="hover:text-white transition-colors">
                  Fiber Line Feasibility Tool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tools')} className="hover:text-white transition-colors">
                  Apply for New Connection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tools')} className="hover:text-white transition-colors">
                  Complaint Management System (CMS)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('centers')} className="hover:text-white transition-colors">
                  CFC Franchise Locator
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Directorates */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-emerald-300">
              Regional Directorates
            </h4>
            <div className="space-y-2.5 text-emerald-200/80 text-[11px]">
              <div>
                <strong className="text-white block font-semibold">Headquarters SCO:</strong>
                <span>Qasim Market, Rawalpindi Cantt, Pakistan</span>
              </div>
              <div>
                <strong className="text-white block font-semibold">Directorate AJ&K:</strong>
                <span>Bank Road, Near Old Secretariat, Muzaffarabad</span>
              </div>
              <div>
                <strong className="text-white block font-semibold">Directorate GB:</strong>
                <span>Airport Road, Near DC Complex, Gilgit</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-emerald-200 text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                PTA / Federal Licensed Operator
              </span>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-300/70 text-[11px]">
          <p>
            © {new Date().getFullYear()} Special Communications Organization (SCO), Ministry of IT & Telecom, Government of Pakistan. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">PTA Regulations</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Biometric SIM Verification</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy & Citizen Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

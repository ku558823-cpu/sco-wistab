/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Check, 
  Building2, 
  Navigation, 
  ShieldCheck, 
  Activity,
  Calendar
} from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/mockData.ts';

interface ClinicLocationsProps {
  onBookAtClinic: (clinicId: string) => void;
}

export const ClinicLocations: React.FC<ClinicLocationsProps> = ({
  onBookAtClinic
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-eyebrow mb-2">
            PHYSICAL CLINICAL FACILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2137]">
            Regional Specialty Pavilions & Live Wait Times
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Need in-person diagnostic imaging, physical exams, or minor surgical procedures? Visit our modern ambulatory clinics with walk-in urgent care triage and live wait trackers.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#F8F9FF] rounded border border-[#E2E8F0] p-6 shadow-clinical-card flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Branch type badge & live wait */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#0284C7] bg-sky-50 border border-sky-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    {loc.branchType}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                    <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                    <span>Wait: {loc.liveWaitMinutes} min</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[#0D2137] leading-snug mb-3">
                  {loc.name}
                </h3>

                {/* Address & Contact info */}
                <div className="space-y-2 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[#0D2137] font-semibold hover:text-[#0284C7]">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                {/* On-site clinical amenities */}
                <div className="pt-3 border-t border-slate-200 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    On-Site Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {loc.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + ' ' + loc.city + ' ' + loc.state)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 px-2 text-xs font-semibold text-[#0D2137] border border-[#CBD5E1] bg-white rounded flex items-center justify-center gap-1 hover:bg-slate-50 transition-colors"
                >
                  <Navigation className="w-3 h-3 text-slate-500" />
                  <span>Directions</span>
                </a>

                <button
                  onClick={() => onBookAtClinic(loc.id)}
                  className="h-10 px-2 text-xs font-semibold text-white bg-[#E05A2B] hover:bg-[#C84B1F] rounded flex items-center justify-center gap-1 shadow-xs transition-colors active:translate-y-0.5"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Check In / Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Diagnostics Notice */}
        <div className="mt-12 p-6 bg-[#F4F8FA] border border-[#E2E8F0] rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-[#0D2137] text-white flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0D2137]">
                Walk-In Phlebotomy & Stat Laboratory Bloodwork
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                All 3 regional centers accept walk-ins with physician lab orders from 7:30 AM to 5:00 PM weekdays. No appointment required for routine blood panels.
              </p>
            </div>
          </div>
          <a
            href="tel:8004122273"
            className="btn-secondary-clinical text-xs shrink-0"
          >
            Call Facility Coordination Desk
          </a>
        </div>

      </div>
    </section>
  );
};

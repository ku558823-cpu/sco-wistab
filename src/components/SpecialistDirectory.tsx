/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Star, 
  Video, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Search, 
  Check, 
  ArrowRight,
  Award
} from 'lucide-react';
import { SPECIALISTS_DIRECTORY } from '../data/mockData.ts';
import { Specialist } from '../types/clinical.ts';

interface SpecialistDirectoryProps {
  onBookDoctor: (specialistId: string) => void;
  preselectedSpecialty?: string | null;
}

export const SpecialistDirectory: React.FC<SpecialistDirectoryProps> = ({
  onBookDoctor,
  preselectedSpecialty
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState<string>(preselectedSpecialty || 'all');
  const [filterFormat, setFilterFormat] = useState<'all' | 'virtual' | 'in-person'>('all');
  const [todayOnly, setTodayOnly] = useState(false);

  const specialtiesList = ['all', 'Cardiology', 'Dermatology', 'Orthopedics', 'Endocrinology', 'Urgent & Internal', 'Neurology'];

  const filteredSpecialists = SPECIALISTS_DIRECTORY.filter((doc) => {
    // Search
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.focusAreas.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

    // Specialty filter
    const matchesSpecialty = 
      filterSpecialty === 'all' || 
      doc.specialty.toLowerCase().includes(filterSpecialty.toLowerCase());

    // Format filter
    const matchesFormat = 
      filterFormat === 'all' || 
      doc.careFormats.includes(filterFormat);

    // Today availability
    const matchesToday = !todayOnly || doc.availableToday;

    return matchesSearch && matchesSpecialty && matchesFormat && matchesToday;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="badge-eyebrow mb-2">
            VERIFIED ATTENDING MEDICAL STAFF
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2137]">
            Direct Appointments with Renowned Clinical Faculty
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            All Clinical Direct physicians are active, board-certified medical doctors with extensive academic fellowship training. Zero physician extenders for specialist consultations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#F4F8FA] border border-[#E2E8F0] rounded p-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search physician or condition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 h-11 text-xs sm:text-sm bg-white rounded border border-[#CBD5E1] text-[#0D2137] focus:border-[#0284C7] outline-none"
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="w-full px-3 h-11 text-xs sm:text-sm bg-white rounded border border-[#CBD5E1] text-[#0D2137] focus:border-[#0284C7] outline-none font-medium"
              >
                {specialtiesList.map((s) => (
                  <option key={s} value={s}>
                    {s === 'all' ? 'All Specialties' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Format Filter */}
            <div>
              <select
                value={filterFormat}
                onChange={(e) => setFilterFormat(e.target.value as any)}
                className="w-full px-3 h-11 text-xs sm:text-sm bg-white rounded border border-[#CBD5E1] text-[#0D2137] focus:border-[#0284C7] outline-none font-medium"
              >
                <option value="all">Any Format (Virtual & Clinic)</option>
                <option value="virtual">HD Video Visit Only</option>
                <option value="in-person">In-Clinic Center Only</option>
              </select>
            </div>

            {/* Fast Toggle: Available Today */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#0D2137] select-none">
                <input
                  type="checkbox"
                  checked={todayOnly}
                  onChange={(e) => setTodayOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0284C7] border-slate-300 focus:ring-0"
                />
                <span>Show Same-Day Openings Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSpecialists.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Doctor Headshot & Key Info Row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={doc.photoUrl}
                      alt={doc.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded border border-[#E2E8F0]"
                      loading="lazy"
                    />
                    {doc.availableToday && (
                      <span className="absolute -bottom-2 -right-1 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
                        Today
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold tracking-[0.08em] text-[#0284C7] uppercase">
                        {doc.specialty}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        NPI: {doc.npiNumber}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0D2137] leading-snug mt-0.5">
                      {doc.name}, <span className="text-slate-600 text-sm font-semibold">{doc.credentials}</span>
                    </h3>

                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{doc.hospitalAffiliation}</span>
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-xs">
                      <div className="flex items-center text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current mr-1" />
                        <span>{doc.rating.toFixed(2)}</span>
                        <span className="text-slate-400 font-normal ml-1">({doc.reviewCount})</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-600">{doc.yearsExperience} yrs practice</span>
                    </div>
                  </div>
                </div>

                {/* Subspecialty & Training */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{doc.education}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {doc.bio}
                  </p>
                </div>

                {/* Clinical Focus Badges */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {doc.focusAreas.map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#F4F8FA] text-[#0D2137] px-2 py-0.5 rounded border border-slate-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Next slot & Booking CTA */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Next Available Opening</span>
                    <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {doc.nextSlot}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-slate-500 block">Transparent Direct Fee</span>
                    <span className="text-base font-bold text-[#0D2137]">
                      ${doc.consultationFee} <span className="text-xs font-normal text-slate-500">all-inclusive</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
                    <span className="flex items-center gap-1">
                      <Video className="w-3 h-3 text-sky-600" />
                      HD Video
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-600" />
                      In-Clinic
                    </span>
                  </div>

                  <button
                    onClick={() => onBookDoctor(doc.id)}
                    className="w-full h-10 px-4 text-xs font-semibold text-white bg-[#E05A2B] hover:bg-[#C84B1F] rounded transition-colors flex items-center justify-center gap-1 shadow-xs active:translate-y-0.5"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    <span>Select & Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSpecialists.length === 0 && (
          <div className="text-center py-12 bg-[#F4F8FA] rounded border border-[#E2E8F0]">
            <p className="text-slate-600 text-sm font-medium">No physicians matched your current filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterSpecialty('all');
                setFilterFormat('all');
                setTodayOnly(false);
              }}
              className="mt-3 text-xs font-semibold text-[#0284C7] underline cursor-pointer"
            >
              Reset all search filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

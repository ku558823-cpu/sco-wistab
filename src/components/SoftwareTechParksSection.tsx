/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Laptop, 
  Wifi, 
  Sun, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SOFTWARE_TECH_PARKS } from '../data/scoData.ts';
import { STPHub } from '../types/sco.ts';

export const SoftwareTechParksSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<STPHub>(SOFTWARE_TECH_PARKS[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [freelancerName, setFreelancerName] = useState('Danyal Baig');
  const [freelancerEmail, setFreelancerEmail] = useState('danyal.dev@gmail.com');
  const [deskType, setDeskType] = useState('Dedicated Freelancer Desk');

  const handleBookDesk = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="sco-badge bg-emerald-100 text-[#006633] mb-2">
            DIGITAL PAKISTAN & YOUTH EMPOWERMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
            SCO Software Technology Parks (STPs)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            In collaboration with Pakistan Software Export Board (PSEB) and the Ministry of IT, SCO operates state-of-the-art Software Technology Parks across Gilgit-Baltistan and Azad Kashmir, empowering youth, female developers, and remote freelancers with gigabit optical fiber and 24/7 power.
          </p>
        </div>

        {/* Hubs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SOFTWARE_TECH_PARKS.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => {
                  setSelectedHub(hub);
                  setBookingSuccess(false);
                }}
                className={`bg-white rounded-xl border p-5 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#006633] shadow-md ring-2 ring-[#006633]/20 bg-emerald-50/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">
                      {hub.region} • {hub.city}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {hub.availableSeats} Seats Open
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {hub.name}
                  </h3>

                  <div className="p-2.5 bg-slate-50 rounded border border-slate-100 text-xs text-[#006633] font-bold flex items-center gap-1.5 mb-3">
                    <Wifi className="w-4 h-4 text-emerald-600" />
                    <span>{hub.speed}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    {hub.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Total Desks: {hub.totalSeats}</span>
                  <span className="font-bold text-[#006633] flex items-center gap-1">
                    <span>Select Hub</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Hub Interactive Booking Console */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold text-[#006633] uppercase tracking-wider">
                  Selected Co-Working Location
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedHub.name}
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 py-1">
                <div className="w-full sm:w-44 h-28 rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                    alt="SCO Software Technology Park Workstation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Experience high-performance computing, video conferencing with international software clients, high-availability solar power, and collaborative workspaces right in {selectedHub.city}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <strong className="text-emerald-950 block">High-Speed Connectivity:</strong>
                  <span className="text-emerald-800">{selectedHub.speed}</span>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <strong className="text-amber-950 block">Power Resilience:</strong>
                  <span className="text-amber-800">24/7 Solar Array & Heavy Genset Backup</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">Available Amenities:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedHub.features.map((feat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#006633]" />
                <span>Reserve a Freelancer Workstation</span>
              </h4>

              {bookingSuccess ? (
                <div className="p-4 bg-emerald-100 border border-emerald-300 rounded text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                  <h5 className="font-bold text-emerald-950 text-sm">Seat Reserved Successfully!</h5>
                  <p className="text-xs text-emerald-800">
                    Welcome to {selectedHub.name}. Confirmation sent to {freelancerEmail}. Please present your CNIC at the reception.
                  </p>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="text-xs text-[#006633] underline font-bold"
                  >
                    Reserve Another Desk
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookDesk} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={freelancerName}
                      onChange={(e) => setFreelancerName(e.target.value)}
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={freelancerEmail}
                      onChange={(e) => setFreelancerEmail(e.target.value)}
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Desk Category
                    </label>
                    <select
                      value={deskType}
                      onChange={(e) => setDeskType(e.target.value)}
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                    >
                      <option value="Dedicated Freelancer Desk">Dedicated Freelancer Desk (Rs. 6,000/mo)</option>
                      <option value="Hot Desk Flex">Hot Desk Flex (Rs. 3,500/mo)</option>
                      <option value="Startup Private Cabin">Startup Private Cabin (4-6 persons)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-sco-green text-xs font-bold py-2.5 shadow-sm"
                  >
                    Confirm Co-Working Reservation
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

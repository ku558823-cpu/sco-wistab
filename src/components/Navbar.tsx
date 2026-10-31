/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  User, 
  ShieldCheck, 
  Menu, 
  X, 
  Stethoscope,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: (specialistId?: string, specialtyId?: string) => void;
  activeAppointmentsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
  activeAppointmentsCount = 1
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'pathways', label: 'Care Pathways' },
    { id: 'specialists', label: 'Specialists' },
    { id: 'pricing', label: 'Transparent Pricing' },
    { id: 'locations', label: 'Clinics & Wait Times' },
    { id: 'portal', label: 'Patient Portal', badge: activeAppointmentsCount > 0 ? `${activeAppointmentsCount}` : undefined },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0]">
      {/* Top Clinical & Emergency Bar */}
      <div className="bg-[#0D2137] text-white text-[12px] font-medium py-1.5 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">Direct Clinical Care Access:</span>
            <span className="font-semibold text-white">Same-Day MD Consultations & Diagnostic Orders</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-teal-300 font-medium">Zero Hospital Facility Surcharges</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-[12px]">
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              Emergency: Call 911
            </span>
            <span className="text-white/20">|</span>
            <a 
              href="tel:8004122273" 
              className="flex items-center gap-1.5 text-white hover:text-sky-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              (800) 412-CARE
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        {/* Logo / Clinical Identity */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded bg-[#0D2137] flex items-center justify-center text-white shadow-sm border border-[#0D2137]">
            <div className="relative">
              <Stethoscope className="w-5 h-5 text-teal-400" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-sm bg-[#E05A2B] border border-white"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-[#0D2137] leading-none">
                CLINICAL<span className="text-[#0284C7] font-black ml-0.5">DIRECT</span>
              </span>
            </div>
            <p className="text-[10px] tracking-[0.08em] font-semibold text-[#64748B] uppercase leading-tight mt-0.5">
              Authoritative Medical Care
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
              currentTab === 'home'
                ? 'text-[#0D2137] bg-slate-100'
                : 'text-[#64748B] hover:text-[#0D2137] hover:bg-slate-50'
            }`}
          >
            Overview
          </button>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-semibold rounded flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[#0D2137] bg-slate-100'
                    : 'text-[#64748B] hover:text-[#0D2137] hover:bg-slate-50'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[10px] font-bold rounded bg-teal-600 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onSelectTab('portal')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0D2137] hover:text-[#0284C7] px-3 py-2 rounded border border-[#E2E8F0] hover:border-slate-300 transition-colors bg-white"
            title="Access Patient Records & Clinical Visit Notes"
          >
            <User className="w-3.5 h-3.5 text-slate-500" />
            <span>Patient Portal</span>
          </button>

          {/* Primary Terracotta CTA matching design spec: height 48px, 4px radius, weight 600 */}
          <button
            onClick={() => onOpenBooking()}
            className="btn-cta text-sm shadow-sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Direct Visit
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#E05A2B] text-white px-3 py-2 rounded text-xs font-semibold active:translate-y-0.5"
          >
            Book Visit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-[#0D2137] border border-[#CBD5E1] bg-white hover:bg-slate-50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 space-y-2 shadow-clinical-float">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded flex items-center justify-between ${
              currentTab === 'home' ? 'bg-slate-100 text-[#0D2137]' : 'text-slate-600'
            }`}
          >
            <span>Overview & Direct Care Hub</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded flex items-center justify-between ${
                currentTab === item.id ? 'bg-slate-100 text-[#0D2137]' : 'text-slate-600'
              }`}
            >
              <span className="flex items-center gap-2">
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] rounded bg-teal-600 text-white font-bold">
                    {item.badge}
                  </span>
                )}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('portal')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#0D2137] border border-[#CBD5E1] rounded"
            >
              <User className="w-4 h-4" />
              Open Patient Portal & Records
            </button>
            <a
              href="tel:8004122273"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Call Clinical Helpline (800) 412-CARE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

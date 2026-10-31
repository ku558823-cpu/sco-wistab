/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Wifi, 
  Smartphone, 
  CreditCard, 
  Wrench, 
  MapPin, 
  Laptop, 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Receipt, 
  ShieldCheck,
  Zap,
  Globe,
  Flame,
  HeartHandshake
} from 'lucide-react';

interface ScoHeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuickRecharge: () => void;
  onOpenBillInquiry: () => void;
}

export const ScoHeader: React.FC<ScoHeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenQuickRecharge,
  onOpenBillInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Official Government of Pakistan Strip */}
      <div className="bg-[#004d26] text-white text-[11px] sm:text-[12px] py-1.5 px-4 sm:px-6 md:px-8 border-b border-emerald-900/40">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-800 text-[10px] font-bold text-emerald-200 border border-emerald-400/40">
              🇵🇰
            </span>
            <span className="text-emerald-100 font-medium">Government of Pakistan</span>
            <span className="text-emerald-400/60">•</span>
            <span className="text-emerald-200">Ministry of Information Technology & Telecommunication</span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100 text-[11px]">
            <a 
              href="tel:355" 
              className="flex items-center gap-1 hover:text-white font-semibold transition-colors"
              title="SCOM Mobile Helpline"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>SCOM Helpline: <strong>355</strong></span>
            </a>
            <span className="text-emerald-500">|</span>
            <a 
              href="tel:051111726726" 
              className="flex items-center gap-1 hover:text-white font-semibold transition-colors"
              title="Universal SCO Helpline"
            >
              <Phone className="w-3 h-3 text-sky-300" />
              <span>UAN: <strong>111-726-726</strong></span>
            </a>
            <span className="hidden md:inline text-emerald-500">|</span>
            <span className="hidden md:inline text-amber-300 font-medium">
              Connecting AJ&K & Gilgit-Baltistan
            </span>
          </div>

        </div>
      </div>

      {/* Main Branding & Navigation Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        
        {/* SCO Official Logo & Identity */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 cursor-pointer group py-2"
        >
          <img
            src="/assets/aistudio/download_2127cb7c.png"
            alt="Special Communications Organization (SCO) Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />

          <div className="hidden sm:block border-l border-slate-200 pl-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006633] block leading-tight">
              Special Communications Organization
            </span>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
              AJ&amp;K &amp; Gilgit-Baltistan Telecom Highway
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 text-xs font-bold rounded transition-colors ${
              currentTab === 'home'
                ? 'text-[#006633] bg-emerald-50'
                : 'text-slate-600 hover:text-[#006633] hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              if (currentTab !== 'home') {
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('trending-packages')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('trending-packages')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors text-slate-600 hover:text-[#EA580C] hover:bg-orange-50 cursor-pointer"
          >
            <Flame className="w-3.5 h-3.5 text-[#EA580C] fill-[#EA580C]" />
            <span>Trending</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-orange-100 text-[#EA580C] border border-orange-200">HOT</span>
          </button>

          <button
            onClick={() => handleNavClick('scom')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'scom'
                ? 'text-[#EA580C] bg-orange-50'
                : 'text-slate-600 hover:text-[#EA580C] hover:bg-slate-50'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>SCOM 4G</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#EA580C] text-white">4G LTE</span>
          </button>

          <button
            onClick={() => handleNavClick('sfiber')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'sfiber'
                ? 'text-[#0284C7] bg-sky-50'
                : 'text-slate-600 hover:text-[#0284C7] hover:bg-slate-50'
            }`}
          >
            <Wifi className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>SFiber (FTTH)</span>
          </button>

          <button
            onClick={() => handleNavClick('spaisa')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'spaisa'
                ? 'text-amber-800 bg-amber-50'
                : 'text-slate-600 hover:text-amber-700 hover:bg-slate-50'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-amber-600" />
            <span>S-Paisa</span>
          </button>

          <button
            onClick={() => handleNavClick('tools')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'tools'
                ? 'text-[#006633] bg-emerald-50'
                : 'text-slate-600 hover:text-[#006633] hover:bg-slate-50'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-[#006633]" />
            <span>Online Portals & Tools</span>
          </button>

          <button
            onClick={() => handleNavClick('stps')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'stps'
                ? 'text-[#006633] bg-emerald-50'
                : 'text-slate-600 hover:text-[#006633] hover:bg-slate-50'
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-slate-500" />
            <span>Tech Parks (STP)</span>
          </button>

          <button
            onClick={() => handleNavClick('centers')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors ${
              currentTab === 'centers'
                ? 'text-[#006633] bg-emerald-50'
                : 'text-slate-600 hover:text-[#006633] hover:bg-slate-50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Franchises & CFCs</span>
          </button>

          <button
            onClick={() => handleNavClick('csr')}
            className={`px-3 py-2 text-xs font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
              currentTab === 'csr'
                ? 'text-[#006633] bg-emerald-50'
                : 'text-slate-600 hover:text-[#006633] hover:bg-slate-50'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>CSR & Welfare</span>
          </button>
        </nav>

        {/* Right CTA Action Group */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenBillInquiry}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#006633] px-3 py-2 rounded border border-slate-200 hover:border-emerald-300 transition-colors bg-white shadow-xs"
          >
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span>Duplicate Bill</span>
          </button>

          <button
            onClick={onOpenQuickRecharge}
            className="bg-[#EA580C] hover:bg-[#D94E03] text-white px-3 py-1.5 rounded-md shadow-sm border border-orange-600 transition-all flex items-center gap-1.5 font-bold cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-white text-white shrink-0" />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-extrabold text-orange-100 uppercase tracking-wide">Quick</span>
              <span className="text-xs font-black text-white">Recharge / Load</span>
            </div>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenQuickRecharge}
            className="bg-[#EA580C] text-white px-2.5 py-1.5 rounded text-xs font-bold"
          >
            Recharge
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          {[
            { id: 'home', label: 'Home Overview' },
            { id: 'trending', label: '🔥 Trending Packages (Top Offers)' },
            { id: 'scom', label: 'SCOM 4G (Cellular Packages)' },
            { id: 'sfiber', label: 'SFiber (High-Speed Fiber Broadband)' },
            { id: 'spaisa', label: 'S-Paisa (Digital Banking & Bill Pay)' },
            { id: 'tools', label: 'All SCO Tools (Bill, Recharge, Feasibility, Complaints)' },
            { id: 'stps', label: 'Software Technology Parks (STPs)' },
            { id: 'centers', label: 'Customer Facilitation Centers (CFCs)' },
            { id: 'csr', label: '🤝 CSR & Public Welfare Activities' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'trending') {
                  if (currentTab !== 'home') {
                    handleNavClick('home');
                  }
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('trending-packages')?.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                } else {
                  handleNavClick(item.id);
                }
              }}
              className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded flex items-center justify-between ${
                currentTab === item.id
                  ? 'bg-emerald-50 text-[#006633] border-l-4 border-[#006633]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBillInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 rounded flex items-center justify-center gap-2"
            >
              <Receipt className="w-4 h-4 text-emerald-700" />
              Check / Download Duplicate Bill
            </button>
            <button
              onClick={() => {
                onOpenQuickRecharge();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#EA580C] rounded flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Quick Recharge / Mobile Load
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

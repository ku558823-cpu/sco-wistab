/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Smartphone, 
  Receipt, 
  Wrench, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard,
  Zap,
  MapPin,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FEASIBILITY_REGIONS, DEMO_BILLS, DEMO_COMPLAINTS } from '../data/scoData.ts';

interface ScoHeroProps {
  onOpenBillInquiryWithNo?: (consumerNo: string) => void;
  onOpenRechargeWithNumber?: (phoneNo: string, amount?: number) => void;
  onCheckFeasibilityWithLocation?: (city: string, sector: string) => void;
  onTrackComplaintWithId?: (ticketId: string) => void;
  onNavigateToTab: (tabId: string) => void;
}

export const ScoHero: React.FC<ScoHeroProps> = ({
  onOpenBillInquiryWithNo,
  onOpenRechargeWithNumber,
  onCheckFeasibilityWithLocation,
  onTrackComplaintWithId,
  onNavigateToTab
}) => {
  // Widget Active Tab
  const [activeWidgetTab, setActiveWidgetTab] = useState<'bill' | 'recharge' | 'feasibility' | 'complaint'>('bill');

  // Widget Inputs
  const [billConsumerInput, setBillConsumerInput] = useState('51239841');
  const [rechargePhoneInput, setRechargePhoneInput] = useState('0355-5123490');
  const [rechargeAmount, setRechargeAmount] = useState(500);

  const [selectedRegionIdx, setSelectedRegionIdx] = useState(0);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedSector, setSelectedSector] = useState(FEASIBILITY_REGIONS[0].cities[0].sectors[0]);

  const [complaintTicketInput, setComplaintTicketInput] = useState('SCO-78921');

  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      id: 'sfiber-smart-tv',
      image: '/assets/aistudio/CarouselOne.b57434e17e86f4cd9183_4a0da36d.jpg',
      tag: "ENJOY WITH S-FIBER & SMART TV",
      title: "Voice + Internet + IPTV Triple Play Bundle",
      location: "True Optical Fiber Broadband Across AJ&K & GB",
      sub: "Smart Android 4K Box with Netflix, Prime Video, Hulu & 150+ Channels"
    },
    {
      id: 'khunjerab',
      image: '/assets/aistudio/CarouselTwo.cbc76b0ce2b198a546aa_c41e9348.png',
      tag: "WORLD'S HIGHEST 4G CENTRE • 4,693M",
      title: "Experience lightning-fast connectivity with our cutting-edge 4G Services!",
      location: "Pak China Comm Centre, Khunjerab Pass",
      sub: "SCOM 4G connectivity at the apex of the Karakoram Highway"
    },
    {
      id: 'scom-ambassador',
      image: '/assets/aistudio/Screenshot_2025-06-06_050615_e2b26080.png',
      tag: "SCOM 4G OFFICIAL BRAND AMBASSADOR",
      title: "Experience SCOM 4G LTE — The Voice & Digital Pulse of the North",
      location: "Azad Jammu & Kashmir & Gilgit-Baltistan",
      sub: "Blazing fast speeds, high-altitude mountain coverage & zero hidden deductions",
      isAmbassador: true
    },
    {
      id: 'bts-towers',
      image: 'https://sco.gov.pk/static/media/CarouselThree.01edc4bc089cfe78362d.jpg',
      tag: "480+ MOUNTAIN BTS TOWERS",
      title: "Strategic Telecom Network Across AJ&K & Gilgit-Baltistan",
      location: "Deosai, Skardu & Neelum Valley",
      sub: "Connecting the unconnected across the highest mountain passes"
    },
    {
      id: 'sco-hq',
      image: '/assets/aistudio/SCOBuilding.2cab6dc91635cbd451d6_c959e273.jpg',
      tag: "DIRECTORATE GENERAL HEADQUARTERS",
      title: "Special Communications Organization Headquarters & Innovation Complex",
      location: "Rawalpindi HQ & Regional Centers across AJ&K and Gilgit-Baltistan",
      sub: "Leading telecommunication, optical backbone, and digital transformation since 1976"
    }
  ];

  // Auto-advance carousel smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Handle submissions
  const handleBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBillInquiryWithNo) {
      onOpenBillInquiryWithNo(billConsumerInput.trim());
    } else {
      onNavigateToTab('tools');
    }
  };

  const handleRechargeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenRechargeWithNumber) {
      onOpenRechargeWithNumber(rechargePhoneInput.trim(), rechargeAmount);
    } else {
      onNavigateToTab('tools');
    }
  };

  const handleFeasibilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const city = FEASIBILITY_REGIONS[selectedRegionIdx].cities[selectedCityIdx].name;
    if (onCheckFeasibilityWithLocation) {
      onCheckFeasibilityWithLocation(city, selectedSector);
    } else {
      onNavigateToTab('tools');
    }
  };

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onTrackComplaintWithId) {
      onTrackComplaintWithId(complaintTicketInput.trim());
    } else {
      onNavigateToTab('tools');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#00381c] via-[#004d26] to-[#0f172a] text-white overflow-hidden border-b border-emerald-950">
      
      {/* Background mountain contour & optical grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Decorative glow circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 relative z-10">
        
        {/* Flagship Carousel Slider Banner showcasing user's CarouselTwo image */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl relative bg-black/40 group">
          <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
            {(heroSlides[heroSlide] as any).isAmbassador ? (
              <div className="w-full h-full bg-gradient-to-r from-[#004f25] via-[#006633] to-[#003819] flex items-center justify-between p-6 sm:p-10 relative">
                {/* Background circles */}
                <div className="absolute -left-10 -top-10 w-60 h-60 rounded-full border border-emerald-400/20 pointer-events-none" />
                <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="max-w-xl space-y-2.5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-900 border border-amber-300 shadow-xs">
                      ★ {heroSlides[heroSlide].tag}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-mono bg-emerald-950/60 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/30">
                      Dial *111#
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                    {heroSlides[heroSlide].title}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-100 font-medium hidden sm:block">
                    📍 {heroSlides[heroSlide].location} — {heroSlides[heroSlide].sub}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => onNavigateToTab('scom')}
                      className="px-4 py-2 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                      <span>View SCOM 4G Packages</span>
                    </button>
                    <button
                      onClick={() => onNavigateToTab('tools')}
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
                    >
                      Quick Recharge
                    </button>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-end z-10 mr-12 md:mr-24 shrink-0">
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/90 shadow-2xl w-32 sm:w-44 md:w-52 h-44 sm:h-56 md:h-64 bg-slate-900">
                    <img
                      src="/assets/aistudio/Screenshot_2025-06-06_050615_e2b26080.png"
                      alt="SCOM 4G Brand Ambassador"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/85 px-2 py-1.5 text-center">
                      <span className="text-[11px] font-extrabold text-white block">SCOM 4G Ambassador</span>
                      <span className="text-[9px] text-amber-300 block">Official Brand Face</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={heroSlides[heroSlide].image}
                  alt={heroSlides[heroSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.01]"
                  onError={(e) => {
                    // fallback to tower
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
                  <div className="max-w-xl space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#006633] text-amber-300 border border-emerald-400/50 shadow-xs">
                      ★ {heroSlides[heroSlide].tag}
                    </span>
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-sm">
                      {heroSlides[heroSlide].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-emerald-100/90 font-medium hidden sm:block">
                      📍 {heroSlides[heroSlide].location} — {heroSlides[heroSlide].sub}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Carousel Slider Controls & Arrows */}
          <div className="absolute bottom-3 right-4 flex items-center gap-2">
            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
              <button
                type="button"
                onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setHeroSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    heroSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  title={slide.title}
                />
              ))}
              <div className="text-[10px] text-white/80 font-mono ml-2 pl-2 border-l border-white/20">
                0{heroSlide + 1} / 0{heroSlides.length}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official SCO Mission & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>SPECIAL COMMUNICATIONS ORGANIZATION (SCO)</span>
              <span className="text-emerald-400">•</span>
              <span className="text-amber-300">ESTABLISHED 1976</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold tracking-tight text-white leading-[1.2]">
              Connecting the Unconnected Across{' '}
              <span className="text-amber-400 underline decoration-emerald-500/40 decoration-wavy">
                AJ&K & Gilgit-Baltistan
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              From the highest peaks of the Karakoram to the lush valleys of Kashmir, SCO delivers high-speed SCOM 4G LTE, optical SFiber FTTH broadband, S-Paisa digital banking, and regional Software Technology Parks.
            </p>

            {/* Fast Features Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div 
                onClick={() => onNavigateToTab('scom')} 
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-[#EA580C]" />
                  <span className="text-xs font-bold text-white group-hover:text-amber-300">SCOM 4G</span>
                </div>
                <p className="text-[11px] text-emerald-200/70 leading-tight">Cellular & Super Cards</p>
              </div>

              <div 
                onClick={() => onNavigateToTab('sfiber')} 
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Wifi className="w-4 h-4 text-[#0284C7]" />
                  <span className="text-xs font-bold text-white group-hover:text-sky-300">SFiber</span>
                </div>
                <p className="text-[11px] text-emerald-200/70 leading-tight">Up to 100 Mbps True Fiber</p>
              </div>

              <div 
                onClick={() => onNavigateToTab('spaisa')} 
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white group-hover:text-amber-300">S-Paisa</span>
                </div>
                <p className="text-[11px] text-emerald-200/70 leading-tight">Branchless Mobile Banking</p>
              </div>

              <div 
                onClick={() => onNavigateToTab('stps')} 
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white group-hover:text-emerald-300">Tech Parks</span>
                </div>
                <p className="text-[11px] text-emerald-200/70 leading-tight">STP IT Freelance Hubs</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateToTab('tools')}
                className="btn-sco-green bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm shadow-md"
              >
                <Wrench className="w-4 h-4 mr-2" />
                Access All SCO Online Tools
              </button>
              <button
                onClick={() => onNavigateToTab('scom')}
                className="px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors flex items-center gap-1.5"
              >
                <span>Explore SCOM 4G Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive SCO Utility Tool Box */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
              
              {/* Tool Widget Header & Tabs */}
              <div className="bg-[#00381c] p-2 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 px-2 py-1 flex items-center justify-between">
                  <span>SCO Self-Service Portal</span>
                  <span className="text-amber-300 font-mono text-[10px]">Active 24/7</span>
                </div>
                
                {/* 4 Tool Tabs */}
                <div className="grid grid-cols-4 gap-1 mt-1 items-stretch">
                  <button
                    type="button"
                    onClick={() => setActiveWidgetTab('bill')}
                    className={`py-2 px-1 rounded text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      activeWidgetTab === 'bill'
                        ? 'bg-white text-[#006633] font-bold shadow-xs'
                        : 'text-emerald-100 hover:bg-white/10'
                    }`}
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span className="text-[10px] leading-tight">Online Bill</span>
                  </button>

                  {/* Quick Recharge / Load Tab - Matching Official Orange Design image_eef2e6eb.png */}
                  <button
                    type="button"
                    onClick={() => setActiveWidgetTab('recharge')}
                    className={`py-1 px-1.5 rounded text-center transition-all flex flex-col items-center justify-center leading-tight cursor-pointer ${
                      activeWidgetTab === 'recharge'
                        ? 'bg-[#E05305] text-white font-extrabold shadow-md ring-2 ring-white'
                        : 'bg-[#EA580C] hover:bg-[#D94E03] text-white font-bold shadow-xs'
                    }`}
                  >
                    <span className="text-[11px] font-bold tracking-tight text-white leading-tight">Quick</span>
                    <div className="flex items-center justify-center gap-0.5 text-[11px] font-black text-white leading-tight">
                      <Zap className="w-3 h-3 fill-white text-white shrink-0" />
                      <span>Recharge /</span>
                    </div>
                    <span className="text-[11px] font-bold tracking-tight text-white leading-tight">Load</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveWidgetTab('feasibility')}
                    className={`py-2 px-1 rounded text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      activeWidgetTab === 'feasibility'
                        ? 'bg-white text-[#006633] font-bold shadow-xs'
                        : 'text-emerald-100 hover:bg-white/10'
                    }`}
                  >
                    <Wifi className="w-3.5 h-3.5" />
                    <span className="text-[10px] leading-tight">Fiber Feasibility</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveWidgetTab('complaint')}
                    className={`py-2 px-1 rounded text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      activeWidgetTab === 'complaint'
                        ? 'bg-white text-[#006633] font-bold shadow-xs'
                        : 'text-emerald-100 hover:bg-white/10'
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span className="text-[10px] leading-tight">Track CMS</span>
                  </button>
                </div>
              </div>

              {/* Tool Form Area */}
              <div className="p-5">
                
                {/* TAB 1: ONLINE BILL INQUIRY */}
                {activeWidgetTab === 'bill' && (
                  <form onSubmit={handleBillSubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#006633] uppercase tracking-wider block">
                        Official Duplicate Bill Downloader
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        Inquire SCOM, SFiber or SPhone Bill
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Enter your 8-digit Consumer Number or Landline/SCOM number.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Consumer / Account Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={billConsumerInput}
                          onChange={(e) => setBillConsumerInput(e.target.value)}
                          placeholder="e.g. 51239841"
                          className="w-full h-11 pl-3 pr-20 text-xs sm:text-sm rounded border border-slate-300 focus:border-[#006633] focus:ring-1 focus:ring-[#006633] outline-none font-mono"
                        />
                        <button
                          type="submit"
                          className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#006633] hover:bg-[#004d26] text-white text-xs font-semibold rounded flex items-center gap-1 cursor-pointer"
                        >
                          <Search className="w-3.5 h-3.5" />
                          <span>Search</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Demo Numbers Available:</span>
                        <div className="flex gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => setBillConsumerInput('51239841')}
                            className="underline font-mono font-bold hover:text-emerald-700"
                          >
                            51239841 (SFiber)
                          </button>
                          <span>•</span>
                          <button
                            type="button"
                            onClick={() => setBillConsumerInput('62940182')}
                            className="underline font-mono font-bold hover:text-emerald-700"
                          >
                            62940182 (SCOM)
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-sco-green text-xs font-bold py-2.5 shadow-sm"
                    >
                      <Receipt className="w-3.5 h-3.5 mr-1.5" />
                      View Bill & Pay via S-Paisa
                    </button>
                  </form>
                )}

                {/* TAB 2: QUICK EASYLOAD & RECHARGE */}
                {activeWidgetTab === 'recharge' && (
                  <form onSubmit={handleRechargeSubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block">
                        Instant SCOM 4G Top-Up
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        Quick Mobile Load & Bundle Activation
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Recharge any SCOM prepaid or postpaid SIM directly.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        SCOM Mobile Number
                      </label>
                      <input
                        type="text"
                        required
                        value={rechargePhoneInput}
                        onChange={(e) => setRechargePhoneInput(e.target.value)}
                        placeholder="0355-XXXXXXX"
                        className="w-full h-11 px-3 text-xs sm:text-sm rounded border border-slate-300 focus:border-[#EA580C] outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Amount (PKR)
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[100, 300, 500, 1000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setRechargeAmount(amt)}
                            className={`py-2 text-xs font-bold rounded border transition-colors ${
                              rechargeAmount === amt
                                ? 'bg-orange-50 border-[#EA580C] text-[#EA580C]'
                                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            Rs. {amt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-scom-orange text-xs font-bold py-2.5 shadow-sm"
                    >
                      <Zap className="w-3.5 h-3.5 mr-1.5" />
                      Proceed to Recharge (Rs. {rechargeAmount})
                    </button>
                  </form>
                )}

                {/* TAB 3: CHECK FIBER FEASIBILITY */}
                {activeWidgetTab === 'feasibility' && (
                  <form onSubmit={handleFeasibilitySubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">
                        Optical Network Coverage Check
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        SFiber FTTH Feasibility Tool
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Check high-speed fiber availability at your residence or commercial office.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Region
                        </label>
                        <select
                          value={selectedRegionIdx}
                          onChange={(e) => {
                            const idx = Number(e.target.value);
                            setSelectedRegionIdx(idx);
                            setSelectedCityIdx(0);
                            setSelectedSector(FEASIBILITY_REGIONS[idx].cities[0].sectors[0]);
                          }}
                          className="w-full h-10 px-2 text-xs rounded border border-slate-300 bg-white"
                        >
                          {FEASIBILITY_REGIONS.map((r, i) => (
                            <option key={r.region} value={i}>{r.region.split('(')[0]}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / District
                        </label>
                        <select
                          value={selectedCityIdx}
                          onChange={(e) => {
                            const cIdx = Number(e.target.value);
                            setSelectedCityIdx(cIdx);
                            setSelectedSector(FEASIBILITY_REGIONS[selectedRegionIdx].cities[cIdx].sectors[0]);
                          }}
                          className="w-full h-10 px-2 text-xs rounded border border-slate-300 bg-white"
                        >
                          {FEASIBILITY_REGIONS[selectedRegionIdx].cities.map((c, i) => (
                            <option key={c.name} value={i}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sector / Area / Mohallah
                      </label>
                      <select
                        value={selectedSector}
                        onChange={(e) => setSelectedSector(e.target.value)}
                        className="w-full h-10 px-2 text-xs rounded border border-slate-300 bg-white"
                      >
                        {FEASIBILITY_REGIONS[selectedRegionIdx].cities[selectedCityIdx].sectors.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-sfiber-blue text-xs font-bold py-2.5 shadow-sm"
                    >
                      <Wifi className="w-3.5 h-3.5 mr-1.5" />
                      Check Fiber Feasibility & Apply
                    </button>
                  </form>
                )}

                {/* TAB 4: COMPLAINT STATUS TRACKING */}
                {activeWidgetTab === 'complaint' && (
                  <form onSubmit={handleComplaintSubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#006633] uppercase tracking-wider block">
                        Complaint Management System (CMS)
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        Track Service Ticket Status
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Enter your SCO Support Ticket ID to check real-time resolution progress.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Ticket Number / Complaint ID
                      </label>
                      <input
                        type="text"
                        required
                        value={complaintTicketInput}
                        onChange={(e) => setComplaintTicketInput(e.target.value)}
                        placeholder="e.g. SCO-78921"
                        className="w-full h-11 px-3 text-xs sm:text-sm rounded border border-slate-300 focus:border-[#006633] outline-none font-mono"
                      />
                    </div>

                    <div className="text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Try sample ticket:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setComplaintTicketInput('SCO-78921')}
                          className="font-mono font-bold text-[#006633] underline"
                        >
                          SCO-78921
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => setComplaintTicketInput('SCO-65410')}
                          className="font-mono font-bold text-[#006633] underline"
                        >
                          SCO-65410
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-sco-green text-xs font-bold py-2.5 shadow-sm"
                    >
                      <Wrench className="w-3.5 h-3.5 mr-1.5" />
                      Track Ticket Progress Live
                    </button>
                  </form>
                )}

              </div>

              {/* Bottom Quick Help strip */}
              <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  PTA Verified Portal
                </span>
                <span className="font-semibold text-slate-700">
                  Direct Line: 111-726-726
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Strategic Infrastructure Strip */}
      <div className="bg-[#002613] border-t border-emerald-900/60 py-4 px-4">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-wide uppercase text-[11px]">
              SCO National Footprint:
            </span>
            <span className="text-emerald-300">Azad Jammu & Kashmir & Gilgit-Baltistan</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-extrabold">1.8M+</strong> Active SCOM Subscribers
            </span>
            <span className="hidden sm:inline text-emerald-700">•</span>
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-extrabold">480+</strong> 4G Mountain Towers
            </span>
            <span className="hidden sm:inline text-emerald-700">•</span>
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-extrabold">10,000+ KM</strong> Optical Fiber Backbone
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

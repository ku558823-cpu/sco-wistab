/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScoHeader } from './components/ScoHeader.tsx';
import { ScoHero } from './components/ScoHero.tsx';
import { ScoToolsPortal } from './components/ScoToolsPortal.tsx';
import { TrendingPackagesSection } from './components/TrendingPackagesSection.tsx';
import { ScomMobileSection } from './components/ScomMobileSection.tsx';
import { SFiberSection } from './components/SFiberSection.tsx';
import { SPaisaSection } from './components/SPaisaSection.tsx';
import { SoftwareTechParksSection } from './components/SoftwareTechParksSection.tsx';
import { CustomerCentersSection } from './components/CustomerCentersSection.tsx';
import { CSRSection } from './components/CSRSection.tsx';
import { ScoFooter } from './components/ScoFooter.tsx';
import { ScomPackage, SFiberPlan, TrendingPackage } from './types/sco.ts';
import { Zap, Receipt, Phone, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'scom' | 'sfiber' | 'spaisa' | 'tools' | 'stps' | 'centers' | 'csr'>('home');
  
  // Tools portal deep-link state
  const [activeToolTab, setActiveToolTab] = useState<'bill' | 'recharge' | 'feasibility' | 'application' | 'complaints' | 'esim'>('bill');
  const [prefilledConsumer, setPrefilledConsumer] = useState<string | undefined>('51239841');
  const [prefilledPhone, setPrefilledPhone] = useState<string | undefined>('0355-5123490');
  const [prefilledTicket, setPrefilledTicket] = useState<string | undefined>('SCO-78921');

  const navigateToTool = (tool: 'bill' | 'recharge' | 'feasibility' | 'application' | 'complaints' | 'esim') => {
    setActiveToolTab(tool);
    setCurrentTab('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#006633]/20 selection:text-[#004d26]">
      
      {/* SCO Official Header */}
      <ScoHeader
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuickRecharge={() => navigateToTool('recharge')}
        onOpenBillInquiry={() => navigateToTool('bill')}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* TAB 1: HOME OVERVIEW */}
        {currentTab === 'home' && (
          <>
            {/* National Hero with 4-tab Interactive Tool Box */}
            <ScoHero
              onOpenBillInquiryWithNo={(num) => {
                setPrefilledConsumer(num);
                navigateToTool('bill');
              }}
              onOpenRechargeWithNumber={(phone, amt) => {
                setPrefilledPhone(phone);
                navigateToTool('recharge');
              }}
              onCheckFeasibilityWithLocation={(city, sec) => {
                navigateToTool('feasibility');
              }}
              onTrackComplaintWithId={(ticket) => {
                setPrefilledTicket(ticket);
                navigateToTool('complaints');
              }}
              onNavigateToTab={(tab) => {
                setCurrentTab(tab as any);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Official SCO Trending Packages Showcase */}
            <TrendingPackagesSection
              onRechargePackage={(pkg) => {
                setPrefilledPhone('0355-5123490');
                navigateToTool('recharge');
              }}
              onCheckFeasibility={() => navigateToTool('feasibility')}
              onApplyFiber={() => navigateToTool('application')}
            />

            {/* SCOM 4G Packages Preview */}
            <ScomMobileSection
              onRechargePackage={(pkg) => {
                setPrefilledPhone('0355-5123490');
                navigateToTool('recharge');
              }}
              onOpenEsim={() => navigateToTool('esim')}
            />

            {/* SFiber Broadband Preview */}
            <SFiberSection
              onCheckFeasibility={() => navigateToTool('feasibility')}
              onApplyConnection={(plan) => navigateToTool('application')}
            />

            {/* S-Paisa Digital Banking Preview */}
            <SPaisaSection
              onPayBillClick={() => navigateToTool('bill')}
              onQuickRechargeClick={() => navigateToTool('recharge')}
            />

            {/* Software Technology Parks (STPs) */}
            <SoftwareTechParksSection />

            {/* Public Welfare & Corporate Social Responsibility (CSR) */}
            <CSRSection />

            {/* Customer Facilitation Centers (CFCs) */}
            <CustomerCentersSection />
          </>
        )}

        {/* TAB 2: SCOM 4G MOBILE */}
        {currentTab === 'scom' && (
          <div className="pt-2">
            <ScomMobileSection
              onRechargePackage={(pkg) => {
                setPrefilledPhone('0355-5123490');
                navigateToTool('recharge');
              }}
              onOpenEsim={() => navigateToTool('esim')}
            />
          </div>
        )}

        {/* TAB 3: SFIBER (FTTH) */}
        {currentTab === 'sfiber' && (
          <div className="pt-2">
            <SFiberSection
              onCheckFeasibility={() => navigateToTool('feasibility')}
              onApplyConnection={(plan) => navigateToTool('application')}
            />
          </div>
        )}

        {/* TAB 4: S-PAISA FINANCIAL */}
        {currentTab === 'spaisa' && (
          <div className="pt-2">
            <SPaisaSection
              onPayBillClick={() => navigateToTool('bill')}
              onQuickRechargeClick={() => navigateToTool('recharge')}
            />
          </div>
        )}

        {/* TAB 5: ALL SCO TOOLS & PORTALS */}
        {currentTab === 'tools' && (
          <div className="pt-2">
            <ScoToolsPortal
              initialTool={activeToolTab}
              prefilledConsumerNo={prefilledConsumer}
              prefilledPhoneNo={prefilledPhone}
              prefilledComplaintId={prefilledTicket}
            />
          </div>
        )}

        {/* TAB 6: SOFTWARE TECHNOLOGY PARKS (STP) */}
        {currentTab === 'stps' && (
          <div className="pt-2">
            <SoftwareTechParksSection />
          </div>
        )}

        {/* TAB 7: CUSTOMER FACILITATION CENTERS */}
        {currentTab === 'centers' && (
          <div className="pt-2">
            <CustomerCentersSection />
          </div>
        )}

        {/* TAB 8: CSR & PUBLIC WELFARE ACTIVITIES */}
        {currentTab === 'csr' && (
          <div className="pt-2">
            <CSRSection />
          </div>
        )}

      </main>

      {/* Sticky Mobile Quick Action Bar */}
      <aside 
        aria-label="SCO Quick Mobile Action Bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 sm:hidden shadow-lg"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            onClick={() => navigateToTool('bill')}
            className="flex-1 h-11 px-3 rounded border border-slate-300 bg-white text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 active:bg-slate-50"
          >
            <Receipt className="w-4 h-4 text-emerald-700" />
            <span>Online Bill</span>
          </button>

          <button
            onClick={() => navigateToTool('recharge')}
            className="flex-1 h-11 px-3 rounded bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:translate-y-0.5"
          >
            <Zap className="w-4 h-4" />
            <span>Quick Recharge</span>
          </button>
        </div>
      </aside>

      {/* Official Institutional Footer */}
      <ScoFooter
        onNavigateTab={(tabId) => {
          if (tabId === 'tools') {
            navigateToTool('bill');
          } else {
            setCurrentTab(tabId as any);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

    </div>
  );
}

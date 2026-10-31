/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  DollarSign, 
  Search, 
  Check, 
  HelpCircle, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight,
  FileCheck2,
  Calculator
} from 'lucide-react';
import { PRICING_COMPARISONS } from '../data/mockData.ts';
import { PricingComparison } from '../types/clinical.ts';

interface PricingExplorerProps {
  onBookService: (serviceName: string) => void;
}

export const PricingExplorer: React.FC<PricingExplorerProps> = ({
  onBookService
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [selectedItemsForEstimate, setSelectedItemsForEstimate] = useState<string[]>(['p-1', 'p-2']);

  const categories = ['All', 'Consultation', 'Diagnostic Imaging', 'Laboratory Panels', 'Clinical Procedures'];

  const filteredPricing = PRICING_COMPARISONS.filter((item) => {
    const matchesSearch = 
      item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cptCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCat = categoryFilter === 'All' || item.category === categoryFilter;

    return matchesSearch && matchesCat;
  });

  // Calculate bundled totals
  const bundledDirectTotal = PRICING_COMPARISONS
    .filter(p => selectedItemsForEstimate.includes(p.id))
    .reduce((sum, item) => sum + item.clinicalDirectFee, 0);

  const bundledHospitalTotal = PRICING_COMPARISONS
    .filter(p => selectedItemsForEstimate.includes(p.id))
    .reduce((sum, item) => sum + item.hospitalBillingAvg, 0);

  const bundledSavings = bundledHospitalTotal - bundledDirectTotal;

  const toggleItemInEstimate = (id: string) => {
    setSelectedItemsForEstimate(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FF] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-eyebrow mb-2">
            TRANSPARENT FEE SCHEDULE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0D2137]">
            Direct Medical Pricing. Zero Facility Fees.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Hospitals routinely bundle inflated facility fees and chargemaster markups into routine outpatient care. Clinical Direct eliminates institutional overhead, publishing guaranteed flat fees with all physician interpretation fees included.
          </p>
        </div>

        {/* Interactive Bundled Cost Estimator Widget */}
        <div className="bg-white rounded border border-[#E2E8F0] p-6 mb-12 shadow-clinical-card">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#0284C7]" />
                <h3 className="text-lg font-bold text-[#0D2137]">
                  Out-of-Pocket Procedure & Scan Savings Estimator
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Select clinical services below to model your guaranteed direct package fee vs typical hospital Chargemaster billing.
              </p>
            </div>

            {/* Savings Banner */}
            <div className="bg-[#0D2137] text-white p-4 rounded flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                  Guaranteed Clinical Direct Total
                </span>
                <span className="text-2xl font-bold text-teal-400">
                  ${bundledDirectTotal}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block line-through">
                  Hospital Avg: ${bundledHospitalTotal}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                  Save ${bundledSavings} ({bundledHospitalTotal > 0 ? Math.round((bundledSavings / bundledHospitalTotal) * 100) : 0}%)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Select Checkboxes */}
          <div className="pt-4">
            <span className="text-xs font-semibold text-slate-700 block mb-2">
              Toggle Services to Include in Estimate:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {PRICING_COMPARISONS.map((p) => {
                const isChecked = selectedItemsForEstimate.includes(p.id);
                return (
                  <label
                    key={p.id}
                    onClick={() => toggleItemInEstimate(p.id)}
                    className={`flex items-start gap-2.5 p-2.5 rounded border text-xs cursor-pointer select-none transition-all ${
                      isChecked
                        ? 'border-[#0284C7] bg-sky-50 text-[#0D2137] font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      readOnly
                      className="w-4 h-4 rounded text-[#0284C7] mt-0.5"
                    />
                    <div className="min-w-0">
                      <div className="truncate">{p.serviceName}</div>
                      <div className="text-[11px] text-slate-500">
                        ${p.clinicalDirectFee} flat <span className="line-through text-slate-400">(${p.hospitalBillingAvg})</span>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E2E8F0] rounded w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  categoryFilter === cat
                    ? 'bg-[#0D2137] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0D2137] hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by procedure or CPT code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 h-10 text-xs bg-white rounded border border-[#CBD5E1] text-[#0D2137] focus:border-[#0284C7] outline-none"
            />
          </div>
        </div>

        {/* Pricing Cards Comparison Table */}
        <div className="space-y-4">
          {filteredPricing.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded border border-[#E2E8F0] p-5 sm:p-6 shadow-clinical-card hover:border-slate-300 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Details */}
                <div className="lg:col-span-6 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-[0.08em]">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.2 rounded">
                      CPT: {item.cptCode}
                    </span>
                    <span className="text-[11px] text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.2 rounded font-semibold">
                      {item.turnaround}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0D2137]">
                    {item.serviceName}
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600 pt-1">
                    {item.includedItems.map((inc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Comparison Block */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-6">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">
                      Hospital Facility Billing Avg
                    </span>
                    <span className="text-base font-semibold text-slate-400 line-through">
                      ${item.hospitalBillingAvg}
                    </span>
                  </div>

                  <div className="mt-0 lg:mt-3">
                    <span className="text-[11px] text-[#0284C7] uppercase font-bold block">
                      Clinical Direct Flat Rate
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#0D2137]">
                        ${item.clinicalDirectFee}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Save {item.savingsPercentage}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <button
                    onClick={() => onBookService(item.serviceName)}
                    className="btn-cta text-xs shadow-xs w-full justify-center"
                  >
                    <span>Schedule Direct Order</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    HSA/FSA Eligible • Itemized Superbill
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Transparency Pledge */}
        <div className="mt-12 bg-[#0D2137] text-white p-6 sm:p-8 rounded border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="badge-eyebrow text-sky-300 bg-sky-500/20 mb-1">
              THE CLINICAL DIRECT PLEDGE
            </span>
            <h4 className="text-lg font-bold text-white">
              Federal No Surprises Act & Patient Right-to-Know
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We never perform a diagnostic test, imaging sequence, or procedure without an upfront written Good Faith Estimate. If your insurer denies coverage, our flat cash fee is the absolute maximum you will ever be charged.
            </p>
          </div>
          <button
            onClick={() => onBookService('Specialist Medical Consultation')}
            className="btn-cta text-xs shrink-0"
          >
            Get Good Faith Estimate
          </button>
        </div>

      </div>
    </section>
  );
};

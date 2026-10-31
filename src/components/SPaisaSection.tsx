/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CreditCard, 
  Send, 
  Receipt, 
  Award, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { SPAISA_SERVICES } from '../data/scoData.ts';

interface SPaisaSectionProps {
  onPayBillClick: () => void;
  onQuickRechargeClick: () => void;
}

export const SPaisaSection: React.FC<SPaisaSectionProps> = ({
  onPayBillClick,
  onQuickRechargeClick
}) => {
  const [transferAmount, setTransferAmount] = useState(10000);
  const [ussdSimulated, setUssdSimulated] = useState(false);

  // S-Paisa Fee calculation
  const calculateFee = (amt: number) => {
    if (amt <= 1000) return 20;
    if (amt <= 5000) return 45;
    if (amt <= 10000) return 80;
    if (amt <= 25000) return 140;
    return 200;
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="sco-badge bg-amber-100 text-amber-800 mb-2">
            FINANCIAL INCLUSION IN AJ&K & GB
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
            S-Paisa Digital Branchless Banking
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Empowering the communities of Azad Jammu & Kashmir and Gilgit-Baltistan with instant mobile financial services. Dial <strong>*786#</strong> from any SCOM mobile or visit any of our 5,000+ certified retail agent points.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SPAISA_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4 shadow-xs">
                  {srv.id.includes('money') && <Send className="w-6 h-6" />}
                  {srv.id.includes('bills') && <Receipt className="w-6 h-6" />}
                  {srv.id.includes('pension') && <Award className="w-6 h-6" />}
                  {srv.id.includes('load') && <Smartphone className="w-6 h-6" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[11px] text-slate-500 block mb-1">{srv.limits}</span>
                <span className="text-xs font-bold font-mono text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                  {srv.code}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Fee & Pension Disbursement Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="sco-badge bg-amber-400 text-slate-900">
              SOCIAL IMPACT & PENSIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Dignified Biometric Pension Disbursement
            </h3>
            <div className="flex items-center gap-3 py-1">
              <div className="w-24 h-16 rounded-lg overflow-hidden border border-white/20 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=300"
                  alt="S-Paisa Digital Payment"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                SCO has revolutionized pension withdrawals for senior retired government employees, teachers, police, and armed forces veterans in remote mountain valleys. Withdraw your monthly pension conveniently through S-Paisa with biometric thumbprint verification.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-amber-400 font-extrabold text-lg block">100,000+</span>
                <span className="text-slate-400 text-[11px]">Pensioners Served Monthly</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-emerald-400 font-extrabold text-lg block">5,000+</span>
                <span className="text-slate-400 text-[11px]">S-Paisa Mountain Agents</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-sky-400 font-extrabold text-lg block">0%</span>
                <span className="text-slate-400 text-[11px]">Fee on SCO Utility Bills</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onPayBillClick}
                className="btn-sco-green bg-emerald-600 hover:bg-emerald-500 text-xs font-bold"
              >
                <Receipt className="w-4 h-4 mr-1.5" />
                Pay Utility Bill via S-Paisa
              </button>
              <button
                onClick={onQuickRechargeClick}
                className="btn-scom-orange text-xs font-bold"
              >
                <Smartphone className="w-4 h-4 mr-1.5" />
                Recharge SCOM Number
              </button>
            </div>
          </div>

          {/* Calculator Widget */}
          <div className="lg:col-span-5 bg-white text-slate-800 rounded-xl p-5 shadow-lg border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <Calculator className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-sm">
                S-Paisa Money Transfer Fee Estimator
              </h4>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <label className="font-semibold text-slate-700">Transfer Amount:</label>
                <span className="font-bold text-[#006633]">Rs. {transferAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={transferAmount}
                onChange={(e) => setTransferAmount(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>Rs. 500</span>
                <span>Rs. 25,000</span>
                <span>Rs. 50,000</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Transfer Type:</span>
                <strong className="text-slate-800">CNIC to Bank / Mobile Wallet</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Transparent Regulatory Fee:</span>
                <strong className="text-emerald-700">Rs. {calculateFee(transferAmount)}.00</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Deducted:</span>
                <strong className="text-slate-900 font-bold">Rs. {(transferAmount + calculateFee(transferAmount)).toLocaleString()}.00</strong>
              </div>
            </div>

            <div className="p-2.5 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between">
              <span>Dial code from SCOM phone:</span>
              <strong className="font-mono text-xs font-bold">*786#</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

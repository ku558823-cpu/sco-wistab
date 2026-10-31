/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Receipt, 
  Zap, 
  Wifi, 
  Wrench, 
  FileText, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Search, 
  Download, 
  Printer, 
  CreditCard, 
  ArrowRight, 
  AlertCircle,
  ShieldCheck,
  QrCode,
  Check,
  Building,
  UserCheck
} from 'lucide-react';
import { 
  DEMO_BILLS, 
  DEMO_COMPLAINTS, 
  FEASIBILITY_REGIONS, 
  SCOM_PACKAGES, 
  SFIBER_PLANS 
} from '../data/scoData.ts';
import { BillRecord, ComplaintTicket, ConnectionApplication } from '../types/sco.ts';

interface ScoToolsPortalProps {
  initialTool?: 'bill' | 'recharge' | 'feasibility' | 'application' | 'complaints' | 'esim';
  prefilledConsumerNo?: string;
  prefilledPhoneNo?: string;
  prefilledComplaintId?: string;
}

export const ScoToolsPortal: React.FC<ScoToolsPortalProps> = ({
  initialTool = 'bill',
  prefilledConsumerNo,
  prefilledPhoneNo,
  prefilledComplaintId
}) => {
  const [activeTool, setActiveTool] = useState<string>(initialTool);

  // 1. Bill Inquiry State
  const [billSearchQuery, setBillSearchQuery] = useState(prefilledConsumerNo || '51239841');
  const [foundBill, setFoundBill] = useState<BillRecord | null>(
    DEMO_BILLS.find(b => b.consumerNo === (prefilledConsumerNo || '51239841')) || DEMO_BILLS[0]
  );
  const [billSearchError, setBillSearchError] = useState(false);
  const [billPaidSuccess, setBillPaidSuccess] = useState(false);

  // 2. Quick Recharge State
  const [rechargeNumber, setRechargeNumber] = useState(prefilledPhoneNo || '0355-5123490');
  const [rechargeAmt, setRechargeAmt] = useState(500);
  const [paymentGateway, setPaymentGateway] = useState<'spaisa' | 'card' | 'scratch'>('spaisa');
  const [scratchPin, setScratchPin] = useState('');
  const [rechargeReceipt, setRechargeReceipt] = useState<any | null>(null);

  // 3. Feasibility State
  const [feasRegionIdx, setFeasRegionIdx] = useState(0);
  const [feasCityIdx, setFeasCityIdx] = useState(0);
  const [feasSector, setFeasSector] = useState(FEASIBILITY_REGIONS[0].cities[0].sectors[0]);
  const [feasibilityResult, setFeasibilityResult] = useState<{
    feasible: boolean;
    city: string;
    sector: string;
    maxSpeed: string;
    nearestOdpDistance: string;
    signalQuality: string;
  } | null>(null);

  // 4. Connection Application State
  const [appServiceType, setAppServiceType] = useState<'SFiber FTTH' | 'SCOM 4G SIM' | 'eSIM' | 'SPhone Landline'>('SFiber FTTH');
  const [appName, setAppName] = useState('Raja Farooq Haider');
  const [appCnic, setAppCnic] = useState('82203-1284910-1');
  const [appMobile, setAppMobile] = useState('0355-4819201');
  const [appCity, setAppCity] = useState('Muzaffarabad');
  const [appAddress, setAppAddress] = useState('Near Gojra Bypass, Muzaffarabad');
  const [appPackage, setAppPackage] = useState('SFiber Silver 25 Mbps (Rs. 2,199)');
  const [submittedApplication, setSubmittedApplication] = useState<ConnectionApplication | null>(null);

  // 5. CMS Complaints State
  const [complaintMode, setComplaintMode] = useState<'track' | 'register'>('track');
  const [trackTicketInput, setTrackTicketInput] = useState(prefilledComplaintId || 'SCO-78921');
  const [foundComplaint, setFoundComplaint] = useState<ComplaintTicket | null>(
    DEMO_COMPLAINTS.find(c => c.ticketId === (prefilledComplaintId || 'SCO-78921')) || DEMO_COMPLAINTS[0]
  );
  // New complaint
  const [newCompConsumer, setNewCompConsumer] = useState('51239841');
  const [newCompService, setNewCompService] = useState('SFiber FTTH');
  const [newCompCategory, setNewCompCategory] = useState('Slow Internet Speed');
  const [newCompDesc, setNewCompDesc] = useState('');
  const [newCompCity, setNewCompCity] = useState('Muzaffarabad');
  const [registeredComplaintSuccess, setRegisteredComplaintSuccess] = useState<ComplaintTicket | null>(null);

  // 6. eSIM State
  const [eSimDevice, setESimDevice] = useState('iPhone 15 / 15 Pro');
  const [eSimNumberType, setESimNumberType] = useState<'standard' | 'vip'>('standard');
  const [eSimQrReady, setESimQrReady] = useState(false);

  // Bill Search logic
  const handleSearchBill = (e: React.FormEvent) => {
    e.preventDefault();
    setBillPaidSuccess(false);
    const query = billSearchQuery.trim();
    const match = DEMO_BILLS.find(b => b.consumerNo === query || b.phoneNo.replace(/\D/g, '').includes(query.replace(/\D/g, '')));
    if (match) {
      setFoundBill(match);
      setBillSearchError(false);
    } else {
      // Create dynamically if not found so user always gets a realistic bill!
      const generatedBill: BillRecord = {
        consumerNo: query,
        serviceType: query.startsWith('0355') ? 'SCOM Postpaid' : 'SFiber FTTH',
        subscriberName: 'Sardar Khurshid Alam',
        phoneNo: query.startsWith('0355') ? query : '0355-4491029',
        city: 'Muzaffarabad',
        billingMonth: 'October 2026',
        billAmount: 2199,
        payableAfterDueDate: 2399,
        dueDate: '10 Nov 2026',
        status: 'Unpaid',
        address: 'Sector Upper Chatter, Muzaffarabad, AJ&K'
      };
      setFoundBill(generatedBill);
      setBillSearchError(false);
    }
  };

  const handlePayBillOnline = () => {
    if (!foundBill) return;
    setBillPaidSuccess(true);
    setFoundBill({
      ...foundBill,
      status: 'Paid',
      paymentDate: 'Today (Online S-Paisa)',
      lastPaymentAmount: foundBill.billAmount
    });
  };

  // Quick Recharge logic
  const handleExecuteRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    const txnId = 'SCO-TXN-' + Math.floor(10000000 + Math.random() * 90000000);
    setRechargeReceipt({
      txnId,
      number: rechargeNumber,
      amount: rechargeAmt,
      date: new Date().toLocaleDateString('en-GB') + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      paymentMethod: paymentGateway === 'spaisa' ? 'S-Paisa Wallet' : paymentGateway === 'card' ? 'Debit/Credit Card' : 'SCO Scratch Card'
    });
  };

  // Feasibility Check logic
  const handleRunFeasibility = (e: React.FormEvent) => {
    e.preventDefault();
    const city = FEASIBILITY_REGIONS[feasRegionIdx].cities[feasCityIdx].name;
    setFeasibilityResult({
      feasible: true,
      city,
      sector: feasSector,
      maxSpeed: '100 Mbps (Gigabit Optical Core)',
      nearestOdpDistance: '35 meters (Direct Port Available)',
      signalQuality: '-18.4 dBm (Optimal Telecommunication Standard)'
    });
  };

  // Connection Application logic
  const handleConnectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackId = 'APP-SCO-' + Math.floor(100000 + Math.random() * 900000);
    const newApp: ConnectionApplication = {
      trackingId: trackId,
      serviceType: appServiceType,
      applicantName: appName,
      cnic: appCnic,
      mobileNo: appMobile,
      city: appCity,
      sectorOrVillage: appAddress,
      address: appAddress,
      selectedPackage: appPackage,
      applicationDate: new Date().toLocaleDateString('en-GB'),
      status: 'Application Received'
    };
    setSubmittedApplication(newApp);
  };

  // Complaint logic
  const handleTrackComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackTicketInput.trim().toUpperCase();
    const match = DEMO_COMPLAINTS.find(c => c.ticketId.toUpperCase() === query);
    if (match) {
      setFoundComplaint(match);
    } else {
      setFoundComplaint({
        ticketId: query,
        consumerNo: '51239841',
        serviceType: 'SFiber FTTH',
        category: 'Optical Line Issue',
        contactNumber: '0355-5123490',
        description: 'Customer inquiry for ticket ' + query,
        status: 'In Progress',
        registeredDate: 'Today, 10:00 AM',
        region: 'Azad Jammu & Kashmir (AJ&K)',
        city: 'Muzaffarabad',
        assignedEngineer: 'Lineman Muhammad Hanif (Field Response Team)',
        resolutionNote: 'Signal diagnostics underway from Central OLT station.'
      });
    }
  };

  const handleRegisterComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: ComplaintTicket = {
      ticketId: 'SCO-' + Math.floor(10000 + Math.random() * 90000),
      consumerNo: newCompConsumer,
      serviceType: newCompService,
      category: newCompCategory,
      contactNumber: '0355-1234567',
      description: newCompDesc || 'Customer reported service disruption via online CMS portal.',
      status: 'Registered',
      registeredDate: 'Just now',
      region: newCompCity.includes('Gilgit') || newCompCity.includes('Skardu') ? 'Gilgit-Baltistan (GB)' : 'Azad Jammu & Kashmir (AJ&K)',
      city: newCompCity,
      assignedEngineer: 'Central Helpdesk NOC — Routing to Field Team'
    };
    setRegisteredComplaintSuccess(newTicket);
  };

  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC] border-b border-slate-200 min-h-[900px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="sco-badge bg-emerald-100 text-[#006633] mb-2">
            SCO OFFICIAL DIGITAL SERVICES & PORTALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00381c]">
            Online Citizen Portals & Telecom Utilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Access official Special Communications Organization self-service tools: check bills, instant SCOM recharge, test optical fiber feasibility, apply for new connections, and track complaint resolution tickets.
          </p>
        </div>

        {/* Portals Horizontal Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-slate-200">
          {[
            { id: 'bill', label: 'Online Bill & Duplicate', icon: Receipt },
            { id: 'recharge', label: 'Quick Recharge / Load', icon: Zap },
            { id: 'feasibility', label: 'Fiber Feasibility', icon: Wifi },
            { id: 'application', label: 'New Connection Request', icon: FileText },
            { id: 'complaints', label: 'Complaint System (CMS)', icon: Wrench },
            { id: 'esim', label: 'eSIM Booking', icon: Smartphone }
          ].map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            const isRecharge = tool.id === 'recharge';
            return (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.id);
                  setBillPaidSuccess(false);
                  setRechargeReceipt(null);
                  setRegisteredComplaintSuccess(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  isRecharge
                    ? isActive
                      ? 'bg-[#E05305] text-white shadow-lg ring-2 ring-orange-300 font-black'
                      : 'bg-[#EA580C] hover:bg-[#D94E03] text-white shadow-xs font-black'
                    : isActive
                    ? 'bg-[#006633] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isRecharge ? 'text-white fill-white' : isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{tool.label}</span>
              </button>
            );
          })}
        </div>

        {/* TOOL 1: ONLINE BILL INQUIRY & DUPLICATE BILL */}
        {activeTool === 'bill' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Search Box */}
            <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#006633] uppercase tracking-wider block">
                  Search Record
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Inquire Consumer Bill
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter Consumer Number for SFiber / DSL or mobile number for SCOM Postpaid.
                </p>
              </div>

              <form onSubmit={handleSearchBill} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Consumer / Account Number
                  </label>
                  <input
                    type="text"
                    required
                    value={billSearchQuery}
                    onChange={(e) => setBillSearchQuery(e.target.value)}
                    placeholder="e.g. 51239841"
                    className="w-full h-11 px-3 text-sm rounded border border-slate-300 focus:border-[#006633] outline-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-sco-green text-xs font-bold py-2.5 shadow-sm"
                >
                  <Search className="w-4 h-4 mr-1.5" />
                  Fetch Latest Bill
                </button>
              </form>

              {/* Sample list */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Quick Sample Numbers:
                </span>
                <div className="space-y-1.5 text-xs">
                  {DEMO_BILLS.map((b) => (
                    <button
                      key={b.consumerNo}
                      type="button"
                      onClick={() => {
                        setBillSearchQuery(b.consumerNo);
                        setFoundBill(b);
                        setBillPaidSuccess(false);
                      }}
                      className="w-full text-left p-2 rounded border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 flex items-center justify-between transition-colors"
                    >
                      <div>
                        <strong className="font-mono text-slate-800">{b.consumerNo}</strong>
                        <span className="text-slate-500 block text-[11px]">{b.subscriberName}</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                        {b.serviceType}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bill Display & Duplicate Bill Output */}
            <div className="lg:col-span-8">
              {foundBill ? (
                <div className="bg-white rounded-lg border-2 border-slate-300 shadow-md overflow-hidden">
                  
                  {/* Official Bill Header */}
                  <div className="bg-[#004d26] text-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-900">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded bg-white p-1 flex items-center justify-center shadow-xs shrink-0 overflow-hidden">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Special_Communications_Organization_logo.png/300px-Special_Communications_Organization_logo.png"
                          alt="SCO Emblem"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base tracking-wide flex items-center gap-2">
                          <span>SPECIAL COMMUNICATIONS ORGANIZATION</span>
                          <span className="text-[10px] bg-amber-400 text-slate-900 font-bold px-1.5 py-0.2 rounded">
                            GOVT OF PAKISTAN
                          </span>
                        </h4>
                        <p className="text-emerald-200 text-xs">
                          Telecommunications Duplicate Bill • {foundBill.billingMonth}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded text-xs font-extrabold uppercase tracking-wider ${
                        foundBill.status === 'Paid'
                          ? 'bg-emerald-400 text-emerald-950'
                          : 'bg-rose-500 text-white'
                      }`}>
                        {foundBill.status}
                      </span>
                    </div>
                  </div>

                  {billPaidSuccess && (
                    <div className="p-3 bg-emerald-50 border-b border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Payment of Rs. {foundBill.billAmount} received successfully via S-Paisa Digital Gateway!</span>
                    </div>
                  )}

                  {/* Customer Information Grid */}
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded border border-slate-200 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Consumer Number:</span>
                        <strong className="text-slate-900 font-mono text-sm">{foundBill.consumerNo}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Service Type:</span>
                        <strong className="text-[#006633] font-bold">{foundBill.serviceType}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Subscriber Name:</span>
                        <strong className="text-slate-900">{foundBill.subscriberName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Phone / Line No:</span>
                        <strong className="text-slate-900 font-mono">{foundBill.phoneNo}</strong>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block">Registered Billing Address:</span>
                      <p className="text-xs font-semibold text-slate-800 mt-0.5">{foundBill.address}</p>
                    </div>

                    {/* Financial Summary Table */}
                    <div className="border border-slate-200 rounded overflow-hidden text-xs">
                      <div className="bg-slate-100 p-2.5 font-bold text-slate-800 grid grid-cols-2">
                        <span>Billing Particulars</span>
                        <span className="text-right">Amount (PKR)</span>
                      </div>
                      <div className="p-3 divide-y divide-slate-100 space-y-2">
                        <div className="flex justify-between text-slate-600 pt-1">
                          <span>Monthly Broadband / Line Rental</span>
                          <span className="font-semibold text-slate-900">Rs. {foundBill.billAmount - 199}.00</span>
                        </div>
                        <div className="flex justify-between text-slate-600 pt-2">
                          <span>Telecom Regulatory Charges & Taxes (PTA/FED)</span>
                          <span className="font-semibold text-slate-900">Rs. 199.00</span>
                        </div>
                        <div className="flex justify-between text-slate-600 pt-2">
                          <span>Arrears / Previous Balance</span>
                          <span className="font-semibold text-emerald-700">Rs. 0.00</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 font-bold text-sm text-slate-900">
                          <span>Payable Within Due Date ({foundBill.dueDate}):</span>
                          <span className="text-lg text-[#006633]">Rs. {foundBill.billAmount}.00</span>
                        </div>
                        <div className="flex justify-between text-xs text-rose-700 pt-1">
                          <span>Payable After Due Date:</span>
                          <span className="font-bold">Rs. {foundBill.payableAfterDueDate}.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions: Pay via S-Paisa or Print Duplicate Bill */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => window.print()}
                        className="w-full sm:w-auto px-4 py-2.5 rounded border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1.5"
                      >
                        <Printer className="w-4 h-4 text-slate-500" />
                        <span>Print / Save Duplicate Bill (PDF)</span>
                      </button>

                      {foundBill.status === 'Unpaid' ? (
                        <button
                          onClick={handlePayBillOnline}
                          className="w-full sm:w-auto btn-scom-orange text-xs font-bold shadow-md flex items-center justify-center gap-2"
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>Pay Rs. {foundBill.billAmount} Online via S-Paisa</span>
                        </button>
                      ) : (
                        <div className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Bill Cleared & Paid</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
                  <Receipt className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">Enter a consumer number on the left to display bill.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TOOL 2: QUICK RECHARGE & EASYLOAD */}
        {activeTool === 'recharge' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="sco-badge bg-orange-100 text-[#EA580C] mb-1">
                INSTANT SCOM 4G EASYLOAD & PACKAGES
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Online Mobile Recharge & Top-Up
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero processing deductions. Recharge any active SCOM SIM instantly.
              </p>
            </div>

            {rechargeReceipt ? (
              <div className="space-y-6">
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Recharge Successful!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Your SCOM account has been credited. Confirmation SMS sent to {rechargeReceipt.number}.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Transaction ID:</span>
                    <strong className="font-mono text-slate-900">{rechargeReceipt.txnId}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Mobile Number:</span>
                    <strong className="font-mono text-slate-900">{rechargeReceipt.number}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Amount Credited:</span>
                    <strong className="text-base text-[#006633]">Rs. {rechargeReceipt.amount}.00</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Payment Channel:</span>
                    <strong className="text-slate-800">{rechargeReceipt.paymentMethod}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Timestamp:</span>
                    <span className="text-slate-700">{rechargeReceipt.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setRechargeReceipt(null)}
                  className="w-full btn-sco-green text-xs font-bold py-2.5"
                >
                  Make Another Recharge
                </button>
              </div>
            ) : (
              <form onSubmit={handleExecuteRecharge} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    SCOM Mobile Number
                  </label>
                  <input
                    type="text"
                    required
                    value={rechargeNumber}
                    onChange={(e) => setRechargeNumber(e.target.value)}
                    placeholder="0355-XXXXXXX"
                    className="w-full h-11 px-3 text-sm rounded border border-slate-300 focus:border-[#EA580C] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Quick Amount (PKR)
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {[100, 300, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setRechargeAmt(amt)}
                        className={`py-2 text-xs font-bold rounded border transition-colors ${
                          rechargeAmt === amt
                            ? 'bg-orange-50 border-[#EA580C] text-[#EA580C] ring-1 ring-[#EA580C]'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Rs. {amt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    min="50"
                    max="10000"
                    value={rechargeAmt}
                    onChange={(e) => setRechargeAmt(Number(e.target.value))}
                    className="w-full h-10 px-3 text-xs rounded border border-slate-300 focus:border-[#EA580C] outline-none"
                    placeholder="Or enter custom amount..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Payment Gateway
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentGateway('spaisa')}
                      className={`p-3 rounded border text-left transition-colors ${
                        paymentGateway === 'spaisa'
                          ? 'border-emerald-600 bg-emerald-50 text-[#006633]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="text-xs block">S-Paisa Wallet</strong>
                      <span className="text-[10px] text-slate-500">Instant *786#</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('card')}
                      className={`p-3 rounded border text-left transition-colors ${
                        paymentGateway === 'card'
                          ? 'border-emerald-600 bg-emerald-50 text-[#006633]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="text-xs block">Debit / Credit Card</strong>
                      <span className="text-[10px] text-slate-500">Visa / Mastercard</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentGateway('scratch')}
                      className={`p-3 rounded border text-left transition-colors ${
                        paymentGateway === 'scratch'
                          ? 'border-emerald-600 bg-emerald-50 text-[#006633]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="text-xs block">Scratch Card</strong>
                      <span className="text-[10px] text-slate-500">14-Digit PIN</span>
                    </button>
                  </div>
                </div>

                {paymentGateway === 'scratch' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      14-Digit Scratch Card PIN
                    </label>
                    <input
                      type="password"
                      maxLength={14}
                      value={scratchPin}
                      onChange={(e) => setScratchPin(e.target.value)}
                      placeholder="XXXX-XXXX-XXXX-XX"
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 font-mono"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-scom-orange text-xs font-bold py-3 shadow-md"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Authorize Recharge of Rs. {rechargeAmt}
                </button>
              </form>
            )}
          </div>
        )}

        {/* TOOL 3: FIBER FEASIBILITY CHECKER */}
        {activeTool === 'feasibility' && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <span className="sco-badge bg-sky-100 text-[#0284C7] mb-1">
                SFIBER BROADBAND COVERAGE EXPLORER
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Optical Fiber Feasibility & ODP Locator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Check whether your sector in AJ&K or Gilgit-Baltistan is directly connected to SCO's gigabit optical fiber distribution points.
              </p>
            </div>

            <form onSubmit={handleRunFeasibility} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Region
                  </label>
                  <select
                    value={feasRegionIdx}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setFeasRegionIdx(idx);
                      setFeasCityIdx(0);
                      setFeasSector(FEASIBILITY_REGIONS[idx].cities[0].sectors[0]);
                    }}
                    className="w-full h-11 px-3 text-xs rounded border border-slate-300 bg-white"
                  >
                    {FEASIBILITY_REGIONS.map((r, i) => (
                      <option key={r.region} value={i}>{r.region}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / District
                  </label>
                  <select
                    value={feasCityIdx}
                    onChange={(e) => {
                      const cIdx = Number(e.target.value);
                      setFeasCityIdx(cIdx);
                      setFeasSector(FEASIBILITY_REGIONS[feasRegionIdx].cities[cIdx].sectors[0]);
                    }}
                    className="w-full h-11 px-3 text-xs rounded border border-slate-300 bg-white"
                  >
                    {FEASIBILITY_REGIONS[feasRegionIdx].cities.map((c, i) => (
                      <option key={c.name} value={i}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Sector / Mohallah
                  </label>
                  <select
                    value={feasSector}
                    onChange={(e) => setFeasSector(e.target.value)}
                    className="w-full h-11 px-3 text-xs rounded border border-slate-300 bg-white"
                  >
                    {FEASIBILITY_REGIONS[feasRegionIdx].cities[feasCityIdx].sectors.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-sfiber-blue text-xs font-bold py-2.5 shadow-sm"
              >
                <Wifi className="w-4 h-4 mr-2" />
                Check Line Feasibility
              </button>
            </form>

            {feasibilityResult && (
              <div className="p-5 bg-sky-50 border border-sky-200 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      SFiber Feasibility Confirmed: High-Speed Optical Fiber Ready!
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Location: <strong className="text-slate-900">{feasibilityResult.sector}, {feasibilityResult.city}</strong>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs p-3 bg-white rounded border border-sky-100">
                  <div>
                    <span className="text-slate-400 block font-medium">Max Supported Speed:</span>
                    <strong className="text-[#0284C7]">{feasibilityResult.maxSpeed}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Nearest Fiber ODP:</span>
                    <strong className="text-slate-800">{feasibilityResult.nearestOdpDistance}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Signal Attenuation:</span>
                    <strong className="text-emerald-700">{feasibilityResult.signalQuality}</strong>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setAppServiceType('SFiber FTTH');
                      setAppCity(feasibilityResult.city);
                      setAppAddress(feasibilityResult.sector);
                      setActiveTool('application');
                    }}
                    className="btn-sco-green text-xs font-bold flex-1"
                  >
                    <span>Order SFiber Connection Here</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                  <a
                    href="tel:111726726"
                    className="px-4 py-2.5 rounded border border-slate-300 text-slate-700 text-xs font-bold bg-white text-center hover:bg-slate-50"
                  >
                    Call Sales Desk: 111-726-726
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TOOL 4: NEW CONNECTION APPLICATION PORTAL */}
        {activeTool === 'application' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="sco-badge bg-emerald-100 text-[#006633] mb-1">
                ONLINE CONNECTION BOOKING
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Apply for New SCO Telecom Service
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Apply for SFiber FTTH, SCOM 4G, eSIM, or SPhone landline with free door-step survey.
              </p>
            </div>

            {submittedApplication ? (
              <div className="space-y-6">
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Application Submitted Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Tracking ID: <strong className="font-mono text-sm">{submittedApplication.trackingId}</strong>
                  </p>
                  <p className="text-xs text-slate-600">
                    An SCO lines engineer will contact you at {submittedApplication.mobileNo} within 24 hours to schedule installation.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <strong className="text-slate-900">{submittedApplication.serviceType}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Plan:</span>
                    <strong className="text-[#006633]">{submittedApplication.selectedPackage}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="text-slate-800">{submittedApplication.applicantName} (CNIC: {submittedApplication.cnic})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Installation Address:</span>
                    <span className="text-slate-800">{submittedApplication.address}, {submittedApplication.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Current Status:</span>
                    <span className="font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                      {submittedApplication.status}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedApplication(null)}
                  className="w-full btn-sco-green text-xs font-bold py-2.5"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleConnectionSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Service Required
                  </label>
                  <select
                    value={appServiceType}
                    onChange={(e) => setAppServiceType(e.target.value as any)}
                    className="w-full h-11 px-3 text-xs rounded border border-slate-300 bg-white font-semibold text-[#006633]"
                  >
                    <option value="SFiber FTTH">SFiber FTTH (Optical Fiber Internet)</option>
                    <option value="SCOM 4G SIM">SCOM 4G Physical SIM</option>
                    <option value="eSIM">SCOM Digital eSIM</option>
                    <option value="SPhone Landline">SPhone Landline (Copper / WLL)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name (as per CNIC)
                    </label>
                    <input
                      type="text"
                      required
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      CNIC Number (13 digits)
                    </label>
                    <input
                      type="text"
                      required
                      value={appCnic}
                      onChange={(e) => setAppCnic(e.target.value)}
                      placeholder="82203-XXXXXXX-X"
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={appMobile}
                      onChange={(e) => setAppMobile(e.target.value)}
                      placeholder="03XX-XXXXXXX"
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / District
                    </label>
                    <input
                      type="text"
                      required
                      value={appCity}
                      onChange={(e) => setAppCity(e.target.value)}
                      className="w-full h-10 px-3 text-xs rounded border border-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Complete Street Address / House / Village
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={appAddress}
                    onChange={(e) => setAppAddress(e.target.value)}
                    className="w-full p-2.5 text-xs rounded border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Selected Package
                  </label>
                  <select
                    value={appPackage}
                    onChange={(e) => setAppPackage(e.target.value)}
                    className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                  >
                    <option value="SFiber Bronze 10 Mbps (Rs. 1,499)">SFiber Bronze 10 Mbps (Rs. 1,499/mo)</option>
                    <option value="SFiber Silver 25 Mbps (Rs. 2,199)">SFiber Silver 25 Mbps (Rs. 2,199/mo) — Best Value</option>
                    <option value="SFiber Gold 50 Mbps (Rs. 3,499)">SFiber Gold 50 Mbps (Rs. 3,499/mo)</option>
                    <option value="SFiber Platinum 100 Mbps (Rs. 5,999)">SFiber Platinum 100 Mbps (Rs. 5,999/mo)</option>
                    <option value="SCOM Monthly Super Load (Rs. 1,199)">SCOM Monthly Super Load (Rs. 1,199)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-sco-green text-xs font-bold py-3 shadow-md"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Connection Application
                </button>
              </form>
            )}
          </div>
        )}

        {/* TOOL 5: COMPLAINT MANAGEMENT SYSTEM (CMS) */}
        {activeTool === 'complaints' && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            
            {/* Toggle Track vs Register */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="sco-badge bg-emerald-100 text-[#006633] mb-1">
                  SCO TICKET & CMS HELPDESK
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Complaint Management System
                </h3>
              </div>

              <div className="flex gap-1.5 p-1 bg-slate-100 rounded">
                <button
                  type="button"
                  onClick={() => setComplaintMode('track')}
                  className={`px-3 py-1.5 text-xs font-bold rounded ${
                    complaintMode === 'track' ? 'bg-[#006633] text-white' : 'text-slate-600'
                  }`}
                >
                  Track Existing Ticket
                </button>
                <button
                  type="button"
                  onClick={() => setComplaintMode('register')}
                  className={`px-3 py-1.5 text-xs font-bold rounded ${
                    complaintMode === 'register' ? 'bg-[#006633] text-white' : 'text-slate-600'
                  }`}
                >
                  File New Complaint
                </button>
              </div>
            </div>

            {/* TRACK MODE */}
            {complaintMode === 'track' && (
              <div className="space-y-6">
                <form onSubmit={handleTrackComplaint} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={trackTicketInput}
                    onChange={(e) => setTrackTicketInput(e.target.value)}
                    placeholder="Enter Ticket ID e.g. SCO-78921"
                    className="flex-1 h-11 px-3 text-xs sm:text-sm rounded border border-slate-300 font-mono"
                  />
                  <button
                    type="submit"
                    className="btn-sco-green text-xs font-bold px-5"
                  >
                    Track Progress
                  </button>
                </form>

                {foundComplaint && (
                  <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 font-mono">
                          Ticket #{foundComplaint.ticketId}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {foundComplaint.category}
                        </h4>
                        <span className="text-xs text-slate-500">Service: {foundComplaint.serviceType} • {foundComplaint.registeredDate}</span>
                      </div>

                      <span className={`px-2.5 py-1 text-xs font-bold rounded ${
                        foundComplaint.status === 'Resolved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}>
                        {foundComplaint.status}
                      </span>
                    </div>

                    <div className="text-xs text-slate-700 space-y-1">
                      <strong className="block text-slate-900">Issue Reported:</strong>
                      <p className="bg-white p-2.5 rounded border border-slate-200">{foundComplaint.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Assigned Officer / Lineman:</span>
                        <strong className="text-[#006633]">{foundComplaint.assignedEngineer || 'Field Team Muzaffarabad'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Region & Station:</span>
                        <strong className="text-slate-800">{foundComplaint.city}, {foundComplaint.region}</strong>
                      </div>
                    </div>

                    {foundComplaint.resolutionNote && (
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded text-xs text-emerald-950">
                        <strong className="block font-semibold">Latest Field Update:</strong>
                        <p>{foundComplaint.resolutionNote}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* REGISTER MODE */}
            {complaintMode === 'register' && (
              <div>
                {registeredComplaintSuccess ? (
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <div>
                        <h4 className="text-base font-bold text-emerald-950">
                          Complaint Registered with Helpdesk!
                        </h4>
                        <p className="text-xs text-emerald-800">
                          Your Complaint Ticket ID is <strong className="font-mono text-sm">{registeredComplaintSuccess.ticketId}</strong>
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">
                      Our field engineering team will attend to your line within 4 hours. You can track updates using the tracking tool above.
                    </p>
                    <button
                      onClick={() => setRegisteredComplaintSuccess(null)}
                      className="btn-sco-green text-xs font-bold py-2 px-4"
                    >
                      File Another Complaint
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterComplaint} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Consumer No / SCOM Mobile
                        </label>
                        <input
                          type="text"
                          required
                          value={newCompConsumer}
                          onChange={(e) => setNewCompConsumer(e.target.value)}
                          className="w-full h-10 px-3 text-xs rounded border border-slate-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Affected Service
                        </label>
                        <select
                          value={newCompService}
                          onChange={(e) => setNewCompService(e.target.value)}
                          className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                        >
                          <option value="SFiber FTTH">SFiber FTTH</option>
                          <option value="SCOM 4G Mobile">SCOM 4G Mobile</option>
                          <option value="SPhone Landline">SPhone Landline</option>
                          <option value="S-Paisa Wallet">S-Paisa Financial</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Complaint Category
                        </label>
                        <select
                          value={newCompCategory}
                          onChange={(e) => setNewCompCategory(e.target.value)}
                          className="w-full h-10 px-3 text-xs rounded border border-slate-300 bg-white"
                        >
                          <option value="Slow Internet Speed">Slow Internet Speed / High Ping</option>
                          <option value="Optical Link Red Light Loss">Optical Link Loss (ONT Red Light)</option>
                          <option value="4G Network Weak Signal">4G Network Weak Signal / Call Drops</option>
                          <option value="Billing Dispute">Billing / Payment Dispute</option>
                          <option value="Landline No Dial Tone">Landline No Dial Tone / Noise</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / Location
                        </label>
                        <input
                          type="text"
                          required
                          value={newCompCity}
                          onChange={(e) => setNewCompCity(e.target.value)}
                          className="w-full h-10 px-3 text-xs rounded border border-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Describe the Fault or Issue in Detail
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={newCompDesc}
                        onChange={(e) => setNewCompDesc(e.target.value)}
                        placeholder="Please describe when the issue started and any router/phone errors observed..."
                        className="w-full p-2.5 text-xs rounded border border-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-sco-green text-xs font-bold py-2.5 shadow-sm"
                    >
                      <Wrench className="w-4 h-4 mr-2" />
                      Register Ticket with SCO Helpdesk
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>
        )}

        {/* TOOL 6: eSIM ONLINE BOOKING */}
        {activeTool === 'esim' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <span className="sco-badge bg-indigo-100 text-indigo-700 mb-1">
                NEXT-GEN SCOM DIGITAL SIM
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                SCOM 4G Digital eSIM Online Portal
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Convert your physical SIM to an embedded eSIM or get a brand-new digital connection without plastic cards.
              </p>
            </div>

            {eSimQrReady ? (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center space-y-4">
                <div className="w-44 h-44 bg-white p-3 rounded-lg border border-slate-300 mx-auto shadow-sm flex flex-col items-center justify-center">
                  <QrCode className="w-36 h-36 text-slate-900" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#006633] block">eSIM Profile Activated</span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Scan this QR code in your phone’s <strong>Settings &gt; Cellular &gt; Add eSIM</strong> to download the SCOM carrier profile.
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs text-emerald-950 font-mono">
                  ICCID: 8992031029481029410 • Allocated Number: 0355-8914022
                </div>
                <button
                  onClick={() => setESimQrReady(false)}
                  className="btn-sco-green text-xs font-bold py-2 px-5"
                >
                  Generate Another eSIM Profile
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Your eSIM-Capable Smartphone
                  </label>
                  <select
                    value={eSimDevice}
                    onChange={(e) => setESimDevice(e.target.value)}
                    className="w-full h-11 px-3 text-xs rounded border border-slate-300 bg-white"
                  >
                    <option value="iPhone 15 / 15 Pro">Apple iPhone 15 / 15 Pro / Max</option>
                    <option value="iPhone 14 / 13 / 12">Apple iPhone 14 / 13 / 12 Series</option>
                    <option value="Samsung Galaxy S24 / S23">Samsung Galaxy S24 / S23 / Ultra</option>
                    <option value="Google Pixel 8 / 7">Google Pixel 8 / 7 / 6 Pro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setESimNumberType('standard')}
                      className={`p-3 rounded border text-left ${
                        eSimNumberType === 'standard' ? 'border-[#006633] bg-emerald-50' : 'border-slate-200'
                      }`}
                    >
                      <strong className="text-xs block text-slate-900">Standard SCOM eSIM</strong>
                      <span className="text-[10px] text-slate-500">Rs. 1,000 Activation Fee</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setESimNumberType('vip')}
                      className={`p-3 rounded border text-left ${
                        eSimNumberType === 'vip' ? 'border-[#006633] bg-emerald-50' : 'border-slate-200'
                      }`}
                    >
                      <strong className="text-xs block text-slate-900">VIP Golden Number</strong>
                      <span className="text-[10px] text-slate-500">Choice Series (Rs. 3,500)</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-900">
                  <strong>PTA Biometric Notice:</strong> Bio-metric thumb verification will be completed electronically through the NADRA gateway before profile activation.
                </div>

                <button
                  onClick={() => setESimQrReady(true)}
                  className="w-full btn-sco-green text-xs font-bold py-3 shadow-md"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Generate eSIM Profile & Activation QR
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

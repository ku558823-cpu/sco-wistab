/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  FileText, 
  Activity, 
  MessageSquare, 
  Pill, 
  Download, 
  Video, 
  Send, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FileBadge,
  PhoneCall,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { 
  AppointmentBooking, 
  ClinicalNote, 
  LabOrder, 
  DirectMessage 
} from '../types/clinical.ts';
import { 
  DEMO_CLINICAL_NOTES, 
  DEMO_LAB_ORDERS, 
  DEMO_MESSAGES 
} from '../data/mockData.ts';

interface PatientPortalProps {
  userAppointments: AppointmentBooking[];
  onOpenBooking: () => void;
}

export const PatientPortal: React.FC<PatientPortalProps> = ({
  userAppointments,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'notes' | 'labs' | 'messages' | 'prescriptions'>('appointments');
  const [messages, setMessages] = useState<DirectMessage[]>(DEMO_MESSAGES);
  const [newMessageText, setNewMessageText] = useState('');
  const [refillStatus, setRefillStatus] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    const userMsg: DirectMessage = {
      id: 'msg-' + Date.now(),
      sender: 'patient',
      senderName: 'Eleanor Vance',
      timestamp: 'Just now',
      message: newMessageText.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setNewMessageText('');

    // Simulate clinical coordinator / MD prompt response
    setTimeout(() => {
      const docReply: DirectMessage = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'doctor',
        senderName: 'Dr. Adrian Vance (Care Desk)',
        timestamp: 'Just now',
        message: 'Thank you for the update, Eleanor. Your note has been logged into your chart. We have recorded your parameters for our upcoming review.'
      };
      setMessages(prev => [...prev, docReply]);
    }, 1200);
  };

  const handleRequestRefill = (medName: string) => {
    setRefillStatus(`Refill request for ${medName} submitted directly to Dr. Vance's desk. Pharmacy: CVS Pharmacy #4928.`);
    setTimeout(() => {
      setRefillStatus(null);
    }, 5000);
  };

  return (
    <section className="py-12 md:py-20 bg-[#F8F9FF] border-b border-[#E2E8F0] min-h-[800px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Patient Profile Banner */}
        <div className="bg-[#0D2137] text-white rounded p-6 mb-8 border border-[#000917] shadow-clinical-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-xl">
                EV
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Eleanor Vance
                  </h1>
                  <span className="text-[11px] font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
                    Active Patient
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-1">
                  <span>DOB: June 14, 1988</span>
                  <span>•</span>
                  <span>MRN: <strong className="text-white font-mono">CD-92810</strong></span>
                  <span>•</span>
                  <span>Coverage: <strong className="text-white">Aetna Choice POS II (Verified)</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="btn-cta text-xs"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Book Direct Visit
              </button>
            </div>
          </div>
        </div>

        {/* Portal Tabs Navigation */}
        <div className="flex items-center gap-1 border-b border-[#E2E8F0] mb-8 overflow-x-auto pb-1">
          {[
            { id: 'appointments', label: 'Upcoming Consultations', icon: Calendar, badge: userAppointments.length },
            { id: 'notes', label: 'Clinical Visit Notes', icon: FileText, badge: DEMO_CLINICAL_NOTES.length },
            { id: 'labs', label: 'Lab & Imaging Results', icon: Activity, badge: DEMO_LAB_ORDERS.length },
            { id: 'messages', label: 'Physician Direct Chat', icon: MessageSquare, badge: messages.length },
            { id: 'prescriptions', label: 'Prescription Refills', icon: Pill },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold rounded-t border-b-2 transition-all shrink-0 ${
                  isActive
                    ? 'border-[#0284C7] text-[#0D2137] bg-white'
                    : 'border-transparent text-slate-500 hover:text-[#0D2137] hover:bg-white/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`px-1.5 py-0.2 text-[10px] rounded font-bold ${
                    isActive ? 'bg-[#0284C7] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: UPCOMING APPOINTMENTS */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0D2137]">
                  Scheduled Specialist Consultations
                </h3>
                <p className="text-xs text-slate-600">
                  Encrypted virtual telehealth links and physical clinic check-in passes.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#0284C7] hover:underline flex items-center gap-1"
              >
                <span>Add another appointment</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {userAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userAppointments.map((app) => (
                  <div
                    key={app.id}
                    className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0284C7]">
                          {app.specialty}
                        </span>
                        <h4 className="text-base font-bold text-[#0D2137] mt-0.5">
                          {app.specialistName}
                        </h4>
                        <span className="text-xs text-slate-500 block">
                          Confirmation: <strong className="font-mono text-[#0D2137]">{app.confirmationCode}</strong>
                        </span>
                      </div>
                      <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                        Confirmed
                      </span>
                    </div>

                    <div className="p-3 bg-[#F4F8FA] rounded border border-[#E2E8F0] space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-[#0D2137] font-semibold">
                        <Calendar className="w-4 h-4 text-[#0284C7]" />
                        <span>{app.date} at {app.timeSlot} EST</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        {app.careFormat === 'virtual' ? (
                          <>
                            <Video className="w-4 h-4 text-teal-600" />
                            <span>High-Definition Virtual Consultation</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-teal-600" />
                            <span>{app.clinicName || 'Metro Center Regional Flagship'}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600">
                      <span className="font-semibold text-[#0D2137] block mb-0.5">Reported Chief Complaint:</span>
                      <p className="line-clamp-2 italic">"{app.chiefComplaint}"</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                      {app.careFormat === 'virtual' && app.videoMeetingUrl ? (
                        <a
                          href={app.videoMeetingUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-cta text-xs flex-1 justify-center"
                        >
                          <Video className="w-3.5 h-3.5 mr-1.5" />
                          Join Encrypted Video Room
                        </a>
                      ) : (
                        <button
                          onClick={() => alert(`Check-in code verified for ${app.patientName}. Proceed directly to Floor 12 reception upon arrival.`)}
                          className="btn-cta text-xs flex-1 justify-center"
                        >
                          View Clinic Fast-Pass
                        </button>
                      )}

                      <button
                        onClick={() => alert(`Reschedule request sent to clinical coordinator for appointment #${app.confirmationCode}. A care agent will contact you shortly.`)}
                        className="btn-secondary-clinical text-xs"
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded border border-[#E2E8F0] p-6">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-[#0D2137]">No Upcoming Appointments</h4>
                <p className="text-xs text-slate-500 mt-1">Book your first direct consultation without referrals.</p>
                <button onClick={onOpenBooking} className="btn-cta text-xs mt-4">
                  Schedule Direct Consultation
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CLINICAL NOTES */}
        {activeTab === 'notes' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0D2137]">
                Official Clinical Encounters & Physician Progress Notes
              </h3>
              <p className="text-xs text-slate-600">
                Full legal medical documentation signed by attending physicians. Downloadable for your records or outside care team.
              </p>
            </div>

            {DEMO_CLINICAL_NOTES.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-[0.08em]">
                      Clinical SOAP Encounter Note • {note.id}
                    </span>
                    <h4 className="text-base font-bold text-[#0D2137]">
                      {note.specialistName} — {note.specialty}
                    </h4>
                    <span className="text-xs text-slate-500">Encounter Date: {note.date}</span>
                  </div>

                  <button
                    onClick={() => alert(`Official clinical summary PDF for encounter ${note.id} generated and downloaded.`)}
                    className="btn-secondary-clinical text-xs self-start sm:self-center flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Signed Chart (PDF)
                  </button>
                </div>

                {/* Vitals row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-[#F4F8FA] rounded border border-[#E2E8F0] text-xs">
                  <div>
                    <span className="text-slate-500 block">Blood Pressure:</span>
                    <strong className="text-[#0D2137]">{note.vitals.bp}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Heart Rate:</span>
                    <strong className="text-[#0D2137]">{note.vitals.hr} bpm</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Oxygen Saturation:</span>
                    <strong className="text-[#0D2137]">{note.vitals.spo2}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Temperature:</span>
                    <strong className="text-[#0D2137]">{note.vitals.temp}</strong>
                  </div>
                </div>

                {/* Chief complaint & Assessment */}
                <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                  <div>
                    <strong className="text-[#0D2137] block font-semibold mb-0.5">Subjective / Chief Complaint:</strong>
                    <p className="bg-slate-50 p-2.5 rounded border border-slate-200">{note.chiefComplaint}</p>
                  </div>

                  <div>
                    <strong className="text-[#0D2137] block font-semibold mb-0.5">Physician Assessment & Care Plan:</strong>
                    <pre className="font-sans whitespace-pre-wrap bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-800">
                      {note.assessmentPlan}
                    </pre>
                  </div>

                  {/* ICD-10 Codes */}
                  <div>
                    <strong className="text-[#0D2137] block font-semibold mb-1">Coded Diagnoses (ICD-10):</strong>
                    <div className="flex flex-wrap gap-2">
                      {note.icd10Codes.map((icd, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-sky-50 border border-sky-200 text-[#0284C7] font-mono text-xs">
                          <strong>{icd.code}</strong>: {icd.description}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <strong className="text-[#0D2137] block font-semibold mb-0.5">Follow-Up Recommended:</strong>
                    <p className="text-teal-800 font-medium">{note.followUp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: LABS & IMAGING */}
        {activeTab === 'labs' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0D2137]">
                Diagnostic Lab Panels & Imaging Results
              </h3>
              <p className="text-xs text-slate-600">
                CLIA-certified direct lab analyses and ACR-accredited radiologist interpretations.
              </p>
            </div>

            <div className="space-y-4">
              {DEMO_LAB_ORDERS.map((lab) => (
                <div
                  key={lab.id}
                  className="bg-white rounded border border-[#E2E8F0] p-5 shadow-clinical-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded uppercase tracking-wider">
                        {lab.status}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Order #{lab.id}</span>
                      <span className="text-xs text-slate-500">• {lab.orderDate}</span>
                    </div>

                    <h4 className="text-base font-bold text-[#0D2137]">
                      {lab.testName}
                    </h4>

                    <p className="text-xs text-slate-600">
                      Ordered By: <strong className="text-slate-800">{lab.orderedBy}</strong>
                    </p>

                    {lab.resultSummary && (
                      <p className="text-xs text-slate-700 bg-[#F4F8FA] p-2.5 rounded border border-[#E2E8F0] mt-2">
                        {lab.resultSummary}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => alert(`Downloading high-resolution diagnostic laboratory PDF for ${lab.testName}`)}
                    className="btn-secondary-clinical text-xs shrink-0 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Lab Report (PDF)
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DIRECT PHYSICIAN MESSAGING */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded border border-[#E2E8F0] shadow-clinical-card overflow-hidden flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="p-4 bg-[#0D2137] text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 font-bold">
                  DV
                </div>
                <div>
                  <h4 className="text-sm font-bold">Dr. Adrian Vance, MD (Cardiology Care Team)</h4>
                  <p className="text-[11px] text-teal-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    Direct Encrypted Line • Average response: under 1 hour
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-400">HIPAA Compliant Thread</span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F8F9FF]">
              {messages.map((m) => {
                const isPatient = m.sender === 'patient';
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isPatient ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-500">
                      <span className="font-semibold">{m.senderName}</span>
                      <span>•</span>
                      <span>{m.timestamp}</span>
                    </div>
                    <div
                      className={`p-3.5 rounded max-w-lg text-xs leading-relaxed ${
                        isPatient
                          ? 'bg-[#0D2137] text-white rounded-br-xs'
                          : 'bg-white text-slate-800 border border-[#E2E8F0] shadow-xs rounded-bl-xs'
                      }`}
                    >
                      {m.message}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#E2E8F0] flex gap-2 shrink-0">
              <input
                type="text"
                placeholder="Send a clinical question or symptom update directly to Dr. Vance..."
                value={newMessageText}
                onChange={(e) => setNewMessageText(e.target.value)}
                className="flex-1 input-clinical text-xs"
              />
              <button
                type="submit"
                className="btn-cta text-xs px-4"
              >
                <Send className="w-4 h-4 mr-1" />
                Send
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: PRESCRIPTIONS */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0D2137]">
                Active Prescriptions & One-Click Pharmacy Refills
              </h3>
              <p className="text-xs text-slate-600">
                Electronically transmitted via Surescripts directly to your designated retail or mail-order pharmacy.
              </p>
            </div>

            {refillStatus && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{refillStatus}</span>
              </div>
            )}

            <div className="bg-white rounded border border-[#E2E8F0] p-6 shadow-clinical-card space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-[0.08em]">
                    ACTIVE PRESCRIPTION • RX #8491028
                  </span>
                  <h4 className="text-lg font-bold text-[#0D2137]">
                    Telmisartan 20 mg Oral Tablet
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Directions: Take 1 tablet by mouth daily in the morning for blood pressure control.
                  </p>
                </div>

                <button
                  onClick={() => handleRequestRefill('Telmisartan 20 mg')}
                  className="btn-cta text-xs self-start sm:self-center"
                >
                  <Pill className="w-3.5 h-3.5 mr-1.5" />
                  Request 90-Day Refill
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block">Prescribing Physician:</span>
                  <strong className="text-[#0D2137]">Dr. Adrian Vance, MD (NPI 1942083921)</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Refills Remaining:</span>
                  <strong className="text-teal-700">3 Refills authorized</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Pharmacy on File:</span>
                  <strong className="text-[#0D2137]">CVS Pharmacy #4928 (3rd Ave & 53rd St, NY)</strong>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

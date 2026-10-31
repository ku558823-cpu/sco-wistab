/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin, 
  AlertTriangle, 
  ShieldCheck, 
  DollarSign, 
  Download, 
  ExternalLink,
  User,
  CreditCard,
  Building
} from 'lucide-react';
import { SPECIALISTS_DIRECTORY, CLINIC_LOCATIONS } from '../data/mockData.ts';
import { AppointmentBooking } from '../types/clinical.ts';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string | null;
  initialSpecialtyId?: string | null;
  onBookingConfirmed: (booking: AppointmentBooking) => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  isOpen,
  onClose,
  initialDoctorId,
  initialSpecialtyId,
  onBookingConfirmed
}) => {
  if (!isOpen) return null;

  // Wizard Steps: 1: Triage, 2: Doctor/Format, 3: Date/Time, 4: Patient & Pricing, 5: Confirmation
  const [currentStep, setCurrentStep] = useState(1);

  // Triage state
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [symptomCategory, setSymptomCategory] = useState(initialSpecialtyId || 'Cardiology');
  const [severity, setSeverity] = useState(4);
  const [duration, setDuration] = useState('3-7 days');
  const [noRedFlags, setNoRedFlags] = useState(true);

  // Doctor & Format state
  const defaultDoc = initialDoctorId 
    ? SPECIALISTS_DIRECTORY.find(d => d.id === initialDoctorId) || SPECIALISTS_DIRECTORY[0]
    : SPECIALISTS_DIRECTORY[0];
  const [selectedDoctor, setSelectedDoctor] = useState(defaultDoc);
  const [careFormat, setCareFormat] = useState<'virtual' | 'in-person'>('virtual');
  const [selectedClinic, setSelectedClinic] = useState(CLINIC_LOCATIONS[0].id);

  // Date & Time state
  const [selectedDate, setSelectedDate] = useState('Tomorrow, Nov 1, 2026');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');

  // Patient Info & Payment state
  const [patientName, setPatientName] = useState('Eleanor Vance');
  const [patientEmail, setPatientEmail] = useState('eleanor.vance@example.com');
  const [patientPhone, setPatientPhone] = useState('(212) 555-0198');
  const [dob, setDob] = useState('1988-06-14');
  const [paymentType, setPaymentType] = useState<'self-pay' | 'commercial-insurance'>('self-pay');
  const [insuranceCarrier, setInsuranceCarrier] = useState('Aetna Choice POS II');
  const [memberId, setMemberId] = useState('W920481028');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  const availableDates = [
    { label: 'Today (Priority)', value: 'Today, Oct 31, 2026', badge: 'Same-Day' },
    { label: 'Tomorrow', value: 'Tomorrow, Nov 1, 2026', badge: 'Recommended' },
    { label: 'Monday', value: 'Monday, Nov 3, 2026' },
    { label: 'Tuesday', value: 'Tuesday, Nov 4, 2026' },
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '11:15 AM', '01:45 PM', '02:30 PM', '04:00 PM', '05:15 PM'
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const confCode = 'CD-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking: AppointmentBooking = {
      id: 'app-' + Date.now(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      specialistId: selectedDoctor.id,
      specialistName: selectedDoctor.name + ', ' + selectedDoctor.credentials,
      specialty: selectedDoctor.specialty,
      careFormat,
      date: selectedDate,
      timeSlot: selectedSlot,
      clinicName: careFormat === 'in-person' 
        ? CLINIC_LOCATIONS.find(c => c.id === selectedClinic)?.name 
        : undefined,
      patientName,
      patientEmail,
      patientPhone,
      dob,
      chiefComplaint: chiefComplaint || 'Direct specialist clinical evaluation and treatment plan.',
      symptomSeverity: severity,
      symptomDuration: duration,
      paymentMethod: paymentType,
      insuranceCarrier: paymentType === 'commercial-insurance' ? insuranceCarrier : undefined,
      memberId: paymentType === 'commercial-insurance' ? memberId : undefined,
      feeAmount: selectedDoctor.consultationFee,
      videoMeetingUrl: careFormat === 'virtual' ? `https://telehealth.clinicaldirect.org/room/${confCode}` : undefined,
      confirmationCode: confCode
    };

    setConfirmedBooking(newBooking);
    onBookingConfirmed(newBooking);
    setCurrentStep(5);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000917]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-clinical-float border border-[#E2E8F0] overflow-hidden flex flex-col my-auto max-h-[95vh]">
        
        {/* Wizard Header Bar */}
        <div className="bg-[#0D2137] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E05A2B]"></span>
              <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-sky-300">
                Direct Care Intake & Scheduling
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mt-0.5">
              {currentStep === 5 ? 'Consultation Confirmed' : 'Book Specialist Consultation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Tracker (Steps 1 to 4) */}
        {currentStep < 5 && (
          <div className="bg-[#F4F8FA] border-b border-[#E2E8F0] px-5 sm:px-6 py-3 shrink-0">
            <div className="flex items-center justify-between text-xs">
              {[
                { num: 1, label: 'Triage' },
                { num: 2, label: 'Specialist' },
                { num: 3, label: 'Date & Slot' },
                { num: 4, label: 'Review & Confirm' }
              ].map((step, idx) => (
                <div key={step.num} className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                      currentStep === step.num
                        ? 'bg-[#0D2137] text-white'
                        : currentStep > step.num
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {currentStep > step.num ? <CheckCircle2 className="w-4 h-4" /> : step.num}
                  </div>
                  <span
                    className={`hidden sm:inline font-semibold ${
                      currentStep === step.num ? 'text-[#0D2137]' : 'text-slate-500'
                    }`}
                  >
                    {step.label}
                  </span>
                  {idx < 3 && <div className="hidden sm:block w-8 h-[1px] bg-slate-300 mx-1"></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          
          {/* STEP 1: Clinical Triage & Chief Complaint */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <span className="badge-eyebrow mb-1">STEP 1 OF 4</span>
                <h3 className="text-xl font-bold text-[#0D2137]">
                  Clinical Triage & Symptom Evaluation
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Our clinical intake protocols ensure you are matched directly with the most appropriate attending specialist.
                </p>
              </div>

              {/* Red Flag Emergency Banner */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <span className="font-bold block">Patient Safety Verification:</span>
                  If you are experiencing sudden severe crushing chest pain, difficulty breathing, sudden facial drooping or loss of consciousness, please call 911 or proceed to the nearest emergency facility.
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                  Primary Medical Focus / Specialty
                </label>
                <select
                  value={symptomCategory}
                  onChange={(e) => setSymptomCategory(e.target.value)}
                  className="w-full input-clinical"
                >
                  <option value="Cardiology">Cardiology (Heart, BP, Palpitations, Circulation)</option>
                  <option value="Dermatology">Dermatology (Skin lesions, Rashes, Acne, Moles)</option>
                  <option value="Orthopedics">Orthopedics (Knee, Shoulder, Spine, Joints, Injuries)</option>
                  <option value="Urgent Care">Urgent Care (Acute illness, Infections, Same-day Rx)</option>
                  <option value="Endocrinology">Endocrinology (Thyroid, Diabetes, Hormones, Fatigue)</option>
                  <option value="Neurology">Neurology (Migraines, Neuropathy, Concussion)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                  Describe Your Symptoms & Chief Complaint
                </label>
                <textarea
                  rows={3}
                  value={chiefComplaint}
                  onChange={(e) => setChiefComplaint(e.target.value)}
                  placeholder="e.g. Experiencing intermittent chest pressure and palpitations during evening workouts for 2 weeks. Blood pressure measured 142/90."
                  className="w-full p-3 text-sm bg-white rounded border border-[#CBD5E1] text-[#0D2137] focus:border-[#0284C7] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-[#0D2137]">
                      Discomfort / Severity Scale
                    </label>
                    <span className="text-xs font-bold text-[#E05A2B]">{severity} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={severity}
                    onChange={(e) => setSeverity(Number(e.target.value))}
                    className="w-full accent-[#E05A2B] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                    <span>Mild (1-3)</span>
                    <span>Moderate (4-6)</span>
                    <span>Severe (7-10)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Symptom Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full input-clinical text-xs"
                  >
                    <option value="Less than 24 hours">Less than 24 hours</option>
                    <option value="1 to 3 days">1 to 3 days</option>
                    <option value="3-7 days">3 to 7 days</option>
                    <option value="1 to 4 weeks">1 to 4 weeks</option>
                    <option value="Chronic (> 1 month)">Chronic (Over 1 month)</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-2 text-xs text-slate-700 p-3 bg-[#F4F8FA] rounded border border-[#E2E8F0] cursor-pointer">
                <input
                  type="checkbox"
                  checked={noRedFlags}
                  onChange={(e) => setNoRedFlags(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0284C7] mt-0.5"
                />
                <span>
                  I confirm this is not an immediate life-threatening emergency, and I am requesting direct specialist medical assessment.
                </span>
              </label>
            </div>
          )}

          {/* STEP 2: Specialist & Care Format Selection */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <span className="badge-eyebrow mb-1">STEP 2 OF 4</span>
                <h3 className="text-xl font-bold text-[#0D2137]">
                  Select Attending Specialist & Care Format
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Choose between high-definition encrypted video telehealth or an in-person physical clinical suite.
                </p>
              </div>

              {/* Format Switcher */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => setCareFormat('virtual')}
                  className={`p-4 rounded border cursor-pointer transition-all ${
                    careFormat === 'virtual'
                      ? 'border-[#0284C7] bg-sky-50/50 shadow-xs ring-1 ring-[#0284C7]'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-sm font-bold text-[#0D2137]">High-Definition Video</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Encrypted browser consult from phone or computer. Instant e-prescriptions sent to local pharmacy.
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                    Zero travel • Fastest availability
                  </span>
                </div>

                <div
                  onClick={() => setCareFormat('in-person')}
                  className={`p-4 rounded border cursor-pointer transition-all ${
                    careFormat === 'in-person'
                      ? 'border-[#0284C7] bg-sky-50/50 shadow-xs ring-1 ring-[#0284C7]'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-[#0D2137]" />
                    <span className="text-sm font-bold text-[#0D2137]">Regional Medical Clinic</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Full in-person physical examination, on-site ultrasound, phlebotomy lab, and minor procedures.
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-blue-800 bg-blue-100/60 px-2 py-0.5 rounded">
                    3 Regional NY Flagships
                  </span>
                </div>
              </div>

              {/* Clinic picker if in-person */}
              {careFormat === 'in-person' && (
                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Select Clinic Location
                  </label>
                  <select
                    value={selectedClinic}
                    onChange={(e) => setSelectedClinic(e.target.value)}
                    className="w-full input-clinical text-xs"
                  >
                    {CLINIC_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} — {loc.address} (Wait: {loc.liveWaitMinutes} min)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Specialists Matching List */}
              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-2">
                  Available Attending Specialists
                </label>
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {SPECIALISTS_DIRECTORY.map((doc) => {
                    const isSelected = selectedDoctor.id === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc)}
                        className={`p-3 rounded border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#0284C7] bg-sky-50/40 ring-1 ring-[#0284C7]'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.photoUrl}
                            alt={doc.name}
                            className="w-12 h-12 rounded object-cover border border-slate-200"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-[#0D2137]">
                                {doc.name}, {doc.credentials}
                              </h4>
                              {doc.availableToday && (
                                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                                  Today
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600">{doc.specialty}</p>
                            <p className="text-[11px] text-slate-500">{doc.hospitalAffiliation}</p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-sm font-bold text-[#0D2137]">
                            ${doc.consultationFee}
                          </span>
                          <span className="text-[10px] text-slate-500 block">Flat Rate</span>
                          <div
                            className={`w-4 h-4 rounded-full border mt-1 ml-auto flex items-center justify-center ${
                              isSelected ? 'bg-[#0284C7] border-[#0284C7]' : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Selection */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <span className="badge-eyebrow mb-1">STEP 3 OF 4</span>
                <h3 className="text-xl font-bold text-[#0D2137]">
                  Select Consultation Date & Time
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Physician: <strong className="text-[#0D2137]">{selectedDoctor.name}, {selectedDoctor.credentials}</strong> ({careFormat === 'virtual' ? 'HD Video Visit' : 'In-Clinic'})
                </p>
              </div>

              {/* Date selection cards */}
              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-2">
                  Select Calendar Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {availableDates.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      className={`p-3 rounded border text-left transition-all ${
                        selectedDate === d.value
                          ? 'border-[#0284C7] bg-sky-50 ring-1 ring-[#0284C7]'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {d.badge && (
                        <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-1.5 py-0.2 rounded block w-fit mb-1">
                          {d.badge}
                        </span>
                      )}
                      <span className="text-xs font-bold text-[#0D2137] block">{d.label}</span>
                      <span className="text-[10px] text-slate-500">{d.value.split(',')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot time cards */}
              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-2">
                  Select Time Slot (EST)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`h-11 rounded border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        selectedSlot === slot
                          ? 'border-[#0284C7] bg-[#0D2137] text-white shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary box */}
              <div className="p-3.5 bg-[#F4F8FA] border border-[#E2E8F0] rounded flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block">Selected Appointment:</span>
                  <span className="font-bold text-[#0D2137]">
                    {selectedDate} at {selectedSlot}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">Format:</span>
                  <span className="font-bold text-teal-700 capitalize">
                    {careFormat === 'virtual' ? 'Encrypted HD Video' : 'In-Clinic Flagship'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info, Coverage & Transparent Pricing Breakdown */}
          {currentStep === 4 && (
            <form onSubmit={handleCompleteBooking} className="space-y-5">
              <div>
                <span className="badge-eyebrow mb-1">STEP 4 OF 4</span>
                <h3 className="text-xl font-bold text-[#0D2137]">
                  Patient Registration & Itemized Cost Review
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  100% Transparent Billing Guarantee. No unexpected facility charges, administrative fees, or balance billing.
                </p>
              </div>

              {/* Patient Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full input-clinical"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full input-clinical"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Email Address (for encrypted visit link)
                  </label>
                  <input
                    type="email"
                    required
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full input-clinical"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D2137] mb-1">
                    Cell Phone (for SMS updates)
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full input-clinical"
                  />
                </div>
              </div>

              {/* Payment Method / Coverage */}
              <div>
                <label className="block text-xs font-semibold text-[#0D2137] mb-2">
                  Billing Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentType('self-pay')}
                    className={`p-3 rounded border text-left transition-all ${
                      paymentType === 'self-pay'
                        ? 'border-[#0284C7] bg-sky-50 ring-1 ring-[#0284C7]'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#0D2137]">
                      <CreditCard className="w-3.5 h-3.5 text-[#0284C7]" />
                      Direct Flat Cash Rate
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Fixed upfront fee. Instant HSA/FSA receipt.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentType('commercial-insurance')}
                    className={`p-3 rounded border text-left transition-all ${
                      paymentType === 'commercial-insurance'
                        ? 'border-[#0284C7] bg-sky-50 ring-1 ring-[#0284C7]'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#0D2137]">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      Commercial Insurance
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Aetna, BCBS, United, Cigna accepted.
                    </p>
                  </button>
                </div>
              </div>

              {paymentType === 'commercial-insurance' && (
                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Carrier</label>
                    <input
                      type="text"
                      value={insuranceCarrier}
                      onChange={(e) => setInsuranceCarrier(e.target.value)}
                      className="w-full h-9 px-2 text-xs bg-white rounded border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Member / Policy ID</label>
                    <input
                      type="text"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      className="w-full h-9 px-2 text-xs bg-white rounded border border-slate-300"
                    />
                  </div>
                </div>
              )}

              {/* Itemized Transparent Pricing Box */}
              <div className="bg-[#F4F8FA] border border-[#E2E8F0] rounded p-4 space-y-2 text-xs">
                <div className="font-bold text-[#0D2137] text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Itemized Fee Schedule (CPT 99204)</span>
                  <span className="text-teal-700 font-semibold">Zero Surprise Guarantee</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Attending MD Comprehensive Specialist Consultation (45 min)</span>
                  <span className="font-semibold text-[#0D2137]">${selectedDoctor.consultationFee}.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Hospital Facility & Room Surcharge</span>
                  <span className="font-semibold text-emerald-700">$0.00 (Waived)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Digital Visit Summary, ICD-10 Coding & E-Prescription</span>
                  <span className="font-semibold text-emerald-700">$0.00 (Included)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>30-Day Direct Message Access to Care Team</span>
                  <span className="font-semibold text-emerald-700">$0.00 (Included)</span>
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-[#0D2137]">
                  <span>Total Due Today:</span>
                  <span className="text-lg text-[#E05A2B]">${selectedDoctor.consultationFee}.00</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                type="submit"
                className="w-full btn-cta text-sm shadow-md"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Confirm Appointment & Authorize Direct Slot
              </button>
            </form>
          )}

          {/* STEP 5: Instant Confirmation & Visit Sheet */}
          {currentStep === 5 && confirmedBooking && (
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded">
                <div className="w-12 h-12 rounded bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1 text-emerald-950">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Clinical Slot Guaranteed
                  </span>
                  <h3 className="text-lg font-bold">
                    Appointment Successfully Confirmed!
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Confirmation #{confirmedBooking.confirmationCode} • An encrypted intake packet has been emailed to {confirmedBooking.patientEmail}
                  </p>
                </div>
              </div>

              {/* Consultation Details Card */}
              <div className="bg-[#F4F8FA] border border-[#E2E8F0] rounded p-5 text-left space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Visit Particulars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Physician:</span>
                    <span className="font-bold text-[#0D2137] text-sm">
                      {confirmedBooking.specialistName}
                    </span>
                    <span className="text-slate-500 block">{confirmedBooking.specialty}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Date & Time:</span>
                    <span className="font-bold text-[#0D2137] text-sm">
                      {confirmedBooking.date}
                    </span>
                    <span className="text-teal-700 font-semibold">{confirmedBooking.timeSlot} EST</span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Mode:</span>
                    <span className="font-semibold text-[#0D2137]">
                      {confirmedBooking.careFormat === 'virtual' ? 'High-Definition Video Visit' : confirmedBooking.clinicName}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Patient Name:</span>
                    <span className="font-semibold text-[#0D2137]">{confirmedBooking.patientName}</span>
                  </div>
                </div>

                {confirmedBooking.careFormat === 'virtual' && confirmedBooking.videoMeetingUrl && (
                  <div className="mt-3 p-3 bg-white border border-slate-200 rounded flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-left">
                      <span className="font-bold text-[#0D2137] block">Virtual Clinical Room Link:</span>
                      <span className="text-slate-500 font-mono text-[11px] truncate block max-w-sm">
                        {confirmedBooking.videoMeetingUrl}
                      </span>
                    </div>
                    <a
                      href={confirmedBooking.videoMeetingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold bg-[#0D2137] text-white rounded flex items-center gap-1 shrink-0"
                    >
                      <Video className="w-3.5 h-3.5" />
                      Test Room Access
                    </a>
                  </div>
                )}
              </div>

              {/* Pre-Visit Checklist */}
              <div className="text-left space-y-2">
                <h4 className="text-xs font-bold text-[#0D2137]">
                  What to Prepare Before Your Consultation:
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Have your current prescription medications or supplement bottles available.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Any recent bloodwork or radiology CDs can be uploaded in the Patient Portal.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Log in 5 minutes prior to test camera and microphone.</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={onClose}
                  className="btn-cta text-xs flex-1"
                >
                  Go to Patient Portal & View Records
                </button>
                <button
                  onClick={() => {
                    alert(`ICS Calendar file downloaded for appointment #${confirmedBooking.confirmationCode}`);
                  }}
                  className="btn-secondary-clinical text-xs flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Add to Calendar (.ics)
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Wizard Footer (Back / Next Navigation) */}
        {currentStep < 5 && (
          <div className="bg-[#F4F8FA] border-t border-[#E2E8F0] px-5 sm:px-6 py-3 flex items-center justify-between shrink-0">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 rounded border border-slate-300 bg-white hover:bg-slate-50 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Step
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0D2137] hover:bg-[#000917] rounded flex items-center gap-1"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        )}

      </div>
    </div>
  );
};

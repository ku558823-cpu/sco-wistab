/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CareFormat = 'all' | 'virtual' | 'in-person';

export interface SpecialtyPathway {
  id: string;
  name: string;
  eyebrow: string;
  category: 'urgent' | 'primary' | 'specialty' | 'diagnostics';
  description: string;
  turnaroundTime: string;
  flatFee: number;
  conditions: string[];
  icon: string;
  badge?: string;
  careFormats: ('virtual' | 'in-person')[];
}

export interface Specialist {
  id: string;
  name: string;
  credentials: string; // MD, FACC, etc.
  specialty: string;
  subSpecialty: string;
  rating: number;
  reviewCount: number;
  hospitalAffiliation: string;
  education: string;
  yearsExperience: number;
  npiNumber: string;
  photoUrl: string;
  consultationFee: number;
  nextSlot: string;
  availableToday: boolean;
  careFormats: ('virtual' | 'in-person')[];
  languages: string[];
  focusAreas: string[];
  bio: string;
}

export interface PricingComparison {
  id: string;
  category: 'Consultation' | 'Diagnostic Imaging' | 'Laboratory Panels' | 'Clinical Procedures';
  serviceName: string;
  cptCode: string;
  clinicalDirectFee: number;
  hospitalBillingAvg: number;
  savingsPercentage: number;
  includedItems: string[];
  turnaround: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  branchType: 'Regional Flagship' | 'Specialty Outpost' | 'Diagnostic & Urgent';
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  liveWaitMinutes: number;
  hours: string;
  amenities: string[];
  imagingOnsite: boolean;
  labOnsite: boolean;
}

export interface PatientReview {
  id: string;
  patientInitials: string;
  date: string;
  rating: number;
  doctorName: string;
  specialty: string;
  visitType: 'Virtual HD Video' | 'In-Clinic Center';
  waitTime: string;
  comment: string;
  verifiedDirect: boolean;
}

export interface AppointmentBooking {
  id: string;
  status: 'confirmed' | 'pending' | 'completed';
  createdAt: string;
  specialistId: string;
  specialistName: string;
  specialty: string;
  careFormat: 'virtual' | 'in-person';
  date: string;
  timeSlot: string;
  clinicName?: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  dob: string;
  chiefComplaint: string;
  symptomSeverity: number;
  symptomDuration: string;
  paymentMethod: 'self-pay' | 'commercial-insurance';
  insuranceCarrier?: string;
  memberId?: string;
  feeAmount: number;
  videoMeetingUrl?: string;
  confirmationCode: string;
}

export interface ClinicalNote {
  id: string;
  date: string;
  specialistName: string;
  specialty: string;
  chiefComplaint: string;
  assessmentPlan: string;
  icd10Codes: { code: string; description: string }[];
  vitals: { bp: string; hr: number; spo2: string; temp: string };
  followUp: string;
}

export interface LabOrder {
  id: string;
  orderDate: string;
  testName: string;
  orderedBy: string;
  status: 'Result Ready' | 'Processing' | 'Ordered';
  resultSummary?: string;
  downloadUrl?: string;
}

export interface DirectMessage {
  id: string;
  sender: 'patient' | 'doctor' | 'care_coordinator';
  senderName: string;
  timestamp: string;
  message: string;
}

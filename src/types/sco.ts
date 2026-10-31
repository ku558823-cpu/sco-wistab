/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ServiceCategory = 'scom' | 'sfiber' | 'spaisa' | 'sphone' | 'stps' | 'corporate';

export interface ScomPackage {
  id: string;
  name: string;
  category: 'super-card' | 'data' | 'hybrid' | 'voice' | 'social';
  validity: 'Daily' | 'Weekly' | 'Monthly';
  price: number;
  dataGb: number | string;
  onNetMins: number | string; // SCOM to SCOM
  offNetMins: number | string; // Other networks
  sms: number | string;
  dialCode: string;
  description: string;
  popular?: boolean;
  tag?: string;
}

export interface SFiberPlan {
  id: string;
  name: string;
  speedMbps: number;
  monthlyRent: number;
  dataLimit: string; // 'Unlimited'
  freeVoiceMins: number;
  freeIptv: boolean;
  idealFor: string;
  installationCharge: number;
  popular?: boolean;
}

export interface TrendingPackage {
  id: string;
  name: string;
  serviceType: 'scom' | 'sfiber';
  categoryLabel: string;
  category: 'all' | 'scom' | 'sfiber' | 'super-card' | 'special';
  validity: string;
  price: number;
  pricePeriod?: string;
  dataDisplay: string;
  voiceDisplay: string;
  offNetDisplay?: string;
  smsDisplay?: string;
  dialCode?: string;
  badge: string;
  badgeType: 'hot' | 'popular' | 'hit' | 'super' | 'student';
  description: string;
  highlightBenefit: string;
  subscriberCount?: string;
  speedMbps?: number;
}

export interface SPaisaService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  limits: string;
  code: string;
}

export interface BillRecord {
  consumerNo: string;
  serviceType: 'SCOM Postpaid' | 'SFiber FTTH' | 'SPhone Landline' | 'SCO DSL';
  subscriberName: string;
  phoneNo: string;
  city: string;
  billingMonth: string;
  billAmount: number;
  payableAfterDueDate: number;
  dueDate: string;
  status: 'Unpaid' | 'Paid';
  paymentDate?: string;
  lastPaymentAmount?: number;
  address: string;
}

export interface ComplaintTicket {
  ticketId: string;
  consumerNo: string;
  serviceType: string;
  category: string;
  contactNumber: string;
  description: string;
  status: 'Registered' | 'Assigned to Field Team' | 'In Progress' | 'Resolved';
  registeredDate: string;
  region: 'Azad Jammu & Kashmir (AJ&K)' | 'Gilgit-Baltistan (GB)';
  city: string;
  assignedEngineer?: string;
  resolutionNote?: string;
}

export interface ConnectionApplication {
  trackingId: string;
  serviceType: 'SFiber FTTH' | 'SCOM 4G SIM' | 'eSIM' | 'SPhone Landline';
  applicantName: string;
  cnic: string;
  mobileNo: string;
  city: string;
  sectorOrVillage: string;
  address: string;
  selectedPackage: string;
  applicationDate: string;
  status: 'Application Received' | 'Survey Feasibility In-Progress' | 'Installation Scheduled' | 'Active';
}

export interface CustomerCenter {
  id: string;
  name: string;
  region: 'AJ&K' | 'GB' | 'Rawalpindi HQ';
  district: string;
  city: string;
  address: string;
  phone: string;
  timing: string;
  services: string[];
}

export interface STPHub {
  id: string;
  name: string;
  city: string;
  region: 'AJ&K' | 'GB';
  establishedYear: number;
  totalSeats: number;
  availableSeats: number;
  speed: string;
  features: string[];
}

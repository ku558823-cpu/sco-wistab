/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ScomPackage,
  SFiberPlan,
  TrendingPackage,
  SPaisaService,
  BillRecord,
  ComplaintTicket,
  CustomerCenter,
  STPHub
} from '../types/sco.ts';

export const SCOM_PACKAGES: ScomPackage[] = [
  {
    id: 'scom-super-load-gold',
    name: 'Monthly Super Load Gold',
    category: 'super-card',
    validity: 'Monthly',
    price: 1199,
    dataGb: 35,
    onNetMins: 3500,
    offNetMins: 350,
    sms: 3500,
    dialCode: '*111#',
    description: 'The premier all-in-one monthly solution with 35 GB lightning-speed 4G data, massive on-net & off-net talk time for AJ&K and GB.',
    popular: true,
    tag: 'Best Value'
  },
  {
    id: 'scom-monthly-mega',
    name: 'Mega Monthly 4G Offer',
    category: 'data',
    validity: 'Monthly',
    price: 899,
    dataGb: 25,
    onNetMins: 1000,
    offNetMins: 150,
    sms: 1000,
    dialCode: '*777#',
    description: 'Heavy data bucket designed for freelancers, remote workers, students, and streaming enthusiasts across the mountains.',
    popular: true,
    tag: 'Most Popular'
  },
  {
    id: 'scom-super-load-mini',
    name: 'Super Load Mini',
    category: 'super-card',
    validity: 'Monthly',
    price: 649,
    dataGb: 12,
    onNetMins: 1500,
    offNetMins: 100,
    sms: 1500,
    dialCode: '*112#',
    description: 'Essential monthly package providing balanced data and call limits with zero hidden deductions.',
    popular: false
  },
  {
    id: 'scom-weekly-premium',
    name: 'Weekly Premium 4G',
    category: 'hybrid',
    validity: 'Weekly',
    price: 349,
    dataGb: 10,
    onNetMins: 1000,
    offNetMins: 80,
    sms: 1000,
    dialCode: '*115#',
    description: '7 days of uninterrupted high-speed internet with generous calling minutes for visitors and residents.',
    popular: true,
    tag: 'Weekly Hit'
  },
  {
    id: 'scom-student-offer',
    name: 'Student Special Monthly',
    category: 'data',
    validity: 'Monthly',
    price: 499,
    dataGb: 15,
    onNetMins: 500,
    offNetMins: 50,
    sms: 500,
    dialCode: '*888#',
    description: 'Specially subsidized package for university and college students in AJ&K and Gilgit-Baltistan with educational whitelist support.',
    popular: false,
    tag: 'Youth Special'
  },
  {
    id: 'scom-daily-max',
    name: 'Daily Max 4G',
    category: 'data',
    validity: 'Daily',
    price: 55,
    dataGb: 2.5,
    onNetMins: 'Unlimited',
    offNetMins: 15,
    sms: 500,
    dialCode: '*114#',
    description: 'Instant 24-hour connectivity with 2.5 GB data and unlimited SCOM-to-SCOM calling.',
    popular: false
  },
  {
    id: 'scom-night-mega',
    name: 'Night Owl Mega (12 AM - 9 AM)',
    category: 'data',
    validity: 'Weekly',
    price: 180,
    dataGb: 20,
    onNetMins: 0,
    offNetMins: 0,
    sms: 0,
    dialCode: '*118#',
    description: 'High-speed downloads and uninterrupted backup sync between 12:00 AM and 9:00 AM every night.',
    popular: false
  },
  {
    id: 'scom-social-monthly',
    name: 'Monthly Social Pack',
    category: 'social',
    validity: 'Monthly',
    price: 220,
    dataGb: 8,
    onNetMins: 0,
    offNetMins: 0,
    sms: 500,
    dialCode: '*120#',
    description: 'Unlimited WhatsApp messaging, voice calls, Facebook, and YouTube browsing all month long.',
    popular: false
  }
];

export const TRENDING_PACKAGES: TrendingPackage[] = [
  {
    id: 'trend-super-gold',
    name: 'Monthly Super Load Gold',
    serviceType: 'scom',
    category: 'super-card',
    categoryLabel: 'SCOM 4G Super Card',
    validity: '30 Days',
    price: 1199,
    pricePeriod: '',
    dataDisplay: '35 GB',
    voiceDisplay: '3,500 SCOM Mins',
    offNetDisplay: '350 Off-Net Mins',
    smsDisplay: '3,500 SMS',
    dialCode: '*111#',
    badge: '🔥 #1 Most Subscribed',
    badgeType: 'hot',
    description: 'The premier all-in-one monthly solution with 35 GB lightning-speed 4G data, massive talk time, and zero hidden deductions across AJ&K and GB.',
    highlightBenefit: 'Zero balance deduction guarantee + high altitude priority speeds',
    subscriberCount: '580K+ Subscribers'
  },
  {
    id: 'trend-weekly-premium',
    name: 'Weekly Super 4G Hit',
    serviceType: 'scom',
    category: 'scom',
    categoryLabel: 'SCOM 4G Hybrid',
    validity: '7 Days',
    price: 349,
    pricePeriod: '',
    dataDisplay: '10 GB',
    voiceDisplay: '1,000 SCOM Mins',
    offNetDisplay: '80 Off-Net Mins',
    smsDisplay: '1,000 SMS',
    dialCode: '*115#',
    badge: '⚡ Weekly Best Seller',
    badgeType: 'hit',
    description: 'Fast weekly bundle with 10 GB 4G data and calling minutes, popular among tourists, travelers, and daily business users.',
    highlightBenefit: 'Ideal for travelers along Karakoram Highway & Neelum Valley',
    subscriberCount: '410K+ Subscribers'
  },
  {
    id: 'trend-sfiber-smart-tv',
    name: 'SFiber 50 Mbps Triple Play',
    serviceType: 'sfiber',
    category: 'sfiber',
    categoryLabel: 'True Optical FTTH',
    validity: 'Monthly',
    price: 2999,
    pricePeriod: '/mo',
    dataDisplay: 'Unlimited Data',
    voiceDisplay: '1,000 Free Voice Mins',
    offNetDisplay: 'IPTV 150+ Channels',
    dialCode: 'Online Feasibility',
    badge: '🎬 Triple Play Hit',
    badgeType: 'super',
    description: 'True Gigabit Optical Fiber connection with Smart Android 4K Box, 150+ HD Live IPTV channels, Netflix & YouTube preloaded.',
    highlightBenefit: 'Free 4K Android Smart Box + Optical GPON Router included',
    subscriberCount: '95K+ Homes Connected',
    speedMbps: 50
  },
  {
    id: 'trend-mega-data',
    name: 'Mega Monthly 4G Data',
    serviceType: 'scom',
    category: 'scom',
    categoryLabel: '4G LTE Data Bucket',
    validity: '30 Days',
    price: 899,
    pricePeriod: '',
    dataDisplay: '25 GB',
    voiceDisplay: '1,000 SCOM Mins',
    offNetDisplay: '150 Off-Net Mins',
    smsDisplay: '1,000 SMS',
    dialCode: '*777#',
    badge: '🚀 Freelancer Favorite',
    badgeType: 'popular',
    description: 'Heavy 4G data bucket designed for software engineers, freelancers at SCO Software Tech Parks, and video streaming.',
    highlightBenefit: 'Ultra-low ping connection tailored for tech workers & content creators',
    subscriberCount: '340K+ Subscribers'
  },
  {
    id: 'trend-student-monthly',
    name: 'Student Special 4G',
    serviceType: 'scom',
    category: 'special',
    categoryLabel: 'Subsidized Youth Pack',
    validity: '30 Days',
    price: 499,
    pricePeriod: '',
    dataDisplay: '15 GB',
    voiceDisplay: '500 SCOM Mins',
    offNetDisplay: '50 Off-Net Mins',
    smsDisplay: '500 SMS',
    dialCode: '*888#',
    badge: '🎓 Student Choice',
    badgeType: 'student',
    description: 'Subsidized education package for university students in Muzaffarabad, Gilgit, Mirpur, and Skardu with zoom & portal whitelist.',
    highlightBenefit: 'Special discounted rate with high priority educational whitelisting',
    subscriberCount: '290K+ Students'
  },
  {
    id: 'trend-sfiber-silver',
    name: 'SFiber Silver 25 Mbps',
    serviceType: 'sfiber',
    category: 'sfiber',
    categoryLabel: 'True Optical FTTH',
    validity: 'Monthly',
    price: 2199,
    pricePeriod: '/mo',
    dataDisplay: 'Unlimited Data',
    voiceDisplay: '500 Free Voice Mins',
    offNetDisplay: 'Crystal Clear Voice',
    dialCode: 'Online Feasibility',
    badge: '🌟 Family Broadband Hit',
    badgeType: 'popular',
    description: 'High-speed symmetrical fiber-to-the-home broadband with 25 Mbps download and upload speeds for multiple simultaneous devices.',
    highlightBenefit: '100% optical fiber direct to room with 99.9% uptime SLA',
    subscriberCount: '130K+ Families',
    speedMbps: 25
  },
  {
    id: 'trend-super-mini',
    name: 'Super Load Mini',
    serviceType: 'scom',
    category: 'super-card',
    categoryLabel: 'SCOM 4G Super Card',
    validity: '30 Days',
    price: 649,
    pricePeriod: '',
    dataDisplay: '12 GB',
    voiceDisplay: '1,500 SCOM Mins',
    offNetDisplay: '100 Off-Net Mins',
    smsDisplay: '1,500 SMS',
    dialCode: '*112#',
    badge: '💰 Best Budget Pick',
    badgeType: 'hit',
    description: 'Balanced monthly package providing essential 4G data and calling limits for everyday peace of mind with zero deduction.',
    highlightBenefit: 'Full month validity with guaranteed zero hidden tax deductions',
    subscriberCount: '380K+ Subscribers'
  },
  {
    id: 'trend-night-surfer',
    name: 'Night Owl 4G Unlimited',
    serviceType: 'scom',
    category: 'special',
    categoryLabel: 'Late Night High-Speed',
    validity: '7 Days',
    price: 180,
    pricePeriod: '',
    dataDisplay: '20 GB',
    voiceDisplay: 'Night Data (12AM-9AM)',
    offNetDisplay: 'Full Speed Torrent/DL',
    smsDisplay: 'Zero deductions',
    dialCode: '*118#',
    badge: '🌙 Night Surfer Hit',
    badgeType: 'hot',
    description: 'Ultra-fast night surfing and cloud backup sync between 12:00 AM and 9:00 AM for heavy downloads.',
    highlightBenefit: 'Max 4G speeds during off-peak hours at only Rs. 25 per day',
    subscriberCount: '210K+ Subscribers'
  }
];

export const SFIBER_PLANS: SFiberPlan[] = [
  {
    id: 'sfiber-starter-10',
    name: 'SFiber Bronze 10 Mbps',
    speedMbps: 10,
    monthlyRent: 1499,
    dataLimit: 'Unlimited Data (True Fiber)',
    freeVoiceMins: 200,
    freeIptv: false,
    idealFor: 'Browsing, HD Video streaming, work-from-home essentials for 2-3 users.',
    installationCharge: 2500,
    popular: false
  },
  {
    id: 'sfiber-silver-25',
    name: 'SFiber Silver 25 Mbps',
    speedMbps: 25,
    monthlyRent: 2199,
    dataLimit: 'Unlimited Data (True Fiber)',
    freeVoiceMins: 500,
    freeIptv: true,
    idealFor: 'Full family streaming in 4K, video conferencing, freelancing and online classes.',
    installationCharge: 2000,
    popular: true
  },
  {
    id: 'sfiber-gold-50',
    name: 'SFiber Gold 50 Mbps',
    speedMbps: 50,
    monthlyRent: 3499,
    dataLimit: 'Unlimited Data (Ultra-Low Ping)',
    freeVoiceMins: 1000,
    freeIptv: true,
    idealFor: 'High-bandwidth digital agencies, professional gamers, creators and software developers.',
    installationCharge: 1000,
    popular: true
  },
  {
    id: 'sfiber-platinum-100',
    name: 'SFiber Platinum 100 Mbps',
    speedMbps: 100,
    monthlyRent: 5999,
    dataLimit: 'Unlimited Gigabit Backbone',
    freeVoiceMins: 2500,
    freeIptv: true,
    idealFor: 'Enterprises, software houses, hospitality resorts, and heavy content production.',
    installationCharge: 0,
    popular: false
  }
];

export const SPAISA_SERVICES: SPaisaService[] = [
  {
    id: 'spaisa-money-transfer',
    title: 'Instant Money Transfer',
    description: 'Send and receive money to/from any CNIC, S-Paisa wallet, or any bank account across Pakistan.',
    iconName: 'Send',
    limits: 'Up to Rs. 500,000 monthly',
    code: '*786#'
  },
  {
    id: 'spaisa-utility-bills',
    title: 'Utility & Telecom Bills',
    description: 'Pay electricity (AJKED, WAPDA), gas (SNGPL), water, SCOM mobile bills, and SFiber subscriptions with 0% fee.',
    iconName: 'Receipt',
    limits: 'Zero transaction charges on SCO bills',
    code: '*786*2#'
  },
  {
    id: 'spaisa-pensions',
    title: 'Government Pension Disbursement',
    description: 'Direct bio-metric pension withdrawal for retired civil servants, teachers, and armed forces personnel across AJ&K and GB.',
    iconName: 'Award',
    limits: 'Over 100,000 pensioners served monthly',
    code: 'Branchless CFC'
  },
  {
    id: 'spaisa-mobile-load',
    title: 'Easyload & Bundle Activations',
    description: 'Instantly recharge SCOM prepaid cards, pay SCOM postpaid bills, or activate data super cards directly.',
    iconName: 'Smartphone',
    limits: 'Instant confirmation with 5% cashback',
    code: '*786*1#'
  }
];

export const DEMO_BILLS: BillRecord[] = [
  {
    consumerNo: '51239841',
    serviceType: 'SFiber FTTH',
    subscriberName: 'Sardar Muhammad Tariq',
    phoneNo: '0355-5123490',
    city: 'Muzaffarabad',
    billingMonth: 'October 2026',
    billAmount: 2199,
    payableAfterDueDate: 2399,
    dueDate: '10 Nov 2026',
    status: 'Unpaid',
    address: 'House #44, Upper Chatter, Muzaffarabad, AJ&K'
  },
  {
    consumerNo: '62940182',
    serviceType: 'SCOM Postpaid',
    subscriberName: 'Syeda Zahra Fatima',
    phoneNo: '0355-8910412',
    city: 'Gilgit',
    billingMonth: 'October 2026',
    billAmount: 1450,
    payableAfterDueDate: 1600,
    dueDate: '08 Nov 2026',
    status: 'Unpaid',
    address: 'Jutial Officers Colony, Gilgit, GB'
  },
  {
    consumerNo: '40192831',
    serviceType: 'SPhone Landline',
    subscriberName: 'Chaudhry Rashid Mehmood',
    phoneNo: '05827-442190',
    city: 'Mirpur',
    billingMonth: 'October 2026',
    billAmount: 850,
    payableAfterDueDate: 950,
    dueDate: '12 Nov 2026',
    status: 'Paid',
    paymentDate: '28 Oct 2026',
    lastPaymentAmount: 850,
    address: 'Sector F-1, Allama Iqbal Road, Mirpur, AJ&K'
  },
  {
    consumerNo: '73920194',
    serviceType: 'SFiber FTTH',
    subscriberName: 'Wazir Ali Murtaza',
    phoneNo: '0355-6671290',
    city: 'Skardu',
    billingMonth: 'October 2026',
    billAmount: 3499,
    payableAfterDueDate: 3799,
    dueDate: '15 Nov 2026',
    status: 'Unpaid',
    address: 'Khadim Colony, Near Polo Ground, Skardu, GB'
  }
];

export const DEMO_COMPLAINTS: ComplaintTicket[] = [
  {
    ticketId: 'SCO-78921',
    consumerNo: '51239841',
    serviceType: 'SFiber FTTH',
    category: 'Optical Fiber Signal Degradation',
    contactNumber: '0355-5123490',
    description: 'Loss of optical light link on ONT router after road widening work near Chatter Bridge.',
    status: 'Assigned to Field Team',
    registeredDate: '30 Oct 2026, 09:30 AM',
    region: 'Azad Jammu & Kashmir (AJ&K)',
    city: 'Muzaffarabad',
    assignedEngineer: 'Subedar (R) Asif Nawaz — Lines Supervisor Muzaffarabad Sector 4',
    resolutionNote: 'Field splicing team dispatched with OTDR fiber splicer. Target restoration: Today 04:00 PM.'
  },
  {
    ticketId: 'SCO-65410',
    consumerNo: '62940182',
    serviceType: 'SCOM 4G Mobile',
    category: '4G Data Speed Inquiry',
    contactNumber: '0355-8910412',
    description: 'Requesting 4G coverage optimization near Jutial Cantonment area.',
    status: 'In Progress',
    registeredDate: '29 Oct 2026, 02:15 PM',
    region: 'Gilgit-Baltistan (GB)',
    city: 'Gilgit',
    assignedEngineer: 'Capt. Noman Ali — RF Optimization Wing Gilgit',
    resolutionNote: 'New BTS carrier frequency activated on Tower #GLG-14. Verification in progress.'
  },
  {
    ticketId: 'SCO-51299',
    consumerNo: '40192831',
    serviceType: 'SPhone Landline',
    category: 'Dial Tone Restored',
    contactNumber: '05827-442190',
    description: 'No dial tone on incoming exchange line.',
    status: 'Resolved',
    registeredDate: '25 Oct 2026, 11:00 AM',
    region: 'Azad Jammu & Kashmir (AJ&K)',
    city: 'Mirpur',
    assignedEngineer: 'Haji Farooq — Mirpur Main Exchange',
    resolutionNote: 'Junction box terminal cleaned and restored. Line impedance verified normal.'
  }
];

export const CUSTOMER_CENTERS: CustomerCenter[] = [
  {
    id: 'cfc-muzaffarabad',
    name: 'SCO Executive Customer Facilitation Center (CFC)',
    region: 'AJ&K',
    district: 'Muzaffarabad',
    city: 'Muzaffarabad',
    address: 'Near Old Secretariat, Bank Road, Muzaffarabad, Azad Kashmir',
    phone: '05822-920100',
    timing: 'Mon – Sat: 8:00 AM – 6:00 PM',
    services: ['SFiber Bookings', 'SCOM SIM Replacement', 'Biometric Verification', 'S-Paisa Cash In/Out', 'Corporate Helpdesk']
  },
  {
    id: 'cfc-mirpur',
    name: 'SCO Regional Customer Care Center Mirpur',
    region: 'AJ&K',
    district: 'Mirpur',
    city: 'Mirpur',
    address: 'Sector F-1, Allama Iqbal Road, Mirpur, Azad Kashmir',
    phone: '05827-920200',
    timing: 'Mon – Sat: 8:00 AM – 6:00 PM',
    services: ['SFiber FTTH', 'SCOM 4G eSIM', 'Duplicate Bill Payments', 'Corporate Internet Solutions']
  },
  {
    id: 'cfc-rawalakot',
    name: 'SCO Customer Service Center Rawalakot',
    region: 'AJ&K',
    district: 'Poonch',
    city: 'Rawalakot',
    address: 'Main Kachehri Road, Rawalakot, Azad Kashmir',
    phone: '05824-920300',
    timing: 'Mon – Sat: 8:30 AM – 5:00 PM',
    services: ['SCOM 4G Super Cards', 'SFiber New Connection', 'DSL Troubleshooting']
  },
  {
    id: 'cfc-gilgit',
    name: 'SCO Executive Customer Care Center Gilgit',
    region: 'GB',
    district: 'Gilgit',
    city: 'Gilgit',
    address: 'Airport Road, Near DC Complex, Gilgit, Gilgit-Baltistan',
    phone: '05811-920400',
    timing: 'Mon – Sat: 8:00 AM – 6:00 PM',
    services: ['SFiber FTTH Expansion', 'SCOM 4G 5G-Ready SIMs', 'S-Paisa Agent Registration', 'High-Speed STP Access']
  },
  {
    id: 'cfc-skardu',
    name: 'SCO Customer Care & Telecom Pavilion Skardu',
    region: 'GB',
    district: 'Skardu',
    city: 'Skardu',
    address: 'Yadgar Chowk, Main Skardu Bazar, Baltistan',
    phone: '05815-920500',
    timing: 'Mon – Sat: 8:30 AM – 5:30 PM',
    services: ['Tourism 4G SCOM SIMs', 'Fiber Broadband', 'Expedition Satellite Backhaul Support', 'S-Paisa']
  },
  {
    id: 'cfc-hunza',
    name: 'SCO Digital Facilitation Center Hunza',
    region: 'GB',
    district: 'Hunza',
    city: 'Aliabad',
    address: 'Karakoram Highway (KKH), Aliabad, Hunza Valley',
    phone: '05813-920600',
    timing: 'Mon – Sat: 9:00 AM – 5:00 PM',
    services: ['Tourist 4G Data SIMs', 'Fiber Broadband for Hotels & Guest Houses', 'Freelancer STP Passports']
  },
  {
    id: 'cfc-rawalpindi',
    name: 'SCO Headquarters Corporate Facilitation Desk',
    region: 'Rawalpindi HQ',
    district: 'Rawalpindi',
    city: 'Rawalpindi',
    address: 'Qasim Market, Rawalpindi Cantt, Pakistan',
    phone: '051-9271536',
    timing: 'Mon – Fri: 8:00 AM – 4:00 PM',
    services: ['National Carrier Interconnects', 'Long Distance & International (LDI)', 'DPLC & Dark Fiber Leases']
  }
];

export const SOFTWARE_TECH_PARKS: STPHub[] = [
  {
    id: 'stp-gilgit',
    name: 'SCO Software Technology Park Gilgit',
    city: 'Gilgit',
    region: 'GB',
    establishedYear: 2021,
    totalSeats: 120,
    availableSeats: 24,
    speed: '1 Gbps Dedicated Optical Fiber',
    features: ['24/7 Solar & Generator Power', 'High-Definition Video Conference Room', 'Mentorship & Incubation Desk', 'Biometric Security Access']
  },
  {
    id: 'stp-skardu',
    name: 'SCO Software Technology Park Skardu',
    city: 'Skardu',
    region: 'GB',
    establishedYear: 2022,
    totalSeats: 85,
    availableSeats: 18,
    speed: '500 Mbps Redundant Fiber Link',
    features: ['Uninterrupted Mountain Power Backup', 'Gaming & Render Farm Stations', 'Freelance Co-working Desks', 'Cafeteria & High-Speed Wi-Fi']
  },
  {
    id: 'stp-muzaffarabad',
    name: 'SCO IT & Incubation Park Muzaffarabad',
    city: 'Muzaffarabad',
    region: 'AJ&K',
    establishedYear: 2020,
    totalSeats: 150,
    availableSeats: 32,
    speed: '1 Gbps Ultra-Low Latency Backbone',
    features: ['State-of-the-Art Podcast & Media Room', 'Private Tech Startup Cabins', 'Fast Access to Pakistan Tech Council', '24/7 Unmetered Bandwidth']
  },
  {
    id: 'stp-mirpur',
    name: 'SCO Tech Hub & Freelance Centre Mirpur',
    city: 'Mirpur',
    region: 'AJ&K',
    establishedYear: 2023,
    totalSeats: 90,
    availableSeats: 29,
    speed: '500 Mbps Low Latency Link',
    features: ['UK-Diaspora IT Bridge Facilities', 'E-commerce Training Labs', 'Female Freelancer Dedicated Wing', 'Co-working Hotdesks']
  }
];

export const FEASIBILITY_REGIONS = [
  {
    region: 'Azad Jammu & Kashmir (AJ&K)',
    cities: [
      {
        name: 'Muzaffarabad',
        sectors: ['Upper Chatter', 'Lower Chatter', 'Plate', 'Gojra', 'Chehla Bandi', 'Bank Road', 'Naluchi', 'Tariqabad']
      },
      {
        name: 'Mirpur',
        sectors: ['Sector F-1', 'Sector F-2', 'Sector F-3', 'Sector B-1', 'Sector C-4', 'Allama Iqbal Road', 'Kalyal']
      },
      {
        name: 'Rawalakot',
        sectors: ['Main Bazar', 'Housing Scheme', 'Kachehri Area', 'Singola Road', 'Poonch University Campus']
      },
      {
        name: 'Kotli',
        sectors: ['Gulhar Sharif', 'City Center', 'Pindi Road', 'Fathapur', 'Khuiratta Road']
      },
      {
        name: 'Bhimber',
        sectors: ['Main City', 'Barnala Road', 'Civil Hospital Area', 'Samahni Chowk']
      },
      {
        name: 'Bagh',
        sectors: ['Zaman Chowk', 'Sudhan Gali Road', 'Dulli', 'Main Bazar Bagh']
      }
    ]
  },
  {
    region: 'Gilgit-Baltistan (GB)',
    cities: [
      {
        name: 'Gilgit',
        sectors: ['Jutial Cantt', 'Airport Road', 'Kashrote', 'Zulfiqarabad', 'Sonikot', 'Danyore', 'Amphary']
      },
      {
        name: 'Skardu',
        sectors: ['Yadgar Chowk', 'Khadim Colony', 'Hassan Colony', 'New Bazar', 'Satellite Town', 'Shangrila Road']
      },
      {
        name: 'Hunza / Aliabad',
        sectors: ['Aliabad Main KKH', 'Karimabad Heritage Area', 'Ganesh', 'Gulmit Upper Hunza']
      },
      {
        name: 'Diamer / Chilas',
        sectors: ['Chilas City', 'KKH Highway Belt', 'Babusar Road', 'DC Office Area']
      },
      {
        name: 'Ghizer',
        sectors: ['Gahkuch Main', 'Punial', 'Gupis Valley', 'Phander Road']
      },
      {
        name: 'Astore',
        sectors: ['Eidgah Astore', 'Gorikot', 'Rama Valley Entrance']
      }
    ]
  }
];

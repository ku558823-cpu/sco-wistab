/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  SpecialtyPathway,
  Specialist,
  PricingComparison,
  ClinicLocation,
  PatientReview,
  ClinicalNote,
  LabOrder,
  DirectMessage
} from '../types/clinical.ts';

export const CLINICAL_PATHWAYS: SpecialtyPathway[] = [
  {
    id: 'urgent-care',
    name: 'Direct Urgent Care',
    eyebrow: 'IMMEDIATE ACCESS',
    category: 'urgent',
    description: 'Acute infections, sudden fever, respiratory distress, lacerations, and urgent medication refills without ER waiting times.',
    turnaroundTime: 'Available in <15 mins',
    flatFee: 95,
    conditions: ['Sinusitis & Strep', 'Acute Migraine', 'Urinary Infections', 'Sprains & Strains', 'Bronchitis'],
    icon: 'Activity',
    badge: 'Same-Hour Care',
    careFormats: ['virtual', 'in-person']
  },
  {
    id: 'cardiology',
    name: 'Cardiology & Vascular',
    eyebrow: 'BOARD CERTIFIED FACC',
    category: 'specialty',
    description: 'Direct evaluation for hypertension, palpitations, chest discomfort screening, lipid management, and preventive cardiovascular care.',
    turnaroundTime: 'Slots Today',
    flatFee: 175,
    conditions: ['Hypertension', 'Arrhythmia Evaluation', 'Coronary Prevention', 'Post-COVID Dysautonomia', 'Lipid Disorders'],
    icon: 'HeartPulse',
    badge: 'Direct Direct Access',
    careFormats: ['virtual', 'in-person']
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Skin',
    eyebrow: 'BOARD CERTIFIED FAAD',
    category: 'specialty',
    description: 'Rapid diagnostic review of suspicious lesions, severe acne, eczema, psoriasis, rashes, and urgent prescription management.',
    turnaroundTime: 'Same-Day Digital Review',
    flatFee: 145,
    conditions: ['Melanoma Screening', 'Cystic Acne', 'Psoriasis Flare-ups', 'Atypical Nevi', 'Eczema & Rashes'],
    icon: 'ShieldCheck',
    badge: 'High-Def Dermoscopy',
    careFormats: ['virtual', 'in-person']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Sports Medicine',
    eyebrow: 'ORTHOPEDIC SURGEONS & MDs',
    category: 'specialty',
    description: 'Direct clinical assessment of knee, shoulder, spine, joint instability, tendon tears, and conservative treatment plans.',
    turnaroundTime: 'Next-Day Slot',
    flatFee: 165,
    conditions: ['Meniscus Tears', 'Rotator Cuff Issues', 'Lumbar Radiculopathy', 'Carpal Tunnel', 'Osteoarthritis'],
    icon: 'Bone',
    careFormats: ['virtual', 'in-person']
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology & Metabolism',
    eyebrow: 'COMPREHENSIVE METABOLIC',
    category: 'specialty',
    description: 'Advanced management of Type 1 & 2 diabetes, Hashimoto thyroiditis, adrenal dysfunction, and GLP-1 supervised protocols.',
    turnaroundTime: 'Slots Tomorrow',
    flatFee: 155,
    conditions: ['Hypothyroidism', 'Pre-diabetes & Insulin', 'PCOS', 'Thyroid Nodules', 'Adrenal Optimization'],
    icon: 'Stethoscope',
    careFormats: ['virtual', 'in-person']
  },
  {
    id: 'diagnostics',
    name: 'Direct Diagnostic Imaging & Labs',
    eyebrow: 'TRANSPARENT CLIA / ACR LABS',
    category: 'diagnostics',
    description: 'Direct physician orders for 3T MRI, Low-Dose CT, Ultrasound, and full biomarker bloodwork with transparent pre-negotiated cash pricing.',
    turnaroundTime: 'Results in 24 Hours',
    flatFee: 285,
    conditions: ['Lumbar Spine 3T MRI', 'Chest CT Scan', 'Comprehensive Panel', 'Echo Doppler', 'Abdominal Ultrasound'],
    icon: 'Cpu',
    badge: 'Save up to 75%',
    careFormats: ['in-person']
  }
];

export const SPECIALISTS_DIRECTORY: Specialist[] = [
  {
    id: 'dr-adrian-vance',
    name: 'Dr. Adrian Vance',
    credentials: 'MD, FACC',
    specialty: 'Cardiology & Preventive Cardiology',
    subSpecialty: 'Cardiovascular Risk Stratification & Echocardiography',
    rating: 4.96,
    reviewCount: 312,
    hospitalAffiliation: 'Johns Hopkins Hospital Fellow Alum',
    education: 'Columbia University Vagelos College of Physicians and Surgeons',
    yearsExperience: 16,
    npiNumber: '1942083921',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    consultationFee: 175,
    nextSlot: 'Today at 2:30 PM',
    availableToday: true,
    careFormats: ['virtual', 'in-person'],
    languages: ['English', 'Spanish'],
    focusAreas: ['Preventive Cardiology', 'Hypertension Control', 'Arrhythmia Screening', 'Lipid Optimization'],
    bio: 'Dr. Vance focuses on cutting-edge cardiovascular diagnostics, direct patient partnership, and non-invasive preventative strategies without standard referral bottlenecks.'
  },
  {
    id: 'dr-claire-chen',
    name: 'Dr. Claire Chen',
    credentials: 'MD, FAAD',
    specialty: 'Dermatology',
    subSpecialty: 'Teledermatology & Cutaneous Oncology',
    rating: 4.98,
    reviewCount: 428,
    hospitalAffiliation: 'Stanford Health Care Affiliated',
    education: 'Stanford University School of Medicine (Chief Resident)',
    yearsExperience: 12,
    npiNumber: '1839201472',
    photoUrl: 'https://images.unsplash.com/photo-1594824813682-13a802778738?auto=format&fit=crop&q=80&w=600',
    consultationFee: 145,
    nextSlot: 'Today at 3:15 PM',
    availableToday: true,
    careFormats: ['virtual', 'in-person'],
    languages: ['English', 'Mandarin'],
    focusAreas: ['Skin Lesion Triage', 'Biopsy Diagnostics', 'Severe Acne', 'Psoriasis Biologics'],
    bio: 'Dr. Chen specializes in high-definition visual dermoscopy and rapid triage of concerning moles and inflammatory dermatoses.'
  },
  {
    id: 'dr-marcus-hayes',
    name: 'Dr. Marcus Hayes',
    credentials: 'MD, FAAOS',
    specialty: 'Orthopedics & Sports Medicine',
    subSpecialty: 'Knee, Shoulder & Minimally Invasive Joint Preservation',
    rating: 4.92,
    reviewCount: 284,
    hospitalAffiliation: 'Hospital for Special Surgery Alum',
    education: 'Harvard Medical School',
    yearsExperience: 18,
    npiNumber: '1284902194',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    consultationFee: 165,
    nextSlot: 'Tomorrow at 9:00 AM',
    availableToday: false,
    careFormats: ['virtual', 'in-person'],
    languages: ['English'],
    focusAreas: ['ACL/Meniscus Injuries', 'Rotator Cuff Pathology', 'Regenerative Joint Therapies', 'Surgical Second Opinions'],
    bio: 'Former team physician for collegiate athletics, Dr. Hayes emphasizes functional rehabilitation, direct imaging reviews, and non-operative interventions.'
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    credentials: 'MD, FACE',
    specialty: 'Endocrinology & Metabolism',
    subSpecialty: 'Thyroid Ultrasonography & Metabolic Disorders',
    rating: 4.95,
    reviewCount: 350,
    hospitalAffiliation: 'Mayo Clinic Health System Fellow Alum',
    education: 'Perelman School of Medicine at University of Pennsylvania',
    yearsExperience: 14,
    npiNumber: '1748293012',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    consultationFee: 155,
    nextSlot: 'Today at 4:45 PM',
    availableToday: true,
    careFormats: ['virtual', 'in-person'],
    languages: ['English', 'Russian'],
    focusAreas: ['Thyroid Fine-Needle Aspiration', 'Insulin Resistance', 'Metabolic Syndrome', 'Hormone Optimization'],
    bio: 'Dedicated to root-cause endocrine medicine and direct lab biomarker analysis with proactive lifestyle integration.'
  },
  {
    id: 'dr-julian-alvarez',
    name: 'Dr. Julian Alvarez',
    credentials: 'MD, FAAFP',
    specialty: 'Direct Urgent & Internal Medicine',
    subSpecialty: 'Emergency Triage & Acute Primary Care',
    rating: 4.99,
    reviewCount: 615,
    hospitalAffiliation: 'UCSF Medical Center Clinical Instructor',
    education: 'UCLA David Geffen School of Medicine',
    yearsExperience: 11,
    npiNumber: '1192837402',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    consultationFee: 95,
    nextSlot: 'In 20 minutes',
    availableToday: true,
    careFormats: ['virtual', 'in-person'],
    languages: ['English', 'Spanish'],
    focusAreas: ['Acute Clinical Triage', 'Urgent Antibiotic Protocols', 'Respiratory Illness', 'Same-Day Diagnostics'],
    bio: 'Leader of our Direct Urgent On-Demand desk. Provides rapid clinical evaluations, prescription routing, and emergency escalation protocols.'
  },
  {
    id: 'dr-sarah-kaufman',
    name: 'Dr. Sarah Kaufman',
    credentials: 'MD, FAAN',
    specialty: 'Neurology & Headache Medicine',
    subSpecialty: 'Refractory Migraine & Neuropathy Management',
    rating: 4.94,
    reviewCount: 198,
    hospitalAffiliation: 'Mount Sinai Hospital Clinical Partner',
    education: 'Yale School of Medicine',
    yearsExperience: 15,
    npiNumber: '1628394012',
    photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
    consultationFee: 185,
    nextSlot: 'Tomorrow at 11:30 AM',
    availableToday: false,
    careFormats: ['virtual', 'in-person'],
    languages: ['English', 'German'],
    focusAreas: ['Migraine Prevention & CGRP Agents', 'Peripheral Neuropathy', 'Concussion Recovery', 'Restless Leg Syndrome'],
    bio: 'Specialist in cutting-edge migraine protocols and neuro-diagnostic evaluations with rapid turn-around direct scheduling.'
  }
];

export const PRICING_COMPARISONS: PricingComparison[] = [
  {
    id: 'p-1',
    category: 'Consultation',
    serviceName: 'Comprehensive Specialist Medical Consultation (45 Min)',
    cptCode: '99204 / 99205',
    clinicalDirectFee: 165,
    hospitalBillingAvg: 485,
    savingsPercentage: 66,
    includedItems: ['Full medical review with Board-Certified MD', 'Clinical treatment plan & digital visit note', 'E-Prescription directly to pharmacy', '30-day direct follow-up portal chat'],
    turnaround: 'Instant or Same-Day'
  },
  {
    id: 'p-2',
    category: 'Diagnostic Imaging',
    serviceName: 'High-Field 3T MRI (Lumbar Spine, Brain, or Joint - without contrast)',
    cptCode: '72148 / 70551',
    clinicalDirectFee: 395,
    hospitalBillingAvg: 2280,
    savingsPercentage: 83,
    includedItems: ['Complete 3T scan sequence', 'Board-Certified Radiologist written diagnostic report', 'DICOM digital imaging portal download', 'Follow-up clinical interpretation'],
    turnaround: 'Results in 24 hours'
  },
  {
    id: 'p-3',
    category: 'Diagnostic Imaging',
    serviceName: 'Diagnostic Low-Dose CT Scan (Chest, Abdomen or Pelvis)',
    cptCode: '71250 / 74176',
    clinicalDirectFee: 320,
    hospitalBillingAvg: 1850,
    savingsPercentage: 83,
    includedItems: ['Scan execution at accredited ACR facility', 'Stat radiologist review', 'Instant electronic charting integration'],
    turnaround: 'Results within 12 hours'
  },
  {
    id: 'p-4',
    category: 'Laboratory Panels',
    serviceName: 'Executive Direct Biomarker Panel (Lipid, CBC, CMP, HbA1c, Thyroid & Vitamin D)',
    cptCode: '80053 / 80061 / 84443',
    clinicalDirectFee: 75,
    hospitalBillingAvg: 420,
    savingsPercentage: 82,
    includedItems: ['CLIA-certified phlebotomy blood draw', '32 distinct metabolic & endocrine markers', 'Physician interpreted lab brief with visual charts', 'Direct download PDF'],
    turnaround: 'Results in 24-48 hours'
  },
  {
    id: 'p-5',
    category: 'Clinical Procedures',
    serviceName: 'Targeted Ultrasound-Guided Joint Corticosteroid Injection',
    cptCode: '20611',
    clinicalDirectFee: 210,
    hospitalBillingAvg: 950,
    savingsPercentage: 78,
    includedItems: ['Real-time high-resolution ultrasound guidance', 'Medical grade medication & sterile tray', 'Pre and post procedural examination', 'Post-procedure rehabilitation guidelines'],
    turnaround: 'In-clinic same day'
  },
  {
    id: 'p-6',
    category: 'Clinical Procedures',
    serviceName: 'Diagnostic Skin Biopsy with Histopathology Review',
    cptCode: '11104 / 88305',
    clinicalDirectFee: 185,
    hospitalBillingAvg: 680,
    savingsPercentage: 73,
    includedItems: ['Sterile punch/shave biopsy', 'Local anesthesia', 'Pathology lab analysis and microscopic cellular report', 'Suture removal if needed'],
    turnaround: 'Pathology in 3-5 days'
  }
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'loc-flagship',
    name: 'Clinical Direct — Metro Center Flagship',
    branchType: 'Regional Flagship',
    address: '450 Lexington Avenue, Suite 1200',
    city: 'New York',
    state: 'NY',
    zip: '10017',
    phone: '(212) 804-2273',
    liveWaitMinutes: 6,
    hours: 'Mon – Fri: 7:00 AM – 8:00 PM | Sat – Sun: 8:00 AM – 5:00 PM',
    amenities: ['On-site 3T MRI & Digital X-Ray', 'Immediate CLIA Phlebotomy Lab', 'Private Consultation Suites', 'Valet & Metro Transit Access'],
    imagingOnsite: true,
    labOnsite: true
  },
  {
    id: 'loc-westside',
    name: 'Clinical Direct — Westside Medical Pavilion',
    branchType: 'Specialty Outpost',
    address: '1820 Columbus Boulevard, Floor 4',
    city: 'New York',
    state: 'NY',
    zip: '10023',
    phone: '(212) 804-2274',
    liveWaitMinutes: 11,
    hours: 'Mon – Fri: 8:00 AM – 6:30 PM | Sat: 9:00 AM – 2:00 PM',
    amenities: ['Cardiovascular Echo Suite', 'Dermoscopy & Minor Procedure Room', 'Spine & Joint Assessment Center'],
    imagingOnsite: false,
    labOnsite: true
  },
  {
    id: 'loc-suburban',
    name: 'Clinical Direct — North River Diagnostic & Urgent',
    branchType: 'Diagnostic & Urgent',
    address: '920 High Ridge Park, Building C',
    city: 'White Plains',
    state: 'NY',
    zip: '10604',
    phone: '(914) 712-4090',
    liveWaitMinutes: 0,
    hours: 'Open 7 Days: 7:30 AM – 9:00 PM',
    amenities: ['Walk-in Urgent MD Triage', 'On-site Low-Dose CT & X-Ray', 'Express Bloodwork Lab', 'Dedicated Free Parking'],
    imagingOnsite: true,
    labOnsite: true
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    patientInitials: 'M. K.',
    date: 'Yesterday',
    rating: 5,
    doctorName: 'Dr. Adrian Vance',
    specialty: 'Cardiology',
    visitType: 'Virtual HD Video',
    waitTime: '3 minutes wait',
    comment: 'I spent 4 weeks trying to see a hospital cardiologist who wanted a referral plus $600 co-insurance. With Clinical Direct, Dr. Vance reviewed my ECG within 2 hours, ordered an outpatient echo for $240 flat, and gave me clear answers. Exceptional clinical care.',
    verifiedDirect: true
  },
  {
    id: 'rev-2',
    patientInitials: 'D. S.',
    date: '3 days ago',
    rating: 5,
    doctorName: 'Dr. Claire Chen',
    specialty: 'Dermatology',
    visitType: 'In-Clinic Center',
    waitTime: '5 minutes wait',
    comment: 'The Metro Flagship clinic is pristine and efficient. Dr. Chen checked two suspicious moles with dermatoscopy, did an immediate painless biopsy, and sent the specimen to pathology. Absolutely zero surprise hospital fees.',
    verifiedDirect: true
  },
  {
    id: 'rev-3',
    patientInitials: 'R. L.',
    date: 'Last week',
    rating: 5,
    doctorName: 'Dr. Julian Alvarez',
    specialty: 'Direct Urgent Care',
    visitType: 'Virtual HD Video',
    waitTime: 'Instant connect (8 mins)',
    comment: 'Had acute strep and severe throat swelling on a Sunday evening. Connected directly with Dr. Alvarez, got the amoxicillin prescription transmitted to my 24h pharmacy within 10 minutes. A breath of fresh air.',
    verifiedDirect: true
  },
  {
    id: 'rev-4',
    patientInitials: 'T. B.',
    date: '2 weeks ago',
    rating: 5,
    doctorName: 'Dr. Marcus Hayes',
    specialty: 'Orthopedics',
    visitType: 'In-Clinic Center',
    waitTime: '7 minutes wait',
    comment: 'Tore my meniscus playing soccer. Dr. Hayes reviewed my MRI disc live on the high-def screen with me and explained every detail. Conservative recovery plan saved me from unnecessary surgery. True clinician integrity.',
    verifiedDirect: true
  }
];

export const DEMO_CLINICAL_NOTES: ClinicalNote[] = [
  {
    id: 'note-9901',
    date: 'October 24, 2026',
    specialistName: 'Dr. Adrian Vance, MD',
    specialty: 'Preventive Cardiology',
    chiefComplaint: 'Follow-up evaluation of borderline elevated blood pressure (138/88) and family history of early CAD.',
    assessmentPlan: '1. Stage 1 Essential Hypertension: Initiated Telmisartan 20mg daily.\n2. Dyslipidemia Screening: Ordered Direct Comprehensive Lipid Profile.\n3. Lifestyle: Target DASH protocol, sodium <2000mg/day, home BP logging twice daily.',
    icd10Codes: [
      { code: 'I10', description: 'Essential (primary) hypertension' },
      { code: 'Z82.49', description: 'Family history of ischemic heart disease' }
    ],
    vitals: { bp: '134/84 mmHg', hr: 68, spo2: '99%', temp: '98.4°F' },
    followUp: '4 weeks via Direct Virtual Consultation with home BP log.'
  }
];

export const DEMO_LAB_ORDERS: LabOrder[] = [
  {
    id: 'lab-401',
    orderDate: 'October 24, 2026',
    testName: 'Advanced Lipid Subfractionation & ApoB Panel',
    orderedBy: 'Dr. Adrian Vance, MD',
    status: 'Result Ready',
    resultSummary: 'Total Cholesterol: 194 mg/dL | LDL-C: 112 mg/dL | ApoB: 84 mg/dL (Optimal range). Full report validated.'
  },
  {
    id: 'lab-402',
    orderDate: 'October 28, 2026',
    testName: 'Comprehensive Metabolic Panel (CMP-14)',
    orderedBy: 'Dr. Adrian Vance, MD',
    status: 'Result Ready',
    resultSummary: 'eGFR >90 mL/min, Serum Creatinine 0.88 mg/dL, Fasting Glucose 92 mg/dL (Normal hepatic and renal markers).'
  }
];

export const DEMO_MESSAGES: DirectMessage[] = [
  {
    id: 'msg-1',
    sender: 'doctor',
    senderName: 'Dr. Adrian Vance',
    timestamp: 'Oct 25, 2026 • 10:14 AM',
    message: 'Hello Eleanor, I reviewed your lab results from yesterday. Your renal markers and liver enzymes are pristine. The ApoB is right where we want it. How is the Telmisartan feeling with your morning routine?'
  },
  {
    id: 'msg-2',
    sender: 'patient',
    senderName: 'Eleanor Vance',
    timestamp: 'Oct 25, 2026 • 11:30 AM',
    message: 'Good morning Dr. Vance! Feeling great, no lightheadedness. My morning readings for the past two days have been 124/80 and 122/78.'
  },
  {
    id: 'msg-3',
    sender: 'doctor',
    senderName: 'Dr. Adrian Vance',
    timestamp: 'Oct 25, 2026 • 12:05 PM',
    message: 'That is outstanding response. Continue the daily log. Feel free to ping here anytime if you notice any changes before our 4-week check-in.'
  }
];

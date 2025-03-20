// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: 'general-checkup',
    title: 'General Checkup',
    description: 'Comprehensive health assessment and physical examination',
    features: [
      'Full body checkup',
      'Vital signs monitoring',
      'Lab test recommendations'
    ],
    process: [
      { step: 1, title: "Book Appointment", description: "Select date/time" },
      { step: 2, title: "Health Assessment", description: "Complete pre-checkup form" },
      { step: 3, title: "Clinic Visit", description: "In-person examination" }
    ]
  },
  {
    id: 'mental-health',
    title: 'Mental Health Counseling',
    description: 'Professional psychological support services',
    features: [
      'Stress management',
      'Anxiety/depression support',
      'Confidential sessions'
    ],
    process: [
      { step: 1, title: "Initial Screening", description: "Brief intake form" },
      { step: 2, title: "Session Booking", description: "Choose specialist" },
      { step: 3, title: "Consultation", description: "Virtual/in-person options" }
    ]
  },
  {
    id: 'dental-care',
    title: 'Dental Care Services',
    description: 'Complete dental health solutions and preventive care',
    features: [
      "Routine dental checkups",
      "Emergency tooth repair",
      "Oral hygiene guidance",
      "Cavity prevention"
    ],
    process: [
      { step: 1, title: "Initial Screening", description: "Digital X-ray available" },
      { step: 2, title: "Treatment Plan", description: "Personalized dental care strategy" },
      { step: 3, title: "Procedure Booking", description: "Flexible scheduling" },
      { step: 4, title: "Follow-up Care", description: "Maintenance recommendations" }
    ]
  },
  {
    id: 'vaccinations',
    title: 'Vaccination Services',
    description: 'Immunization services and preventive healthcare',
    features: [
      "CDC-recommended vaccines",
      "Travel immunizations",
      "Flu shots",
      "Vaccination records"
    ],
    process: [
      { step: 1, title: "Consultation", description: "Review medical history" },
      { step: 2, title: "Schedule", description: "Choose vaccine type" },
      { step: 3, title: "Administration", description: "Certified nurses" },
      { step: 4, title: "Digital Certificate", description: "Instant download" }
    ]
  }
];
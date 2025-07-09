const personas = {
  "mental-health": {
    title: "Mental Health Staffing Solutions",
    metaDescription: "Connect with top-tier mental health professionals ready to serve your community.",
    headline: "Instantly find top <em>Mental Health</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Clinic or Practice Name",
    selectPlaceholder: "What role are you hiring for?",
    selectOptions: [
      { value: "therapist", label: "Licensed Therapist" },
      { value: "social-worker", label: "Clinical Social Worker" },
      { value: "case-manager", label: "Case Manager" },
      { value: "psychiatrist", label: "Psychiatrist" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "You'll receive a shortlist within 24 hours.",
    pricingTitle: "Mental Health Pricing Plans",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Email support", "Basic candidate screening"]
      },
      {
        title: "Premium", 
        price: "$1250/mo",
        description: "High-volume clinics",
        features: ["Priority listing", "Candidate texting", "CRM export", "Dedicated account manager", "Advanced screening"]
      }
    ],
    exampleCandidate: {
      name: "Sarah Mitchell",
      role: "Licensed Clinical Social Worker",
      location: "Portland, OR",
      image: "/images/sarah-mitchell.jpg",
      bio: "Sarah is a licensed clinical social worker with 8+ years specializing in trauma-informed therapy and substance abuse recovery. She has extensive experience in both individual and group therapy settings, with particular expertise in CBT and EMDR techniques. Sarah has worked in community mental health centers and private practice, serving diverse populations including veterans and adolescents."
    }
  },

  "rural-nursing-home": {
    title: "Rural Nursing Home Staffing",
    metaDescription: "Staff your rural nursing home with compassionate CNAs and RNs.",
    headline: "Instantly find top <em>Nursing Home</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Facility Name",
    selectPlaceholder: "What role are you hiring for?",
    selectOptions: [
      { value: "cna", label: "Certified Nursing Assistant" },
      { value: "rn", label: "Registered Nurse" },
      { value: "lpn", label: "Licensed Practical Nurse" },
      { value: "med-tech", label: "Medication Technician" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "We prioritize availability in rural counties.",
    pricingTitle: "Nursing Home Staffing Packages",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Rural sourcing priority", "Text/email alerts"]
      },
      {
        title: "Premium",
        price: "$1250/mo",
        description: "High-volume facilities",
        features: ["Priority listing", "Candidate texting", "CRM export", "Auto-matching", "Retention analytics"]
      }
    ],
    exampleCandidate: {
      name: "Maria Rodriguez",
      role: "Certified Nursing Assistant",
      location: "Great Bend, KS",
      image: "/images/maria-rodriguez.jpg",
      bio: "Maria is a certified nursing assistant with 6+ years of experience in long-term care facilities. She specializes in dementia and Alzheimer's care, with certifications in CPR and first aid. Maria is known for her compassionate bedside manner and has received multiple resident and family commendations. She has experience with electronic health records and medication assistance protocols."
    }
  },

  "dental-office": {
    title: "Dental Staffing Made Simple", 
    metaDescription: "Fast-track hiring for dental assistants, hygienists, and front desk staff.",
    headline: "Instantly find top <em>Dental Office</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Practice Name",
    selectPlaceholder: "Role you're hiring for",
    selectOptions: [
      { value: "assistant", label: "Dental Assistant" },
      { value: "hygienist", label: "Dental Hygienist" },
      { value: "admin", label: "Front Office Coordinator" },
      { value: "office-manager", label: "Office Manager" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "Temp and perm options available.",
    pricingTitle: "Dental Hiring Tiers",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Basic screening", "Email support"]
      },
      {
        title: "Premium",
        price: "$1250/mo", 
        description: "High-volume clinics",
        features: ["Priority listing", "Candidate texting", "CRM export", "Advanced screening", "Dedicated support"]
      }
    ],
    exampleCandidate: {
      name: "Kim Tran",
      role: "Dental Hygienist",
      location: "Fresno, CA",
      image: "/images/kim-tran.jpg",
      bio: "Kim has over 10 years of experience in general and pediatric dentistry. She's known for her patient communication skills and speed, performing 14+ cleanings/day at her last clinic. Kim is certified in local anesthesia administration and has experience with digital radiography, periodontal therapy, and patient education. She's proficient with Dentrix and Eaglesoft practice management systems."
    }
  },

  "physical-therapy": {
    title: "Physical Therapy Staffing",
    metaDescription: "Hire PTs and PTAs to keep your caseload moving.",
    headline: "Instantly find top <em>Physical Therapy</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Clinic or Rehab Center Name",
    selectPlaceholder: "Who do you need to hire?",
    selectOptions: [
      { value: "pt", label: "Physical Therapist (DPT)" },
      { value: "pta", label: "Physical Therapist Assistant" },
      { value: "admin", label: "Clinic Administrator" },
      { value: "aide", label: "Physical Therapy Aide" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "Turnaround within 2 business days.",
    pricingTitle: "Physical Therapy Plans",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Candidate inbox", "Basic screening"]
      },
      {
        title: "Premium",
        price: "$1250/mo",
        description: "High-volume clinics",
        features: ["Priority listing", "Candidate texting", "CRM export", "Onboarding tracking", "Dedicated rep"]
      }
    ],
    exampleCandidate: {
      name: "Jason Miller",
      role: "Doctor of Physical Therapy",
      location: "Spokane, WA", 
      image: "/images/jason-miller.jpg",
      bio: "Jason has practiced for 7 years specializing in outpatient orthopedics and sports medicine. He's certified in dry needling, manual therapy, and functional movement screening. Jason has experience treating post-surgical patients, athletes, and chronic pain conditions. He holds a DPT from Eastern Washington University and maintains continuing education in the latest evidence-based treatment techniques."
    }
  },

  "urgent-care": {
    title: "Urgent Care Staffing",
    metaDescription: "Staff your UC center with flexible, credentialed professionals.",
    headline: "Instantly find top <em>Urgent Care</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Center Name",
    selectPlaceholder: "Who do you need?",
    selectOptions: [
      { value: "ma", label: "Medical Assistant" },
      { value: "np", label: "Nurse Practitioner" },
      { value: "front-desk", label: "Front Desk Coordinator" },
      { value: "pa", label: "Physician Assistant" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "Same-day sourcing available.",
    pricingTitle: "Urgent Care Plans",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Weekend coverage sourcing", "Basic screening"]
      },
      {
        title: "Premium",
        price: "$1250/mo",
        description: "High-volume centers",
        features: ["Priority listing", "Candidate texting", "CRM export", "Real-time candidate alerts", "Dedicated support"]
      }
    ],
    exampleCandidate: {
      name: "Meghan Patel",
      role: "Nurse Practitioner",
      location: "Columbus, OH",
      image: "/images/meghan-patel.jpg",
      bio: "Meghan has 9 years in acute and urgent care, treating 25–35 patients daily. She is DOT-certified, experienced in pediatric and geriatric triage, and trained in I&D, sutures, and sports injuries. Meghan has experience with Epic and Cerner EHR systems and maintains certifications in ACLS and PALS. She's skilled in point-of-care testing and minor procedures."
    }
  },

  "senior-living": {
    title: "Senior Living Staffing",
    metaDescription: "Reliable caregivers and activity staff for your community.",
    headline: "Instantly find top <em>Senior Living</em> talent.",
    subtext: "A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.",
    companyPlaceholder: "Community Name",
    selectPlaceholder: "What type of role?",
    selectOptions: [
      { value: "caregiver", label: "Caregiver" },
      { value: "med-tech", label: "Medication Technician" },
      { value: "concierge", label: "Concierge / Front Desk" },
      { value: "activities", label: "Activities Coordinator" }
    ],
    ctaText: "Purchase Essentials",
    formNote: "Flexible and full-time roles available.",
    pricingTitle: "Senior Living Plans",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails", "Basic screening", "Email support"]
      },
      {
        title: "Premium",
        price: "$1250/mo",
        description: "Large communities",
        features: ["Priority listing", "Candidate texting", "CRM export", "Behavioral screening", "Live interview scheduling"]
      }
    ],
    exampleCandidate: {
      name: "Andrea Lewis",
      role: "Medication Technician",
      location: "Tucson, AZ",
      image: "/images/andrea-lewis.jpg",
      bio: "Andrea has 7 years of experience in assisted living and memory care. Certified in medication administration and CPR, she's known for her calm presence, accuracy, and exceptional attendance record. Andrea has experience with electronic medication administration records (eMAR) and has specialized training in dementia care and fall prevention protocols."
    }
  }
};

export { personas };
export default personas;

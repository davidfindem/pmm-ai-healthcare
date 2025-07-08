const personas = {
  "mental-health": {
    title: "Mental Health Staffing Solutions",
    metaDescription: "Connect with top-tier mental health professionals ready to serve your community.",
    headline: "Hire qualified <em>Mental Health</em> professionals instantly",
    subtext: "We source licensed therapists, social workers, and support staff for behavioral health organizations.",
    companyPlaceholder: "Clinic or Practice Name",
    selectPlaceholder: "What role are you hiring for?",
    selectOptions: [
      { value: "therapist", label: "Therapist" },
      { value: "social-worker", label: "Social Worker" },
      { value: "case-manager", label: "Case Manager" }
    ],
    ctaText: "Get Mental Health Candidates",
    formNote: "You'll receive a shortlist within 24 hours.",
    pricingTitle: "Mental Health Pricing Plans",
    pricing: [
      {
        title: "Basic",
        price: "$999/mo",
        description: "Ideal for small practices",
        features: ["Up to 2 hires", "Pre-vetted profiles", "Email support"]
      },
      {
        title: "Pro",
        price: "$1999/mo",
        description: "Best for clinics and networks",
        features: ["Up to 5 hires", "Phone support", "Dedicated success manager"]
      }
    ],
    exampleCandidate: {
      name: "Sarah King",
      role: "Licensed Clinical Social Worker",
      location: "Des Moines, IA",
      image: "/images/sarah-king.jpg",
      bio: "Sarah has 8+ years of experience supporting individuals with trauma and substance use recovery. She specializes in CBT and trauma-informed therapy, working across both outpatient and residential settings."
    }
  },
  
  "rural-nursing-home": {
    title: "Rural Nursing Home Staffing",
    metaDescription: "Staff your rural nursing home with compassionate CNAs and RNs.",
    headline: "Find dependable <em>Nursing Home</em> staff today",
    subtext: "We help rural facilities hire CNAs, RNs, and LPNs with experience in long-term care.",
    companyPlaceholder: "Facility Name",
    selectPlaceholder: "What role are you hiring for?",
    selectOptions: [
      { value: "cna", label: "Certified Nursing Assistant" },
      { value: "rn", label: "Registered Nurse" },
      { value: "lpn", label: "Licensed Practical Nurse" }
    ],
    ctaText: "Get Nursing Staff",
    formNote: "We prioritize availability in rural counties.",
    pricingTitle: "Staffing Packages",
    pricing: [
      {
        title: "Starter",
        price: "$899/mo",
        description: "Great for facilities under 50 beds",
        features: ["Unlimited job posts", "Rural sourcing priority", "Text/email alerts"]
      },
      {
        title: "Complete",
        price: "$1799/mo",
        description: "Comprehensive support",
        features: ["3+ hires/mo", "Auto-matching", "Retention analytics"]
      }
    ],
    exampleCandidate: {
      name: "Luis Ortega",
      role: "Certified Nursing Assistant",
      location: "Great Bend, KS",
      image: "/images/luis-ortega.jpg",
      bio: "Luis has served in skilled nursing for 5 years. Known for his bedside manner and reliability, he’s completed over 1,200 hours of dementia care support and regularly volunteers at the local VA."
    }
  },

  "dental-office": {
    title: "Dental Staffing Made Simple",
    metaDescription: "Fast-track hiring for dental assistants, hygienists, and front desk staff.",
    headline: "Quickly staff your <em>Dental Office</em>",
    subtext: "Whether you need temp hygienists or full-time front office coordinators, we can help.",
    companyPlaceholder: "Practice Name",
    selectPlaceholder: "Role you're hiring for",
    selectOptions: [
      { value: "assistant", label: "Dental Assistant" },
      { value: "hygienist", label: "Dental Hygienist" },
      { value: "admin", label: "Front Office" }
    ],
    ctaText: "Find Dental Candidates",
    formNote: "Temp and perm options available.",
    pricingTitle: "Dental Hiring Tiers",
    pricing: [
      {
        title: "Essentials",
        price: "$750/mo",
        description: "Basic staffing help",
        features: ["Up to 2 active listings", "Weekly match emails"]
      },
      {
        title: "Premium",
        price: "$1250/mo",
        description: "High-volume clinics",
        features: ["Priority listing", "Candidate texting", "CRM export"]
      }
    ],
    exampleCandidate: {
      name: "Kim Tran",
      role: "Dental Hygienist",
      location: "Fresno, CA",
      image: "/images/kim-tran.jpg",
      bio: "Kim has over 10 years of experience in general and pediatric dentistry. She’s known for her patient communication skills and speed, performing 14+ cleanings/day at her last clinic."
    }
  },

  "physical-therapy": {
    title: "Physical Therapy Staffing",
    metaDescription: "Hire PTs and PTAs to keep your caseload moving.",
    headline: "Grow your <em>PT practice</em> without the staffing headaches",
    subtext: "We match physical therapy providers with DPTs, aides, and front office talent.",
    companyPlaceholder: "Clinic or Rehab Center Name",
    selectPlaceholder: "Who do you need to hire?",
    selectOptions: [
      { value: "pt", label: "Physical Therapist" },
      { value: "pta", label: "PT Assistant" },
      { value: "admin", label: "Clinic Admin" }
    ],
    ctaText: "Get PT Candidates",
    formNote: "Turnaround within 2 business days.",
    pricingTitle: "Flexible Plans",
    pricing: [
      {
        title: "Lite",
        price: "$600/mo",
        description: "Solo & small practices",
        features: ["Candidate inbox", "2 hires/mo"]
      },
      {
        title: "Growth",
        price: "$1100/mo",
        description: "Multi-location clinics",
        features: ["4+ hires", "Onboarding tracking", "Dedicated rep"]
      }
    ],
    exampleCandidate: {
      name: "Jason Miller",
      role: "Doctor of Physical Therapy",
      location: "Spokane, WA",
      image: "/images/jason-miller.jpg",
      bio: "Jason has practiced for 6 years in outpatient ortho and neuro. He’s trained in dry needling, vestibular rehab, and chronic pain protocols. DPT from Eastern Washington University."
    }
  },

  "urgent-care": {
    title: "Urgent Care Staffing",
    metaDescription: "Staff your UC center with flexible, credentialed professionals.",
    headline: "Staff your <em>Urgent Care</em> center with confidence",
    subtext: "From reception to mid-levels, we help urgent care clinics stay fully staffed.",
    companyPlaceholder: "Center Name",
    selectPlaceholder: "Who do you need?",
    selectOptions: [
      { value: "ma", label: "Medical Assistant" },
      { value: "np", label: "Nurse Practitioner" },
      { value: "front-desk", label: "Front Desk" }
    ],
    ctaText: "Get Urgent Care Help",
    formNote: "Same-day sourcing available.",
    pricingTitle: "Urgent Care Plans",
    pricing: [
      {
        title: "Fast Start",
        price: "$900/mo",
        description: "Fill key roles fast",
        features: ["2 job slots", "Weekend coverage sourcing"]
      },
      {
        title: "All-In",
        price: "$1650/mo",
        description: "Comprehensive staffing",
        features: ["Unlimited roles", "Real-time candidate alerts"]
      }
    ],
    exampleCandidate: {
      name: "Meghan Patel",
      role: "Nurse Practitioner",
      location: "Columbus, OH",
      image: "/images/meghan-patel.jpg",
      bio: "Meghan has 9 years in acute and urgent care, treating 25–35 patients daily. She is DOT-certified, experienced in pediatric and geriatric triage, and trained in I&D, sutures, and sports injuries."
    }
  },

  "senior-living": {
    title: "Senior Living Staffing",
    metaDescription: "Reliable caregivers and activity staff for your community.",
    headline: "Easily hire for <em>Senior Living</em> roles",
    subtext: "We supply assisted living centers with caregivers, med techs, and concierge staff.",
    companyPlaceholder: "Community Name",
    selectPlaceholder: "What type of role?",
    selectOptions: [
      { value: "caregiver", label: "Caregiver" },
      { value: "med-tech", label: "Medication Technician" },
      { value: "concierge", label: "Concierge / Front Desk" }
    ],
    ctaText: "Start Hiring",
    formNote: "Flexible and full-time roles available.",
    pricingTitle: "Care Community Plans",
    pricing: [
      {
        title: "Standard",
        price: "$800/mo",
        description: "Typical communities",
        features: ["3 hires/mo", "Basic screening"]
      },
      {
        title: "Enhanced",
        price: "$1450/mo",
        description: "Memory care and large orgs",
        features: ["Behavioral screening", "Live interview scheduling"]
      }
    ],
    exampleCandidate: {
      name: "Andrea Lewis",
      role: "Medication Technician",
      location: "Tucson, AZ",
      image: "/images/andrea-lewis.jpg",
      bio: "Andrea has 7 years of experience in assisted living. Certified in medication administration and CPR, she’s known for her calm presence, accuracy, and 100% attendance record in the past 2 years."
    }
  }
};

export default personas;

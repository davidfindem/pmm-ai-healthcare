// File: data/personas.js

export const personas = {
  "nursing-home": {
    title: "Staffing for Nursing Homes",
    metaDescription: "Hire compassionate and experienced professionals for your nursing home.",
    headline: "Your <strong>ideal caregiver</strong> is just a conversation away",
    subtext: "Reliable, vetted staff who care deeply about elder care. Find the right fit for your residents, fast.",
    companyPlaceholder: "Nursing Home Name",
    selectPlaceholder: "What roles are you hiring for?",
    selectOptions: [
      { label: "Registered Nurse (RN)", value: "rn" },
      { label: "Certified Nursing Assistant (CNA)", value: "cna" },
      { label: "LPN", value: "lpn" }
    ],
    ctaText: "Get Qualified Candidates",
    pricingTitle: "Transparent Pricing",
    pricing: [
      {
        title: "Standard Plan",
        price: "$249/mo",
        description: "For ongoing hiring needs",
        features: ["Unlimited job posts", "Vetted caregiver pool", "Support within 24 hours"]
      },
      {
        title: "On-Demand",
        price: "$399/listing",
        description: "Pay-as-you-go access to talent",
        features: ["Single job post", "7-day candidate window"]
      }
    ],
    formNote: "We respond to all inquiries within 1 business day.",
    candidate: {
      name: "Lily Thompson",
      title: "Certified Nursing Assistant",
      experience: "8 years of elder care experience",
      bio: "Lily is a deeply empathetic CNA who has worked in both small residential homes and large nursing facilities. She is known for building trust with patients quickly and has training in dementia care and mobility assistance.",
      image: "/images/personas/lily.png"
    }
  },

  "dental-office": {
    title: "Staffing for Dental Practices",
    metaDescription: "Source qualified dental professionals with speed and accuracy.",
    headline: "Find <strong>top-tier dental staff</strong> without the search hassle",
    subtext: "Hygienists, assistants, front office staff — we’ll help you hire who you need, quickly.",
    companyPlaceholder: "Dental Office Name",
    selectPlaceholder: "Select dental roles needed",
    selectOptions: [
      { label: "Dental Hygienist", value: "hygienist" },
      { label: "Dental Assistant", value: "assistant" },
      { label: "Front Desk Receptionist", value: "receptionist" }
    ],
    ctaText: "Request Dental Staff",
    pricingTitle: "Simple, Straightforward Plans",
    pricing: [
      {
        title: "Basic",
        price: "$199/mo",
        description: "Ideal for single-location practices",
        features: ["5 active job posts", "Curated dental candidates"]
      },
      {
        title: "Premium",
        price: "$349/mo",
        description: "Expanded tools for multi-location clinics",
        features: ["Unlimited job posts", "Automated screening"]
      }
    ],
    formNote: "Tell us what you need — we’ll take care of the outreach.",
    candidate: {
      name: "Marcus Reed",
      title: "Registered Dental Hygienist",
      experience: "5 years experience in general & pediatric dentistry",
      bio: "Marcus brings a gentle chairside manner and strong clinical hygiene skills. He’s passionate about patient education and preventative care, and previously worked in both solo and group practice settings.",
      image: "/images/personas/marcus.png"
    }
  },

  "urgent-care": {
    title: "Urgent Care Staffing",
    metaDescription: "Staff your urgent care facility with licensed professionals fast.",
    headline: "Your <strong>next great clinician</strong> is already in our network",
    subtext: "Nurses, medical assistants, and x-ray techs — all ready for flexible urgent care work.",
    companyPlaceholder: "Clinic Name",
    selectPlaceholder: "Roles needed for your clinic",
    selectOptions: [
      { label: "Medical Assistant", value: "ma" },
      { label: "Nurse Practitioner", value: "np" },
      { label: "Radiologic Technologist", value: "xray" }
    ],
    ctaText: "See Available Talent",
    pricingTitle: "Built for Fast-Paced Needs",
    pricing: [
      {
        title: "Flexible Access",
        price: "$299/month",
        description: "Great for fluctuating staffing needs",
        features: ["Unlimited hires", "Drop-in shift coverage"]
      }
    ],
    formNote: "We specialize in rapid deployment within 24 hours.",
    candidate: {
      name: "Jasmine Ortiz",
      title: "Medical Assistant",
      experience: "4 years in urgent care environments",
      bio: "Jasmine thrives in fast-paced settings. She’s cross-trained in front desk triage and phlebotomy, and has a reputation for staying calm under pressure — ideal for busy urgent care centers.",
      image: "/images/personas/jasmine.png"
    }
  }
}

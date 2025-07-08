export const personas = {
  'rural-nursing-home': {
    title: 'Rural Nursing Home',
    metaDescription: 'Find certified CNAs and LPNs for rural nursing homes',
    backgroundColor: '#f8f4ff',
    headline: 'Solve your <em>rural nursing home</em> staffing crisis',
    subtext: 'Instead of sifting through stacks of unqualified resumes, focus on proactively engaging with high-potential CNAs and LPNs. Spend your time on meaningful conversations, not unnecessary screenings.',
    ctaText: 'Find CNAs near you',
    formTitle: 'Start finding qualified CNAs today',
    companyPlaceholder: 'Nursing Home Name',
    selectPlaceholder: 'How many CNAs do you need to hire?',
    selectOptions: [
      { value: '1-3', label: '1-3 CNAs' },
      { value: '4-7', label: '4-7 CNAs' },
      { value: '8-15', label: '8-15 CNAs' },
      { value: '15+', label: '15+ CNAs' }
    ],
    formNote: 'No credit card required. Start finding CNAs in 5 minutes.',
    pricingTitle: 'Simple pricing for nursing homes',
    candidate: {
      name: 'Maria<br/>Rodriguez',
      title: 'Certified<br/>Nursing<br/>Assistant',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Compassionate CNA with 5+ years of experience in rural healthcare settings. Certified in dementia care and wound management. Passionate about providing quality care in close-knit communities where relationships matter.',
      iconColor: '#dcfce7',
      experience: {
        title: 'Certified Nursing Assistant',
        duration: 'Jan 2019 - Present (5 years)',
        company: 'Sunset Manor Nursing Home, Rural County',
        description: 'Provided comprehensive direct patient care including vital signs monitoring, medication assistance, and activities of daily living support for 25+ residents in rural nursing facility. Specialized in dementia care and fall prevention protocols.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$99',
        description: 'Best for small nursing homes',
        features: ['All free features', 'Contact up to 50 CNAs, per month', 'Email integration'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$250',
        description: 'Great for multi-location facilities',
        features: ['All features in Essentials', 'Contact up to 200 CNAs, per month', 'Search insights reporting'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$600',
        description: 'Built for healthcare networks',
        features: ['All features in Enhanced', 'Contact up to 600 CNAs, per month', 'ATS integrations', 'Priority support'],
        featured: false
      }
    ]
  },

  'dental-office': {
    title: 'Dental Office',
    metaDescription: 'Find qualified dental hygienists and dental assistants',
    backgroundColor: '#f0f9ff',
    headline: 'Find <em>qualified dental hygienists</em> fast',
    subtext: 'Stop struggling with dental hygienist shortages. Connect with certified professionals who are ready to join your practice. Focus on patient care, not endless recruiting.',
    ctaText: 'Find hygienists now',
    formTitle: 'Start hiring dental professionals today',
    companyPlaceholder: 'Dental Practice Name',
    selectPlaceholder: 'How many dental professionals do you need?',
    selectOptions: [
      { value: '1', label: '1 Hygienist' },
      { value: '2-3', label: '2-3 Hygienists' },
      { value: '4-6', label: '4-6 Hygienists' },
      { value: 'other', label: 'Hygienists + Assistants' }
    ],
    formNote: 'No credit card required. Start finding hygienists in 5 minutes.',
    pricingTitle: 'Simple pricing for dental practices',
    candidate: {
      name: 'Jennifer<br/>Kim',
      title: 'Licensed<br/>Dental<br/>Hygienist',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Licensed dental hygienist with 7+ years of experience in family and cosmetic dentistry. Certified in local anesthesia administration and nitrous oxide monitoring. Passionate about patient education and preventive care.',
      iconColor: '#dbeafe',
      experience: {
        title: 'Licensed Dental Hygienist',
        duration: 'Mar 2017 - Present (7 years)',
        company: 'Bright Smiles Family Dentistry, Metro Area',
        description: 'Provided comprehensive dental hygiene services including periodontal therapy, patient education, and preventive care for 25+ patients daily. Specialized in pediatric hygiene and anxiety management techniques.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$149',
        description: 'Perfect for single practice',
        features: ['Contact up to 75 hygienists/month', 'Email integration', 'Basic reporting'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$299',
        description: 'Great for multi-location practices',
        features: ['Contact up to 200 hygienists/month', 'Advanced analytics', 'Priority support'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$699',
        description: 'Built for dental groups',
        features: ['Contact up to 500 hygienists/month', 'Practice management integration', 'Dedicated support'],
        featured: false
      }
    ]
  },

  'urgent-care': {
    title: 'Urgent Care',
    metaDescription: 'Find certified medical assistants and nurses for urgent care',
    backgroundColor: '#fff7ed',
    headline: 'Staff your <em>urgent care</em> with certified professionals',
    subtext: 'Find medical assistants and nurses who thrive in fast-paced urgent care environments. Get certified professionals who can handle anything from minor injuries to complex triage.',
    ctaText: 'Find medical staff now',
    formTitle: 'Start staffing your urgent care today',
    companyPlaceholder: 'Urgent Care Center Name',
    selectPlaceholder: 'How many medical professionals do you need?',
    selectOptions: [
      { value: '1-2', label: '1-2 Medical Assistants' },
      { value: '3-5', label: '3-5 Medical Assistants' },
      { value: '6-10', label: '6-10 Medical Assistants' },
      { value: 'mixed', label: 'MAs + Nurses + Support Staff' }
    ],
    formNote: 'No credit card required. Start finding medical staff in 5 minutes.',
    pricingTitle: 'Simple pricing for urgent care centers',
    candidate: {
      name: 'Marcus<br/>Johnson',
      title: 'Certified<br/>Medical<br/>Assistant',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Certified Medical Assistant with 5+ years in urgent care and emergency settings. Skilled in patient triage, EKG administration, and phlebotomy. Thrives in high-pressure environments with excellent multitasking abilities.',
      iconColor: '#fed7d7',
      experience: {
        title: 'Certified Medical Assistant',
        duration: 'Jun 2019 - Present (5 years)',
        company: 'CareNow Urgent Care, Metro Area',
        description: 'Provided direct patient care in fast-paced urgent care setting. Performed vital signs, patient intake, wound care, and assisted with minor procedures. Managed up to 40 patients daily with excellent patient satisfaction scores.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$199',
        description: 'Perfect for single location',
        features: ['Contact up to 100 medical staff/month', 'Email integration', 'Basic reporting'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$399',
        description: 'Great for multi-location centers',
        features: ['Contact up to 250 medical staff/month', 'Advanced analytics', 'Priority support'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$799',
        description: 'Built for urgent care networks',
        features: ['Contact up to 600 medical staff/month', 'EMR integration', 'Dedicated support'],
        featured: false
      }
    ]
  },

  'physical-therapy': {
    title: 'Physical Therapy',
    metaDescription: 'Find licensed physical therapists and therapy assistants',
    backgroundColor: '#f0fdf4',
    headline: 'Hire <em>physical therapists</em> and assistants',
    subtext: 'Connect with licensed PTs and therapy assistants specializing in rehabilitation and recovery. Find professionals who are passionate about helping patients regain mobility and independence.',
    ctaText: 'Find therapists now',
    formTitle: 'Start hiring therapy professionals today',
    companyPlaceholder: 'Physical Therapy Clinic Name',
    selectPlaceholder: 'How many therapy professionals do you need?',
    selectOptions: [
      { value: '1', label: '1 Physical Therapist' },
      { value: '2-3', label: '2-3 Physical Therapists' },
      { value: '4-6', label: '4-6 Therapy Staff' },
      { value: 'mixed', label: 'PTs + PTAs + Support Staff' }
    ],
    formNote: 'No credit card required. Start finding therapists in 5 minutes.',
    pricingTitle: 'Simple pricing for therapy clinics',
    candidate: {
      name: 'Dr. Sarah<br/>Williams',
      title: 'Licensed<br/>Physical<br/>Therapist',
      photo: 'https://images.unsplash.com/photo-1594824609090-96e1ae6c0d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Licensed Physical Therapist with 8+ years specializing in orthopedic and sports medicine rehabilitation. Board certified in manual therapy techniques. Committed to evidence-based practice and patient-centered care.',
      iconColor: '#dcfce7',
      experience: {
        title: 'Licensed Physical Therapist',
        duration: 'May 2016 - Present (8 years)',
        company: 'Restore Physical Therapy, Metro Area',
        description: 'Provided comprehensive rehabilitation services for post-surgical, sports injury, and chronic pain patients. Developed individualized treatment plans and achieved 95% patient satisfaction rating. Mentored junior staff and PTAs.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$249',
        description: 'Perfect for small clinics',
        features: ['Contact up to 50 therapists/month', 'Email integration', 'Basic reporting'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$449',
        description: 'Great for multi-location clinics',
        features: ['Contact up to 150 therapists/month', 'Advanced analytics', 'Priority support'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$849',
        description: 'Built for therapy networks',
        features: ['Contact up to 400 therapists/month', 'EMR integration', 'Dedicated support'],
        featured: false
      }
    ]
  },

  'mental-health': {
    title: 'Mental Health',
    metaDescription: 'Find licensed mental health professionals and counselors',
    backgroundColor: '#faf5ff',
    headline: 'Find <em>licensed mental health</em> professionals',
    subtext: 'Hire therapists, counselors, and mental health specialists for your practice or clinic. Connect with compassionate professionals dedicated to improving mental health and wellness in your community.',
    ctaText: 'Find therapists now',
    formTitle: 'Start hiring mental health professionals today',
    companyPlaceholder: 'Mental Health Practice Name',
    selectPlaceholder: 'How many mental health professionals do you need?',
    selectOptions: [
      { value: '1', label: '1 Therapist/Counselor' },
      { value: '2-3', label: '2-3 Therapists/Counselors' },
      { value: '4-8', label: '4-8 Mental Health Staff' },
      { value: 'mixed', label: 'Therapists + Support Staff' }
    ],
    formNote: 'No credit card required. Start finding mental health professionals in 5 minutes.',
    pricingTitle: 'Simple pricing for mental health practices',
    candidate: {
      name: 'Dr. Amanda<br/>Chen',
      title: 'Licensed<br/>Clinical<br/>Social Worker',
      photo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Licensed Clinical Social Worker with 6+ years specializing in trauma therapy and anxiety disorders. Certified in EMDR and cognitive behavioral therapy. Passionate about providing culturally responsive mental health care.',
      iconColor: '#e9d5ff',
      experience: {
        title: 'Licensed Clinical Social Worker',
        duration: 'Aug 2018 - Present (6 years)',
        company: 'Mindful Wellness Center, Metro Area',
        description: 'Provided individual and group therapy for adults with trauma, anxiety, and depression. Conducted comprehensive psychosocial assessments and developed evidence-based treatment plans. Maintained 98% client retention rate.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$199',
        description: 'Perfect for solo practitioners',
        features: ['Contact up to 40 therapists/month', 'Email integration', 'Basic reporting'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$399',
        description: 'Great for group practices',
        features: ['Contact up to 120 therapists/month', 'Advanced analytics', 'Priority support'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$749',
        description: 'Built for mental health networks',
        features: ['Contact up to 300 therapists/month', 'EHR integration', 'Dedicated support'],
        featured: false
      }
    ]
  },

  'senior-living': {
    title: 'Senior Living',
    metaDescription: 'Find certified caregivers and activity coordinators for senior living communities',
    backgroundColor: '#f0f8ff',
    headline: 'Build your <em>senior living</em> dream team',
    subtext: 'Find compassionate caregivers, activity coordinators, and support staff who understand the unique needs of senior living communities. Connect with professionals dedicated to enhancing quality of life for residents.',
    ctaText: 'Find caregivers now',
    formTitle: 'Start building your senior living team today',
    companyPlaceholder: 'Senior Living Community Name',
    selectPlaceholder: 'How many caregivers do you need?',
    selectOptions: [
      { value: '1-3', label: '1-3 Caregivers' },
      { value: '4-8', label: '4-8 Caregivers' },
      { value: '9-15', label: '9-15 Care Staff' },
      { value: 'mixed', label: 'Caregivers + Activity Staff + Support' }
    ],
    formNote: 'No credit card required. Start finding quality caregivers in 5 minutes.',
    pricingTitle: 'Simple pricing for senior living communities',
    candidate: {
      name: 'Patricia<br/>Williams',
      title: 'Certified<br/>Personal Care<br/>Assistant',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80',
      bio: 'Certified Personal Care Assistant with 9+ years in senior living and memory care. Specialized in dementia care, medication management, and activities of daily living. Passionate about creating meaningful connections with residents.',
      iconColor: '#e0f2fe',
      experience: {
        title: 'Certified Personal Care Assistant',
        duration: 'Sep 2015 - Present (9 years)',
        company: 'Golden Years Senior Living, Metro Area',
        description: 'Provided personalized care for 15+ residents including assistance with daily living activities, medication reminders, and social engagement. Maintained 100% family satisfaction rating and received Excellence in Care award three consecutive years.'
      }
    },
    pricing: [
      {
        title: 'Essentials',
        price: '$179',
        description: 'Perfect for assisted living facilities',
        features: ['Contact up to 60 caregivers/month', 'Email integration', 'Basic reporting'],
        featured: false
      },
      {
        title: 'Enhanced',
        price: '$349',
        description: 'Great for full-service communities',
        features: ['Contact up to 180 caregivers/month', 'Advanced analytics', 'Priority support'],
        featured: true
      },
      {
        title: 'Premium',
        price: '$649',
        description: 'Built for senior living networks',
        features: ['Contact up to 400 caregivers/month', 'Care management integration', 'Dedicated support'],
        featured: false
      }
    ]
  }
}

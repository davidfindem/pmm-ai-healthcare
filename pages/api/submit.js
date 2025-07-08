
let submissions = [
  { email: 'julia@example.com', persona: 'urgent-care', score: 82, timestamp: new Date().toISOString() },
  { email: 'kenny@example.com', persona: 'rural-nursing-home', score: 66, timestamp: new Date().toISOString() },
  { email: 'sara@healthbiz.org', persona: 'mental-health', score: 90, timestamp: new Date().toISOString() },
  { email: 'brian@clinic.com', persona: 'physical-therapy', score: 73, timestamp: new Date().toISOString() },
  { email: 'mina@dentalcare.io', persona: 'dental-office', score: 87, timestamp: new Date().toISOString() },
  { email: 'olga@urgenthelp.org', persona: 'urgent-care', score: 64, timestamp: new Date().toISOString() },
  { email: 'tom@seniorcare.org', persona: 'senior-living', score: 78, timestamp: new Date().toISOString() },
  { email: 'amy@therapynow.com', persona: 'mental-health', score: 92, timestamp: new Date().toISOString() },
  { email: 'li@familydental.com', persona: 'dental-office', score: 70, timestamp: new Date().toISOString() },
  { email: 'zach@ptclinic.net', persona: 'physical-therapy', score: 83, timestamp: new Date().toISOString() }
];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, persona } = req.body;
    const score = Math.floor(Math.random() * 100);
    const timestamp = new Date().toISOString();
    submissions.push({ email, persona, score, timestamp });
    res.status(200).json({ success: true });
  } else if (req.method === 'GET') {
    res.status(200).json(submissions);
  }
}

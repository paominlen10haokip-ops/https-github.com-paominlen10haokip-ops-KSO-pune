/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Flame, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Heart, 
  Crown, 
  Users, 
  HandHelping, 
  Gift, 
  ShieldCheck, 
  Zap, 
  Anchor, 
  Star, 
  ArrowDownCircle, 
  Megaphone, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  MapPin, 
  MessageCircle, 
  Mail,
  Quote,
  GraduationCap,
  Globe,
  Calendar,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import AuraButton from './components/AuraButton';

// --- Data ---

const sectionsData = {
  mision: {
    title: "Mission: Empower & Support",
    chips: ["Empower", "Preserve", "Support", "Unite", "Lead"],
    texts: {
      "Empower": "We strive to empower Kuki students in Pune by providing academic guidance, career counseling, and personal development opportunities.",
      "Preserve": "Our mission is to preserve and promote the rich Thadou-Kuki cultural heritage among the youth through festivals and community events.",
      "Support": "We provide a robust support system for students, assisting with admissions, accommodation, and emergency needs in a new city.",
      "Unite": "KSO Pune serves as a unifying platform for all Thadou-Kuki residents in Pune, fostering a sense of belonging and brotherhood.",
      "Lead": "We prepare the next generation of leaders by encouraging active participation in community service and organizational management."
    }
  },
  vision: {
    title: "Vision: A Thriving Community",
    chips: ["Excellence", "Culture", "Unity", "Future", "Pune"],
    texts: {
      "Excellence": "To see Kuki students achieving academic and professional excellence in every field they pursue in Pune.",
      "Culture": "A future where our cultural identity is celebrated and passed down with pride to generations to come.",
      "Unity": "A strong, cohesive community that stands together in times of joy and adversity, supporting one another unconditionally.",
      "Future": "To be a leading student organization that sets a benchmark for community welfare and student advocacy.",
      "Pune": "To make Pune a second home for every Kuki student, where they can thrive safely and successfully."
    }
  }
};

const valuesData = [
  { id: 'unity', title: 'Unity', desc: 'Standing together as one body.', icon: Users, detail: 'Unity is the cornerstone of KSO Pune. We believe that together we can overcome any challenge and achieve greater heights for our community.' },
  { id: 'integrity', title: 'Integrity', desc: 'Honesty in all we do.', icon: ShieldCheck, detail: 'We uphold the highest standards of integrity in our leadership and service, ensuring transparency and trust within the organization.' },
  { id: 'culture', title: 'Culture', desc: 'Preserving our roots.', icon: Globe, detail: 'Our heritage is our identity. We are committed to keeping the Thadou-Kuki traditions alive through cultural programs and education.' },
  { id: 'education', title: 'Education', desc: 'The key to progress.', icon: GraduationCap, detail: 'We prioritize academic success and provide resources to help students excel in their studies and professional careers.' },
  { id: 'service', title: 'Service', desc: 'Helping one another.', icon: HandHelping, detail: 'Service is at the heart of our mission. We are dedicated to assisting our members in times of need, from medical emergencies to academic hurdles.' },
  { id: 'leadership', title: 'Leadership', desc: 'Building the future.', icon: Crown, detail: 'We nurture leadership qualities in our youth, encouraging them to take responsibility and lead with vision and compassion.' },
  { id: 'faith', title: 'Faith', desc: 'Believing in progress.', icon: Zap, detail: 'We move forward with faith in our potential and the collective strength of our community to build a better tomorrow.' },
  { id: 'commitment', title: 'Commitment', desc: 'Dedicated to the cause.', icon: Anchor, detail: 'Our commitment to the welfare of Kuki students in Pune is unwavering and long-term.' },
  { id: 'excellence', title: 'Excellence', desc: 'Doing our best.', icon: Star, detail: 'We strive for excellence in every event we organize and every initiative we undertake.' },
  { id: 'humility', title: 'Humility', desc: 'A learning heart.', icon: ArrowDownCircle, detail: 'We serve with humility, always open to feedback and learning how to better serve our community.' },
  { id: 'advocacy', title: 'Advocacy', desc: 'Speaking for students.', icon: Megaphone, detail: 'We act as the voice of Kuki students in Pune, advocating for their rights and welfare in various forums.' },
  { id: 'love', title: 'Love', desc: 'The bond of peace.', icon: Heart, detail: 'Love and mutual respect are the foundation of our community interactions and organizational culture.' },
];

const programs = [
  {
    id: 1,
    title: "Student Welfare & Guidance",
    details: [
      { title: "Admission Assistance", content: "Helping new students navigate the admission process in various colleges and universities across Pune." },
      { title: "Accommodation Support", content: "Assisting students in finding safe and affordable housing options in the city." }
    ]
  },
  {
    id: 2,
    title: "Cultural Preservation",
    details: [
      { title: "Chavang Kut Celebration", content: "Organizing the annual post-harvest festival to celebrate our culture and heritage." },
      { title: "Traditional Workshops", content: "Workshops on traditional music, dance, and attire for the younger generation." }
    ]
  },
  {
    id: 3,
    title: "Career & Skill Development",
    details: [
      { title: "Career Counseling", content: "Inviting professionals to guide students on various career paths and competitive exams." },
      { title: "Skill Workshops", content: "Organizing workshops on soft skills, IT, and other relevant professional skills." }
    ]
  }
];

const activities = [
  { title: "General Body Meeting", desc: "Community gathering for updates and decision making.", time: "Quarterly", icon: Users },
  { title: "Cultural Night", desc: "A night of traditional music, dance, and food.", time: "Annual", icon: Flame },
  { title: "Sports Meet", desc: "Promoting health and brotherhood through sports.", time: "Bi-annual", icon: Zap },
  { title: "Freshers' Social", desc: "Welcoming new students to the Pune Kuki family.", time: "Annual", icon: GraduationCap },
];

const testimonials = [
  { name: "Lalboi K.", role: "Student, SPPU", text: "KSO Pune was my family when I first moved here. They helped me find a hostel and guided me through my college admissions." },
  { name: "Nengneithem H.", role: "Professional", text: "The cultural events organized by KSO Pune keep me connected to my roots even while living far from home." },
  { name: "Seiminlun T.", role: "Alumnus", text: "Being part of KSO Pune taught me leadership and the importance of community service. It shaped who I am today." },
];

const teamMembers = [
  {
    name: "Paominlun Haokip",
    role: "President",
    bio: "Leading with vision to unite and empower Kuki students in Pune through academic and cultural initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Lhingneichong Touthang",
    role: "Vice President",
    bio: "Dedicated to student welfare and ensuring every member feels at home in our vibrant city.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Thangminlal Kipgen",
    role: "General Secretary",
    bio: "Managing organizational operations and fostering communication between students and the committee.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Kimneilam Singson",
    role: "Finance Secretary",
    bio: "Ensuring transparent and efficient management of resources to support all community programs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
  }
];

const galleryCategories = ["All", "Cultural", "Sports", "Academic", "Social"];

const galleryImages = [
  { id: 1, category: "Cultural", title: "Chavang Kut 2024", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, category: "Sports", title: "Annual Sports Meet", url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, category: "Academic", title: "Career Seminar", url: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, category: "Social", title: "Freshers' Social", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" },
  { id: 5, category: "Cultural", title: "Traditional Dance", url: "https://images.unsplash.com/photo-1514525253344-f814d0743585?q=80&w=2574&auto=format&fit=crop" },
  { id: 6, category: "Social", title: "Community Feast", url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop" },
  { id: 7, category: "Sports", title: "Football Tournament", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2676&auto=format&fit=crop" },
  { id: 8, category: "Academic", title: "Library Session", url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop" },
];

const upcomingEvents = [
  { 
    id: 1, 
    title: "Freshers' Social 2026", 
    date: "2026-04-15", 
    category: "Social", 
    location: "Pune University Campus",
    description: "A warm welcome to all new Thadou-Kuki students joining various institutions in Pune this year. Join us for a day of networking, cultural performances, and a community feast.",
    organizer: "KSO Pune Social Committee",
    speaker: "Dr. L. Haokip (Keynote)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261298711535!2d73.82023927596564!3d18.55260106789999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf36630f085d%3A0x32ba9d085da3fa5!2sSavitribai%20Phule%20Pune%20University!5e0!3m2!1sen!2sin!4v1711982791000!5m2!1sen!2sin"
  },
  { 
    id: 2, 
    title: "Career Guidance Seminar", 
    date: "2026-04-22", 
    category: "Academic", 
    location: "Kothrud Hall",
    description: "Expert guidance on competitive exams (UPSC/MPSC), corporate careers, and higher education opportunities in India and abroad.",
    organizer: "KSO Pune Academic Wing",
    speaker: "Various Industry Experts",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.512345678901!2d73.81234567890123!3d18.50123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0123456789%3A0x0123456789abcdef!2sKothrud%2C%20Pune!5e0!3m2!1sen!2sin!4v1711982791000!5m2!1sen!2sin"
  },
  { 
    id: 3, 
    title: "Community Prayer Meeting", 
    date: "2026-05-05", 
    category: "Social", 
    location: "Member Residence",
    description: "Monthly gathering for spiritual nourishment and community bonding. All members are welcome to join for prayer and fellowship.",
    organizer: "KSO Pune Fellowship Group",
    speaker: "Rev. T. Kipgen",
    mapUrl: ""
  },
  { 
    id: 4, 
    title: "Inter-Community Sports Meet", 
    date: "2026-05-20", 
    category: "Sports", 
    location: "Balewadi Stadium",
    description: "A friendly sports competition between various community student organizations in Pune. Events include Football, Volleyball, and Athletics.",
    organizer: "KSO Pune Sports Department",
    speaker: "Sports Secretary",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.378546123456!2d73.75123456789012!3d18.57123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0123456789%3A0x0123456789abcdef!2sShree%20Shiv%20Chhatrapati%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1711982791000!5m2!1sen!2sin"
  },
  { 
    id: 5, 
    title: "Cultural Heritage Workshop", 
    date: "2026-06-10", 
    category: "Cultural", 
    location: "Community Center",
    description: "Learning our traditional songs, dances, and the significance of our attire. A hands-on session for the younger generation to connect with their roots.",
    organizer: "KSO Pune Cultural Wing",
    speaker: "Community Elders",
    mapUrl: ""
  },
];

// --- Components ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeEssence, setActiveEssence] = useState<'mision' | 'vision'>('mision');
  const [activeChip, setActiveChip] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<typeof valuesData[0] | null>(null);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("All");
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCalendarCategory, setActiveCalendarCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    setActiveChip(sectionsData[activeEssence].chips[0]);
  }, [activeEssence]);

  const filteredImages = activeGalleryCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryCategory);

  const filteredEvents = activeCalendarCategory === "All"
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === activeCalendarCategory);

  const handleNextImage = () => {
    if (!selectedGalleryImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedGalleryImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedGalleryImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedGalleryImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedGalleryImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedGalleryImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden bg-transparent cultural-pattern">
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="bg-emerald-600 w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white">K</span>
            <span className="font-serif tracking-wide">KSO PUNE</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#calendar" className="hover:text-white transition-colors">Calendar</a>
            <a href="#values" className="hover:text-white transition-colors">Values</a>
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <AuraButton variant="secondary" className="!px-4 !py-2 !text-xs">
              <Heart size={14} />
              Donate
            </AuraButton>
            <AuraButton variant="primary" className="!px-4 !py-2 !text-xs !bg-white !text-zinc-950 !ring-zinc-200">
              Join Us
            </AuraButton>
          </div>
          <button className="md:hidden text-white hover:text-emerald-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">About</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">Team</a>
              <a href="#calendar" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">Calendar</a>
              <a href="#values" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">Values</a>
              <a href="#programs" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">Programs</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white py-2">Gallery</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-rose-400 py-2 flex items-center gap-2">
                <Heart size={16} />
                Donate
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-emerald-400 py-2">Join Us</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky Social Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 p-4">
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-green-500 hover:bg-white/10 hover:border-green-500/50 transition-all group relative"
        >
          <MessageCircle size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">WhatsApp</span>
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:bg-white/10 hover:border-pink-500/50 transition-all group relative"
        >
          <Instagram size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Instagram</span>
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:bg-white/10 hover:border-blue-500/50 transition-all group relative"
        >
          <Facebook size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Facebook</span>
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-sky-400 hover:bg-white/10 hover:border-sky-400/50 transition-all group relative"
        >
          <Twitter size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">Twitter</span>
        </a>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[128px]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-300 mb-6 backdrop-blur-sm"
          >
            <Flame size={14} />
            Kuki Students' Organisation, Pune
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-serif"
          >
            Empowering Students, <br />
            <span className="gradient-text italic">Preserving Culture</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated to the welfare of the Thadou-Kuki community in Pune. We foster unity, academic excellence, and cultural pride.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <AuraButton variant="primary" className="w-full sm:w-auto !bg-white !text-zinc-950 !ring-zinc-200 shadow-white/10" onClick={() => window.location.hash = 'contact'}>
              Join the Community
              <ArrowRight size={18} />
            </AuraButton>
            <AuraButton variant="outline" className="w-full sm:w-auto" onClick={() => window.location.hash = 'programs'}>
              <BookOpen size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              Explore Programs
            </AuraButton>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 relative border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 font-serif kuki-border pb-4 inline-block">
              Who We Are
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
              <p>
                KSO Pune is a non-political, non-profit student organization representing the Thadou-Kuki community in Pune, Maharashtra. Established to address the needs of students migrating for education, we have grown into a vibrant community hub.
              </p>
              <p>
                We believe in the power of unity and the importance of maintaining our cultural roots while striving for modern success. Our activities range from academic seminars to cultural festivals like Chavang Kut, ensuring a holistic experience for our members.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <li className="flex items-center gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  Inclusive support
                </li>
                <li className="flex items-center gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  Cultural heritage
                </li>
                <li className="flex items-center gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  Strong network
                </li>
                <li className="flex items-center gap-3 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  Student advocacy
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 relative group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop" 
                alt="Community" 
                className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl mb-1">United in Pune</p>
                <p className="text-zinc-400 text-sm">Fostering brotherhood and growth across generations.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-zinc-900/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Executive Committee</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-serif">Meet the Core Team</h3>
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-base">Dedicated leaders working together to serve the Kuki student community in Pune.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-1 font-serif">{member.name}</h4>
                <p className="text-emerald-500 text-sm font-semibold mb-4 tracking-wide uppercase">{member.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Event Calendar</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-serif">Upcoming Dates</h3>
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-base">Stay updated with our community gatherings, academic seminars, and cultural celebrations.</p>
          </div>

          {/* Filtering */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["All", "Social", "Academic", "Sports", "Cultural"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCalendarCategory(cat)}
                className={`px-8 py-2.5 rounded-full border transition-all text-sm font-bold tracking-wide ${activeCalendarCategory === cat ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-emerald-600/10 text-emerald-400 p-4 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Calendar size={24} />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-zinc-400 uppercase tracking-[0.15em]">
                      {event.category}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 font-serif">{event.title}</h4>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-4 text-zinc-400 text-sm">
                      <Calendar size={18} className="text-emerald-500" />
                      <span className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400 text-sm">
                      <MapPin size={18} className="text-emerald-500" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <AuraButton 
                      variant="primary"
                      className="!bg-white !text-zinc-950 !ring-zinc-200 !py-3 !text-xs"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details
                    </AuraButton>
                    <AuraButton 
                      variant="outline"
                      className="!py-3 !text-xs"
                    >
                      Add to Calendar
                    </AuraButton>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-32">
              <p className="text-zinc-500 font-serif italic text-xl">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl" 
              onClick={() => setSelectedEvent(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-panel relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedEvent(null)} 
                className="absolute top-8 right-8 text-zinc-400 hover:text-white transition-colors z-10 bg-white/5 p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-emerald-600/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    {selectedEvent.category}
                  </span>
                  <span className="text-zinc-700 text-sm">•</span>
                  <span className="text-zinc-400 text-sm font-bold flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-500" />
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight font-serif">{selectedEvent.title}</h3>

                <div className="grid lg:grid-cols-5 gap-16">
                  <div className="lg:col-span-3 space-y-12">
                    <div>
                      <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-6">About the Event</h4>
                      <p className="text-zinc-300 leading-relaxed text-lg">{selectedEvent.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-3">Organizer</h4>
                        <p className="text-white font-bold text-base">{selectedEvent.organizer}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-3">Key Speaker</h4>
                        <p className="text-white font-bold text-base">{selectedEvent.speaker}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-3">Location</h4>
                      <div className="flex items-center gap-4 text-white text-base font-bold">
                        <MapPin size={20} className="text-emerald-500" />
                        {selectedEvent.location}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-6">Venue Map</h4>
                    {selectedEvent.mapUrl ? (
                      <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                        <iframe 
                          src={selectedEvent.mapUrl} 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.9)' }} 
                          allowFullScreen 
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    ) : (
                      <div className="aspect-square rounded-3xl border border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center text-zinc-500 gap-4">
                        <MapPin size={48} className="opacity-20" />
                        <p className="text-sm font-bold uppercase tracking-widest">Map Unavailable</p>
                      </div>
                    )}
                    
                    <div className="pt-8">
                      <AuraButton 
                        variant="secondary"
                        onClick={() => setIsRegistered(true)}
                        className="w-full !py-5 !text-xs uppercase tracking-[0.2em]"
                      >
                        Register Now
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </AuraButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Registration Success View */}
      <AnimatePresence>
        {isRegistered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-zinc-950"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[128px]"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[128px]"></div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="glass-panel relative w-full max-w-md rounded-[3rem] p-12 text-center border border-white/10 shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                <CheckCircle2 size={56} />
              </div>

              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight font-serif italic">Registration Successful!</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
                Thank you for registering for <span className="text-white font-bold">{selectedEvent?.title}</span>. 
                We have received your details and will send a confirmation email shortly.
              </p>

              <div className="space-y-6">
                <AuraButton 
                  variant="primary"
                  onClick={() => { setIsRegistered(false); setSelectedEvent(null); }}
                  className="w-full !py-5 !text-xs !bg-white !text-zinc-950 !ring-zinc-200 uppercase tracking-[0.2em]"
                >
                  Back to Events
                </AuraButton>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                  Need help? Contact us at <a href="mailto:ksopune@gmail.com" className="text-emerald-400 hover:underline">ksopune@gmail.com</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Essence Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="glow-bg absolute inset-0 z-0"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Our Essence</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-serif">The Heart of KSO Pune</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16">
            <button 
              onClick={() => setActiveEssence('mision')} 
              className={`animate-float group text-center focus:outline-none ${activeEssence === 'mision' ? 'text-emerald-400' : 'text-white/20'}`}
            >
              <div className="text-5xl md:text-7xl font-bold font-serif group-hover:text-white transition-colors duration-500 italic">
                Mission
              </div>
            </button>
            <button 
              onClick={() => setActiveEssence('vision')} 
              className={`animate-float-delayed group text-center focus:outline-none ${activeEssence === 'vision' ? 'text-emerald-400' : 'text-white/20'}`}
            >
              <div className="text-5xl md:text-7xl font-bold font-serif group-hover:text-white transition-colors duration-500 italic">
                Vision
              </div>
            </button>
          </div>

          <div className="glass-panel rounded-[3rem] p-10 md:p-20 min-h-[450px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-emerald-500/50 to-transparent"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEssence}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                <h3 className="text-2xl font-bold text-white mb-10 font-serif italic">{sectionsData[activeEssence].title}</h3>
                <div className="flex flex-wrap justify-center mb-12 gap-3">
                  {sectionsData[activeEssence].chips.map((chip) => (
                    <button 
                      key={chip}
                      onClick={() => setActiveChip(chip)} 
                      className={`px-6 py-2.5 rounded-full border border-white/10 transition-all text-sm font-bold tracking-wide ${activeChip === chip ? 'bg-white text-zinc-950' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
                <div className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 max-w-3xl w-full min-h-[160px] flex items-center justify-center mx-auto shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={activeChip}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      className="text-zinc-200 text-xl md:text-2xl leading-relaxed font-serif italic"
                    >
                      "{sectionsData[activeEssence].texts[activeChip as keyof typeof sectionsData.mision.texts]}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="values" className="py-32 bg-zinc-900/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Our Core Values</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 font-serif">The Pillars of KSO</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base">The principles that sustain our community and our actions. Click on each to learn more.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {valuesData.map((value) => (
              <button 
                key={value.id}
                onClick={() => setSelectedValue(value)}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors group-hover:scale-110 duration-500 inline-block">
                  <value.icon size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-serif italic">{value.title}</h3>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-400 leading-relaxed uppercase tracking-widest font-bold">{value.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Value Modal */}
      <AnimatePresence>
        {selectedValue && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl" 
              onClick={() => setSelectedValue(null)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-panel relative w-full max-w-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedValue(null)} 
                className="absolute top-8 right-8 text-zinc-400 hover:text-white transition-colors z-10 bg-white/5 p-2 rounded-full"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-10 shadow-inner">
                  <selectedValue.icon size={48} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 font-serif italic tracking-tight">{selectedValue.title}</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-10 rounded-full"></div>
                <p className="text-zinc-300 leading-relaxed text-lg font-serif italic">"{selectedValue.detail}"</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/98 backdrop-blur-2xl" 
              onClick={() => setSelectedGalleryImage(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:max-h-[80vh] flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedGalleryImage(null)} 
                className="absolute -top-16 right-0 text-white/40 hover:text-white transition-colors p-3 bg-white/5 rounded-full"
              >
                <X size={32} />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                className="absolute left-4 md:-left-24 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/10 group"
              >
                <ChevronLeft size={48} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <img 
                src={selectedGalleryImage.url} 
                alt={selectedGalleryImage.title} 
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />

              <button 
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                className="absolute right-4 md:-right-24 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md border border-white/10 group"
              >
                <ChevronRight size={48} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="absolute -bottom-24 left-0 right-0 text-center">
                <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em] mb-2 block">{selectedGalleryImage.category}</span>
                <h4 className="text-white text-3xl font-bold font-serif italic">{selectedGalleryImage.title}</h4>
                <p className="text-zinc-500 text-sm mt-3 font-bold tracking-widest uppercase">
                  {filteredImages.findIndex(img => img.id === selectedGalleryImage.id) + 1} <span className="text-zinc-700 mx-2">/</span> {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Programs Section */}
      <section id="programs" className="py-32 relative bg-zinc-900/10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Community Initiatives</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 font-serif">Our Programs</h3>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">Comprehensive support and activities designed for the growth and well-being of our members.</p>
          </div>
          <div className="space-y-6">
            {programs.map((program) => (
              <details key={program.id} className="group glass-panel rounded-3xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-8 cursor-pointer text-white hover:bg-white/5 transition-colors select-none list-none">
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-lg font-black shadow-inner">{program.id}</div>
                    <span className="font-bold text-xl md:text-2xl font-serif italic">{program.title}</span>
                  </div>
                  <ChevronDown className="text-zinc-600 group-open:rotate-180 transition-transform duration-500" />
                </summary>
                <div className="px-8 pb-10 pt-4 border-t border-white/5 bg-zinc-950/30">
                  <ul className="space-y-8 text-zinc-400">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="pl-6 border-l-2 border-emerald-500/20 hover:border-emerald-500 transition-colors group/item">
                        <strong className="text-white block mb-2 font-serif text-lg italic group-hover/item:text-emerald-400 transition-colors">{detail.title}</strong>
                        <p className="leading-relaxed text-base">{detail.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <AuraButton 
              variant="primary"
              className="w-full sm:w-auto !bg-white !text-zinc-950 !ring-zinc-200 !px-10 !py-5 !text-xs uppercase tracking-[0.2em]"
              onClick={() => window.location.hash = 'contact'}
            >
              Get Involved
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </AuraButton>
          </div>
        </div>
      </section>

      {/* Activities Cards */}
      <section className="py-32 border-t border-white/5 bg-zinc-950/20 cultural-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Regular Activities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-serif">Life at KSO Pune</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <activity.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif italic">{activity.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{activity.desc}</p>
                <p className="text-[10px] font-black text-emerald-400 bg-emerald-600/10 inline-block px-3 py-1.5 rounded-full uppercase tracking-[0.2em] border border-emerald-500/20">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Event Gallery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Capturing moments of joy, culture, and community from our past gatherings.</p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryCategory(cat)}
                className={`px-6 py-2 rounded-full border transition-all text-sm font-medium ${activeGalleryCategory === cat ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedGalleryImage(img)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer shadow-xl"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-[10px] font-black text-emerald-400 mb-2 uppercase tracking-[0.2em]">{img.category}</span>
                    <h4 className="text-lg font-bold text-white font-serif italic">{img.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-serif">Voices from the Community</h3>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <div key={idx} className="min-w-[320px] md:min-w-[450px] glass-panel p-10 rounded-[2.5rem] snap-center border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="flex gap-1 text-emerald-500/30 mb-8">
                  <Quote size={32} fill="currentColor" />
                </div>
                <p className="text-zinc-300 mb-10 italic text-lg leading-relaxed font-serif">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center font-black text-zinc-500 border border-white/5 shadow-inner">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white font-serif">{t.name}</p>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/5 bg-zinc-950/40 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 mb-24 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-10 font-serif leading-tight">Join the KSO Pune Family. <br /><span className="text-emerald-500 italic">We are here for you.</span></h2>
            <div className="flex flex-col gap-6 text-base">
              <div className="inline-flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                <span className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner"><MapPin size={20} /></span>
                <span className="font-bold tracking-wide">Pune, Maharashtra, India</span>
              </div>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                <span className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner"><MessageCircle size={20} /></span>
                <span className="font-bold tracking-wide">Connect on WhatsApp</span>
              </a>
              <a href="mailto:ksopune@gmail.com" className="inline-flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                <span className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner"><Mail size={20} /></span>
                <span className="font-bold tracking-wide">ksopune@gmail.com</span>
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <AuraButton 
                variant="primary"
                className="!bg-white !text-zinc-950 !ring-zinc-200 !px-10 !py-5 !text-xs uppercase tracking-[0.2em]"
              >
                Join Us Today
              </AuraButton>
              <AuraButton 
                variant="primary"
                className="!bg-amber-600 !text-white !ring-amber-500/20 !px-10 !py-5 !text-xs uppercase tracking-[0.2em] shadow-amber-600/30"
              >
                <Heart size={20} />
                Support Our Cause
              </AuraButton>
            </div>
          </div>
          
          <div className="h-80 lg:h-auto bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 relative shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.79292695!3d18.5248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e6741e101%3A0x828d43105d951336!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711982791000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.9)' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 gap-8 font-black uppercase tracking-[0.3em] relative z-10">
          <p>© 2026 Kuki Students' Organisation, Pune. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

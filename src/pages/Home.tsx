import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Users, ShieldCheck, Globe, GraduationCap, HandHelping, Crown, Zap, Anchor, Star, ArrowDownCircle, Megaphone, Heart, ArrowRight, BookOpen, Flame } from 'lucide-react';
import AuraButton from '../components/AuraButton';

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

const PillarLayer: React.FC<{ value: any; index: number }> = ({ value, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 150,
        rotateX: -25,
        scale: 0.8
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.1, 
        type: "spring",
        stiffness: 40,
        damping: 12
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-full flex justify-center perspective-[1000px]"
    >
      <div className="relative z-10 w-full max-w-2xl transform-gpu transition-all duration-500 group-hover:z-20">
        {/* The Layer Block */}
        <div className="relative h-24 md:h-28 bg-zinc-900 border-x border-white/10 overflow-hidden group-hover:border-emerald-500/50 transition-all duration-500 cursor-pointer flex items-center px-8 md:px-16 gap-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          
          {/* Cylindrical Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          
          {/* Highlight Beam - Animated Shimmer */}
          <motion.div 
            animate={{ 
              x: ['-100%', '200%'],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: index * 0.5
            }}
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-25deg] pointer-events-none"
          />

          {/* Icon & Number */}
          <div className="relative flex items-center gap-6 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-black text-xs shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <motion.div 
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.3 }}
              className="text-emerald-400 group-hover:text-emerald-300 transition-all duration-500"
            >
              <value.icon size={32} />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="relative flex-1 min-w-0">
            <h4 className="text-xl md:text-2xl font-bold text-white font-serif italic tracking-tight group-hover:text-emerald-300 transition-colors truncate">
              {value.title}
            </h4>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black group-hover:text-zinc-400 transition-colors">
              {value.desc}
            </p>
          </div>

          {/* Detail Expansion (Desktop) */}
          <div className="hidden lg:block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 shrink-0">
            <p className="text-xs text-zinc-400 pl-8 border-l border-emerald-500/30 italic leading-relaxed">
              {value.detail}
            </p>
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.06] transition-colors duration-500"></div>
        </div>

        {/* Layer Shadow/Depth */}
        <div className="h-1 bg-black/70 w-full shadow-[0_6px_15px_rgba(0,0,0,0.6)]"></div>
      </div>
      
      {/* Side "Joints" - Animated on Hover */}
      <div className="absolute top-1/2 -left-2 w-4 h-4 bg-zinc-800 border border-white/10 rounded-full -translate-y-1/2 z-20 hidden md:block group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
      <div className="absolute top-1/2 -right-2 w-4 h-4 bg-zinc-800 border border-white/10 rounded-full -translate-y-1/2 z-20 hidden md:block group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const beamOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const beamScale = useTransform(scrollYProgress, [0.15, 0.4], [0.8, 1]);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
            Learn <span className="gradient-text italic">Unite</span> Serve
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
            <AuraButton variant="primary" className="w-full sm:w-auto !bg-white !text-zinc-950 !ring-zinc-200 shadow-white/10">
              Join the Community
              <ArrowRight size={18} />
            </AuraButton>
            <AuraButton variant="outline" className="w-full sm:w-auto">
              <BookOpen size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              Explore Programs
            </AuraButton>
          </motion.div>
        </div>
      </header>

      {/* The Pillar of KSO Section */}
      <section id="values" className="py-32 bg-zinc-900/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-emerald-500 uppercase tracking-[0.4em] mb-4"
            >
              Our Foundation
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6 font-serif italic"
            >
              The Pillar of KSO
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Twelve layers of commitment that form the unbreakable foundation of our community.
            </motion.p>
          </div>

          <div className="flex flex-col items-center">
            {/* Pillar Top (Capital) - More Architectural */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-30 flex flex-col items-center"
            >
              {/* Top Slab */}
              <div className="w-80 h-6 bg-zinc-800 border border-white/10 rounded-t-lg shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
              </div>
              {/* Decorative Molding */}
              <div className="w-72 h-4 bg-zinc-900 border-x border-white/5 shadow-inner"></div>
              {/* Capital Body */}
              <div className="w-64 h-12 bg-zinc-800 border-x border-white/10 relative overflow-hidden flex justify-around items-center px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-4 h-full bg-black/20 border-x border-white/5"></div>
                ))}
              </div>
            </motion.div>

            {/* Pillar Layers */}
            <div className="flex flex-col items-center -space-y-1 w-full max-w-4xl relative shadow-[0_0_100px_rgba(0,0,0,0.5)] perspective-[1000px]">
              {/* Vertical Light Beam */}
              <motion.div 
                style={{ opacity: beamOpacity, scaleY: beamScale }}
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-emerald-500/60 to-transparent z-0 origin-top"
              />

              {valuesData.map((value, index) => (
                <PillarLayer key={value.id} value={value} index={index} />
              ))}
            </div>

            {/* Pillar Base - More Architectural */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-30 flex flex-col items-center"
            >
              {/* Base Body */}
              <div className="w-64 h-12 bg-zinc-800 border-x border-white/10 relative overflow-hidden flex justify-around items-center px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-4 h-full bg-black/20 border-x border-white/5"></div>
                ))}
              </div>
              {/* Decorative Molding */}
              <div className="w-72 h-4 bg-zinc-900 border-x border-white/5 shadow-inner"></div>
              {/* Plinth */}
              <div className="w-80 h-8 bg-zinc-800 border border-white/10 rounded-b-lg shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500/20"></div>
              </div>
            </motion.div>
            
            {/* Ground Shadow */}
            <div className="w-96 h-8 bg-zinc-950/80 rounded-full blur-2xl mt-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

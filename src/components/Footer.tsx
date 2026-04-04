import React from 'react';
import { MapPin, MessageCircle, Mail, Heart } from 'lucide-react';
import AuraButton from './AuraButton';

const Footer = () => {
  return (
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
            <AuraButton variant="primary" className="!bg-white !text-zinc-950 !ring-zinc-200 !px-10 !py-5 !text-xs uppercase tracking-[0.2em]">
              Join Us Today
            </AuraButton>
            <AuraButton variant="primary" className="!bg-amber-600 !text-white !ring-amber-500/20 !px-10 !py-5 !text-xs uppercase tracking-[0.2em] shadow-amber-600/30">
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
  );
};

export default Footer;

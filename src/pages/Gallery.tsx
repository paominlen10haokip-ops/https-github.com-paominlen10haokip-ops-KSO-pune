import React from 'react';
import { motion } from 'motion/react';

const pdfPhotos = [
  { title: "KSO Revival Meeting", venue: "Lonavala 1996", speakers: "Pu Dino Touthang & Pi Thomi Singson", url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop" },
  { title: "KSO Pune Executive 2021-22 Last Meeting", venue: "Cinderella Building", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" },
  { title: "Kanamjem FC 2021", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2676&auto=format&fit=crop" },
  { title: "Kathang'e FC 2021", url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2670&auto=format&fit=crop" },
  { title: "Pu Thangkholal Haokip", desc: "Closing Ceremony Chief Guest PKSOPL 2021", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
  { title: "PKSOPL fans", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop" },
  { title: "KSO Family Potluck", venue: "Spicer Campus 1996", url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop" },
  { title: "KSO Meet", venue: "Spicer College 1997", url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop" },
  { title: "Pu James Haokip & Family", venue: "Chavang Kut 1995", url: "https://images.unsplash.com/photo-1514525253344-f814d0743585?q=80&w=2574&auto=format&fit=crop" },
  { title: "1st KSO General Secretary", desc: "Pu Lt. Lamkhojang Haokip and Pu Thangkholal Haokip with Pu James Family 1998 Spicer", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
  { title: "KSO Spicer Memorial College Graduation Day", desc: "Pi Kim Gangte (MP Manipur) as Chief Guest 1999", url: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2670&auto=format&fit=crop" },
  { title: "Team Winner (Keilungset FC)", desc: "PKSOPL with KSOP Executive", url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2670&auto=format&fit=crop" },
  { title: "Pu Thangkhojang Haokip Kut Pa & Family", desc: "with KSOP Executive 2021", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" },
  { title: "Chavang Kut 2021 mipi ho", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop" },
  { title: "Opening Day PKSOPL Executive Photo 2021", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" },
  { title: "Pu Lienkhum Haolai", desc: "Opening Day PKSOPL Chief Guest (Right)", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
  { title: "Pune Nute ho", desc: "Closing Night PKSOPL 2021", url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop" },
  { title: "Opening Day KSOPPL, KSOP members 2021", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" },
];

const Gallery = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Historical Gallery</h1>
        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">Capturing Moments from 1995 to 2021</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdfPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.1 }}
            className="glass-panel group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-xl"
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h4 className="text-xl font-bold text-white font-serif italic mb-2">{photo.title}</h4>
              {photo.venue && <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-1">{photo.venue}</p>}
              {photo.speakers && <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">Speakers: {photo.speakers}</p>}
              {photo.desc && <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{photo.desc}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

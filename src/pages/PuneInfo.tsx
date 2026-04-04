import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Info, Home, HeartPulse, Smartphone, AlertTriangle } from 'lucide-react';

const PuneInfo = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Pune: Our Second Home</h1>
        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">Additional Information & Community Wellness</p>
      </motion.div>

      {/* Pune Stats */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {[
          { label: "Districts", value: "36", desc: "Maharashtra State" },
          { label: "Area", value: "15,643", desc: "Square Km" },
          { label: "Population", value: "3.1M+", desc: "2021 Census" },
          { label: "Languages", value: "3", desc: "Marathi, Hindi, English" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] border border-white/10 text-center group">
            <p className="text-emerald-500 font-black text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
            <p className="text-white font-bold font-serif italic text-lg mb-1">{stat.label}</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">{stat.desc}</p>
          </div>
        ))}
      </section>

      <div className="grid lg:grid-cols-2 gap-16 mb-32">
        {/* Landmarks */}
        <section className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8 font-serif italic flex items-center gap-4">
            <MapPin className="text-emerald-500" />
            Key Landmarks
          </h2>
          <div className="space-y-6">
            {[
              { name: "NDA", full: "National Defence Academy, Khadakwasla", est: "07th Dec. 1954" },
              { name: "Ammunition Factory", full: "Khadki Town", est: "16th Dec. 1869" },
              { name: "AFMC", full: "Armed Force Medical College", est: "1st May 1948" },
              { name: "ALC", full: "Artificial Limb Centre", est: "19th May 1944" },
              { name: "Southern Command Hospital", full: "Wanowrie", est: "1st Jan. 1948" },
              { name: "CTC", full: "Cardio Thoracic Centre", est: "1945" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold font-serif italic text-lg">{item.name}</h4>
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{item.est}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.full}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Religious Institutions */}
        <section className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8 font-serif italic flex items-center gap-4">
            <Home className="text-amber-500" />
            Religious Institutions
          </h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-white font-bold font-serif italic text-xl mb-4">1. SAU (Spicer Adventist University)</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Previously named 'Spicer Memorial College', established in 1914 in Coimbatore, re-located to Pune in 1942. Granted University status in 2014.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-serif italic text-xl mb-4">2. UBS (Union Biblical Seminary)</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Theological seminary founded by Wesleyan and Methodist denominations. Established in 1953, relocated to Pune in 1983.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-serif italic text-xl mb-4">3. OSHO (International Meditation Resort)</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Iconic landmark located in Koregaon Park. Established in 1975, OSHO returned from the USA in 1987.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Community Wellness */}
      <section className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 bg-emerald-950/5">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Community Wellness</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight font-serif italic">Health & Technology Advice</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-6 mb-8">
              <Smartphone className="text-emerald-500" size={48} />
              <h4 className="text-2xl font-bold text-white font-serif italic">Mobile Usage Advice</h4>
            </div>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>• Mobile hin mihematamjo alhemlhan, joule nalaseisahin sukhenthei inahi.</li>
              <li>• Mobile hin chapang hinkho asusen, tunin nu-le-pa mantheilouvin chate atamjo manthahna lampia ani-nin akisulem gamtaove.</li>
              <li>• Mobile hin 75% mihemte hidamunadin ajollhajingin, 35% hinkho jentheilou khopinnatnahise apejingin ahi.</li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 mb-8">
              <AlertTriangle className="text-amber-500" size={48} />
              <h4 className="text-2xl font-bold text-white font-serif italic">Stroke Prevention Advice</h4>
            </div>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>1. Nalunasuhkot masat louding, ajeh chuthisan chedan temperature le polam temperature kitoh jilou ahi.</li>
              <li>2. Tahsasunglam temperature le polam temperature adjust nading aphatchom khat angaijin ahi.</li>
              <li>3. Nakisilteng nakeng sukot masan, abanin nakhut, athumchanna-in nakam sunga twi chomkhat momin.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuneInfo;

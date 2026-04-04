import React from 'react';
import { motion } from 'motion/react';
import { Crown, User, Shield } from 'lucide-react';

const leadersData = [
  { id: 1, period: "1995-1996", president: "Pu Stephen Touthang", secretary: "Pu Late. Lamkhojang Haokip" },
  { id: 2, period: "1996-1997", president: "Pu Kamkhotinthang Neihsial", secretary: "Pu Seikhopao Haokip" },
  { id: 3, period: "1997-1998", president: "Pu Late. Lamkhojang Haokip", secretary: "Pu Paul Paolien Haokip" },
  { id: 4, period: "1998-1999", president: "Pu Thongkhotinlal @D Lalboi Haokip", secretary: "Pu Goulien Misao" },
  { id: 5, period: "1999-2000", president: "Pu Hemkhomang Haokip", secretary: "Pu Mangcha Touthang" },
  { id: 6, period: "2000-2001", president: "Pu Jamkhohao (Haopu) Haokip", secretary: "Pu Ngamhao Haokip" },
  { id: 7, period: "2001-2002", president: "Pu Paul Paolien Haokip", secretary: "Pu Khakham Vaiphei" },
  { id: 8, period: "2002-2003", president: "Pu Sangboi Gangte", secretary: "Pu Lunkhohao Kipgen" },
  { id: 9, period: "2003-2004", president: "Pu T Lalboi Haokip", secretary: "Pu Thathang Doungel" },
  { id: 10, period: "2004-2005", president: "Pu Paogin Haokip", secretary: "Pu Paolenthang @Lenthang Khongsai" },
  { id: 11, period: "2005-2006", president: "Pu Paolenthang @Lenthang Khongsai", secretary: "Pu Henminthang Kipgen" },
  { id: 12, period: "2006-2007", president: "Pu Paolenthang @Lenthang Khongsai", secretary: "Pu Henminthang Kipgen" },
  { id: 13, period: "2007-2008", president: "Pu Thangjangam Singson", secretary: "Pu Haominlal Singsit" },
  { id: 14, period: "2008-2009", president: "Pu Haominlal Singsit", secretary: "Pu Jamtinlal Lupheng" },
  { id: 15, period: "2009-2010", president: "Pu Haominlal Singsit", secretary: "Pu Jamtinlal Lupheng" },
  { id: 16, period: "2010-2011", president: "Pu Benjoy Khongsai", secretary: "Pu Letkholen Haokip" },
  { id: 17, period: "2011-2012", president: "Pu Letkholun Haokip", secretary: "Pu Seitinlen Sitlhou" },
  { id: 18, period: "2012-2013", president: "Pu Demkhothang Haokip", secretary: "Pu Lamminthang Haokip" },
  { id: 19, period: "2013-2014", president: "Pu Khaiminlen Doungel", secretary: "Pu Khamchinsat Khongsai" },
  { id: 20, period: "2014-2015", president: "Pu Khamchinsat Khongsai", secretary: "Pu Jangkhogin Haokip" },
  { id: 21, period: "2015-2016", president: "Pu Ginkhanmang Taithul", secretary: "Pu Mangjangam Kipgen" },
  { id: 22, period: "2016-2018", president: "Pu Lamminthang Doungel", secretary: "Pu Mangjangam Kipgen/Pu Lamginthang Kipgen" },
  { id: 23, period: "2018-2020", president: "Pu Haominlal Singsit", secretary: "Pu Henminthang Haokip/Pu T.Samuel Khongsai" },
  { id: 24, period: "2020-2021", president: "Pu Thongsei Haokip", secretary: "Pu Lamgougin Khongsai/Pu Lamminlal Kipgen" },
  { id: 25, period: "2021-2022", president: "Pu Jangkhogin Haokip", secretary: "Pu Lungouthang Sitlhou" },
];

const Leaders = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Leaders Since 1995</h1>
        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">The Legacy of KSO Pune Executives</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadersData.map((leader, i) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.1 }}
            className="glass-panel p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400 font-black shadow-inner">
                {leader.id}
              </div>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {leader.period}
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Crown size={20} className="text-emerald-500 mt-1" />
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">President</p>
                  <p className="text-white font-bold text-lg font-serif italic">{leader.president}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield size={20} className="text-zinc-600 mt-1" />
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">General Secretary</p>
                  <p className="text-zinc-300 font-medium">{leader.secretary}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;

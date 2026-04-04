import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Goal, Shield, Calendar, MapPin } from 'lucide-react';

const leagueTable = [
  { rank: 1, team: "Keilungset FC", mp: 24, w: 13, d: 3, l: 8, pts: 42, gf: 85, ga: 72, gd: 13 },
  { rank: 2, team: "Kanamjem FC", mp: 24, w: 10, d: 7, l: 7, pts: 37, gf: 74, ga: 67, gd: 7 },
  { rank: 3, team: "Kathang'e FC", mp: 24, w: 6, d: 4, l: 14, pts: 22, gf: 70, ga: 91, gd: -21 },
];

const goalScorers = [
  { rank: 1, goal: 40, player: "Jazar", team: "Keilungset FC" },
  { rank: 2, goal: 28, player: "Haoboi", team: "Kathang'e FC" },
  { rank: 3, goal: 18, player: "Robert", team: "Kanamjem FC" },
  { rank: 4, goal: 13, player: "Mangpu", team: "Keilungset FC" },
  { rank: 5, goal: 12, player: "Paolun", team: "Kanamjem FC" },
  { rank: 5, goal: 12, player: "Oscar", team: "Kanamjem FC" },
  { rank: 6, goal: 9, player: "Goumang", team: "Kanamjem FC" },
  { rank: 6, goal: 9, player: "Hegou", team: "Kanamjem FC" },
  { rank: 7, goal: 8, player: "Seimin", team: "Kathang'e FC" },
  { rank: 7, goal: 8, player: "Zalen", team: "Keilungset FC" },
];

const Sports = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">PKSOPL 2021</h1>
        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">The 1st Pune KSO Premier League</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-12">
          {/* League Table */}
          <section className="glass-panel p-10 rounded-[3rem] border border-white/10 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-8 font-serif italic flex items-center gap-4">
              <Trophy className="text-amber-500" />
              League Table
            </h2>
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">Rank</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">Teams</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">MP</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">W</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">D</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">L</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">Pts</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">GF</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">GA</th>
                    <th className="py-4 px-4 text-xs font-black text-emerald-500 uppercase tracking-widest">GD</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((row) => (
                    <tr key={row.rank} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-bold">{row.rank}</td>
                      <td className="py-4 px-4 text-white font-serif italic">{row.team}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.mp}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.w}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.d}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.l}</td>
                      <td className="py-4 px-4 text-emerald-500 font-bold">{row.pts}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.gf}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.ga}</td>
                      <td className="py-4 px-4 text-zinc-400">{row.gd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Individual Awards */}
          <section className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Top Scorer", name: "Jazar Singson", icon: Goal, color: "text-amber-500" },
              { title: "Best Player", name: "Haoboi Haokip", icon: Star, color: "text-emerald-500" },
              { title: "Best Goal Keeper", name: "Minthang Neihsial", icon: Shield, color: "text-blue-500" },
            ].map((award, i) => (
              <div key={i} className="glass-panel p-8 rounded-[2.5rem] border border-white/10 text-center group">
                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 ${award.color} group-hover:scale-110 transition-transform`}>
                  <award.icon size={32} />
                </div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">{award.title}</p>
                <h4 className="text-white font-bold font-serif italic text-xl">{award.name}</h4>
              </div>
            ))}
          </section>
        </div>

        {/* Goal Scorers List */}
        <aside className="glass-panel p-10 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8 font-serif italic flex items-center gap-4">
            <Goal className="text-emerald-500" />
            Goal Scorers
          </h2>
          <div className="space-y-6">
            {goalScorers.map((scorer, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 font-black text-xs">{scorer.rank}</span>
                  <div>
                    <p className="text-white font-bold font-serif italic">{scorer.player}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{scorer.team}</p>
                  </div>
                </div>
                <span className="text-emerald-500 font-black text-xl">{scorer.goal}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* League Info */}
      <section className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 grid md:grid-cols-3 gap-12">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400">
            <Calendar size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Duration</p>
            <p className="text-white font-bold">10th July - 25th Sept 2021</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-400">
            <MapPin size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Venue</p>
            <p className="text-white font-bold">The Golden Boot, Kondhwa</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
            <Shield size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Organized By</p>
            <p className="text-white font-bold">KSO Pune Executive</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;

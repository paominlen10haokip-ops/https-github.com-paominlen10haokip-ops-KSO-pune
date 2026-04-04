import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Users, Quote } from 'lucide-react';

const History = () => {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Kiphudoh Dan Thusim</h1>
        <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-sm">Brief History of KSO Pune</p>
      </motion.div>

      {/* THUMASA Section */}
      <section className="mb-32 glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-8 font-serif italic flex items-center gap-4">
          <BookOpen className="text-emerald-500" />
          THUMASA (Preface)
        </h2>
        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg italic font-serif">
          <p>
            Kuki Students' Organisation, Pune hi ana umlui ho a kon a ana ana kikholdoh dung jui in 4th August 1995 Kum a ana kiphut doh ahi in, kum 2020 a chu Silver Jubilee ana hi a ahitan, hinla Covid-19 jeh in Silver Jubilee man dinga gon anahi jong chu ana kivo hai tan ahi.
          </p>
          <p>
            Hijeng tajongle Executive 2021-2022 in ngaikhoh na neitah in KSO history le akiphudoh a kipat lamkai ho chengse beh suh toh ahi teina ding in kihou lhah na le kiphat sahna ana kinei dung jui in, kahin boipi pan in ahi.
          </p>
          <p>
            Pune Khopi sung a ana um masa le tuchan a ana umjing former KSOP Advisor, Pu James Haokip toh kitho in November 2021 a kipat February 2022 sung a hin, gimtah in kana boipi hon in, tuhin ama panlah najal in lamkai lui cheng le KSOP ahung kiphudoh dan history mipi muthei le khonung chan a mang talou hel ding in semdoh ahitan ahi.
          </p>
          <div className="pt-8 border-t border-white/5 text-right">
            <p className="text-white font-bold">(JANGKHOGIN HAOKIP)</p>
            <p className="text-zinc-500 text-sm">President, KSO Pune 2021-2022</p>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="space-y-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 font-serif italic kuki-border pb-4 inline-block">The Beginning</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Kum chesa 1995 masang in Student Organization ana um hih jongleh, 1973 apat chun adeh in Thadou speaking nungah Nengboi in Jehanggir Hospital mun ah (Nurse) naa anatong in ahin itih chan atoh a itih-a adalhah ham tivang akihe tapon ahi. Kum le lha ache dungjui in 1983 kum chun Students 7 ana um uvin, 21/03/1991 kum in kei le ka insung mi jong Spicer Memorial College a din kana umpan tao vin ahi.
              </p>
              <p>
                14th Sept. 1994 kum in Pune a umcheng in Organization apoimo dungjui in jinglam nidan 11:30 AM in member atam thei pen in UBS mun ah meeting ana kinei khom in, hiche nia Committee Chair person din Pu Jangkholam Haokip (alias Dr. J Lamboi), Recording Secy. din Pu Late Hejang Lamkhojang Haokip in pan eina lah peh uvin, committee kipatna le lhandohna din Pu James T Haokip in anei in, Agenda masa penin Organization min ding ngaidan chom chom anoiya chengho seikhomna akinei in,
              </p>
            </div>
          </motion.div>
          <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop" 
              alt="Historical Gathering" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 font-serif italic">Proposed Names in 1994:</h3>
          <ul className="grid md:grid-cols-3 gap-6">
            {["TSA (Thadou Students' Association)", "KSO (Kuki Students' Organisation)", "CKSO (Chin Kuki Students' Organisation)"].map((name, i) => (
              <li key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-zinc-300 font-bold flex items-center gap-4">
                <span className="text-emerald-500 font-black">{i+1}.</span>
                {name}
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-6 text-zinc-400 italic">
            <p>
              Atamjo deisah dungjui in Kuki Students' Organisation tin namdetna akinei tan ahi. Date 4th Aug. 1995 kum in anivei channan (Alliance Church Ramyanagari) munna Fresher's meet cum election kin akinei in hiche nia committee resolution dungjui in official tah in Kuki Students' Organisation, Pune tundoh ahin chuleh lamkai mopo ding jong lhendoh ana hitai.
            </p>
            <p>
              Hiche election kin a chu Election Commission in Pu Seikhopao Haokip in pan ana lah in, lamkai lhendoh a umho chu anoiya bang hi ahi:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-white font-bold not-italic">
              <li>1. President: Pu Stephen Touthang</li>
              <li>2. Vice President: Pu Kamkhotinthang Neihsial</li>
              <li>3. Gen. Secy: Pu Late Hejang Lamkhojang Haokip</li>
              <li>4. Asst. Secy: Pu Paul Paolien Haokip</li>
              <li>5. Finance Secy: Pu Thongkhotinlal Haokip</li>
              <li>6. Treasurer: Pi Thomi Singson</li>
            </ul>
            <p>
              Hiche ni a kipat chun KSO Pune in phatah in pan ahung la pan tan, kum khat jou 1996 kum in Lonavala mun ah KSO Revival meeting ana kinei in, hiche kin a chu Speaker in Pu Dino Touthang le Pi Thomi Singson in pan ana la hon in ahi.
            </p>
            <p>
              Kum 1997 kum chun Spicer Memorial College mun ah KSO Meet ana kinei in, hiche kin a chu Chief Guest in Pi Kim Gangte (MP Manipur) ana hi in, hiche ni a chu KSO Pune in ana kithopi ho chengse chunga kipa thuseina ana kinei in ahi.
            </p>
          </div>
        </div>

        {/* KWS Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 font-serif italic">KWS CHAIRMAN: 10th Aug. 2003-2006</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>1. Mr. Seiboi Guite (2002 - 2003)</li>
              <li>2. Mr. Nehlen Munluo (2003 - 2004)</li>
              <li>3. Mr. Satpao Hangsing (2004 - 2005)</li>
              <li>4. Mr. Lunmang Haokip (2005 - 2006)</li>
            </ul>
          </div>
          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 font-serif italic">KWS CHAPLIANS: 2006 - Till date</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>1. Pr. D. Hemkhomang Haokip (2006 - 2008)</li>
              <li>2. Pr. Alfred Chiru (2008 - 2010)</li>
              <li>3. Mr. Henkhosei Touthang (2010 - 2012)</li>
              <li>4. Mr. Lunminlal Haokip (2012 - 2014)</li>
              <li>5. Mr. Jangminlal Mate (2014 - 2016)</li>
              <li>6. Dr. SC. Hemkhomang Haokip (2016 - 2021)</li>
              <li>7. Mr. Sehginmang Khongsai (2021 - Till date)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;

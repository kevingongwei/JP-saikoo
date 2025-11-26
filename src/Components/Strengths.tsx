import React from 'react';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Strengths: React.FC = () => {
  const strengths = [
    {
      title: "豊富な実務経験",
      subtitle: "10年以上の現場実績",
      description: "単なる開発経験だけでなく、10年以上にわたり銀行案件の開発に携わり、現場に常駐。銀行特有のオペレーションや文化を深く理解しています。",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "業務知識の専門性",
      subtitle: "ビジネスプロセスへの精通",
      description: "IT技術はもちろん、銀行の「業務（ビジネスプロセス）」まで精通しています。お客様の真の課題を理解し、的確なシステム要件に落とし込む能力に長けています。",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "金融システム開発実績",
      subtitle: "信頼性と品質",
      description: "長年にわたり、日系メガバンク向けの複雑で極めて高い信頼性が求められるシステム開発を担い続けてきた実績があります。",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      color: "bg-slate-700"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">弊社の強み</h2>
        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        <p className="mt-4 text-slate-600">
           技術力と業務知識の融合により、<br className="md:hidden"/>金融機関のDXを強力にサポートします。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 transform hover:-translate-y-1"
          >
            <div className={`p-6 ${item.color} flex justify-between items-center`}>
              {item.icon}
              <span className="text-white/20 font-bold text-4xl absolute right-4 -top-1 select-none pointer-events-none">
                0{index + 1}
              </span>
            </div>
            
            <div className="p-8">
               <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h3>
               <p className="text-brand-orange text-sm font-bold mb-4 tracking-wide uppercase">{item.subtitle}</p>
               <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
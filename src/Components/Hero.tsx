import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue to-transparent transform skew-x-12 translate-x-20"></div>
         <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-blue to-transparent transform -skew-x-12 -translate-x-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold tracking-wider mb-6">
            Japan Saikoo Co., Ltd.
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
            最高なサービスを<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">
              最高なお客様へ
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            金融DXのプロフェッショナルとして、<br className="md:hidden" />
            日中IT分野における革新的なソリューションを提供します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="#about"
              className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              会社概要を見る
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold shadow-sm hover:bg-slate-50 hover:border-brand-blue/30 transition-all"
            >
              事業内容を知る
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-blue rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};
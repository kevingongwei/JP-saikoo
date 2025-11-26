import React, { useState } from 'react';
import { Building2, MapPin, Calendar, Globe, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CompanyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'japan' | 'china'>('japan');

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">会社概要</h2>
        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        <p className="mt-4 text-slate-600">日本と上海の2拠点でグローバルに事業を展開しています</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('japan')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'japan' 
                  ? 'bg-white text-brand-blue shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              日本法人
            </button>
            <button
              onClick={() => setActiveTab('china')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'china' 
                  ? 'bg-white text-brand-blue shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              上海法人
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <AnimatePresence mode="wait">
            {activeTab === 'japan' ? (
              <motion.div
                key="japan"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-6">
                   <div className="bg-brand-blue/10 p-3 rounded-lg">
                     <Building2 className="text-brand-blue" size={24} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-800">日本賽功株式会社</h3>
                </div>
                
                <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                  <dt className="text-slate-500 font-medium">設立年月日</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium">令和7年（2025年）3月28日</dd>

                  <dt className="text-slate-500 font-medium">代表取締役</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium flex items-center gap-2">
                    <User size={16} className="text-slate-400" /> GONG WEI（龔 偉）
                  </dd>

                  <dt className="text-slate-500 font-medium">資本金</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium">5,160,000円</dd>

                  <dt className="text-slate-500 font-medium">住所</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium flex items-start gap-2">
                    <MapPin size={16} className="text-slate-400 mt-1 flex-shrink-0" />
                    東京都港区東麻布22-5 <br />AZABU EAST COURT 106C
                  </dd>

                  <dt className="text-slate-500 font-medium">事業内容</dt>
                  <dd className="md:col-span-2 text-slate-800 text-sm leading-relaxed space-y-2">
                    <p>• コンピュータシステム・ソフトウェアの企画、開発、販売、保守</p>
                    <p>• 電子商取引向けハードウェア・プログラム設計開発</p>
                    <p>• 情報処理システム・データベース構築コンサルティング</p>
                    <p>• ネットワーク管理システムの開発</p>
                    <p>• 労働者派遣事業（一般・特定）</p>
                  </dd>
                </dl>
              </motion.div>
            ) : (
              <motion.div
                key="china"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-6">
                   <div className="bg-brand-orange/10 p-3 rounded-lg">
                     <Globe className="text-brand-orange" size={24} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-800">上海賽功信息科技有限公司</h3>
                </div>

                <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                  <dt className="text-slate-500 font-medium">設立年月日</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium">2020年3月3日</dd>

                  <dt className="text-slate-500 font-medium">代表取締役</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium flex items-center gap-2">
                    <User size={16} className="text-slate-400" /> GONG WEI（龔 偉）
                  </dd>

                  <dt className="text-slate-500 font-medium">資本金</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium">2,000,000元</dd>

                  <dt className="text-slate-500 font-medium">住所</dt>
                  <dd className="md:col-span-2 text-slate-800 font-medium flex items-start gap-2">
                    <MapPin size={16} className="text-slate-400 mt-1 flex-shrink-0" />
                    上海市奉賢区海坤路1号ビル1
                  </dd>

                  <dt className="text-slate-500 font-medium">事業内容</dt>
                  <dd className="md:col-span-2 text-slate-800 text-sm leading-relaxed space-y-2">
                    <p>• 技術開発、ITコンサルティング、技術移転</p>
                    <p>• ソフトウェアアウトソーシングサービス</p>
                    <p>• 金融システム統合、運用保守サービス</p>
                    <p>• 日系金融機関向けオフショア開発拠点</p>
                  </dd>
                </dl>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
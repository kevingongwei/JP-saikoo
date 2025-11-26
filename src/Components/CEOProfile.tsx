import React from 'react';
import { UserCheck } from 'lucide-react';

export const CEOProfile: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Image/Title */}
          <div className="md:w-1/3 bg-slate-100 flex flex-col items-center justify-center p-10 text-center border-r border-slate-200">
             <div className="w-32 h-32 bg-brand-blue rounded-full flex items-center justify-center mb-6 shadow-lg">
                <UserCheck size={64} className="text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-800">代表取締役</h3>
             <h2 className="text-2xl font-bold text-brand-blue mt-1">GONG WEI</h2>
             <p className="text-slate-500 font-medium">（龔 偉）</p>
             <div className="mt-6 inline-block px-4 py-2 bg-white rounded-lg text-xs font-bold text-brand-orange border border-brand-orange/20 shadow-sm">
               日中金融ITのエキスパート
             </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-2/3 p-10 md:p-14">
             <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">経歴・プロフィール</h3>
             
             <p className="text-slate-600 mb-8 leading-relaxed font-medium">
               日中金融IT分野における16年の実績を持つエキスパート。<br/>
               2009年に日本の大学を卒業後、NECグループ、みずほ情報総研を経て独立。
               長年にわたり日系メガバンクの基幹業務システム（資金、為替、決済等）の企画から開発・保守までを一貫して担当し、金融DXを支援し続けています。
             </p>

             <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-blue text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="text-[10px] font-bold">2009</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-slate-700 text-sm">キャリアスタート</div>
                        <div className="text-slate-500 text-xs">日本の大学卒業後、NECグループにて日系企業向けITインフラ構築に従事。</div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="text-[10px] font-bold">2012</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-slate-700 text-sm">みずほ情報総研</div>
                        <div className="text-slate-500 text-xs">みずほ銀行向け基幹システム（資金・為替等）の企画・開発を一貫して担当。</div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="text-[10px] font-bold">2020</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-slate-700 text-sm">上海賽功情報科技有限公司 設立</div>
                        <div className="text-slate-500 text-xs">独立し、中国上海にて法人設立。日系銀行グループとの強固な関係を継続。</div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-orange text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="text-[10px] font-bold">2025</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                        <div className="font-bold text-brand-blue text-sm">日本賽功株式会社 設立</div>
                        <div className="text-slate-600 text-xs">4月に日本法人設立、10月に活動拠点を本格的に日本へ移行。</div>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
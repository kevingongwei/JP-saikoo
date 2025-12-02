import React from 'react';
import { Server, Code, Briefcase, ChevronRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "金融システム開発",
      description: "銀行業務における基幹システムから周辺システムまで、高い信頼性が求められる開発を行います。",
      icon: <Code className="w-8 h-8 text-white" />,
      projects: ["為替個別値決めシステム", "資金業務システム", "手数料優遇システム開発"],
      color: "bg-blue-600"
    },
    {
      title: "ITコンサルティング",
      description: "お客様のビジネスプロセス（業務）を深く理解し、真の課題解決に向けたシステム要件を定義します。",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      projects: ["PMO支援", "システム更改画策", "常駐支援"],
      color: "bg-orange-500"
    },
    {
      title: "インフラ・保守運用",
      description: "安定したサービス提供のためのサーバー構築、ネットワーク管理、セキュリティ対策を実施します。",
      icon: <Server className="w-8 h-8 text-white" />,
      projects: ["新規構築ソリューション", "移転ソリューション", "運用保守"],
      color: "bg-slate-700"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">事業内容・実績</h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
        <p className="mt-4 text-slate-600">豊富な実績と専門知識で、お客様のDXを支援します</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 transform hover:-translate-y-1"
          >
            <div className={`p-6 ${service.color} flex justify-between items-center`}>
              {service.icon}
              <span className="text-white/20 font-bold text-5xl absolute right-4 -top-2 select-none pointer-events-none">
                0{index + 1}
              </span>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">主な実績</h4>
                <ul className="space-y-2">
                  {service.projects.map((project, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                      <ChevronRight size={14} className="text-brand-orange mr-2" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

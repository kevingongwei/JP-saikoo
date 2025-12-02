import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <svg viewBox="0 0 240 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 10 L45 35 L15 35 L15 50 L55 50 L60 40 L60 10 Z" fill="#F59E0B" />
    <path d="M15 10 L35 10 L35 25 L15 25 Z" fill="#F59E0B" />
    <path d="M5 10 L12 10" stroke="#F59E0B" strokeWidth="2" />
    <path d="M5 16 L12 14" stroke="#F59E0B" strokeWidth="2" />
    <path d="M8 22 L14 18" stroke="#F59E0B" strokeWidth="2" />
    <path d="M75 50 L85 20 L105 20 L105 28 L95 28 L90 42 L105 42 L102 50 Z" fill="#ffffff" />
    <path d="M110 50 L113 40 L125 40 L122 50 Z M116 35 L128 35 L131 25 L119 25 Z" fill="#ffffff" /> 
    <path d="M130 50 L138 25 L148 25 L140 50 Z" fill="#ffffff" />
    <path d="M150 50 L153 20 L163 20 L161 35 L170 20 L182 20 L170 36 L180 50 L168 50 L160 38 L158 50 Z" fill="#ffffff" />
    <path d="M185 38 A 10 10 0 1 1 205 38 A 10 10 0 1 1 185 38 M190 38 A 5 5 0 1 0 200 38 A 5 5 0 1 0 190 38" fill="#ffffff" />
    <path d="M210 38 A 10 10 0 1 1 230 38 A 10 10 0 1 1 210 38 M215 38 A 5 5 0 1 0 225 38 A 5 5 0 1 0 215 38" fill="#ffffff" />
  </svg>
);

const Logo2: React.FC = () => {
  return (
    <div>
      <img src="/logo192.png" alt="log" style={{height:'40px'}} />
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            {/* <Logo className="h-8 mb-2" /> */}
            <Logo2 />
            <p className="text-xs mt-2">日本賽功株式会社 | Japan Saikoo Co., Ltd.</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-white transition-colors">ホーム</a>
            <a href="#about" className="hover:text-white transition-colors">会社概要</a>
            <a href="#services" className="hover:text-white transition-colors">事業内容</a>
            <a href="mailto:wei.gong@saikoo.jp" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Japan Saikoo Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
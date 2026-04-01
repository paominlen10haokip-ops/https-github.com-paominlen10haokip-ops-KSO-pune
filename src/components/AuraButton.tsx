import React from 'react';

interface AuraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const AuraButton: React.FC<AuraButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm font-bold tracking-tight ring-white/20 ring-1 rounded-full px-8 py-4 relative items-center justify-center font-sans shadow-xl";
  
  const variantStyles = {
    primary: "bg-black text-white shadow-white/5",
    secondary: "bg-emerald-600 text-white shadow-emerald-600/20",
    outline: "bg-white/5 text-white border border-white/10 backdrop-blur-md",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="animate-star absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-white blur-[0.5px]" style={{ '--x': '-40px', '--y': '-20px', '--duration': '4s', '--delay': '0s' } as any}></div>
        <div className="animate-star absolute top-1/2 left-[40%] h-[1.5px] w-[1.5px] rounded-full bg-blue-200" style={{ '--x': '30px', '--y': '-30px', '--duration': '5s', '--delay': '1s' } as any}></div>
        <div className="absolute top-[20%] left-[70%] h-1 w-1 rounded-full bg-indigo-400 blur-[0.5px]" style={{ animation: 'move-star 3s ease-in-out infinite', '--x': '-20px', '--y': '30px', '--duration': '3.5s', '--delay': '0.2s' } as any}></div>
        <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 rounded-full bg-white/40 blur-sm animate-pulse" style={{ animationDuration: '2s' }}></div>
      </div>
      
      {/* Aura Glows */}
      <div className="absolute -top-12 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[32px] transition-all duration-500 group-hover:bg-blue-500/45"></div>
      <div className="-bottom-12 -left-4 blur-[32px] transition-all duration-500 group-hover:bg-orange-400/30 bg-orange-500/15 w-[70%] h-24 rounded-full absolute"></div>
      
      <span className="relative z-10 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:tracking-wider flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default AuraButton;

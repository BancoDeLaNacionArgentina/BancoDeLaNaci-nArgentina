import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-primary via-primary to-[#00829B] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-700">
        <div className="flex items-center space-x-1">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#00A9CE"/>
              <path d="M3 4h18v5H3V4z" fill="#00A9CE"/>
              <rect x="7" y="13" width="10" height="2" fill="white"/>
              <rect x="7" y="16" width="6" height="2" fill="white"/>
            </svg>
          </div>
          <div className="text-white text-4xl font-bold">BNA</div>
          <div className="text-[#FF8C42] text-5xl font-bold leading-none">+</div>
        </div>
        <div className="text-white/80 text-sm tracking-wide">Banco Nación</div>
      </div>
      <div className="absolute bottom-20">
        <div className="text-white/60 text-sm mb-4">Inicializando</div>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
}

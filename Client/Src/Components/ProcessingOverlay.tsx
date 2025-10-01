interface ProcessingOverlayProps {
  message?: string;
}

export default function ProcessingOverlay({ message = "Procesando Transacción" }: ProcessingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-6 max-w-sm mx-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#00A9CE"/>
            <path d="M3 4h18v5H3V4z" fill="#00A9CE"/>
            <rect x="7" y="13" width="10" height="2" fill="white"/>
            <rect x="7" y="16" width="6" height="2" fill="white"/>
          </svg>
        </div>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}

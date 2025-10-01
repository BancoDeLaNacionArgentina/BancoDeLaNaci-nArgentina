import { useState } from "react";
import { ChevronLeft, Bell, Settings } from "lucide-react";
import BalanceCard from "./BalanceCard";
import QuickActions from "./QuickActions";
import ModoSection from "./ModoSection";

interface DashboardProps {
  userName: string;
  accountNumber: string;
  balance: string;
  onLogout: () => void;
  onActionClick: (actionId: string) => void;
}

export default function Dashboard({ userName, accountNumber, balance, onLogout, onActionClick }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"billetera" | "banco">("billetera");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onLogout}
            className="text-white hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="button-back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#00A9CE"/>
                <path d="M3 4h18v5H3V4z" fill="#00A9CE"/>
                <rect x="7" y="13" width="10" height="2" fill="white"/>
                <rect x="7" y="16" width="6" height="2" fill="white"/>
              </svg>
            </div>
            <div className="text-white text-xl font-bold">BNA</div>
            <div className="text-[#FF8C42] text-2xl font-bold leading-none">+</div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="text-white hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="button-refresh-home"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              className="text-white hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="button-settings"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 pb-4">
          <button
            onClick={() => setActiveTab("billetera")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "billetera"
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
            data-testid="button-tab-billetera"
          >
            Tu billetera
          </button>
          <button
            onClick={() => setActiveTab("banco")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "banco"
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
            data-testid="button-tab-banco"
          >
            Tu banco
          </button>
        </div>
      </div>

      <div className="px-4 space-y-6 mt-6">
        <BalanceCard accountNumber={accountNumber} balance={balance} />
        <QuickActions onActionClick={onActionClick} />
        <ModoSection />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Descuentos y promociones</h3>
            <button
              className="text-primary text-sm font-medium hover-elevate active-elevate-2 px-3 py-1 rounded-md"
              data-testid="button-ver-todos-promos"
            >
              Ver todos
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-[#FF8C42]/20 to-primary/20 rounded-xl p-6 border border-[#FF8C42]/30">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-[#FF8C42] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">%</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  ¡Descuentos exclusivos!
                </h4>
                <p className="text-sm text-muted-foreground">
                  Disfrutá de promociones especiales en tus comercios favoritos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

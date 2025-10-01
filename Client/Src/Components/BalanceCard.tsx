import { useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";

interface BalanceCardProps {
  accountNumber: string;
  balance: string;
}

export default function BalanceCard({ accountNumber, balance }: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-white via-white to-gray-50 dark:from-card dark:via-card dark:to-card/80 rounded-2xl p-6 shadow-lg border border-card-border overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF8C42]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">CA $</span>
            <span className="text-sm text-muted-foreground">{accountNumber}</span>
          </div>
          <button
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-favorite"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-4xl font-bold text-foreground">
            {showBalance ? `$ ${balance}` : "$ ****"}
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="button-toggle-balance"
          >
            {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          <button
            className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="button-refresh"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

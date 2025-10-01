import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import LoginScreen from "@/components/LoginScreen";
import Dashboard from "@/components/Dashboard";
import TransferScreen from "@/components/TransferScreen";
import ProcessingOverlay from "@/components/ProcessingOverlay";

export default function Home() {
  const [appState, setAppState] = useState<"splash" | "login" | "dashboard" | "transfer">("splash");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Mirian Elizabeth",
    accountNumber: "**** 67496",
    balance: "0,00"
  });

  const handleSplashComplete = () => {
    setAppState("login");
  };

  const handleLogin = (username: string, password: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setAppState("dashboard");
    }, 2000);
  };

  const handleLogout = () => {
    setAppState("login");
  };

  const handleActionClick = (actionId: string) => {
    console.log('Action clicked:', actionId);
    if (actionId === "transfer") {
      setAppState("transfer");
    }
  };

  const handleTransferBack = () => {
    setAppState("dashboard");
  };

  const handleTransfer = (recipient: string, amount: string) => {
    console.log('Transfer to:', recipient, 'Amount:', amount);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setAppState("dashboard");
    }, 2000);
  };

  return (
    <div className="relative">
      {appState === "splash" && <SplashScreen onComplete={handleSplashComplete} />}
      {appState === "login" && <LoginScreen onLogin={handleLogin} />}
      {appState === "dashboard" && (
        <Dashboard
          userName={currentUser.name}
          accountNumber={currentUser.accountNumber}
          balance={currentUser.balance}
          onLogout={handleLogout}
          onActionClick={handleActionClick}
        />
      )}
      {appState === "transfer" && (
        <TransferScreen onBack={handleTransferBack} onTransfer={handleTransfer} />
      )}
      {isProcessing && <ProcessingOverlay />}
    </div>
  );
}

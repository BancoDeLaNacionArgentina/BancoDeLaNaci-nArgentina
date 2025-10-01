import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Fingerprint } from "lucide-react";

interface LoginScreenProps {
  onLogin: (username: string, password: string) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-primary via-primary to-[#00829B] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start pt-12 px-6">
        <div className="flex items-center space-x-1 mb-16">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="#00A9CE"/>
              <path d="M3 4h18v5H3V4z" fill="#00A9CE"/>
              <rect x="7" y="13" width="10" height="2" fill="white"/>
              <rect x="7" y="16" width="6" height="2" fill="white"/>
            </svg>
          </div>
          <div className="text-white text-3xl font-bold">BNA</div>
          <div className="text-[#FF8C42] text-4xl font-bold leading-none">+</div>
        </div>

        <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Ingresá a tu cuenta</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12"
                data-testid="input-username"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Clave"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12"
                data-testid="input-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="button-toggle-password"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-input accent-primary"
                data-testid="checkbox-remember"
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground">
                Recordar usuario
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#FF8C42] hover:bg-[#FF8C42] text-white font-semibold rounded-xl"
              data-testid="button-login"
            >
              Ingresar
            </Button>

            <button
              type="button"
              className="w-full text-primary text-sm font-medium hover-elevate active-elevate-2 py-2 rounded-md"
              data-testid="button-forgot-password"
            >
              Olvidé mi clave
            </button>
          </form>
        </div>

        <button
          onClick={() => onLogin("demo", "demo")}
          className="mt-8 flex items-center justify-center space-x-2 hover-elevate active-elevate-2 p-4 rounded-2xl"
          data-testid="button-biometric"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
            <Fingerprint className="w-10 h-10 text-white" />
          </div>
        </button>
        <div className="text-white/80 text-sm mt-3">Ingresá con huella</div>
      </div>
    </div>
  );
}

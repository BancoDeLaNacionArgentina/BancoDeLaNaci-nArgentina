import { useState } from "react";
import { ChevronLeft, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TransferScreenProps {
  onBack: () => void;
  onTransfer: (recipient: string, amount: string) => void;
}

export default function TransferScreen({ onBack, onTransfer }: TransferScreenProps) {
  const [step, setStep] = useState<"select" | "amount" | "confirm">("select");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const contacts = [
    { id: 1, name: "Juan Pérez", account: "CBU: 01701234...4567" },
    { id: 2, name: "María García", account: "CBU: 01705678...8901" },
    { id: 3, name: "Carlos Rodríguez", account: "Alias: carlos.rod" },
  ];

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectRecipient = (name: string) => {
    setRecipient(name);
    setStep("amount");
  };

  const handleContinue = () => {
    if (step === "amount" && amount) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    onTransfer(recipient, amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary px-4 py-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="text-white hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="button-back-transfer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-white">Transferir</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {step === "select" && (
          <>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar contacto, CBU o alias"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
                data-testid="input-search-recipient"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground">CONTACTOS FRECUENTES</h3>
              {filteredContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => handleSelectRecipient(contact.name)}
                  className="w-full bg-card rounded-xl p-4 border border-card-border hover-elevate active-elevate-2 flex items-center space-x-3"
                  data-testid={`button-contact-${contact.id}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.account}</div>
                  </div>
                </button>
              ))}
            </div>

            <Button
              className="w-full h-12 bg-[#FF8C42] hover:bg-[#FF8C42] text-white font-semibold rounded-xl"
              data-testid="button-new-recipient"
            >
              Nuevo destinatario
            </Button>
          </>
        )}

        {step === "amount" && (
          <>
            <div className="bg-card rounded-2xl p-6 border border-card-border">
              <div className="text-sm text-muted-foreground mb-2">Destinatario</div>
              <div className="font-semibold text-foreground">{recipient}</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Monto a transferir
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-foreground">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-10 h-16 text-2xl font-bold"
                    data-testid="input-amount"
                  />
                </div>
              </div>

              <Input
                type="text"
                placeholder="Motivo (opcional)"
                className="h-12"
                data-testid="input-description"
              />
            </div>

            <Button
              onClick={handleContinue}
              disabled={!amount}
              className="w-full h-12 bg-[#FF8C42] hover:bg-[#FF8C42] text-white font-semibold rounded-xl disabled:opacity-50"
              data-testid="button-continue"
            >
              Continuar
            </Button>
          </>
        )}

        {step === "confirm" && (
          <>
            <div className="bg-card rounded-2xl p-6 border border-card-border space-y-4">
              <h3 className="font-semibold text-foreground">Confirmá la transferencia</h3>
              
              <div className="space-y-3 pt-3 border-t border-card-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destinatario</span>
                  <span className="font-medium text-foreground">{recipient}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monto</span>
                  <span className="font-semibold text-foreground text-lg">$ {amount}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={() => setStep("amount")}
                variant="outline"
                className="flex-1 h-12 rounded-xl"
                data-testid="button-cancel"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 h-12 bg-[#FF8C42] hover:bg-[#FF8C42] text-white font-semibold rounded-xl"
                data-testid="button-confirm-transfer"
              >
                Confirmar
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

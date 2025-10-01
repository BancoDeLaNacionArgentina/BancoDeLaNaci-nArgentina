import { ArrowLeftRight, Smartphone, Send, Phone, FileText, Plus } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface QuickActionsProps {
  onActionClick: (actionId: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions: QuickAction[] = [
    {
      id: "transfer",
      label: "Transferir",
      icon: <ArrowLeftRight className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("transfer")
    },
    {
      id: "pedir-modo",
      label: "Pedir con MODO",
      icon: <Smartphone className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("pedir-modo")
    },
    {
      id: "enviar-modo",
      label: "Enviar con MODO",
      icon: <Send className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("enviar-modo")
    },
    {
      id: "recarga",
      label: "Recarga celular",
      icon: <Phone className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("recarga")
    },
    {
      id: "servicios",
      label: "Pagar servicios",
      icon: <FileText className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("servicios")
    },
    {
      id: "mas",
      label: "Aún más",
      icon: <Plus className="w-8 h-8 text-[#FF8C42]" />,
      onClick: () => onActionClick("mas")
    }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-card-border">
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex flex-col items-center space-y-2 hover-elevate active-elevate-2 p-3 rounded-xl"
            data-testid={`button-${action.id}`}
          >
            <div className="w-14 h-14 bg-[#FF8C42]/10 rounded-xl flex items-center justify-center">
              {action.icon}
            </div>
            <span className="text-xs font-medium text-foreground text-center leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

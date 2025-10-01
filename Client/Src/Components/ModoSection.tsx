import { FileText, CreditCard } from "lucide-react";

export default function ModoSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Pagos con MODO</h3>
        <button
          className="text-primary text-sm font-medium hover-elevate active-elevate-2 px-3 py-1 rounded-md"
          data-testid="button-ver-todos"
        >
          Ver todos
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-card rounded-xl p-6 shadow-sm border border-card-border hover-elevate active-elevate-2 flex flex-col items-center space-y-3"
          data-testid="button-pagos-efectuados"
        >
          <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-[#FF8C42]" />
          </div>
          <span className="text-sm font-medium text-foreground text-center">
            Pagos efectuados
          </span>
        </button>

        <button
          className="bg-card rounded-xl p-6 shadow-sm border border-card-border hover-elevate active-elevate-2 flex flex-col items-center space-y-3"
          data-testid="button-administrar-tarjetas"
        >
          <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-lg flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-[#FF8C42]" />
          </div>
          <span className="text-sm font-medium text-foreground text-center">
            Administrar tarjetas
          </span>
        </button>
      </div>
    </div>
  );
}

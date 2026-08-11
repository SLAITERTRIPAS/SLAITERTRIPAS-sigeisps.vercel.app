import React from 'react';

export const InstitutionalHeader = ({
  direcaoName,
  sectorName,
  year,
  isOwner,
  isPlanificacaoHeader,
  unidadeName,
  title = "PLANO DE ATIVIDADE",
}: {
  direcaoName: string;
  sectorName: string;
  year: number;
  isOwner?: boolean;
  isPlanificacaoHeader?: boolean;
  unidadeName: string;
  title?: string;
}) => {
  // Garantir que os nomes estão em maiúsculas para o padrão institucional
  const displayUnidade = (unidadeName || "SERVIÇOS CENTRAIS").toUpperCase();
  const displayDirecao = (direcaoName || "DIRECÇÃO GERAL").toUpperCase();
  const displaySector = (sectorName || direcaoName || "").toUpperCase();

  return (
    <div className="text-center mb-3 flex flex-col items-center w-full bg-white p-6 rounded-t-3xl">
      <div className="mb-4">
        <img
          src="https://lh3.googleusercontent.com/d/11zvvpOpZARM1yk_irEDpjJ-qBKlTlhad"
          alt="Logo ISPS"
          className="w-32 h-32 object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">
        INSTITUTO SUPERIOR POLITÉCNICO DE SONGO
      </h2>
      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-0">
        PROVÍNCIA DE TETE
      </h3>
      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-1">
        DISTRITO DE CAHORA-BASSA
      </h3>
      
      <div className="mt-4 space-y-1">
        <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide">
          {displayUnidade}
        </h4>
        <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
          {displayDirecao}
        </h4>
      </div>

      <h5 className="text-lg font-black text-slate-900 uppercase mt-4 tracking-tighter border-b-4 border-slate-900 pb-2 px-10 text-center w-full max-w-4xl">
        {title} {displaySector ? `- ${displaySector}` : ""}
      </h5>

      <div className="mt-6">
        <span className="text-xl font-black text-slate-900 uppercase tracking-tighter bg-slate-100 px-6 py-2 rounded-2xl border-2 border-slate-200">
          EXERCÍCIO ECONÓMICO: {year}
        </span>
      </div>
    </div>
  );
};

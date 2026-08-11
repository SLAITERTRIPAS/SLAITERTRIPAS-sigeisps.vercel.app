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
    <div className="text-center mb-6 flex flex-col items-center w-full bg-white p-8 rounded-t-[2.5rem]">
      {/* 1. Logotipo */}
      <div className="mb-6">
        <img
          src="https://lh3.googleusercontent.com/d/11zvvpOpZARM1yk_irEDpjJ-qBKlTlhad"
          alt="Logo ISPS"
          className="w-36 h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Nome do Instituto */}
      <h2 className="text-[2.2rem] font-black text-slate-900 uppercase tracking-tight mb-1.5 leading-none">
        INSTITUTO SUPERIOR POLITÉCNICO DE SONGO
      </h2>

      {/* 3. Província */}
      <h3 className="text-base font-bold text-slate-700 uppercase tracking-[0.1em] mb-0.5">
        PROVÍNCIA DE TETE
      </h3>

      {/* 4. Distrito */}
      <h3 className="text-base font-bold text-slate-700 uppercase tracking-[0.1em] mb-4">
        DISTRITO DE CAHORA-BASSA
      </h3>
      
      {/* 5. Nome do Órgão */}
      <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-1">
        {displayUnidade}
      </h4>

      {/* 6. Nome da Direção */}
      <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4">
        {displayDirecao}
      </h4>

      {/* 7. Título do Plano (EM VERMELHO) */}
      <h5 className="text-[1.4rem] font-black text-red-600 uppercase mt-2 tracking-tight">
        {title} {displaySector ? `(${displaySector})` : ""}
      </h5>

      {/* 8. Linha Divisória */}
      <div className="w-full max-w-5xl h-[3px] bg-slate-900 mt-6 mb-6"></div>

      {/* 9. Exercício Económico */}
      <div className="mt-2">
        <span className="text-[1.3rem] font-black text-slate-900 uppercase tracking-tight bg-[#f1f5f9] px-10 py-3 rounded-[1.2rem] border border-slate-200 shadow-sm">
          EXERCÍCIO ECONÓMICO: {year || 2027}
        </span>
      </div>
    </div>
  );
};

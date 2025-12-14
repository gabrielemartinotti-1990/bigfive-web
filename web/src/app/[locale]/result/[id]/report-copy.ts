export type Band = "low" | "mid" | "high";
export type Ocean = "O" | "C" | "E" | "A" | "N";

export const reportCopy: Record<Ocean, Record<Band, string>> = {
  O: {
    low: "Preferisci concretezza e continuità: rendi al meglio con obiettivi chiari, procedure stabili e poca ambiguità.",
    mid: "Alterni pragmatismo e curiosità: sai innovare quando serve senza perdere il contatto con la realtà operativa.",
    high: "Ti stimolano idee nuove e complessità: apprendi in fretta e prosperi in contesti dinamici e di cambiamento."
  },
  C: {
    low: "Funzioni bene con flessibilità e ritmo: ti aiuta avere priorità chiare e micro-scadenze per restare allineato.",
    mid: "Buon equilibrio tra struttura e adattamento: sai pianificare e correggere rotta senza irrigidirti.",
    high: "Sei orientato a metodo e affidabilità: eccelli con responsabilità chiare, standard e autonomia organizzativa."
  },
  E: {
    low: "Ricarichi energie in modo più riservato: rendi al meglio con spazi di concentrazione e interazioni mirate.",
    mid: "Gestisci bene sia lavoro individuale sia confronto: ti adatti al contesto e al tipo di team.",
    high: "Ti alimenta la relazione: sei a tuo agio nel confronto, nel coordinamento e in ambienti socialmente attivi."
  },
  A: {
    low: "Tendi a essere diretto e critico: utile quando serve negoziare con fermezza e dire ‘no’ con chiarezza.",
    mid: "Equilibrio tra collaborazione e assertività: cerchi accordi ma sai anche tenere la tua posizione.",
    high: "Sei cooperativo e attento alle persone: faciliti clima e collaborazione, ottimo in team interdipendenti."
  },
  N: {
    low: "Stabilità emotiva: mantieni lucidità sotto pressione e recuperi bene dopo stress e imprevisti.",
    mid: "Reattività nella media: gestisci lo stress, ma in periodi intensi ti aiuta scaricare e chiarire priorità.",
    high: "Maggiore sensibilità allo stress: rendi al meglio con contesti prevedibili, feedback chiari e carichi sostenibili."
  }
};

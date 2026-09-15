import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Triggers the browser's native print dialog, targeting PrintResume (the only
// thing visible under @media print — see index.css and Index.tsx). "Save as
// PDF" there produces a real, text-selectable PDF with zero extra
// dependencies, and it can never drift from content.ts since it prints the
// live page rather than a separately generated file.
const DownloadPdfButton = () => {
  const { lang } = useLanguage();
  const label = lang === "es" ? "Descargar PDF" : "Download PDF";

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-card border border-border hover:text-foreground transition-all duration-300"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default DownloadPdfButton;

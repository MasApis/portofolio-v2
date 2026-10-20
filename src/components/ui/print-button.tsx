"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-700 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-800"
    >
      Print or save as PDF
    </button>
  );
}

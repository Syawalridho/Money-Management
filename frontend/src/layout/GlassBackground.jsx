import React from "react";

/**
 * Lapisan dekoratif gradient blob seperti di dashboard.
 * Letakkan sebagai child paling awal di container relatif.
 */
export default function GlassBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
    </div>
  );
}

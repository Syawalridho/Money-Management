import React from "react";

/**
 * GlassInner
 * Komponen wrapper untuk membuat isi GlassCard punya efek frosted glass.
 * Cocok untuk tabel, form, list item, dll.
 *
 * Variants:
 * - "plain": kaca bening (hampir transparan, subtle)
 * - "frosted": kaca beku (lebih blur + lapisan tipis warna)
 */
const GlassInner = ({ children, className = "", variant = "plain" }) => {
  const base =
    "backdrop-blur-md border border-white/10 rounded-xl overflow-hidden";
  const variants = {
    plain: "bg-white/5", // bening tipis
    frosted: "bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)]", // frosted glass iOS style
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default GlassInner;

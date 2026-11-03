"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Full-screen sealed envelope shown on load; tapping the seal opens it
// and reveals the invitation underneath.
export function Envelope() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("locked", !open);
    return () => document.body.classList.remove("locked");
  }, [open]);

  return (
    <div
      data-open={open}
      className="envelope-overlay fixed inset-0 z-50 flex items-center justify-center bg-pearl"
    >
      <Image
        src="/images/fresco-pattern.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />

      <button
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
          setOpen(true);
        }}
        data-open={open}
        aria-label="Open the invitation"
        className="envelope relative aspect-[5/7] w-[min(82vw,380px)] cursor-pointer [perspective:1200px]"
      >
        {/* Envelope body */}
        <div className="absolute inset-0 rounded-sm border border-gold/40 bg-[#fdf1f4] shadow-[0_30px_60px_-30px_rgba(61,34,48,0.45)]" />
        {/* Side and bottom folds */}
        <div
          className="absolute inset-0 bg-[#f8e3ea]"
          style={{ clipPath: "polygon(0 0, 50% 55%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-[#f8e3ea]"
          style={{ clipPath: "polygon(100% 0, 50% 55%, 100% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-[#f4d7e1]"
          style={{ clipPath: "polygon(0 100%, 50% 52%, 100% 100%)" }}
        />
        {/* Top flap */}
        <div
          className="envelope-flap absolute inset-x-0 top-0 h-[58%] bg-[#fbeaf0] [backface-visibility:hidden]"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
        {/* Hairline edges on the folds */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-gold/50"
          viewBox="0 0 100 140"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 0 L50 81 L100 0 M0 140 L50 73 L100 140"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
          />
        </svg>

        {/* Wax seal */}
        <div className="envelope-seal absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
          <div className="seal-pulse relative h-36 w-36 sm:h-40 sm:w-40">
            <Image
              src="/images/wax-seal.webp"
              alt=""
              fill
              preload
              sizes="160px"
              className="object-contain drop-shadow-[0_6px_8px_rgba(61,34,48,0.25)]"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[9%] text-center">
          <p className="font-script text-3xl text-rani">Pavan &amp; Neha</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.4em] text-gold">
            Tap to open
          </p>
        </div>
      </button>
    </div>
  );
}

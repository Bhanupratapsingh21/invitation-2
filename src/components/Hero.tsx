import Image, { getImageProps } from "next/image";
import { bride, groom } from "@/data/wedding";
import { Ornament } from "./Ornament";
import { Petals } from "./Petals";

const {
  props: { srcSet: wide },
} = getImageProps({ src: "/images/kuchaman-fort.webp", alt: "", width: 1536, height: 1024, sizes: "100vw" });
const {
  props: { srcSet: portrait, ...heroImg },
} = getImageProps({ src: "/images/hero-haveli.webp", alt: "", width: 1024, height: 1536, sizes: "100vw" });

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center overflow-hidden">
      {/* Painted Shekhawati haveli on phones, Kuchaman fort on larger screens; each device downloads only its own */}
      <picture>
        <source media="(min-width: 768px)" srcSet={wide} />
        <source srcSet={portrait} />
        <img
          {...heroImg}
          alt="Watercolour of a painted Shekhawati haveli at golden hour"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </picture>
      <div className="sky-fade absolute inset-0" />
      {/* Rose and gold corner garlands; the right one is the left mirrored */}
      {(["left-0", "right-0 -scale-x-100"] as const).map((side) => (
        <div
          key={side}
          className={`pointer-events-none absolute top-0 z-10 aspect-square w-[40vw] max-w-[300px] ${side}`}
        >
          <Image src="/images/corner-florals.webp" alt="" fill preload sizes="(min-width: 750px) 300px, 40vw" />
        </div>
      ))}
      <Petals />

      <div className="relative z-10 flex flex-col items-center px-6 pt-[12svh] text-center md:pt-[10svh]">
        <p lang="hi" className="font-hindi text-sm text-gold sm:text-base">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <p lang="hi" className="mt-6 font-hindi text-lg text-rani sm:text-xl">
          उत्सव सात फेरों का
        </p>
        <h1 className="mt-2 font-script text-6xl leading-tight text-rani sm:text-7xl md:text-8xl">
          {groom.name.split(" ")[0]}
          <span className="mx-3 align-middle text-4xl text-gold sm:text-5xl">&amp;</span>
          {bride.name.split(" ")[0]}
        </h1>
        <Ornament className="mt-4" />
        <p className="mt-4 text-xl tracking-[0.3em] text-ink sm:text-2xl">21 · 11 · 2026</p>
        <p lang="hi" className="mt-2 font-hindi text-base text-ink/70">
          कार्तिक शु. १२, शनिवार
        </p>
      </div>

      <a
        href="#invitation"
        aria-label="Scroll to the invitation"
        className="absolute bottom-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pearl/80 text-rani shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

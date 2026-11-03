import Image from "next/image";
import { bride, groom, invitation, invocations } from "@/data/wedding";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

function Person({
  title,
  nameHi,
  lines,
  placeHi,
  english,
}: {
  title: string;
  nameHi: string;
  lines: [label: string, value: string][];
  placeHi: string;
  english: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold">{title}</p>
      <p lang="hi" className="mt-3 font-hindi text-3xl text-rani sm:text-4xl">
        {nameHi}
      </p>
      <p className="mt-1 text-lg italic text-ink/70">{english}</p>
      <div lang="hi" className="mt-4 space-y-1 font-hindi text-[15px] leading-relaxed text-ink/85">
        {lines.map(([label, value]) => (
          <p key={label}>
            <span className="text-gold">{label}: </span>
            {value}
          </p>
        ))}
        <p>{placeHi}</p>
      </div>
    </div>
  );
}

export function Invitation() {
  return (
    <section id="invitation" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72">
            <Image src="/images/ganesha.webp" alt="Lord Ganesha seated on a lotus" fill sizes="288px" />
          </div>
          <div lang="hi" className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 font-hindi text-sm text-gold">
            {invocations.top.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div
            lang="hi"
            className="mt-6 grid gap-4 font-hindi text-[15px] leading-relaxed text-ink/80 sm:grid-cols-2"
          >
            <div>{invocations.shlokaLeft.map((l) => <p key={l}>{l}</p>)}</div>
            <div>{invocations.shlokaRight.map((l) => <p key={l}>{l}</p>)}</div>
          </div>
        </Reveal>

        <Ornament className="my-14" />

        <Reveal className="text-center">
          <p lang="hi" className="mx-auto max-w-xl font-hindi text-lg leading-relaxed text-ink">
            {invitation.blessingHi}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Reveal>
            <Person
              title="The Groom"
              nameHi={groom.nameHi}
              english={`Kunwar ${groom.name}`}
              lines={[
                ["सुपौत्र", groom.grandsonOfHi],
                ["सुपुत्र", groom.sonOfHi],
              ]}
              placeHi={groom.placeHi}
            />
          </Reveal>

          <Reveal delay={150} className="flex flex-col items-center">
            <div className="relative h-64 w-44 sm:h-80 sm:w-52">
              <Image
                src="/images/couple.webp"
                alt="Illustration of a Rajput groom and bride"
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>
            <p lang="hi" className="mt-2 font-hindi text-3xl italic text-gold">
              संग
            </p>
          </Reveal>

          <Reveal delay={300}>
            <Person
              title="The Bride"
              nameHi={bride.nameHi}
              english={bride.name}
              lines={[
                ["सुपौत्री", bride.granddaughterOfHi],
                ["सुपुत्री", bride.daughterOfHi],
              ]}
              placeHi={bride.placeHi}
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 text-center">
          <p lang="hi" className="font-hindi text-2xl text-rani sm:text-3xl">
            {invitation.closingHi[0]}
          </p>
          <p lang="hi" className="mt-3 font-hindi text-lg leading-relaxed text-balance text-ink/85">
            {invitation.closingHi[1]}
          </p>
          <p className="mx-auto mt-4 max-w-md text-lg italic text-ink/60">{invitation.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

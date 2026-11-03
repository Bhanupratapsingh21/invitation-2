import Image from "next/image";
import { events, homeVenue } from "@/data/wedding";
import { formatEventDate } from "@/lib/format";
import { PinIcon, SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const venueClass =
  "inline-flex items-center gap-1 pt-2 text-[11px] uppercase tracking-[0.2em] sm:mt-auto sm:pt-4";

export function Events() {
  return (
    <section id="events" className="relative px-6 py-24">
      <Image
        src="/images/fresco-pattern.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow="16 – 21 November 2026" titleHi="मांगलिक कार्यक्रम" title="Wedding Ceremonies" />

        {/* Flex rather than grid so a short last row stays centred */}
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={(i % 3) * 100} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]">
              {/* Compact row on phones, arched card from sm up */}
              <article className="flex h-full items-center gap-4 rounded-2xl border border-gold/40 bg-pearl/85 p-4 sm:flex-col sm:gap-0 sm:rounded-b-2xl sm:rounded-t-[999px] sm:px-5 sm:pb-6 sm:pt-8 sm:text-center">
                <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32">
                  <Image src={event.image} alt="" fill sizes="128px" className="object-contain" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col sm:items-center">
                  <h3 lang="hi" className="font-hindi text-xl text-rani sm:mt-3 sm:text-2xl">
                    {event.nameHi}
                  </h3>
                  <p className="italic text-ink/70 sm:text-lg">{event.name}</p>
                  <div className="my-2 h-px w-12 bg-gold/50 sm:my-3" />
                  <p lang="hi" className="font-hindi text-sm text-gold">
                    {event.timeHi}
                  </p>
                  <p className="text-ink sm:mt-1 sm:text-lg">
                    {formatEventDate(event.date)} · {event.time}
                  </p>
                  {/* Only the Kothariya wedding venue has a map pin; the Ghatwa home is shown as text */}
                  {event.venueMapUrl ? (
                    <a
                      href={event.venueMapUrl}
                      target="_blank"
                      rel="noopener"
                      className={`${venueClass} text-rani/90 underline decoration-gold/40 underline-offset-4`}
                    >
                      <PinIcon />
                      {event.venue}
                    </a>
                  ) : (
                    <p className={`${venueClass} text-ink/60`}>{event.venue ?? homeVenue.short}</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Baraat, Families, Footer, Venue } from "@/components/Closing";
import { Countdown } from "@/components/Countdown";
import { Envelope } from "@/components/Envelope";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";

export default function Home() {
  return (
    <>
      <Envelope />
      <main>
        <Hero />
        <Invitation />
        <Countdown />
        <Events />
        <Baraat />
        <Venue />
        <Families />
        <Footer />
      </main>
    </>
  );
}

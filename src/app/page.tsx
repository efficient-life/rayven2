import { Achievement } from "./_components/Achievement";
import { Faq } from "./_components/Faq";
import { Hero } from "./_components/Hero";
import { OverviewCta } from "./_components/OverviewCta";
import { Service } from "./_components/Service";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <Hero />
        <Service />
        {/* <TradingCompany /> */}
        <Achievement />
        <OverviewCta />
        {/* <Partner /> */}
        {/* <News /> */}
        <Faq />
      </main>
    </div>
  );
}

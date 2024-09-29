import { Achievement } from "./_components/Achievement";
import { Faq } from "./_components/Faq";
import { Hero } from "./_components/Hero";
import { News } from "./_components/News";
import { OverviewCta } from "./_components/OverviewCta";
import { Partner } from "./_components/Partner";
import { Service } from "./_components/Service";
import { TradingCompany } from "./_components/TradingCompany";

export default function Home() {
  return (
    <div>
      <main className="space-y-8">
        <Hero />
        <OverviewCta />
        <Service />
        <Achievement />
        <TradingCompany />
        <Partner />
        <News />
        <Faq />
      </main>
    </div>
  );
}

import { AboutUsSection } from "~/components/about-us-section";
import { ConnectSection } from "~/components/connect-section";
import { ExploreSection } from "~/components/explore-section";
import { FAQSection } from "~/components/faq-section";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { HeaderTag } from "~/components/header-link";
import { OverviewSection } from "~/components/overview-section";
import { StaySection } from "~/components/stay-section";

export default function () {
  return (
    <main>
      <title>Dahlia & Cedar | Garden Apartment in Coeur d'Alene</title>
      <Header>
        <HeaderTag href="#stay">The Stay </HeaderTag>
        <HeaderTag href="#overview">The Garden</HeaderTag>
        <HeaderTag href="#about">About Us</HeaderTag>
        <HeaderTag href="#explore">Explore Coeur d'Alene</HeaderTag>
        <HeaderTag href="#faq">FAQ</HeaderTag>
        <HeaderTag href="#connect">Connect With Us</HeaderTag>
      </Header>
      <StaySection />
      <OverviewSection />
      <AboutUsSection />
      <ExploreSection />
      <FAQSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}

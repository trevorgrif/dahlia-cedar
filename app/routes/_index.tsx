import { AboutUsSection } from "~/components/about-us-section";
import { ApartmentSection } from "~/components/apartment-section";
import { ConnectSection } from "~/components/connect-section";
import { FAQSection } from "~/components/faq-section";
import { Footer } from "~/components/footer";
import { GardenSection } from "~/components/garden-section";
import { Header } from "~/components/header";
import { HeaderTag } from "~/components/header-link";
import { BannerSection } from "~/components/stay-section";

export default function () {
  return (
    <main>
      <title>Dahlia & Cedar | Garden Apartment in Coeur d'Alene</title>
      <Header>
        <HeaderTag href="#apartment">The Apartment</HeaderTag>
        <HeaderTag href="#garden">The Garden</HeaderTag>
        <HeaderTag href="#about">About Us</HeaderTag>
        <HeaderTag href="#faq">FAQ</HeaderTag>
        <HeaderTag href="#connect">Connect With Us</HeaderTag>
      </Header>
      <BannerSection />
      <ApartmentSection />
      <GardenSection />
      <AboutUsSection />
      <FAQSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}

import { AboutUsSection } from "~/components/about-us-section";
import { ApartmentSection } from "~/components/apartment-section";
import { BannerSection } from "~/components/banner-section";
import { ConnectSection } from "~/components/connect-section";
import { FAQSection } from "~/components/faq-section";
import { Footer } from "~/components/footer";
import { GardenSection } from "~/components/garden-section";
import { Header } from "~/components/header";
import { HeaderTag } from "~/components/header-link";
import { ReviewsSection } from "~/components/reviews-section";
import { computeReviewMetrics } from "~/server/copmute-review-metrics";
import { reviews } from "~/server/reviews";

export type MainLoader = typeof loader;

export async function loader() {
  // getReviews();

  const review_metrics = computeReviewMetrics();

  return { review_metrics, reviews };
}

export default function () {
  return (
    <main className="flex flex-col">
      <title>Dahlia & Cedar | Garden Apartment in Coeur d'Alene</title>
      <Header>
        <HeaderTag href="#apartment">The Apartment</HeaderTag>
        <HeaderTag href="#garden">The Garden</HeaderTag>
        <HeaderTag href="#reviews">Reviews</HeaderTag>
        <HeaderTag href="#about">About Us</HeaderTag>
        <HeaderTag href="#faq">FAQ</HeaderTag>
        <HeaderTag href="#connect">Connect With Us</HeaderTag>
      </Header>
      <BannerSection />
      <ApartmentSection />
      <GardenSection />
      <ReviewsSection />
      <AboutUsSection />
      <FAQSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}

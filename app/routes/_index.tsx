import toast, { Toaster } from "react-hot-toast";
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
import { computeReviewMetrics } from "~/server/compute-review-metrics";
import { filtered_reviews } from "~/server/filtered-reviews";
import { transporter } from "~/server/mail-service/mail-transporter";
import type { Route } from "./+types/_index";

export type MainLoader = typeof loader;

export async function loader() {
  // getReviews();

  const review_metrics = computeReviewMetrics();

  return { review_metrics, reviews: filtered_reviews };
}

export default function () {
  return (
    <main className="flex flex-col">
      <title>Dahlia & Cedar | Garden Apartment in Coeur d'Alene</title>
      <Toaster />
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

export async function action({ request }: Route.ActionArgs) {
  const form = await request.json();

  // Honeypot: hidden field real users leave empty
  if (form.website) return { ok: true };

  const name = String(form.name ?? "").trim();
  const email = String(form.email ?? "").trim();
  const date = String(form.date ?? "").trim();
  const comment = String(form.comment ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Valid email required";
  if (!comment) errors.comment = "Message is required";
  if (Object.keys(errors).length) return { ok: false, errors };

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `New inquiry from ${name.replace(/[\r\n]/g, " ")}`,
      text: `From: ${name} <${email}>\n\n${comment}`,
    });
  } catch (err) {
    console.error("Email send failed", err);
    return {
      ok: false,
      errors: { form: "Couldn't send your message. Please try again." },
    };
  }

  return { ok: true };
}

export async function clientAction({
  request,
  serverAction,
}: Route.ClientActionArgs) {
  const response = serverAction();

  toast.promise(response, {
    loading: "Sending email",
    error: "Failed to send an email",
    success: "Email sent",
  });
}

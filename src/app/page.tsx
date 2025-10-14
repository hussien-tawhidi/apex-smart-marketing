import CustomersReviews from "@/components/home/customers-reviews/CustomersReviews";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/projects/Projects";
import Services from "@/components/home/services/Services";
import Subscriber from "@/components/home/Subscriber/Subscriber";
import HomeTutorials from "@/components/home/taturials/HomeTaturials";

export default function homePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <CustomersReviews />
      <HomeTutorials />
      <Subscriber />
    </div>
  );
}

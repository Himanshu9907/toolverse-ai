// export default function HomePage() {
//   return (
//     <section className="flex min-h-[calc(100vh-64px)] items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold">
//           Welcome to ToolVerse AI 🚀
//         </h1>

//         <p className="mt-6 text-xl text-muted-foreground">
//           One Platform. Infinite Tools.
//         </p>
//       </div>
//     </section>
//   );
// }

// import { Hero } from "@/components/home/hero";

// export default function HomePage() {
//   return <Hero />;
// }

import { Hero } from "@/components/home/hero";
import { Categories } from "@/components/home/categories";
import { FeaturedTools } from "@/components/home/featured-tools";
import { AIAutomation } from "@/components/home/ai-automation";
import { WhyToolVerse } from "@/components/home/why-toolverse";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedTools />
      <AIAutomation />
      <WhyToolVerse />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
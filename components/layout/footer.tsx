// export function Footer() {
//   return (
//     <footer className="border-t py-10">
//       <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
//         © {new Date().getFullYear()} ToolVerse AI. All rights reserved.
//       </div>
//     </footer>
//   );
// }


// "use client";

// import Link from "next/link";
// import {
//   Sparkles,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaXTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa6";

// const toolLinks = [
//   "Image Tools",
//   "PDF Tools",
//   "AI Tools",
//   "Video Tools",
//   "OCR Tools",
//   "Developer Tools",
// ];

// const companyLinks = [
//   "About",
//   "Contact",
//   "Blog",
//   "Careers",
//   "Pricing",
//   "Roadmap",
// ];

// const resourceLinks = [
//   "Help Center",
//   "Documentation",
//   "API",
//   "Status",
//   "Community",
//   "Changelog",
// ];

// const legalLinks = [
//   "Privacy Policy",
//   "Terms of Service",
//   "Cookie Policy",
//   "Refund Policy",
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-background">

//       <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

//         {/* Top */}

//         <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

//           {/* Brand */}

//           <div>

//             <Link
//               href="/"
//               className="inline-flex items-center gap-3"
//             >

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-violet-600 to-cyan-500 text-white shadow-lg">

//                 <Sparkles className="h-6 w-6"/>

//               </div>

//               <div>

//                 <h2 className="text-2xl font-bold">

//                   ToolVerse AI

//                 </h2>

//                 <p className="text-sm text-muted-foreground">

//                   AI Productivity Platform

//                 </p>

//               </div>

//             </Link>

//             <p className="mt-6 max-w-md leading-8 text-muted-foreground">

//               ToolVerse AI is your all-in-one platform for image tools,
//               PDF tools, AI automation, productivity and developer
//               utilities — built for speed, simplicity and privacy.

//             </p>

//             <div className="mt-8 flex gap-3">
//                           {/* Social Icons */}

//             <div className="flex flex-wrap gap-3">

//               {[
//                 { icon: FaGithub, href: "#" },
//                 { icon: FaXTwitter, href: "#" },
//                 { icon: FaLinkedin, href: "#" },
//                 { icon: FaInstagram, href: "#" },
//               ].map((item, index) => {

//                 const Icon = item.icon;

//                 return (

//                   <Link
//                     key={index}
//                     href={item.href}
//                     className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
//                   >

//                     <Icon className="h-5 w-5" />

//                   </Link>

//                 );

//               })}

//             </div>

//           </div>

//           {/* Tools */}

//           <div>

//             <h3 className="text-lg font-semibold">

//               Tools

//             </h3>

//             <ul className="mt-6 space-y-4">

//               {toolLinks.map((item) => (

//                 <li key={item}>

//                   <Link
//                     href="#"
//                     className="text-muted-foreground transition-colors duration-300 hover:text-primary"
//                   >

//                     {item}

//                   </Link>

//                 </li>

//               ))}

//             </ul>

//           </div>

//           {/* Resources */}

//           <div>

//             <h3 className="text-lg font-semibold">

//               Resources

//             </h3>

//             <ul className="mt-6 space-y-4">

//               {resourceLinks.map((item) => (

//                 <li key={item}>

//                   <Link
//                     href="#"
//                     className="text-muted-foreground transition-colors duration-300 hover:text-primary"
//                   >

//                     {item}

//                   </Link>

//                 </li>

//               ))}

//             </ul>

//           </div>

//           {/* Company */}

//           <div>

//             <h3 className="text-lg font-semibold">

//               Company

//             </h3>

//             <ul className="mt-6 space-y-4">

//               {companyLinks.map((item) => (

//                 <li key={item}>

//                   <Link
//                     href="#"
//                     className="text-muted-foreground transition-colors duration-300 hover:text-primary"
//                   >

//                     {item}

//                   </Link>

//                 </li>

//               ))}

//             </ul>

//           </div>

//         </div>
//                 {/* Newsletter */}

//         <div className="mt-20 rounded-[32px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 md:p-10">

//           <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

//             <div className="max-w-2xl">

//               <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

//                 <Sparkles className="h-4 w-4" />

//                 Stay Updated

//               </div>

//               <h3 className="mt-5 text-3xl font-bold">

//                 Get New AI Tools Every Week

//               </h3>

//               <p className="mt-4 leading-7 text-muted-foreground">

//                 Subscribe to receive updates about new tools,
//                 AI features, productivity tips and platform improvements.

//               </p>

//             </div>

//             <form className="flex w-full max-w-lg flex-col gap-4 sm:flex-row">

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="h-12 flex-1 rounded-xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
//               />

//               <button
//                 type="submit"
//                 className="h-12 rounded-xl bg-primary px-8 font-medium text-primary-foreground transition-all hover:opacity-90"
//               >

//                 Subscribe

//               </button>

//             </form>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="mt-16 border-t border-border pt-8">

//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

//             <p className="text-sm text-muted-foreground">

//               © {new Date().getFullYear()} ToolVerse AI. All rights reserved.

//             </p>

//             <div className="flex flex-wrap gap-6">

//               {legalLinks.map((item) => (

//                 <Link
//                   key={item}
//                   href="#"
//                   className="text-sm text-muted-foreground transition-colors hover:text-primary"
//                 >

//                   {item}

//                 </Link>

//               ))}

//             </div>

//           </div>

//           <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 md:flex-row">

//             <p className="text-sm text-muted-foreground">

//               Built with ❤️ using Next.js, TypeScript, Tailwind CSS &
//               AI technologies.

//             </p>

//             <div className="flex items-center gap-3">

//               <span className="h-2 w-2 rounded-full bg-green-500" />

//               <span className="text-sm font-medium">

//                 All systems operational

//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//       </div>

//     </footer>

//   );

// }

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const productLinks = [
  "AI Tools",
  "Image Tools",
  "PDF Tools",
  "Video Tools",
];

const companyLinks = [
  "About",
  "Pricing",
  "Contact",
  "Careers",
];

const resourceLinks = [
  "Documentation",
  "API",
  "Blog",
  "Status",
];

const legalLinks = [
  "Privacy",
  "Terms",
  "Cookies",
  "Security",
];

export function Footer() {
  return (
    <footer className="border-t bg-background">

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

      
        {/* Navigation */}

        <div className="mt-20 grid gap-12 border-b border-border pb-16 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-violet-600 to-cyan-500 text-white">

                <Sparkles className="h-6 w-6" />

              </div>

              <div>

                <h3 className="text-2xl font-bold">

                  Kratiq AI Tools

                </h3>

                <p className="text-sm text-muted-foreground">

                  AI Productivity Platform

                </p>

              </div>

            </Link>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground">

              One platform for AI tools, image editing, PDF utilities,
              developer tools and productivity workflows.
              Fast, secure and beautifully designed.

            </p>

            {/* Trust Pills */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-border bg-card px-4 py-2 text-sm">

                ⚡ Fast

              </div>

              <div className="rounded-full border border-border bg-card px-4 py-2 text-sm">

                🔒 Secure

              </div>

              <div className="rounded-full border border-border bg-card px-4 py-2 text-sm">

                🤖 AI Powered

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h4 className="text-lg font-semibold">

              Product

            </h4>

            <ul className="mt-6 space-y-4">

              {productLinks.map((item) => (

                <li key={item}>

                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="text-lg font-semibold">

              Company

            </h4>

            <ul className="mt-6 space-y-4">

              {companyLinks.map((item) => (

                <li key={item}>

                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h4 className="text-lg font-semibold">

              Resources

            </h4>

            <ul className="mt-6 space-y-4">

              {resourceLinks.map((item) => (

                <li key={item}>

                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >

                    {item}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>
                {/* Bottom Bar */}

        <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <p className="text-sm text-muted-foreground">

              © {new Date().getFullYear()} ToolVerse AI. All rights reserved.

            </p>

            <div className="mt-3 flex flex-wrap gap-5">

              {legalLinks.map((item) => (

                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >

                  {item}

                </Link>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-start gap-5 lg:items-end">

            {/* Status */}

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-medium">

                All systems operational

              </span>

            </div>

            {/* Social */}

            <div className="flex items-center gap-3">

              {[
                {
                  label: "GitHub",
                  href: "#",
                },
                {
                  label: "X",
                  href: "#",
                },
                {
                  label: "LinkedIn",
                  href: "#",
                },
                {
                  label: "Discord",
                  href: "#",
                },
              ].map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >

                  {item.label}

                </Link>

              ))}

            </div>

          </div>

        </div>

      </div>

    </footer>

  );
}
      
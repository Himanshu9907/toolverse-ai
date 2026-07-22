"use client";

import { Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is ToolVerse AI free to use?",
    answer:
      "Yes. Most tools are completely free. Premium features will be available through ToolVerse Pro.",
  },
  {
    question: "Are my uploaded files secure?",
    answer:
      "Absolutely. Files are processed securely and automatically deleted after processing.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Most tools work without an account. Creating an account unlocks history, favorites and Pro features.",
  },
  {
    question: "Which file formats are supported?",
    answer:
      "We support JPG, PNG, WEBP, AVIF, PDF, DOCX, MP4 and many more formats.",
  },
  {
    question: "Will new tools be added?",
    answer:
      "Yes. We continuously add new AI and productivity tools based on user feedback.",
  },
];

export function FAQ() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4" />

            Frequently Asked Questions

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Got Questions?

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">

            Everything you need to know about ToolVerse AI.

          </p>

        </div>

        <div className="mt-16">
                      <Accordion
            type="single"
            collapsible
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-[24px] border border-border bg-card px-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">

                  {faq.question}

                </AccordionTrigger>

                <AccordionContent className="pb-6 pt-1 text-base leading-8 text-muted-foreground">

                  {faq.answer}

                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom Info */}

          <div className="mt-16 rounded-[28px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 text-center md:p-10">

            <div className="mx-auto max-w-2xl">

              <h3 className="text-2xl font-bold">

                Still have questions?

              </h3>

              <p className="mt-4 text-lg text-muted-foreground">

                Our team is always ready to help. Reach out anytime and
                we'll get back to you as quickly as possible.

              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
                >
                  Contact Us
                </a>

                <a
                  href="/help"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 font-medium transition-all duration-300 hover:bg-muted"
                >
                  Help Center
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}
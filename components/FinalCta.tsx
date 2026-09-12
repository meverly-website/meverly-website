import Button from "./Button";
import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";
import { BUY_LABEL, BUY_URL } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative py-28 md:py-40">

      <Container>

        <RevealOnScroll className="mx-auto max-w-3xl text-center">

          <StarDivider className="mb-14" />

          <p
            className="
              font-serif
              text-4xl
              font-light
              leading-[1.1]
              text-text
              sm:text-5xl
              md:text-6xl
            "
          >
            Certaines histoires
            <br />
            vous trouvent au bon moment.
          </p>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">

            <Button
              variant="primary"
              href={BUY_URL ?? "#"}
              external
              disabled={!BUY_URL}
            >
              {BUY_LABEL}
            </Button>

            <Button variant="secondary" href="/contact">
              Écrire à Meverly
            </Button>

          </div>

        </RevealOnScroll>

      </Container>

    </section>
  );
}

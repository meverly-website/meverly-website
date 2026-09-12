"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StickyNav from "@/components/StickyNav";

const FIELD = `
  w-full
  rounded-none
  border-0
  border-b
  border-gold/20
  bg-transparent
  py-4
  text-text
  outline-none
  transition-colors
  duration-300
  focus:border-gold
`;

const LABEL = `
  mb-3
  block
  text-[0.65rem]
  uppercase
  tracking-[0.3em]
  text-gold
`;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setError(
        "Une erreur est survenue. Merci de réessayer dans quelques instants."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StickyNav />

      <main className="relative">

        {/* ================= INTRODUCTION ================= */}

        <section className="px-6 pb-16 pt-40 md:pt-52">

          <div className="mx-auto max-w-3xl text-center">

            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Écrire à Meverly"
            />

            <p className="mt-10 font-serif text-xl italic leading-relaxed text-muted sm:text-2xl">
              Merci d&apos;avoir pris le temps de visiter mon univers.
            </p>

            <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
              Que ce soit pour un retour sur un roman, une question, une
              proposition ou simplement quelques mots, je serai heureuse de
              vous lire.
            </p>

          </div>

        </section>

        {/* ================= FORMULAIRE ================= */}

        <section className="pb-32">

          <Container>

            <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-10">

              <div>

                <label htmlFor="name" className={LABEL}>
                  Nom
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={FIELD}
                />

              </div>

              <div>

                <label htmlFor="email" className={LABEL}>
                  Adresse e-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={FIELD}
                />

              </div>

              <div>

                <label htmlFor="subject" className={LABEL}>
                  Sujet
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={FIELD}
                />

              </div>

              <div>

                <label htmlFor="message" className={LABEL}>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="
                    w-full
                    rounded-card
                    border
                    border-gold/20
                    bg-transparent
                    p-6
                    text-text
                    outline-none
                    transition-colors
                    duration-300
                    focus:border-gold
                  "
                />

              </div>

              <div className="pt-2">

                <Button type="submit" variant="primary" loading={loading}>
                  {loading ? "Envoi en cours" : "Envoyer"}
                </Button>

              </div>

              <p className="text-sm leading-7 text-muted/70">
                Les informations transmises via ce formulaire sont utilisées
                uniquement pour traiter et répondre à votre demande. Les champs
                sont nécessaires au traitement de votre message. Pour en savoir
                plus sur l&apos;utilisation de vos données et sur vos droits,
                consultez les{" "}
                <Link
                  href="/mentions-legales"
                  className="text-gold transition-colors duration-300 hover:text-text"
                >
                  mentions légales
                </Link>
                .
              </p>

              {/* Retours du formulaire, annoncés aux lecteurs d'écran. */}

              <div aria-live="polite">

                {success && (
                  <div className="rounded-card border border-gold/35 p-8 text-center">

                    <p className="font-serif text-2xl italic text-text">
                      Votre message est bien arrivé.
                    </p>

                    <p className="mt-4 leading-7 text-muted">
                      Merci d&apos;avoir pris le temps de m&apos;écrire.
                      <br />
                      Je vous répondrai dès que possible.
                    </p>

                  </div>
                )}

                {error && (
                  <div className="rounded-card border border-text/25 p-8 text-center text-muted">
                    {error}
                  </div>
                )}

              </div>

            </form>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}

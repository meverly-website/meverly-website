"use client";

import { useState } from "react";
import Link from "next/link";

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    <main className="min-h-screen bg-[#0E0B0B] text-[#F5F1EB]">

      {/* ================= INTRODUCTION ================= */}

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">

        <div className="mb-12 h-px w-24 bg-[#C99A63]/40" />

        <h1
          className="
            font-[family-name:var(--font-cormorant)]
            text-6xl
            md:text-8xl
          "
        >
          Écrire à Meverly
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            font-[family-name:var(--font-cormorant)]
            text-2xl
            italic
            leading-relaxed
            text-[#CFC4B8]
          "
        >
          Merci d'avoir pris le temps de visiter mon univers.
        </p>

        <p
          className="
            mt-10
            max-w-2xl
            text-lg
            leading-9
            text-[#E6DED5]
          "
        >
          Que ce soit pour un retour sur un roman,
          une question, une proposition
          ou simplement quelques mots,
          je serai heureuse de vous lire.
        </p>

      </section>

      {/* ================= FORMULAIRE ================= */}

      <section className="mx-auto max-w-3xl px-6 pb-32">

        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >

          {/* ================= NOM ================= */}

          <div>

            <label
              htmlFor="name"
              className="
                mb-3
                block
                uppercase
                tracking-[0.25em]
                text-[#C99A63]
              "
            >
              Nom
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                w-full
                border-b
                border-white/20
                bg-transparent
                py-4
                outline-none
                transition-all
                focus:border-[#C99A63]
              "
            />

          </div>

          {/* ================= EMAIL ================= */}

          <div>

            <label
              htmlFor="email"
              className="
                mb-3
                block
                uppercase
                tracking-[0.25em]
                text-[#C99A63]
              "
            >
              Adresse e-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                w-full
                border-b
                border-white/20
                bg-transparent
                py-4
                outline-none
                transition-all
                focus:border-[#C99A63]
              "
            />

          </div>

          {/* ================= SUJET ================= */}

          <div>

            <label
              htmlFor="subject"
              className="
                mb-3
                block
                uppercase
                tracking-[0.25em]
                text-[#C99A63]
              "
            >
              Sujet
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
              className="
                w-full
                border-b
                border-white/20
                bg-transparent
                py-4
                outline-none
                transition-all
                focus:border-[#C99A63]
              "
            />

          </div>

          {/* ================= MESSAGE ================= */}

          <div>

            <label
              htmlFor="message"
              className="
                mb-3
                block
                uppercase
                tracking-[0.25em]
                text-[#C99A63]
              "
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={8}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-white/20
                bg-white/5
                p-6
                outline-none
                backdrop-blur-sm
                transition-all
                focus:border-[#C99A63]
              "
            />

          </div>

          {/* ================= BOUTON ================= */}

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-10
              py-5
              uppercase
              tracking-[0.30em]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#C99A63]
              hover:bg-[#C99A63]
              hover:text-[#0E0B0B]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Envoi..." : "Envoyer"}

            {!loading && <span>→</span>}
          </button>

          {/* ================= INFORMATION RGPD ================= */}

          <p
            className="
              max-w-2xl
              text-sm
              leading-6
              text-[#8B8178]
            "
          >
            Les informations transmises via ce formulaire sont utilisées
            uniquement pour traiter et répondre à votre demande. Les champs
            sont nécessaires au traitement de votre message. Pour en savoir
            plus sur l'utilisation de vos données et sur vos droits, consultez
            les{" "}
            <Link
              href="/mentions-legales"
              className="
                text-[#C99A63]
                transition-colors
                duration-300
                hover:text-[#F5F1EB]
              "
            >
              mentions légales
            </Link>
            .
          </p>

          {/* ================= MESSAGE DE SUCCÈS ================= */}

          {success && (
            <div
              className="
                rounded-2xl
                border
                border-[#C99A63]/40
                bg-[#C99A63]/10
                p-6
                text-center
              "
            >

              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  italic
                  text-[#F5F1EB]
                "
              >
                Votre message est bien arrivé.
              </p>

              <p className="mt-3 text-[#E6DED5]">
                Merci d'avoir pris le temps de m'écrire.
                <br />
                Je vous répondrai dès que possible.
              </p>

            </div>
          )}

          {/* ================= MESSAGE D'ERREUR ================= */}

          {error && (
            <div
              className="
                rounded-2xl
                border
                border-red-500/40
                bg-red-500/10
                p-6
                text-center
                text-red-200
              "
            >
              {error}
            </div>
          )}

        </form>

        {/* ================= RETOUR ================= */}

        <div className="mt-24 text-center">

          <Link
            href="/"
            className="
              text-[#C99A63]
              transition
              duration-300
              hover:text-white
            "
          >
            ← Retour à l'accueil
          </Link>

        </div>

      </section>

    </main>
  );
}
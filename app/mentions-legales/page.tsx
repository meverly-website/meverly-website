import StarDivider from "@/components/StarDivider";
import Link from "next/link";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

export default function MentionsLegales() {
  return (
    <>
      <StickyNav />

      <main className="min-h-screen px-6 pb-32 pt-40 text-[#F5F1EB]">
      <div className="mx-auto max-w-4xl">

        {/* Retour à l'accueil */}
        <Link
          href="/"
          className="
            mb-16
            inline-flex
            items-center
            gap-2
            text-sm
            uppercase
            tracking-[0.25em]
            text-[#EFC17E]
            transition
            hover:text-[#F5F1EB]
          "
        >
          ← Retour à l&apos;accueil
        </Link>

        {/* Titre */}
        <div className="mb-16">
          <StarDivider className="mb-8 justify-start" />

          <h1
            className="
              font-[family-name:var(--font-cormorant)]
              text-5xl
              md:text-7xl
              text-[#F5F1EB]
            "
          >
            Mentions légales
          </h1>
        </div>

        {/* Éditeur du site */}
        <section className="mb-16">
          <h2
            className="
              mb-8
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#F5F1EB]
            "
          >
            Éditeur du site
          </h2>

          <div className="space-y-5 text-lg leading-8 text-[#CFC4B8]">

            <p>
              <strong className="text-[#F5F1EB]">
                Magali COURTIAL
              </strong>{" "}
              — Entrepreneur individuel
            </p>

            <p>
              Nom commercial :{" "}
              <strong className="text-[#F5F1EB]">
                MEVERLY
              </strong>
            </p>

            <p>
              Pseudonyme :{" "}
              <strong className="text-[#F5F1EB]">
                Meverly
              </strong>
            </p>

            <p>
              SIREN :{" "}
              <strong className="text-[#F5F1EB]">
                108 786 005
              </strong>
            </p>

            <p>
              SIRET :{" "}
              <strong className="text-[#F5F1EB]">
                108 786 005 00018
              </strong>
            </p>

            <p>
              Adresse :{" "}
              <strong className="text-[#F5F1EB]">
                62 cours Jean Jaurès, 38000 GRENOBLE
              </strong>
            </p>

            <p>
              Téléphone :{" "}
              <strong className="text-[#F5F1EB]">
                06 50 50 52 70
              </strong>
            </p>

            <p>
              E-mail :{" "}
              <a
                href="mailto:m.everlybooks@gmail.com"
                className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
              >
                m.everlybooks@gmail.com
              </a>
            </p>

          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-16">
          <h2
            className="
              mb-8
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#F5F1EB]
            "
          >
            Hébergement
          </h2>

          <div className="space-y-5 text-lg leading-8 text-[#CFC4B8]">

            <p>
              Le site est hébergé par :
            </p>

            <p>
              <strong className="text-[#F5F1EB]">
                Vercel Inc.
              </strong>
              <br />
              440 N Barranca Avenue #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>

            <p>
              Site :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
              >
                vercel.com
              </a>
            </p>

          </div>
        </section>

        {/* Données personnelles */}
        <section className="mb-16">
          <h2
            className="
              mb-8
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#F5F1EB]
            "
          >
            Données personnelles
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#CFC4B8]">

            <p>
              Ce site ne comporte aucun formulaire et ne collecte aucune
              donnée personnelle auprès de ses visiteurs. Aucun compte ne
              peut y être créé et aucune inscription n’y est proposée.
            </p>

            <p>
              Le responsable du traitement est :
              <br />
              <strong className="text-[#F5F1EB]">
                Magali COURTIAL — Entrepreneur individuel
              </strong>
              <br />
              E-mail :{" "}
              <a
                href="mailto:m.everlybooks@gmail.com"
                className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
              >
                m.everlybooks@gmail.com
              </a>
            </p>

            <p>
              La simple consultation du site entraîne le traitement de
              données techniques de connexion, telles que l’adresse IP et
              les données de journalisation, par l’hébergeur du site, pour
              les seuls besoins de son fonctionnement et de sa sécurité.
              Aucun autre prestataire ne traite de données personnelles
              pour le compte de MEVERLY.
            </p>

            <p>
              Ces données techniques peuvent être traitées en dehors de
              l’Espace économique européen. Les transferts internationaux
              de données sont encadrés par les mécanismes prévus par la
              réglementation applicable, notamment lorsque des garanties
              appropriées sont requises.
            </p>

            <p>
              Vous disposez, dans les conditions prévues par la
              réglementation applicable, de droits d’accès, de
              rectification, d’effacement et de limitation du traitement,
              ainsi que d’un droit d’opposition lorsque celui-ci est
              applicable.
            </p>

            <p>
              Pour exercer vos droits ou pour toute question concernant
              vos données personnelles, vous pouvez contacter :
            </p>

            <p>
              <a
                href="mailto:m.everlybooks@gmail.com"
                className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
              >
                m.everlybooks@gmail.com
              </a>
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de
              la Commission nationale de l’informatique et des libertés
              (CNIL).
            </p>

          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-16">
          <h2
            className="
              mb-8
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#F5F1EB]
            "
          >
            Propriété intellectuelle
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#CFC4B8]">

            <p>
              L’ensemble des contenus présents sur ce site, notamment les
              textes, images, éléments graphiques, logos, photographies
              et contenus liés aux œuvres de Meverly, est protégé par les
              dispositions applicables en matière de propriété
              intellectuelle.
            </p>

            <p>
              Toute reproduction, représentation, modification,
              distribution ou exploitation, totale ou partielle, des
              contenus du site sans autorisation préalable est interdite,
              sauf dans les cas prévus par la loi.
            </p>

          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2
            className="
              mb-8
              font-[family-name:var(--font-cormorant)]
              text-4xl
              text-[#F5F1EB]
            "
          >
            Contact
          </h2>

          <div className="text-lg leading-8 text-[#CFC4B8]">
            <p>
              Pour toute question concernant le site, les œuvres ou
              l’utilisation de vos données personnelles, vous pouvez
              contacter MEVERLY à l’adresse suivante :
            </p>

            <p className="mt-5">
              <a
                href="mailto:m.everlybooks@gmail.com"
                className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
              >
                m.everlybooks@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Retour */}
        <div className="border-t border-white/10 pt-10">
          <Link
            href="/"
            className="text-[#EFC17E] transition hover:text-[#F5F1EB]"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </main>

      <Footer />
    </>
  );
}

import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#0E0B0B] px-6 py-32 text-[#F5F1EB]">

      <div className="mx-auto max-w-4xl">

        {/* Retour */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            uppercase
            tracking-[0.25em]
            text-[#C99A63]
            transition
            duration-300
            hover:text-[#F5F1EB]
          "
        >
          ← Retour au site
        </Link>

        {/* En-tête */}

        <div className="mt-16">

          <div className="mb-8 h-px w-24 bg-[#C99A63]/40" />

          <h1
            className="
              font-[family-name:var(--font-cormorant)]
              text-5xl
              text-[#F5F1EB]
              sm:text-6xl
              md:text-7xl
            "
          >
            Mentions légales
          </h1>

          <p className="mt-6 text-[#AFA49A]">
            Informations légales relatives au site meverly.fr
          </p>

        </div>

        {/* Contenu */}

        <div className="mt-20 space-y-16">

          {/* Éditeur du site */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Éditeur du site
            </h2>

            <div className="mt-6 space-y-3 text-lg leading-8 text-[#D9CFC5]">

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

              {/* À compléter dès attribution */}

              <p>
                SIREN / SIRET :
              </p>

              {/* À compléter avec l'adresse professionnelle / établissement
                  figurant dans les informations officielles de l'entreprise */}

              <p>
                Adresse :{" "}
                <span className="text-[#AFA49A]">
                  [à compléter]
                </span>
              </p>

              {/* À remplacer par ton numéro de téléphone */}

              <p>
                Téléphone :{" "}
                <span className="text-[#AFA49A]">
                  [à compléter]
                </span>
              </p>

              <p>
                E-mail :{" "}
                <a
                  href="mailto:m.everlybooks@gmail.com"
                  className="
                    text-[#C99A63]
                    transition-colors
                    duration-300
                    hover:text-[#F5F1EB]
                  "
                >
                  m.everlybooks@gmail.com
                </a>
              </p>

              <p className="pt-3 text-base italic leading-7 text-[#9E948B]">
                Une demande de non-diffusion des données personnelles a été
                effectuée lors de l'immatriculation de l'entreprise
                individuelle.
              </p>

            </div>
          </section>

          {/* Directeur de la publication */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Directeur de la publication
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#D9CFC5]">
              Magali COURTIAL
            </p>
          </section>

          {/* Hébergement */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Hébergement
            </h2>

            <div className="mt-6 space-y-3 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Le site est hébergé par :
              </p>

              <p>
                <strong className="text-[#F5F1EB]">
                  Vercel Inc.
                </strong>
              </p>

              <p>
                440 N Barranca Avenue #4133
              </p>

              <p>
                Covina, CA 91723
              </p>

              <p>
                États-Unis
              </p>

              <p>
                E-mail :{" "}
                <a
                  href="mailto:privacy@vercel.com"
                  className="
                    text-[#C99A63]
                    transition
                    hover:text-[#F5F1EB]
                  "
                >
                  privacy@vercel.com
                </a>
              </p>

              <p>
                Site :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[#C99A63]
                    transition
                    hover:text-[#F5F1EB]
                  "
                >
                  vercel.com
                </a>
              </p>

            </div>
          </section>

          {/* Nom de domaine */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Nom de domaine
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Le site est accessible à l'adresse :
              </p>

              <p>
                <a
                  href="https://meverly.fr"
                  className="
                    text-[#C99A63]
                    transition
                    hover:text-[#F5F1EB]
                  "
                >
                  https://meverly.fr
                </a>
              </p>

              <p>
                Le nom de domaine est enregistré auprès d'OVHcloud.
              </p>

            </div>
          </section>

          {/* Propriété intellectuelle */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Propriété intellectuelle
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#D9CFC5]">

              <p>
                L'ensemble des contenus présents sur ce site, notamment les
                textes, extraits, romans, visuels, photographies,
                illustrations, logo, éléments graphiques et identité visuelle,
                est protégé par les dispositions applicables en matière de
                propriété intellectuelle.
              </p>

              <p>
                Sauf mention contraire, ces éléments sont la propriété de
                MEVERLY ou sont utilisés avec l'autorisation de leurs
                titulaires respectifs.
              </p>

              <p>
                Toute reproduction, représentation, modification, adaptation
                ou exploitation, totale ou partielle, de ces contenus sans
                autorisation préalable est interdite, sauf dans les cas
                prévus par la loi.
              </p>

            </div>
          </section>

          {/* Responsabilité et liens externes */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Responsabilité et liens externes
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Les informations publiées sur ce site sont fournies à titre
                informatif. MEVERLY s'efforce de maintenir les informations
                publiées à jour, sans pouvoir garantir leur exactitude,
                leur exhaustivité ou leur actualité en toutes circonstances.
              </p>

              <p>
                Le site peut contenir des liens vers des services et sites
                tiers, notamment Instagram, Spotify et Amazon.
              </p>

              <p>
                MEVERLY n'exerce aucun contrôle sur ces sites externes et
                ne peut être tenue responsable de leur contenu, de leur
                disponibilité ou de leurs pratiques.
              </p>

            </div>
          </section>

          {/* Données personnelles */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Données personnelles
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Le formulaire de contact présent sur ce site collecte les
                informations nécessaires au traitement de votre demande :
                nom, adresse e-mail, sujet et contenu du message.
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
                  className="
                    text-[#C99A63]
                    transition
                    hover:text-[#F5F1EB]
                  "
                >
                  m.everlybooks@gmail.com
                </a>
              </p>

              <p>
                Les données sont collectées afin de recevoir, traiter et
                répondre aux demandes adressées via le formulaire de contact.
              </p>

              <p>
                La base légale du traitement est l'intérêt légitime du
                responsable du traitement à répondre aux demandes qui lui
                sont adressées.
              </p>

              <p>
                Les champs du formulaire sont obligatoires afin de permettre
                le traitement de la demande. L'absence de renseignement des
                informations demandées peut empêcher MEVERLY de répondre
                au message.
              </p>

              <p>
                Les données sont destinées à MEVERLY et à son prestataire
                technique d'envoi d'e-mails,{" "}
                <strong className="text-[#F5F1EB]">
                  Resend
                </strong>
                , dans la mesure nécessaire au fonctionnement du formulaire.
              </p>

              <p>
                Les données traitées via Resend peuvent notamment comprendre
                l'adresse e-mail, les métadonnées et le contenu des messages.
                Resend indique que ses opérations principales de traitement
                sont situées aux États-Unis.
              </p>

              <p>
                Lorsque des données personnelles sont transférées hors de
                l'Espace économique européen, Resend indique mettre en œuvre
                les garanties prévues par la réglementation applicable,
                notamment les clauses contractuelles types de l'Union
                européenne et le cadre EU-U.S. Data Privacy Framework,
                selon les conditions applicables.
              </p>

              <p>
                Les données sont conservées pendant la durée nécessaire au
                traitement et au suivi de la demande, puis supprimées
                lorsqu'elles ne sont plus nécessaires, sous réserve des
                obligations légales éventuellement applicables.
              </p>

              <p>
                Vous disposez, dans les conditions prévues par la
                réglementation applicable, de droits d'accès, de
                rectification, d'effacement et de limitation du traitement,
                ainsi que d'un droit d'opposition lorsque celui-ci est
                applicable.
              </p>

              <p>
                Pour exercer vos droits ou pour toute question concernant
                vos données personnelles, vous pouvez contacter :
              </p>

              <p>
                <a
                  href="mailto:m.everlybooks@gmail.com"
                  className="
                    text-[#C99A63]
                    transition
                    hover:text-[#F5F1EB]
                  "
                >
                  m.everlybooks@gmail.com
                </a>
              </p>

              <p>
                Vous pouvez également introduire une réclamation auprès de
                la Commission nationale de l'informatique et des libertés
                (CNIL).
              </p>

            </div>
          </section>

          {/* Cookies et traceurs */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Cookies et traceurs
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Le site n'utilise pas, à la connaissance de l'éditeur,
                de cookies ou de traceurs destinés à réaliser de la
                publicité personnalisée ou à établir un profil de navigation.
              </p>

              <p>
                Si de nouveaux services utilisant des cookies ou des traceurs
                soumis à consentement sont ajoutés ultérieurement, une
                information et, lorsque nécessaire, un mécanisme de
                consentement seront mis en place conformément à la
                réglementation applicable.
              </p>

            </div>
          </section>

          {/* Services tiers */}

          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB]">
              Services tiers
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#D9CFC5]">

              <p>
                Le site propose des liens vers des services tiers, notamment
                Instagram, Spotify et Amazon. Lorsque vous cliquez sur ces
                liens, vous quittez le site meverly.fr et êtes soumis aux
                conditions d'utilisation et politiques de confidentialité
                des services concernés.
              </p>

              <p>
                Le site utilise Vercel pour son hébergement et Resend pour
                l'envoi des messages transmis via le formulaire de contact.
              </p>

            </div>
          </section>

        </div>

        {/* Bas de page */}

        <div
          className="
            mt-24
            flex
            flex-col
            gap-4
            border-t
            border-white/5
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-sm text-[#77706A]">
            © {new Date().getFullYear()} Meverly — Tous droits réservés.
          </p>

          <Link
            href="/"
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#8B8178]
              transition-colors
              duration-300
              hover:text-[#C99A63]
            "
          >
            Retour à l'accueil
          </Link>

        </div>

      </div>

    </main>
  );
}


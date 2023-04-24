export type InstituteMember = {
  key: string;
  memberTitle: string | React.ReactNode; // e.g. <>izv. prof. dr. sc. <b>Dario Bojanjac</b>, ravnatelj</>
  association?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imagePath: string;
};

export type InstituteBranch = {
  name: string;
  members: InstituteMember[];
};

export const instituteBranchesData: InstituteBranch[] = [
  {
    name: "Uprava",
    members: [
      {
        key: "Dario Bojanjac",
        memberTitle: (
          <>
            Izv. prof. dr. sc. <b>Dario Bojanjac</b>, ravnatelj
          </>
        ),
        description: (
          <>
            Profesor na Fakultetu elektrotehnike i računarstva Sveučilišta u
            Zagrebu, suradnik na projektima na Akademiji likovnih umjetnosti,
            Prirodoslovno matematičkom fakultetu i Filozofskom fakultetu,
            dobitnik nagrade Roberto Giannini za najboljeg mladog profesora.
            <br />
            <br />
            Znanstveno djeluje u području matematičkog modeliranja s primjenama
            u komunikacijskim tehnologijama, radarskim sustavima i
            elektromagnetskim materijalima.
          </>
        ),
        imagePath: require("../../resources/about-page/members-images/dario-bojanjac.png"),
      },
      {
        key: "Filip Turčinović",
        memberTitle: (
          <>
            <b>Filip Turčinović</b>, mag. ing.
          </>
        ),
        description: (
          <>
            Istraživač i doktorand na Fakultetu elektrotehnike i računarstva
            Sveučilišta u Zagrebu. Suosnivač platforme za digitalni marketing,
            organizator nekoliko međunarodnih znanstvenih konferencija i
            suradnik na programu startup edukacije Nuqleus.
            <br />
            <br />
            Znanstveno djeluje u području daljinskih istraživanja s naglaskom na
            primjenu umjetne inteligencije u radarskim sustavima.
          </>
        ),
        imagePath: require("../../resources/about-page/members-images/filip-turcinovic.png"),
      },
      {
        key: "Matea Vasilj",
        memberTitle: (
          <>
            <b>Matea Vasilj</b>, univ. bacc. ing.
          </>
        ),
        description: (
          <>
            Potpredsjednica Studentskog zbora Sveučilišta u Zagrebu i studentica
            druge godine diplomskog studija na Fakultetu elektrotehnike i
            računarstva Sveučilišta u Zagrebu.
            <br />
            <br />
            Organizatorica FER Alumni panelica, brojnih događaja u studentskoj
            udruzi EESTEC LC Zagreb i predstavnica Odbora za digitalne
            tehnologije pri Studentskom zboru. Stručno djeluje u razvoju
            softwarea i primjeni strojnog učenja unutar Ultrax startupa.
          </>
        ),
        imagePath: require("../../resources/about-page/members-images/matea-vasilj.png"),
      },
    ],
  },
  {
    name: "Znanstveni savjet Instituta",
    members: [
      {
        key: "Renata Geld",
        memberTitle: (
          <>
            Izv. prof. dr. sc. <b>Renata Geld</b>
          </>
        ),
        association: "Filozofski fakultet Sveučilišta u Zagrebu",
        imagePath: require("../../resources/about-page/members-images/renata-geld.png"),
      },
      {
        key: "Marko Delimar",
        memberTitle: (
          <>
            Prof. dr. sc. <b>Marko Delimar</b>
          </>
        ),
        association: "Fakultet elektrotehnike i računarstva",
        imagePath: require("../../resources/about-page/members-images/marko-delimar.png"),
      },
      {
        key: "Stefan Cikota",
        memberTitle: (
          <>
            Dr. sc. <b>Stefan Cikota</b>
          </>
        ),
        association: "Calar Alto Observatory",
        imagePath: require("../../resources/about-page/members-images/stefan-cikota.png"),
      },
    ],
  },
  {
    name: "Istaknuti članovi Instituta",
    members: [
      {
        key: "",
        memberTitle: (
          <>
            <b>Dominik Žanić</b>, mag. ing.
          </>
        ),
        description: (
          <>
            Istraživač i doktorand na Fakultetu elektrotehnike i računarstva
            Sveučilišta u Zagrebu. Magistrirao u području informacijskih i
            komunikacijskih tehnologija. Dugogodišnji volonter KSET-a, gdje je
            bio voditelj Planinarske sekcije i član sekcijskog PR tima, a danas
            je počasni član. Njegovo trenutno područje znanstvenog rada su
            aktivni radiofrekvencijski sklopovi.
          </>
        ),
        imagePath: require("../../resources/about-page/members-images/dominik-zanic.png"),
      },
      {
        key: "",
        memberTitle: (
          <>
            <b>Dubravko Tomić</b>, mag. ing.
          </>
        ),
        description: (
          <>
            Istraživač i doktorand na Fakultetu elektrotehnike i računarstva
            Sveučilišta u Zagrebu. Van akademski aktivan kao solo gitarist sa
            srednjoškolskom glazbenom naobrazbom u rock bendu te kao organizator
            nekoliko pub kvizova. Znanstveno djeluje u području
            elektromagnetskih metapovršina i periodičkih struktura s višim
            simetrijama.
          </>
        ),
        imagePath: require("../../resources/about-page/members-images/dubravko-tomic.png"),
      },
    ],
  },
];

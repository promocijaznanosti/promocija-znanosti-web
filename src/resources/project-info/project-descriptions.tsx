export type ProjectDescription = {
  id: string;
  title: string;
  description: string | React.ReactNode;
  homePageImage?: string;
  projectsPageImage?: string;
  articleBannerImage?: string;
  colorMode?: "light" | "dark";
};

export const projectDescriptions: ProjectDescription[] = [
  {
    id: "podkist",
    title: "podkist",
    description:
      "Usprkos uvriježenom mišljenju kako se mladi informiraju isključivo konzumirajući brze i neprovjerene vijesti s društvenih mreža, među mlađom se populacijom, ali s tendencijom rasta i kod odraslih, istaknuo format podcasta. Kroz ležerne  razgovore koji nisu ograničeni ni tematikom ni duljinom trajanja, epizode Podkista u kojima gostuju vodeći pojedinci iz svijeta znanosti i obrazovanja potiču znatiželju, mijenjaju gledateljevu perspektivu.",
    homePageImage: require("../../resources/home-page/project-podkist.png"),
    projectsPageImage: require("../../resources/projects-page/project-podkist.png"),
  },
  {
    id: "znanost",
    title: "Znanost",
    description: (
      <>
        ZnaNOSt je umjetnički orijentiran projekt kojemu je osnovna ideja na
        vizualno zanimljiv način prenijeti citat poznate osobe iz svijeta
        znanosti. <br />
        <br /> U moru neprovjerenih citata na internetu, ZnaNOSt pažljivo
        odabire inspirativne citate o znanosti i obrazovanju te ih prikazuje u
        rukom pisanoj formi na crtežima.
      </>
    ),
    homePageImage: require("../../resources/home-page/project-znanost.png"),
    projectsPageImage: require("../../resources/projects-page/project-znanost.png"),
  },
  {
    id: "znanstvena-peskarija",
    title: "Znanstvena peškarija",
    description:
      "U našoj peškariji svakog tjedna odabiremo znanstvene vijesti, događaje ili osobe te u sažetom formatu prenosimo najzanimljivije informacije i manje poznate činjenice. Znanstvenoj peškariji je cilj privući ljubitelje znanosti koji će, nadamo se, ritualno pohoditi naš punkt znanstvenog života, a možda i potaknuti poneku raspravu u komentarima objave.",
    homePageImage: require("../../resources/home-page/project-znanstvena-peskarija.png"),
    projectsPageImage: require("../../resources/projects-page/project-znanstvena-peskarija.png"),
    colorMode: "dark",
  },
];

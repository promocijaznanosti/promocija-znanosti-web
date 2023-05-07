// PLOP_INSERT_IMPORT_BELOW
import Znanost from "./Znanost/Znanost";
import Podkist from "./Podkist/Podkist";
import ZnanstvenaPeskarija from "./ZnanstvenaPeskarija/ZnanstvenaPeskarija";

export const articles: Record<
  string,
  { element: React.ReactNode; title: string }
> = {
  // PLOP_INSERT_BELOW
  "znanost": {
    element: <Znanost />,
    title: "Znanost",
  },
  podkist: {
    element: <Podkist />,
    title: "Podkist",
  },
  "znanstvena-peskarija": {
    element: <ZnanstvenaPeskarija />,
    title: "Znanstvena Peškarija",
  },
};

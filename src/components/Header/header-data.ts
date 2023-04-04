export type HeaderElement = {
  key: string;
  title: string;
  href: string;
};

export const headerData: HeaderElement[] = [
  {
    key: "home",
    title: "Naslovnica",
    href: "/",
  },
  {
    key: "about",
    title: "O nama",
    href: "/about",
  },
  {
    key: "projects",
    title: "Projekti",
    href: "/projects",
  },
  {
    key: "contact",
    title: "Kontakt",
    href: "/contact",
  },
];

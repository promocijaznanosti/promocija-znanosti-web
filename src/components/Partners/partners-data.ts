export type PartnerData = {
  name: string;
  href: string;
  image: string;
};

const tmpImageSrc = require("../../resources/tmp.png");

// Edit this array to include your partners data
export const partnersData: PartnerData[] = [
  {
    name: "Partner 1",
    href: "https://example.com",
    image: tmpImageSrc,
  },
  {
    name: "Partner 2",
    href: "https://example.com",
    image: tmpImageSrc,
  },
  {
    name: "Partner 3",
    href: "https://example.com",
    image: tmpImageSrc,
  },
  {
    name: "Partner 4",
    href: "https://example.com",
    image: tmpImageSrc,
  },
  {
    name: "Partner 5",
    href: "https://example.com",
    image: tmpImageSrc,
  },
];

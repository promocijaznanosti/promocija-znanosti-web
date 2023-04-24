export const INSTITUTE_ADDRESS = "Unska 3, 10000 Zagreb";

export type InstituteMemberContact = {
  key: string;
  memberTitle: string | React.ReactNode;
  phoneNumber: string | React.ReactNode;
  email: string | React.ReactNode;
};

export type InstituteBranchContact = {
  name: string;
  contacts: InstituteMemberContact[];
};

export const instituteContactData: InstituteBranchContact[] = [
  {
    name: "Uprava Instituta",
    contacts: [
      {
        key: "Dario Bojanjac",
        memberTitle: (
          <>
            Izv. prof. dr. sc. <b>Dario Bojanjac</b>, ravnatelj
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
      {
        key: "Filip Turčinović",
        memberTitle: (
          <>
            <b>Filip Turčinović</b>, mag. ing., zamjenik ravnatelja
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
      {
        key: "Matea Vasilj",
        memberTitle: (
          <>
            <b>Matea Vasilj</b>, univ. bacc. ing., tajnik
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
    ],
  },
  {
    name: "Znanstveni savjet Instituta",
    contacts: [
      {
        key: "Renata Geld",
        memberTitle: (
          <>
            Izv. prof. dr. sc. <b>Renata Geld</b>, Filozofski fakultet
            Sveučilišta u Zagrebu
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
      {
        key: "Marko Delimar",
        memberTitle: (
          <>
            Prof. dr. sc. <b>Marko Delimar</b>, Fakultet elektrotehnike i
            računarstva
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
      {
        key: "Stefan Cikota",
        memberTitle: (
          <>
            Dr. sc. <b>Stefan Cikota</b>, Calar Alto Observatory
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
    ],
  },
  {
    name: "Istaknuti članovi Instituta",
    contacts: [
      {
        key: "",
        memberTitle: (
          <>
            <b>Dominik Žanić</b>, mag. ing.
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
      {
        key: "",
        memberTitle: (
          <>
            <b>Dubravko Tomić</b>, mag. ing.
          </>
        ),
        phoneNumber: "01 123 9876 / 098 123 9876",
        email: "example@example.com",
      },
    ],
  },
];

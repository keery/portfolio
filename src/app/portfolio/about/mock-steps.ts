import { Step } from "./steps.interface";

export const STEPS: { [key: number]: Step } = {
  1: {
    idSlide: 1,
    delay: 3000,
    titre: "GEN Contact",
    subInfo: {
      "When?": "2015 - 2017",
      Website:
        "<a href='http://www.gencontact.fr' target='_blank' class='slide-link'><div class='default'>gencontact.fr</div><div>gencontact.fr</div></a>",
      Role: "Full stack",
    },
    description:
      "Hi, my name is Guillaume ESNAULT, 25 years old, JS (fan) developer from Paris with great interest into React. I started to learn development by myself in 2013 until my first experience. It was in GEN Contact a web agency selling websites and print services. My first job as developer I discovered a lot of aspects about this profession, back, front, how to manage a database, how to create a graphic model. My main tasks was to integrate websites and module development in PHP/jQuery.",
  },
  2: {
    idSlide: 2,
    delay: 2000,
    titre: "Neftis",
    subInfo: {
      "When?": "2017 - 2018",
      Website:
        "<a href='http://www.neftis.fr' target='_blank' class='slide-link'><div class='default'>neftis.fr</div><div>neftis.fr</div></a>",
      Role: "Full stack",
    },
    description:
      "Neftis is a web agency who developed a home made CMS named FLEXIT, my main activity was to develop new features on it. Mainly back oriented, but I developed also websites for customers.",
  },
  4: {
    idSlide: 3,
    delay: 2000,
    titre: "Sewan",
    subInfo: {
      "When?": "2018 - 2020",
      Website:
        "<a href='http://www.sewan.fr' target='_blank' class='slide-link'><div class='default'>sewan.fr</div><div>sewan.fr</div></a>",
      Role: "Full stack JS",
    },
    description:
      "Sewan is a telecommunication company where I worked on many projects in order to make life easier for employees. My first experience in a big company with more than 80 developers, that offers me the possibility to share about a lot of different subjects. I worked on projects using React, Node, GraphQL, MongoDB, with a SCRUM organization.",
  },
  5: {
    idSlide: 4,
    delay: 2000,
    titre: "Premier Octet",
    subInfo: {
      "When?": "2020 - Today",
      Website:
        "<a href='https://www.premieroctet.com/' target='_blank' class='slide-link'><div class='default'>premieroctet.com</div><div>premieroctet.com</div></a>",
      Role: "Full stack JS",
    },
    description:
      "Premier octet is a modern web agency, specialized in Javascript application development more specifically in React or mobile apps with React native. Small and really friendly agency with passionated developers who they used to share each new cool stuffs they discover to everyone, making all team members improving their skills constantly.",
  },
};

import { v4 as uuid } from "uuid";

// ======== categories ========
// html&css
// JavaScript
// reactjs
// nextjs
// Bootstrap
// tailwind

// export const myProjects = [
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "htmlandcssone_jbce1f",
//     heading: "HTML_And_CSS_Template-One",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/HTML_And_CSS_Template-One",
//     moreUrl: "https://rashadhusien.github.io/HTML_And_CSS_Template-One/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],

//     imgUrl: "htmlandcsstwo_kz45o6",
//     heading: "HTML And CSS Template Two",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/HTML_And_CSS_Template-Two",
//     moreUrl: "https://rashadhusien.github.io/HTML_And_CSS_Template-Two/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],

//     imgUrl: "qrcode_ckchiz",
//     heading: "Qrcode",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/Qrcode",
//     moreUrl: "https://rashadhusien.github.io/Qrcode/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "threecolumns_gcimpv",
//     heading: "3-column preview cards",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/3-column-preview-card",
//     moreUrl: "https://rashadhusien.github.io/3-column-preview-card/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "gabrielle_erlrun",
//     heading: "product preview card component main",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl:
//       "https://github.com/Rashadhusien/product-preview-card-component-main",
//     moreUrl:
//       " https://rashadhusien.github.io/product-preview-card-component-main/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "iconlinks_nbob66",
//     heading: "social links profile",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/social-links-profile",
//     moreUrl: "https://rashadhusien.github.io/social-links-profile/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "htmlcsscard_g8vgtl",
//     heading: "preview card main",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/preview-card-main",
//     moreUrl: "https://rashadhusien.github.io/preview-card-main/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "ordersummerycard_eilbqv",
//     heading: "order summary component main",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/order-summary-component-main",
//     moreUrl: " https://rashadhusien.github.io/order-summary-component-main/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "htmlandcssthree_brfupx",
//     heading: "HTML and CSS Template Three",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/html-css-template-3",
//     moreUrl: "https://rashadhusien.github.io/html-css-template-3/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "fylo_kg9fja",
//     heading: "fylo data storage component",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl:
//       "https://github.com/Rashadhusien/fylo-data-storage-component-master",
//     moreUrl:
//       "https://rashadhusien.github.io/fylo-data-storage-component-master/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "huddle_ahluop",
//     heading: "huddle landing page",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl:
//       "https://github.com/Rashadhusien/huddle-landing-page-with-alternating-feature-blocks-master",
//     moreUrl:
//       "https://rashadhusien.github.io/huddle-landing-page-with-alternating-feature-blocks-master/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css", "tailwind"],
//     imgUrl: "designtailwind_jtpcur",
//     heading: "Design Tailwind",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/Design_Tailwind",
//     moreUrl: "https://rashadhusien.github.io/Design_Tailwind/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css", "JavaScript"],
//     imgUrl: "guessThewordGame_opwl3x",
//     heading: "Guess The Word Game",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/Guess-the-word",
//     moreUrl: "https://rashadhusien.github.io/Guess-the-word/",
//   },
//   {
//     id: uuid(),
//     category: ["reactjs", "JavaScript"],
//     imgUrl: "prayertimings_jmphlx",
//     heading: "prayers-timings",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/prayers-timings",
//     moreUrl: "https://keen-paprenjak-733d78.netlify.app/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css", "JavaScript"],
//     imgUrl: "faq_mckcxq",
//     heading: "faq-accordion-main",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/faq-accordion-main",
//     moreUrl: "https://rashadhusien.github.io/faq-accordion-main/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css", "JavaScript", "tailwind"],
//     imgUrl: "socialDashBoard_jexbh3",
//     heading: "social-media-dashboard",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl:
//       "https://github.com/Rashadhusien/social-media-dashboard-with-theme-switcher-master",
//     moreUrl:
//       "https://rashadhusien.github.io/social-media-dashboard-with-theme-switcher-master/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "four-cards_ogjzmk",
//     heading: "four-card-feature",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl:
//       "https://github.com/Rashadhusien/four-card-feature-section-master",
//     moreUrl: "https://rashadhusien.github.io/four-card-feature-section-master/",
//   },
//   {
//     id: uuid(),
//     category: ["html&css"],
//     imgUrl: "privewCard_nmmx65",
//     heading: "Privew Card",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/preview-card",
//     moreUrl: "https://rashadhusien.github.io/preview-card/",
//   },
//   {
//     id: uuid(),
//     category: ["nextjs", "JavaScript", "tailwind", "reactjs"],
//     imgUrl: "linkDesign_ocpwsw",
//     heading: "Link Design",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
//     linkActiveUrl: "https://github.com/Rashadhusien",
//     githubUrl: "https://github.com/Rashadhusien/link-design",
//     moreUrl: "https://link-design.vercel.app/",
//   },
// ];

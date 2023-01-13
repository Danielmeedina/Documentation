export const info = [
  {
    title: "html",
    topics: [
      "Send email",
      "Mobile Icon",
      "Mobile color",
      "Flip card",
      "Media query img",
      "Feature query",
      "Autocomplete",
    ],
  },
  {
    title: "css",
    topics: [
      "Animation",
      "Animate background",
      "Video text background",
      "Background text",
      "Pause animation",
      "Image responsive",
      "Responsive text",
      "Scroll bar",
      "Image in list",
      "Text column",
      "Grid",
      "Grid responsive",
      "Wave text animation",
      "Gradient borders",
      "Gradient text",
      "Typewriter effect",
      "Truncate text",
      "Separate image effect",
      "Carrousel",
      "Text rotate effect",
      "Form color",
    ],
  },
  {
    title: "javascript",
    topics: ["Merge Array", "Min Max number"],
  },
  {
    title: "git",
    topics: [
      "Initial commands",
      "First configuration",
      "Initialize repository",
      "Basic git flow",
      "Git help",
      "Branch management",
      "Merge branch",
      "Pull request",
      "Alternative commands",
    ],
  },
];

export const getTopics = (index) => {
  const data = info[index].topics;
  return data;
};

// const dictionary = [
//   {
//     en: {
//       title: "css",
//       topics: {
//         formColor: {
//           title: "Form color",
//           text: {
//             p: "Text english",
//             small: "text small",
//           },
//         },
//         pauseAnimation: {
//           title: "Pause animation",
//           text: {
//             p: "Text english",
//             small: "text small",
//           },
//         },
//       },
//     },
//     es: {
//       title: "css",
//       topics: {
//         formColor: {
//           title: "Color a formularios",
//           text: {
//             p: "Texto en español de este articulo",
//             small: "texto de small",
//           },
//         },
//         pauseAnimation: {
//           title: "Pausar animacion",
//           text: {
//             p: "Texto en español de este articulo",
//             small: "texto de small",
//           },
//         },
//       },
//     },
//   },
// ];

// console.log(dictionary[0].en.title);
// console.log(dictionary[0].en.topics.formColor.title);
// console.log(dictionary[0].en.topics.formColor.text.p);
// console.log(dictionary[0].es.title);
// console.log(dictionary[0].es.topics.formColor.title);
// console.log(dictionary[0].es.topics.formColor.text.p);

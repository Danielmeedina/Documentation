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

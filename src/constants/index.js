import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  docker,
  jws,
  osu,
  ivet360,
  wellwell,
  carnation,
  carrent,
  jobit,
  tripguide,
  johnwhitten,
  coredigital,
  thunderstruck,
  fitness,
  threejs,
  wordpress,
  // photoshop,
  // illustrator,
  // indesign,
  // lightroom,
  // premiere,
  // aftereffects,
  // audition,
  // sketchup,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "photoshop",
  //   icon: photoshop,
  // },
  // {
  //   name: "illustrator",
  //   icon: illustrator,
  // },
  // {
  //   name: "indesign",
  //   icon: indesign,
  // },
  // {
  //   name: "lightroom",
  //   icon: lightroom,
  // },
  // {
  //   name: "premiere",
  //   icon: premiere,
  // },
  // {
  //   name: "aftereffects",
  //   icon: aftereffects,
  // },
  // {
  //   name: "audition",
  //   icon: audition,
  // },
  // {
  //   name: "sketchup",
  //   icon: sketchup,
  // },
];

const experiences = [
  {
    title: "Freelance Designer and Web Developer",
    company_name: "John Whitten Studio",
    icon: jws,
    iconBg: "#383e56",
    date: "September 2010 - Present",
    points: [
      "Fulfilled contract and private commissions for web design, fine artwork, layout design, videography, and photography.",
      "Developed concepts, produced and pitched completed work directly to clients with 100% customer satisfaction.",
      "Funded over 14 projects totalling over $185K sourced from regional and national arts and government granting organizations.",
    ],
  },
  {
    title: "Digital Art Instructor",
    company_name: "Oregon State University",
    icon: osu,
    iconBg: "#E6DEDD",
    date: "December 2015 - Present",
    points: [
      "Designed and facilitated (100+) term-long undergraduate on-campus + online courses geared for both majors and non-majors in digital art, video, animation, photography, graphic and web design.",
      "Completely overhauled the first-year required CORE courses resulting in a 30% increase in freshman art majors.",
      "Prepared compelling, accessible learning resources delivered through LMS and various modalities aimed to teach complex technical skills and processes to beginner and advanced-level learners.",
    ],
  },
  {
    title: "Front-end Developer Intern",
    company_name: "iVET360",
    icon: ivet360,
    iconBg: "#162b5d",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Developed and maintaining web applications using WordPress, PHP, CSS, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-Founding Director & Web Designer",
    company_name: "Well Well Projects",
    icon: wellwell,
    iconBg: "#f7f6f8",
    date: "Jan 2021 - Present",
    points: [
      "Collaborated with a small team to conceive, launch,and manage a cooperative art galleries with rotating monthly programming and community-focused events.",
      "Supported a 14+ member base through website design & content management + photo documentation.",
      "Developed captivating media content (web pages, videos,animations) that lead to a 80% increase in web traffic.",
    ],
  },
  {
    title: "Co-Founding Director & Web Designer",
    company_name: "Carnation Contemporary",
    icon: carnation,
    iconBg: "#383E56",
    date: "Sep 2018 - Feb 2022",
    points: [
      "Collaborated with a small team to conceive, launch,and manage a cooperative art galleries with rotating monthly programming and community-focused events.",
      "Supported a 18+ member base through website design & content management + photo documentation.",
      "Developed captivating media content (web pages, videos,animations) that lead to a 60% increase in web traffic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "John Whittten Art",
    description:
      "Visual art portfolio site with image galleries, animations, and interactive flip book.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: johnwhitten,
    source_code_link: "https://github.com/johnwhittenstudio/john-whitten_art.git",
    live_url_link: "https://johnwhitten.com/",
  },
  // {
  //   name: "Core Digital",
  //   description:
  //     "Student learning supplement website for college-level digital arts course complete with weekly lessons, 4 major project assignments, and instructor contact information.",
  //   tags: [
  //     {
  //       name: "wordpress",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "php",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: coredigital,
  //   source_code_link: "https://github.com/johnwhittenstudio",
  //   live_url_link: "https://dll.qxo.mybluehost.me/",
  // },
  {
    name: "Thunderstruck",
    description:
      "Portfolio site with image galleries, interactive digital books, animations, artist profiles, and more for the Thunderstruck Collective artist project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "particleimage",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: thunderstruck,
    source_code_link: "https://github.com/johnwhittenstudio/thunderstruck",
    live_url_link: "https://thunderstruckcollective.com/",
  },
  {
    name: "Fitness App",
    description:
      "Web app to choose exercise categories and specific muscle groups, browse exercises with practical examples, pull related videos from youtube, display similar exercises, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/johnwhittenstudio/fitness_app",
    live_url_link: "https://jws-fitness.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
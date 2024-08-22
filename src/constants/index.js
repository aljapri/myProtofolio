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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  versionControl, programmingWithJavaScript, introductionToFrontEnd, htmlAndCssInDepth,
  databaseSql1,databaseSql2,introductionToDatabases,ProblemSoling1,ProgrammingFoundations,ProgrammingWithC1,ProgrammingWithC2,objectOrientedProgramming,probelmSolving2,problemSolving,problemSolving3,
  ProjectOne,ProjectTow,ProjectThree
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Dev Questions",
    description:
      "Built a platform where developers can ask technical questions, share knowledge, and find solutions. The application enables users to post coding queries, provide answers, and upvote the best solutions, fostering a collaborative learning environment. It also includes features like tag-based categorization, search functionality, and reputation scores to enhance community engagement and expertise sharing.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Mongoedb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    image: ProjectOne,
    source_code_link: "https://uok-dev-v1-f4qb.vercel.app/",
  },
  {
    name: "Protofolio",
    description:
      "Developed a web application that empowers users to search for job opportunities, view estimated salary ranges for various positions, and discover available jobs based on their current location. The platform provides a seamless experience for job seekers by integrating advanced search features and location-based filtering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ProjectThree,
    source_code_link: "https://shaza-alsham.vercel.app/",
  },
  {
    name: "Social Media App",
    description:
      "A dynamic social platform that connects travelers worldwide, allowing users to share travel experiences, discover trending destinations, and access personalized recommendations. The app integrates booking features, enabling users to book flights, hotels, and rental cars directly through the platform while also exploring curated travel content and insider tips from a community of like-minded explorers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
    image: ProjectTow,
    source_code_link: "https://social-media-app-main-pearl.vercel.app/",
  },
];

/*

    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
*/
const certificates = [
  {
    name: "INTRODUCTION TO FRONT END",
    image: introductionToFrontEnd
  },
  {
    name: "version Control",
    image: versionControl
  },
  {
    name: "programming With JavaScript",
    image: programmingWithJavaScript
  },
  {
    name: "html And Css In Depth",
    image: htmlAndCssInDepth
  },
  {
    name: "introduction To Databases",
    image: introductionToDatabases
  },
  {
    name: "database SQL Server ",
    image: databaseSql1
  },
  {
    name: "database SQL Server in practice",
    image: databaseSql2
  },
  //-------------------------
  {
    name: "probelm solving",
    image: problemSolving
  },
  {
    name: "probelm solving",
    image: ProblemSoling1
  },
  {
    name: "probelm solving",
    image: probelmSolving2
  },
  {
    name: "probelm solving",
    image: problemSolving3
  }
  ,
  {
    name: "Programming Foundations",
    image: ProgrammingFoundations
  },
  {
    name: "Programming with c++",
    image: ProgrammingWithC1
  },
  {
    name: "Programming with c++",
    image: ProgrammingWithC2
  },
  {
    name: "Object oriented Programming",
    image: objectOrientedProgramming
  }
];

export { services, technologies, experiences, testimonials, projects, certificates };

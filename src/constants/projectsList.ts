import walletImg from "../images/wallet.jpg";
import petlyImg from "../images/petly.jpg";
import filmotekaImg from "../images/filmoteka.jpg";
import iceCreamImg from "../images/icecream.jpg";
import dogsImg from "../images/dogs.jpg";
import todosImg from "../images/todos.jpg";
import portfolioImg from "../images/portfolio.jpg";
import phonebookImg from "../images/phonebook.jpg";

export const projectsList = [
  {
    title: "Portfolio",
    dev: "Individual project",
    role: "",
    img: `${portfolioImg}`,
    techs:
      "[JavaScript, TypeScript, React, Styled-components, Responsive / Adaptive design, GitHub]",
    description:
      "Routed SPA, where I introduced myself and showed some from my developing experience. You can find the information about me, my education and workplace, my individual projects as well as team ones (with my role specified), my skiils and a contact information. You're welcomed to use it",
    demo: "https://alexrudnyk.github.io/portfolio/",
    code: "https://github.com/AlexRudnyk/portfolio",
    delay: 0,
  },

  {
    title: "Wallet",
    dev: "Individual project",
    role: "",
    img: `${walletImg}`,
    techs:
      "[JavaScript, React, Styled-components, Redux Toolkit, Figma, Responsive / Adaptive design, GitHub, Node.js, Express, Postman, Mongoose, MongoDB Compass, Vercel]",
    description:
      "Suitable application for easy family budget management. General information about your transactions, doughnut diagram of your expenses and online currency exchange rates.",
    demo: "https://alexrudnyk.github.io/wallet/",
    code: "https://github.com/AlexRudnyk/wallet",
    delay: 0.5,
  },
  {
    title: "Petly",
    dev: "Group project",
    role: "Role: backend, Google-authentication, UA-localization, access/refresh tokens.",
    img: `${petlyImg}`,
    techs:
      "[JavaScript, React, Styled-components, Redux Toolkit, Figma, Responsive / Adaptive design, GitHub, Node.js, Express, Postman, Mongoose, MongoDB Compass, Render]",
    description:
      "The application for pet lovers. Adding and searching notices to buy/sell, give to good hands and lost/found animals.",
    demo: "https://fantusya.github.io/petly/",
    code: "https://github.com/AlexRudnyk/petly",
    delay: 1,
  },
  {
    title: "Filmoteka",
    dev: "Group project",
    role: "Role: Layout, styling and setting of main pagination, scroll-up button, implementation of bilingual website.",
    img: `${filmotekaImg}`,
    techs:
      "[HTML, SASS, JavaScript, Parcel, Handlebars, Responsive /Adaptive design, GitHub, Figma, Trello]",
    description:
      "Browse popular, highly rated and most anticipated films, including trailers, artwork, genres and popular reviews.",
    demo: "https://alexrudnyk.github.io/Filmoteka/",
    code: "https://github.com/AlexRudnyk/Filmoteka",
    delay: 1.5,
  },
  {
    title: "Ice creram",
    dev: "Group project",
    role: "Role: adaptive/responsive and animated Hero section",
    img: `${iceCreamImg}`,
    techs:
      "[HTML, SASS, JavaScript, Parcel, Figma, Trello, Responsive/Adaptive design, GitHub]",
    description:
      "Online store IceCream provides irresistible and delicious products on the physical store and caters online ordering.",
    demo: "https://alexrudnyk.github.io/ice-cream-project/",
    code: "https://github.com/AlexRudnyk/ice-cream-project",
    delay: 2,
  },
  {
    title: "Dogs",
    dev: "Individual project",
    role: "",
    img: `${dogsImg}`,
    techs:
      "[JavaScript, React, Responsive / Adaptive design, GitHub, API, Routing, Styled components]",
    description:
      "Educational App for my daughter. Provides breed's details after choosing liked photo or breed option from select.",
    demo: "https://alexrudnyk.github.io/dogs/",
    code: "https://github.com/AlexRudnyk/dogs",
    delay: 2.5,
  },
  {
    title: "Phonebook",
    dev: "Individual project",
    role: "",
    img: `${phonebookImg}`,
    techs:
      "[JavaScript, React, Styled-components, Redux Toolkit, GitHub, Node.js, Express, Mongoose, MongoDB Compass, Vercel]",
    description:
      "Application to store, create, edit and delete contacts. You can easily find a needed contact in the phonebook, just start to type in a search field.",
    demo: "https://alexrudnyk.github.io/Phonebook-front-back/",
    code: "https://github.com/AlexRudnyk/Phonebook-front-back",
    delay: 3,
  },

  {
    title: "Task planner",
    dev: "Individual project",
    role: "",
    img: `${todosImg}`,
    techs: "[JavaScript, React, Redux Toolkit, Redux-persist, GitHub]",
    description:
      "Simple and necessary task planner application for everyone. Allows to add and delete tasks, toggle it's status. Tasks counter and filter by status available for your convenience.",
    demo: "https://alexrudnyk.github.io/Task-planner/",
    code: "https://github.com/AlexRudnyk/Task-planner",
    delay: 3.5,
  },
];

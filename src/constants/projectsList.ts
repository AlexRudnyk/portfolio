import walletImg from "../images/wallet.jpg";
import petlyImg from "../images/petly.jpg";
import filmotekaImg from "../images/filmoteka.jpg";
import iceCreamImg from "../images/icecream.jpg";
import dogsImg from "../images/dogs.jpg";
import todosImg from "../images/todos.jpg";
import portfolioImg from "../images/portfolio.jpg";
import phonebookImg from "../images/phonebook.jpg";
import indiraImg from "../images/indira.jpg";
import indiraAppImg from "../images/indira-app.jpg";
import carsShowImg from "../images/cars-showroom.jpg";

export const projectsList = [
  {
    title: "Indira shop",
    dev: "Individual project",
    role: "",
    img: `${indiraAppImg}`,
    techs:
      "[Next.js, Typescript, Tailwind css, Redux Toolkit, Responsive / Adaptive design, GitHub, Node.js, Express, Mongoose, MongoDB Compass, Vercel]",
    description:
      "Commercial SSR project of soap internet shop. All operations with goods and users' comments are available to manage for the owner with convinient interface of administrator console",
    demo: "https://indira-app.vercel.app/",
    code: "https://github.com/AlexRudnyk/indira-app",
    delay: 0,
  },

  {
    title: "Cars Showroom",
    dev: "Individual project",
    role: "",
    img: `${carsShowImg}`,
    techs:
      "[Next.js, Typescript, Tailwind css, Headlessui, RapidAPI, Responsive / Adaptive design, GitHub, Vercel]",
    description:
      "Awesome application to search a full car model information using different filters",
    demo: "https://cars-showroom-three.vercel.app/",
    code: "https://github.com/AlexRudnyk/cars-showroom",
    delay: 0.5,
  },

  {
    title: "Indira",
    dev: "Individual project",
    role: "",
    img: `${indiraImg}`,
    techs:
      "[JavaScript, React, Styled-components, Redux Toolkit, Responsive / Adaptive design, GitHub, Node.js, Express, Mongoose, MongoDB Compass, Vercel]",
    description:
      "Commercial project online shop for soap producer to make sell process easier and more automated. There are options available as commenting a good, adding goods to a cart, chosing quantity in the cart and placing an order, which the seller will receive on his email.",
    demo: "https://alexrudnyk.github.io/indira-shop/",
    code: "https://github.com/AlexRudnyk/indira-shop",
    delay: 1,
  },

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
    delay: 1.5,
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
    delay: 2,
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
    delay: 2.5,
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
    delay: 3,
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
    delay: 3.5,
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
    delay: 4,
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
    delay: 4.5,
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
    delay: 5,
  },
];

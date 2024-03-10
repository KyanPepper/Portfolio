export const ProjectCards = [
  {
    //Washconstruction
    TechImgs: [
      "src/lib/imgs/1200px-Python.svg.png",
      "src/lib/imgs/flasklogo.png",
      "src/lib/imgs/Postgresql_elephant.svg.png",
      "src/lib/imgs/1200px-Svelte_Logo.svg.png",
      "src/lib/imgs/tailwind.svg",
      "src/lib/imgs/Typescript_logo_2020.svg.png"
    ],

    Title: "Washington Construction Projects",
    About:
      "WCP is a webscraper map visualization tool tailored for tracking construction projects in Washington. It categorizes construction projects by county, presenting a streamlined list and visual representation on a map to inform users on various projects.",
    img1: "src/lib/ProjectScreenShots/washconstruction1.png",
    img2: "src/lib/ProjectScreenShots/washconstruction2.png",
    Frontend:
      "The Frontend is built on SvelteKit and styled with Tailwind CSS. I had used the Leaflet library for the map.",
    Backend:
      "WCP utilizes a Python backend with Flask and PostgreSQL for the database. I deliberately chose Python for its web scraping capabilities where I employed the BeautifulSoup library to scrape the construction data. I had also used the OpenStreetMaps api for location data.",
    GhUrl: "https://github.com/KyanPepper/Washington-Construction-Tracker",
    YtUrl: "https://www.youtube.com/watch?v=x_e42T3naCo&ab_channel=KyanKotschevar-Smead",
    DeployedUrl: "http://www.washconstruction.com/",
  },
  {
    //SlangSpeak
    TechImgs: [
      "src/lib/imgs/1200px-Python.svg.png",
      "src/lib/imgs/django-icon.svg",
      "src/lib/imgs/sqlLite.png",
      "src/lib/imgs/React.png",
      "src/lib/imgs/JavaScript-logo.png"
    ],

    Title: "SlangSpeak",
    About:
      "SlangSpeak is a language learning platform, similar to Duolingo, but focused on teaching slang words. You can practice or take exams, signing in through SlangSpeak to track progress. Exams consist of random slang terms and their definitions, while Practice Mode uses the same bank without affecting scores.",
    img1: "src/lib/ProjectScreenShots/slangspeak2.png",
    img2: "src/lib/ProjectScreenShots/slangspeak1.png",
    Frontend:
      "The Frontend was built with React class based components utilizing MUI for the UI.",
    Backend:
      "The backend was made with Django and SQLite and uses Django’s authentication, groups and token generation. With these tools I created various API endpoints for user interactions, including signup, login, and score tracking.",
    GhUrl: "https://github.com/KyanPepper/slang-speak",
    YtUrl: "https://www.youtube.com/watch?v=T07W9B8Sh3o&ab_channel=KyanKotschevar-Smead",
    DeployedUrl: "",
  },
];

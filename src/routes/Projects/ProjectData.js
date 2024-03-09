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

];

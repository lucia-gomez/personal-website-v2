import React from "react"
import Link from '../components/link'
import ExternalButton from "../components/externalButton"

import ImageSignSearch from "../assets/images/portfolio/signSearch.png"
import ImageWebsite from "../assets/images/portfolio/website.jpg"
import ImageSubreddit from "../assets/images/portfolio/subreddit.png"
import ImageCAC from "../assets/images/portfolio/cac.png"
import ImageHollabackGirls from "../assets/images/portfolio/hollabackgirls.png"
import ImageSpillTheTea from "../assets/images/portfolio/spillTheTea.png"
import ImageSpaceBears from "../assets/images/portfolio/spaceBears.png"
import ImageWelcomePreemie from "../assets/images/portfolio/welcomePreemie.png"
import ImageSpotifyVibeCheck from "../assets/images/portfolio/spotifyVibeCheck.png"
import ImageCliqueBite from "../assets/images/portfolio/cliquebite.png"
import ImagePowerHour from "../assets/images/portfolio/powerHour.png"
import ImageCACWeb from "../assets/images/portfolio/cac-web.png"
import ImageIsoCornell from "../assets/images/portfolio/isoCornell.png"
import ImageVaxGraph from "../assets/images/portfolio/vaxGraph.png"
import ImageLangViz from "../assets/images/portfolio/langViz.png"
import ImageARHand from "../assets/images/portfolio/arHand.png"

const category = {
  "All": -1,
  "Web": 0,
  "Data visualization": 1,
  "AR/VR": 2,
  "Other": 99,
};

const projects = [
  {
    title: "3D Poster Animation: Hand Grab",
    date: "Aug 2021",
    tools: ["Spark AR", "Blender", "Photoshop"],
    image: ImageARHand,
    text: <p>I turned 2D artwork into a 3D augmented reality experience with Spark AR. The poster comes to life when viewed through the AR camera effect. <Link href="https://lucia-gomez.netlify.app/blog/spark-ar-hand-poster/">Read more</Link></p>,
    extra: [
      ExternalButton("https://drive.google.com/file/d/1MvihpuFwkWgEcWhzmDE7TgnBCJccTWgr/view?usp=sharing"),
      ExternalButton("https://www.instagram.com/ar/651996575775549/?ch=ZTU0MjBmNjQwYTNjNDJkM2QzNWRkYjk2Mzc2M2U3NGQ%3D")
    ],
    categories: [category["AR/VR"]],
  },
  {
    title: "Cards Against Cornellians 2.0",
    date: "April-June 2021",
    tools: ["React", "Flask-SocketIO", "Python", "Styled Components", "Heroku"],
    image: ImageCACWeb,
    link: "https://github.com/lucia-gomez/cards-against-cornellians-web",
    text: <p style={{ marginBottom: '50px' }}>Cards Against Humanity based on the Cornell experience, using the game engine I made in 2019 (see below). (Work in progress)</p>,
    extra: ExternalButton("https://cards-against-cornellians.herokuapp.com/"),
    categories: [category.Web],
  },
  {
    title: "Our Power Hour",
    date: "February 2021-present",
    tools: ["React", "Styled Components", "Netlify"],
    image: ImagePowerHour,
    link: "https://github.com/lucia-gomez/our-power-hour",
    text: <p>Custom <Link href="https://en.wikipedia.org/wiki/Power_hour">power hour</Link> playlist generator to enjoy with friends.
      Select a YouTube playlist, sit back, and drink when you hear the alarm.</p>,
    extra: ExternalButton("https://ourpowerhour.netlify.app/"),
    categories: [category.Web],
  },
  {
    title: "Spotify Vibe Check",
    date: "Dec 2020",
    tools: ["React", "Spotify API", "Reach Router", "Express", "Materialize", "Heroku"],
    image: ImageSpotifyVibeCheck,
    link: "https://github.com/lucia-gomez/spotify-vibe-check",
    text: <p>A web app to analyze the vibe of your Spotify playlists. (Work in progress)</p>,
    extra: ExternalButton("https://spotify-vibe-check.herokuapp.com/"),
    categories: [category.Web],
  },
  {
    title: "Sign Search",
    date: "May 2020",
    tools: ["Javascript", "React"],
    image: ImageSignSearch,
    link: "https://github.com/lucia-gomez/Sign-Search",
    text: <p>A Chrome extension for providing a convenient way to lookup words in American Sign Language. Highlight a word on a page or enter a search directly into the extension to see multiple ways of signing the word.</p>,
    extra: ExternalButton("https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma"),
    categories: [category.Web],
  },
  {
    title: "Endangered Languages Data Viz",
    date: "April-May 2021",
    tools: ["D3", "Topojson", "Javascript", "HTML/CSS"],
    image: ImageLangViz,
    link: "https://github.com/lucia-gomez/project2-3300-repl",
    extra: ExternalButton("https://lucia-gomez.github.io/project2-3300-repl/"),
    text: <p>Interactive data visualization using D3 and Topojson for an <Link href='https://www.kaggle.com/the-guardian/extinct-languages'>endangered world language dataset</Link>. Group project for Cornell's INFO 3300: Data-Driven Web Apps.</p>,
    categories: [category.Web, category["Data visualization"]],
  },
  {
    title: "Personal Website",
    date: "Sept 2020-present",
    tools: ["React", "MySQL", "Express", "Auth0", "Styled Components", "Heroku"],
    image: ImageWebsite,
    link: "https://github.com/lucia-gomez/personal-website-v2",
    text: <p>You're looking at it! This is V2, I tend to start from scratch when I'm bored or when I've learned something new.</p>,
    categories: [category.Web],
  },
  {
    title: "Isometric Cornell",
    date: "April 2021",
    tools: ["Javascript", "Isomer"],
    image: ImageIsoCornell,
    link: "https://github.com/lucia-gomez/isometric-cornell",
    text: <p>An animated, isometric model of Cornell's iconic McGraw Tower. Made as an excuse to play with Isomer JS.</p>,
    extra: ExternalButton("https://lucia-gomez.github.io/isometric-cornell/"),
    categories: [category.Web],
  },
  {
    title: "COVID-19 Vaccination Data Viz",
    date: "March 2021",
    tools: ["D3", "Python", "Javascript", "HTML/CSS"],
    image: ImageVaxGraph,
    link: "https://github.com/lucia-gomez/3300-project-1",
    extra: ExternalButton("https://lucia-gomez.github.io/3300-project-1/"),
    text: <p>Static data visualizations using D3 for a <Link href='https://www.kaggle.com/gpreda/covid-world-vaccination-progress'>worldwide COVID-19 vaccination dataset</Link> compared with country GDP. Group project for Cornell's INFO 3300: Data-Driven Web Apps.</p>,
    categories: [category.Web, category["Data visualization"]],
  },
  {
    title: "CliqueBite UI",
    date: "Sept-Dec 2020",
    tools: ["Figma"],
    image: ImageCliqueBite,
    extra: ExternalButton("https://www.figma.com/proto/pEJBpCmDtQ7fQg1QBUJFZs/CliqueBite?node-id=170%3A2&scaling=scale-down"),
    text: <p>Prototype for a social media app that encourages college students to achieve their eating habit goals. Followed the user-centered design process, as a group project for Cornell's INFO 3450: Human-Computer Interaction.
    </p>,
    tags: ["UI/UX", "UX", "prototyping"],
    categories: [category.Other],
  },
  {
    title: "How Many Hollaback Girls",
    date: "Sept 2020",
    tools: ["Javascript", "HTML/CSS", "AWS"],
    image: ImageHollabackGirls,
    link: "https://github.com/lucia-gomez/how-many-hollaback-girls",
    text: <p>One day, on my walk to campus, I accidentally listened to <i>Hollaback Girl</i> on repeat. For the rest of the day, I measured time in units of Hollaback Girls, because why not? This time converter made things easier.</p>,
    extra: ExternalButton("https://howmanyhollabackgirls.com"),
    categories: [category.Web],
  },
  {
    title: "Welcome Preemie",
    date: "Aug-Oct 2020",
    tools: ["Squarespace", "CSS"],
    image: ImageWelcomePreemie,
    text: <p>Redesigned a client's e-commerce website using Squarespace, and added additional features to increase community engagement. Volunteer project with <Link href='http://levareorg.com/'>Levare</Link>.</p>,
    extra: ExternalButton("http://welcomepreemie.com"),
    categories: [category.Web],
  },
  {
    title: "Subreddit Recommender",
    date: "March-May 2020",
    tools: ["Python", "Flask", "NLTK", "Bootstrap"],
    image: ImageSubreddit,
    link: "https://github.com/lucia-gomez/cs4300sp2020-ael226-ilg7-nr292-vmw9-zjs28",
    text: <p>A search engine to help navigate Reddit's thousands of subreddits. Draft a Reddit post, and get suggestions for which subreddits are suitable to post in. Group project for Cornell's CS4300: Language and Information</p>,
    categories: [category.Other],
  },
  {
    title: "Spill the Tea",
    date: "May 2020",
    tools: ["Tableau"],
    image: ImageSpillTheTea,
    text: <p>Interactive data visualizations for socio-linguistic research on 'bubble tea' vs 'boba' word choice. A friend and I surveyed 200+ participants on their background and preferred term for this drink</p>,
    extra: [
      ExternalButton("https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Sheet1"),
      ExternalButton("https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Heatmaps")
    ],
    categories: [category["Data visualization"]],
  },
  {
    title: "Cards Against Cornellians 1.0",
    date: "April 2019-March 2020",
    tools: ["Python"],
    image: ImageCAC,
    link: "https://github.com/lucia-gomez/Cards-Against-Humanity-Engine",
    text: <p>A commandline game engine for Cards Against Humanity, featuring custom ASCII graphics, networked gameplay, and customizeable card decks. Originally implemented in OCaml for a class project.</p>,
    categories: [category.Other],
  },
  {
    title: "Space Bears",
    date: "Oct-Dec 2019",
    tools: ["Unreal Engine 4"],
    image: ImageSpaceBears,
    text: <p>My first experience working with virtual reality. Explore a space station manned by teddy bears! Group project for Cornell's CS1620: Visual Imaging</p>,
    categories: [category["AR/VR"]],
  },
];

function findProject(name) {
  return projects.filter(project => project.title === name)[0];
}

export function featuredProjects(names) {
  // could just use filter, but want to maintain order given in [names]
  return names.map(findProject);
}

export default projects
export { category }
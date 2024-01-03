import ExternalIconButton from "../components/iconButton"
import Link from "../components/link"
import React from "react"

const category = {
  All: -1,
  Web: 0,
  "AR/VR": 1,
  "Data Visualization": 2,
  "Digital Art": 3,
  "Physical Computing": 4,
  Installation: 5,
  Other: 99,
}

const projects = [
  {
    title: "DJELLO",
    date: "October-December 2023",
    tools: ["Arduino", "MIDI", "C++", "Ableton Live", "Illustrator", "Womp 3D"],
    image: "djello.png?updatedAt=1703728680851",
    text: (
      <p>
        DJELLO is a DJ controller with a bouncy gelatin interface, set in an
        acrylic housing. These tactile inputs lend themselves to playful
        experimentation while creating music. Experiment with duration,
        pressure, and location of your finger on the jello controls to produce
        squishy, gelatinous sounds
      </p>
    ),
    link: "https://github.com/lucia-gomez/djello",
    extra: ExternalIconButton("/project/djello", true),
    categories: [category.Installation, category["Physical Computing"]],
    featuredHasAudio: true,
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djelloDemoDesktop.mp4?updatedAt=1703728553307",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djelloDemoDesktop.mp4?updatedAt=1703705620588",
    featuredLink: "/project/djello",
    featuredSameTab: true,
  },
  {
    title: "Lights, Camera, Magnets",
    date: "November-December 2023",
    tools: ["Arduino", "C++", "Max/MSP/Jitter", "Blender"],
    image: "lightsCameraMagnets.jpeg?updatedAt=1703730225831",
    text: (
      <p>
        As the name suggests, this is an installation involving... lights,
        cameras, and magnets. (And a projector)
        <br />
        <br />
        Participants make collaborative art by manipulating a neon tube of light
        via magnetic paddles. A camera observes this movement and a motion trail
        of light is projected onto the tube and table surface in realtime
      </p>
    ),
    link: "https://github.com/lucia-gomez/light-table-installation",
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/lights-camera-magnets/",
      true
    ),
    categories: [category.Installation, category["Physical Computing"]],
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/lightsCameraMagnetsDesktop.mp4?updatedAt=1703727689339",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/lightsCameraMagnetsDesktop.mp4?updatedAt=1703727689339",
    featuredLink: "https://www.lucia-gomez.dev/blog/lights-camera-magnets/",
    featuredSameTab: true,
  },
  {
    title: "Arcade Arcade",
    date: "December 2023",
    tools: ["Unity", "Blender", "C#"],
    image: "arcadeArcade.png?updatedAt=1703731586496",
    text: (
      <p>
        A 3D mini-game of a room-scale arcade claw machine. The player must
        manipulate the claw to pick up other arcade game cabinets to restore the
        overgrown, abandoned arcade to its former glory
      </p>
    ),
    link: "https://github.com/lucia-gomez/arcadeArcade",
    extra: ExternalIconButton("/projects/arcade-arcade"),
    categories: [category["AR/VR"]],
  },
  {
    title: "Over the Moon",
    date: "October-November 2023",
    tools: ["Max/MSP/Jitter", "Green screen"],
    image: "moonLanding.png?updatedAt=1703730589615",
    text: (
      <p>
        An interactive installation to revitalize the cultural memory of man's
        first walk on the moon. Participants are green-screened into the
        original NASA footage of the Apollo 11 moon landing, where they see
        their virtual avatar appear and disappear around the lunar surface
      </p>
    ),
    extra: ExternalIconButton("https://www.youtube.com/watch?v=sXBPK3GXt8A"),
    categories: [category.Installation],
  },
  {
    title: "Simon Signs",
    date: "October-November 2023",
    tools: ["Pico XR", "Procreate"],
    image: "simonSigns.png?updatedAt=1703731377482",
    text: (
      <p>
        Design concept and pitch for an educational mixed reality app for
        providing instant, individualized feedback to American Sign Language
        students. Winner of the{" "}
        <Link to="https://pico-dev-jam-2023.devpost.com/project-gallery">
          2023 Pico XR Dev Jam
        </Link>
        ! (4th Prize North America market, Best Hand Tracking)
      </p>
    ),
    extra: [
      ExternalIconButton("https://devpost.com/software/simon-signs"),
      ExternalIconButton(
        "https://docs.google.com/presentation/d/1OFnDyZgGY2vX9B2auveLm7ro6yf3wyLxM-K0ps9tne4/edit?usp=sharing"
      ),
    ],
    categories: [category["AR/VR"], category.Other],
  },
  {
    title: "Collagescape",
    date: "October 2023",
    tools: ["Max/MSP/Jitter", "Photoshop"],
    image: "collagescape.png?updatedAt=1697050834660",
    text: (
      <p>
        I turned photos on my bedroom wall into an interactive experience that
        generates digital collages
      </p>
    ),
    link: "https://github.com/lucia-gomez/collagescape",
    extra: ExternalIconButton("/art/series/collagescape", true),
    categories: [category["Digital Art"]],
  },
  {
    title: "Threadbare",
    date: "June 2023",
    tools: ["p5.js", "Javascript"],
    image: "threadbareScreenshot.png?updatedAt=1687415315007",
    text: (
      <p>
        Aesthetic geometric drawing tool. Inspired by a worn-out tag on a pair
        of pajama pants
      </p>
    ),
    link: "https://github.com/lucia-gomez/threadbare",
    extra: ExternalIconButton("https://lucia-gomez.github.io/threadbare"),
    categories: [category.Web, category["Digital Art"]],
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/threadbareDemoDesktop.mov?updatedAt=1687584735438",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/threadbareDemoMobile.mov?updatedAt=1687588033093",
    featuredText: (
      <p>
        A geometric drawing tool made with p5.js, inspired by a pair of worn-out
        pajama pants. Brush over the threads and mess with the controls to
        create unique patterns
      </p>
    ),
  },
  {
    title: "Personal Website",
    date: "Sept 2020-present",
    tools: [
      "React",
      "MySQL",
      "Express",
      "Auth0",
      "Styled Components",
      "Heroku",
      "ImageKit",
    ],
    image: "website.jpg",
    link: "https://github.com/lucia-gomez/personal-website-v2",
    text: (
      <p>
        You're looking at it! This is v4, I tend to start from scratch when I'm
        bored or when I've learned something new.
      </p>
    ),
    categories: [category.Web],
  },
  {
    title: "Friendly Takeover",
    date: "April 2023",
    tools: ["Javascript", "HTML/CSS"],
    image: "friendlyTakeover.gif",
    text: (
      <p>
        An interactive digital collage of nature taking over a city, with
        soothing audio
      </p>
    ),
    link: "https://github.com/lucia-gomez/friendly-takeover-collage",
    extra: ExternalIconButton(
      "https://lucia-gomez.github.io/friendly-takeover-collage/"
    ),
    categories: [category.Web, category["Digital Art"]],
  },
  {
    title: "Bubble Blower",
    date: "March 2023",
    tools: ["p5.js"],
    image: "bubbleBlower.png?updatedAt=1681511925613",
    text: (
      <p>
        A small experiment with p5.js, a Javascript interactive graphics
        library. Click and drag to blow bubbles
      </p>
    ),
    link: "https://github.com/lucia-gomez/bubble-blower",
    extra: ExternalIconButton("https://lucia-gomez.github.io/bubble-blower/"),
    categories: [category.Web, category["Digital Art"]],
    centerImage: false,
  },
  {
    title: "In AR We Trust",
    date: "January 2023",
    tools: ["Spark AR", "Javascript", "Photoshop"],
    image: "inARWeTrust.gif",
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/inARWeTrustDemoDesktop.mp4",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/inARWeTrustDemoMobile.mp4",
    featuredText: <p>An interactive Spark AR effect for a poster on my wall</p>,
    text: (
      <p>
        An interactive Spark AR effect for a poster on my wall from MoCo in
        Amsterdam
      </p>
    ),
    link: "https://github.com/lucia-gomez/in_AR_we_trust",
    extra: ExternalIconButton(
      "https://drive.google.com/file/d/14lz50ZaYcxSKhY3jSiiDJCBbJe2Ebeow/view?usp=sharing"
    ),
    categories: [category["AR/VR"], category["Digital Art"]],
  },
  {
    title: "Lava Lamp Simulator",
    date: "April 2022",
    tools: ["WebGL", "GLSL", "HTML/CSS"],
    image: "lavaLamp.png",
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/lavaLampDemoDesktop.mov",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/lavaLampDemoMobile.mov",
    text: (
      <p>
        I woke up one day and wanted to play with WebGL, so I made a lava lamp
        simulator
      </p>
    ),
    link: "https://github.com/lucia-gomez/lava-lamp",
    extra: ExternalIconButton("https://lucia-gomez.github.io/lava-lamp/"),
    categories: [category.Web, category["Digital Art"]],
  },
  {
    title: "Sign Search",
    date: "May 2020, March 2022",
    tools: ["Javascript", "React"],
    image: "signSearch.png",
    featuredImageDesktop:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/signSearchDemoDesktop.mov",
    featuredImageMobile:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/signSearchDemoDesktop.mov",
    // "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/signSearchDemoMobile.mov",
    featuredText: (
      <p>
        A Chrome extension for providing a convenient way to look up words in
        American Sign Language. Highlight a word on a page or enter a search
        directly into the extension to see multiple ways of signing the word.
        Results are queried from multiple online ASL dictionaries.
        <br />
        <br />
        Currently at ~800 daily users!
      </p>
    ),
    featuredLink:
      "https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma",
    featuredSameTab: false,
    link: "https://github.com/lucia-gomez/Sign-Search",
    text: (
      <p>
        A Chrome extension for providing a convenient way to look up words in
        American Sign Language. Highlight a word on a page or enter a search
        directly into the extension to see multiple ways of signing the word.
      </p>
    ),
    extra: ExternalIconButton(
      "https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma"
    ),
    categories: [category.Web],
  },
  {
    title: "3D Poster Animation: Hand Grab",
    date: "Aug 2021",
    tools: ["Spark AR", "Blender", "Photoshop"],
    image: "arHand.jpeg",
    text: (
      <p>
        I turned 2D artwork into a 3D augmented reality experience with Spark
        AR. The poster comes to life when viewed through the AR camera effect.{" "}
        <Link href="https://lucia-gomez.dev/blog/spark-ar-hand-poster/">
          Read more
        </Link>
      </p>
    ),
    extra: [
      ExternalIconButton(
        "https://drive.google.com/file/d/1MvihpuFwkWgEcWhzmDE7TgnBCJccTWgr/view?usp=sharing"
      ),
      ExternalIconButton(
        "https://www.instagram.com/ar/651996575775549/?ch=ZTU0MjBmNjQwYTNjNDJkM2QzNWRkYjk2Mzc2M2U3NGQ%3D"
      ),
    ],
    categories: [category["AR/VR"], category["Digital Art"]],
  },
  {
    title: "Cards Against Cornellians 2.0",
    date: "April-June 2021",
    tools: ["React", "Flask-SocketIO", "Python", "Styled Components", "Heroku"],
    image: "cac-web.png",
    link: "https://github.com/lucia-gomez/cards-against-cornellians-web",
    text: (
      <p>
        Cards Against Humanity based on the Cornell experience, using the game
        engine I made in 2019 (see below). (Work in progress)
      </p>
    ),
    extra: ExternalIconButton(
      "https://cards-against-cornellians.herokuapp.com/"
    ),
    categories: [category.Web],
    centerImage: false,
  },
  {
    title: "Our Power Hour",
    date: "February 2021-present",
    tools: ["React", "Styled Components", "Netlify", "YouTube API"],
    image: "powerHour.png",
    link: "https://github.com/lucia-gomez/our-power-hour",
    text: (
      <p>
        Custom{" "}
        <Link href="https://en.wikipedia.org/wiki/Power_hour">power hour</Link>{" "}
        playlist generator to enjoy with friends. Select a YouTube playlist, sit
        back, and drink when you hear the alarm.
      </p>
    ),
    extra: ExternalIconButton("https://ourpowerhour.netlify.app/"),
    categories: [category.Web],
  },
  {
    title: "How Many Hollaback Girls",
    date: "Sept 2020, Nov 2021",
    tools: ["Javascript", "HTML/CSS", "AWS"],
    image: "hollabackgirls.png",
    link: "https://github.com/lucia-gomez/how-many-hollaback-girls",
    text: (
      <p>
        One day, on my walk to campus, I accidentally listened to{" "}
        <i>Hollaback Girl</i> on repeat. For the rest of the day, I measured
        time in units of Hollaback Girls, because why not? This time converter
        made things easier.
      </p>
    ),
    extra: ExternalIconButton("http://howmanyhollabackgirls.com"),
    categories: [category.Web],
  },
  {
    title: "Spotify Vibe Check",
    date: "Dec 2020",
    tools: [
      "React",
      "Spotify API",
      "Reach Router",
      "Express",
      "Materialize",
      "Heroku",
    ],
    image: "spotifyVibeCheck.png",
    link: "https://github.com/lucia-gomez/spotify-vibe-check",
    text: (
      <p>
        A web app to analyze the vibe of your Spotify playlists. (Work in
        progress)
      </p>
    ),
    extra: ExternalIconButton("https://spotify-vibe-check.herokuapp.com/"),
    categories: [category.Web],
    centerImage: false,
  },
  {
    title: "Endangered Languages Data Viz",
    date: "April-May 2021",
    tools: ["D3", "Topojson", "Javascript", "HTML/CSS"],
    image: "langViz.png",
    link: "https://github.com/lucia-gomez/project2-3300-repl",
    extra: ExternalIconButton(
      "https://lucia-gomez.github.io/project2-3300-repl/"
    ),
    text: (
      <p>
        Interactive data visualization using D3 and Topojson for an{" "}
        <Link href="https://www.kaggle.com/the-guardian/extinct-languages">
          endangered world language dataset
        </Link>
        . Group project for Cornell's INFO 3300: Data-Driven Web Apps.
      </p>
    ),
    categories: [category.Web, category["Data Visualization"]],
  },
  {
    title: "Isometric Cornell",
    date: "April 2021",
    tools: ["Javascript", "Isomer"],
    image: "isoCornell.png",
    link: "https://github.com/lucia-gomez/isometric-cornell",
    text: (
      <p>
        An animated, isometric model of Cornell's iconic McGraw Tower. Made as
        an excuse to play with Isomer JS.
      </p>
    ),
    extra: ExternalIconButton(
      "https://lucia-gomez.github.io/isometric-cornell/"
    ),
    categories: [category.Web, category["Digital Art"]],
  },
  {
    title: "COVID-19 Vaccination Data Viz",
    date: "March 2021",
    tools: ["D3", "Python", "Javascript", "HTML/CSS"],
    image: "vaxGraph.png",
    link: "https://github.com/lucia-gomez/3300-project-1",
    extra: ExternalIconButton("https://lucia-gomez.github.io/3300-project-1/"),
    text: (
      <p>
        Static data visualizations using D3 for a{" "}
        <Link href="https://www.kaggle.com/gpreda/covid-world-vaccination-progress">
          worldwide COVID-19 vaccination dataset
        </Link>{" "}
        compared with country GDP. Group project for Cornell's INFO 3300:
        Data-Driven Web Apps.
      </p>
    ),
    categories: [category.Web, category["Data Visualization"]],
  },
  {
    title: "CliqueBite UI",
    date: "Sept-Dec 2020",
    tools: ["Figma"],
    image: "cliquebite.png",
    extra: ExternalIconButton(
      "https://www.figma.com/proto/pEJBpCmDtQ7fQg1QBUJFZs/CliqueBite?node-id=170%3A2&scaling=scale-down"
    ),
    text: (
      <p>
        Prototype for a social media app that encourages college students to
        achieve their eating habit goals. Followed the user-centered design
        process, as a group project for Cornell's INFO 3450: Human-Computer
        Interaction.
      </p>
    ),
    tags: ["UI/UX", "UX", "prototyping"],
    categories: [category.Other],
  },
  {
    title: "Welcome Preemie",
    date: "Aug-Oct 2020",
    tools: ["Squarespace", "CSS"],
    image: "welcomePreemie.png",
    text: (
      <p>
        Redesigned a client's e-commerce website using Squarespace, and added
        additional features to increase community engagement. Volunteer project
        with <Link href="http://levareorg.com/">Levare</Link>.
      </p>
    ),
    extra: ExternalIconButton("http://welcomepreemie.com"),
    categories: [category.Web],
  },
  {
    title: "Subreddit Recommender",
    date: "March-May 2020",
    tools: ["Python", "Flask", "NLTK", "Bootstrap"],
    image: "subreddit.png",
    link: "https://github.com/lucia-gomez/cs4300sp2020-ael226-ilg7-nr292-vmw9-zjs28",
    text: (
      <p>
        A search engine to help navigate Reddit's thousands of subreddits. Draft
        a Reddit post, and get suggestions for which subreddits are suitable to
        post in. Group project for Cornell's CS4300: Language and Information
      </p>
    ),
    categories: [category.Other],
  },
  {
    title: "Spill the Tea",
    date: "May 2020",
    tools: ["Tableau"],
    image: "spillTheTea.png",
    text: (
      <p>
        Interactive data visualizations for socio-linguistic research on 'bubble
        tea' vs 'boba' word choice. A friend and I surveyed 200+ participants on
        their background and preferred term for this drink
      </p>
    ),
    extra: [
      ExternalIconButton(
        "https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Sheet1"
      ),
      ExternalIconButton(
        "https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Heatmaps"
      ),
    ],
    categories: [category["Data Visualization"]],
  },
  {
    title: "Cards Against Cornellians 1.0",
    date: "April 2019-March 2020",
    tools: ["Python"],
    image: "cac.png",
    link: "https://github.com/lucia-gomez/Cards-Against-Humanity-Engine",
    text: (
      <p>
        A commandline game engine for Cards Against Humanity, featuring custom
        ASCII graphics, networked gameplay, and customizeable card decks.
        Originally implemented in OCaml for a class project.
      </p>
    ),
    categories: [category.Other],
  },
  {
    title: "Space Bears",
    date: "Oct-Dec 2019",
    tools: ["Unreal Engine 4"],
    image: "spaceBears.png",
    text: (
      <p>
        My first experience working with virtual reality. Explore a space
        station manned by teddy bears! Group project for Cornell's CS1620:
        Visual Imaging
      </p>
    ),
    categories: [category["AR/VR"]],
  },
  {
    title: "2048 Clone",
    date: "2015",
    tools: ["Java"],
    image: "2048.png",
    link: "https://github.com/luciag123/2048-Clone",
    text: (
      <p>
        A 2048 clone I made while I was bored during APCS class in high school
      </p>
    ),
    categories: [category.Other],
  },
  {
    title: "Minesweeper Clone",
    date: "2014",
    tools: ["Java"],
    image: "minesweeper.png",
    link: "https://github.com/luciag123/Minesweeper",
    text: <p>Final project for my first real Computer Science class</p>,
    categories: [category.Other],
  },
]

function findProject(name) {
  return projects.filter(project => project.title === name)[0]
}

export function featuredProjects(names) {
  // could just use filter, but want to maintain order given in [names]
  return names.map(findProject)
}

export default projects
export { category }

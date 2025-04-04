import ExternalIconButton from "../components/iconButton"
import Link from "../components/link"
import React from "react"

const category = {
  All: -1,
  "Physical Computing": 1,
  Installation: 2,
  Web: 0,
  Client: 3,
  "Data Visualization": 4,
  Jello: 5,
  "AR/VR": 6,
  "Digital Art": 7,
  Other: 99,
}

const projects = [
  {
    title: "Crystal Clear",
    date: "November-December 2024",
    tools: [
      "Adobe Premiere",
      "TouchDesigner",
      "Python",
      "Arduino",
      "Autodesk Fusion 360",
    ],
    image: "crystalClear.png?updatedAt=1742161902122",
    text: (
      <p>
        I've taken 1 second of video every day since Jan. 1st, 2020, and I put
        all of those memories into a real-life crystal ball. Crystal Clear is a
        magical way of exploring my personal memory archive by controlling time
        through a touchless interface
      </p>
    ),
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/crystal-clear-one-second-a-day"
    ),
    link: "https://github.com/lucia-gomez/crystal-clear",
    categories: [
      category["Data Visualization"],
      category["Physical Computing"],
      category.Installation,
    ],
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/crystalClear.gif?updatedAt=1742169963785",
    featuredText: (
      <p>
        Beginning on January 1st, 2020, I've recorded 1 second of video every
        day. Crystal Clear is a magical artifact for exploring this intimate
        dataset in the form of a crystal ball. Using a touchless interface, the
        audience is encouraged to flip through time and replay moments from the
        memory archive. Exhibited at{" "}
        <Link to="https://www.culturehub.org/re-fest-2025">
          CultureHub ReFest 2025.
        </Link>
      </p>
    ),
    featuredButtonText: "Learn More",
    featuredLink:
      "https://www.lucia-gomez.dev/blog/crystal-clear-one-second-a-day",
  },
  {
    title: "NYU Media Commons Booking Tool",
    date: "March-December 2024",
    tools: [
      "React",
      "Next.js",
      "Material UI",
      "Google App Engine",
      "Firestore",
    ],
    image: "mediaCommonsBookingTool.png?updatedAt=1742162811473",
    text: (
      <p>
        Launched a room reservation system for the{" "}
        <Link to="https://sites.google.com/nyu.edu/370jmediacommons/370j-media-commons?authuser=1">
          NYU Media Commons.
        </Link>{" "}
        Features Google Calendar, Google Sheets, and Gmail integration to
        facilitate the multi-step booking process between students, departmental
        liaisons, and administrative staff
      </p>
    ),
    categories: [category.Web, category.Client],
    link: "https://github.com/ITPNYU/booking-app",
    extra: ExternalIconButton(
      "https://sites.google.com/nyu.edu/370jmediacommons/reservations/booking-tool?pli=1&authuser=1"
    ),
  },
  {
    title: "3DJELLO",
    date: "October-December 2024",
    tools: [
      "Autodesk Fusion 360",
      "Arduino",
      "Ableton Live",
      "Adobe Illustrator",
      "MadMapper",
      "CNC Milling",
    ],
    image: "3djello.png?updatedAt=1742172230390",
    text: (
      <p>
        3DJELLO is a human-scale kinetic sculpture that functions as an
        immersive musical instrument. A user steps inside the sculpture and is
        surrounded by glowing, rainbow Jello domes. Touching one will cause a
        gelatinous sound to play and motors to jiggle the Jello and its
        neighbors.
      </p>
    ),
    categories: [
      category.Jello,
      category.Installation,
      category["Physical Computing"],
    ],
    link: "https://github.com/lucia-gomez/3djello",
  },
  {
    title: "Gentleman Brawlers Joy-O-Meter",
    date: "August-December 2024",
    tools: ["FastLED", "ESP32", "C++", "p5.js"],
    image: "cassette.png?updatedAt=1742165647841",
    text: (
      <p>
        Animated LED sculpture for an immersive concert experience held by{" "}
        <Link to="https://www.truthandmagic.com/">Gentleman Brawlers.</Link> As
        the audience enjoys a playful pre-concert experience, the
        cassette-shaped Joy-O-Meter measures the room's collective joy. I was
        responsible for all of the software, electronics, and power supplies
      </p>
    ),
    link: "https://github.com/ITPNYU/RWCCDS-2024-CLL",
    categories: [
      category.Client,
      category.Installation,
      category["Physical Computing"],
    ],
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/cassette.gif?updatedAt=1742169258918",
    featuredText: (
      <p>
        Animated LED sculpture for an immersive concert experience held by{" "}
        <Link to="https://www.truthandmagic.com/">Gentleman Brawlers.</Link> As
        the audience enjoys a playful pre-concert experience, the
        cassette-shaped Joy-O-Meter measures the room's collective joy until it
        unlocks the live concert.
      </p>
    ),
    featuredButtonText: "Learn More",
    featuredLink: "https://www.truthandmagic.com/",
  },
  {
    title: "Guess Whose Data?",
    date: "December 2024",
    tools: ["Photoshop", "p5.js", "Risograph"],
    image: "fullBoards.png",
    text: (
      <p>
        Experimental data visualization zine in the form of Guess Who game
        boards. Each board represents one person's digital footprint, with
        screenshots of personal data displayed on game cards. Can you guess
        someone's identity from their data? Is this how algorithms understand
        us?
      </p>
    ),
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/print-and-code#4-tech-zine"
    ),
    categories: [category["Data Visualization"]],
  },
  {
    title: "White Claw's Claw™ Cooler",
    date: "May-August 2024",
    tools: [
      "Raspberry Pi",
      "Particle",
      "React",
      "Express",
      "Websocket",
      "Google Cloud Platform",
      "Supabase",
      "Twilio",
    ],
    image: "clawCooler.jpg?updatedAt=1724004918710",
    text: (
      <p>
        Summer internship project at{" "}
        <Link to="https://www.deeplocal.com/">Deeplocal</Link> for the popular{" "}
        <Link to="https://www.whiteclaw.com/">White Claw hard seltzer</Link>{" "}
        brand. The Claw™ Cooler is a high-tech, interactive cooler with Low Claw
        Detection to text you a DoorDash code for more White Claw when its
        running low. I developed the firmware, screen UI + motion graphics,
        texting service, LED animations, and integration between all of these
        components
      </p>
    ),
    extra: ExternalIconButton("https://www.deeplocal.com/white-claw-cooler"),
    categories: [category["Physical Computing"], category.Web, category.Client],
  },
  {
    title: "Slack Pager",
    date: "July 2024",
    tools: [
      "Slackbot",
      "Micropython",
      "Raspberry Pi Pico",
      "Autodesk Fusion 360",
    ],
    image: "slackPager.gif?updatedAt=1724006573543",
    categories: [category["Physical Computing"], category.Client],
    text: (
      <p>
        Rapid prototype to display Slack DMs in an old-school pager form factor.
        The pager's LCD screen scrolls through incoming messages at a comically
        slow pace, mixing modern and retro communication technology. Pressing
        the pager's button dismisses the currently displayed text
      </p>
    ),
  },
  {
    title: "DJELLO 2.0",
    date: "March-May 2024",
    tools: [
      "Autodesk Fusion 360",
      "Arduino",
      "Adobe Illustrator",
      "Bantam Tools",
    ],
    image: "djello2.jpg?updatedAt=1714847828448",
    text: (
      <p>
        Made in collaboration with{" "}
        <Link to="https://www.solidwiggles.com/">Solid Wiggles</Link>, DJELLO
        2.0 is a musical, interactive serving platter for jello. Designed and
        fabricated a custom circuit board to encapsulate my{" "}
        <Link to="/project/djello">previous DJELLO project</Link>. Set in a 3D
        resin printed enclosure
      </p>
    ),
    link: "https://github.com/lucia-gomez/djelloPcb",
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/djello-2-electric-boogaloo"
    ),
    categories: [category["Physical Computing"], category.Jello],
  },
  {
    title: "VJELLO",
    date: "April 2024",
    tools: [
      "MadMapper",
      "Arduino",
      "Adobe After Effects",
      "Adobe Illustrator",
      "Ableton Live",
      "MIDI",
    ],
    image: "vjello?updatedAt=1714848645641",
    text: (
      <p>
        Audiovisual interactive installation with projection mapping onto large
        Jello hemispheres. Users touch the gelatinous interface to generate
        bouncy visual effects and sounds that complement the materiality
      </p>
    ),
    featuredText: (
      <p>
        An audiovisual interactive installation with projection mapping onto
        large Jello hemispheres. Users touch the gelatinous interface to
        generate bouncy visual effects and sounds that complement the
        materiality. In this demo, users experimented with the duration of their
        touch + combinations of color and sound
      </p>
    ),
    link: "https://github.com/lucia-gomez/vjello",
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/expanding-my-jello-empire-vjello"
    ),
    categories: [
      category["Physical Computing"],
      category.Installation,
      category.Jello,
    ],
    featuredHasAudio: true,
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/vjelloFeatured.mp4?updatedAt=1715384448014",
    featuredLink:
      "https://www.lucia-gomez.dev/blog/expanding-my-jello-empire-vjello",
    featuredSameTab: true,
  },
  {
    title: "One Sharpie to Rule Them All",
    date: "March-May 2024",
    tools: ["Autodesk Fusion 360", "Arduino", "Programmable Air"],
    image: "sharpie.jpeg?updatedAt=1714849661944",
    text: (
      <p>
        An absurdly large Sharpie, ~2ft long. Pushing the colored arcade buttons
        will extend/retract three colors of real Sharpies via pneumatic pumps.
        Made in collaboration with Isabel Wu
      </p>
    ),
    link: "https://github.com/lucia-gomez/one-sharpie-to-rule-them-all",
    extra: ExternalIconButton(
      "https://www.lucia-gomez.dev/blog/one-sharpie-to-rule-them-all"
    ),
    categories: [category["Physical Computing"]],
    centerImage: true,
  },
  {
    title: "Kaleidoscope Shader",
    date: "March-May 2024",
    tools: ["p5.js", "GLSL"],
    image: "kaleidoscope.png?updatedAt=1714875194264",
    text: (
      <p>
        A trippy kaleidoscope camera filter. The user's camera feed is applied
        onto radial surface geometry and run processed with a custom shader to
        add a glassy feel
      </p>
    ),
    link: "https://github.com/lucia-gomez/shaders/tree/main/week2",
    extra: ExternalIconButton(
      "https://lucia-gomez.github.io/shaders/week2/",
      true
    ),
    categories: [category["Digital Art"], category.Web],
  },
  {
    title: "Mosaic Reflections",
    date: "February 2024",
    tools: ["MadMapper", "Photoshop"],
    image: "seaGlass.jpg?updatedAt=1734556703213",
    text: (
      <p>
        Projection mapping a beach scene onto a sea glass mosaic. The video is
        mapped to individual pieces of sea glass, giving the illusion that each
        piece is a small, glowing screen
      </p>
    ),
    link: "",
    // extra: ExternalIconButton("/project/djello", true),
    categories: [category.Installation],
  },
  {
    title: "DJELLO",
    date: "October-December 2023",
    tools: [
      "Arduino",
      "MIDI",
      "C++",
      "Ableton Live",
      "Adobe Illustrator",
      "Womp 3D",
    ],
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
    categories: [category["Physical Computing"], category.Jello],
    featuredHasAudio: true,
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djelloDemoDesktop.mp4?updatedAt=1703728553307",
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
    featuredImage:
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
    extra: ExternalIconButton(
      "https://lucia-gomez.github.io/arcade-arcade-web/"
    ),
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
    extra: [
      ExternalIconButton("https://www.youtube.com/watch?v=sXBPK3GXt8A"),
      ExternalIconButton(
        "https://goluciago.wordpress.com/2023/11/04/interactive-installations-midterm/"
      ),
    ],
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
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/threadbareDemoDesktop.mov?updatedAt=1687584735438",
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
    image: "friendlyTakeover.gif?updatedAt=1734559961029",
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
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/inARWeTrustDemoDesktop.mp4",
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
    featuredImage:
      "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/signSearchDemoDesktop.gif?updatedAt=1742163588836",
    featuredText: (
      <p>
        A Google Chrome extension for providing a convenient way to look up
        words in American Sign Language. Highlight a word on a page or use the
        search bar to see multiple ways of signing the word. Results are queried
        from several popular online ASL dictionaries. Currently at ~1000 users!
      </p>
    ),
    featuredButtonText: "Google Chrome Store",
    featuredLink:
      "https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma",
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
        One day, on my walk to campus, I accidentally listened to Hollaback Girl
        on repeat. For the rest of the day, I measured time in units of
        Hollaback Girls, because why not? This time converter made things
        easier.
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
  // {
  //   title: "Welcome Preemie",
  //   date: "Aug-Oct 2020",
  //   tools: ["Squarespace", "CSS"],
  //   image: "welcomePreemie.png",
  //   text: (
  //     <p>
  //       Redesigned a client's e-commerce website using Squarespace, and added
  //       additional features to increase community engagement. Volunteer project
  //       with <Link href="http://levareorg.com/">Levare</Link>.
  //     </p>
  //   ),
  //   extra: ExternalIconButton("http://welcomepreemie.com"),
  //   categories: [category.Web],
  // },
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

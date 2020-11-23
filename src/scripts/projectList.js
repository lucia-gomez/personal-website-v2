import React from "react"
import Link from '../components/link'

import ImageSignSearch from "../assets/images/portfolio/signSearch.png"
import ImageWebsite from "../assets/images/portfolio/website.jpg"
import ImageSubreddit from "../assets/images/portfolio/subreddit.png"
import ImageCAC from "../assets/images/portfolio/cac.png"
import ImageHollabackGirls from "../assets/images/portfolio/hollabackgirls.png"
import ImageSpillTheTea from "../assets/images/portfolio/spillTheTea.png"
import ImageSpaceBears from "../assets/images/portfolio/spaceBears.png"

function externalBtn(link) {
  return (
    <Link href={link ?? ''} className={'external-link icon-link'}>
      <i className="material-icons">launch</i>
    </Link >
  );
}

const projects = [
  {
    title: "How Many Hollaback Girls",
    tools: ["Javascript", "HTML/CSS", "AWS"],
    image: ImageHollabackGirls,
    link: "https://github.com/lucia-gomez/how-many-hollaback-girls",
    text: "One day, on my walk to campus, I accidentally listened to Hollaback Girl on repeat. For the rest of the day, I measured time in units of Hollaback Girls, because why not? This converter made things easier.",
    extra: externalBtn("https://howmanyhollabackgirls.com"),
  },
  {
    title: "Sign Search",
    tools: ["Javascript", "React"],
    image: ImageSignSearch,
    link: "https://github.com/lucia-gomez/Sign-Search",
    text: "A Chrome extension for providing a convenient way to lookup words in American Sign Language. Highlight a word on a page or enter a search directly into the extension to see multiple ways of signing the word.",
    extra: externalBtn("https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma")
  },
  {
    title: "Personal Website",
    tools: ["React", "Gatsby", "Sass"],
    image: ImageWebsite,
    link: "https://github.com/lucia-gomez/personal-website-v2",
    text: "You're looking at it! This is V3, I tend to start from scratch when I'm bored or when I've learned something new.",
  },
  {
    title: "Subreddit Recommender",
    tools: ["Python", "Flask", "NLTK", "Bootstrap"],
    image: ImageSubreddit,
    link: "https://github.com/lucia-gomez/cs4300sp2020-ael226-ilg7-nr292-vmw9-zjs28",
    text: "A search engine to help navigate Reddit's thousands of subreddits. Draft a Reddit post, and get suggestions for which subreddits are suitable to post in. Group project for Cornell's CS4300: Language and Information"
  },
  {
    title: "Cards Against Cornellians",
    tools: ["Python"],
    image: ImageCAC,
    link: "https://github.com/lucia-gomez/Cards-Against-Humanity-Engine",
    text: "A commandline game engine for Cards Against Humanity, featuring custom ASCII graphics, networked gameplay, and customizeable card decks. Originally implemented in OCaml for a class project."
  },
  {
    title: "Space Bears",
    tools: ["Unreal Engine 4"],
    image: ImageSpaceBears,
    text: "My first experience working with virtual reality. Explore a space station manned by teddy bears! Group project for Cornell's CS1620: Visual Imaging"
  },
  {
    title: "Spill the Tea",
    tools: ["Tableau"],
    image: ImageSpillTheTea,
    text: "Interactive data visualizations for socio-linguistic research on 'bubble tea' vs 'boba' word choice. A friend and I surveyed 200+ participants on their background and preferred term for this drink",
    extra: [
      externalBtn("https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Sheet1"),
      externalBtn("https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Heatmaps")
    ]
  }
];

function findProject(name) {
  return projects.filter(project => project.title === name)[0];
}

export function featuredProjects(names) {
  // could just use filter, but want to maintain order given in [names]
  return names.map(findProject);
}

export default projects
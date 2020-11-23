import React from "react"
import Link from '../components/link'

import ImageSignSearch from "../assets/images/portfolio/signSearch.png"
import ImageWebsite from "../assets/images/portfolio/website.jpg"
import ImageSubreddit from "../assets/images/portfolio/subreddit.png"

function externalBtn(link) {
  return (
    <Link href={link ?? ''} className={'external-link icon-link'}>
      <i className="material-icons">launch</i>
    </Link >
  );
}

const projects = [
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
    text: "A search engine to help navigate Reddit's thousands of subreddits. Draft a Reddit post, and get suggestions for which subreddits are suitable to post in. Group project for Cornell's CS 4300: Language and Information"
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
const zineDir = "https://ik.imagekit.io/5xtlzx2c3y/website/zines"

export const snakesCantSign = {
  title: "Snakes Can't Sign",
  slug: "snakes-cant-sign",
  date: "July 2019",
  description:
    "My first zine, made for Facebook's Open Arts zine fest. Printed on a Risograph",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/snakes_cant_sign/${i + 1}-min.png`
  ),
}
export const birds_arent_real = {
  title: "Birds Aren't Real",
  slug: "birds-arent-real",
  date: "April 2020",
  description: "I got a collage book for Christmas and it didn't disappoint",
  height: 418,
  pages: Array.from(Array(4)).map(
    (_, i) => `${zineDir}/birds_arent_real/${i + 1}-min.png`
  ),
}
export const shell = {
  title: "We're All Going to Shell",
  slug: "shell",
  date: "February 2021",
  description: "Made with watercolor, inspired by puns",
  height: 418,
  pages: Array.from(Array(4)).map(
    (_, i) => `${zineDir}/shell/${i + 1}-min.png`
  ),
}
export const pickle = {
  title: "Should You Tickle Your Pickle?",
  slug: "tickle-your-pickle",
  date: "March 2021",
  description: "Hey, I'm not your mom. Do what you want",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/pickle/${i + 1}-min.png`
  ),
}
export const lactoseIntolerance = {
  title: "The Seven Deadly Sins of Lactose Intolerance",
  slug: "lactose-intolerance",
  date: "April 2022",
  description:
    "I, a lactose intolerant, sacrified a Lactaid bottle's label for this zine",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/lactose_intolerance/${i + 1}.png`
  ),
}
export const wugs = {
  title: "This is a Wug",
  slug: "wug",
  date: "April 2022",
  description:
    '"This is a wug" is a famous linguistics experiment. Now it\'s the beginning of a war',
  height: 520,
  pages: Array.from(Array(8)).map((_, i) => `${zineDir}/wug/${i + 1}-min.png`),
}
export const peppa = {
  title: "We'll Always Have Peppa",
  slug: "peppa",
  date: "May 2022",
  description: "Peppa lived a short but full life",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/peppa/${i + 1}-min.png`
  ),
}
export const futurist = {
  title: "FUTURIST",
  slug: "futurist",
  date: "May 2022",
  description:
    "A Matrix-y dystopian future. Physical collage + digital Photoshop magic",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/futurist/${i + 1}-min.png`
  ),
}
export const sevenThings = {
  title: "Seven Things I Don't Hate About You",
  slug: "seven-things",
  date: "August 2022",
  description:
    "I made a zine for my girlfriend after we watched '10 Things I Hate About You' together",
  pages: Array.from(Array(8)).map(
    (_, i) => `${zineDir}/seven_things/${i + 1}-min.png`
  ),
}
export const palm = {
  title: "Never Trust a Palm Tree",
  slug: "never-trust-a-palm-tree",
  date: "December 2022",
  description: "I've never trusted palm trees, and neither should you",
  pages: Array.from(Array(8)).map((_, i) => `${zineDir}/palm/${i + 1}-min.png`),
}
export const toad = {
  title: "Let's Normalize Screaming Like Toad",
  slug: "lets-normalize-screaming-like-toad",
  date: "January 2023",
  description:
    "Sometimes I want to scream like Toad in public. A zine with bonus AR content",
  pages: Array.from(Array(8)).map((_, i) => `${zineDir}/toad/${i + 1}-min.png`),
}

const zines = [
  toad,
  palm,
  sevenThings,
  futurist,
  peppa,
  wugs,
  lactoseIntolerance,
  pickle,
  shell,
  birds_arent_real,
  snakesCantSign,
]
export default zines

/**
 * @param {*string} slug The slug URL to look for
 * @returns the zine data with the given slug
 */
export function getZineBySlug(slug) {
  for (let zine of zines) {
    if (zine.slug === slug) {
      return zine
    }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the next zine relative to current slug
 */
export function getNextZineSlug(slug) {
  for (let i = 0; i < zines.length; i++) {
    let item = zines[i]
    if (item.slug === slug) {
      return i < zines.length - 1 ? zines[i + 1].slug : null
    }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the previous zine relative to current slug
 */
export function getPreviousZineSlug(slug) {
  for (let i = 0; i < zines.length; i++) {
    let item = zines[i]
    if (item.slug === slug) {
      return i > 0 ? zines[i - 1].slug : null
    }
  }
  return null
}

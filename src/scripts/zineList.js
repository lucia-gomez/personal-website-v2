export const lactoseIntolerance = {
  title: "The Seven Deadly Sins of Lactose Intolerance",
  slug: "lactose-intolerance",
  date: "April 2022",
  description: "I, a lactose intolerant, sacrified a Lactaid bottle's label for this zine",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/lactose_intolerance/${i + 1}.png`)
  )
};
export const snakesCantSign = {
  title: "Snakes Can't Sign",
  slug: "snakes-cant-sign",
  date: "July 2019",
  description: "My first zine, made for Facebook's Open Arts zine fest. Printed on a Risograph",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/snakes_cant_sign/${i + 1}.png`)
  )
};
export const pickle = {
  title: "Should You Tickle Your Pickle?",
  slug: "tickle-your-pickle",
  date: "March 2021",
  description: "Hey, I'm not your mom. Do what you want",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/pickle/${i + 1}.png`)
  )
};
export const birds_arent_real = {
  title: "Birds Aren't Real",
  slug: "birds-arent-real",
  date: "April 2020",
  description: "I got a collage book for Christmas and it didn't disappoint",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/birds_arent_real/${i + 1}.png`)
  )
};
export const shell = {
  title: "We're All Going to Shell",
  slug: "shell",
  date: "February 2021",
  description: "Made with watercolor, inspired by puns",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/shell/${i + 1}.png`)
  )
};
export const wugs = {
  title: "This is a Wug",
  slug: "wug",
  date: "April 2022",
  description: "\"This is a wug\" is a famous linguistics experiment. Now it's the beginning of a war",
  height: 520,
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/wug/${i + 1}.png`)
  )
};
export const peppa = {
  title: "We'll Always Have Peppa",
  slug: "peppa",
  date: "May 2022",
  description: "Peppa lived a short but full life",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/peppa/${i + 1}.png`)
  )
};
export const futurist = {
  title: "FUTURIST",
  slug: "futurist",
  date: "May 2022",
  description: "A Matrix-y dystopian future. Physical collage + digital Photoshop magic",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/futurist/${i + 1}.png`)
  )
};
export const sevenThings = {
  title: "Seven Things I Don't Hate About You",
  slug: "seven-things",
  date: "August 2022",
  description: "I made a zine for my girlfriend after we watched '10 Things I Hate About You' together. She kindly let me share it here",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/seven_things/${i + 1}.png`)
  )
};

const zines = [sevenThings, futurist, peppa, wugs, lactoseIntolerance, pickle, shell, birds_arent_real, snakesCantSign];
export default zines;

/**
 * @param {*string} slug The slug URL to look for
 * @returns the zine data with the given slug
 */
export function getZineBySlug(slug) {
  for (let zine of zines) {
    if (zine.slug === slug) {
      return zine;
    }
  }
  return null;
}
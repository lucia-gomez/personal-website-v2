const artList = [
  {
    sectionName: "Digital",
    description: "Getting practice with a drawing tablet. Click to enlarge",
    items: [
      {
        title: "Sushi",
        date: "December 2022",
        slug: "sushi",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/sushi.png",
        alt: "sushi drawing",
      },
      {
        title: "Self Portrait",
        date: "December 2022",
        slug: "self-portrait",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/portrait.png",
        alt: "self portrait",
        description: "A cartoon-y self portrait, bags under my eyes and all",
      },
    ],
  },
  {
    sectionName: "Other",
    items: [
      {
        title: "Drawing of Mt. Rainier",
        date: "April 2023",
        slug: "mt-rainier",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/drawingMtRainier.jpg",
        alt: "drawing of Mt. Rainier",
        description: "Ballpoint pen",
      },
      {
        title: "Sweet Dreams",
        date: "March 2023",
        slug: "sweet-dreams",
        src: "https://ik.imagekit.io/5xtlzx2c3y/website/art/collageSweetDreams.jpg",
        alt: "collage sweet dreams",
        description: "A dreamscape collage",
      },
    ],
  },
]
export default artList

/**
 * @param {*string} slug The slug URL to look for
 * @returns the art data with the given slug
 */
export function getArtBySlug(slug) {
  for (let section of artList) {
    for (let item of section.items)
      if (item.slug === slug) {
        return item
      }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the next art item relative to current slug
 */
export function getNextArtSlug(slug) {
  for (let section of artList) {
    for (let i = 0; i < section.items.length; i++) {
      let item = section.items[i]
      if (item.slug === slug) {
        return i < section.items.length - 1 ? section.items[i + 1].slug : null
      }
    }
  }
  return null
}

/**
 * @param {*} slug the current slug
 * @returns the slug for the previous art item relative to current slug
 */
export function getPreviousArtSlug(slug) {
  for (let section of artList) {
    for (let i = 0; i < section.items.length; i++) {
      let item = section.items[i]
      if (item.slug === slug) {
        return i > 0 ? section.items[i - 1].slug : null
      }
    }
  }
  return null
}

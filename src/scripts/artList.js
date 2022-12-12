const artList = [
  {
    sectionName: 'Digital',
    description: 'Getting practice with a drawing tablet. Click to enlarge',
    items: [
      {
        title: 'Sushi',
        date: 'December, 2022',
        slug: 'sushi', 
        src: require('../assets/images/art/sushi.png'),
        alt: "sushi drawing",
      },
      {
        title: 'Self Portrait',
        date: 'December, 2022',
        slug: 'self-portrait', 
        src: require('../assets/images/art/portrait.png'),
        alt: "self portrait",
        description: "A cartoon-y self portrait, bags under my eyes and all",
      },
    ],
  }
];
export default artList;

/**
 * @param {*string} slug The slug URL to look for
 * @returns the art data with the given slug
 */
 export function getArtBySlug(slug) {
  for (let section of artList) {
    for (let item of section.items)
      if (item.slug === slug) {
        return item;
      }
  }
  return null;
}

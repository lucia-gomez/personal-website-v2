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
        alt: "sushi drawing"
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

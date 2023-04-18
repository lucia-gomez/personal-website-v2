/** Check if a post contains a certain keyword */
function filterPostKeyword(post, keyword) {
  const includes = text => text.toLowerCase().includes(keyword.toLowerCase())
  return (
    includes(post.title) ||
    includes(post.summary) ||
    includes(post.slug) ||
    includes(post.dateString) ||
    includes(post.content)
  )
}

/** Check if a post contains all keywords */
export default function filterPost(post, keywords) {
  const keywordHits = keywords.map(keyword => filterPostKeyword(post, keyword))
  return keywordHits.every(x => x)
}

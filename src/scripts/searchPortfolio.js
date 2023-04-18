const searchableFields = ["title", "date", "tools", "text", "tags"]

function toStringRec(obj) {
  if (typeof obj === "string") return obj
  else if (typeof obj.props.children === "string") return obj.props.children
  else {
    return obj.props.children.map(o => toStringRec(o)).join(" ")
  }
}

/** Check if a project contains a certain keyword */
function filterProjectKeyword(project, keyword) {
  for (let field of searchableFields) {
    let content = project[field] ?? null
    if (content === null) continue

    if (field === "tools" || field === "tags") {
      content = content.join(" ")
    } else if (field === "text") {
      content = toStringRec(content)
    }

    if (content.toLowerCase().includes(keyword.toLowerCase())) return true
  }
  return false
}

/** Check if a project contains all keywords */
export default function filterProject(project, keywords) {
  const keywordHits = keywords.map(keyword =>
    filterProjectKeyword(project, keyword)
  )
  return keywordHits.every(x => x)
}

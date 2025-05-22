import { useEffect, useState } from "react"
import { ContentfulApi } from "../scripts/api"
import { useAuth0 } from "@auth0/auth0-react"

export default function useContentfulPreview() {
  const { isAuthenticated } = useAuth0()
  const [data, setData] = useState()

  const params = new URLSearchParams(window.location.search)
  const isPreview = params.get("preview") === "true"
  const entryId = params.get("id")

  useEffect(() => {
    async function fetchData() {
      const res = await ContentfulApi.getPreview(entryId)
      setData(res.data)
    }

    if (isAuthenticated && isPreview && entryId) fetchData()
  }, [entryId, isPreview, isAuthenticated])

  return data
}

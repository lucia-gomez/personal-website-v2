import React, { useEffect, useState } from "react"

import DashboardCardPercentage from "./dashboardCardPercentage"
import { ImageKitApi } from "../../scripts/api"
import Spinner from "../spinner"
import { formatBytes } from "../../scripts/util"

const BYTES_IN_GB = 1073741824

export default function DashboardContentImageKit() {
  const [usage, setUsage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    ImageKitApi.getUsage().then(result => {
      setUsage(result.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h4 style={{ marginTop: 40 }}>ImageKit CDN</h4>
      <DashboardCardPercentage
        value={formatBytes(usage.mediaLibraryStorageBytes)}
        total={formatBytes(BYTES_IN_GB * 20)}
        percentage={usage.mediaLibraryStorageBytes / (BYTES_IN_GB * 20)}
        label={`Media storage`}
      />
    </>
  )
}

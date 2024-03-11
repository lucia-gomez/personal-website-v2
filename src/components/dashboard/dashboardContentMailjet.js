import { useEffect, useState } from "react"

import { DashboardCardBigNumber } from "./dashboardCard"
import DashboardCardRow from "./dashboardCardRow"
import { EmailApi } from "../../scripts/api"
import Spinner from "../spinner"

export default function DashboardContentMailjet() {
  const [dnsStatus, setDnsStatus] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    EmailApi.checkDns().then(result => {
      setDnsStatus(result.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Spinner />
  }

  const getEmoji = status => (status === "OK" ? "✅" : "❌")

  return (
    <DashboardCardRow label="Mailjet">
      <DashboardCardBigNumber
        value={getEmoji(dnsStatus.SPFStatus)}
        label="SPF status"
      />
      <DashboardCardBigNumber
        value={getEmoji(dnsStatus.DKIMStatus)}
        label="DKIM status"
      />
    </DashboardCardRow>
  )
}

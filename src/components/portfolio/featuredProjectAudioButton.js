import { useCallback, useEffect, useState } from "react"

import { RoundActionButton } from "./featuredProjectActionButton"
import styled from "styled-components"

const AudioButton = styled(RoundActionButton)`
  width: 50px;
  height: 50px;
  bottom: calc(77% - 75px);
`

export default function FeaturedProjectAudioButton(props) {
  const { index, videoRef } = props
  const [muted, toggleMuted] = useState(true)

  useEffect(() => {
    videoRef.current.muted = true
  }, [videoRef])

  const setVideoAudio = useCallback(() => {
    videoRef.current.muted = !videoRef.current.muted
    toggleMuted(prev => !prev)
  }, [videoRef])

  const getIcon = () => (!muted ? "volume-mute" : "volume-high")

  return (
    <AudioButton
      idx={index}
      onClick={e => {
        e.preventDefault()
        setVideoAudio()
      }}
    >
      <ion-icon
        name={getIcon()}
        style={{ fontSize: 32, marginLeft: "-3px", marginTop: "2px" }}
      ></ion-icon>
    </AudioButton>
  )
}

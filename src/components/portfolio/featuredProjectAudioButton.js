import React, { useCallback, useEffect, useState } from "react"

import { RoundActionButton } from "./featuredProjectActionButton"
import styled from "styled-components"

const AudioButton = styled(RoundActionButton)`
  width: 50px;
  height: 50px;
  bottom: calc(80% - 75px);

  i {
    font-size: 28px;
  }
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

  const getIcon = () => (!muted ? "fa-volume-mute" : "fa-volume-up")

  return (
    <AudioButton
      idx={index}
      onClick={e => {
        e.preventDefault()
        setVideoAudio()
      }}
    >
      <i className={`fas ${getIcon()}`}></i>
    </AudioButton>
  )
}

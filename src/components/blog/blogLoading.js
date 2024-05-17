import React from "react"
import Spinner from "../spinner"
import styled from "styled-components"

const LoadingWrapper = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function BlogLoading(props) {
  return (
    <LoadingWrapper className={props.className}>
      {/* <Spinner /> */}
    </LoadingWrapper>
  )
}

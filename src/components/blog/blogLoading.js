import styled from "styled-components"
import { Spinner } from "react-bootstrap"

const LoadingWrapper = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function BlogLoading() {
  return (
    <LoadingWrapper>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </LoadingWrapper>
  )
}

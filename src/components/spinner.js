import { Spinner as SpinnerBootstrap } from "react-bootstrap"

export default function Spinner() {
  return (
    <SpinnerBootstrap animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </SpinnerBootstrap>
  )
}

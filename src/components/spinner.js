import SpinnerBootstrap from "react-bootstrap/Spinner"

export default function Spinner() {
  return (
    <SpinnerBootstrap animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </SpinnerBootstrap>
  )
}

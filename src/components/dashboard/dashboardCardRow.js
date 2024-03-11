import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 40px;
`

const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 20px;
`

export default function DashboardCardRow({ label, children }) {
  return (
    <Wrapper>
      <h4>{label}</h4>
      <CardRow>{children}</CardRow>
    </Wrapper>
  )
}

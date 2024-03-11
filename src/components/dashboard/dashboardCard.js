import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

export const CardStyle = styled.div`
  height: 150px;
  border-radius: 12px;
  padding: 12px;
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  text-align: center;
  position: relative;
`

const BigNumber = styled.h1`
  font-size: 70px;
`

export function DashboardCardBigNumber({ value, label }) {
  return (
    <CardStyle>
      <BigNumber>{value}</BigNumber>
      <p>{label}</p>
    </CardStyle>
  )
}

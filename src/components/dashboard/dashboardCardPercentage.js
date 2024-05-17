import { CardStyle } from "./dashboardCard"
import DashboardPercentageArc from "./dashboardPercentageArc"
import React from "react"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Wrapper = styled(CardStyle)`
  width: 350px;
  height: 325px;
  display: grid;
  grid-template-rows: 1fr 32px;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 350px;
  }
`

const NumeratorWrapper = styled.span`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
`

const Numerator = styled.h1`
  font-size: 32px;
  display: inline-block;
`

const RatioLabel = styled.h3`
  font-size: 20px;
  display: inline-block;
  color: ${props => hexToRGB(props.theme.medium, 0.8)};
  margin-left: 2px;
`

const DenominatorWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 67%;
  transform: translate(-50%, -50%);
`

export default function DashboardCardPercentage({
  value,
  total,
  percentage,
  label,
}) {
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <DashboardPercentageArc percentage={percentage} />
        <NumeratorWrapper>
          <Numerator>{value}</Numerator>
        </NumeratorWrapper>
        <DenominatorWrapper>
          <RatioLabel>/ {total}</RatioLabel>
        </DenominatorWrapper>
      </div>
      <p>{label}</p>
    </Wrapper>
  )
}

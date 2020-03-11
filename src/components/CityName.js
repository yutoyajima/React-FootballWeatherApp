import React from 'react'
import styled from "styled-components"

const CityName = ({weatherData}) => {
   return (
      <>
         <CityNameStyle>{weatherData.name}</CityNameStyle>
      </>
   )
}


const CityNameStyle = styled.p`
   font-size: 2rem;
   text-align: center;
   color: #fff;
`

export default CityName
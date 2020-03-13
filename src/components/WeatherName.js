import React from 'react'
import styled from "styled-components"

const WeatherName = ({weather}) => {
   
   return (
      <WeatherNameStyle>
         {weather}
      </WeatherNameStyle>
   )
}

const WeatherNameStyle = styled.p`
   text-align: center;
   font-size: 1.8rem;
   letter-spacing: 2px;
   margin-top: 10px;
   color: #fff;
`

export default WeatherName
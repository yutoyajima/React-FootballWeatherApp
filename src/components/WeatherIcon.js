import React from 'react'
import styled from "styled-components"

const WeatherIcon = ({ iconSrc }) => {
   
   


   return (
      <WeatherIconStyle>
         <img src={iconSrc} alt=""/>
      </WeatherIconStyle>
   )
}

const WeatherIconStyle = styled.div`
margin-top: 20px;
   height: 120px;
   img {
      display: block;
      margin: 0 auto;
      height: 100%;
   }
`

export default WeatherIcon
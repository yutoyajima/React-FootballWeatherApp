import React from 'react'
import styled from "styled-components"

const Humidity = ({weatherData}) => {

   let humidity =  weatherData.main.humidity
   console.log(humidity);
   

   return (
      <HumidityStyle>
         {humidity}%
      </HumidityStyle>
   )
}

const HumidityStyle = styled.p`
   font-size: 1.8rem;
   color: #fff;
   text-align: center;
   margin-top: 20px;
`

export default Humidity
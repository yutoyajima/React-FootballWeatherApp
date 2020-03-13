import React from 'react'
import styled from "styled-components"


const Temperature = ({weatherData}) => {
   let temp = Math.floor(weatherData.main.temp - 273.15)

   // console.log(temp);
   
   return (
      <TempStyle>
         {temp}<span>°C</span>
      </TempStyle>
   )
}

const TempStyle = styled.p`
   font-size: 4.2rem;
   text-align: center;
   color: #fff;
   margin-top: 40px;
   span {
      font-size: 2rem;
   }
`

export default Temperature
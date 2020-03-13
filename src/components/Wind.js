import React from 'react'
import styled from "styled-components"

const Wind = ({weatherData}) => {
   let windSpeed = weatherData.wind.speed
   let windDirec = weatherData.wind.deg
   // console.log(windSpeed);
   // console.log(windDirec);
   
   return (
      <WindStyle windDirec={windDirec} >
         <p className="direction" >↑</p>
         <p className="speed" >{windSpeed} mps</p>
      </WindStyle>
   )
}

const WindStyle = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   p {
      font-size: 1.8rem;
      color: #fff;
   }
   .direction {
      font-weight: bold;
      transform: ${ ({windDirec}) => `rotate(${windDirec}deg)` };
      display: inline-block;
   }
   .speed {
      margin-left: 20px;
   }
`


export default Wind
import React from 'react'
import styled from "styled-components"

const CityData = ({locations, index}) => {

   const team = locations[index].teams.map((each, i) => <p key={i} >{each}</p>)
   const stadium = locations[index].stadiums.map((each, i) => <p key={i} >{each}</p>)
   

   return(
      <CityDataStyle>
         <p className="title" >CLUBS</p>
         <div className="teams" >
            {team}
         </div>
         <p className="stadium title" >STADIUMS</p>
         <div className="teams" >
            {stadium}
         </div>
      </CityDataStyle>
   )
}

const CityDataStyle = styled.div`
   position: absolute;
   width: 50%;
   height: 94vh;
   top: 50%;
   transform: translateY(-50%);
   border-radius: 0 10px 10px 0;
   box-shadow: 3px 3px 12px #000; 
   background-color: rgba(0, 70, 200, 0.5);
   color: #fff;
   padding: 35px 0;
   z-index: 2;
   .title {
      font-size: 1.3rem;
   }
   .teams {
      margin-top: 20px;
   }
   .stadium {
      margin-top: 35px;
   }
   p {
      width: 20%;
      padding: 0 10px;
      margin-top: 11px;
      text-align: center;
      margin-left: auto;
   }
   
`

export default CityData
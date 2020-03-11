import React from 'react'
import styled from "styled-components"
import media from "styled-media-query";

const CityData = ({locations, index, showing, closeWeather}) => {

   const team = locations[index].teams.map((each, i) => <p key={i} >{each}</p>)
   const stadium = locations[index].stadiums.map((each, i) => <p key={i} >{each}</p>)
   

   return(
      <CityDataStyle showing={showing} >
         <div className="close-btn" onClick={() => closeWeather()} >
            <div></div>
            <div></div>
         </div>
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
   width: 55%;
   height: 94vh;
   top: 50%;
   transform: translateY(-50%);
   border-radius: 0 10px 10px 0;
   box-shadow: 3px 3px 12px #000; 
   background-color: rgba(0, 70, 200, 0.5);
   color: #fff;
   padding: 35px 0;
   z-index: 2;
   transition: 0.7s;
   ${media.lessThan("960px")`
      width: 70%;
   `}
   ${media.lessThan("600px")`
      width: 95%;
      margin-left: ${({showing}) => showing ? "0" : "-100%"};
   `}
   .title {
      font-size: 1.3rem;
      ${media.lessThan("600px")`
         font-size: 1.2rem;
      `}
   }
   .teams {
      margin-top: 20px;
   }
   .stadium {
      margin-top: 35px;
   }
   p {
      width: calc(100% / 3.6);
      padding: 0 10px;
      margin-top: 11px;
      text-align: center;
      margin-left: auto;
      ${media.lessThan("600px")`
         width: calc(100% / 3.2);
      `}
   }
   .close-btn {
      display: none;
      width: 30px;
      margin-left: auto;
      margin-right: 20px;
      height: 30px;
      position: relative;
      cursor: pointer;
      ${media.lessThan("600px")`
         display: block;
      `}
      div {
         /* right: 0; */
         width: 30px;
         position: absolute;
         display: block;
         border-bottom: 1px solid #fff;
         z-index: 5;
         top: 50%;
         &:first-child {
            transform: rotate(45deg);
         }
         &:last-child {
            transform: rotate(135deg);
         }
      }

      .credit {

      }
   }
`

export default CityData
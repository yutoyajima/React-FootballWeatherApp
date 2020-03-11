import React from 'react'
import styled from "styled-components"

const Buttons = ({showWeather, locations}) => {


   const location = locations.map((city, i) => {
      return (
               <button onClick={() => {showWeather(city.id)}} key={city.id} >
                  <p>{city.city}</p>
               </button>
         )
      })


   return (
      <ButtonsStyle>
         {location}
      </ButtonsStyle>
   )
}

const ButtonsStyle = styled.div`
   width: 20%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-50%);
   z-index: 2;
   button {
      width: 85%;
      margin-left: auto;
      height: 35px;
      border-radius: 5px 0 0 5px;
      border: none;
      margin-top: 2px;
      transition: 0.2s ease-out;
      box-shadow: -3px 3px 5px #000;
      background: linear-gradient(to right, rgba(6, 190, 182, 0.5), rgba(40, 60, 134, 0.5)); 
      color: #fff;
      &:hover {
         width: 100%;
         font-size: 1rem;
         cursor: pointer;
      }
   }
`

export default Buttons
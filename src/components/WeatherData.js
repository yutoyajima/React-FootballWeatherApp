import React from 'react'
import CityName from "./CityName"
import WeatherIcon from "./WeatherIcon"
import WeatherName from "./WeatherName"
import Temperature from "./Temperature"
import Wind from "./Wind"
import Humidity from "./Humidity"
import styled from "styled-components"


import clearIcon from "../img/clear.png"
import sunnyIcon from "../img/sunny2.png"
import cloudyIcon from "../img/cloudy.png"
import rainyIcon from "../img/rainy2.png"
import snowIcon from "../img/snow.png"
import thorIcon from "../img/thor.png"
import notGoodIcon from "../img/notgood.png"




const WeatherData = ({weatherData}) => {

   let weatherId = weatherData.weather[0].id
   let weather
   let iconSrc
   let bgc

   if (weatherId >= 803) {
      weather = "Cloudy"
      iconSrc = cloudyIcon
      bgc = "linear-gradient(rgb(30,160,254), rgb(116,196,255), rgb(150,230,255))"
   } else if (weatherId >= 801) {
      weather = "Sunny"
      iconSrc = sunnyIcon
      bgc = "linear-gradient(rgb(0, 230, 255), rgb(255, 213, 120), rgb(255, 213, 0))"
   } else if (weatherId >= 800) {
      weather = "Clear"
      iconSrc = clearIcon
      bgc = "linear-gradient(rgb(255, 120, 9), rgb(255, 180, 0), rgb(255, 255, 0))"
   } else if (weatherId >= 700) {
      weather = "Not Good Weather"
      iconSrc = notGoodIcon
      bgc = "rgba(0, 0, 0, 0.7)"
   } else if (weatherId >= 600) {
      weather = "Snow"
      iconSrc = snowIcon
      bgc = "linear-gradient(rgb(0,247,255), rgb(0,188,255), rgb(170,200,255))"
   } else if (weatherId >= 300) {
      weather = "Rainy"
      iconSrc = rainyIcon
      bgc = "linear-gradient(rgb(72,139,159), rgb(89,168,169), rgb(108,200,180))"
   } else if (weatherId >= 200) {
      weather = "Thunderstorm"
      iconSrc = thorIcon
      bgc = "linear-gradient(rgb(73,72,100), rgb(47,46,80), rgb(27,26,60))"
   }
   
   return (
      <WeatherDataStyle bgc={bgc} >
         <CityName weatherData={weatherData} />
         <WeatherIcon iconSrc={iconSrc} />
         <WeatherName weather={weather} />
         <Temperature weatherData={weatherData} />
         <Wind weatherData={weatherData} />
         <Humidity weatherData={weatherData} />
      </WeatherDataStyle>
   )
}

const WeatherDataStyle = styled.div`
   background: ${ ({bgc}) => bgc};

   /* clear */
   /* background: linear-gradient(rgb(255, 120, 9), rgb(255, 180, 0), rgb(255, 255, 0)); */
   /* sunny */
   /* background: linear-gradient(rgb(0, 230, 255), rgb(255, 213, 120), rgb(255, 213, 0)); */
   /* cloudy */
   /* background: linear-gradient(rgb(30,160,254), rgb(116,196,255), rgb(150,230,255)); */
   /* rainy */
   /* background: linear-gradient(rgb(72,139,159), rgb(89,168,169), rgb(108,200,180)); */
   /* thor */
   /* background: linear-gradient(rgb(73,72,100), rgb(47,46,80), rgb(27,26,60)); */
   /* snow */
   /* background: linear-gradient(rgb(0,247,255), rgb(0,188,255), rgb(170,200,255)); */

   position: absolute;
   width: 40%;
   height: 95vh;
   top: 50%;
   transform: translateY(-50%);
   padding: 50px 0;
   border-radius: 0 10px 10px 0;
   box-shadow: 3px 3px 12px ; 
   z-index: 4;
`

export default WeatherData
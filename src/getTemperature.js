import getIconOnweatherCondition from './getIcon.js';

export default function getTemperature(temp,description,data,svgIcon1,path){
    temp.textContent = `${Math.round(data.main.temp)} °C`;
    description.textContent = data.weather[0].description;
    getIconOnweatherCondition(data,svgIcon1,path);
  }
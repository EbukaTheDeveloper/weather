
import{
  getForecastIcon1,
  getForecastIcon2,
  getForecastIcon3,
  getForecastIcon4,
  getForecastIcon5,
  getForecastIcon6
} from './getForecastIcon.js';


 function getForecastFirstHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[0].main.temp)} °c`;

    getForecastIcon1(data,icon,path);

    time.textContent =  data.list[0].dt_txt.slice(11,16);
  }

   function getForecastSecondHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[1].main.temp)} °c`;

    getForecastIcon2(data,icon,path);

    time.textContent =  data.list[1].dt_txt.slice(11,16);
  }

  function getForecastThirdHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[2].main.temp)} °c`;

    getForecastIcon3(data,icon,path);

    time.textContent =  data.list[2].dt_txt.slice(11,16);
  }

  function getForecastFourthHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[3].main.temp)} °c`;

    getForecastIcon4(data,icon,path);

    time.textContent =  data.list[3].dt_txt.slice(11,16);
  }

  function getForecastFifthHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[4].main.temp)} °c`;

    getForecastIcon5(data,icon,path);

    time.textContent =  data.list[4].dt_txt.slice(11,16);
  }

  function getForecastSixthHr(time,condition,data,icon,path){
    condition.textContent =  `${Math.round(data.list[5].main.temp)} °c`;

    getForecastIcon6(data,icon,path);

    time.textContent =  data.list[5].dt_txt.slice(11,16);
  }

  export{getForecastFirstHr,getForecastSecondHr,getForecastThirdHr,getForecastFourthHr,getForecastFifthHr,getForecastSixthHr}
export default function getWeatherConditions(con1,con2,con3,con4,con5,con6,data){
    con1.textContent = `${Math.round(data.main.temp_max)} °c`;
    con2.textContent = `${Math.round(data.main.temp_min)} °c`;
    con3.textContent = `${Math.round(data.main.feels_like)} °c`;
    con4.textContent = `${data.main.humidity} %`;
    con5.textContent = `${data.main.pressure} hpa`;
    con6.textContent = `${data.wind.speed} m/s`;
  }
import moment from 'moment';
import './style.css';
import 'normalize.css';
import getLocation from './getLocation.js';
import getDate from './displayDate.js';
import getTemperature from './getTemperature.js';
import getWeatherConditions from './showOtherConditions.js';
import conditionsTitle from './showConditionsTitle.js';
import{
    getForecastFirstHr,
    getForecastSecondHr,
    getForecastThirdHr,
    getForecastFourthHr,
    getForecastFifthHr,
    getForecastSixthHr
} from './getForecastIn3hrs.js'
import addBorder from './border.js';
import setBackgroundColor from './setBackground.js';
import showSearchBox from './displaySearchBox';
import goToHome  from './goBack.js';

console.log('--testing');
console.log('ok');
const addCityButton = document.querySelector('.add-city');
const searchBox = document.querySelector('.form');
const goBack = document.querySelector('.back');
const submit = document.querySelector('.submit-btn');
const input = document.querySelector('input');
const cityName = document.querySelector('h1');
const dateText = document.querySelector('.date');
const temp = document.querySelector('.temp');
const temp_description = document.querySelector('.description');
const conditionContainer = document.querySelector('.conditions');
const temp_max = document.querySelector('.condition1');
const temp_min = document.querySelector('.condition2');
const feel_like = document.querySelector('.condition3');
const humidity = document.querySelector('.condition4');
const pressure = document.querySelector('.condition5');
const wind_speed = document.querySelector('.condition6');
const con1Title = document.querySelector('.con1-title');
const con2Title = document.querySelector('.con2-title');
const con3Title = document.querySelector('.con3-title');
const con4Title = document.querySelector('.con4-title');
const con5Title = document.querySelector('.con5-title');
const con6Title = document.querySelector('.con6-title');
const svgIcon1 = document.querySelector('.weather-icon1');
const title = document.querySelector('.title');
const time1 = document.querySelector('.time-1');
const time2 = document.querySelector('.time-2');
const time3 = document.querySelector('.time-3');
const time4 = document.querySelector('.time-4');
const time5 = document.querySelector('.time-5');
const time6 = document.querySelector('.time-6');
const svgIcon2 = document.querySelector('.weather-icon2');
const svgIcon3 = document.querySelector('.weather-icon3');
const svgIcon4 = document.querySelector('.weather-icon4');
const svgIcon5 = document.querySelector('.weather-icon5');
const svgIcon6 = document.querySelector('.weather-icon6');
const svgIcon7 = document.querySelector('.weather-icon7');
const temp2 = document.querySelector('.weather-condition-1');
const temp3 = document.querySelector('.weather-condition-2');
const temp4 = document.querySelector('.weather-condition-3');
const temp5 = document.querySelector('.weather-condition-4');
const temp6 = document.querySelector('.weather-condition-5');
const temp7 = document.querySelector('.weather-condition-6');
const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path4 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path5 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path6 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const path7 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
const Status = document.querySelector('.error')

async function getCurrentWeatherStatic(city) {
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1bb565bf18203275904202a006cdfd&units=metric`;
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5618104ae9c8ece7c7cc673d733b90a0&units=metric`;
  
    const responses = await Promise.all([fetch(url1), fetch(url2)]);

    const data1 = await responses[0].json();
    const data2 = await responses[1].json();

    console.log(data1,data2);

    getLocation(cityName,data1);
    getDate(dateText);
    getTemperature(temp,temp_description,data1,svgIcon1,path1);
    getWeatherConditions(temp_max,temp_min,feel_like,humidity,pressure,wind_speed,data1);
    conditionsTitle(con1Title,con2Title,con3Title,con4Title,con5Title,con6Title);
    getForecastFirstHr(time1,temp2,data2,svgIcon2,path2);
    getForecastSecondHr(time2,temp3,data2,svgIcon3,path3);
    getForecastThirdHr(time3,temp4,data2,svgIcon4,path4);
    getForecastFourthHr(time4,temp5,data2,svgIcon5,path5);
    getForecastFifthHr(time5,temp6,data2,svgIcon6,path6);
    getForecastSixthHr(time6,temp7,data2,svgIcon7,path7);
    addBorder(conditionContainer);
    setBackgroundColor();
    title.textContent = `Today's weather`;
    addCityButton.addEventListener('click',showSearchBox.bind(this,searchBox));
    goBack.addEventListener('click',goToHome.bind(this,searchBox));
}
function handleError(err) {
    console.log(err);
  }

getCurrentWeatherStatic('Onitsha').catch(handleError);

function getCurrentWeatherInputValue(){
    submit.addEventListener('click',()=>{
        getCurrentWeatherStatic(input.value).catch(handleError);
        goToHome(searchBox);
        input.value = '';
    });
    input.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            getCurrentWeatherStatic(input.value).catch(handleError);
            goToHome(searchBox);
            input.value = '';
        }
    })
}
getCurrentWeatherInputValue();
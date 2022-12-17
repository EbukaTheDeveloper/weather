export default function getLocation (city,data){
    city.textContent = `${data.name}, ${data.sys.country}`;
  }
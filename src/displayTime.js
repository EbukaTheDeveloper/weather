export default function getTime(data,element){
    let now = new Date();

    let isMorning   = now.getHours() > 5  && now.getHours() <= 12;
    let isAfternoon = now.getHours() > 12 && now.getHours() <= 18;
    let isEvening   = now.getHours() > 18 && now.getHours() <= 22;
    let isNight     = now.getHours() > 22 || now.getHours() <= 5;

    data.list.forEach(item =>{
        const time = item.dt_txt.slice(11);
    })
}

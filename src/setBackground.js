const setBackgroundColor = ()=>{
    const div = document.querySelectorAll('.f');
    const arrayDiv = [...div];
    arrayDiv.forEach(item=>{
        item.classList.add('b-o');
    })
}
export default setBackgroundColor;
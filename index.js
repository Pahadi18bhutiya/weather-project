async function checkweather(city){
    const key="f1103599b79dd902a0422268ded5e6e7";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const data= await fetch(`${api}`).then(response=> response.json());

    console.log(data.cod);
    if(data.cod===`400`){
        console.log("error Found");
        return;
    }

    document.getElementById('first').style.display='none';
    document.getElementById('second').style.display='flex';

    document.querySelector('.c1').innerHTML=city;
    document.querySelector('.c2').innerHTML=data.weather[0].description;
    document.querySelector('.c3').innerHTML=data.main.humidity+'%';
}
document.getElementById('searchbtn').addEventListener('click',()=>{
    checkweather(document.getElementById('input').value);
})
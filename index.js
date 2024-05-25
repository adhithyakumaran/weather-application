const active_links= document.querySelectorAll(".facts");

active_links.forEach(active_link =>{
    active_link.addEventListener("click",function(){
          document.querySelector(".active")?.classList.remove("active");
          active_link.classList.add("active");

    })
});



/*--------------------on load page-----------------*/

document.onreadystatechange = function(){
    var state = document.readyState;
    if(state==="interactive"){
        document.getElementById("loader").style.visibility= "visible";
    }
    else if(state==="loading"){
        document.getElementById("loader").style.visibility ="visible";
    }
    else if(state==="complete"){
       
        document.getElementById("loader").style.visibility="hidden";
      
       
    } 

}
// Function to get the current date and time
function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
  }
  
  // Target an HTML element to display the current date and time
  const dateDisplay = document.querySelector(".time");
  
  // Set the innerHTML of the element to the current date and time returned by the function
  dateDisplay.innerHTML = getCurrentDateAndTime();
/*---------------------------------------------------------------------------------------------*/

const apiKey = "09b7ba44cb12465b1bed43e63ae99a1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiAir = "http://api.openweathermap.org/data/2.5/air_pollution?";
const apiForecast = "http://api.openweathermap.org/data/2.5/forecast?";
const SearchBox = document.querySelector(".search-box");
const searchBtn =  document.querySelector(".search-btn");

async function checkWeather(city){
    const response =  await fetch(apiUrl +city+ `&appid=${apiKey}`);
    const data = await response.json();
    

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.floor(data.main.temp) +" °C";
    document.querySelector(".temperature1").innerHTML=Math.floor(data.main.temp) +" °C";
    document.querySelector(".climate").innerHTML=data.weather[0].main;
    document.querySelector(".description").innerHTML=data.weather[0].description;
    document.querySelector(".humidity-per").innerHTML=data.main.humidity+" %";
    document.querySelector(".windspeed-per").innerHTML=Math.floor(data.wind.speed)+" m/s"
    document.querySelector(".windspeed-per1").innerHTML=Math.floor(data.wind.speed)+" m/s"
    document.querySelector(".feels-like").innerHTML = data.main.feels_like+" °C";
    document.querySelector(".pressure").innerHTML = data.main.pressure+" hPa";
    document.querySelector(".min-temp").innerHTML = Math.floor(data.main.temp_min)+" °C";
    document.querySelector(".max-temp").innerHTML = Math.floor(data.main.temp_max)+" °C";
    document.querySelector(".sunrise").innerHTML = data.sys.sunrise;
    document.querySelector(".sunset").innerHTML = data.sys.sunset;
    document.querySelector(".country-code").innerHTML = data.sys.country;
    document.querySelector(".direction").innerHTML= data.wind.deg+ " deg";
    document.querySelector(".gust").innerHTML= data.wind.gust+" m/s";
    document.querySelector(".visibility").innerHTML = Math.floor(data.visibility/1000)+" Km"
    document.querySelector(".latitude").innerHTML = data.coord.lat;
    document.querySelector(".longitude").innerHTML = data.coord.lon;
    document.querySelector(".cloudliness").innerHTML = data.clouds.all+" %";

    var weatherIcon = document.querySelector(".climate-img");

    weatherIcon.src = "./assets/images/"+data.weather[0].main+".png";
    
      

    const latti = data.coord.lat;
    const longii = data.coord.lon;
    const  responseAir = await fetch (apiAir+`lat=${latti}&lon=${longii}&appid=${apiKey}`);
    const  dataAir = await responseAir.json();
    const responseForecast = await fetch(apiForecast+`lat=${latti}&lon=${longii}&appid=${apiKey}&units=metric`);
    const  dataForecst = await responseForecast.json();

   
    console.log(dataAir);
    console.log(dataForecst);

    document.querySelector(".aqi").innerHTML = dataAir.list[0].main.aqi;
    document.querySelector(".co").innerHTML = dataAir.list[0].components.co;
    document.querySelector(".no").innerHTML = dataAir.list[0].components.no;
    document.querySelector(".so2").innerHTML = dataAir.list[0].components.so2;
    document.querySelector(".no2").innerHTML = dataAir.list[0].components.no2;
    document.querySelector(".o3").innerHTML = dataAir.list[0].components.o3;
    document.querySelector(".nh3").innerHTML = dataAir.list[0].components.nh3;
    document.querySelector(".pm10").innerHTML = dataAir.list[0].components.pm10;
    document.querySelector(".pm2_5").innerHTML = dataAir.list[0].components.pm2_5;


    var qualname = document.querySelector(".Q-name");
    var aq  = dataAir.list[0].main.aqi;


    if(aq === 1){
        document.querySelector(".Q-name").innerHTML="GOOD"
    }
    else if(aq === 2){
        document.querySelector(".Q-name").innerHTML="FAIR"
    }
    else if(aq === 3){
        document.querySelector(".Q-name").innerHTML="MODERATE"
    }
    else if(aq === 4){
        document.querySelector(".Q-name").innerHTML="POOR"
    }
    else{
        document.querySelector(".Q-name").innerHTML="VERY POOR"
    }
/*----------------icon change-------------------*/

}
searchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value);
})

/*---------------------------------making the side menu  btn--------------------------------------*/

document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector(".side-menu0").style.left="30px";
})


/*--------------------------------close btnn-----------------------*/

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".side-menu0").style.left="720px";
})



/*----------------code for the unsplash------------*/




const API_key=`0e786aa3549877c763558858e1677b1c`
const dataform=document.querySelector("#formval");
const inner=document.querySelector("#invalue");



const showelement=function(vaar){
    nestflex.innerHTML= `
     <div >
    <img src="https://openweathermap.org/img/wn/${vaar.weather[0].icon}@2x.png" alt="">

    </div>
<div>
    <h2>${vaar.main.temp} &#8451;</h2>
<h4>${vaar.weather[0].main}</h4>
</div>`;


}

const searchin=async function(city){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
//fetch with api & input
const responce=await fetch(url);
const vaar=await responce.json();
//console.log(responce);
console.log(vaar);

console.log(vaar.main.temp);


//function for dynamic change temp value
return showelement(vaar);



    }
    const changein=function(vlue){
      return  document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+vlue+")'"
      
     }



dataform.addEventListener("submit",
function(event){
    //function for get dynamic change weather 
    searchin(inner.value); 
    // function for get dynamic change image 
    changein(inner.value);
    event.preventDefault();})


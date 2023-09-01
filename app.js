let countryBtn = document.querySelector(".btn");
let countryInput = document.getElementById("inp");
let myContainer = document.querySelector(".cont");
const generate = async  () => {
 try {
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryInput.value}?fullText=true`);
    let myData = await response.json();
    myContainer.innerHTML = ` 
<div class="img">
<img src="${myData[0].flags.svg}" alt="Country">
    <h1>${myData[0].name.common}</h1>
</div>
<div class="info">
    <p><strong>Capital: </strong>${myData[0].capital[0]}</p>
    <p><strong>Continent: </strong>${myData[0].continents[0]}</p>
    <p><strong>Population: </strong>${myData[0].population}</p>
    <p><strong>Currency: </strong>${myData[0].currencies[Object.keys(myData[0].currencies)].name}</p>
    <p><strong>National Language: </strong>${Object.values(myData[0].languages).toString().split(",").join(",")}</p>
</div>`;
 } catch (error) {
    myContainer.innerHTML = `The Error is: ${error}`;
    myContainer.style.textAlign = "center";
    myContainer.style.padding = "20px 0";
 }
}

countryBtn.addEventListener("click",generate);
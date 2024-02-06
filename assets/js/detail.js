const detailContainer=document.querySelector(".detail-container");
let query=window.location.search;
let countryName=new URLSearchParams(query).get('name')
// console.log(countryName);
// console.log(query);

function getCountry(){
    fetch("https://restcountries.com/v3.1/name/" + countryName)
    .then((res) => res.json())
    .then((country) => repeatDetailCountry(country))
}
getCountry();

function repeatDetailCountry(country) {
    detailContainer.innerHTML = "";
    country.forEach(function (item) {
        const { flags, population, region, capital, name, subregion, currencies, languages} = item;

        console.log(name.nativeName.common);
        detailContainer.innerHTML += `  <div class="detail-box--image">
        <img class="detail-image" src="${flags.png}" alt="country flag">
    </div>
    <div class="box-detail">
        <strong class="box-detail--title">${name.common}</strong>
        <div class="detail-box--about">
            <div class="detail-about--header">
                <p class="detail-about-paragrfh">Native Name: <span>${name.nativeName}</span></p>
                <p class="detail-about-paragrfh">Population: <span>${population.toLocaleString()}</span></p>
                <p class="detail-about-paragrfh">Region: <span>${region}</span></p>
                <p class="detail-about-paragrfh">Sub Region: <span>${subregion}</span></p>
                <p class="detail-about-paragrfh">Capital: <span>${capital}</span></p>
            </div>
            <div class="detail-about--body">
                <p class="detail-about-paragrfh">Top Level Domain: <span>.be</span></p>
                <p class="detail-about-paragrfh">Currencies: <span>${currencies.symbol}</span></p>
                <p class="detail-about-paragrfh">Languages: <span>${languages}</span></p>
            </div>
        </div>
            <div class="detail-about--footer">
                <p class="detail-footer--title">Border Countries: </p>
                <button class="detail-footer--button">France</button>
                <button class="detail-footer--button">Germany</button>
                <button class="detail-footer--button">Netherlands</button>
        </div>
    </div>`
    });
}

// Dark Theme
const backgroundChange = document.querySelector("body");
const themeIcon = document.querySelector(".light-theme--moon");
const leftIcon = document.querySelector(".left-image img");
const root = document.querySelector(":root");
themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("active");
  if (document.body.classList.contains("active")) {
    themeIcon.src = "./assets/image/dark-moon.svg";
    leftIcon.src = "./assets/image/left-light.svg";
  } else {
    themeIcon.src = "./assets/image/light-moon.svg";
    leftIcon.src = "./assets/image/left-dark.svg";
  }
});

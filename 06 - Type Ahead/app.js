const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
console.log(cities);
fetch(endpoint).then(blob => blob.json().then(data => cities.push(...data)));

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function handleSearch(e) {
    const citiesFilter = findMatches(this.value);
    const citiesHtml = citiesFilter.map(city => {
        const regex = new RegExp(this.value, "gi");
        const cityName = city.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = city.state.replace(regex, `<span class="hl">${this.value}</span>`)
        
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="name">${numberWithCommas(city.population)}</span>
        </li>
    `}).join("")
    listSearch.innerHTML = citiesHtml;
}

function findMatches(str) {
    const regex = new RegExp(str, "gi");
    return cities.filter(city => city.city.match(regex) || city.state.match(regex))
}

const input = document.querySelector(".search");
const listSearch = document.querySelector(".suggestions");


input.addEventListener("input", handleSearch)
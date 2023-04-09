const bt_search = document.querySelector('#bt_search');
const input = document.querySelector('#input');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');

bt_search.addEventListener('click', e => {
    e.preventDefault();
    if(input.value !== ''){
        searchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ffdc4df60bcc770a3aeb414bc3d0859e&lang=pt_br&units=metric`);
    }
});

async function searchWeather(endpoint){
    const response = await fetch(endpoint);
    const data = await response.json();

    updateInfo(data.name, data.main.temp);
    console.log(data);
}

function updateInfo(p_city, p_temp){
    city.innerHTML = p_city;
    temp.innerHTML = `${p_temp.toFixed(1)} °C`;
}

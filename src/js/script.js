const form_search = document.querySelector('#search');

const input = document.querySelector('#input');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const flag = document.querySelector('#flag');
const desc = document.querySelector('#desc');
const icon = document.querySelector('#icon');
const wind = document.querySelector('#wind_text');
const humidity = document.querySelector('#humidity_text');

const div_conteudo = document.querySelector('#conteudo');
const initial_div = document.querySelector('#initial_div');

const loading = document.querySelector('#loading_div');

form_search.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value !== ''){
        searchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ffdc4df60bcc770a3aeb414bc3d0859e&lang=pt_br&units=metric`);
    }
});

async function searchWeather(endpoint){
    div_conteudo.style.display = 'none';
    initial_div.style.display = 'none';
    loading.style.display = 'flex';

    const response = await fetch(endpoint);
    
    loading.style.display = 'none';
    div_conteudo.style.display = 'block';
    const data = await response.json();

    updateInfo(data.name, data.main.temp, data.sys.country, data.weather[0].description, data.weather[0].icon, data.wind.speed, data.main.humidity);
}

function updateInfo(p_city, p_temp, p_flag, p_desc, p_icon, p_wind, p_humidity){
    city.innerHTML = p_city;
    temp.innerHTML = `${Math.round(p_temp)} °C`;
    flag.src = `https://flagsapi.com/${p_flag}/flat/32.png`;
    desc.innerHTML = p_desc;
    icon.src = `http://openweathermap.org/img/wn/${p_icon}@2x.png`;
    wind.innerHTML = `${p_wind} km/h`;
    humidity.innerHTML = `${p_humidity}%`;
}

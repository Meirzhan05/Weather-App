import './styles.css';
import createCurrentWeatherUI from './currentWeather';
const searchInput = document.getElementById('search-input');
const contentDiv = document.getElementById('content');

window.onload = UI();


searchInput.addEventListener('change', () => {
    contentDiv.textContent = "";
    UI(searchInput.value);

    searchInput.value = "";
})

function UI(location="undefined") {
    createCurrentWeatherUI(location);
}
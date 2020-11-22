const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const API_URL = 'http://www.omdbapi.com/?apikey=9692cf14 &s=';

form.addEventListener('submit', formSubmitted);


function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    console.log(searchTerm);
    getResults(searchTerm);


}


function getResults(searchTerm) {
    const url = `${API_URL}${searchTerm}`;
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(showResults);
}

function showResults(results) {
    console.log(results);

}
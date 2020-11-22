const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const resultsSection = document.querySelector('#results');

const API_URL = 'http://www.omdbapi.com/?apikey=9692cf14 &s=';

form.addEventListener('submit', formSubmitted);


async function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    try {
        const results = await getResults(searchTerm);
        showResults(results);
    } catch (error) {
        showError(error);
    }




}


async function getResults(searchTerm) {
    const url = `${API_URL}${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Error) {
        throw new Error(data.Error);
    }
    return data.Search;
}

function showResults(results) {
    resultsSection.innerHTML = results.reduce((html, movie) => {
        return html + `
        <div class="card col-4">
        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Year}</p>
        </div>
        </div>`;
    }, '');


}

function showError(error) {
    resultsSection.innerHTML = `
    <div class="alert alert-danger col" role="alert">
        ${error.message}
    </div>
    `;
}

document.getElementById('search-button').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchedPokemon = document.getElementById('search-input').value.trim();
    window.location.replace(`/search?search=${searchedPokemon}`);
})
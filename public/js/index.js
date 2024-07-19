
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();
    const searchedPokemon = document.getElementById('search-input').value.trim();
    window.location.replace(`/search?search=${searchedPokemon}`);
})
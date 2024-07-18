document.getElementById('search-button').addEventListener('click', function (event) {
    event.preventDefault();
    const searchedPokemon = document.getElementById('search-input').value.trim();

    // fetch(`/search${searchedPokemon}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },

    // })

    window.location.href = `/search/${searchedPokemon}`

})

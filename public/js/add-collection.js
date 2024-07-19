let collectionButton = document.getElementsByClassName('collection-button');

for (let i=0; i < collectionButton.length; i++) {
    collectionButton[i].addEventListener('click', function (event) {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    const id = event.target.getAttribute('data-id');
    const img = event.target.getAttribute('data-img');
    const type = event.target.getAttribute('data-type');


    const response = fetch(`/`, {
        method: 'POST',
        body: JSON.stringify({ id, name, img, type}),
        headers: {
            'Content-Type': 'application/json',
        }, 
    });

    if (response.ok) {
        alert('Congrats! Added to collection!')
      } else {
        alert(response.statusText);
      }

})
}

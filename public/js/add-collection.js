let collectionButton = document.getElementsByClassName('collection-button');

for (let i=0; i < collectionButton.length; i++) {
    collectionButton[i].addEventListener('click', function (event) {
    event.preventDefault();
    const name = event.target.getAttribute('data-name');
    const id = event.target.getAttribute('data-id');
    const image = event.target.getAttribute('data-img');
    const types = event.target.getAttribute('data-type');


    const response = fetch(`/api/cards`, {
        method: 'POST',
        body: JSON.stringify({ id : id, name : name, image : image, types : types }),
        headers: {
            'Content-Type': 'application/json',
        }, 
    });

    if (response) {
        alert('Congrats! Added to collection!')
      } else {
        alert(response.statusText);
      }
})
}

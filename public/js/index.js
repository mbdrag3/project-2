const url = 'https://api.pokemontcg.io/v2/cards';
const key = 'd2443ada-80ff-4382-b87e-5b56e378b92c';

fetch(url, {
    headers: {
    'Authorization': `Bearer ${key}`
  }
}).then(response => {
    console.log(response);
    return response.json();
}).then(data =>{
    console.log(data.data);
}).catch(error =>{
    console.log(error)
})
const baseUrl = 'https://jsonplaceholder.typicode.com';


fetch(`${baseUrl}'/users'`)
    .then((response) => response.json())
    .then((data) => { console.log(data); })
    .catch((error) => { console.error(error); });

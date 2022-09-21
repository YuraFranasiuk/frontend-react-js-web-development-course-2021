const baseUrl = 'https://jsonplaceholder.typicode.com';


fetch(`${baseUrl}/users/10/albums`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        return response.json();
    })
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); })

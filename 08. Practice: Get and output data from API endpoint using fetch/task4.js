const baseUrl = 'https://jsonplaceholder.typicode.com';


function getAlbum(id) {
    return fetch(`${baseUrl}/albums/${id}`)
        .then((response) => {
            if (!response.ok)
                throw new Error(`Failed with status code: ${response.status}`);

            return response.json();
        })
        .catch((error) => { console.log(error); });
}

function getSpecifiedAlbums(ids = []) {
    return Promise.all(ids.map((id) => getAlbum(id)));
}

getSpecifiedAlbums([1, 15])
    .then((results) => { console.log("Results: ", results); })
    .catch((error) => { console.log("Error: ", error); });

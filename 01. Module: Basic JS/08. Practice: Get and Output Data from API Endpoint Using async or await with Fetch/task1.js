async function fetchAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        console.log('Result: ', await response.json());
    } catch (error) {
        console.log('Request Error: : ', error);
    }
}


fetchAlbums();

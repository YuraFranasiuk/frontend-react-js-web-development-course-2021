const baseUrl = 'https://swapi.py4e.com/api';


async function getPlanets() {
    try {
        const response = await fetch(`${baseUrl}/planets`);

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        const planets = (await response.json()).results;

        console.log(planets);
    } catch (error) {
        console.log('Request Error: : ', error);
    }
}


getPlanets();

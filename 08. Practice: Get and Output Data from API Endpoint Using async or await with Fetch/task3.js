const baseUrl = 'https://swapi.py4e.com/api';


async function getSkywalkers() {
    try {
        const response = await fetch(`${baseUrl}/people/?search=Skywalker`);

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        const skywalkers = (await response.json()).results;

        console.log(skywalkers);
    } catch (error) {
        console.log('Request Error: : ', error);
    }
}


getSkywalkers();

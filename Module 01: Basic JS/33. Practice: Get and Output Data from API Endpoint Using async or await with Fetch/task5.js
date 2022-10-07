async function fetchSWAPI(resource, throwError = false) {
    try {
        const baseUrl = 'https://swapi.py4e.com/api';
        const requestUrl = resource.startsWith(baseUrl) ? resource : `${baseUrl}/${resource}`;

        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log('Request Error: : ', error);

        if (throwError) {
            throw error;
        }
    }
}


async function getPersonFilms(name) {
    const people = await fetchSWAPI(`/people/?search=${name}`);
    if (people.count > 1) {
        throw new Error(`Invalid person name. Found ${people.count} people`);
    }

    const films = await Promise.all(
        people['results'][0].films.map((film) => fetchSWAPI(film))
    );

    return {
        'name': name,
        'films': films
    };
}


async function testGetPersonFilms() {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms ", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms ", kenobiFilms);
}


testGetPersonFilms();

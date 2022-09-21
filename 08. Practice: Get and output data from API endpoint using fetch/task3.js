const baseUrl = 'https://jsonplaceholder.typicode.com';

const newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
};


fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
})
    .then((response) => {
        if (!response.ok)
            throw new Error(`Failed with status code: ${response.status}`);

        return response.json();
    })
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });

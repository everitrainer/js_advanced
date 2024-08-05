fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch((err) => console.log(err))
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const getData = async () => {
    let response = await fetch(API_URL)
    let data = await response.json()
    return data
}

const getId = async (id) => {
    let response = await fetch(`${API_URL}/${id}`)
    let data = await response.json()
    return data
}


export {getData, getId}
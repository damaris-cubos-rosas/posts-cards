const createCard = (id, title) => {
    let divCard = document.createElement("div")
    divCard.classList.add("card")
    let divBodyCard = document.createElement("div")
    divBodyCard.classList.add("card-body")
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    let cardButton = document.createElement("a")
    cardButton.classList.add("btn","btn-primary")
    let buttonText = document.createTextNode("Detalles")

    cardTitle.innerText = title
    cardButton.href = `./card-complete.html?id=${id}`

    cardButton.appendChild(buttonText)
    divBodyCard.append(cardTitle, cardButton)
    divCard.appendChild(divBodyCard)
    return divCard
}


const postCard = (title, body) => {
    let divPostCard = document.createElement("div")
    divPostCard.classList.add("card")
    let cardImg = document.createElement("img")
    cardImg.classList.add("card-img-top")
    cardImg.src = "https://picsum.photos/id/237/200/300"
    let divPostBody = document.createElement("div")
    divPostBody.classList.add("card-body")
    let postTitle = document.createElement("h5")
    postTitle.classList.add("card-title")
    let postDescription = document.createElement("p")
    postDescription.classList.add("card-text")

    postTitle.innerText = title
    postDescription.innerText = body

    divPostBody.append(postTitle, postDescription)
    divPostCard.append(cardImg, divPostBody)
    return divPostCard
}



export {createCard, postCard}


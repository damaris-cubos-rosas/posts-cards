const createCard = (id, title) => {
    let divCol = document.createElement("div")
    divCol.classList.add("col-12","col-md-4")
    let divCard = document.createElement("div")
    divCard.classList.add("card", "mb-5")
    let divBodyCard = document.createElement("div")
    divBodyCard.classList.add("card-body")
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    let cardButton = document.createElement("a")
    cardButton.classList.add("btn", "mt-3")
    let buttonText = document.createTextNode("Detalles")

    cardTitle.innerText = title
    cardButton.href = `./card-complete.html?id=${id}`

    cardButton.appendChild(buttonText)
    divBodyCard.append(cardTitle, cardButton)
    divCard.appendChild(divBodyCard)
    divCol.appendChild(divCard)
    return divCol
}


const postCard = (title, body) => {
    let divPostCard = document.createElement("div")
    divPostCard.classList.add("card")
    let cardImg = document.createElement("img")
    cardImg.classList.add("card-img-top")
    cardImg.src = "https://picsum.photos/id/237/200/300"
    let divPostBody = document.createElement("div")
    divPostBody.classList.add("card-body","text-center")
    let postTitle = document.createElement("h5")
    postTitle.classList.add("card-title", "fw-bold", "text-uppercase")
    let postDescription = document.createElement("p")
    postDescription.classList.add("card-text")

    postTitle.innerText = title
    postDescription.innerText = body

    divPostBody.append(postTitle, postDescription)
    divPostCard.append(cardImg, divPostBody)
    return divPostCard
}



export {createCard, postCard}


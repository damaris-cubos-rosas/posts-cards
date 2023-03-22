import {getData} from "./api.js"
import { createCard } from "./card.js"

const cardInfo = async ()=>{
    let elements = await getData()
    let wrapper = document.getElementById("cards")
    elements.forEach(item =>{
        let{id, title, body} = item
        wrapper.appendChild(createCard(id, title,setNumber))
    })
}

cardInfo()

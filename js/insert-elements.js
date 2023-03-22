import { postCard } from "./card.js";
import { getId } from "./api.js";

console.log(window.location);
console.log(window.location.search);
let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("id");
console.log(postId);

const getPost = async () => {
    let id = await getId(postId)
    return id
}

const postInfo = async() => {
    let info = await getPost()
    let cardSecondary = document.querySelector("#post-card")
    let {title, body} = info
    cardSecondary.appendChild(postCard(title,body))

}

postInfo()
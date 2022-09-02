import { CAT_KEY } from "constants/keys";
// Api de photos de petits chats
export default () => fetch(`https://api.thecatapi.com/v1/images/search?x-api-key=${CAT_KEY}`, {
        method: 'GET'
    })
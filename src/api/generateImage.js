import { CAT_KEY } from "constants/keys";

export default () => fetch(`https://api.thecatapi.com/v1/images/search?x-api-key=${CAT_KEY}`, {
        method: 'GET'
    })
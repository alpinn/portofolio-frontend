import axios from "axios";
import { APP_KEY } from "./config.js"

const instance = axios.create({
    baseURL: APP_KEY,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export default instance
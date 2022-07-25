import axios from "axios"

const BASE_URL = 'http://localhost:8000'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    header: {'Content-Type': 'application/json'},
    withCredentials: true
})

// creating an instance => https://github.com/axios/axios?ref=hackernoon.com#creating-an-instance
// using interceptors => https://axios-http.com/docs/interceptors && https://lightrains.com/blogs/axios-intercepetors-react/
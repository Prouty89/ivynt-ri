import axios from "axios";


//util for dynamic api calls. HOC to load URI

//You can change the URI here, but it must exist on the db... Create a function that makes a call and based on `${url}` will load data

let url = window.location.pathname
let one = '/invoices';
let two = '/vendors';
let dynamic = `${url}`


export const axiosCallOne = () => {
    const apiUrl = one;
    return axios.create({
        baseURL: apiUrl
    })
}


export const axiosCallTwo = () => {
    const apiUrl = two;
    return axios.create({
        baseURL: apiUrl
    })
}

export const axiosDynamic = () => {
    const apiUrl = dynamic;
    return axios.create({
        baseURL: apiUrl
    })
}







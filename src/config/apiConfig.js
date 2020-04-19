import axios from "axios";


//util for dynamic api calls. HOC to load URI

//You can change the URI here, but it must exist on the db... Create a function that makes a call and based on `${url}` will load data

//(Call 2 & 3 ) Display it on the table. Columns to Display will come from Configuration from Call 1 : "View available information"


//base URL for an individual call to /invoices

let one = '/invoices';

export const axiosCallOne = () => {
    const apiUrl = one;
    return axios.create({
        baseURL: apiUrl
    })
}

//base URL for an individual call to /vendors

let two = '/vendors';

export const axiosCallTwo = () => {
    const apiUrl = two;
    return axios.create({
        baseURL: apiUrl
    })
}

//base URL for an individual call to a dynamic URL (WIP)

let url = window.location.pathname;
let dynamic = `${url}`;

export const axiosDynamic = () => {
    const apiUrl = dynamic;
    return axios.create({
        baseURL: apiUrl
    })
}







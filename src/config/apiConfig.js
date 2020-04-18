import axios from "axios";


//util for dynamic api calls. Will still need methods in actions. 


let one = '/invoices';
let two = '/vendors';


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



import axios from 'axios';

let AxiosInstance1=axios.create({
    baseURL :'http://localhost:3000'
})

export default AxiosInstance1   



export let AxiosInstance=axios.create({
    baseURL : "https://fakestoreapi.com/"
})

// export let AxiosInstance2=axios.create({
//     baseURL : "https://dummyjson.com/"
// })
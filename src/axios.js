import axios from 'axios';

const instance=axios.create({
    baseURL:"https://whatsappbackend332.herokuapp.com"
})

export default instance;
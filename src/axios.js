import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://sc-conferece-website.firebaseio.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTACE';

export default instance;
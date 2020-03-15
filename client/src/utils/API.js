import axios from 'axios';

export default {
    getNews: ()=>{
        return axios.get('http://newsapi.org/v2/everything?q=coronavirus&sortBy=publishedAt&apiKey=3a402f5dd7ec454e9023f02c3d69e738')
    }
}

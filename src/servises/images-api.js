import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'key 25783532-c25c49afce5183be9881181c4';

const fetchImages = ({searchQuery='', curPage=1, pageSize=12})=>{
    return axios
        .get(
            `https://pixabay.com/api/q=${searchQuery}&page=${curPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
            )
        .then(response => response.data);
}

export default {fetchImages};
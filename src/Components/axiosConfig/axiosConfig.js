import axios from'axios';

const AxiosConfig = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key: 'dfbb719c493ddbf94331bc2077d599c3'
    }
})
export default AxiosConfig;
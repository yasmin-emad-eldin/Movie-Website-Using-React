import AxiosConfig from '../Components/axiosConfig/axiosConfig'

const MoviesAction =()=>{
    return(dispatch)=>{
        AxiosConfig
        .get('movie/popular')
        .then((res)=>{
           dispatch({type:'ApiMovies', payload: res.data.results})
        }).catch((err)=>{
            console.log(err);
        })
    }
}
export default MoviesAction;
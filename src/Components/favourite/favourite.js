import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import favouriteActionArray from '../../Redux/arrayAction';

const Favourite = ()=>{

    const favs = useSelector(state=>state)
    const dispatch= useDispatch();

    const removeFromFav = (removedId)=>{
        let removedMovie = favs.favourites.find((fav)=>{
                                return fav.id == removedId;
                            })
        favs.favourites.splice(favs.favourites.indexOf(removedMovie),1)
        dispatch(favouriteActionArray(favs.favourites))
    }

    return(
        <>
        <h1 className="mt-3 mb-2 text-center">*** Favourites ***</h1>
            <div className="container text-center d-flex flex-wrap mb-3">
        {
            favs.favourites.map((fav, index)=>{
                return <div className="card text-light bg-secondary m-3 shadow" style={{width:'18rem'}} key={index}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title text-dark">{fav.title}</h4>
                            <p className="card-text"><b className="text-dark">Overview:</b> {fav.overview} </p>
                            <Link to={`Movie/${fav.id}`}>
                                <button className="btn btn-dark">Detailes</button>
                            </Link>
                            <span id={fav.id} onClick={()=>{removeFromFav(fav.id)}} >
                                <i className="fa-solid fa-trash-can text-danger m-2 fs-2"></i>
                            </span>
                        </div>
                   </div>
                    })

        }
            </div>
        </>
    );
}
export default Favourite;
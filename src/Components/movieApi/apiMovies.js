import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from '../../miniComponents/star/star';
import { useDispatch, useSelector } from "react-redux";
import favouriteAction from "../../Redux/action";
import favouriteActionArray from '../../Redux/arrayAction';
import MoviesAction from "../../ReduxThunk/movieAction";

const ApiMovies = ()=>{

    const movies = useSelector(state=>state)
    const dispatch= useDispatch();

    useEffect(()=>{
    console.log(movies);
    console.log(movies.Movies);

    dispatch(MoviesAction())
    },[])




//    favourites 
    const favs = useSelector(state=>state)

    const removeFromFav = (removedId)=>{
        let removedMovie = favs.favourites.find((fav)=>{
                                return fav.id == removedId;
                            })
        favs.favourites.splice(favs.favourites.indexOf(removedMovie),1)
        dispatch(favouriteActionArray(favs.favourites))
    }

    const addtoFav =(mov)=>{
        let movie = favs.favourites.find((fav)=>{
            return fav.id == mov.id;
            });
        if (!movie)
        {
            dispatch(favouriteAction(mov))
        }
        else
        {
            removeFromFav(mov.id)
        }
   }

    return(
        <>
        <h1 className="mt-3 mb-2 text-center">*** Api Movies ***</h1>
        <div className="container text-center d-flex flex-wrap mb-3">

        { movies.Movies.map((movie, index)=>{

            return <div className="card text-light bg-secondary m-3 shadow" style={{width:'18rem'}} key={index}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title text-dark">{movie.title}</h4>
                            <p className="card-text"><b className="text-dark">Overview:</b> {movie.overview} </p>
                            <Link to={`Movie/${movie.id}`}>
                                <button className="btn btn-dark">Detailes</button>
                            </Link>
                            <span id={movie.id} onClick={()=>{addtoFav(movie)}}>
                                <Stars flag={movie.id}></Stars>
                            </span>
                        </div>
                   </div>
        })
        }
        </div>
        </>
    );
}
export default ApiMovies;
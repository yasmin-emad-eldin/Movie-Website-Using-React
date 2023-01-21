import React, { useEffect, useState } from "react";
import AxiosConfig from '../axiosConfig/axiosConfig'
import { Link } from "react-router-dom";
import Stars from '../../miniComponents/star/star';
import { useDispatch, useSelector } from "react-redux";
import favouriteAction from "../../Redux/action";
import favouriteActionArray from '../../Redux/arrayAction';

const Movies = ()=>{

    const [movies, setMovies] = useState([]);
    const [_page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(5);
    const [arr, setArr] = useState([1,2,3,4,5]);

    useEffect(()=>{
        AxiosConfig
        .get('movie/popular', {params:{page:`${_page}`}})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTotalPages(res.data.total_pages);
            setMovies(res.data.results);
        }).catch((err)=>{
            console.log(err);
        })
    },[_page])

    useEffect(()=>{
        var Arr = [];
        for(let i=start; i<=end; i++)
        {
            Arr.push(i);
        }
        setArr([...Arr])

    },[start])

   const selectPage = (p)=>{
        setPage(p);
   }

   const nextPage = ()=>{
    if ((end+3) >= totalPages)
    {
        setEnd(totalPages);
        setStart(totalPages-4);
    }
    else
    {
        setEnd(end+3);
        setStart(start+3);
    }
   }

   const prePage =()=>{
    if ((start-3) <= 0)
    {
        setEnd(5);
        setStart(1);
    }
    else
    {
        setEnd(end-3);
        setStart(start-3);
    }
   }

//    favourites 
    const favs = useSelector(state=>state)
    const dispatch= useDispatch();

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
        <h1 className="mt-3 mb-2 text-center">*** Movies ***</h1>
        <div className="container text-center d-flex flex-wrap mb-3">

        { movies.map((movie, index)=>{

            return <div className="card text-light bg-secondary m-3 shadow" style={{width:'18rem'}} key={index}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title text-dark">{movie.title}</h4>
                            <p className="card-text"><b className="text-dark">Overview:</b> {movie.overview} </p>
                            <Link to={`Movie/${movie.id}`}>
                                <button className="btn btn-dark">Detailes</button>
                            </Link>
                            <span id={movie.id} onClick={()=>{addtoFav(movie)}} value='false'>
                                <Stars flag={movie.id}></Stars>
                            </span>
                        </div>
                   </div>
        })
        }
        </div>

        {/*================= Pagination ===================*/}
        <nav aria-label="Page navigation example" className=" mx-auto">
            <ul className="pagination mx-auto" style={{width:'fit-content'}}>

                {/* previous */}
                <li className="page-item page-link" onClick={()=>{prePage()}} style={{cursor:'pointer'}}>
                    <span aria-hidden="true">&laquo;</span>
                </li>

                {/* pages */}
                { 
                arr.map((i)=>{
                    return <li className="page-item" key={i}><a className="page-link" onClick={()=>{selectPage(i)}}>{i}</a></li>
                    })
                }

                {/* Next */}
                <li className="page-item page-link" onClick={()=>{nextPage()}} style={{cursor:'pointer'}}>
                    <span aria-hidden="true">&raquo;</span>
                </li>

            </ul>
        </nav>
        </>
    );
}
export default Movies;
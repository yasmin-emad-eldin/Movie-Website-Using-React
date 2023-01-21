import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosConfig from "../axiosConfig/axiosConfig";
import axios from "axios";

const Search = ()=>{

    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        // axios
        // .get(`https://api.themoviedb.org/3/search/movie?api_key=dfbb719c493ddbf94331bc2077d599c3&query=Sharwk` )
        AxiosConfig
                .get(`search/movie`, {params: {query:`${params.mName}`} })
                .then((_movie)=>{
                    console.log(_movie.data.results);
                    setMovie(_movie.data.results)
                }).catch((err)=>{
                    console.log(err);
                })
    },[params])


    return(

        <>
        <h1 className="mt-3 mb-2 text-center">*** Search Results ***</h1>
        <div className="container text-center d-flex flex-wrap mb-3">
        
        { movie.map((m, index)=>{

            return <div className="card text-light bg-secondary m-3 shadow" style={{width:'18rem'}} key={index}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title text-dark">{m.title}</h4>
                            <p className="card-text"><b className="text-dark">Overview:</b> {m.overview} </p>
                            <Link to={`Movie/${m.id}`}>
                                <button className="btn btn-dark">Detailes</button>
                            </Link>
                        </div>
                </div>
            })
        }
        </div>

        </>
    );

}
export default Search;
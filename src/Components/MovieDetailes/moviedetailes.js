import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../axiosConfig/axiosConfig";

const Detailes = ()=>{

    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        AxiosConfig
                .get(`movie/${params.id}`)
                .then((_movie)=>{
                    console.log(_movie.data);
                    setMovie(_movie.data)
                }).catch((err)=>{
                    console.log(err);
                })
    },[])
    

    return(
        <>
        <div className="container-fluid" style={{minheight:'43rem'}}>
            <div className="card text-light bg-secondary m-3 shadow w-50 mx-auto" style={{minheight:'40rem'}}>
                        <img className="card-img-top h-75" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                        <div className="card-body h-25">
                            <h4 className="card-title text-dark text-center">{movie.title}</h4>
                            <p className="card-text"><b className="text-dark">Overview:</b> {movie.overview} </p>
                        </div>
                   </div>
        </div>
        </>
    );

}
export default Detailes;
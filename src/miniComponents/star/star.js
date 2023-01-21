import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Stars =(props)=>{

    const favs = useSelector(state=>state)
    const [style, setStyle] = useState(false);
    useEffect(()=>{
        var cond = false;
        favs.favourites.map((fav)=>{
        if (fav.id == props.flag)
        {
            cond = true;
            setStyle(true)
        }
        })
        if (!cond)
        {
            setStyle(false)
        }
    },[favs])

    return(
        <>
        {style? <i className="fa-solid fa-star text-warning fs-2 m-2"></i> :<i className="fa-regular fa-star text-warning fs-2 m-2"></i> }
        </>
    );
}
export default Stars;
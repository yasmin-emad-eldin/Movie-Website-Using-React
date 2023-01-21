import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { langContext } from "../../context/langContext";

const Header = ()=>{

    const[searchinput, setInputValue] = useState('');
    const favs = useSelector(state=>state)
    const {language, setLang} = useContext(langContext)

    const changeLang=()=>
    {
        (language== 'en')?setLang('ar'):setLang('en')
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>yasmona React JS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/Movies'>Movies</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/ApiMovies'>Api Movies</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/Favourite'>Favourites</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/Login'>Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/Register'>Register</Link>
                    </li>

                    <li className="nav-item">
                        <span className="p-5 fs-5 mx-2"> language: {language}</span>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-dark' onClick={()=>{changeLang()}}>change language</button>
                    </li>
                </ul>
                
                <form className="d-flex">
                   
                    <p className="nav-item fs-4">{favs.counter}</p><i className="fa-solid fa-star text-warning fs-2 m-2"></i>

                    <input className="form-control me-2" type="search" onChange={(event)=>{setInputValue(event.target.value)}} placeholder="Search" aria-label="Search"/>
                    <Link to={`/Search/${searchinput}`}>
                    <button className="btn btn-outline-success">Search</button>
                    </Link>
                </form>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Header;
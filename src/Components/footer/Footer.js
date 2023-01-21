import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';


export default class Footer extends React.Component{

    constructor()
    {
        super();
    }

    render()
    {
        return(
            <>
            <div className="container-fluid p-3 bg-dark d-flex  text-center" style={{minheight:'100px'}}>
                <span className="col-2 text-light">
                    <h5>Get in Touch:</h5>
                    <h6><FontAwesomeIcon icon={faAddressCard} color="white"/> lorem@lorem.loren</h6>
                    <h6><FontAwesomeIcon icon={faAddressCard} color="white"/> lorem@lorem.loren</h6>
                </span>
                <span className="col-8 text-center">
                    <button type="button" className="btn btn-muted border border-light border-1 text-light">Contact us</button>
                </span>
                <span className="col-1 d-flex justify-content-around  text-center">
                    {/* <h4><FontAwesomeIcon icon={faCircleNotch} color="red" spin/></h4> */}
                    <h4><FontAwesomeIcon icon={faLinkedinIn} color="white"/></h4>
                    <h4><FontAwesomeIcon icon={faFacebook} color="white"/></h4>
                    <h4><FontAwesomeIcon icon={faTwitter} color="white"/></h4>
                </span>
            </div>
            </>
        );
    }
}
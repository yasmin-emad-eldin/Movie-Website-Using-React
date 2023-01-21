import React from "react";


export default class Block extends React.Component{

    constructor()
    {
        super()
    }

    render()
    {
        return(
            <>
            <div className="container p-5 shadow d-flex flex-column text-center" style={{width:'18rem', background: this.props.propert.bgColor, height:'200px'}}>
                <h2 className="my-auto">{this.props.propert.text}</h2>
            </div>
            </>
        );
    }
}


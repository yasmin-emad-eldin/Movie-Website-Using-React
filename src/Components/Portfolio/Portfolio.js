import React from "react";
import Block from "../../miniComponents/block/block";

export default class Portfolio extends React.Component{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <>
            <div className="container p-5" style={{minheight:'400px'}}>
                <h1>Portfolio</h1>
                <div className="container">
                <div className="p-5 d-flex row">
                    <Block propert={{text:'Web Design', bgColor:'gray'}}/>
                    <Block propert={{text:'Mobile Design', bgColor:'darkgray'}}/>
                    <Block propert={{text:'LoGo Design', bgColor:'gray'}}/>
                </div>
                <div className="p-5 d-flex row">
                    <Block propert={{text:'Web Application Development', bgColor:'darkgray'}}/>
                    <Block propert={{text:'Mobile Application Development', bgColor:'gray'}}/>
                    <Block propert={{text:'PWA Development', bgColor:'darkgray'}}/>
                </div>
                </div>
            </div>
            </>
        );
    }
}
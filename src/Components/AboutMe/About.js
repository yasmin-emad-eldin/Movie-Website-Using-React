import React from "react";
import { saveAs } from "file-saver";


export default class About extends React.Component{
    constructor()
    {
        super()
    }

    render()
    {
        const saveFile = () => {
            saveAs(
              "../../externalFiles/header.jpg",
              "ex.jpg"
            );
          };
          
        return(
            <>
              
            </>
        );
    }
}
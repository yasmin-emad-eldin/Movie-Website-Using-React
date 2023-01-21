import React from "react";
import './progress.css'

export default class Progress extends React.Component{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <>
                    <div className="col-md-6">
                        <h3 className="progress-title">{this.props.prog.name}</h3>
                        <div className="progress red">
                            <div className="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: this.props.prog.percentage }}>
                                <div className="progress-value">{this.props.prog.percentage}</div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
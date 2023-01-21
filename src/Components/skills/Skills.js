import React from "react";
import Progress from "../../miniComponents/progress/progress";

export default class Skills extends React.Component{

    constructor()
    {
        super();
    }

    render()
    {
        return(
            <>
                <div className="bg-dark container-fluid text-light text-center p-5" style={{minheight:'400px'}}>
                    <h1>Skills</h1>
                    <p className="px-5 mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur sint
                        facere soluta, fuga distinctio? Consectetur iusto unde dolores ullam, harum cupiditate,
                        voluptas, pariatur optio ipsum quos saepe quisquam placeat.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur sint
                        facere soluta, fuga distinctio? Consectetur iusto unde dolores ullam, harum cupiditate,
                        voluptas, pariatur optio ipsum quos saepe quisquam placeat.</p>

                    <div className="d-flex">
                        <div className="col-6 p-5">
                            <div className="w-50 ms-auto">
                                <h3>My Focus</h3>
                                <hr></hr>
                                <h5>Ui/Ux design</h5>
                                <h5>Responsive design</h5>
                                <h5>web design</h5>
                                <h5>Mobile App design</h5>

                            </div>

                        </div>
                        <div className="col-6 p-5">
                            <Progress prog={{name:'HTML', percentage:"65%"}}/>
                            <Progress prog={{name:'CSS', percentage:"70%"}}/>
                            <Progress prog={{name:'JavaScript', percentage:"90%"}}/>
                            <Progress prog={{name:'Photoshop', percentage:"30%"}}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
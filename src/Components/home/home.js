import React from 'react'
import './home.css';



export default class Home extends React.Component {

    constructor() {
        super();
        console.log('constructor in');
    }

    render() {
        return ( <>
                <div className='contain'>
                    <div className='pt-5'>
                         <h2>Yasmona </h2>
                        <h4>Web developer & designer</h4>
                        <button type="button" className="btn btn-dark my-4 py-2 px-5">Contact me</button>
                    </div>
                   
                </div>
            </>
        );
    }
}
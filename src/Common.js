import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">

                        
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column">
                                <h1>Grow Your Skills with <br />
                                 <strong className="brand_name">Evs Institute </strong></h1>
                                <h2 className="my-3">
                                    {props.name}
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.to} className="btn btn-primary badge">{props.btname}</NavLink>
                                </div>
                             </div>
 
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{borderRadius:'43px'}} src={props.img } alt="pic" className='img-fluid' />
                                </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common

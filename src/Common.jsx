import React from 'react';
import web from '../src/images/logo.png';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
  return (
    <>
    
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img src={web}alt="logo"className="mx-auto h-12 w-auto"/>
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {props.text_bel_img}
                </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">{props.textbvisit}   
                <NavLink to={props.visit} className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >{props.visit_text}</NavLink>
                </p>
            </div>
    
    {/*
    <section id="header" className=" d-flex align-items-center">       
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                {props.name} <strong className="brand-name"> KCodes </strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented developers making websites
                            </h2>
                            <div className="mt-3">
                                <NavLink to= {props.visit} className="btn-get-started">
                                {props.btname}
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2 header-img d-flex justify-content-center">
                            <img src={props.imgsrc} className="img-fluid animated" alt="Common image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>*/}
    </>
  )
}
export default Common;
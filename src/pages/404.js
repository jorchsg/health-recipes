import React from "react";
import "./notFound.scss";
import { useHistory } from "react-router-dom";

// Components
import img404 from "../assets/images/404.png";

const Page404 = () => {
    let history = useHistory();
    return (
        <>
            <div className="body404">
                <div className="message404">
                    <h1>Not Found  |  404</h1>
                    <h1>Look like you're  lost</h1>
                    <h2 onClick={() => history.goBack()}> Go Back</h2>
                </div>
                <div className="image">
                    <img src={img404} className="image404" alt="imagen404" />
                </div>
            </div>
        </>
    );
};

export default Page404;
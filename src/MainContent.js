import React from "react";
import Card from "./Card";
import "./main.scss"


export default function MainContent () {
    return (
        <React.StrictMode>
            <div className="main-wrapper">
               <h2>All shoes</h2>
               <Card />
            </div>
        </React.StrictMode>
    )
}
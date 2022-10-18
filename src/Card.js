import React from "react";
import shoes1 from "./img/shoes/4.jpg"
import "./card.scss"

export default function Card() {
    return (
        <React.StrictMode>
            <div className="card-wrapper">
                <img src={shoes1} alt="shoes 1" />
                <div className="text">
                    <div>Man`s shoes. Model <b>"!shutAfAka!"</b></div>
                    <div className="price">
                        <span>price:</span>
                        <p>500$</p>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}
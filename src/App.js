import React from "react";

import img from './img/logo.png';

function App () {
    return (
        <React.StrictMode>
            <div className="wrapper">
                <div className="wrapper__header">
                    <div className="header__rightside">
                        <img src={img} alt="logo" />
                        <div className="rightside__text">
                            <h3>React Sneakers</h3>
                            <p>Магазин лучших кросовок</p>
                        </div>
                    </div>
                    <div className="header__leftside">
                        <ul>
                            <li>
                                <img src="img/cart.png" alt="cart" />
                                <span>2000 руб.</span>
                            </li>
                            <li>
                                <img src="img/user.png" alt="user" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default App

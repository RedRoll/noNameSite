import React from "react";

import SVG from 'react-inlinesvg';
import imgCart  from './img/loon-icon (1).svg'
import img from './img/logo.png';



function App () {
    return (
        <React.StrictMode>
            <div className="wrapper">
                <div className="wrapper__header">
                    <div className="header__rightside">
                        <img className="img-logo" src={img} alt="logo" />
                        <div className="rightside__text">
                            <h3>React Sneakers</h3>
                            <p>Магазин лучших кросовок</p>
                        </div>
                    </div>
                    <div className="header__leftside">
                        <ul>
                            <li>
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507 0 .179-.062.349-.15.516-.58-.634-1.297-1.14-2.103-1.472-1.863-2.476-4.626-4.544-7.749-4.544-3.465 0-6.533 2.632-8.404 5.5 1.815 2.781 4.754 5.34 8.089 5.493.09.529.25 1.034.471 1.506zm3.071-2.023 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-3.603-.994c-2.031-.19-3.622-1.902-3.622-3.982 0-2.208 1.792-4 4-4 1.804 0 3.331 1.197 3.829 2.84-.493.146-.959.354-1.389.615-.248-1.118-1.247-1.955-2.44-1.955-1.38 0-2.5 1.12-2.5 2.5 0 1.363 1.092 2.472 2.448 2.499-.169.47-.281.967-.326 1.483z" fill-rule="nonzero"/></svg>
                                <span>2000 руб.</span>
                            </li>
                            <li>
                                <img className="img-icon" src="./img/cart_v1.svg"  alt="user" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default App

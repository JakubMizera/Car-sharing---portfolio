import React from "react";

const Header = () => {
    return (
        <header>
            <div className="containerHeader">
                <div className="topBar">
                    <div className="logo">
                        <img src="../../images/Icon%20Logo%20Normal.svg" alt="pagelogo"/>
                        <p><span>CAR</span>SHARING</p>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">SERVICE</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="headerMain">
                    <h1>CAR SHARING</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur corporis, dolorum eligendi esse id impedit.</p>
                    <div className="btnContainer">
                        <div className="button btn1">SHARE A CAR</div>
                        <div className="button btn2">KEY FEATURES</div>
                    </div>
                </div>
                <div className="arrowDown">

                </div>
            </div>
        </header>
    )
}

export {Header};

import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false)
        }
    };

    useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll",transitionNavBar);
    }, [])




    return (
        <div className={` nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img className='nav__logo' src="https://mpng.subpng.com/20180629/eoe/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03b7c9120.2418554915302451795102.jpg" alt=""/>
                <img className="nav__avatar" src="data:image/png;base64,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" alt="" />
            </div>
            
            
        </div>
    )
}

export default Nav;

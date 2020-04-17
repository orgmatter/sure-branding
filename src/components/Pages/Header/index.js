import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import HeaderToolbar from './components/header-toolbar'

export default function Header ({routeUrl}) {

    const appBarRef = useRef(null);

    const onWindowScroll = (e) => {
        e.preventDefault();
        if (window.scrollY > 5) {
            // alert('Hello');
            appBarRef.current.classList.add('header-appbar-fixed');
            // console.log(appBarRef.current.classList.add('header-appbar-fixed'))
        }else if (window.scrollY <= 0) {
            appBarRef.current.classList.remove('header-appbar-fixed');
        }
    }

    window.onscroll = onWindowScroll;
    
    return (
        <div className="header-appbar-container">
            <AppBar position="static" className="header-appbar" id="header_appbar" ref={appBarRef}>
                <HeaderToolbar routeUrl={routeUrl} />
                {/* <svg className="header-curve-svg1" width="100%" height="100%" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
                    <path className="header-svg-curve-path1" d="M0,80 C190,0 150,120 450,60 C650,20 650,100 890,55 C1050,30 1000,100 1450,90 V-10 H0 Z" />
                </svg>
                <svg className="header-curve-svg2" width="100%" height="100%" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
                    <path className="header-svg-curve-path2" d="M0,80 C190,0 150,120 450,60 C650,20 650,100 890,55 C1050,30 1000,100 1450,90 V-10 H0 Z" />
                </svg> */}
            </AppBar>
        </div>
    )
}

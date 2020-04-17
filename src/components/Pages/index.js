import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BodyHome from './Body/body-home';
import BodyServices from './Body/body-services';
import BodyGallery from './Body/body-gallery';
import BodyContact from './Body/body-contact';


export default function Pages ({routeProps}) {

    const { url } = routeProps;

    return (
        <div className="pages-container">
            <div className="header-container">
                <Header routeUrl={url} />
            </div>
            {
                url && url === '/' ?
                <div className="body-container">
                    <BodyHome />
                </div> : null
            }
            {
                url && url === '/services' ?
                <div className="body-container">
                    <BodyServices />
                </div> : null
            }
            {
                url && url === '/gallery' ?
                <div className="body-container">
                    <BodyGallery />
                </div> : null
            }
            {
                url && url === '/contact_us' ?
                <div className="body-container">
                    <BodyContact />
                </div> : null
            }
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}
import React from 'react';
import { Images as IMAGES } from '../../../../Images';
import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../Routes';

export default function ServiceSection(props) {
    
    return (
        <div className="service-section-cover-flex">
            <div className="service-section-cover-item">
                <div className="service-section-header-cover-flex">
                    <div className="section-header-cover-item">
                        <div className="header-cover-item">
                            <h2 className="header-title">What we provide</h2>
                        </div>
                        {/* <div className="subheader-cover-item">
                            <p className="subheader-subtitle">What we do</p>
                        </div> */}
                    </div>
                </div>
                <div className="service-picture-grid-cover service-picture-grid-cover-row1">
                    <div className="service-picture-grid-flex service-picture-grid-flex-row1">
                        <div className="service-picture-grid-item service-picture-grid-item-row1">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src={IMAGES.src.surebrandProducts.shirt2} alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row1">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src={IMAGES.src.surebrandProducts.shirt6} alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row1">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src={IMAGES.src.surebrandProducts.hood2} alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row1">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src={IMAGES.src.surebrandProducts.hood2} alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-picture-grid-cover service-picture-grid-cover-row2">
                    <div className="service-picture-grid-flex service-picture-grid-flex-row2">
                        <div className="service-picture-grid-item service-picture-grid-item-row2">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src="" alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row2">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src="" alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row2">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src="" alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="service-picture-grid-item service-picture-grid-item-row2">
                            <div className="grid-image-overlay">
                                <Link className="overlay-links" to={ROUTES.services}>
                                    <div className="overlay-props-flex">
                                        <div className="overlay-props-item">
                                            <div className="overlay-title-header">
                                                <h2 className="overlay-header-title">Service title</h2>
                                            </div>
                                            <div className="overlay-subtitle-header">
                                                <p className="overlay-header-subtitle">Service name subtitle</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid-image-cover-flex">
                                <div className="grid-image-cover-item">
                                    <img className="grid-img" src="" alt=""></img>
                                </div>
                                {/* <div className="service-name-cover">
                                    <h2 className="service-name">Service name</h2>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
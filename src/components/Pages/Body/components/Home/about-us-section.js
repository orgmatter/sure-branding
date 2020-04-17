import React from 'react';
import { Images as IMAGES } from '../../../../Images';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../Routes';

export default function AboutUsSection() {
    
    return (
        <div className="about-us-cover-flex">
            <div className="about-us-cover-item">
                <div className="item-header-cover-flex">
                    <div className="item-header-cover-item">
                        {/* <div className="header-text-cover">
                            <h2 className="header-text">WHO WE ARE</h2>
                            <p className="header-text-underline-cover"><span className="text-underline-span"></span></p>
                        </div> */}
                    </div>
                </div>
                <div className="item-content-cover-flex">
                    <div className="item-content-cover-item">
                        <div className="content-cover-flex">
    
                            <div className="content-cover-item">
                                <div className="right-section-image-cover">
                                    <div className="image-cover-flex">
                                        <div className="image-cover-item">
                                            <img className="right-section-img" src={IMAGES.src.surebrandProducts.shirt6} alt="sure branding image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-cover-item">
                                <div className="header-text-cover">
                                    <h2 className="header-text">Who we are</h2>
                                    <p className="header-text-underline-cover"><span className="text-underline-span"></span></p>
                                </div>
                                <div className="content-title-cover">
                                    <h2 className="header-title"><b>Sure Branding Nigeria</b> is a printing company that liverage on latest technology to provide quality printing and branding services to meet your everyday occassion.</h2>
                                </div>
                                <div className="content-subtitle-cover">
                                    <p className="header-subtitle">From parties, weddings, birthdays, campaigns, gifts, business, education whatever and wherever the occassion is, <b>sure branding</b> is committed to provide the best printing and branding services with a guaranteed customer satisfaction.</p>
                                </div>
                                <div className="content-link-cover">
                                    <div className="content-link-cover-flex">
                                        <div className="content-link-cover-item">
                                            <Link className="content-link" to={ROUTES.aboutUs}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
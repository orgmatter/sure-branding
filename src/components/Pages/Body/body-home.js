import React from 'react';
import { carouselProps } from './components/Carousel/hero-slide-item-props';
import HeroCarousel from './components/Carousel/hero-carousel';
import AboutUsSection from './components/Home/about-us-section';
import ServiceSection from './components/Home/services-section';
import PortfolioSection from './components/Home/portfolio-section';
import PartnerSection from './components/Home/partners-section';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function BodyHome (props) {

    return (
        <div className="body-home-container">
            <div className="hero-container">
                <div className="hero-container-flex">
                    <div className="hero-container-item">
                        <HeroCarousel carouselProps={carouselProps} />

                        {/* <div className="hero-cover-flex">
                            <div className="hero-cover-item">
                                <div className="slide-text-btn-cover">
                                    <div className="slide-text-cover">
                                        <h2 className="slide-text">Quality Printing and Branding Services</h2>
                                    </div>
                                    <div className="slide-subtext-cover">
                                        <p className="slide-subtext">Carouse Subtext One</p>
                                    </div>
                                    <div className="slide-btn-cover">
                                        <div className="btn-cover-flex">
                                            <div className="btn-cover-item"></div>
                                            <div className="btn-cover-item"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-cover-item">
                                <div className="slide-image-cover-flex">
                                    <div className="slide-image-cover-item">
                                        <img className="slide-img" src={IMAGES.src.surebrandProducts.shirt6} alt={'Carousel Images'} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="home-about-us-container">
                <div className="home-about-us-container-flex">
                    <div className="home-about-us-container-item">
                        <AboutUsSection />
                    </div>
                </div>
            </div>
            <div className="home-services-container">
                <div className="home-services-container-flex">
                    <div className="home-services-container-item">
                        <div className="bg-svg-overlay-icon-cover">
                            <div className="svg-overlay-icon-cover-flex">
                                <div className="svg-overlay-icon-cover-flex-item">
                                    <IconButton className="svg-overlay-icon-btn">
                                        <KeyboardArrowDownIcon className="svg-overlay-icon" />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <ServiceSection />
                    </div>
                </div>
            </div>
            <div className="home-portfolio-container">
                <div className="home-portfolio-container-flex">
                    <div className="home-portfolio-container-item">
                        <PortfolioSection />
                    </div>
                </div>
            </div>
            <div className="home-partners-container">
                <div className="home-partners-container-flex">
                    <div className="home-partners-container-item">
                        <PartnerSection />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../Routes';
import { Images as IMAGES } from '../../../../Images';
import PortfolioSectionCarousel from './portfolio-section-carousel';

export default function PortfolioSection (props) {

    const portfolioProps = {

        carouselProps: [
            {portfolioName: 'Shirt Prints', portfolioImage: IMAGES.src.surebrandProducts.shirt6},
            {portfolioName: 'Bag Prints', portfolioImage: IMAGES.src.surebrandProducts.bag2},
            {portfolioName: 'Umbrella Prints', portfolioImage: IMAGES.src.surebrandProducts.umbrella2},
            {portfolioName: 'Mug Prints', portfolioImage: IMAGES.src.surebrandProducts.mug3},
            {portfolioName: 'Hood Prints', portfolioImage: IMAGES.src.surebrandProducts.hood2},
            {portfolioName: 'Water bottle Prints', portfolioImage: IMAGES.src.surebrandProducts.waterBottle}
        ]
    }

    return (
        <div className="home-portfolio-cover-flex">
            <div className="home-portfolio-cover-item">
                <div className="portfolio-text-cover-flex">
                    <div className="portfolio-text-cover-item">
                        <div className="text-header-cover">
                            <h2 className="header-title">Latest Work</h2>
                        </div>
                        <div className="text-subheader-cover1">
                            <h2 className="header-subtitle"><b>Sure Branding Nigeria</b> is a printing company that liverage on latest technology to provide quality printing and branding services to meet your everyday occassion.</h2>
                        </div>
                        <div className="text-subheader-cover2">
                            <p className="header-subtitle">From parties, weddings, birthdays, campaigns, gifts, business, education whatever and wherever the occassion is, <b>sure branding</b> is committed to provide the best printing and branding services with a guaranteed customer satisfaction.</p>
                        </div>
                        <div className="text-link-cover">
                            <div className="link-cover-flex">
                                <div className="link-cover-item">
                                    <Link className="portfolio-link" to={ROUTES.gallery}>View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-portfolio-cover-item">
                <PortfolioSectionCarousel portfolioProps={portfolioProps} />
            </div>
        </div>
    )
}
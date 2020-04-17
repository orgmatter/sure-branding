import React from 'react';
import Carousel from 're-carousel';
import Buttons from '../Carousel/carousel-button';
import IndicatorDots from '../Carousel/carousel-indicator-dots';
import { Link } from 'react-router-dom';
import { Routes as ROUTES } from '../../../../../Routes';


export default function PortfolioSectionCarousel ({portfolioProps}) {
    
    const { carouselProps } = portfolioProps;

    const carouselItems = carouselProps.map((carouselProp, index) => {
        
        return (
            <div className="portfolio-carousel-items" key={index}>
                <div className="portfolio-overlay-cover">
                    <div className="portfolio-overlay-link-cover">
                        <Link className="portfolio-carousel-link" to={ROUTES.gallery}>
                            <div className="portfolio-link-props-cover-flex">
                                <div className="portfolio-link-props-cover-item">
                                    <h2 className="portfolio-carousel-name">{carouselProp.portfolioName}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="portfolio-image-cover-flex">
                    <div className="portfolio-image-cover-item">
                        <img className="portfolio-img" src={carouselProp.portfolioImage} alt="Portfolio Image" />
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="portfolio-carousel-flex">
            <div className="portfolio-carousel-item">
                <Carousel className="portfolio-carousel-cover" loop auto widgets={[IndicatorDots, Buttons]}>
                    {carouselItems}
                </Carousel>
            </div>
        </div>
    )
}
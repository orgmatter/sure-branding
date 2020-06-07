import React from 'react';
import Carousel from 're-carousel';
import Buttons from './carousel-button';
import IndicatorDots from './carousel-indicator-dots';

export default function HeroCarousel ({carouselProps}) {

   const HERO_CAROUSEL_ITEMS = carouselProps.map((slide, index) => (
        <div key={index} className="hero-cover-flex">
            <div className="hero-cover-item">
                <div className="slide-text-btn-cover">
                    <div className="slide-text-cover">
                        <h2 className="slide-text" dangerouslySetInnerHTML={{__html: slide.text}}></h2>
                        <h2 className="slide-text1" dangerouslySetInnerHTML={{__html: slide.text1}}></h2>
                        <h2 className="slide-text2" dangerouslySetInnerHTML={{__html: slide.text2}}></h2>
                        <h2 className="slide-text3" dangerouslySetInnerHTML={{__html: slide.text3}}></h2>
                    </div>
                    <div className="slide-subtext-cover">
                        <p className="slide-subtext">{slide.subtext}</p>
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
                <div className="slide-image-cover-flex" id={`slide_image_cover_flex_${index}`}>
                    <div className="slide-image-cover-item" id={`slide_image_cover_item_${index}`}>
                        <img className="slide-img" id={`slide_img_${index}`} src={slide.image} alt={'Carousel Images'} />
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        // <Carousel className="hero-carousel-cover" loop auto widgets={[IndicatorDots]}>
        //     { HERO_CAROUSEL_ITEMS }
        // </Carousel>
        <div className="hero-carousel-cover">
            { HERO_CAROUSEL_ITEMS }
        </div>
    )
}

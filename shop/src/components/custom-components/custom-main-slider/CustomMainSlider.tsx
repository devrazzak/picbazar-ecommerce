import React from 'react';
import {Navigation, Swiper, SwiperSlide} from "@/components/ui/slider";
import Img from './static/img/slider1.jpg'
import styles from '../CustomMainSlider.module.css'

const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
    },
    580: {
        slidesPerView: 1,
    },
    1024: {
        slidesPerView: 1,
    },
    1920: {
        slidesPerView: 1,
    },
};

function CustomMainSlider() {
    return (
        <div>
            <Swiper
                    id="offer"
                    //TODO: need discussion
                    loop={true}
                    breakpoints={offerSliderBreakpoints}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                    }}
                >
                    <SwiperSlide>
                       <div className={styles.main_slider} style={{backgroundImage: `url(${Img.src})`}}>
                            <div>
                                <h2>Trendy & Unique <br />
                                    Collection</h2>
                            </div>
                       </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}

export default CustomMainSlider;
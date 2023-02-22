import React from 'react';
import {useTranslation} from "next-i18next";
import {usePopularProducts} from "@/framework/product";
import {Product} from "@/types";
import {Navigation, Swiper, SwiperSlide} from "@/components/ui/slider";
import ProductCard from "@/components/products/cards/card";
import {ArrowNext, ArrowPrev} from "@/components/icons";
import styles from '../CustomMainSlider.module.css'

const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    580: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 16,
    },
    1920: {
        slidesPerView: 5,
        spaceBetween: 24,
    },
};
function CustomPopularProductSlider() {
    const {t} = useTranslation();
    let variables: any;
    variables = {
        language:"en",
        limit:10,
        type_slug:"furniture",
        with:"type;author"
    }
    const { products, isLoading, error } = usePopularProducts(variables);
    const productsItem: Product[] = products;

    return (
        <div className="px-6 py-5 border-t md:p-8 border-border-200">
            <div className="relative">
                <h2 className={styles.popular_heading}>Popular Product</h2>
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
                    {productsItem?.map((product, id) => (
                        <SwiperSlide key={id}>
                            {/*<Image*/}
                            {/*    className="w-full h-auto"*/}
                            {/*    src={d.original}*/}
                            {/*    layout="responsive"*/}
                            {/*    width="580"*/}
                            {/*    height="270"*/}
                            {/*/>*/}

                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer prev top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent"
                    role="button"
                >
                    <span className="sr-only">{t('common:text-previous')}</span>
                    <ArrowPrev width={18} height={18}/>
                </div>
                <div
                    className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent"
                    role="button"
                >
                    <span className="sr-only">{t('common:text-next')}</span>
                    <ArrowNext width={18} height={18}/>
                </div>
            </div>
        </div>
    )
}

export default CustomPopularProductSlider;
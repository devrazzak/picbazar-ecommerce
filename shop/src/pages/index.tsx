import CustomLayout from "@/components/layouts/custom-layout";
import CustomPopularProductSlider from "@/components/custom-components/custom-popular-produc-slider/CustomPopularProductSlider";
import CustomMainSlider from "@/components/custom-components/custom-main-slider/CustomMainSlider";
import BestProduct from "@/components/custom-components/best-product/BestProduct";
import CartCounterIconButton from "@/components/cart/cart-counter-icon-button";
import CartCounterButton from "@/components/cart/cart-counter-button";
import {useEffect} from "react";
import client from "@/framework/client";
import {GetStaticPaths} from "next";
import invariant from "tiny-invariant";


const Home = () => {
    return (
        <div>
            <CustomMainSlider/>
            <CustomPopularProductSlider/>
            <BestProduct/>
            <CartCounterButton/>
        </div>
    )
}

export default Home;


Home.getLayout = function getLayout(page: React.ReactElement){
    return <CustomLayout>{page}</CustomLayout>
}
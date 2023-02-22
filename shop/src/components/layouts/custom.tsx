import type { HomePageProps } from '@/types';
import Banner from "@/components/banners/banner";
import PromotionSliders from "@/components/promotions/promotions";
import FilterBar from "@/components/layouts/filter-bar";
import {Element} from "react-scroll";
import Categories from "@/components/categories/categories";
import ProductGridHome from "@/components/products/grids/home";

export default function CustomLayout({ variables }: HomePageProps) {
    return (
        <>
            <FilterBar variables={variables.categories} />
            <Element
                name="grid"
                className="flex border-t border-solid border-border-200 border-opacity-70"
            >
                <Categories layout="custom" variables={variables.categories} />
                <ProductGridHome
                    className="px-4 pb-8 lg:p-8"
                    variables={variables.products}
                />
              </Element>
        </>
  )
}

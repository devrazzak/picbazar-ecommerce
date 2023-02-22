import React from 'react';
import {useTranslation} from "next-i18next";
import {useProducts} from "@/framework/product";
import {Product} from "@/types";
import {useRouter} from "next/router";
import ProductCard from "@/components/products/cards/card";
import styles from '../CustomMainSlider.module.css'

function BestProduct() {
    const {t} = useTranslation();
    let variables: any;
    variables = {limit:10, type: 'furniture'}
    const { query } = useRouter();
    const { products, loadMore, isLoadingMore, isLoading, hasMore, error } = useProducts(variables);
    const productsItem: Product[] = products;
    return (
        <div className={styles.best_sell_product}>
            <h2>Best Selle Products</h2>
            <div className="row">
                {productsItem.map((product) => (
                    <>
                        <div className={styles.grid}>
                            <ProductCard product={product} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default BestProduct;
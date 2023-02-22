import React from 'react';
import {NextPageWithLayout} from "../../types";
import {InferGetStaticPropsType} from "next";
import { getStaticPaths, getStaticProps } from '@/framework/home-pages.ssr';
// export { getStaticPaths, getStaticProps };

const Hello =()  => {
    // console.log('variables', variables)
    return(
        <div>
            sliders
        </div>
    )
}

export  default Hello;
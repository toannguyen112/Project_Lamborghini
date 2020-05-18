import React, { Component } from 'react'
import Banner from '../component/Banner/Banner'
import Carousel from '../component/Carousel/Carousel';
import BestSeller from '../component/BestSeller/BestSeller';
import Special from '../component/Special/Special';
import BannerBottom from '../component/BannerBottom/BannerBottom';
import Footer from '../component/Footer/Footer';

export class HomePage extends Component {



    render() {
        return (
            <div className="warpperBodyRigth">

                <Carousel />
                <Banner />
                <BestSeller />
                <Special />
                <BannerBottom />
                <Footer />
            </div>


        );
    }
}

export default HomePage

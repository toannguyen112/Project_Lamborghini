import React, { Component } from 'react'
import Carousel from '../component/Carousel/Carousel'
import TitlePage from '../component/TitlePage/TitlePage'
import ProductItem from '../component/ProductItem/ProductItem'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Footer from '../component/Footer/Footer';
export default class MenCollection extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <Carousel />
                <TitlePage title="SPRING/SUMMER 20" />
                <OwlCarousel className="owl-theme" loop items={4}  >
                    <ProductItem />
                </OwlCarousel>

                <Footer />
            </div>
        )
    }
}

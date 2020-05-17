import React, { Component } from 'react'
import Banner from '../component/Banner/Banner'
import Carousel from '../component/Carousel/Carousel';

export class HomePage extends Component {



    render() {
        return (
            <div className="warpperBodyRigth">

                <Carousel />
                <Banner />



            </div>

        );
    }
}

export default HomePage

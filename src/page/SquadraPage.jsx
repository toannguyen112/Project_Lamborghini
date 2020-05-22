import React, { Component } from 'react'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb'
import Banner from '../component/Banner/Banner'
import ProductList from '../component/ProductList/ProductList'
import SpecialImage from '../component/SpecialImage/SpecialImage'
const img = {
img1: "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-1861-02.jpg",
img2: "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-1861-03.jpg",

}
const imgSpecial = 'https://static.lamborghinistore.com/media/widgets/resized/767x/LMB-1861-04.jpg'
export default class SquadraPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <Breadcrumb title={"SquadraPage"} />
                <Banner img={img} />
                <ProductList history={this.props.history} title={"squadra  corse "} />
                <SpecialImage  img={imgSpecial} />
            </div>
        )
    }
}

import React, { Component } from 'react'
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class BackpackBagsPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
        <Breadcrumb title={"BACKPACK AND BAGS"} />
        <TitlePageContainer title={"BACKPACK AND BAGS"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"BackpackBags"}
        />
        <Footer />
      </div>
        )
    }
}

import React, { Component } from 'react'
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import  ViewDisplayProductContainer  from "../container/ViewDisplayProductContainer";
import  TitlePageContainer  from "../container/TitlePageContainer";
export default class BabyPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <Breadcrumb title={"BABY"} />
                <TitlePageContainer title={"BABY"} />
                <ViewDisplayProductContainer />
            </div>
        )
    }
}

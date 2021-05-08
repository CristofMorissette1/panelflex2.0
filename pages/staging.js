import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class LightingPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="stagingHeaderContainer">
                    <h1 className="pclMainTitle">Staging</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex supports clients' requirement to point to point, power up or program test their panels before shipping, and is eager in providing them the most pleasant testing experience. Customers are welcome to drop by any time during regular business hours to follow up on their projects. Private test rooms are available for smaller panels. An upgraded 3500sqft bay, which is separate from the production floor and includes a quiet conference room, offices, and lunch area, is offered for troubleshooting larger panels. Our clients appreciate our flexibility in assisting them in their panel testing needs.</p>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Panelflex can provide up to 7000sqft bay of dedicated superior testing/staging facility for larger projects. The private, quiet, and secure testing bay is available 24 / 7, for our customers' convenience to program and troubleshoot their panels. The bay, equipped with furnished office space, conference room, and lunch area, can be reserved for long term staging.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LightingPanels;
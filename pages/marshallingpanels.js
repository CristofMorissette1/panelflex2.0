import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class MarshallingPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="marshallingHeaderContainer">
                    <h1 className="pclMainTitle">DCS Marshalling Panels</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelfllex promises industry leading quality in manufacturing custom marshalling Distributed Control Systems (DCS) panels. Our staff provides estimates, project coordination and procurement, and our shop workers are experienced in installing DCS systems.</p>
                    <h2 className="pclTitleSmall">Some of the services offered</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Assembly, wiring, and product testing</li>
                        <li className="pclListItem">Drawing Markup - SSDR</li>
                        <li className="pclListItem">Packaging and Quick Shipping</li>
                        <li className="pclListItem">Pictures of your Panel</li>
                        <li className="pclListItem">Test and Progress reports</li>
                        <li className="pclListItem">Superior Customer Service</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MarshallingPanels;
import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class LightingPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="lightingHeaderContainer">
                    <h1 className="pclMainTitle">Lighting Control Panels</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex offers custom contactor lighting control system panels for your lighting control needs. The lighting contactor panels provide automatic and manual on/off control for exterior facility lighting, building exterior lights, security lighting, interior safety lighting and various other lighting applications. Our contactor panels include electrically operated, mechanically held lighting contactors.</p>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Contactors are utilized are specifically used for lighting applications, including metal halide, mercury vapor, quartz halogen, tungsten or fluorescent lighting. As the contactor(s)is mechanically held, the panels offer a quite operation and long life expectancy. We build to suit your design needs providing multi-pole contactor configurations in a various enclosures including NEMA 12, 3R, 4 and 4X.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LightingPanels;
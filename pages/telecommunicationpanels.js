import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class TelecommunicationPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="teleHeaderContainer">
                    <h1 className="pclMainTitle">Instrument Racks/Telecommunication Panels</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex wide services are not limited to custom control panel assembly. We offer a wide range of manufacturing custom instrumentation transmitter racks and telecommunication / network panels.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TelecommunicationPanels;
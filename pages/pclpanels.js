import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class PclPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="pclHeaderContainer">
                    <h1 className="pclMainTitle">PCL Panels</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex builds a variety of PLC panels for refrigeration, compression, plant facilities, waste water and many other applications.</p>
                    <h2 className="pclTitleSmall">Cabinet and Construction</h2>
                    <p className="pclIntroText">All PLC panels are fabricated in standard NEMA 12/4/4X enclosures assembled by experienced technicians. Panel assemblies are CSA General Purpose or CSA Class I Div 2 certified. cUL is available as an option (where applicable).</p>
                    <h2 className="pclTitleSmall">I/O Wiring</h2>
                    <p className="pclIntroText">All PLC I/O points are wired at our shop to terminal blocks for use in terminating customer-supplied pilot devices or wiring from field devices. All wiring internal to the panel is factory-tested for continuity prior to shipment.</p>
                    <h2 className="pclTitleSmall">Specific Components Used</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Enclosures - EEMAC 3, 3R, 4, 4X</li>
                        <li className="pclListItem">Auxiliary 24VDC Power Supplies</li>
                        <li className="pclListItem">Circuit Breakers</li>
                        <li className="pclListItem">Programmable Controllers</li>
                        <li className="pclListItem">Receptacle</li>
                        <li className="pclListItem">Terminal blocks and accessories</li>
                        <li className="pclListItem">Fuseblocks</li>
                        <li className="pclListItem">Din-Rail</li>
                        <li className="pclListItem">Wireway</li>
                        <li className="pclListItem">Relay</li>
                        <li className="pclListItem">Light Package</li>
                        <li className="pclListItem">Universal Power Supply (UPS)</li>
                        <li className="pclListItem">Ethernet Switch</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PclPanels;
import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class Combinerbox extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="commercialHeaderContainer">
                    <h1 className="pclMainTitle">PV Combiner Box</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">CSA approved 1000VDC & 1500VDC Panelflex PV system Combiner Boxes. Combiner Boxes can be customized to fit the solar integrators’ specific needs.</p>
                    <h2 className="pclTitleSmall">Some Features include:</h2>
                    <ul className="pclList">
                        <li className="pclListItem">CSA approved</li>
                        <li className="pclListItem">Up to 36 input circuits</li>
                        <li className="pclListItem">90C terminals</li>
                        <li className="pclListItem">NEMA 3R, 4 & 4X enclosures</li>
                    </ul>
                    <h2 className="pclTitleSmall">Some Available Options:</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Pre-terminated input conductors</li>
                        <li className="pclListItem">Transient surge suppression</li>
                        <li className="pclListItem">Breather and drain vents</li>
                        <li className="pclListItem">Padlockable enclosures</li>
                        <li className="pclListItem">Provisions for compression lugs</li>
                        <li className="pclListItem">Floating / Bi-polar configuration</li>
                        <li className="pclListItem">Input cable whip assemblies</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Combinerbox;
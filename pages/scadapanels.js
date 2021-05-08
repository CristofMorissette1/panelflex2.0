import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class ScadaPanels extends Component {
    render() {
        return (
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="scadaHeaderContainer">
                    <h1 className="pclMainTitle">Scada Panels</h1>
                    <img className="pclLandingImage" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/pcl%20panel%20page%2Fpcl%20panel%20landing.jpg?alt=media&token=b6d7ddc7-bd10-461e-b261-a0883ddbbb80"/>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Whether the communication medium is HMI or device selections, Panelflex’s SCADA experience will provide the best value and fit for your application. Panelflex has experience in automation solutions which include SCADA systems for any process catering to a variety of industrial and commercial projects from small scope to large projects. We manufacture CSA Genereal Purpose of Class I Div 2 SCADA panels for new installations as well as system retrofits for existing fields.</p>
                    <h2 className="pclTitleSmall">Product Applications</h2>
                    <ul className="pclList">
                        <li className="pclListItem">Wellhead Control</li>
                        <li className="pclListItem">Oil Theft Prevention</li>
                        <li className="pclListItem">Full Machinery Monitoring & Control</li>
                        <li className="pclListItem">Pump Off Control</li>
                        <li className="pclListItem">Plunger Lift</li>
                        <li className="pclListItem">Chemical Injection Optimization</li>
                        <li className="pclListItem">Wellsite Emissions Reduction</li>
                        <li className="pclListItem">Optimized Gas Flow Production</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ScadaPanels;
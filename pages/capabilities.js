import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Capabilities extends Component {
    render() {
        return (
            <div className="capabilitiesMainContainer">
                <Header/>
                <p className="capabilitiesTitle">Production Capabilities</p>
                <div className="capabilitiesContainer">
                    <p className="capabilitiesTitleSmall">Panelflex is capable of completing many types of projects, including but not limited to:</p>
                    <ul className="capabilitiesList">
                        <li className="listItem">Plant PLC Panels</li>
                        <li className="listItem">BMS Panels</li>
                        <li className="listItem">SCADA Panels</li>
                        <li className="listItem">RTU Control Panels</li>
                        <li className="listItem">DCS Panels</li>
                        <li className="listItem">Lighting Contactor Panels</li>
                        <li className="listItem">Heat Trace Contactor Panels</li>
                        <li className="listItem">Remote I/O Panels</li>
                        <li className="listItem">Instrumentation Panels</li>
                        <li className="listItem">Process Panels</li>
                        <li className="listItem">Solar Pump Packaging</li>
                        <li className="listItem">HVAC Control Panels</li>
                        <li className="listItem">Custom Control</li>
                        <li className="listItem">Marshalling Panels</li>
                        <li className="listItem">Oil Well Controllers</li>
                        <li className="listItem">VFD Control Panels</li>
                        <li className="listItem">Combination Starters</li>
                        <li className="listItem">Booster Pump Panels</li>
                        <li className="listItem">Waste Water Control Panels</li>
                        <li className="listItem">Compressor Panels</li>
                        <li className="listItem">Staging</li>
                    </ul>
                    <p className="capabilitiesText">	Panelflex's manufacturing capabilities are the key to the implementation of any automation solution. Integral to this skill-set is the complete integration of design assistance, project management, procurement, fabrication, quality control and testing of automation solutions. Panelflex can assist in providing complete systems integration support for a broad array of industries.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Capabilities;
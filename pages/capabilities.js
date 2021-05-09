import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import Image from 'next/image';

class Capabilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check: false,
        };
      }
    
    changeCheck = () => {
    this.state.check?this.setState({check: false}):this.setState({check: true})
    }
    
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
                    <p className="capabilitiesText">Panelflex's manufacturing capabilities are the key to the implementation of any automation solution. Integral to this skill-set is the complete integration of design assistance, project management, procurement, fabrication, quality control and testing of automation solutions. Panelflex can assist in providing complete systems integration support for a broad array of industries.</p>
                    <p className="capabilitiesTitleSmall">Panelflex is proud to serve the following markets:</p>
                    <ul className="capabilitiesList">
                        <li className="listItem">Oil & Gas producers</li>
                        <li className="listItem">Equipment Fabricators</li>
                        <li className="listItem">Mining</li>
                        <li className="listItem">Drilling Contractors</li>
                        <li className="listItem">Municipalities</li>
                        <li className="listItem">Service Companies</li>
                        <li className="listItem">EPC's</li>
                        <li className="listItem">Utilities</li>
                        <li className="listItem">Forestry</li>
                    </ul>
                </div>
                {this.state.check?<div style={{position: 'fixed', bottom: '10px', right: '20px' }}><Chatbot />
                {/* <button style={{marginTop: '20px',marginRight: '0px', marginLeft: 'auto'}} onClick={this.changeCheck}>Open Chat</button> */}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ marginTop: '20px', backgroundColor: 'green', borderRadius: '50%', padding: '16px', marginRight: '0px', marginLeft: 'auto' }} onClick={this.changeCheck}>
                <img
                src="/cross.png"
                alt="PanelFlex.com"
                width={35}
                height={35}
                />
                </div>
                </div>
                </div>:
                // <button style={{position: 'fixed', bottom: '10px', right: '20px', }} onClick={this.changeCheck}>Open Chat</button>
                <div style={{position: 'fixed', bottom: '10px', right: '20px', backgroundColor: 'green', borderRadius: '50%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={this.changeCheck}>
                <img
                src="/chat-icon.png"
                alt="PanelFlex.com"
                width={55}
                height={55}
                />
                </div>
                }
                <Footer/>
            </div>
        )
    }
}

export default Capabilities;
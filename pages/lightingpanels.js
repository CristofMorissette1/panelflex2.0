import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import Image from 'next/image';

class LightingPanels extends Component {
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
            <div className="pclPanelsMainContainer">
                <Header/>
                <div className="lightingHeaderContainer">
                    <h1 className="pclMainTitle">Lighting Control Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Panelflex offers custom contactor lighting control system panels for your lighting control needs. The lighting contactor panels provide automatic and manual on/off control for exterior facility lighting, building exterior lights, security lighting, interior safety lighting and various other lighting applications. Our contactor panels include electrically operated, mechanically held lighting contactors.</p>
                    <img className="lightingPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Flighting%20pic.jpg?alt=media&token=0a0b546e-9f32-48f2-8255-6e9e8a29f39b"/>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Contactors are utilized are specifically used for lighting applications, including metal halide, mercury vapor, quartz halogen, tungsten or fluorescent lighting. As the contactor(s)is mechanically held, the panels offer a quite operation and long life expectancy. We build to suit your design needs providing multi-pole contactor configurations in a various enclosures including NEMA 12, 3R, 4 and 4X.</p>
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

export default LightingPanels;
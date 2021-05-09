import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import Image from 'next/image';

class Combinerbox extends Component {
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
                <div className="commercialHeaderContainer">
                    <h1 className="pclMainTitle">PV Combiner Box</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">CSA approved 1000VDC & 1500VDC Panelflex PV system Combiner Boxes. Combiner Boxes can be customized to fit the solar integrators’ specific needs.</p>
                    <img className="pvPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpv%20pic.jpg?alt=media&token=497ef395-e994-4c37-bf67-4b6ba9f7c09e"/>
                    <h2 className="pclTitleSmall">Some Features include:</h2>
                    <ul className="pclList">
                        <li className="pclListItem">CSA approved</li>
                        <li className="pclListItem">Up to 36 input circuits</li>
                        <li className="pclListItem">90C terminals</li>
                        <li className="pclListItem">NEMA 3R, 4 & 4X enclosures</li>
                    </ul>
                    <h2 className="pclTitleSmall">Some Available Options:</h2>
                    <img className="pvPic2" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fpv%20pic2.jpg?alt=media&token=b4d31b1a-5aa0-4e58-ae90-1203eb51cee4"/>
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

export default Combinerbox;
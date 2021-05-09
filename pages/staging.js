import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';


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
                <div className="stagingHeaderContainer">
                    <h1 className="pclMainTitle">Staging</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                <img className="stagingPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fprotectionpic.jpg?alt=media&token=edfa3570-c034-4fad-a48f-66de8b7144d1"/>
                    <p className="pclIntroText">Panelflex supports clients' requirement to point to point, power up or program test their panels before shipping, and is eager in providing them the most pleasant testing experience. Customers are welcome to drop by any time during regular business hours to follow up on their projects. Private test rooms are available for smaller panels. An upgraded 3500sqft bay, which is separate from the production floor and includes a quiet conference room, offices, and lunch area, is offered for troubleshooting larger panels. Our clients appreciate our flexibility in assisting them in their panel testing needs.</p>
                    <h2 className="pclTitleSmall">Some more information</h2>
                    <p className="pclIntroText">Panelflex can provide up to 7000sqft bay of dedicated superior testing/staging facility for larger projects. The private, quiet, and secure testing bay is available 24 / 7, for our customers' convenience to program and troubleshoot their panels. The bay, equipped with furnished office space, conference room, and lunch area, can be reserved for long term staging.</p>
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
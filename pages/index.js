import Head from 'next/head';
import { Component, createRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
       showServicesMenu: false,
    };
     this.showServicesMenu = this.showServicesMenu.bind(this);
  }
  
  changeCheck = () => {
    this.state.check?this.setState({check: false}):this.setState({check: true})
  }
  
  showServicesMenu(e) {
      e.preventDefault();
      if (this.state.showServicesMenu == false) {
      this.setState({
        showServicesMenu: true,
      });
    } else {
      this.setState({
        showServicesMenu: false,
      });
    }
  }

  render() {
    return (
      <div className="homeMainContainer">
        <Header/>         
        <div className="homeHeaderContainer">
          <h1 className="homeMainTitle">We Build Electrical Control Panels</h1>
          <h3 className="homeTitleSmall">PANELFLEX is a CSA approved, COR certified Custom Electrical Control Panel Solutions provider</h3>
          <div className="homeHeaderButtons">
            <a className="homeFirstButton" href="/contact">Request a quote</a>
            <a className="homeSecondButton" href="/products">What can we do</a>
          </div>
        </div>
        <div className="homeBodyContainer">
          <h1 className="homeBodyTitle">What Can We Do For You</h1>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">PANEL DESIGN & FABRICATION</h3>
            <p className="homeBodyText">The PANELFLEX team will help custom design industrial controls to your specific needs.  We treat projects of every size with the same dedication of excellence in our workmanship.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">INSTALLATION & SUPPORT AND CONTROLS SUPPORT/SERVICE</h3>
            <p className="homeBodyText">With the help of our industry partners we are able to offers turnkey solutions that include: -Install Support, - Programming, - Skid Construction.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">OEM BUILDS & PRIVATE LABELING</h3>
            <p className="homeBodyText">PANELFLEX helps our OEM customers in a variety of industrial fields to reduce their control system costs, improve efficiency and overall quality.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">CONTROLS SUPPORT/SERVICE</h3>
            <p className="homeBodyText">Support for your project is a priority at PANELFLEX. We are confident that any configuration made on our site is verified by our engineers as correct and is electrically sound.</p>
          </div>
          <a className="homeBodyButton" href="/products">View All Products</a>
        </div>
        <div className="homeMainCapabilitiesContainer">
          <div className="homeCapabilitiesContainer2">
            <h2 className="homeCapabilitiesContainerTitle">Our Capabilities</h2>
            <p className="homeCapabilitiesText">We serve as your panel building partner from concept to completion, solving tough electrical control challenges and helping businesses grow.</p>
            <a className="homeCapabilitiesButton" href="/capabilities">View All Capabilities</a>
          </div>
          <div className="homeCapabilitiesContainer3">
            <h2 className="homeCapabilitiesTitle">BUILD-TO-PRINT OR CUSTOM BUILDS</h2>
            <p className="homeCapabilitiesTextSmall">Our capabilities cover a broad range of industries and applications, and we are UL Listed as well as certified for hazardous locations. We have the experience and capacity to produce the highest quality project with the engineering expertise and customer service you deserve.</p>
            <h2 className="homeCapabilitiesTitle">COMPLETE TURNKEY SOLUTIONS</h2>
            <p className="homeCapabilitiesTextSmall">Having extensive capabilities allows PanelShop.com to take on a wide variety of custom projects of all sizes. Whatever your needs, PanelShop.com has the ability to make your project a success.</p>
            <h2 className="homeCapabilitiesTitle">CUSTOM PROGRAMMING</h2>
            <p className="homeCapabilitiesTextSmall">PANELFLEX will custom build far beyond the configurator selections to satisfy all customer needs—large and small.</p>
          </div>
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

export default Home;

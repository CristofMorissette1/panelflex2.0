import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import Image from 'next/image';


class DiscoverPfx extends Component {
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
            <div className="pfxMainContainer">
                <Header/>
                <div className="discoverHeaderContainer">
                    <h1 className="pfxMainTitle">Discover PanelFlex</h1>
                </div>
                <div className="pfxBodyContainer">
                    <h2 className="pfxTitleSmall">Our Vision</h2>
                    <p className="pfxText">The Leader at providing custom control panel solutions for industrial and commercial industries serving Mining, Oil and Gas, Manufacturing, Utility, Forestry and Municipality sectors.</p>
                    <h2 className="pfxTitleSmall">Our Values</h2>
                    <div className="pfxBodyContainerSmall">
                        <ul className="pfxList">
                            <p className="pfxListText">Do the right thing.. Act with</p>
                            <li className="pfxListItem">Integrity</li>
                            <li className="pfxListItem">Ethical Clarity</li>
                            <li className="pfxListItem">Trustworthiness</li>
                            <li className="pfxListItem">Respect</li>
                            <li className="pfxListItem">Honesty</li>
                        </ul>
                        <ul className="pfxList">
                            <p className="pfxListText">Inspire with Creativity...</p>
                            <li className="pfxListItem">Be Different</li>
                            <li className="pfxListItem">Work collaboratively with our business partners</li>
                            <li className="pfxListItem">Suggest ideas</li>
                            <li className="pfxListItem">Change is the catalyst to creativity</li>
                        </ul>
                        <ul className="pfxList">
                            <p className="pfxListText">Deliver on our commitments...</p>
                            <li className="pfxListItem">Health, safety & quality are leading by example</li>
                            <li className="pfxListItem">Commitment begins with open communication</li>
                            <li className="pfxListItem">On-time delivery</li>
                            <li className="pfxListItem">Do what we say and say what we do</li>
                        </ul>
                        <ul className="pfxList">
                            <p className="pfxListText">Be best in class...</p>
                            <li className="pfxListItem">Make the customer the focus of all we do</li>
                            <li className="pfxListItem">Build and evolve customer loyalty</li>
                            <li className="pfxListItem">Grow business performance</li>
                            <li className="pfxListItem">Attract, mentor and retain the best employees</li>
                        </ul>
                    </div>
                    <h2 className="pfxTitleSmall">Health & Safety</h2>
                    <p className="pfxText">Health, Safety and Environment (HSE) performance excellence is a top line goal for Panelflex. Our benchmark indicators are reflective of  our business partners expectations, peers, regulations as outlined by provincial and federal governments.<br/><br/>All employees are responsible and are be held accountable to meet and exceed our safety performance targets. Our management team is responsible to maintain a safe work environment, that employees are adequately trained and that our HSE policies and procedures are followed consistently.<br/><br/>Panelflex shares responsibility to work in a manner that will protect valued employees, the public and our environment from harm. We conform with all required governmental HSE regulations to meet minimum acceptable standard of HSE performance. Our commitment is to continuously improve our HSE performance and meet or exceed industry best practices.</p>
                    <h2 className="pfxTitleSmall">Environment</h2>
                    <p className="pfxText">Panelflex understands and appreciates the importance of environmental responsibility in all areas of our business where we can affect the protection of the environment. We are committed to complying with industry guidelines and specific government legislation in all of our daily functions. We will conduct our business in a manner that protects and encourages the health and vitality of the environment.<br/><br/>Our employees shall conduct their actions in a way that identifies risk and mitigates environmental negative impacts. It is the responsibility of all employees and managers to reduce their footprint on the environment by influencing responsible activities.</p>
                    <h2 className="pfxTitleSmall">Quality</h2>
                    <p className="pfxText">We are committed to provide products and services that meet or exceed our internal partners’ and external business partners requirements and to continuously improve our efficiency and value. We are committed to adding value to quality and continuously improving our own business processes. We strive to maintain a work environment that provides all employees with training, instructions and procedures to guide performed work practices correctly.</p>
                    <div className="pfxFacilityContainer">
                    <h2 className="pfxTitleSmall">Facility</h2>
                    <p className="pfxText">Panelflex is conveniently located in south east Calgary`s industrial park. We are located at Bay 9, 7408 40 Street SE, Calgary, AB,T2C-2L6.<br/><br/>Our facility allows for approximately 25,000 square feet of space where we execute panel assembly, testing, engraving, drafting, estimating and project management activities.<br/><br/>We are proud to offer our business partners a dedicated testing space to carry out inspection and testing on panels as well as complimentary Wi-Fi internet service.</p>
                    <div className="facilityImages">
                        <img className="facilityImage1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/discover%20pfx%2Ffacility%20image1.jpg?alt=media&token=707dc67a-e59c-48d4-bca4-2d057f3293ab"/>
                        <img className="facilityImage1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/discover%20pfx%2Ffacility2.jpg?alt=media&token=f9948afd-a54e-49f4-a1bf-558045b78c97"/>
                        <img className="facilityImage1" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/discover%20pfx%2Ffacility3.jpg?alt=media&token=ca89649b-bb8f-4930-a82e-035e8ccd542f"/>
                    </div>
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

export default DiscoverPfx;
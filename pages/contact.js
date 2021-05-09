import Head from 'next/head'
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SimpleMap from '../components/googlemaps';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import axios from 'axios'
import Chatbot from '../components/chatbot';
import Image from 'next/image';


class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeCheck = () => {
    this.state.check?this.setState({check: false}):this.setState({check: true})
    }

  handleSumbit(e) {
    e.preventDefault();

    const { firstName, lastName, phone, email, message} = this.state;

    const form = axios.post('http://localhost:3001/api/form', {
      firstName,
      lastName,
      phone,
      email,
      message
    })
    e.target.reset();
  }


  render() {
    return (
      <div className="ContactMainContainer">
        <Header/>
        <img className="contactImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fcontact%20image.jpg?alt=media&token=8e7061d9-76b8-44e7-a97c-83dce3edb951"></img>
            <div className="contactPageContainer">
              <div className="contactPageSideMenu">
                <div className="sideBarWebsite">
                  <h2 className="contactName">Son Nguyen</h2>
                  <p className="contactText">Director</p>
                  <p className="contactText">Cell: (403) 874-3978</p>
                  <p className="contactText">son.nguyen@panelflex.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Adham Jaber</h2>
                  <a className="contactText">Manager, Business Development</a>
                  <p className="contactText">Cell: (403) 481-1459</p>
                  <p className="contactText">adham.jaber@panelflex.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Tilak Dahanayake</h2>
                  <p className="contactText">Manager, Integration Technology</p>
                  <p className="contactText">Cell: (403) 279-8270</p>
                  <p className="contactText">tilak.dahanayake@panelflex.ca</p>
                </div>
                <h1 className="contactSideBarTitle">Project Managers</h1>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Thinh (Tin) Bao</h2>
                  <p className="contactText">Cell: (403) 279-8273</p>
                  <p className="contactText">thinh.bao@panelflex.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Sheena Gibson</h2>
                  <p className="contactText">Cell: (403) 279-8205</p>
                  <p className="contactText">sheena.gibson@panelflex.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Vineeth Kumar, P.Eng</h2>
                  <p className="contactText">Cell: (403) 475-9400</p>
                  <p className="contactText">vineeth.kumar@panelflex.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <h2 className="contactName">Conor Murphy</h2>
                  <p className="contactText">Cell: (403) 475-9402</p>
                  <p className="contactText">conor.murphy@panelflex.ca</p>
                </div>
              </div>
            <Form className="mainContactForm" onSubmit={this.handleSumbit}>
              <p className="contactTitle">Please share your information with us for a detailed response:</p>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="firstName" 
                  placeholder="First Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="organizationName"
                  placeholder="Organization Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="organizationWebsite"
                  placeholder="Organization Website"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="messageGroupForm">
                <textarea 
                  type="textarea"
                  name="message"
                  placeholder="How can we help you?"
                  onChange={this.handleChange} />
              </FormGroup>
              <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
            </Form>
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
        <SimpleMap />
        <Footer/>
      </div>
    )
  }
}

export default Contact;
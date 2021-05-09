import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';


class ScadaPanels extends Component {
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
                <div className="scadaHeaderContainer">
                    <h1 className="pclMainTitle">Scada Panels</h1>
                </div>
                <hr className="border1"/>
                <div className="pclBodyContainer">
                    <p className="pclIntroText">Whether the communication medium is HMI or device selections, Panelflex’s SCADA experience will provide the best value and fit for your application. Panelflex has experience in automation solutions which include SCADA systems for any process catering to a variety of industrial and commercial projects from small scope to large projects. We manufacture CSA Genereal Purpose of Class I Div 2 SCADA panels for new installations as well as system retrofits for existing fields.</p>
                    <h2 className="pclTitleSmall">Product Applications</h2>
                    <img className="scadaPic" src="https://firebasestorage.googleapis.com/v0/b/panelflex-7663b.appspot.com/o/products%20%26%20services%2Fscada%20pic.jpg?alt=media&token=9c0477b5-b4ce-49f1-bbd6-d9b9fc4bc8fb"/>
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

export default ScadaPanels;
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
class Chatbot extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      position: ''
    };
  }
  setName = (val) => {
    this.setState({name: val})
  }
  setEmail = (val) => {
    this.setState({email: val})
  }
  setCompany = (val) => {
    this.setState({company: val})
  }
  setPosition = (val) => {
    this.setState({position: val})
  }
  render() {
    var n = "";
    function ValidateEmail(inputText){
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(inputText.match(mailformat)){
        alert("Valid email address!");
        // this.setEmail(input.value)
        return 7;
      }else{
        alert("You have entered an invalid email address!");
        return 6;
      }
    }
    const sendMail = async () => {
      console.log("Ander name", this.state)
      var name = this.state.name;
      var email = this.state.email;
      var company = this.state.company;
      var position = this.state.position;
      const rawResponse = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, email: email, company: company, position: position})
  });
    }
    return(
      <ChatBot
        steps={[
          {
            id: '1',
            message: "Got any questions? I'm happy to help.",
            trigger: () => {return 2},
          },
          {
            id: '2',
            message: "Before we get started, what's your name?",
            trigger: '3',
          },
          {
            id: '3',
            user: true,
            trigger: (input) => {
              n = input.value
              this.setName(input.value)
              return 4
            },
          },
          {
            id: '4',
            message: `Thanks, Can I get your email address, in case we get disconnected?`,
            trigger: () => {return 5},
          },
          {
            id: '5',
            user: true,
            trigger: (input) => {if(ValidateEmail(input.value)==7){this.setEmail(input.value);return 7}else return 6;},
          },
          {
            id: '6',
            message: "Hmm, this doesn't look like an email address. Could you try entering it again?",
            trigger: () => {console.log('company');return 8},
          },
          {
            id: '8',
            user: true,
            trigger: (input) => {return ValidateEmail(input.value);},
          },
          {
            id: '7',
            message: "Great. And where's your company located?",
            trigger: () => {return 9},
          },
          {
            id: '9',
            user: true,
            trigger: (input) => {
              this.setCompany(input.value);
              return 10},
          },
          {
            id: '10',
            message: "And finally, what's your job title?",
            trigger: () => {return 11},
          },
          {
            id: '11',
            user: true,
            trigger: (input) => {
              this.setPosition(input.value);
              return 12},
          },
          {
            id: '12',
            message: "Thanks. We’ve passed along this information. A member of our team will be in touch soon.",
            trigger: () => {sendMail()}
            // end: true,
          }

        ]}
      />
    )
  }
}
export default Chatbot;

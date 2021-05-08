const express = require('express');
const app = express();
var bp = require('body-parser');
const cor = require("cors");
const nodemailer = require("nodemailer");
const { getDomainLocale } = require('next/dist/next-server/lib/router/router');

app.use(cor())
app.use(express.json());
app.use(express.urlencoded());
app.use(bp())

app.post('/api', async (req, res) => {

  // format of the email
    const output = `
    <p>You have a new chat data</p>
    <h3>Chat Data</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Company: ${req.body.company}</li>
        <li>Position: ${req.body.position}</li>
    </ul>
    `;

    //Nodemailer
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        // port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "", // please enter your email address in double quotes
          pass: "",  // please enter your password in double quotes
        },
        tls:{
            rejectUnauthorized: false
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Panelflex" <>',  // please enter your email address in angle brakets
        to: "",  // please enter the reciever email address in double quotes
        subject: "Chat Detail", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      }, (error, info) => {
            if(error){
                return console.log(error)
            }
          console.log("Message sent: %s", info.messageId);        
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      });
    
})

app.listen(3000, () => {
    console.log('Example app listening at http://localhost')
})
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Slide from 'react-reveal/Slide';
import './Contactcontent.css'
import { init } from 'emailjs-com';


export default function Contactcontent() {




  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [message, setmessage] = useState("");

  let submit = (e) => {
    e.preventDefault()
    console.log(process.env.REACT_APP_USER_ID)
    console.log(process.env.REACT_APP_SERVICE_ID)
    console.log(process.env.REACT_APP_TEMPLATE_ID)

    init(process.env.REACT_APP_USER_ID)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent", response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

  }


  return <>
    <div className="Contactcontent">

      <div className="Contactcontent__Title justify-content" >
        <Slide right><h3>Contact Me</h3></Slide>
      </div>
      <Slide bottom>
        <form onSubmit={submit}>
          <div className="row Contactcontent__Row">
            <div className="col-3">
              <div class="form-group ">

                <input type="name" name="name" id="Forname" class="form-control" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__Row">
            <div className="col-3">
              <div class="form-group ">

                <input type="email" name="email" id="email" class="form-control" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__Row">
            <div className="col-5">
              <div class="form-group ">

                <input type="text" name="message" id="message" rows="1" class="form-control" value={message} onChange={(e) => setmessage(e.target.value)} placeholder="Your Message" style={{ height: "100px" }} ></input>
              </div>
            </div>
          </div>
          <div className="row Contactcontent__RowButton" >
            <div class="form-group">
              <button class="btn btn-outline-dark" type="submit" value="Send" style={{ backgroundColor: "#1A1D53", color: "white" }}>Send</button>&ensp;
              <button type="reset" value="Reset" class="btn btn-outline-dark" style={{ backgroundColor: "#1A1D53", color: "white" }}>Clear</button>
            </div>




          </div>

        </form>
      </Slide>
    </div>

    <div className="contacticon">
      <a href="https://github.com/banupriyamohanraj" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" /></a>
      <a href="https://www.linkedin.com/in/banu-priya-mohanraj-74331b19b" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" /></a>
      <a href="banupriyamohanrajoffl@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png" alt="email" /></a>

    </div>
    
  </>
}
import React from 'react'
import { Container, Row, Col } from "../../components/Grid";

const ContactScreen = () => {
    return (
        <div>
             <h1>Contact</h1>
             <div className="contact"></div>
            
                <div className="form-group">
                  <label for="formGroupExampleInput">Name</label>
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name">
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput2">Email</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email">
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                  </div>
                <button type="submit" className="btn btn-lg btn-outline-light" id="ContactButton">Submit</button>
        
              
        </div>
    )
}

export default ContactScreen

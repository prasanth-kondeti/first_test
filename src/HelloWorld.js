import React from 'react'
import './helloWorld.css'

class HelloWorld extends React.Component {
    render() {
        return (  
    <div className="container">
            <div className="left"> 
            {/* <img src={require('./images_folder/logo.png')} /> */}
              <h1>BEEHIVE</h1>
            </div>
            <div className="right">
              <p>Hi Riley Cooper!</p>
              <p>Welcome To Beehive!</p>
              <button>Proceed</button>
            </div>
        </div>












        );
    }
}
export default HelloWorld;
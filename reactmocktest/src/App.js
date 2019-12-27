import React  from 'react';
import Header from './components/header.js';
import Tabs   from './components/tabs.js';
import Inputs from './components/tab1.js';
import Review from './components/tab2.js';
import Download from './components/tab3.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
        fname : "", //firstname 
        lname : "", //lastname
        cname : "", //company
        email : "", 
        phone : "", 
        imgsrc : "", //image for the download
    }
    this.changeInfo = this.changeInfo.bind(this);
  }

  //function to pass into the child components 
  changeInfo(name, text){
    this.setState({
      [name] : text, 
    });  
  }


  render(){
    return (
    <div>

      <Header/>
      {/*a hider that hides the main content until start here button is pushed*/}
      <div id = "hider">
      <Tabs>
        <div label="START">
          <Inputs 
            changeInfo = {this.changeInfo}
          />
        </div>
        <div label = "REVIEW">
          <Review
            fname = {this.state.fname}
            lname = {this.state.lname}
            cname = {this.state.cname}
            email = {this.state.email}
            phone = {this.state.phone}
            changeInfo = {this.changeInfo}
          />
        </div>
        <div label="DOWNLOAD">
          <Download
            imgsrc = {this.state.imgsrc}
          />
        </div> 
      </Tabs>
      </div>
    </div>
    );
  }
}

export default App;

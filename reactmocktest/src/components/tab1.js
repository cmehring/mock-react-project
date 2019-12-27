import React from 'react';
import $ from 'jquery';

class Inputs extends React.Component {
//it's a lot, but a lot is just verifying information / checking to see if information is filled
    constructor(){
        super()
        this.state = {
            fname : "",
            lname : "",
            cname : "",
            email : "",
            phone : "",
            error : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.emailChecker = this.emailChecker.bind(this);
    }

    emailChecker(text){
         // set endpoint and your access key
        var access_key = 'fce73d6c14429643d6b8f147273bbb82';
        var email_address = text;

        // verify email address via AJAX call
        $.ajax({
        url: 'http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address,   
        dataType: 'jsonp',
        success: function(json){

        // Access and use your preferred validation result objects
        console.log(json.format_valid);
        console.log(json.smtp_check);
        if (JSON.stringify(json.format_valid) === "false" || JSON.stringify(json.smtp_check) === "false" )
            alert("Email is not valid.");
        else {
            //the overlay 
            $('body').append(
                '<div id="overlay">' 
                + '<h2 id="loading">Click the REVIEW tab to see your awesome card...</h2>'
                + '</div>'
            ); 
            
            setTimeout(function(){
              $('#overlay').remove();
            }, 2000); //2 seconds
        }}});    
    }


    handleSubmit(event){
        // check if everything is filled, if not alert the user
        event.preventDefault()
        if (this.state.fname === "" || this.state.lname === "" || this.state.cname === "" || this.state.phone === "" || this.state.email === ""){
                this.setState({
                    error : "There is still information unfillled."
                });
        }
        else {
        //check the email using mailboxlayer
        this.emailChecker(this.state.email);
        //set the state for the App.js to pass to the second tab
        this.props.changeInfo("fname", this.state.fname);
        this.props.changeInfo("lname", this.state.lname);
        this.props.changeInfo("cname", this.state.cname);
        this.props.changeInfo("phone", this.state.phone);
        this.props.changeInfo("email", this.state.email);
        this.setState({error : ""});
        }
    } 
    // this handles the input 
    handleChange(txt){
        const val = txt.target.value;
        this.setState({
            ...this.state,
            [txt.target.name]: val
        });      
    }
    // the render renders the input fields 
    render(){
        return(
            <div>
            <form   
                onSubmit={this.handleSubmit}
                className = "send-message offset-1">

                <div className = "error">{this.state.error}</div>
                <label className = "send-name">First Name</label>
                <input className = "send-box"
                    onChange = {this.handleChange}
                    value = {this.state.fname}
                    name = "fname"
                    placeholder = "John" type = "text" /><br/>
                    
                <label className = "send-name">Last Name</label>
                <input className = "send-box"
                    onChange = {this.handleChange}
                    value = {this.state.lname}
                    name = "lname"
                    placeholder = "Doe" type = "text" /><br/>

                <label className = "send-name">Company Name</label>
                <input className = "send-box"
                    onChange = {this.handleChange}
                    value = {this.state.cname}
                    name = "cname"
                    placeholder = "BK" type = "text" /><br/>

                <label className = "send-name">Email</label>
                <input className = "send-box"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    name = "email"
                    placeholder = "your@email.com" type = "text" /><br/>

                <label className = "send-name">Phone</label>
                <input className = "send-box"
                    onChange = {this.handleChange}
                    value = {this.state.phone}
                    name = "phone"
                    placeholder = "012 345 6789" type = "text" />
                    <br/><br/>

                <input type="submit" value="+ SUBMIT" className = "start-here"/>            
                </form>
            </div>
        )
    }
}

export default Inputs;
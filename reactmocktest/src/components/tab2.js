import React from 'react';
import htmlToImage from 'html-to-image';
import $ from 'jquery';

class Review extends React.Component {

    constructor (){
        super()
        this.prepareJPG = this.prepareJPG.bind(this);
    }
    // the function to produce a jpeg image  
    prepareJPG(){
        var node = document.getElementById('card');
        var imgsrc = "";
        htmlToImage.toJpeg(node)
        .then(function (dataUrl) {
            imgsrc = dataUrl; 
            console.log(dataUrl);
            this.props.changeInfo("imgsrc", imgsrc)
        }.bind(this))
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
        // an overlay to alert the user
        $('body').append(
            '<div id="overlay">' 
            + '<h2 id="loading">Click the DOWNLOAD tab to download...</h2>'
            + '</div>'
        ); 
        
        setTimeout(function(){
          $('#overlay').remove();
        }, 2000); //2 seconds

    }
    // this renders the information the user previously entered and then allows them to get an image 
    render(){ 

        if(this.props.fname === ""){
            return (
                <div className = "card offset-lg-4 offset-2">
                <br/>
                <div className = "card-name">Nothing here yet, go back to the first tab (start)</div>
                </div>
            );
        }
        
        return(
                <div className = "offset-lg-4 offset-2" id = "downr">
                <div className = "card" id = "card"><br/>
                    <div className = "card-name">
                        {this.props.fname} {this.props.lname}
                    </div>
                    <div className = "card-company">{this.props.cname.toUpperCase()}</div>
                    <div className = "card-email">{this.props.email}</div>
                    <div className = "card-phone">{this.props.phone}</div>       
                </div><br/>
                    <button className = "start-here" onClick = {this.prepareJPG}>+ Looks Good</button>
                </div>
        );
    }
}

export default Review;
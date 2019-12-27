import React from 'react';

class Download extends React.Component {
    //this puts the image on screen that the user wanted and then gives them the option to download 
    render(){ 
        console.log(this.props.imgsrc)
        if (this.props.imgsrc === ""){
        return (
            <div className = "card offset-2 offset-lg-4">
            <br/>
            <div className = "card-name">Nothing here yet, go back to the review tab</div>
            </div>
            );
        }
        
        return(
            <div id = "downl">
            <img src = {this.props.imgsrc} alt = "downloadImg" id = "di"/><br/><br/>
            <a href = {this.props.imgsrc} className = "start-here-add start-here" download>+ DOWNLOAD</a>
            </div>
        );
    }
}

export default Download;
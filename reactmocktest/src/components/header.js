import React from 'react';

function Header(){
    return (
        <div className = "container-fluid"> 
            <div className = "row">
                <div className = "header col-12 pt-5 text-md-center text-lg-left">
                    <div className = "offset-lg-1">Business Card Generator</div>
                </div>
            </div>
            <div className = "row mt-5">
                <div className = "col-12 col-lg-5 text-md-center text-lg-left offset-lg-1 ">
                    <div className = "main-title">Grow your business with flashy cards</div>
                    <p>Get in front of customers when they’re looking at your card. Let them see that you mean business and that they can trust your skills
                    <br/><button className = "start-here" onClick = {startfunction}>+ START HERE</button></p>
                </div>
                <img src = {require("../NoPath.png")} alt = "business card" className = "col-6 offset-3 offset-lg-0 col-lg-5"/>
            </div><br/>
            <div id = "explanation">
                <h2>PURPOSE</h2>
                <h3>To cretae a small application that will allow a user to create a business card based on info they provide.</h3>
            </div>
        </div>
    );
}
//this function takes the explanation away and makes visible the core components
function startfunction() {
    document.getElementById("explanation").style.display = "none";
    document.getElementById("hider").style.visibility = "visible";
}


export default Header;
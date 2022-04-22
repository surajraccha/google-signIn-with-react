import React,{useEffect} from "react";
import jwt from 'jwt-decode';

function GoogleLogin({setUserValue}){
    
    function onSignIn(googleUSer) {
       console.log("google >>",googleUSer);
       const user = jwt(googleUSer.credential);
       if(user){
        setUserValue(user);
       }
       console.log("google user>>",user);
      }

    useEffect(()=>{
      window.onload = function () {    
            window.google.accounts.id.initialize({
                client_id: 'your Client Id',
                ux_mode : "popup",
                callback : onSignIn
              });
              
              window.google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed()) {
                  console.log(notification.getNotDisplayedReason())
                } else if (notification.isSkippedMoment()) {
                  console.log(notification.getSkippedReason())
                } else if(notification.isDismissedMoment()) {
                  console.log(notification.getDismissedReason())
                }
              }); 
              
              window.google.accounts.id.renderButton(
                document.getElementById("googleButton"),
                { theme: "outline",
                size: "medium",
                text: "signup_with",
                shape: "pill",
                logo_alignment: "left",
                width: 400
               }
              );
       }
    });

    return(   
        <React.Fragment>
                <div id="googleButton"></div>
        </React.Fragment>
        
    );
}


export default React.memo(GoogleLogin);
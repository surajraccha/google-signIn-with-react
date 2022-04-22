
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
function UserInfo(props){
    console.log("userinfo compoenent",props);
    const signOut = ()=>{
        console.log("signed out!!!");
        window.google.accounts.id.disableAutoSelect();
    }
    return (
         <React.Fragment>
             <img src={props.userInfo.picture} className="avatar" 
             style={{"verticalAlign": "middle",
                    "width": 50,
                    "height": 50,
                    "borderRadius": "50%"}} referrerpolicy="no-referrer"></img>
            <h3><b><i>{props.userInfo.name}</i></b></h3>
            <h3><b><i>{props.userInfo.email}</i></b></h3>
            <button style={{
                "height": "5vh",
                "backgroundColor": "cyan",
                "width": "10vw",
                "borderRadius": 8
            }}
            onClick={signOut}>Sign Out</button>
         </React.Fragment>
);
}

export default UserInfo;
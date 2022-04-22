import './App.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from './GoogleLogin';
import UserInfo  from './UserInfo';
import {useState,useEffect, useCallback} from "react";
function App() {
  const [userInfo, setUserInfo] = useState(null);

  const setUserValue = useCallback(user=>{
    setUserInfo(user);
  },[userInfo]);



  return (
    <div className="App">
        <Card sx={{ fontSize: 14 }}>
          <CardContent>
              <Typography component="span" sx={{ fontSize: 14 }} >
                 <h3><b><i> {userInfo ?"user Details!!!":"Google Sign in!!!"}</i></b></h3>
              </Typography>
              <Typography  component="span" sx={{ fontSize: 14 }}>
                {userInfo ?  <UserInfo userInfo={userInfo}/> : <GoogleLogin setUserValue ={setUserInfo}/>}
              </Typography>
          </CardContent>
        </Card>
    </div>
  );
}

export default App;

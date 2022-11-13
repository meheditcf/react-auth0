import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';

function App() {
  const {getAccessTokenSilently} = useAuth0();
  const getAccessToken = async ()=> {
    try{
      const token = await getAccessTokenSilently();
      console.log("acces token",token);
    }
    catch(e){
      console.log(e);
    }

  }

  useEffect(()=> {
    getAccessToken();
  }, [getAccessTokenSilently])

  return (
    <div className="App">
      <h1>Hi</h1>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </div>
  );
}

export default App;

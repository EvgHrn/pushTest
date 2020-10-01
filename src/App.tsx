import React from 'react';
import logo from './logo.svg';
import './App.css';

import { messaging } from "./init-fcm";

function App() {

  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const getPermission = async () => {
      messaging.requestPermission()
        .then(async function() {
          const token = await messaging.getToken();
          console.log("token: ", token);
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
    };
    getPermission();
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;

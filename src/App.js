import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

function App() {
  const [user, setUser] = useState({});
  var [ userName, setUserName ] = useState("");

  const handleChange = (e) => {
      setUserName(e.target.value)
  }

  const githubURL = `https://api.github.com/users/${userName}`;

  
  useEffect(() => {
      const fetchData = async () => {
        try {
        const { data } = await axios.get(githubURL);
        setUser(data);
        } catch (err) {
            console.log(err);
          }
    }
      fetchData();
    }, [ userName ]);

  const userID = user.name || user.login
  const userBio = user.bio ? user.bio : ''
  return (
    <div className="App">
      <form className="user-form"  >
        <input type="text" placeholder="Search for a Github User ..." onChange={handleChange} />
      </form>
      <Card user={user} userBio={ userBio } userID={ userID } userName={ userName } />
    </div>
  );
}

export default App;

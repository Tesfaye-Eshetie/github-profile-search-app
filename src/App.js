import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  var [ userName, setUserName ] = useState("");

  const handleChange = (e) => {
      setUserName(e.target.value);
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
      <main>
        {userID &&
          <div className="card">
            <div>
              <img src={user.avatar_url} alt={user.name} className="avatar" />
            </div>
            <div className="user-info">
              <h2>{userID}</h2>
                <p>{userBio}</p>
              <ul>
                <li>{user.followers} <strong>Followers</strong></li>
                <li>{user.following} <strong>Following</strong></li>
                <li>{user.public_repos} <strong>Repos</strong></li>
              </ul>
            </div>
          </div>
        }
      </main>
    </div>
  );
}

export default App;

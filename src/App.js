import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styed';
import { UserForm } from './components/styles/UserForm.styled';
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
      if(userName !== "") {
        fetchData();
      }     
    }, [ userName ]);

  const userID = user.name || user.login
  const userBio = user.bio ? user.bio : ''
  return (
    <>
      <GlobalStyles />
      <Container>
        <UserForm>
          <input type="text" placeholder="Search for a Github User ..." onChange={handleChange} />
        </UserForm>
        <Card user={user} userBio={ userBio } userID={ userID } userName={ userName } />
    </Container>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReposCard } from './styles/RepoCard.styled';

export default function Repos({ userName }) {
    const [repos, setRepos] = useState([]);

    const githubURL = `https://api.github.com/users/${userName}/repos?sort=created`;

  
  useEffect(() => {
      const fetchData = async () => {
        try {
        const { data } = await axios.get(githubURL);
        setRepos(data);
        } catch (err) {
            console.log(err);
          }
    }
      fetchData();
    }, [ userName ]);

  return (
    <div>
        {
            repos.slice(0, 5)
            .map(repo => 
                <ReposCard key={repo.id} href={ repo.html_url } className="repo">{ repo.name }</ReposCard>
            )
        }
    </div>
  )
}

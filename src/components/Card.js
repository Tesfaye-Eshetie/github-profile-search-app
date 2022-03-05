import React from 'react'
import Repos from './Repos'

export default function Card({ user, userBio, userID, userName }) {
  return (
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
                  <Repos userName={ userName }/>
              </div>
            </div>
        }
    </main>
  )
}

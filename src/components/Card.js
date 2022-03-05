import React from 'react';
import Repos from './Repos';
import { MainCard } from './styles/MainCard.styled';
import { UserInfo } from './styles/UserInfo.styled';

export default function Card({ user, userBio, userID, userName }) {
  return (
    <>
     { userID &&
      <MainCard>
        <div>
            <img src={user.avatar_url} alt={user.name} />
        </div>
        <UserInfo>
            <h2>{userID}</h2>
            <p> {userBio} </p>
            <ul>
              <li>{user.followers} <strong>Followers</strong></li>
              <li>{user.following} <strong>Following</strong></li>
              <li>{user.public_repos} <strong>Repos</strong></li>
            </ul>
            <Repos userName={ userName }/>
        </UserInfo>
      </MainCard>
      }
    </>
  )
}

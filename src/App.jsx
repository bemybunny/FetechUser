import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import defaultImage from './assets/default.png';
import Loader from './Loader';
import UserCard from './UserCard';

const App = () => { 
  console.log(defaultImage);
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleImageError = (event) => {
    event.target.src = defaultImage; // Set default image if the jpg image fails to load
  }

  return (
    <div className="userContainer">
      <div className="userList">
        {data.length>0 ? data.map((user, index) => (
          <>
           <div className="user_cnt" key={index} onClick={() => setSelectedUser(user)}>
            <img 
            src={user.avatar || defaultImage} 
            alt={user.profile.username} 
            onError={handleImageError}
          />
            <span>{user.profile.username}</span>
          </div>
          {selectedUser && user===selectedUser &&
          <UserCard show="show"  selectedUser={selectedUser}/>}
          </>
        )):<Loader/>}
      </div>
      <UserCard customClassName="maxwidth800" selectedUser={selectedUser}/>
    </div>
  );
}

export default App;

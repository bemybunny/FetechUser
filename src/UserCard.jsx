import React from 'react'
import './App.css'
import defaultImage from './assets/default.png';
const UserCard = (props) => {

  const handleImageError = (event) => {
    event.target.src = defaultImage; // Set default image if the jpg image fails to load
  }

    const {selectedUser} = props
  return (
        selectedUser && <div className={`${props.customClassName} ${props.show}`} >
        (
        <div className="user_details">
          <div className="usercenter">
          <img 
            src={selectedUser.avatar || defaultImage} 
            alt={selectedUser.profile.username}
            onError={handleImageError} 
            />
          {console.log("user:", { avatar: selectedUser.avatar })}
          <span>{selectedUser.profile.username}</span>
          </div>
          <div className="userDetail">
            <div><hr/></div>
            <div className="user_detailcnt">
                <span>FirstName</span>
                <span>{selectedUser.profile.firstName}</span>
              </div>
              <div className="user_detailcnt">
                <span>LastName</span>
                <span>{selectedUser.profile.lastName}</span>
              </div>
              <div className="user_detailcnt">
                <span>Bio</span>
                <span>{selectedUser.Bio}</span>
              </div>
              <div className="user_detailcnt">
                <span>Job Title</span>
                <span>{selectedUser.jobTitle}</span>
              </div>
              <div className="user_detailcnt">
                <span>email</span>
                <span>{selectedUser.profile.email}</span>
              </div>
              <div><hr/></div>
          </div>
        </div>
      )
    </div>
  )
}

export default UserCard

import React from 'react'

function UserCard({name, age, location }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default UserCard

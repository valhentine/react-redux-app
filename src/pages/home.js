import React from 'react'

const Home = () => (
  <div>
    <h3>Hello, {getUserName(this.props.user) || "??"}</h3>
  </div>
)

function getUserName(user) {
  return user == null ? null : user.name
}

export default Home

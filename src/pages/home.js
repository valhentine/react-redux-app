import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../reducers'

const Home = (props) => (
  <div>
    <h3>Hello, {getUserName(props.user) || "??"}</h3>
  </div>
)

function getUserName(user) {
  return user == null ? null : user.name
}

const mapStateToProps = state => {
  return {
    user: getUser(state)
  }
}

export default connect(
  mapStateToProps
)(Home)

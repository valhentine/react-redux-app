import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../actions.js'
import { getUser } from '../reducers'
import Home from './home'

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser({
      name: e.target.elements.name.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <button type="submit">Login</button>

        <Home />
      </form>
    )
  }
}

function getUserName(user) {
  return user == null ? null : user.name
}

const mapStateToProps = state => {
  return {
    user: getUser(state)
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

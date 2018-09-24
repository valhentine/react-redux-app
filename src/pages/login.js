import React from 'react'

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

        <p>{getUserName(this.props.user) || "--unknown--"}</p>
      </form>
    )
  }
}

function getUserName(user) {
  return user == null ? null : user.name
}

export default Login

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LogInPage extends Component {
  state = {
    users: [],
    newUser: {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    console.log('name', event.target.name)
    console.log('value', event.target.value)
    const updatedNewUser = {...this.state.newUser}

    updatedNewUser[event.target.name] = event.target.value
    this.setState({newUser: updatedNewUser})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/users', this.state.newUser).then(res => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
        this.props.history.push(`/carpage`)
    })
    
  }

  getAllUsers = () => {
    axios.get('/api/users').then((res) => {
      this.setState({users: res.data})
    })
  }

  componentDidMount(){
    this.getAllUsers()
  }

  render() {
    return (
      <div>
        <h1>Register To See Your Competition</h1>
        { this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        )) }

        <h3>Sign-up</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password"/>
          </div>
          <button type="submit">Create Racer</button>
        </form>
      </div>
    );
  }
}

export default LogInPage;
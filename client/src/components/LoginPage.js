import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LogInPage extends Component {
  state = {
    users: [],
    newUser: {
      Name: '',
      Experience: ''
    }
  }

  handleChange = (event) => {
    console.log('name', event.target.name)
    console.log('value', event.target.value)
    const updatedNewUser = { ...this.state.newUser }
    updatedNewUser[event.target.name] = event.target.value
    console.log(updatedNewUser)
    this.setState({ newUser: updatedNewUser })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newUser = this.state.newUser
    console.log(newUser)
    axios.post('/api/driver', newUser).then(res => {
      console.log('hello')
      console.log(res)
      this.props.history.push(`/drivers/${res.data._id}`)
      // this.props.history.push(`/carpage`)
    })

  }

  getAllUsers = () => {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data })
    })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  delete(userId) {
    axios.delete(`/api/users/${userId}`)
      .then((data) => {
        this.getAllUsers()
      })
  }

  render() {
    return (
      <div>
        <h1>Register To See Your Competition</h1>
        {/* {this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/carpage`}>{user.username}</Link>
            <button onClick={() => this.delete(user._id)}>X</button>
          </div>
        ))} */}

        <h3>Sign-up</h3>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">User Name: </label>
        <input onChange={this.handleChange} value={this.state.newUser.Name} type="text" name="Name"/>
        <label htmlFor="password">Password: </label>
        <input onChange={this.handleChange} value={this.state.newUser.Experience} type="text" name="Experience"/>
        <label htmlFor="password">: Wins </label>
        <input onChange={this.handleChange} value={this.state.newUser.Wins} type="text" name="Wins"/>
        <label htmlFor="password">Losses: </label>
        <input onChange={this.handleChange} value={this.state.newUser.Losses} type="text" name="Losses"/>
        <label htmlFor="password">Location: </label>
        <input onChange={this.handleChange} value={this.state.newUser.Location} type="text" name="Location"/>
        <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default LogInPage;
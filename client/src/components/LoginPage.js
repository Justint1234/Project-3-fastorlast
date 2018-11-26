
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class LoginPage extends Component {
state = {
    users:[],
    newUser: {
        username: '',
        password: '',
    }
}

handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/user', this.state.newUser).then(res => {
        console.log(res.data)
        this.props.history.push(`/user/${res.data._id}`)
    })

}

getAllUsers = () => {
    axios.get('/api/users').then((res) => {
        this.setState({users: res.data})
    })
}

handleDelete = userId => {
    axios.delete(`/api/users/${userId}`).then(() => {
      const newUsers = [...this.state.users]
      const filtered = newUsers.filter(user => {
        return user._id !== userId 
      })
      this.setState({users: filtered})
    })
  }

  handleUpdate = (userId) => {
    const userToUpdate = this.state.users.find(user => {
      return user._id === userId
    })
    axios.patch(`/api/users/${userId}`, userToUpdate).then(() => {
      console.log("Updated User")  
    })
  }

handleChange = (event) => {
    console.log('name', event.target.name)
    console.log('value', event.target.value)
    const updatedNewUser = {...this.state.newUser}
    updatedNewUser[event.target.name] = event.target.value
    this.setState({newUser: updatedNewUser})
  }

componentDidMount(){
    this.getAllUsers()
}

onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.checked
    });
    this.setState({
        [e.target.name]: e.target.value
    })
// }
// onSubmit = async () => {
// const message = await this.props.mutate({
//     var: this.state
// });

}

    render() {
        return (
            <div>
                
                {this.state.users.map((user) => (
                        <div key={user._id}>
                            <Link to={`/user/${user._id}`}>{user.username}</Link>
                        </div>
                    ))}
                    
                <form onSubmit={this.onSubmit}>
                    Username<input type='text' placeholder='username' onChange={e => this.onChange(e)} value={this.state.username} name='username'></input>
                    Password<input type='text' placeholder='password' onChange={e => this.onChange(e)} value={this.state.password} name='password'></input>
                    <input type='submit'></input>
                    
                    {/* <button onClick={deleteUser}>X</button> */}
                    
                </form>
                
            </div>
        );
    }
}

export default LoginPage;
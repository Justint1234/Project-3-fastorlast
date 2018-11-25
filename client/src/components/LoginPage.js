
import React, { Component } from 'react';
import axios from 'axios'


class LoginPage extends Component {
state = {
    users:[],
    newUser: {
        username: '',
        password: '',
    }
}

getAllUsers = () => {
    axios.get('/api/users').then((res) => {
        this.setState({users: res.data})
    })
}

handleSubmit = (event) => {
    event.preventDefault()

    
    axios.post('/api/users', this.state.newUser).then(res => {
      console.log(res.data)
    })
    
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
}

onSubmit = async () => {
const message = await this.props.mutate({
    var: this.state
});

}

    render() {
        return (
            <div>
                
                <form onSubmit={this.onSubmit}>
                    Username<input type='text' placeholder='username' onChange={e => this.onChange(e)} value={this.state.username} name='username'></input>
                    Password<input type='text' placeholder='password' onChange={e => this.onChange(e)} value={this.state.password} name='password'></input>
                    <input type='submit'></input>

                </form>
            </div>
        );
    }
}

export default LoginPage;
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-restricted-globals */
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwd: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit=async (event) => {
    const { username, passwd } = this.state;
    const user = JSON.stringify({
      email: username,
      password: passwd,
    });
    fetch('http://localhost:3000/login', {
      mode: 'no-cors',
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: user,
    })
      .then((response) => {
        console.log('created');
        if (response.data.loggedin === 'created') {
          this.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('login', error);
      });
    event.preventDefault();
    console.log(user);
  }

  render() {
    const { username, passwd } = this.state;
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" type="text" value={username} name="username" onChange={(e) => this.handleChange(e)} />
          <input placeholder="password" type="password" value={passwd} name="passwd" onChange={(e) => this.handleChange(e)} />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default Login;

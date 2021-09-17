/* eslint-disable react/no-unused-state */
/* eslint-disable no-restricted-globals */
import { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password_digest: '',
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

  handleSubmit=(event) => {
    const { name } = event.target;
    axios.post('http://localhost:3000/login',
      {
        user: {
          name,
        },
      }, { withCredentials: true }).then((response) => {
      if (response.data.loggedin === 'created') {
        this.handleSuccessfulAuth(response.data);
      }
    })
      .catch((error) => {
        console.log('login', error);
      });
    event.preventDefault();
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" type="text" value={name} name="email" onChange={(e) => this.handleChange(e)} />
          <input placeholder="password" type="text" value={name} name="password" onChange={(e) => this.handleChange(e)} />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default Login;

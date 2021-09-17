/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const { name, password_digest } = this.state;

    axios.post('http://localhost:3000/signin',
      {
        user: {
          name,
          password_digest,
        },
      }, { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        this.handleSuccessfulAuth(response.data);
      }
    })
      .catch((error) => {
        console.log('signin error', error);
      });
    event.preventDefault();
    event.preventDefault();
  }

  render() {
    const { name, password_digest } = this.state;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" type="text" name="name" value={name} onChange={(e) => this.handleChange(e)} />
          <input placeholder="email" type="text" name="name" value={name} onChange={(e) => this.handleChange(e)} />
          <input placeholder="password_digest" type="password" name="password_digest" value={password_digest} onChange={this.handleChange} />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default SignIn;

/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
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
    const { name, email, password_digest } = this.state;
    const user = {
      name,
      email,
      password: password_digest,
    };
    axios({
      method: 'post',
      url: 'http://localhost:3000/signup/',
      data: user,
    })
      .then((response) => {
        if (response.data.status === 'created') {
          this.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('signup error', error);
      });
    event.preventDefault();
  }

  render() {
    const { name, email, password_digest } = this.state;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" type="text" value={name} name="name" onChange={(e) => this.handleChange(e)} />
          <br />
          <input placeholder="email" type="text" value={email} name="email" onChange={(e) => this.handleChange(e)} />
          <br />
          <input placeholder="password_digest" type="password" name="password_digest" value={password_digest} onChange={this.handleChange} />
          <br />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default SignUp;

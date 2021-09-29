/* eslint-disable camelcase */
import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import config_url from '../actions/prod';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwd: '',
      token: null,
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
    const { username, passwd } = this.state;

    const user = {
      email: username,
      password: passwd,
    };
    axios({
      method: 'post',
      url: `${config_url}/login`,
      mode: 'no-cors',
      data: user,
    })
      .then((response) => {
        localStorage.setItem('token', response.data.auth_token);
        this.setState({
          token: response.data.auth_token,
        });
      })
      .catch((error) => {
        console.log('login', error);
      });
    event.preventDefault();
  }

  render() {
    const { username, passwd, token } = this.state;
    if (token !== null) {
      return <Redirect to="/exercise" />;
    }
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" type="text" value={username} name="username" onChange={(e) => this.handleChange(e)} />
          <br />
          <input placeholder="password" type="password" value={passwd} name="passwd" onChange={(e) => this.handleChange(e)} />
          <br />
          <button type="submit"> submit</button>
        </form>
        <p>
          <Link
            to="/signup"
            name="signup"
          >
            Sign-up
          </Link>
        </p>
      </div>
    );
  }
}

export default Login;

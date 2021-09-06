/* eslint-disable no-restricted-globals */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event) => {
    const { name, value } = event.target;
    this.setState = {
      [name]: value,
    };
  }

  handleSubmit=(event) => {
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
        <h1>LOGin</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" type="text" value={name} onChange={this.handleChange} />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default Login;

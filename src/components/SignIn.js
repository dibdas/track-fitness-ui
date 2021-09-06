import { Component } from 'react';

class SignIn extends Component {
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
    event.preventDefault();
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" type="text" value={name} onChange={this.handleChange} />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
export default SignIn;

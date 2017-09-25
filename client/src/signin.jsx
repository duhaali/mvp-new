import React from 'react';
import $ from 'jquery';
import MyApp from './index.jsx';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  usernameChange (value) {
    this.setState({
      username: value.target.value
    });
  }

  passwordChange (value) {
    this.setState({
      password: value.target.value
    });
  }

  signin() {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url:'/',
      data: {username: this.state.username, password: this.state.password}
    });
  }

  render() {
    return (
      <div>
        Username:
        <input name="userName" onChange={this.usernameChange.bind(this)}/>
        Password:
        <input name="password" onChange={this.passwordChange.bind(this)}/>
        <button onClick={this.signin.bind(this)}>Sign in</button>
      </div>
    )
  }
}

export default Signin;

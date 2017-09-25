import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signin from './signin.jsx';
import Signup from './signup.jsx';


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return(
      <div>
        <Signin/>
      </div>
    )
  }
}

ReactDOM.render(<MyApp/>, document.getElementById('app'));
export default MyApp;
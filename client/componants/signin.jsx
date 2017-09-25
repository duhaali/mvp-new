import React from 'react';
import $ from 'jquery';



class   Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  onChange () {
    this.setState({
    });
  }

  login() {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url:'/index'
      data:
    });
  }

  render() {
    return (<div>
      Enter your favorite book name <input id="bookname" value={} onChange={}/>       
      <button id= "addbook" onClick={}> </button>
    </div>) 
  }
}

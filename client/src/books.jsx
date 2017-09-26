import React from 'react';
import $ from 'jquery';
import MyApp from './index.jsx';


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: ''
    }
  }
  
  authorChange (value) {
    this.setState({
      author: value.target.value
    });
  }

  titleChange (value) {
    this.setState({
      title: value.target.value
    });
  }

  books() {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url:'/',
      data: {author: this.state.author, title: this.state.title}
    });
  }



  Favoritebooks() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url:'/',
      data: {author: this.state.author, title: this.state.title}
    });
  }

  render() {
    return (
      <div>
        Author:
        <input name="author" onChange={this.authorChange.bind(this)}/>
        Title:
        <input name="title" onChange={this.titleChange.bind(this)}/>
        <button onClick={this.books.bind(this)}>Add Book</button>
        <button onClick={this.Favoritebooks.bind(this)}>My Favorite List</button>
        
      </div>
    )
  }
}

export default Books;

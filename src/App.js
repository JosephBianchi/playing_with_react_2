import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    let allAuthors = [
      <Author body={this.props.authors[0]} />,
      <Author body={this.props.authors[1]} />,
      <Author body={this.props.authors[2]} />
    ]
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>by {this.props.author}</h4>
        <h3>{this.props.body}</h3>
        <h2>Comments!</h2>
        {allComments}
        <h2>Contributing Authors</h2>
        {allAuthors}


      </div>
    );
  }
}

export default Post;

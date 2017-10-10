import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';

var post = {
  postTitle : "Dinosaurs are awesome",
  postAuthor : "Stealthy Stegosaurus",
  postBody : "Check out this body property!",
  postComments : ["First!", "Great post", "Hire this author now!"],
  postAuthors: ["Jimmy Jam", "Larry Stew", "Kaley Klark"]
}

ReactDOM.render(
  <Post
    title={post.postTitle}
    author={post.postAuthor}
    body={post.postBody}
    comments={post.postComments}
    authors={post.postAuthors}

  />,
  document.getElementById('root')

)

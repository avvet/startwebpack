import '../css/main.scss';
import '../user.html';
import $ from 'jquery';
import axios from "axios";

import {func} from './second';

// func();
console.log('Hello,world');

let getPostsBtn = document.getElementById('my-button');
let singlePostBtn = document.getElementById('single-post');

getPostsBtn.onclick = () => {
  getAllPosts();
};
singlePostBtn.onclick = () => {
  getSinglePost(4);
};


function getAllPosts() {
  axios.get('http://localhost:3000/posts')
    .then(responce => {
      console.log(responce.data);
      getTitles(responce.data);
    })
    .catch(error => {
      console.log(error, 'MY ERROR');
    });
}

function getTitles(posts) {
  posts.map(post => console.log(post.title, 'MY TITLE'));
}


function getSinglePost(postId) {
  axios.get('http://localhost:3000/posts' + '/' + postId)
    .then(responce => {
      console.log(responce.data, 'SINGLE POST');
    })
    .catch(error => {
      console.log(error, 'MY ERROR');
    });
}
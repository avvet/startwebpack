import '../css/main.scss';
import '../user.html';
import {httpService} from "./http/http-service";

import $ from 'jquery';
import {func} from './second';
// func();

let getPostsBtn = document.getElementById('my-button');
let singlePostBtn = document.getElementById('single-post');

getPostsBtn.onclick = () => {
  httpService.getAllPosts();
};
singlePostBtn.onclick = () => {
  httpService.getSinglePost(4);
};

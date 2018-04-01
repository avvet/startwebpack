import axios from "axios";

const BASE_URL = 'http://localhost:3000/';
const POSTS = 'posts';
const DIVIDER = '/';

class HttpServiceClass {

  getAllPosts() {
    axios.get(BASE_URL + POSTS)
      .then(responce => {
        console.log(responce.data);
        getTitles(responce.data);
      })
      .catch(error => {
        console.log(error, 'MY ERROR');
      });
  };


  getSinglePost(postId) {
    axios.get(BASE_URL + POSTS + DIVIDER + postId)
      .then(responce => {
        console.log(responce.data, 'SINGLE POST');
      })
      .catch(error => {
        console.log(error, 'MY ERROR');
      });
  }

  printParagraph(callback) {
    axios.get(BASE_URL + 'avvet')
      .then(responce => {
        callback(responce.data.description)
      })
      .catch(error => {
        console.log(error, 'MY ERROR');
      });
  }
}


function getTitles(posts) {
  posts.map(post => console.log(post.title, 'MY TITLE'));
}

let httpService = new HttpServiceClass();

export {httpService};
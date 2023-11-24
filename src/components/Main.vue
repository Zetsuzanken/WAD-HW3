<template>
    <div class="wrapper">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/addPost">addPost</router-link>
        </div>
        <div class="navbar-right">
          <img id="UserProfilePic" src="@/assets/images/profile.png" alt="Profile Photo" @click="toggleDropdown">
          <ul v-show="dropdownVisible" class="dropdown-menu" id="dropdown-menu">
            <li><a href="#">John Doe</a></li>
            <li><a href="#">john.doe@ut.ee</a></li>
            <li><router-link to="/login">Logout</router-link></li>
          </ul>
        </div>
      </nav>
  
      <div class="margin-container left-margin"></div>
      
      <div class="content">
        <!-- Posts Section -->
        <div class="posts">
          <div v-for="post in posts" :key="post.id" class="post">
            <div class="post-header">
              <img class="profile-photo" src="@/assets/images/profile.png" alt="Profile Photo" />
              <div class="post-author">{{ post.author }}</div>
              <div class="post-date">{{ post.timestamp }}</div>
            </div>
            <div class="post-content">
              <img v-if="post.photo" class="large-photo" :src="post.photo" alt="Large Photo" />
              <div class="post-text">
                <p>{{ post.text }}</p>
              </div>
            </div>
            <div class="post-like">
              <img class="like-button" src="@/assets/images/like.png" alt="Like Button" />
            </div>
          </div>
        </div>
      </div>
  
      <div class="margin-container right-margin"></div>
      
      <!-- Footer -->
      <div class="footer"> Footer </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
        dropdownVisible: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      fetchData() {
        fetch('https://api.jsonbin.io/v3/b/65451cf012a5d3765994721c')
          .then((response) => response.json())
          .then((data) => {
            this.posts = data;
          })
          .catch((error) => {
            console.error('Error loading posts:', error);
          });
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style scoped>
  /* Reset some default styles */
  body,
  h1,
  h2,
  p,
  ul,
  li {
      margin: 0;
      padding: 0;
  }
  
  /* Define overall page styles */
  body {
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  /* Wrapper for the entire content */
  .wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
  }
  
  /* Navbar styles */
  .navbar {
      background-color: #333;
      color: #fff;
      text-align: left;
      padding: 10px 20px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: auto;
  }
  
  .nav-links,
  .nav-links a {
      color: #fff;
      text-decoration: none;
      padding: 8px;
      border-radius: 5px;
  }
  
  .nav-links a {
      margin-right: 10px;
  }
  
  .navbar-right {
      float: right;
  }
  
  #UserProfilePic {
      max-height: 40px;
      border: 2px solid #0077b6;
  }
  
  .navbar a:hover {
      background-color: #555;
  }
  
  .navbar a[href="index.html"],
  .navbar a[href="addPost.html"] {
      background-color: transparent;
      transition: background-color 0.3s;
  }
  
  .navbar a[href="index.html"]:hover,
  .navbar a[href="addPost.html"]:hover {
      background-color: #555;
  }
  
  /* Margin container styles */
  .margin-container {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 15%;
      background-color: #f0f0f0;
      z-index: 0;
  }
  
  .left-margin {
      left: 0;
  }
  
  .right-margin {
      right: 0;
  }
  
  /* Content section styles */
  .content {
      width: 65%;
      margin: 60px auto 60px;
      padding: 20px;
      position: relative;
  }
  
  .large-photo {
      max-width: 100%;
  }
  
  /* Posts section styles */
  .posts {
      width: 96%;
      margin: 15px auto;
      flex-grow: 1;
  }
  
  .post {
      background-color: #333;
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 20px;
      margin-left: 10px;
      margin-right: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: left;
  }
  
  .post-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
  }
  
  .profile-photo {
      width: 40px;
      height: 40px;
  }
  
  .post-date {
      color: #999;
      font-size: 12px;
      margin-left: auto;
  }
  
  .post-author {
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
      flex-wrap: wrap;
      margin-right: 5px;
      border-radius: 4px;
      padding: 2px;
  }
  
  .post-text {
      margin-bottom: 15px;
      margin-top: 15px;
  }
  
  .post .post-text p {
      font-size: 16px;
  }
  
  .like-button {
      background-size: contain;
      width: 40px;
      height: 40px;
      cursor: pointer;
      margin-top: 10px;
      border: none;
      background-color: transparent;
  }
  
  /* Footer styles */
  .footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 1;
      height: auto;
  }
  
  /* Styles all paragraph elements that are nested in a div */
  div > p {
      color: white;
  }
  
  /* Adds 30px margin to .post elements that come immediately after another .post element */
  .post + .post {
      margin-top: 30px;
  }
  
  /* Styles all hyperlink elements inside .post-text that come after the first hyperlink element */
  .nav-links a ~ a {
      color:#b0b0b0
  }
  
  /* This removed the "No file chosen" text that was next to the "Choose file" button on addPost page. From: https://stackoverflow.com/a/69993586 */
  input[type='file'] {
      font-size: 0;
  }
  
  ::file-selector-button {
      font-size: initial;
  }
  </style>
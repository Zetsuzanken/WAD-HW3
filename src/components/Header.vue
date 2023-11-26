<template>
  <!-- Navbar -->
      <nav class="navbar">
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/signup">Sign Up</router-link>
        </div>
        
        <!-- Profile picture should not be needed for homework 3.
       <div class="navbar-right">
          <img id="UserProfilePic" src="@/assets/images/profile.png" alt="Profile Photo" @click="toggleDropdown">
          <ul v-show="dropdownVisible" class="dropdown-menu" id="dropdown-menu">
            <li><a href="#">John Doe</a></li>
            <li><a href="#">john.doe@ut.ee</a></li>
            <li><router-link to="/login">Logout</router-link></li>
          </ul>
        </div>  
        -->

      </nav>
</template>

<script>
export default {
  name: 'Header',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

/* Navbar styles */
.navbar {
      background-color: #333;
      color: #fff;
      text-align: left;
      padding: 20px 20px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      display: flex;
      justify-content:center;
      align-items: center;
      height: auto;
  }

  .nav-links,
  .nav-links a {
      color: #fff;
      text-decoration: none;
      padding: 12px;
      border-radius: 5px;
  }

  .nav-links a {
      margin-right: 20px;
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

</style>
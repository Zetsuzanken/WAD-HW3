<template>
    <div class="content">
        <!-- Posts Section -->
        <div class="posts">
            <div v-for="post in posts" :key="post.id" class="post">
                <div class="post-header">
                    <img class="profile-photo" src="@/assets/images/profile.png" alt="Profile Photo" />
                    <div class="post-author"> {{ post.author }} </div>
                    <div class="post-date"> {{ post.timestamp }} </div>
                </div>
                <div class="post-content">
                    <img v-if=post.photo class="large-photo" :src="require(`@/assets/images/${post.photo}`)"
                        alt="Large Photo" />
                    <div class="post-text">
                        <p> {{ post.text }} </p>
                    </div>
                </div>
                <div class="post-like" @click="likeClicked(post.id)" :class="{ 'clicked': post.isClicked }">
                    <img class="like-button" src="@/assets/images/like.png" alt="Like Button" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Posts",
    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },
    mounted() {
        // Trigger the fetchPosts action when the component is mounted
        this.$store.dispatch('fetchPosts');
    },

    
    methods: {
    likeClicked(postId) {
      const post = this.posts.find(post => post.id === postId);

      if (post) {
        post.isClicked = true;

        setTimeout(() => {
          post.isClicked = false;
        }, 100);
      }
    }
  }
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

/* Content section styles */
.content {
    width: 80%;
    margin: 60px auto 60px;
    padding: 20px;
    position: relative;
    
}

.large-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    
}

/* Posts section styles */
.posts {
    width: 70%;
    margin: 15px auto;
    margin-top: 40px;
    flex-grow: 1;
}

.post {
    background-color: #333;
    padding: 15px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 10px;
}

.post-content {
    border-radius: 5px;
    padding: 7px;
    background-color: rgb(27, 27, 27);
    margin-bottom: 15px;
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
    border-radius: 5px;
    border-style: outset;
    border-color: rgb(27, 27, 27);
    
    
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
    
}

.post-text {
    margin-bottom: 15px;
    margin-top: 15px;
    
}

.post .post-text p {
    font-size: 16px;
}

.post-like {
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; 
    height: 40px; 
    
    
}

.like-button {
    background-size: contain;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: transform 0.1s ease-in-out;
    outline: none;
    display: flex;
    
}

.clicked {
  transform: scale(0.7);
}

/* Styles all paragraph elements that are nested in a div */
div>p {
    color: white;
}

/* Adds 30px margin to .post elements that come immediately after another .post element */
.post+.post {
    margin-top: 30px;
}
</style>
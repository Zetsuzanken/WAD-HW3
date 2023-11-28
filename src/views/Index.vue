<template>
  <div class="wrapper">
    <Header></Header>
    <LeftMargin></LeftMargin>
    <Posts></Posts>
    <ResetButton></ResetButton>
    <RightMargin></RightMargin>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
import LeftMargin from "@/components/LeftMargin.vue"
import RightMargin from "@/components/RightMargin.vue"
import Posts from "@/components/Posts.vue"
import ResetButton from "@/components/ResetButton.vue"
export default {
  name: "Index",
  components: {
    Header,
    LeftMargin,
    Posts,
    ResetButton,
    RightMargin,
    Footer
  }
}
</script>

<style>
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
</style>
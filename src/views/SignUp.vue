<template>
    <div class="wrapper">
        <Header></Header>
        <LeftMargin></LeftMargin>
        <SignUpBox></SignUpBox>
        <RightMargin></RightMargin>
        <Footer></Footer>
    </div>
</template>
  
<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
import SignUpBox from "@/components/SignUpBox.vue"
import LeftMargin from "@/components/LeftMargin.vue"
import RightMargin from "@/components/RightMargin.vue"

export default {
    name: "SignUp",
    components: {
        Header,
        LeftMargin,
        SignUpBox,
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
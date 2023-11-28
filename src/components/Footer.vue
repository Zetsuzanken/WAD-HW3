<template>
  <div class="footer">

    <strong>Copyright @ 2023 Group R</strong>

  </div>
</template>

<script>
export default {
  name: "Footer",

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

/* Footer styles */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  height: auto;
}
</style>
<template>
    <div class="margin-container left-margin"></div>
  </template>
  
  <script>
  export default {
    name: "LeftMargin",
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
  
  </style>
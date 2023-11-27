<template>
    <div class="reset-button">
      <button @click="resetLikes">
        Reset Likes
      </button>
    </div>
</template>
  
<script>
export default {
    methods: {
      resetLikes() {
        // Dispatch an action to reset the likes in the store
        this.$store.dispatch('resetLikes');
      }
    }
}
</script>

<style scoped>
.reset-button {
    margin-bottom: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.reset-button button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease-out;
}

.reset-button button:hover {
  background-color: #555;
}

.reset-button button:active {
  transform: scale(0.7);
}
</style>
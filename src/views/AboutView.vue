<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script >

export default {
  mounted() {
    const devText = import.meta.env.VITE_TEXT;
    const proText = import.meta.env.VITE_TEXT;
    console.log('1',devText)
    console.log('3',proText)
  },
};
</script>



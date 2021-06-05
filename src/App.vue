<template>
  <div id="app">
    <div>
      <TheNavBar />
    </div>
    <br />
    <div class="contentSeparation">
      <router-view class="m-10" />
    </div>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
export default {
  components: {
    TheNavBar,
  },
};
</script>

<template>
  <div id="app" class="container">
    <Header />
    <Jobs />
    <Projects />
    <Technologies />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Jobs from './components/Jobs/Jobs.vue'
import Projects from './components/Projects/Projects.vue'
import Technologies from './components/Technologies/Technologies.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Jobs,
    Projects,
    Technologies,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  font-size: 20px;
}

.github {
  color: black;
}

.youtube {
  color: red;
}
</style>

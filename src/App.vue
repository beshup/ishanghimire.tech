<template>
<div>
  <Header />
  <div id="app" class="container">
    <Jobs />
    <Projects />
    <Technologies />
    <Footer />
    <span id="screen"></span>
  </div>
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
  font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;
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

@media only screen and (max-width: 760px) {
  #screen { display: none; }
}
</style>

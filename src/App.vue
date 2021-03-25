<template>
  <div id="app">
    <Epk />
    <footer>
      <div class="d-flex justify-content-center mb-5 align-items-center h-100">
        <div class="d-flex mb-5">
          <a href="https://instagram.com/pugband" target="_blank">
            <gb-social-button class="mx-2" network="instagram" iconTheme="white" reverse />
          </a>
          <a href="https://facebook.com/pugband" target="_blank">
            <gb-social-button class="mx-2" network="facebook" iconTheme="white" reverse />
          </a>
          <a href="https://open.spotify.com/artist/42AlM3mhpBiyvPdYqI5JHq?si=tcZVyAZtSeCoxCBaWxCUPg" target="_blank">
            <gb-social-button class="mx-2" network="spotify" iconTheme="white" reverse />
          </a>
          <a href="https://music.apple.com/mx/artist/pug/1464251151" target="_blank">
            <gb-social-button class="mx-2" network="apple" iconTheme="white" reverse />
          </a>
          <a href="https://www.youtube.com/channel/UC3K41lggo00AcSj23SwSVCg" target="_blank">
            <gb-social-button class="mx-2" network="youtube" iconTheme="white" reverse />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Epk from './components/epk.vue';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSocial from '@growthbunker/vuesocial';

Vue.use(VueSocial, {
  iconPath: './assets/networks/',
  theme: 'dark'
});

export default {
  name: 'App',
  components: {
    Epk
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
  footer {
    background: url('/assets/images/footer-bg.jpeg');
    background-size: cover;
    background-size: 100% auto;
    background-position: center bottom -120px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 600px;
    .gb-social-button {

      box-shadow: 2px 4px 5px rgba(0,0,0,.5);
    }
  }
</style>

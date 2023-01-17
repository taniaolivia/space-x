<script setup>
import NavbarVue from '@/components/NavbarVue.vue';
import FooterVue from './components/FooterVue.vue';
</script>

<template>
  <div>
    <navbar-vue></navbar-vue>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>
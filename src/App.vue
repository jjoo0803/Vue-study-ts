<template>
  <div id="nav">
    <Header />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue'
import { onMounted } from 'vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Header
  },
  setup() {
    onMounted(() => {
      console.log('---App.vue Mounted-----')
    })
    return {}
  },
})
</script>


<style lang="scss">
@import "./styles/base";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

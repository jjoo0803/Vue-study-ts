<template>
  <div id="header">
    <Navigation />
    <Banner />
    <Title />
  </div>
  <router-view/>
</template>

<script>
import Navigation from '@/components/header/Navigation.vue'
import Banner from '@/components/header/Banner.vue'
import Title from '@/components/header/Title.vue'
import { onMounted } from 'vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Navigation,
    Banner,
    Title
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

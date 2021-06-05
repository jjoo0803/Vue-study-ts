<template>
  <div ref="el" class="page-nav">
    <div class="nav">
      page navigation
    </div>
    <div class="footer"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const el = ref(null)
    onMounted(() => {
      console.log(el)
      console.log(el.value)
      console.log('============Content Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.page-nav {
  background-color:white;
  .nav {
    height: 70px;
  }
  .footer {
    height: 70px;
  }
}
</style>
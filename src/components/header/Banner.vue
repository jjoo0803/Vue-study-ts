<template>
  <div ref="el" class="banner">
    Banner Section
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
      console.log('============Banner Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.banner {
  height: 108px;
  background-color: black;
}
</style>
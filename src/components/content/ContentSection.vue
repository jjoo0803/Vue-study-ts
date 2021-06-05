<template>
  <div ref="el" class="content-section">
      Content Section
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
      console.log('============ContentSection Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.content-section {
}
</style>
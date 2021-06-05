<template>
  <div ref="el" class="header">Header</div>
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
      console.log('============Header Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.header {
  height: 60px;
  background-color: antiquewhite;
}
</style>
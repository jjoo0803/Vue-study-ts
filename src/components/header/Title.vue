<template>
  <div ref="el" class="header-title">
      the edit
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
      console.log('============Title Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.header-title {
  height: 110px;
  background-color: white;
}
</style>
<template>
  <div ref="el" class="content-section">
      <router-view />
      <PageNavigation />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { defineComponent } from '@vue/composition-api'
import PageNavigation from '@/components/content/PageNavigation.vue'

export default defineComponent({
  components: {
    PageNavigation
  },
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
.content-section {
  height: 5350px;  // 5350px
  background-color:blanchedalmond;
}
</style>
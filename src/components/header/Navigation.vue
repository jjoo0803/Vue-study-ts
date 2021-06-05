<template>
  <div ref="el" class="header-navigation">
    <div>
      <img class="list-image" src="../../assets/icons/list.png" alt="search">
    </div>
    <div>
      <img class="find-image" src="../../assets/icons/find.png" alt="search">
    </div>
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
      console.log('============Header Mounted===============')
    })
    return { el }
  },
})
</script>

<style lang="scss">
.header-navigation {
  height: 60px;
  // ackground-color: antiquewhite;
  div {
    height: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    float: right;
  }
}

.find-image {
  width: 13px;
  height: 13px;
  margin-right: 35px;
}

.list-image {
  width: 13px;
  height: 13px;
  margin-right: 25px;
}
</style>
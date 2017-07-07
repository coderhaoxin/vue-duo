
<template>
  <main>
    <div>{{ info.desc }}</div>
    <div>
      <input v-model.trim="desc"></input>
      <button @click="update()">
        update
      </button>
    </div>
  </main>
</template>

<script>

import { getInfo, update } from './action'
import store from './store'

export default {
  props: {
    id: Number
  },
  data() {
    return {
      desc: ''
    }
  },
  store,
  watch: {
    id(id) {
      getInfo(id)
    }
  },
  methods: {
    async update() {
      await update(this.info.id, {
        desc: this.desc
      })

      this.desc = ''
    }
  }
}

</script>

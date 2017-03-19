
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
    id: String
  },
  data() {
    return {
      desc: '',
    }
  },
  store,
  watch: {
    id: function(id) {
      getInfo(id)
    }
  },
  methods: {
    update: async function() {
      await update(this.info.id, {
        desc: this.desc
      })

      this.desc = ''
    }
  }
}

</script>

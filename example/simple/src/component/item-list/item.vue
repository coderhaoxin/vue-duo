
<template>
  <section key={item.id} @click="switchItem(item.id)">
    <label>{{ item.title }}</label>
    <span>{{ item.price }}</span>
    <button @click="del(item.id)">del</button>
  </section>
</template>

<script>

import { switchItem } from '../action'
import { del } from './action'

export default {
  props: {
    item: Object
  },
  methods: {
    switchItem: function(id) {
      switchItem(id)
    },
    del: function(id) {
      del(id)
    }
  }
}

</script>

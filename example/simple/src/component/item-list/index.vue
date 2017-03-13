
<template>
  <main>
    <item v-for="(item, index) in store.items" :onSwitchItem="onSwitchItem"
      v-bind:item="item" v-bind:index="index" v-bind:key="item.id"></item>
    <div>
      <input placeholder="title" v-model="title"></input>
      <input placeholder="price" v-model="price"></input>
      <button @click="addItem()">add</button>
    </div>
  </main>
</template>

<script>

import { add } from './action'
import store from './store'
import Item from './item'

export default {
  components: {
    Item
  },
  data: {
    title: '',
    price: ''
  },
  subscriptions: {
    store
  },
  methods: {
    addItem: async function() {
      await add({
        title: this.title,
        price: this.price
      })

      this.title = ''
      this.price = ''
    }
  }
}
</script>

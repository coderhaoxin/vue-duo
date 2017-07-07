
<template>
  <main>
    <item v-for="(item, index) in items" :key="item.id"
      :item="item" :index="index">
    </item>
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
  data() {
    return {
      title: '',
      price: ''
    }
  },
  store,
  methods: {
    async addItem() {
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

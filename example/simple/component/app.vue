
<template>
  <content>
    <h1>hello</h1>
    <item-list></item-list>
    <item-info :id="currentItemId"></item-info>
  </content>
</template>

<script>

import ItemInfo from './item-info'
import ItemList from './item-list'

import store from './store'

export default {
  name: 'app',
  components: {
    ItemInfo,
    ItemList
  },
  props: {
    currentItemId: Number
  },
  store
}

</script>

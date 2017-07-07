
<template>
  <content>
    <h1>hello</h1>
    <bar></bar>
    <foo></foo>
  </content>
</template>

<script>

import { add } from './action'
import Bar from './bar'
import Foo from './foo'

export default {
  name: 'app',
  components: {
    Bar,
    Foo
  },
  mounted() {
    setInterval(() => add(), 2000)
  }
}

</script>

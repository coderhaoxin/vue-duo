
<template>
  <div>
    <h1>{{ count }}</h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'

import store from '../store'

export default {
  name: 'foo',
  store,
  pickStore: ['count'],
  subscriptions() {
    return {
      msg: Observable.timer(3, 1200)
    }
  }
}

</script>

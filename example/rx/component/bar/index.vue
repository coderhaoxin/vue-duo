
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
  name: 'bar',
  store,
  pickStore: ['count'],
  subscriptions() {
    return {
      msg: Observable.timer(2, 800)
    }
  }
}

</script>

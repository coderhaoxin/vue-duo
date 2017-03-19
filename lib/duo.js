
function VueDuo(Vue) {
  function defineReactive(vm, key, val) {
    if (key in vm) {
      vm[key] = val
    } else {
      Vue.util.defineReactive(vm, key, val)
    }
  }

  Vue.mixin({
    created: function init() {
      const vm = this
      const store = vm.$options.store
      if (!store) return

      const keys = []

      vm._storeSubscription = store.subscribe(up => {
        Object.keys(up).forEach(key => {
          if (!keys.includes(key)) {
            defineReactive(vm, key, undefined)
          }

          vm[key] = up[key]
        })
      })
    },
    beforeDestroy: function() {
      if (this._storeSubscription) {
        this._storeSubscription.unsubscribe()
      }
    }
  })
}

export default VueDuo

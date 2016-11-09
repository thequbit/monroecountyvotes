Vue.component('vote-address-input', {
  props: {
    address: {
      required: true,
      type: Object
    }
  },
  methods: {
    update: function (event) {
      this.$emit('change', this.address);
    }
  },

  template: `
    <div>
      <input v-model="address.number" v-on:input="update">
      <input v-model="address.street" v-on:input="update">
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    address: {
      number: 'foo',
      street: 'bar'
    }
  },

  methods: {
    test: function (address) {
      console.log('new address', address);
    }
  }
})

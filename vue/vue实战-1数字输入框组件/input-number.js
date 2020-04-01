function isValueNumber(value) {
  return /(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/.test(value + '')
}
Vue.component('input-number', {
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  template:
    '\
  <div class="input-number">\
  <input \
  type="text"\
  @keyup.up.self="keyUp"\
  @keyup.down.self="keyDown"\
  :value="currentValue"\
  @change="handleChange">\
  <button\
  @click="handleDown"\
  class="btn btn-primary"\
  :disabled="currentValue<=min">-</button>\
  <button\
  @click="handleUp"\
  class="btn btn-primary"\
  :disabled="currentValue>=max">+</button>\
  <input v-model="prop_step">\
  </div>',
  data: function() {
    return {
      currentValue: this.value,
      prop_step: ''
    }
  },
  watch: {
    currentValue: function(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value(val) {
      this.updateValue = val
    }
  },
  methods: {
    updateValue(val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    keyUp() {
      if (this.currentValue > this.max - 1) return
      this.currentValue += Number(this.prop_step)
    },
    keyDown() {
      if (this.currentValue < this.min + 1) return
      this.currentValue -= Number(this.prop_step)
    },
    handleDown() {
      if (this.currentValue < this.min) return
      this.currentValue -= Number(this.prop_step)
    },
    handleUp() {
      if (this.currentValue > this.max) return
      this.currentValue += Number(this.prop_step)
    },
    handleChange(event) {
      var val = event.target.value.trim() //去除两端空格
      var max = this.max
      var min = this.min
      if (isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        }
        if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    },
    mounted() {
      this.updateValue(this.value)
    }
  }
})

Vue.component('tabs', {
  template:
    '\
  <div class="tabs">\
     <div class="tabs-bar">\
       <div\
       :class="tabCls(item)"\
       v-for="(item,index) in navList"\
       @click="handleChange(index)">\
       {{item.label}}\
       </div>\
       <button class="btn btn-dark" @click="add">添加</button>\
      </div>\
  <div class="tabs-content">\
  <slot></slot>\
  </div>\
  </div>',
  props: {
    value: {
      type: [String, Number],
    },
  },
  data: function () {
    return {
      navList: [],
      currentValue: this.value,
      num: 3,
      arr: [
        '',
        '',
        '',
        '',
        '五',
        '六',
        '七',
        '八',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
    }
  },
  methods: {
    add: function () {
      this.navList.push({
        name: this.num++,
        label: '标签' + this.arr[this.num],
      })
    },
    tabCls: function (item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': item.name === this.currentValue,
        },
      ]
    },
    handleChange: function (index) {
      var nav = this.navList[index]
      var name = nav.name
      /* 改变当前的tab，触发下面的watch */
      this.currentValue = name
      /* 更新value */
      this.$emit('input', name)
      this.$emit('on-click', name)
    },
    getTabs() {
      return this.$children.filter(function (item) {
        return item.$options.name === 'pane'
      })
    },
    updateNav() {
      this.navList = []
      var _this = this
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index,
        })
        if (!pane.name) {
          pane.name = index
        }
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index
          }
        }
      })
      this.updateStatus()
    },
    updateStatus() {
      var tabs = this.getTabs()
      var _this = this
      tabs.forEach(function (tab) {
        return (tab.show = tab.name === _this.currentValue)
      })
    },
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue: function () {
      this.updateStatus()
    },
  },
})

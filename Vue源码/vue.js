"use strict";
exports.__esModule = true;
/**
 * Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */
var Observer = /** @class */ (function () {
    function Observer(value) {
        this.value = value;
        // 给value新增一个__ob__属性，值为该value的Observer实例
        // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
        def(value, '__ob__', this);
        if (Array.isArray(value)) {
            // 当value为数组时的逻辑
            // ...
        }
        else {
            this.walk(value);
        }
    }
    Observer.prototype.walk = function (obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    };
    return Observer;
}());
exports.Observer = Observer;
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, val) {
    // 如果只传了obj和key，那么val = obj[key]
    if (arguments.length === 2) {
        val = obj[key];
    }
    if (typeof val === 'object') {
        new Observer(val);
    }
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log(key + "\u5C5E\u6027\u88AB\u8BFB\u53D6\u4E86");
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return;
            }
            console.log(key + "\u5C5E\u6027\u88AB\u4FEE\u6539\u4E86");
            val = newVal;
        }
    });
}
var data = new Observer({
    brand: '123',
    font: '234'
});

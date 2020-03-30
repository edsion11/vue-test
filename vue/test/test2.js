function stack() {
  this.dataStore = []
  this.top = 0 //首项
  this.push = push //入栈
  this.pop = pop //出栈
  this.find = find //搜寻item下标
  this.exist = exist //判断是否同时存在
  this.existAll = existAll
}

function existAll(item) {
  if (this.find(item)) return true
  else return false
}

function exist(item1, item2) {
  if (this.find(item1) && this.find(item2)) return true
  else return false
}

function find(item) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == item) return i
  }
}

function push(element) {
  this.dataStore[this.top++] = element
}

function pop() {
  return this.dataStore[--this.top]
}
var family1 = new stack()
var family2 = new stack()
var family3 = new stack()
var family4 = new stack()
var family5 = new stack()
family1.dataStore = ['0', 'A', 'B', 'D']
family2.dataStore = ['0', 'A', 'C', 'E']
family3.dataStore = ['0', 'A', 'C', 'F']
family4.dataStore = ['0', 'X', 'Y', 'F']
family5.dataStore = ['0', 'X', 'Z']
//题一对于给定的俩人，得出其亲属关系
function relationOne(a, b) {
  var aa = ['0', 'A', 'X', '0', 'B', '0', 'C', 'Y', '0', 'Z', '0', '0', 'D', '0', 'E', 'F']
  var str = ""
  for (var i = 0; i < aa.length; i++) {
    if (a == aa[i]) {
      aItem = i
    } else if (b == aa[i]) {
      bItem = i
    }
  }
  if (family1.exist(a, b) || family2.exist(a, b) || family3.exist(a, b) || family4.exist(a, b) || family5.exist(a, b)) {
    var item = 1
  } else {
    var item = 2
  }
  if (item == 2 && Math.abs(aItem - bItem) == 1) {
    str = "夫妻"
    return str
  }
  if (item == 2 && (Math.abs(aItem - bItem) == 1 || Math.abs(aItem - bItem) == 2)) {
    str = "兄弟姊妹"
  }
  if (item == 1 && (Math.abs(aItem - bItem) == 10 || Math.abs(aItem - bItem) == 12 || Math.abs(aItem - bItem) == 13)) {
    str = "祖父母/外祖父母"
  } else {
    if (item == 1) {
      str = "父母/儿媳/女婿"
    }
  }
  if (item == 2 && (Math.abs(aItem - bItem) == 10 || Math.abs(aItem - bItem) == 5 || Math.abs(aItem - bItem) == 9)) {
    str = "伯/姑"
  }
  if (item == 2 && Math.abs(aItem - bItem) == 3 || Math.abs(aItem - bItem) == 5 || Math.abs(aItem - bItem) == 6) {
    str = "叔/舅"
  }
  return str
}
console.log(relationOne('A', 'B')) //父母
console.log(relationOne('E', 'Z')) //姑舅
//题二判断给定的两人是否是指定的亲属关系（直系关系和旁系关系）？
function relationTwo(a, b) {
  if (family1.exist(a, b) == true || family2.exist(a, b) == true || family3.exist(a, b) == true || family4.exist(a, b) == true || family5.exist(a, b) == true)
    return "直系关系"
  else return "旁系关系"
}
console.log("a和b是" + relationTwo('A', 'Y'))
//题三给定a，找出给定亲属关系的都有哪些人
function familiers(a) {
  if (family1.existAll(a) == true || family2.existAll(a) == true || family3.existAll(a) == true || family4.existAll(a) == true || family5.existAll(a) == true) {
    var arr = []
    for (var i = 1; i < family1.dataStore.length; i++) {
      arr.push(family1.dataStore[i])
    }
    for (var i = 1; i < family2.dataStore.length; i++) {
      arr.push(family2.dataStore[i])
    }
    for (var i = 1; i < family3.dataStore.length; i++) {
      arr.push(family3.dataStore[i])
    }
    for (var i = 1; i < family4.dataStore.length; i++) {
      arr.push(family4.dataStore[i])
    }
    for (var i = 1; i < family5.dataStore.length; i++) {
      arr.push(family5.dataStore[i])
    }

    function unique(arr) {
      return Array.from(new Set(arr))
    }
    return unique(arr).join(' ')
  } else return "G W V"
}
console.log(familiers('W'))
console.log(familiers('A'))
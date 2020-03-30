function Node(element) {
  this.element = element
  this.next = null
  this.previous = null
}

function DoubleLList() {
  this.head = new Node("head")
  this.find = find
  this.insert = insert
  this.removeDoubleList = removeDoubleList
  this.display = display
  this.findLast = findLast //?双向链表寻找最后一个节点--用来反序显示链表
  this.displayReverse = displayReverse
}

function displayReverse() {
  //!var last=this.head
  var last = this.findLast()
  while (last.previous != null) {
    console.log(last.element)
    last = last.previous
  }
}
//!找出最后一个节点
function findLast() {
  var currNode = this.head
  while (currNode.next != null) {
    currNode = currNode.next
  }
  return currNode
}
//*删除节点
//!双向链表操作--
function removeDoubleList(item) {
  var currNode = this.find(item)
  if (!(currNode == null)) { //!-----remove的时候要注意判断是否为空---///
    currNode.next = null
    currNode.previous = null
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
  }
}

function find(item) {
  var currNode = this.head
  while (currNode.element != item) {
    currNode = currNode.next
  }
  return currNode
}
//*插入节点
function insert(newElement, item) {
  var newNode = new Node(newElement)
  var currNode = this.find(item)
  newNode.next = currNode.next
  newNode.previous = currNode
  currNode.next = newNode
}
//*显示链表
function display() {
  var currNode = this.head
  while (currNode.next != null) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}
var family1 = new DoubleLList()
family1.insert("A", "head")
family1.insert("B", "A")
family1.insert("D", "B")
var family2 = new DoubleLList()
family2.insert("A", "head")
family2.insert("C", "A")
family2.insert("F", "C")
family1.display()
family2.display()
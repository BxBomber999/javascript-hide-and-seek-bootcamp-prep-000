function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var listElements = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i<listElements.length;i++){
    listElements[i].innerHTML = (parseInt(listElements[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var node = document.querySelector('#grand-node').children[0]
  while(node){
    if(node.children[0]){
        node = node.children[0]
    } else {
      return node
    }
  }
}

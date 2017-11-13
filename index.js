function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var listElements = document.querySelector('.ranked-list')
  for(var i = 0; i<listElements.length;i++){
    i.innerHTML = (parseInt(i.innerHTML) + 2).toString()
  }
}

function deepestChild() {
  
}
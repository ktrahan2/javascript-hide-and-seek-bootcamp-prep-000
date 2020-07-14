function getFirstSelector(selector) {
  let first = document.querySelector(selector)
  return first
}

function nestedTarget() {
  const second = document.getElementById('nested').getElementsByClassName('target')[0]
  return second
}

function increaseRankBy(n) {
  let rankedlist = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedlist.length; i++) {
    let children = rankedlist[i].children
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = (parseInt(children[j].innerHTML) + n)
    }
  }
}

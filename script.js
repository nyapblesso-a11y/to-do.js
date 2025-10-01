const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
function addTask () {
  if (inputBox.value === '')  {
    alert('You must write something!')
  } else {
    const li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    const span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value = ''

  saveData()
}
addTask()

listContainer.addEventListener('click', function (elem) {
if (elem.target.tagName === 'LI') {
    elem.target.classList.toggle('check')
    saveData()
    } else if (elem.target.tagName === 'SPAN') {
      elem.target.parentElement.remove()
      saveData()
    }
},false
)
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML)
}
function showTask () {
  listContainer.innerHTML = localStorage.getItem('data')
}
showTask()

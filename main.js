

let promptText = prompt('how old are you?');

if (promptText === 0) {
  alert('число ровно нулю');
} else if (promptText === null){
  alert ('вы нажали на отмену?')
} else if (promptText === '') {
  alert('вы ничего не ввели.')
} else if (promptText % 2 === 0) {
  alert('число четное')
} else if (promptText % 2 === 1) {
  alert('число не четное')
} else {
  alert('введите только числа')
}

 
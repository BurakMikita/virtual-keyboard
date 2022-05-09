import "./assets/styles/style.css";
import "./assets/styles/style.scss";










const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e',
	'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f',
	'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',
	'/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']

const keyboardTwo = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E',
	'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Caps Lock', 'A', 'S', 'D', 'F',
	'G', 'H', 'J', 'K', 'L', ':', `"`, 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>',
	'?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']


const roSoo = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у',
	'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а',
	'п', 'р', 'о', 'л', 'д', 'ж', `'`, 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',
	'?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']

const roSooTwo = ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У',
	'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Caps Lock', 'Ф', 'Ы', 'В', 'А',
	'П', 'Р', 'О', 'Л', 'Д', 'Ж', `Э`, 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю',
	',', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']




const newArrKalaca = ['Backquote', 'Digit1',
	'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
	'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
	'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
	'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS',
	'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
	'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
	'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',
	'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']


const input = document.createElement('textarea')
const body = document.querySelector("body");
const container = document.createElement('div')
const row = document.createElement('div')
const wrapp = document.createElement('div')
const keyboardKeys = document.createElement('div')
const conrolAlt = document.createElement('div')

input.className = 'text'
input.text = 'text'
input.setAttribute('id', 'text')
row.className = 'row'
container.className = 'container'
wrapp.className = 'keyboard_wrapp'
keyboardKeys.className = 'keyboard_keys'
conrolAlt.className = "control_alt"
conrolAlt.textContent = "Поменять язык клавиш  Shift left + alt left. "
conrolAlt.textContent += 'Также ссылка на PR https://github.com/BurakMikita/virtual-keyboard/pull/1'
body.appendChild(conrolAlt)
body.appendChild(container)
container.appendChild(input)
container.appendChild(wrapp)
wrapp.appendChild(keyboardKeys)
input.focus()


const Intit = (arr, arr2, russo, roSooDubble) => {
	let newarr = []
   
	let flagTwo = null


const parse = JSON.parse(localStorage.getItem("myKey"))
if (parse === null) {

	flagTwo = true

} else {
	flagTwo = JSON.parse(localStorage.getItem("myKey"))

}

	if (flagTwo) {
		newarr = arr.map(el => {
			const div = document.createElement('div')
			switch (el) {
				case 'Backspace':
					div.className = 'keys backspace_key'
					div.textContent = el
					return div
				case 'Tab':
					div.className = 'keys tab_key'
					div.textContent = el
					div.setAttribute('id', el)
					return div
				case 'Caps Lock':
					div.className = 'keys caps_lock_key'
					div.textContent = 'Caps Lock'
					return div
				case 'Enter':
					div.className = 'keys enter_key'
					div.textContent = el
					return div
				case 'Shift':
					div.className = 'keys shift_key'
					div.textContent = el
					return div
				case 'Ctrl':
					div.className = 'keys ctrl_key'
					div.textContent = 'Ctrl'
					return div
				case '↑':
					div.className = 'keys up-arrow'
					div.innerHTML = `&#8593;`;
					return div
				case '←':
					div.className = 'keys'
					div.innerHTML = '&larr;'
					return div
				case '↓':
					div.className = 'keys'
					div.innerHTML = '&darr;'
					return div
				case '→':
					div.className = 'keys'
					div.innerHTML = '&rarr;'
					return div
				case 'Win':
					div.className = 'keys win_key'
					div.textContent = 'Win'
					return div

				case ' ':
					div.className = 'keys space_key'
					div.textContent = ''
					return div

				default:

					div.className = 'keys'
					div.innerText = el
					return div

			}
		})
	} else {
		newarr = russo.map(el => {
			const div = document.createElement('div')
			switch (el) {
				case 'Backspace':
					div.className = 'keys backspace_key'
					div.textContent = el
					return div
				case 'Tab':
					div.className = 'keys tab_key'
					div.textContent = el
					div.setAttribute('id', el)
					return div
				case 'Caps Lock':
					div.className = 'keys caps_lock_key'
					div.textContent = 'Caps Lock'
					return div
				case 'Enter':
					div.className = 'keys enter_key'
					div.textContent = el
					return div
				case 'Shift':
					div.className = 'keys shift_key'
					div.textContent = el
					return div
				case 'Ctrl':
					div.className = 'keys ctrl_key'
					div.textContent = 'Ctrl'
					return div
				case '↑':
					div.className = 'keys up-arrow'
					div.innerHTML = `&#8593;`;
					return div
				case '←':
					div.className = 'keys'
					div.innerHTML = '&larr;'
					return div
				case '↓':
					div.className = 'keys'
					div.innerHTML = '&darr;'
					return div
				case '→':
					div.className = 'keys'
					div.innerHTML = '&rarr;'
					return div
				case 'Win':
					div.className = 'keys win_key'
					div.textContent = 'Win'
					return div

				case ' ':
					div.className = 'keys space_key'
					div.textContent = ''
					return div

				default:

					div.className = 'keys'
					div.innerText = el
					return div

			}
		})
	}


	for (let j = 0; j < newarr.length; j += 1) {
		newarr[j].setAttribute('id', newArrKalaca[j])
	}

	let caps = true








	window.addEventListener("keydown", (e) => {

		if (e.code === 'CapsLock') {
			e.preventDefault()
			if (caps) {
				for (let i = 0; i < newarr.length; i += 1) {

					if (newarr[i].textContent.length < 2) {
						newarr[i].innerText = newarr[i].textContent.toUpperCase()
					}
				}
				caps = false

			} else {

				for (let i = 0; i < newarr.length; i += 1) {

					if (newarr[i].textContent.length < 2) {
						newarr[i].innerText = newarr[i].textContent.toLowerCase()
					}
				}
				caps = true
			}
		}
	})
	let cliki = true
	window.addEventListener('click', (e) => {
		if (e.target.id === 'CapsLock') {
			e.preventDefault()
			if (cliki) {
				e.target.classList.add("actives");
				for (let i = 0; i < newarr.length; i += 1) {

					if (newarr[i].textContent.length < 2) {
						newarr[i].innerText = newarr[i].textContent.toUpperCase()
					}
				}
				cliki = false
			} else {
				e.target.classList.remove("actives");
				for (let i = 0; i < newarr.length; i += 1) {

					if (newarr[i].textContent.length < 2) {
						newarr[i].innerText = newarr[i].textContent.toLowerCase()
					}
				}
				cliki = true
			}
		}


	})




	window.addEventListener('mousedown', (e) => {
		if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
			e.preventDefault();
			for (let i = 0; i < newarr.length; i += 1) {
				newarr[i].innerText = arr2[i]




			}
		}
	})
	window.addEventListener('mouseup', (e) => {
		if (e.target.id === 'ShiftRight' || e.target.id === 'ShiftLeft') {
			e.preventDefault();
			for (let i = 0; i < newarr.length; i += 1) {

				newarr[i].innerText = arr[i]




			}
		}
	})





	window.addEventListener("keydown", (e) => {
		const capsLocki = document.getElementById('CapsLock')
		input.focus()
		if (e.code === 'ShiftLeft') {

			if (e.altKey) {
				if (flagTwo) {

					for (let i = 0; i < newarr.length; i += 1) {
						if (capsLocki.classList.contains('actives')) {
							if (newarr[i].textContent.length < 2) {
								newarr[i].innerText = russo[i].toUpperCase()
							}
						} else {
							newarr[i].innerText = russo[i]
						}






					}

					flagTwo = false
					localStorage.setItem("myKey", JSON.stringify(flagTwo));

				} else {
					for (let i = 0; i < newarr.length; i += 1) {
						if (capsLocki.classList.contains('actives')) {
							if (newarr[i].textContent.length < 2) {
								newarr[i].innerText = arr[i].toUpperCase()
							}
						} else {
							newarr[i].innerText = arr[i]
						}






					}

					flagTwo = true
					localStorage.setItem("myKey", JSON.stringify(flagTwo));
				}
			}
		}

	})
	window.addEventListener("keydown", (e) => {
		const capsFInit = document.getElementById('CapsLock')

		if (e.code === 'AltLeft') {

			if (e.shiftKey) {
				if (flagTwo) {

					for (let i = 0; i < newarr.length; i += 1) {
						if (capsFInit.classList.contains('actives')) {
							if (newarr[i].textContent.length < 2) {
								newarr[i].innerText = russo[i].toUpperCase()
							}
						} else {
							newarr[i].innerText = russo[i]
						}






					}

					flagTwo = false
					localStorage.setItem("myKey", JSON.stringify(flagTwo));

				} else {
					for (let i = 0; i < newarr.length; i += 1) {
						if (capsFInit.classList.contains('actives')) {
							if (newarr[i].textContent.length < 2) {
								newarr[i].innerText = arr[i].toUpperCase()
							}
						} else {
							newarr[i].innerText = arr[i]
						}






					}

					flagTwo = true
					localStorage.setItem("myKey", JSON.stringify(flagTwo));
				}
			}
		}

	})

	window.addEventListener("keydown", (e) => {
		if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
			e.preventDefault();
			for (let i = 0; i < newarr.length; i += 1) {

				if (flagTwo) {
					newarr[i].innerText = arr2[i]
				} else {
					newarr[i].innerText = roSooDubble[i]
				}






			}
		}
	})

	window.addEventListener("keyup", (e) => {
		if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {

			e.preventDefault();
			for (let i = 0; i < newarr.length; i += 1) {

				if (flagTwo) {
					newarr[i].innerText = arr[i]
				} else {
					newarr[i].innerText = russo[i]
				}




			}
		}
	})


	for (let i = 0; i < newarr.length; i += 1) {

		keyboardKeys.appendChild(newarr[i])
	}



}










Intit(keyboard, keyboardTwo, roSoo, roSooTwo)







const capsi = document.getElementById('CapsLock')
let flag = true
window.addEventListener('keydown', (e) => {
	if (e.code === 'CapsLock') {
		e.preventDefault()
		if (flag) {
			capsi.classList.add("actives");
			flag = false
		} else {
			capsi.classList.remove("actives");
			flag = true
		}
	}

})


window.addEventListener('keydown', (e) => {
	if (e.code === 'AltLeft') {
		e.preventDefault()
	}
})
window.addEventListener('keydown', (e) => {
	if (e.code === 'AltRight') {
		e.preventDefault()
	}
})


const eventClickmousedown = (e) => {
	e.target.classList.add("active");

}


const eventMousup = (e) => {
	e.target.classList.remove("active");
	e.target.classList.add("remove");

	setTimeout(() => {
		e.target.classList.remove("remove");
	}, 400);
}


const clickEvents = (e) => {
	if (e.target.id === 'Backspace') {
		const rasd = input.selectionStart
		const cursor = input.selectionStart - 1
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);
		const deltestr = str2.slice(0, -1);
		input.value = deltestr + str
		input.setSelectionRange(cursor, cursor)
	} else if (e.target.id === 'Enter') {
		const rasd = input.selectionStart
		const cursor = input.selectionStart + 1
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);
		input.value = `${str2}\n${str}`
		input.setSelectionRange(cursor, cursor)
	} else if (e.target.id === 'Tab') {
		const rasd = input.selectionStart
		const cursor = input.selectionStart + 3
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);
		input.value = `${str2}   ${str}`
		input.setSelectionRange(cursor, cursor)
	} else if (e.target.id === 'Space') {
		const rasd = input.selectionStart - 1
		const cursor = input.selectionStart
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);


		if (str.length <= 1) {
			input.value = `${str2 + str}  `

		} else {
			input.value = `${str2} ${str}`
		}
		input.setSelectionRange(cursor, cursor)
	}
}

const clickDiv = (e) => {
	input.focus()
	if (e.target.id !== 'Enter' && e.target.id !== 'Backspace'
		&& e.target.id !== 'Tab' && e.target.id !== 'CapsLock' && e.target.id !== 'ShiftLeft'
		&& e.target.id !== 'ShiftRight' && e.target.id !== 'ControlLeft' && e.target.id !== 'ControlRight'
		&& e.target.id !== 'AltLeft' && e.target.id !== 'AltRight' && e.target.id !== 'MetaLeft') {
		const rasd = input.selectionStart
		const cursor = input.selectionStart + 1
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);
		input.value = str2 + e.target.textContent + str
		input.setSelectionRange(cursor, cursor)

	}
}

const keys = document.querySelectorAll(".keys");




for (let i = 0; i < keys.length; i += 1) {
	keys[i].addEventListener('mousedown', eventClickmousedown)
	keys[i].addEventListener('mouseup', eventMousup)
	keys[i].addEventListener('click', clickDiv)
	keys[i].addEventListener('click', clickEvents)


}


const handlerArrow = (n) => {
	const rasd = input.selectionStart
	const cursor = input.selectionStart + 1
	const str = input.value.slice(rasd);
	const str2 = input.value.slice(0, rasd);
	input.value = str2 + n + str
	input.setSelectionRange(cursor, cursor)
}


window.addEventListener("keydown", (e) => {
	if (e.code === 'ArrowUp') {
		e.preventDefault();
		handlerArrow('↑')
	} else if (e.code === 'ArrowLeft') {
		e.preventDefault();
		handlerArrow('←')
	} else if (e.code === 'ArrowDown') {
		e.preventDefault();
		handlerArrow('↓')
	} else if (e.code === 'ArrowRight') {
		e.preventDefault();
		handlerArrow('→')
	} else if (e.code === 'CapsLock') {
		e.preventDefault();

	} else if (e.code === 'Backquote') {
		e.preventDefault()
		handlerArrow(e.key)
	}

})








window.addEventListener("keydown", (e) => {
	if (e.code === "Tab") {
		e.preventDefault();
		const rasd = input.selectionStart
		const cursor = input.selectionStart + 3
		const str = input.value.slice(rasd);
		const str2 = input.value.slice(0, rasd);
		input.value = `${str2}   ${str}`
		input.setSelectionRange(cursor, cursor)
	}
})




window.addEventListener("keydown", (e) => {
	input.focus()
	for (let i = 0; i < keys.length; i += 1) {
		if (e.code === keys[i].getAttribute("id")) {
			keys[i].classList.add("active");
		}
	}
});

window.addEventListener("keyup", (e) => {

	for (let i = 0; i < keys.length;  i += 1) {
		if (
			e.code === keys[i].getAttribute("id")
		) {
			keys[i].classList.remove("active");
			keys[i].classList.add("remove");
		}


		setTimeout(() => {
			keys[i].classList.remove("remove");
		}, 500);
	}
});









































































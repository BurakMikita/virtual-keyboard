import "./assets/styles/style.css";
import "./assets/styles/style.scss";




const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e',
 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 
 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',
  '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

const newArrKalaca = ['Backquote', 'Digit1',
 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
   'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 
	'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 
	'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
	 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
	  'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',
	   'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

window.addEventListener("keydown", (e) => {
	newArrKalaca.push(e.code)
	
})
  const input =document.createElement('textarea')
  const body = document.querySelector("body");
 const container = document.createElement('div')
 const row = document.createElement('div')
 const keyboard_wrapp = document.createElement('div')
 const keyboard_keys =  document.createElement('div')

 input.className = 'text'
 input.text = 'text'
 input.setAttribute('id', 'text')
 row.className = 'row'
 container.className = 'container'
 keyboard_wrapp.className = 'keyboard_wrapp'
 keyboard_keys.className = 'keyboard_keys'
 body.appendChild(container) 
 container.appendChild(input)
 container.appendChild(keyboard_wrapp)
 keyboard_wrapp.appendChild(keyboard_keys)
 input.focus()



 
const Intit = () => {

 const newarr =  keyboard.map(el=>{
	const div = document.createElement('div')
	
	  switch(el){
		  case 'Backspace':
		  div.className = 'keys backspace_key'
		  div.textContent = el
        return div	
		  case 'Tab':
		  div.className = 'keys tab_key'
		  div.textContent = el
		  div.setAttribute('id', el)
        return div	
		  case 'CapsLock':
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
		  case 'Control':
		  div.className = 'keys ctrl_key'
		  div.textContent = 'Ctrl'
        return div
		  case 'ArrowUp':
			div.className = 'keys up-arrow'
			div.innerHTML = `&#8593;`;
			return div
			case 'ArrowLeft':
			div.className = 'keys'
			div.innerHTML = '&larr;'
			return div
			case 'ArrowDown':
			div.className = 'keys'
			div.innerHTML = '&darr;'
			return div
			case 'ArrowRight':
			div.className = 'keys'
			div.innerHTML = '&rarr;'
			return div
			case 'Meta':
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
  } )
  
  for (let j = 0; j < newarr.length; j++) {
	newarr[j].setAttribute('id', newArrKalaca[j])
  }


for (let i = 0; i < newarr.length; i++) {
	
	keyboard_keys.appendChild(newarr[i]) 
	}
	

  
}
  

Intit()


const eventClickmousedown = (e)=> {
	e.target.classList.add("active");
   
 }
 const eventMousup = (e) => {
	e.target.classList.remove("active");
   e.target.classList.add("remove");

setTimeout(() => {
	e.target.classList.remove("remove");
 }, 200);
 }


 const  clickEvents = (e) => {
	  if(e.target.id === 'Backspace') {
		const rasd = input.selectionStart 	
		const cursor = input.selectionStart -1
		 const str = input.value.slice(rasd );
		 const str2 = input.value.slice(0 ,rasd);
		 const deltestr = str2.slice(0, -1);
		 input.value = deltestr  + str
		 input.setSelectionRange(cursor, cursor)
	  }else if(e.target.id === 'Enter'){
		const rasd = input.selectionStart 	
		const cursor = input.selectionStart + 1
		const str = input.value.slice(rasd );
		const str2 = input.value.slice(0 ,rasd);
		input.value = `${str2  }\n${  str}`
		input.setSelectionRange(cursor, cursor)
	  }else if(e.target.id === 'Tab'){
		const rasd = input.selectionStart 	
		const cursor = input.selectionStart + 3
		const str = input.value.slice(rasd );
		const str2 = input.value.slice(0 ,rasd);
		input.value = `${str2  }   ${  str}`
		input.setSelectionRange(cursor, cursor)
	  }else if(e.target.id === 'Space'){
		const rasd = input.selectionStart	-1
		const cursor = input.selectionStart 
		const str = input.value.slice(rasd );
		const str2 = input.value.slice(0 ,rasd);
		console.log(str2)
		console.log(str)
		if(str.length <= 1) {
			input.value = `${str2 + str  }  ` 
			
		}else {
			input.value = `${str2  } ${  str}`
		}
		input.setSelectionRange(cursor, cursor)
	  }
 }

 const clickDiv = (e)=> {
	input.focus()
	 if(e.target.id !== 'Enter' && e.target.id !== 'Backspace' 
	 && e.target.id !== 'Tab' ){
  const rasd = input.selectionStart 	
  const cursor = input.selectionStart + 1
   const str = input.value.slice(rasd );
	const str2 = input.value.slice(0 ,rasd);
	input.value = str2 + e.target.textContent + str
	input.setSelectionRange(cursor, cursor)
   
	 }
 }
 
const keys = document.querySelectorAll(".keys");




for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('mousedown', eventClickmousedown)
	keys[i].addEventListener('mouseup', eventMousup	)
	keys[i].addEventListener('click', clickDiv)
	keys[i].addEventListener('click', clickEvents)

	
}


const handlerArrow = (n) => {
	
		const htme = ''
		htme.innerHTML = 'e.target.text'
		const rasd = input.selectionStart 	
		const cursor = input.selectionStart + 1
		 const str = input.value.slice(rasd );
		 const str2 = input.value.slice(0 ,rasd);
		 input.value = str2 + n + str
		 input.setSelectionRange(cursor, cursor)
}

window.addEventListener("keydown", (e) => {
	if(e.code === 'ArrowUp'){
		e.preventDefault();
		handlerArrow('↑')
	}else if(e.code === 'ArrowLeft'){
		e.preventDefault();
		handlerArrow('←')
	}else if(e.code === 'ArrowDown'){
		e.preventDefault();
		handlerArrow('↓')
	}else if(e.code === 'ArrowRight'){
		e.preventDefault();
		handlerArrow('→')
	}
	
})






window.addEventListener("keydown", (e) => {
	if (e.keyCode === 9) {
		e.preventDefault();
		const rasd = input.selectionStart 	
		const cursor = input.selectionStart + 3
		const str = input.value.slice(rasd );
		const str2 = input.value.slice(0 ,rasd);
		input.value = `${str2  }   ${  str}`
		input.setSelectionRange(cursor, cursor)
  }
})




window.addEventListener("keydown", (e) => {
	input.focus()
	for (let i = 0; i < keys.length; i++) {
	   if ( e.code === keys[i].getAttribute("id")  ) {
		keys[i].classList.add("active");
	 }
	}
 });
 
 window.addEventListener("keyup", (e) => {
	
	for (let i = 0; i < keys.length; i++) {
	  if (
		 e.code === keys[i].getAttribute("id")
	  ) {
		 keys[i].classList.remove("active");
		 keys[i].classList.add("remove");
	  }
	 
	
	  setTimeout(() => {
		 keys[i].classList.remove("remove");
	  }, 200);
	}
 });





























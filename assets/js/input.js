let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
const up = document.getElementById('btn-up');
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');
const down = document.getElementById('btn-down');
const buttons = document.querySelectorAll('button');


window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) breaks
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})  

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}

up.addEventListener('click', () => {
    if (lastInputDirection.y !== 0);
    inputDirection = { x: 0, y: -1 } 
})

down.addEventListener('click', () => {
    if (lastInputDirection.y !== 0);
    inputDirection = { x: 0, y: 1 } 
})

left.addEventListener('click', () => {
    if (lastInputDirection.y !== 0);
    inputDirection = { x: -1, y: 0 } 
})

right.addEventListener('click', () => {
    if (lastInputDirection.y !== 0);
    inputDirection = { x: 1, y: 0 } 
})
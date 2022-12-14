let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// eerste button
let interactionRotation = document.querySelector('a:nth-of-type(1)')
interactionRotation.addEventListener('click', rotationRound)
interactionRotation.addEventListener('animationend', rotationRound)
function rotationRound(){
  interactionRotation.classList.toggle('rotation')
}

// tweede button
let interactionCollide = document.querySelector('a:nth-of-type(2)')
interactionCollide.addEventListener('animationend', collideButton)
interactionCollide.addEventListener('click', collideButton)

function collideButton(){
  interactionCollide.classList.toggle('collide')
}

// derde button
let interactionFootbal = document.querySelector('a:nth-of-type(3)')
interactionFootbal.addEventListener('click', footbalButton)
interactionFootbal.addEventListener('animationend', footbalButton)

function footbalButton(){
  interactionFootbal.classList.toggle('footbal')
}

// vierde button
let interactionGreen = document.querySelector('a:nth-of-type(4)')
interactionGreen.addEventListener('dblclick', greenColor)
interactionGreen.addEventListener('animationend', greenColor)

function greenColor(){
  interactionGreen.classList.toggle('green')
}

// vijfde button

let interactionBigger = document.querySelector('a:nth-of-type(5)')
interactionBigger.addEventListener('click', bigButton)
interactionBigger.addEventListener('animationend', bigButton)

function bigButton(){
  interactionBigger.classList.toggle('bigger')
}

// zesde button

let interactionLonger = document.querySelector('a:nth-of-type(6)')
interactionLonger.addEventListener('click', longButton)
interactionLonger.addEventListener('animationend', longButton)

function longButton(){
  interactionLonger.classList.toggle('longer')
}

// zevende button

let interactionFlip = document.querySelector('a:nth-of-type(7)')
interactionFlip.addEventListener('click', flip)
interactionFlip.addEventListener('animationend', flip)

function flip(){
  interactionFlip.classList.toggle('flip')
}

// achtste button

let interactionHanger = document.querySelector('a:nth-of-type(8)')
interactionHanger.addEventListener('click', buttonHang)
interactionHanger.addEventListener('animationend', buttonHang)

function buttonHang(){
  interactionHanger.classList.toggle('hanger')
}

// negende button
let interactionFalling = document.querySelector('a:nth-of-type(9)')
interactionFalling.addEventListener('mouseover', discoParty)
interactionFalling.addEventListener('animationend', discoParty)

function discoParty(){
  interactionFalling.classList.toggle('disco')
}

// tiende button
let interactionSmall = document.querySelector('a:nth-of-type(10)')
interactionSmall.addEventListener('mousewheel', buttonSquare)
interactionSmall.addEventListener('animationend', buttonSquare)

function buttonSquare(){
  interactionSmall.classList.toggle('square')
}

// elfde button

let interactionSuperDisco = document.querySelector('a:nth-of-type(11)')
let selectAll = document.querySelectorAll('a')
interactionSuperDisco.addEventListener('click', discoDisco)
interactionSuperDisco.addEventListener('dblclick', discoDiscoEverywhere)
interactionSuperDisco.addEventListener('animationend', discoDiscoEverywhere)

function discoDisco(){
  interactionSuperDisco.classList.toggle('super-disco')
}

function discoDiscoEverywhere(){
  selectAll.forEach(function(a){
  a.classList.toggle('super-disco')
  })
}
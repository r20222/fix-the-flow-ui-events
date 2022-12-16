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

// 13e button

let interactionRolling = document.querySelector('a:nth-of-type(13)')
interactionRolling.addEventListener('click', rollingBall)
interactionRolling.addEventListener('animationend', rollingBall)

function rollingBall(){
  interactionRolling.classList.toggle('rolling')
}

// 14e button

let interactionDblBorder = document.querySelector('a:nth-of-type(14)')
interactionDblBorder.addEventListener('click', doubleDouble)
interactionDblBorder.addEventListener('animationend', doubleDouble)

function doubleDouble(){
  interactionDblBorder.classList.toggle('double-border')
}

// 15e button
let interactionDisappear = document.querySelector('a:nth-of-type(15)')
interactionDisappear.addEventListener('click', disappear)
interactionDisappear.addEventListener('animationend', disappear)

function disappear(){
  interactionDisappear.classList.toggle('disappear')
}

// 16e button

let interactionToRight = document.querySelector('a:nth-of-type(16)')
interactionToRight.addEventListener('click', right)
interactionToRight.addEventListener('animationend', right)

function right(){
  interactionToRight.classList.toggle('to-the-right')
}

// 17e button

let interactionDown = document.querySelector('a:nth-of-type(17)')
interactionDown.addEventListener('click', down)
interactionDown.addEventListener('animationend', down)

function down(){
  interactionDown.classList.toggle('down')
}

// 18e button

let interactionOutside = document.querySelector('a:nth-of-type(18)')
interactionOutside.addEventListener('click', outside)
interactionOutside.addEventListener('animationend', outside)

function outside(){
  interactionOutside.classList.toggle('outside')
}

// 19e button

let interactionOpacity = document.querySelector('a:nth-of-type(19)')
interactionOpacity.addEventListener('click', opacity)
interactionOpacity.addEventListener('animationend', opacity)

function opacity(){
  interactionOpacity.classList.toggle('opacity')
}

// 20e button
let code = document.querySelector('a:nth-of-type(20)')
code.addEventListener('click', coding)
// code.addEventListener('animationend', coding)

function coding(){
  code.classList.toggle('code')
  if(code.innerHTML="Code"){
    code.innerHTML="<&=>"
  } 

  // if(code.innerHTML='&lt;&amp;=&gt;') {
  //   code.innerHTML="boe"
  // }
  // console.log(code.innerHTML)
  
}
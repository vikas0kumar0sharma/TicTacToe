let f1=document.getElementById("b1")
let c1=document.getElementById("s1")

let f2=document.getElementById("b2")
let c2=document.getElementById("s2")

let f3=document.getElementById("b3")
let c3=document.getElementById("s3")

let f4=document.getElementById("b4")
let c4=document.getElementById("s4")

let f5=document.getElementById("b5")
let c5=document.getElementById("s5")

let f6=document.getElementById("b6")
let c6=document.getElementById("s6")

let f7=document.getElementById("b7")
let c7=document.getElementById("s7")

let f8=document.getElementById("b8")
let c8=document.getElementById("s8")

let f9=document.getElementById("b9")
let c9=document.getElementById("s9")

let img=document.getElementById("yeah")

// add this on win
// img.style.visibility='visible'

let whichturn=document.getElementById("gameinfo")

let turn="O"
let found=0
function func1(){
  if(found==1) return
  if(c1.innerText.length==0) c1.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn
 
let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[0][0]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func2(){
  if(found==1) return
  if(c2.innerText.length==0) c2.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[0][1]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func3(){
  if(found==1) return
  if(c3.innerText.length==0) c3.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[0][2]+" Won the Game"
  document.getElementById("ora").innerText=""
  found=1
  playAudio('Spiderman.mp3')
}
else{
  playAudio('ting.mp3')
}

}

function func4(){
  if(found==1) return
  if(c4.innerText.length==0) c4.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[1][0]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func5(){
  if(found==1) return
  if(c5.innerText.length==0) c5.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[1][1]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func6(){
  if(found==1) return
  if(c6.innerText.length==0) c6.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[1][2]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func7(){
  if(found==1) return
  if(c7.innerText.length==0) c7.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[2][0]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}else{
  playAudio('ting.mp3')
}


}

function func8(){
  if(found==1) return
  if(c8.innerText.length==0) c8.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0
//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[2][1]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

function func9(){
  if(found==1) return
  if(c9.innerText.length==0) c9.innerText=turn
  if(turn=="O") turn="X"
  else turn="O"
 whichturn.innerHTML=turn

 let arr=[
  [c1.innerText,c2.innerText,c3.innerText],
  [c4.innerText,c5.innerText,c6.innerText],
  [c7.innerText,c8.innerText,c9.innerText]
]
let flg=0

//rows checked
if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!="") flg=1
if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!="") flg=1
if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!="") flg=1

//col checked

if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]  && arr[0][0]!="") flg=1
if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!="") flg=1
if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!="") flg=1

// now diagonals
if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!="") flg=1
if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!="") flg=1

if(flg==1){
  img.style.visibility='visible'
  whichturn.innerHTML=arr[2][2]+" Won the Game"
  playAudio('Spiderman.mp3')
  document.getElementById("ora").innerText=""
  found=1
}
else{
  playAudio('ting.mp3')
}

}

f1.addEventListener("click",func1)
f2.addEventListener("click",func2)
f3.addEventListener("click",func3)
f4.addEventListener("click",func4)
f5.addEventListener("click",func5)
f6.addEventListener("click",func6)
f7.addEventListener("click",func7)
f8.addEventListener("click",func8)
f9.addEventListener("click",func9)

function playAudio(url) {
  new Audio(url).play();
}

function reload(){
  window.location.reload()
}

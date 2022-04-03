
// DEFINE AND DECLARE THE FUNCTIONS 

let vocali  = ["La","Lu","Me","Ti","Fa"];
let	letters = ["mo","ti","re","si","co"];
let picarray = ["maltese","bassotto","pincher","pastore","buldog"]
let random =(Math.floor(Math.random()*5))
let random1 =(Math.floor(Math.random()*5))
let section=document.getElementById("section")
let pet=document.getElementById("pet")
let objects = document.getElementsByClassName("objects")
let audioFood = new Audio("food.mp3")
let audioDrink= new Audio("drink.mp3")
let audioWalk= new Audio("walk.mp3")
let audioTrain= new Audio("train.mp3")
let audioSleep= new Audio("sleep.mp3")
let btnStart=document.getElementById("start")
let btnName=document.getElementById("name")
let onehour= 3600000
let nav =document.getElementById("nav")
let info=document.getElementById("info")
console.log(random)


// INFO OF THE GAME 

info.addEventListener("click",infoGame)

function infoGame(){

	alert(" this id the pop up that explain how to play the game ")
}


// START THE GAME WITH THE BUTTON

btnStart.addEventListener("click",startGame)

function startGame(){
	main()
	main1()
	main2()
	main3()
	main4()
}


// CHOOSE THE NAME AND ADDING PICTURE

btnName.addEventListener("click",name)

let dogname =""
let pictures=""
function name(){
	for (let i =0;i<6;i++){
		let na=(vocali[random])
		let me=(letters[random1])
		pictures = picarray[random]
		dogname =na+me}
		let item=document.createElement("div")
		item.setAttribute("class","name")
		let text=document.createTextNode("Name:"+dogname)
		item.appendChild(text)
		nav.appendChild(item)
		pet.setAttribute("class",pictures)

	}
	

// ADDING EVENT LISTENER TO THE PET AND DEFINE THE FUNCTIONS RELEATED 


for (let x of objects ){
	x.addEventListener("dragstart", dragStart)
	x.addEventListener("dragend", dragEnd)

}

function dragStart(event){
	
	event.dataTransfer.setData("text/plain",event.target.id);

}

function dragEnd(){
	
}



// ADD EVENT LISTENER TO THE DRAGGABLE ITEMS 

pet.addEventListener("dragover",dragOver)
pet.addEventListener("dragenter",dragEnter)
pet.addEventListener("dragleave",dragLeave)
pet.addEventListener("drop",dragDrop)




// SET THE TIMERS FOR DOG NEEDS 

let intervallFood=null
function main(){
	intervallFood=setInterval(barkforFood,60000)

	function barkforFood(){
		audioFood.play();}}

		function stopintervalFood(){
			clearInterval(intervallFood);
		}
		let intervalDrink=null
		function main1(){
			intervalDrink=setInterval(barkforDrink,80000)

			function barkforDrink(){
				audioDrink.play()

			}}
			function stopIntervalDrink(){
				clearInterval(intervalDrink)
			}
			let intervalWalk=null

			function main2(){
				intervalWalk=setInterval(barkforWalk, 100000)

				function barkforWalk(){

					audioWalk.play()
				}}
				function stopintervalWalk(){
					clearInterval(intervalWalk)
				}

				let intervalSleep=null
				function main3(){
					intervalSleep=setInterval(intervaltoSleep, 120000)

					function intervaltoSleep(){
						audioSleep.play()

					}}

					function stopIntervalSleep(){
						clearInterval(intervalSleep)
					}

					let intervalTrain=null
					function main4(){
						intervalTrain=setInterval(intervaltoTrain,60000)

						function intervaltoTrain(){
							audioTrain.play()
						}}

						function stopintervaltrain(){
							clearInterval(intervalTrain)
						}


// DEFINE FUNCTIONS FOR DRAGABLE ITEMS  


function dragOver(e){
	e.preventDefault()
	this.style.backgroundColor ="green"
}

function dragEnter(e){
	e.preventDefault()
}


function dragLeave(){
	this.style.backgroundColor ="black"}

	function dragDrop(event){
		let idOfbox = event.dataTransfer.getData("text/plain");
		let divToDrop = document.getElementById(idOfbox);
		if (divToDrop.id==="food"){
			stopintervalFood()
			main()}
			else if (divToDrop.id==="drink"){
				stopIntervalDrink()
				main1()

			}else if (divToDrop.id==="walk"){
				stopintervalWalk()
				main2()
			}else if (divToDrop.id==="sleep"){
				stopIntervalSleep()
				main3()
			}else if (divToDrop.id==="train"){
				stopintervaltrain()
				main4()
			}}





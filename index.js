// document.querySelectorAll(".img-div").forEach(element=>{
//     element.addEventListener("mouseenter",(event)=>{
//         event.target.style.backgroundColor="rgba(0, 0, 0, 0.15)"
//     })
// })

document.querySelectorAll(".img-div").forEach(element=>{
    element.addEventListener("click",(event)=>{
        // event.currentTarget.style.backgroundColor="#4A628A"
        // event.currentTarget.querySelector("svg").style.fill="#B9E5E8"
        
        letsPlay(event.currentTarget.id)
    })
})

// document.querySelectorAll(".img-div").forEach(element=>{
//     element.addEventListener("mouseleave",(event)=>{
//         event.target.style.backgroundColor="#B9E5E8"
//     })
// })


function letsPlay(no){
    let computerChoice=getComputerChoice()
    console.log("comp choice: "+computerChoice)
    console.log("human choice: "+no)
    let humanChoice=no
    
    let list=document.querySelector(".main-row")

    let humanelement=list.children[humanChoice-1].children[0]
    let computerelement=list.children[computerChoice-1].children[0]
    
    let humanBox=document.createElement("div")
    let computerBox=document.createElement("div")

    let humanText=document.createElement("h1")
    let computerText=document.createElement("h1")

    humanText.innerText="YOUR CHOICE :"
    computerText.innerText="COMPUTER CHOICE :"

    humanBox.appendChild(humanText)
    humanBox.append(humanelement)

    computerBox.appendChild(computerText)
    computerBox.appendChild(computerelement)
   
    // humanelement.appendChild(text)
    // list.removeChild(list.firstChild)
    list.removeChild(list.children[0]);
    list.removeChild(list.children[0]);
    list.removeChild(list.children[0]);
    list.innerHTML = '';
    // list.appendChild(humanelement.cloneNode(true))
    // list.appendChild(computerelement.cloneNode(true))
    list.appendChild(humanBox.cloneNode(true))
    list.appendChild(computerBox.cloneNode(true))
    console.log("removed ")

    let main_text=document.querySelector(".main-text")
    let text2=main_text.cloneNode(true)

    main_text.textContent="Your Choice :"
    text2.textContent="Computer choice :"
    let textbox=document.querySelector(".text-box")
    // textbox.style.width="50%"

    textbox.appendChild(text2)
    let text3=main_text.cloneNode(true)
    text3.innerHTML=getResult(humanChoice,computerChoice)
    document.querySelector(".main-container").appendChild(text3)

    let button=document.createElement("button")
    button.textContent="Play Again"
    button.addEventListener("click",()=>{
        var audio = new Audio('a drum.mp3');
        audio.play();
        location.reload(true);
    })
    document.querySelector(".main-container").appendChild(button)
}

function getComputerChoice(){
   return Math.floor(Math.random()*3)+1
}

function getResult(humanChoice,computerChoice){
    if(humanChoice==1 && computerChoice==3){
     return "You Win !!"
    }
    else if(humanChoice==2 && computerChoice==1){
     return "You Win !!"
    }
    else if(humanChoice==3 && computerChoice==2){
     return "You Win !!"
    }
    else if(humanChoice==computerChoice)
        return "DRAW !!"
    else return "You Lost !!"
}




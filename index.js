document.querySelectorAll(".img-div").forEach(element=>{
    element.addEventListener("click",(event)=>{

        console.log("Clicked : "+event.currentTarget.id)
        letsPlay(event.currentTarget.id)
    })
})



function letsPlay(no){
    let computerChoice=getComputerChoice()
    console.log("comp choice: "+computerChoice)
    console.log("human choice: "+no)
    let humanChoice=no

    
    let list=document.querySelector(".main-div")
    let midElement=document.getElementById("mid-id")
    midElement.remove()

    let humanelement=list.children[humanChoice-1].children[0].cloneNode(true);
    let computerelement=list.children[computerChoice-1].children[0].cloneNode(true);
    
    let humanBox=document.createElement("div")
    let computerBox=document.createElement("div")

    humanBox.className="element-div"
    computerBox.className="element-div"

    let humanText=document.createElement("h1")
    let computerText=document.createElement("h1")

    humanText.innerText="Your choice :"
    computerText.innerText="Computer choice :"
    humanBox.classList.add("non-clickable");
    computerBox.classList.add("non-clickable");
    humanBox.appendChild(humanText)
    humanBox.append(humanelement)

    computerBox.appendChild(computerText)
    computerBox.appendChild(computerelement)
   
    // humanelement.appendChild(text)
    // list.removeChild(list.firstChild)
    // list.removeChild(list.children[0]);
    // list.removeChild(list.children[0]);
    // list.removeChild(list.children[0]);
    list.innerHTML = '';

    list.appendChild(humanBox)
    list.appendChild(computerBox)
    
    let text3=document.createElement("h1")
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
      win();  return "You Win !!"
    }
    else if(humanChoice==2 && computerChoice==1){
        win();  return "You Win !!"
    }
    else if(humanChoice==3 && computerChoice==2){
        win();  return "You Win !!"
    }
    else if(humanChoice==computerChoice)
        return "DRAW !!"
    else return "You Lost !!"
}

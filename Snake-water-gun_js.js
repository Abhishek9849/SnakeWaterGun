let userScore = 0;
let computeScore =0;
let userChoice;
let counter = 0



const ArrNames = ["snake", "water", "gun"]
getRandomNumber = () =>{
    return Math.floor(Math.random()*3)
}


playgame = (userChoice) =>{

    
    let IndexNumber = getRandomNumber()
    let computerChoice = ArrNames[IndexNumber]
    

    // console.log("Your choice is: "+ userChoice, "computer choice is: "+ computerChoice)
    

    if(userChoice === computerChoice){
        // console.log("draw")
        document.getElementById("display-result").innerText = "Hey, It's a draw!"
    } else{
        if(userChoice === "snake"){
                if(computerChoice === "gun"){
                    // console.log("computer win")
                    computeScore++
                    document.getElementById("computer-result").innerText = computeScore
                    // console.log("computer's score is:" + computeScore)
                    document.getElementById("display-result").innerText = "OOps! The computer won. The " + computerChoice + " bet your " + userChoice + "."
                    
                }
                else if(computerChoice === "water"){
                    // console.log("you win")
                    userScore++
                    document.getElementById("user-result").innerText = userScore
                    // console.log("your score is:"+ userScore)
                    document.getElementById("display-result").innerText = "Congrats! you won. Your "+userChoice +" beats the "+computerChoice +"."
            }
        }

        else if(userChoice === "water"){
                if(computerChoice === "gun"){
                    console.log("You win")
                    userScore++
                    document.getElementById("user-result").innerText = userScore
                    console.log("your score is: "+ userScore)
                    document.getElementById("display-result").innerText = "Congrats! you won. Your "+userChoice +" beats the "+computerChoice +"."
                }
                else if(computerChoice === "snake"){
                    console.log("Computer win")
                    computeScore++
                    document.getElementById("computer-result").innerText = computeScore
                    console.log("computer score is:" + computeScore)
                    document.getElementById("display-result").innerText = "OOps! The computer won. The " + computerChoice + " bet your " + userChoice + "."
                }
        }


        else if(userChoice === "gun"){
                if(computerChoice === "snake"){
                    console.log("You win")
                    userScore++
                    document.getElementById("user-result").innerText = userScore
                    console.log("your score is:" + userScore)
                    document.getElementById("display-result").innerText = "Congrats! you won. Your "+userChoice +" beats the "+computerChoice +"."
                }
                else if(computerChoice === "water"){
                    console.log("computer win")
                    computeScore++
                    document.getElementById("computer-result").innerText = computeScore
                    console.log("computer score is:"+ computeScore)
                    document.getElementById("display-result").innerText = "OOps! The computer won. The " + computerChoice + " bet your " + userChoice + "."
                }
        }
    }

        // if(userScore > computeScore){
        //     document.getElementById("display-result").innerText = "Congrats! you are in Lead. Your "+userChoice +" beats the "+computerChoice +"."
        // }
        // else{
        //     document.getElementById("display-result").innerText = "OOps! you are down. The " + computerChoice + " bet your " + userChoice + "."
        // }
    }       





let start = document.querySelector("#start")
let endbtn = document.getElementById("end")

let count = 0
start.onclick = () =>{
    // while( count < 1){
        start.innerText = "started"
        document.body.style.backgroundColor = "pink"
        // let btn = document.querySelector("#button")
        // let end = document.createElement("button")
        // end.textContent = "End"
        // end.id = "end"
        // btn.appendChild(end)
        count = count + 1
        endbtn.hidden = false

    // } 
    
   
}


endbtn.checkVisibility = true


endbtn.onclick = () => {
    let isTrue = confirm("Would you like to end the game?")
    if(isTrue){
        userScore = 0
        computeScore = 0
        document.getElementById("computer-result").innerText = 0
        document.getElementById("user-result").innerText = 0
        document.getElementById("display-result").innerText = "Thank you for playing."
        start.innerText = "Let's play"
        document.body.style.backgroundColor = "#ffd18e"
        endbtn.hidden = true
    }


}





let choice = document.querySelectorAll("img")


choice.forEach((value)=>{
    value.addEventListener('click',()=>{
        userChoice = value.getAttribute("alt")
        // console.log(userChoice)
        playgame(userChoice)
        counter++
    })
})






// console.log("Thanks for playing!")
// document.getElementById("display-result").innerText = "Thanks for playing."




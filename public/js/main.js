let resultScreen = document.querySelector("h3")
let numbersElements = document.querySelectorAll("button")

let calculator = ""
// let lastElement=""

Array.from(numbersElements).forEach(element => {
    calculator=""
    element.addEventListener('click', ()=>{
        // if (lastElement == (element.value.length-1)) {
        //     resultScreen.disabled = true
        // }
        if (calculator=="" && ["+","-","/","*"].includes(element.value)) { //condition that forbid to click for the first time on the operator
            return;
        }
        try{
            if(element.value === "="){ //si appuie sur "=" alors texte du calcul affiché dans la barre de résultat
                resultScreen.innerText = eval(calculator) //display a string
            } 

            else if (element.value === "C") { //reset à 0
                resultScreen.innerText = "0"
                calculator=" " //vide
            }
            
            else{
                console.log(element.value);
                calculator += element.value //increment the value of the button into the calculator
                // resultScreen.innerText=eval(calculator) //displaying the result of the calcul
                resultScreen.innerText = calculator
                console.log(calculator);
            }

        }
        catch(err){
            resultScreen.innerText="ERROR"
        }
          
    })
    
})




























// let frameSection = document.querySelector("section")
// let sectionOperator = document.createElement("div")
// sectionOperator.style.width="100px"
// sectionOperator.style.display="flex"
// //Buttons for operations
// let buttonsOp

// for (let index = 0; index < 5; index++) {
//     buttonsOp = document.createElement("div")  
//     sectionOperator.appendChild(buttonsOp)
//     buttonsOp.classList="operators"

// }
// buttonsOp=document.querySelectorAll(".operators")

// buttonsOp.forEach(element => {
//     element.style.border="1px solid black"
//     element.style.width="60px"
//     element.style.height="60px"
//     // element.style.display="flex"
//     element.style.justifyContent="space-around"
//     element.style.gap="10px"

// })

// console.log(buttonsOp);
// //Buttons for numbers
// let buttonsNb
// for (let index = 0; index < 10; index++) {
//     buttonsNb = document.createElement("div")
//     buttonsNb.classList="numbers"
//     frameSection.appendChild(buttonsNb) 
// }
// buttonsNb = document.querySelectorAll(".numbers")

// buttonsNb.forEach(element => {
//     element.style.border="1px solid black"
//     element.style.width="60px"
//     element.style.height="60px"
//     element.style.display="flex"
//     element.style.justifyContent="space-around"
//     element.style.gap="10px"
// })

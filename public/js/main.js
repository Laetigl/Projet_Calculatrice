let resultScreen = document.querySelector("h3")
let numbersElements = document.querySelectorAll("button")

let calculator = ""
//P.S. : The value assign to the buttons will be useful for the calculation: calcul will be executed by refering to the value itself

Array.from(numbersElements).forEach(element => {
    calculator=""
    element.addEventListener('click', ()=>{
        //First condition to prevent to use an operators first :
        if (calculator == "" && ["+","-","/","*"].includes(element.value)) { //condition that forbid to click for the first time on the operator : if the calculator is empty and the value of the button is one of the operators
            return; //if it's the case, the operation will not run
        }

        //Second condition to prevent to replicate an operator in the calculator :
        if (["+","-","/","*"].includes(element.value) && ["+","-","/","*"].includes(calculator.slice(-1))) { //condition that will forbid to used 2 times in  a row the operators: will check if the operators are in the element AND if the last element of the calculator included it
            return;//if it's the case, the operation will not run
        }

        try{ //try function will run the statement
            if(element.value === "="){ //si appuie sur "=" alors texte du calcul affiché dans la barre de résultat
                resultScreen.innerText = eval(calculator) //display a string of the calculation donne
            } 

            else if (element.value === "C") { //reset to 0
                resultScreen.innerText = "0"
                calculator=" " //empty the calcul
            }
            
            else{
                console.log(element.value);
                calculator += element.value //increment the value of the button into the calculator
                // resultScreen.innerText=eval(calculator) //displaying the result of the calcul
                resultScreen.innerText = calculator
                console.log(calculator);
            }

        }
        catch(err){  //the catch function will display a message (here "ERROR") if he finds that the statement is not possible
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

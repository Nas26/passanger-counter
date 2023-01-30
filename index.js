//document.getElementById("count-el").innerText=5;
/*let count=0;
console.log(count)

 function increment(){
    console.log("button was clicked")
} */

/* let saveEl = document.getElementById("save-el")
let countE1 = document.getElementById("count-el")

let count =0;
 

function increment(){
    count+=1
    countE1.innerText= count
    
 }
 
 
 function save(){
   // let countStr = count + " - "
   // saveE1.innerText = countStr
   let countStr = count + " - "
   saveEl.innerText += countStr
    }
 */

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent =0
    count = 0
}



    









 

 
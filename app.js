let countEl = document.getElementById("counter")

console.log(countEl)
let count = 0


function increment() {
    count = count + 1
    countEl.innerText = count
    

}


function save() {
    let countStr = count + " - "
saveEl.innerText += countStr
console.log(count)
}

let saveEl = document.getElementById("save-el")




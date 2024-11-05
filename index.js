let massive = [["Олег",24],["Милана",12],["Катя",32]]

let numberOfPatients = 1;

for(let i =0; i < numberOfPatients ; i++){
    let name = prompt("Введите имя больного")
    let age = Number(prompt("Введите возраст больного"))
    massive.push([name,age])
}


let filterMassive = massive.filter((element) => {
    if(element[1] > 18)
         return element
})

console.log(filterMassive)

let mapMassive = massive.map((element) => {
    return element[1] + 1
})
console.log(mapMassive)


let reduceMassive = massive.reduce((total,element) => {
    return total + element[1] / massive.length
},0)

console.log(reduceMassive)

let sortMassive = massive.sort((a,b) => {
   return a - b
} )

console.log(sortMassive)

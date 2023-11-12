let x = "hey class"
let a: string = "im a string"
let b: string | number | boolean = "im a string"
console.log(typeof(x))

b = 12345

console.log(typeof(x))

b = false

console.log(typeof(x)) 



function testMyTypeScript(num1:number, num2:number)
{
    return num1 * num2
}
console.log(testMyTypeScript(23, 45) )

// Arrays in typescript

function myArrayFunction (arr1: string[]){
    console.log(arr1)
}
    myArrayFunction(["hello", "world"])


// Objects in typescript

type TBird = {
    wings: number
    beak: boolean
    color?: string
    feathers: number

}


const bird1: TBird = {wings: 2, beak: "true", color: "red"}
const bird2: TBird = {wings:4, beak: "false", color: "blue", feathers: 1000}
const bird3: TBird = {wings: 10, beak: "true", color: "green", feathers: 2000}


 // Interfaces in typescript
 

interface IBird {
    wings: number
    beak: boolean
    color?: string
    feathers: number



    
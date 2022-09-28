console.log("Problem 1 ")

function sayHi(name){
    return "Hi " + name
}

console.log(sayHi("John "))

console.log("\n")
console.log("Problem 2")


function bigString(myName, myLastName){
    if(myName.length < myLastName.length){
        return myName
    }else if(myName.length > myLastName.length){
        return myLastName
    }else if(myName.length === myLastName.length){
        console.log(myName + " "+ myLastName)
        return
    }
}
 console.log(bigString("John", "Martinez"))
 console.log(bigString("Martinez", "John"))
 bigString("Martinez", "Martinez")

 console.log("\n")
 console.log("Problem 3 ")


 function bigNumber(num1, num2){

    if(num1 > num2){
        return num1
    }else if(num1 < num2){
        return num2
    }else if(num1 === num2){
        console.log(num1 + " "+  num2)
        return
 }
}

console.log(bigNumber(11, 2))//str1 is greater
console.log(bigNumber(22 , 111))//str2 is greater
bigNumber(22, 22)//both str1 and str2 are equal

console.log("\n")
console.log("Problem 4 ")



function fiveMore(add){
for (let i = 0; i < add.length; i++){
    if(add[i] % 2 !==0){
    add[i] += 5
    }
}
return add
}

console.log(fiveMore([1,2,3,4]))
console.log(fiveMore([11,22,33,44]))
console.log(fiveMore([55,66,77,88]))


    
console.log("\n")
console.log("Problem 5 ")


function arraySummer(array1){
    let sum = 0
    for(let a = 0; a <array1.length; a++ ){
      sum += array1[a]
    }
        return sum
}
console.log(arraySummer([5,5,5,5]))



console.log("\n")
console.log("Problem 6 ")

function everyDivisible(n){
    for(let numb = 0; numb <= 100; numb++){
    if(numb % n === 0){
    console.log(numb)
   }
}
}
everyDivisible(5)
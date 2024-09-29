var numbers = [10,20,30,25,58]
console.log(numbers.indexOf(30))

console.log('how element in array: arryName.length')
console.log(numbers.length)

console.log('add array in Last')
numbers.push(100)
console.log(numbers)

console.log('add array in first')
numbers.unshift(313)
console.log(numbers)
// **************************************

console.log('pop and shift')
var numbers2 = [10,20,30,25,58,]
numbers2.pop()
numbers2.shift()
console.log(numbers2)


// ****************************************
console.log('*****************')
// array এর লাস্ট নাম্বার থেকে  -1  করে দিলে array  এর লাস্ট ভেলুটা পাওয়া যাবে।
 var numbers = [10,20,30,25,58,25,28,85]
 console.log(numbers[numbers.length-1]);
// *********************************

console.log('slice')
// স্লাইসঃ ২টা নাম্বার দিতে হবে, কোন ইনডেক্স থেকে শুরু এবং কোন ইনডেক্স এর আগ পর্যন্ত 
var numbers = [10,20,30,25,58,25,28,85]
console.log(numbers.slice(0,2))
console.log(numbers.slice(1,2))
console.log(numbers.slice(0,3))

// স্লাইসঃ আর কোনো একটা নাম্বার দিলে , ঐ ইনডেক্স থেকে পরের সব গুলো দিয়ে দিবে।
console.log(numbers.slice(2))
console.log(numbers.slice(3))
// **********************************************

console.log('************************')
console.log('splice Method')
// splice: 3 ta man dite hobe: start , delateCount, ,element1,element1......
var numbers = [10,20,30,25,58,25,28,85]
numbers.splice(2,1,100)
console.log(numbers)

var numbers = [10,20,30,25,58,25,28,85]
numbers.splice(2,1)
console.log(numbers)


var numbers = [10,20,30,25,58,25,28,85]
numbers.splice(2,0,300,400)
console.log(numbers)


var numbers = [10,20,30,25,58,25,28,85]
numbers.splice(3,0,300,400)
console.log(numbers)

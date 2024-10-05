const myBio = {
    name : "Aminul Haque Rana",
    age : 23,
    "is Male": true,
    color: 'Black',
    isMarrid: false,
    
}

// without templete String
let sentence = "my name is " + myBio.name+". I am "+ myBio.age+" Years old"
console.log(sentence)

// use templete_String 
// 1 ar বাম পারে ব্যাকটিক ` ` নামক একটি key  আছে  ঐটা ব্যবহার করতে হয়।
let smart_sentence = `My namem is ${myBio.name}. I am in ${myBio.age} years old. My color is ${myBio.color}`
console.log(smart_sentence)
// JS object syntax
// const objectName :{
//     propertyName : PropertyValue;
// }

const myBio = {
    name : "Aminul Haque Rana",
    age : 23,
    "is Male": true,
    color: 'Black',
    isMarrid: false,
    
}
console.log(myBio)
console.log(myBio.age)

// এখানে name, age, "is Male", color, isMarrid   এগুলো হলো প্রপার্টি key আর "Aminul Haque Rana", 23, true, black, false হলো প্রপার্টি ভ্যালু।


// যখন  প্রপার্টি name or key  এর মাঝে কোনো প্সেস বা হাইফেন থাকবে তখন ডট নোটেশন দিয়ে ভ্যালু পাওয়া যাবে না। সেখানে ব্রাকেট নোটেশন ব্যাবহার করতে হবে। যেমন: is Male এ console.log(myBio.is Male) এভাবে ডড নোটেশন দিছে ইরর আসবে।
// তাই এখানে ব্রাকেট নোটেশন দিতে হবে। 

console.log(myBio[" is Male"])

// Object কে আলাদা ভেরিয়েবলে সেট করা বা রাখা যায় 
// let isGroom = myBio.isMarrid; or 
let isGroom = myBio["isMarrid"];
console.log(isGroom)

console.log('******Change property value & add property*******')
myBio.color = " white";
myBio.age = 24;
// add property 
myBio.education = "Honors 3rd year"
myBio["sub_name"]= "Economics"
console.log(myBio)

console.log('*********How to delate property***********')
delete myBio.age
console.log(myBio)


console.log('********* use Loop in object******* ')
// array এর মধ্যে লুপ চালাতে হলে  of  ব্যবহার করা হয় আর Object এর মধ্যে লুপ চালাতে হলে in ব্যবহার করা হয়।
 
for (key in myBio){
    // how to get property name 
    // console.log(key)
    // how to get value 
    console.log(myBio[key])
}


// ******* Nested objects *****************
console.log('****** Nested objects ***********')
const myEdu = {
    clgName : {
        firstName : 'Gurudayal',
        muddleName: 'Gov',
        lastName: 'collage'
    },
    seassion : 2022,
    subject: ['Bangla', 'English', 'Economics'],
}
console.log(myEdu.clgName.lastName)
console.log(myEdu.subject)

// subject ar value যেহেতু  array আকারে আছে তাই এখানে ইনডেকক্স নাম্বার দিতে হবে।
console.log(myEdu.subject[0])
console.log(myEdu.subject[2])





































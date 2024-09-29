var num = 10.22;
console.log(parseInt(num))
var num2 = '20.54';
console.log(num2)
console.log(typeof num2)

// দশমিক তুলতে হলে
console.log(parseInt(num2))

// স্টি্রং থেকে নাম্বারে কনভার্ট হবে , কিন্তু দশমিক ও থেকে যাবে।।

console.log(parseFloat(num))

// *************************************************************************
// দশমিকের পর নির্দিষ্ট নাম্বার নেওয়ার উপায়
console.log(" Explore দশমিকের পর নির্দিষ্ট নাম্বার নেওয়ার উপায়")

 var rana = 34.2422525
 console.log(rana)
  var change = rana.toFixed(1)
  console.log(change)
//  toFixed করার পর সেটি স্ট্রিং হয়ে যায়, তাই আবার parseFloat  করে নিতে হবে।
console.log(parseFloat(change))


// ******************************************************************
console.log('Explorej isNaN')
// isNaN
console.log(isNaN(23))
console.log(isNaN('23'))
console.log(isNaN('abd'))
// উপরের ২টাই false  আসবে, কারণ isNaN  চেক করে ২ টা জিনিস
//             ১. নাম্বার কীনা
//             ২. নাম্বারে কনভার্ট করা যাবে কীনা
//  উপরের ২৩ যেহেতু নাম্বার এবং “২৩” কে নাম্বারে কনভার্ট করা যাবে তাই false  আসবে।
// আর যদি নাম্বার না হয় , এবং নাম্বারে কনভার্ট করাও না যায় তাহলে true দিবে।


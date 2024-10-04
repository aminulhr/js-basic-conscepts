    // for(let i =1; i<=10; i++){
    //     console.log(i ,' Rana')
    // }

    console.log('how to get value from')
    const nums = [23,25,6,5,89,86,80,75];

    // Array এর last index এর মানঃ Array যত length হয় . তার থেকে এক কম হয়।করণ  Array এর index শুরু হয় জেরো 0 থেকে।

    // for ( let i = 0; i < nums.length; i++){
    //     console.log(nums[i])
    // } 

    // 2 or 

    for ( let i = 0; i <= nums.length-2; i++){
        console.log(nums[i])
    }
    
    // 3 or 
    console.log('get item in variable')
    for ( item of nums){
        console.log(item)
    }

    // উপরেরটাতে i এর সমান না ধরে i এর থেকে কম নেওয়া হয়েছে, তাই ১ বিয়োগ করা হয়নি।  নিচেরটাতে i এর সমান বা কম নেওয়া হয়েছে তাই ১ বিয়োগ েকরা হলো, 1 মাইনাস না করলে ১টি ঘর আনডিফাইন আসবে।


    console.log(" Sum of Even and odd numbers");
const num2 = [54,45,78,65,92,12,35];
let sumofodd = 0;
let sumoeven = 0;

for ( sumItem of num2){
    console.log(sumItem)
}

for ( let i= 0; i < num2.length; i++){
    const x = num2[i];
    if(x%2 ===1 ){
     sumofodd += x;

    }else{
        sumoeven += x;
    }
}
console.log(sumoeven)
console.log(sumofodd)
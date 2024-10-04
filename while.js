var name = 1;
while ( name  <= 5) {
    console.log(name+ " Rana")
    name++;
}

// 1 to 10 sum 
let i = 1;
let sum = 0;
while (i <= 10 ){
    // sum = sum+1;
    sum+=i;   
    i++; 
}
console.log(sum)
let nums = 14;
while(nums< 16 ){
    console.log("gratter")
    nums++;
}
let nums2 = 14;
while(nums2> 19 ){
    console.log("gratter")
    nums2++;
}

console.log('do while loop')

do{
    console.log(nums2);
    nums2++;
}
while(nums2 >20);

// do while লুপে মাস্ট লুপটি একবার চলবে , তারপর কন্ডিশন চেক করবে। আর while লুপে আগে কন্ডিশন চেক করবে। তারপর রান হবে।
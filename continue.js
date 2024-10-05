
// শর্তনুসারে skip  করে যাবে।
const nums = [23,25,6,5,89,86,80,75];

for(let item of nums){
    if( item % 2 === 0){
        continue;
    }
    console.log(item)
}

// শর্তনুসারে নির্দষ্ট জায়গায় গিয়ে আর চলবে না। অর্থ্যৎ ব্রেক করবে।
const nums = [23,25,6,5,89,86,80,75];

for(let item of nums){
    console.log(item);
    if( item ===5){
        break;
    }
}
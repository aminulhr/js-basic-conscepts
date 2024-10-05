const a = 'rana';
const b = 'Rana';

if( a === b ){
    console.log('both ar same')
} else{
    console.log('both ar defrent')
}

// use toLowerCase() to make all lowercase

const x = 'rana';
const y = 'Rana';

if( x.toLowerCase() === y.toLowerCase() ){
    console.log('both ar same')
} else{
    console.log('both ar defrent')
}


console.log('*********Includes********:');

const c = 'Aminul Haque'
const d = 'aminul'
console.log(c.includes(d))

const e = 'Aminul Haque'
const f = 'aminul'
console.log(e.toLowerCase().includes(f.toLowerCase()))



console.log('*******Uses of trim()*********')
// আশেপাসে কোনো স্পেস থাকলে তা রিমুভ করে। বা trim() ব্যাবহার করতে হয়।
let g = 'Haque'
let h = 'Haque '
if(g===h){
    console.log('same')
}else{
    console.log('deffrent')
}

let g2 = 'Haque'
let h2 = 'Haque '
if(g2.trim()===h2.trim()){
    console.log('same')
}else{
    console.log('deffrent')
}

let g3 = 'Haque'
let h3 = 'haque '
if(g3.trim().toLowerCase()===h3.trim().toLowerCase()){
    console.log('same')
}else{
    console.log('deffrent')
}


































































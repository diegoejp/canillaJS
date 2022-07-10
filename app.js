const fs = require('fs');

console.clear();
console.log('================');
console.log('   Tabla del 5');
console.log('================');

const n = 5;
let salida ='';

for(let i =1; i<=10; i++){
    salida += (`${n} x ${i} = ${n*i}\n`)
}

fs.writeFile('tabla-5.txt',salida, (err)=>{
    if (err) throw(err);

    console.log('Tabla creada');
})
const fs = require('fs');

const n = 3;
console.clear();
console.log('================');
console.log(`   Tabla del ${n}`);
console.log('================');

let salida ='';

for(let i =1; i<=10; i++){
    salida += (`${n} x ${i} = ${n*i}\n`)
}
console.log(salida);
fs.writeFile(`tabla-${n}.txt`,salida, (err)=>{
    if (err) throw(err);

    console.log(`tabla-${n}.txt Creada`);
})
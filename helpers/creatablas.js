const fs = require('fs');

const generateTable = (base)=>{
    for (let i = 1; i <= 10; i++)
    {
        salida += (`${base} x ${i} = ${base * i}\n`)
    }

    return salida
}

const crearArchivo = (salida,base)=>{
    console.log(salida);
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw (err);
        console.log(`tabla-${base}.txt Creada`);
    })
}

const tablaDeMultiplicar = async(base)=>{

    console.clear();
    console.log('================');
    console.log(`   Tabla del ${base}`);
    console.log('================');

    let salida = await generateTable(base);
    crearArchivo(salida, base);
    
};

module.exports={
    tablaDeMultiplicar
}
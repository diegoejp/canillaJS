let salida= [];
const generateTable = (base) => {
    for (let i = 1; i <= 10; i++)
    {
        salida.push(`${base} x ${i} = ${base * i}`)
    }

    return salida
}

const imprimir = (arr)=>{
    for (i of arr){
        console.log(i);
    }
}

const btn = document.querySelector("#btn");
const inputN = document.querySelector("#inputN");
const inputS = document.querySelector("#inputS");

    btn.addEventListener("click", function(){
        let tabla = generateTable(inputN.value);
        imprimir(tabla);
        inputS.textContent = tabla;
});
    

let listPropiedades = [];
const readline = require('readline-sync');
do{
    var propriedade = readline.question("informe uma propiedade ou digite sair para sair ");
    if(propriedade != "sair")
    {
        listPropiedades.push(propriedade)
    }
}while(propriedade != "sair")

console.log(listPropiedades.sort());

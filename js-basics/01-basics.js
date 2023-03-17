const faculdade ='Estacio '
const sigla ='FIC'
const fullName = faculdade + ' - ' + sigla;
const meuNome = 'Daniel';
const minhaIdade = '42'; 
const minhaProfissao = 'Desenvolvedor';
const meuBairro = 'Alvaro Weyne';
const teste1 = 'Meu nome é '+ meuNome + 'tenho '+ minhaIdade + ' anos';
const teste2 = 'Meu nome é `$(meuNome) tenho '+ minhaIdade + ' anos';

let a =10;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a==b);
console.log(Math.sqrt(a));

let array = [1,2,3,4,5];
let array2 = ['a','b','c','d','e'];
let array3 = [1,true,2.5,'daniel',[10,'a',true]];


console.log(array3[5][2]);

//interadores
for(let i=0; i< array3.length;i++){
    console.log(array3[i]);
}

array3.forEach(element =>{
    console.log(element);
});

const array5 = array3.map(element2 => {
    console.log(element2);
    return element2 + 'teste';
});

console.log(array5);

const array4 = array3.filter( element =>{
    return element ===2.5;
});


//funcoes
function somar (a, b){
    return a+b;
}

const subtrair = function (a, b){
    return a-b;
}

const multiplicar  = (a, b) =>{
    return a*b;
}

function dividir (a, b){
    return a/b;
}

//a=10
//b=5

const operacaoComplexa = (a,b) => {

    const soma = somar(a,b); //15
    const subtracao = subtrair(a, somar(soma,b));
    const multiplicacao =  multiplicar(
        multiplicar(
            somar(a,soma),subtrair(subtracao,somar(subtracao,b))
        ),b
    );
    return soma + subtracao + multiplicacao;
    console.log(soma , subtracao, multiplicacao);
}
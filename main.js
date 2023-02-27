let numeros = [1, 10, 12, 15, 69, 87, 88, 120, 255, 295, 325]
/*


function numeroBig(num) {
    let numeroMaior = 0

    for (let i = 0; i < num.length; i++) {

        let numeroAtual = num[i]
        if (numeroAtual > numeroMaior) {
            numeroMaior = numeroAtual

        }

    }

    return numeroMaior
}



let resul = numeroBig(numeros)


//console.log(resul)

function encotraNum(num, numPesquisa) {

    for (let i = 0; i < num.length; i++) {
        let foundNumbers = num[i]
        if (foundNumbers == numPesquisa) {
            return `O numero encontrado é : ${foundNumbers} e sua posição é: ${[i]}`
        }
    }

    return "Numero não encontrado!"
}
//console.log(encotraNum(numeros,12))
//encontrar numeros pares
function encontrarPar(num) {

    let parNum = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1) {
            parNum.push(num[i])

        }
    }
    return parNum
}
//console.log(encontrarPar(numeros))
function menorNumero(listaNum) {
    let menorNum = 10
    for (let i = 0; i < listaNum.length; i++) {
        numeroAtual = listaNum[i]
        if (numeroAtual < menorNum) {
            menorNum = numeroAtual

        }
    }
    return `O menor numero encontrado é : ${menorNum}`
}
//console.log(menorNumero(numeros))

function somarNum(lista) {
    let soma = 0

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    return soma
}
//console.log(somarNum(numeros))

//OBJETOS X METODOS

const Pessoa = {
    nome: "Enio",
    Sobrenome: "Silva",
    idade: 43,
    Cpf: 99091496568,

    dadosPessoa() {
        //console.log(this)
        return this.nome

    },
    falarIdade() {
        return `minha idade é ${this.idade} anos`
    }
}
//console.log(Pessoa.dadosPessoa())
//console.log(Pessoa.falarIdade())

const Pessoa1 = {
    nome: "Paulo Ramos",
    Sobrenome: "Silva",
    idade: 43,
    Cpf: 99091496568,


}
for (let key in Pessoa1) {
    //   console.log(Pessoa1[key])
}

function numerosMaiores(cont, listnum) {
    for (let i = 0; i < listnum.length; i++) {
           for(let j =0;j<cont;j++){
            listnum.filter()
           }
    }
}
console.log(numerosMaiores(4, numeros))
*/
const letras=["b","c","d","D","a","e","f","g","H","i","j","k","l"]

let pesquisarLetrasd =letras.find(index =>index ==="D")
console.log(letras.length)

class Stack {
    constructor(){
        this.data =[]
        this.top = -1
    }

    push(value){
        this.top++;
        this.data[this.top] = value
    }
}
 //utilizando modelagem
 let stack = new Stack()
 
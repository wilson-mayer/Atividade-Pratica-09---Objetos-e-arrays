// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let primeiroAluno = {
    nome: "Pedro",
    nota1: 8.9,
    nota2: 9.2, 

}
console.log(primeiroAluno);
let mediaPrimeiro = (primeiroAluno.nota1 + primeiroAluno.nota2) / 2;
console.log(`A média de Pedro é: ${mediaPrimeiro}`);

let segundoAluno = {...primeiroAluno}
segundoAluno.nome = "André",
segundoAluno.nota1 = 8.5,
segundoAluno.nota2 = 7.6,

console.log(segundoAluno);
let mediaSegundo = (segundoAluno.nota1 + segundoAluno.nota2) / 2;
console.log(`A média de André é: ${mediaSegundo}`);

let mediaTurma = (mediaPrimeiro + mediaSegundo) / 2;
console.log(`A média da turma é: ${mediaTurma}`);

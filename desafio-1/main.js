/* 
Você está fazendo um sistema para professores calcularem a média final dos alunos. Cada bimestre tem uma nota de 0 a 10.
O sistema deve perguntar a nota de cada prova (p1, p2, p3, p4) e caso a MÉDIA delas seja menor que 5, o aluno tá automaticamente reprovado, devendo exibir "Aluno reprovado com média X", caso seja entre 5 e 7, ele deve ir para "recuperação", caso seja 7 para cima, deve exibir "Aluno aprovado com média X".
Caso o aluno esteja de recuperação, deve-se perguntar a nota da prova de recuperação, que também vai de 0 a 10. 
Para o aluno passar pela recuperação, deve-se calcular a média somando a nota de prova de recuperação + média dos bimestres, o valor deve ser igual ou maior a 5.
Caso o aluno seja aprovado via recuperação, deve exibir "Aluno aprovado pela recuperação com média X", Caso contrário, "Aluno reprovado pela recuperação com média X"
*/

const p1 = parseFloat(prompt('Insira a nota da prova do Primeiro Bimestre:'));
if(p1 < 0 || p1 > 10) throw new Error("Erro! A nota deve ser entre 0 e 10.");
const p2 = parseFloat(prompt('Insira a nota da prova do Segundo Bimestre:'));
if(p2 < 0 || p2 > 10) throw new Error("Erro! A nota deve ser entre 0 e 10.");
const p3 = parseFloat(prompt('Insira a nota da prova do Terceiro Bimestre:'));
if(p3 < 0 || p3 > 10) throw new Error("Erro! A nota deve ser entre 0 e 10.");
const p4 = parseFloat(prompt('Insira a nota da prova do Quarto Bimestre:'));
if(p4 < 0 || p4 > 10) throw new Error("Erro! A nota deve ser entre 0 e 10.");

const media = (p1 + p2 + p3 + p4) / 4;
console.log('A média do aluno Pedro é '+ media);

if(media < 5) alert(`Aluno reprovado com média ${media}.`);
if(media >= 5 && media < 7){ 
    const notaRec = parseFloat(prompt('Insira a nota da prova de Recuperação:'));
    if(notaRec < 0 || notaRec > 10) throw new Error("Erro! A nota deve ser entre 0 e 10.");

    const mediaRec = (notaRec + media) / 2;
    if(mediaRec >= 5) alert(`Aluno aprovado pela recuperação com média ${mediaRec}`);
    else alert(`Aluno reprovado pela recuperação com média ${mediaRec}`);
}
if(media >= 7) alert(`Aluno aprovado com média ${media}`);
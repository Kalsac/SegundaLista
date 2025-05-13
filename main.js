
let nomes = ['Isaac', 'Luca', 'Vitoria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);

let nomes1 = ["Isaac", "Luca"];
nomes1.push("Vippy");
nomes1.push("Pedro");
console.log(nomes1);

let nomes2 = ['Isaac', 'Luca', 'Vippy', 'Pedro'];
nomes2.unshift("Mahara");
console.log(nomes2)

let nomes3 = ['Isaac', 'Luca', 'Vippy', 'Mahara', 'Pedro'];
let ultimoNomeRemovido = nomes3.pop();
console.log(`Nome removido: ${ultimoNomeRemovido}`);
console.log(`Array restante: ${nomes3}`);

let nome4 = [`Isaac`, `Luca`, `Vippy`, `Mahara`, `Pedro`]
let primeiroNomeRemovido = nome4.shift();
console.log(`Nome removido: ${primeiroNomeRemovido}`);
console.log(`Array restante: ${nome4}`);

let frutas = [`uva`, `banana`, `maça`, `manga`, `mamão`]
let removerDuasFrutas = frutas.splice();
console.log(`frutas removidas: ${removerDuasFrutas}`)
console.log(`Array restante: ${frutas}`);


console.log(frutas);
console.log("O tamanho do Array frutas é: " + frutas.length);


let historico = [];
historico.push("home");
console.log("Acessou: home");
console.log("Histórico:", historico);
historico.push("sobre");
console.log("Acessou: sobre");
console.log("Histórico:", historico);
historico.push("contato");
console.log("Acessou: contato");
console.log("Histórico:", historico);


let historico1 = ["home", "sobre", "contato"];
let ultimoAcesso = historico1.pop();
console.log("Saída da página:", ultimoAcesso);
console.log("Histórico:", historico1);


let cores = ["vermelho", "verde", "amarelo", "roxo"];
cores.splice(2, 1, "azul-marinho");
console.log("Novo array de cores:", cores);
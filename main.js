
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


// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length

// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice

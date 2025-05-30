// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length

let nomes = ['Amanda', 'Bia', 'Vitória'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);



// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
// Método sugerido: push

nomes.push("João", "Carlos");
console.log(nomes);

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
// Método sugerido: unshift

nomes.unshift("Bruno");
console.log(nomes);

// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
// Método sugerido: pop

let removidoUltimo = nomes.pop();
console.log("Nome removido:", removidoUltimo);
console.log("Array restante:", nomes);


// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift

let removidoPrimeiro = nomes.shift();
console.log("Nome removido:", removidoPrimeiro);
console.log("Array restante:", nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice

let frutas = ["Banana", "Uva", "Manga", "Mamão", "Maçã"];
frutas.splice(1, 2, "Manga", "Banana");
console.log(frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length

console.log("Tamanho do array de frutas:", frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push

let historico = [];
historico.push("home", "sobre", "contato");
console.log(historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop

let paginaRemovida = historico.pop();
console.log("Saída da página:", paginaRemovida);
console.log(historico);


// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice

let cores = ["Vermelho", "Rosa", "Amarelo", "Roxo"];
cores.splice(2, 1, "Azul");
console.log(cores);

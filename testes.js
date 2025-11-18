// ===============================
// PROJETO: DESAFIOS LÓGICOS
// Arquivo de testes
// ===============================

// ===== Import das funções dos desafios =====

import { parOuImpar } from './desafios/1-parOuImpar.js';
import { maiorOuMenor } from './desafios/2-maiorOuMenor.js';
import { conversorTemperatura } from './desafios/3-conversorTemperatura.js';
import { sistemaDeMedia } from './desafios/4-sistemaMedia.js';
import { calculadoraInterativa } from './desafios/5-calculadoraInterativa.js';
import { geradorTabuada } from './desafios/6-geradorTabuada.js';
import { contadorInteligente } from './desafios/7-contadorInteligente.js';

// ===============================
// FUNÇÃO AUXILIAR DE TESTE
// ===============================
function testar(teste, resultado, esperado, ...outros) {
	resultado = String(resultado).trim();
	esperado = String(esperado).trim();

	if (resultado.toLowerCase() === esperado.toLowerCase()) {
		console.log(`Teste ${teste} passou.`);
	} else if (
		outros?.map((r) => r?.toLowerCase()).includes(resultado.toLowerCase())
	) {
		console.log(`Teste ${teste} passou.`);
	} else {
		console.error(`
Teste ${teste} falhou:
→ esperado '${esperado}',
→ obtido '${resultado}'
`);
	}
}

// ===== PAR OU ÍMPAR =====
function testesParOuImpar() {
	console.log('\n--- Testes da função parOuImpar ---');

	const resultado1 = parOuImpar(4); // Deve retornar 'Par'
	const esperado1 = 'Par';
	testar('par', resultado1, esperado1);

	const resultado2 = parOuImpar(7); // Deve retornar 'Impar'
	const esperado2 = 'Impar';
	testar('impar', resultado2, esperado2);

	// Opcionais
	console.log('\nOpcionais:');
	const resultado3 = parOuImpar('abc'); // Deve retornar mensagem de erro
	const esperado3 = 'Entrada inválida. Digite um número válido.';
	testar('de erro', resultado3, esperado3);
}

// ===== MAIOR OU MENOR =====
function testesMaiorOuMenor() {
	console.log('\n--- Testes da função maiorOuMenor ---');

	const resultado1 = maiorOuMenor(10, 5);
	const esperado1 = 'O primeiro número (10) é MAIOR que o segundo (5).';
	testar('1º maior', resultado1, esperado1);

	const resultado2 = maiorOuMenor(2, 8);
	const esperado2 = 'O segundo número (8) é MAIOR que o primeiro (2).';
	testar('2º maior', resultado2, esperado2);

	const resultado3 = maiorOuMenor(7, 7);
	const esperado3 = 'Os dois números são IGUAIS (7).';
	testar('iguais', resultado3, esperado3);
}

// ===== CONVERSOR DE TEMPERATURA =====
function testesConversorTemperatura() {
	console.log('\n--- Testes do Conversor de Temperatura ---');

	// Celsius → Fahrenheit
	const resultado1 = conversorTemperatura(0, '1');
	const esperado1a = 32;
	const esperado1b = '32.0';
	const esperado1c = '32.00';
	testar('C → F', resultado1, esperado1a, esperado1b, esperado1c);

	const resultado2 = conversorTemperatura(25, '1');
	const esperado2a = 77;
	const esperado2b = '77.0';
	const esperado2c = '77.00';
	testar('C → F', resultado2, esperado2a, esperado2b, esperado2c);

	// Fahrenheit → Celsius
	const resultado3 = conversorTemperatura(50, '2');
	const esperado3a = 10;
	const esperado3b = '10.0';
	const esperado3c = '10.00';
	testar('F → C', resultado3, esperado3a, esperado3b, esperado3c);

	// Opcionais
	console.log('\nOpcionais:');
	// Celsius → Kelvin
	const resultado4 = conversorTemperatura(100, '3');
	const esperado4 = 373.15;
	testar('C → K', resultado4, esperado4);

	// Kelvin → Celsius
	const resultado5 = conversorTemperatura(300, '4');
	const esperado5a = '26.850000000000023';
	const esperado5b = '26.85';
	testar('K → C', resultado5, esperado5a, esperado5b);

	// Fahrenheit → Kelvin
	const resultado6 = conversorTemperatura(32, '5');
	const esperado6 = 273.15;
	testar('F → K', resultado6, esperado6);

	// Kelvin → Fahrenheit
	const resultado7 = conversorTemperatura(300, '6');
	const esperado7a = '80.33000000000004';
	const esperado7b = '80.33';
	testar('K → F', resultado7, esperado7a, esperado7b);

	// Teste de erro
	const resultado8 = conversorTemperatura('abc', '1');
	const esperado8 = 'Erro: a temperatura deve ser um número válido.';
	testar('de erro de valor', resultado8, esperado8);

	const resultado9 = conversorTemperatura(10, '99');
	const esperado9 = 'Erro: opção inválida.';
	testar('de erro de opção', resultado9, esperado9);
}

// ===== SISTEMA DE MÉDIA COM SITUAÇÃO =====
function testesSistemaDeMedia() {
	console.log('\n--- Testes do Sistema de Média com Situação ---');

	// Teste 1: Notas 8, 7, 9
	const resultado1 = sistemaDeMedia(8, 7, 9);
	const esperado1a = 'Média: 8, Situação: Aprovado';
	const esperado1b = 'Média: 8.0, Situação: Aprovado';
	testar('aprovado', resultado1, esperado1a, esperado1b);

	// Teste 2: Notas 5, 6, 4
	const resultado2 = sistemaDeMedia(5, 6, 4);
	const esperado2a = 'Média: 5, Situação: Recuperação';
	const esperado2b = 'Média: 5.0, Situação: Recuperação';
	testar('recuperação', resultado2, esperado2a, esperado2b);

	// Teste 3: Notas 3, 2, 1
	const resultado3 = sistemaDeMedia(3, 2, 1);
	const esperado3a = 'Média: 2, Situação: Reprovado';
	const esperado3b = 'Média: 2.0, Situação: Reprovado';
	testar('reprovado', resultado3, esperado3a, esperado3b);

	// Opcionais
	console.log('\nOpcionais:');
	const resultado4 = sistemaDeMedia(10, 10, 10, 9, 8);
	const esperado4 = 'Média: 9.4, Situação: Aprovado';
	testar('mais de 3 notas', resultado4, esperado4);

	// Teste 4: Notas inválidas
	const resultado5 = sistemaDeMedia(11, -1, 'abc');
	const esperado5 = 'Erro: Todas as notas devem ser números.';
	testar('erro de valor', resultado5, esperado5);

	// Teste 5: Sem notas
	const resultado6 = sistemaDeMedia();
	const esperado6 = 'Nenhuma nota informada.';
	testar('erro de nenhuma nota', resultado6, esperado6);
}

// ===== CALCULADORA INTERATIVA =====
function testesCalculadoraInterativa() {
	console.log('\n--- Testes da função calculadoraInterativa ---');

	const resultado1 = calculadoraInterativa(10, 5, '+');
	const esperado1 = 15;
	testar('de soma', resultado1, esperado1);

	const resultado2 = calculadoraInterativa(10, 5, '-');
	const esperado2 = 5;
	testar('de subtração', resultado2, esperado2);

	const resultado3 = calculadoraInterativa(10, 5, '*');
	const esperado3 = 50;
	testar('de multiplicação', resultado3, esperado3);

	const resultado4 = calculadoraInterativa(10, 5, '/');
	const esperado4a = 2;
	const esperado4b = '2.00';
	testar('de divisão', resultado4, esperado4a, esperado4b);

	// Opcionais
	console.log('\nOpcionais:');
	const resultado5 = calculadoraInterativa(10, 0, '/');
	const esperado5 = 'Erro: divisão por zero não é permitida.';
	testar('de divisão por zero', resultado5, esperado5);

	const resultado6 = calculadoraInterativa(2, 3, '^');
	const esperado6 = 8;
	testar('de potência', resultado6, esperado6);

	const resultado7 = calculadoraInterativa(16, undefined, '√');
	const esperado7a = 4;
	const esperado7b = '4.00';
	testar('de raiz quadrada', resultado7, esperado7a, esperado7b);

	const resultado8 = calculadoraInterativa(-9, undefined, '√');
	const esperado8 =
		'Erro: não é possível extrair raiz quadrada de número negativo.';
	testar('de raiz quadrada de negativo', resultado8, esperado8);

	const resultado9 = calculadoraInterativa(5, 2, '%');
	const esperado9 = 'Erro: operação inválida.';
	testar('de operação inválida', resultado9, esperado9);

	const resultado10 = calculadoraInterativa('a', 2, '+');
	const esperado10 = 'Erro: valores numéricos inválidos.';
	testar('de valor inválido', resultado10, esperado10);
}

// ===== GERADOR DE TABUADA =====
function testesGeradorTabuada() {
	console.log('\n--- Testes da função geradorTabuada ---');

	console.log('Teste 1: número 5, limite padrão (10)');
	geradorTabuada(5);
	// Saída esperada:
	// Tabuada do 5 até 10:
	// 5 x 1 = 5
	// 5 x 2 = 10
	// ...
	// 5 x 10 = 50

	// Opcionais
	console.log('\nOpcionais:');
	console.log('\nTeste 2: número 3, limite 5');
	geradorTabuada(3, 5);
	// Saída esperada:
	// Tabuada do 3 até 5:
	// 3 x 1 = 3
	// 3 x 2 = 6
	// 3 x 3 = 9
	// 3 x 4 = 12
	// 3 x 5 = 15

	console.log('\nTeste 3: número 7, limite 0 (deve usar padrão 10)');
	geradorTabuada(7, 0);
	// Saída esperada:
	// Tabuada do 7 até 10:
	// 7 x 1 = 7
	// ...
	// 7 x 10 = 70

	console.log('\nTeste 4: entrada inválida (numero = "a")');
	geradorTabuada('a', 5);
	// Saída esperada:
	// Erro: ambos os valores devem ser números válidos.

	console.log('\nTeste 5: entrada inválida (limite = "b")');
	geradorTabuada(4, 'b');
	// Saída esperada:
	// Erro: ambos os valores devem ser números válidos.
}

// ===== CONTADOR INTELIGENTE =====
function testesContadorInteligente() {
	console.log('\n--- Testes da função contadorInteligente ---');

	console.log('Teste 1: Contagem regressiva padrão (5 até 0, passo 1)');
	contadorInteligente(5);
	// Saída esperada:
	// Contagem de 5 até 0 de 1 em 1:
	// 5
	// 4
	// 3
	// 2
	// 1
	// 0

	// Opcionais
	console.log('\nOpcionais:');
	console.log('\nTeste 2: Contagem crescente (0 até 5, passo 1)');
	contadorInteligente(0, 5);
	// Saída esperada:
	// Contagem de 0 até 5 de 1 em 1:
	// 0
	// 1
	// 2
	// 3
	// 4
	// 5

	console.log('\nTeste 3: Contagem regressiva com passo 2 (10 até 0)');
	contadorInteligente(10, 0, 2);
	// Saída esperada:
	// Contagem de 10 até 0 de 2 em 2:
	// 10
	// 8
	// 6
	// 4
	// 2
	// 0

	console.log('\nTeste 4: Contagem crescente com passo 3 (0 até 12)');
	contadorInteligente(0, 12, 3);
	// Saída esperada:
	// Contagem de 0 até 12 de 3 em 3:
	// 0
	// 3
	// 6
	// 9
	// 12

	console.log('\nTeste 5: Entrada inválida (string no lugar de número)');
	contadorInteligente('a', 5);
	// Saída esperada:
	// Erro: todos os valores devem ser números válidos.
}

// ===================================
// TESTE DAS FUNÇÕES DOS DESAFIOS
// ===================================
// Dica: caso queira testar algum desafio específico, comente as chamadas das outras funções abaixo.
function testandoDesafios() {
	testesParOuImpar();
	testesMaiorOuMenor();
	testesConversorTemperatura();
	testesSistemaDeMedia();
	testesCalculadoraInterativa();
	testesGeradorTabuada();
	testesContadorInteligente();
}

// ===== EXECUÇÃO DOS TESTES =====
testandoDesafios();

// ===============================
// PROJETO: DESAFIOS LÓGICOS
// Arquivo principal
// ===============================

import promptSync from 'prompt-sync';
const prompt = promptSync();

// ===== Import das funções dos desafios =====
import { parOuImparPrompt } from './desafios/1-parOuImpar.js';
import { maiorOuMenorPrompt } from './desafios/2-maiorOuMenor.js';
import { conversorTemperaturaPrompt } from './desafios/3-conversorTemperatura.js';
import { sistemaDeMediaPrompt } from './desafios/4-sistemaMedia.js';
import { calculadoraInterativaPrompt } from './desafios/5-calculadoraInterativa.js';
import { geradorTabuadaPrompt } from './desafios/6-geradorTabuada.js';
import { contadorInteligentePrompt } from './desafios/7-contadorInteligente.js';
import { quizPerguntasPrompt } from './desafios/8-quizPerguntas.js';
import { jogoAdivinhacaoPrompt } from './desafios/9-jogoAdivinhacao.js';

// ========================
// ===== MENU PRINCIPAL =====
// ========================
function exibirMenu() {
	console.log(`
=== DESAFIOS LÓGICOS ===
1. Teste de Par ou Ímpar
2. Jogo “Maior que… menor que…”
3. Conversor de Temperatura
4. Sistema de Média com Situação
5. Calculadora Interativa
6. Gerador de Tabuada
7. Contador Inteligente
8. Quiz de Perguntas
9. Jogo de Adivinhação
10. Sair
`);
}

function menuPrincipal() {
	let opcao;
	do {
		exibirMenu();
		opcao = prompt('Escolha uma opção: ').trim();

		switch (opcao) {
			case '1':
				parOuImparPrompt();
				break;
			case '2':
				maiorOuMenorPrompt();
				break;
			case '3':
				conversorTemperaturaPrompt();
				break;
			case '4':
				sistemaDeMediaPrompt();
				break;
			case '5':
				calculadoraInterativaPrompt();
				break;
			case '6':
				geradorTabuadaPrompt();
				break;
			case '7':
				contadorInteligentePrompt();
				break;
			case '8':
				quizPerguntasPrompt();
				break;
			case '9':
				jogoAdivinhacaoPrompt();
				break;
			case '10':
				console.log('\nPrograma encerrado.');
				break;
			default:
				console.log('Opção inválida. Por favor, tente novamente.');
		}
	} while (opcao !== '10');
}

// ===== EXECUÇÃO DO PROGRAMA =====
menuPrincipal();

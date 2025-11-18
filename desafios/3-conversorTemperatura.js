import promptSync from 'prompt-sync';
const prompt = promptSync();

/**
 * Desafio 3 – Conversor de Temperatura
 * Converte valores entre Celsius e Fahrenheit.
 * @param {number} temperatura - Valor numérico da temperatura.
 * @param {number} tipoConversao - Tipo de conversão: "1" (C→F) ou "2" (F→C).
 * @returns {number|string} - Resultado da conversão ou mensagem de erro.
 *
 * Tipos aceitos:
 * 1: Celsius → Fahrenheit
 * 2: Fahrenheit → Celsius
 *
 * Extras (opcional):
 * 3: Celsius → Kelvin
 * 4: Kelvin → Celsius
 * 5: Fahrenheit → Kelvin
 * 6: Kelvin → Fahrenheit
 */

export function conversorTemperatura() {
	// Implemente sua solução aqui (obrigatório)
}

// ===== INTEGRAÇÃO COM O MENU PRINCIPAL =====
export function conversorTemperaturaPrompt() {
	console.log('\n=== CONVERSOR DE TEMPERATURA ===\n');
	// Implemente sua solução aqui (opcional)
}

// ===== Testes =====
// Dica: Crie testes para sua função aqui abaixo e rode esse arquivo.

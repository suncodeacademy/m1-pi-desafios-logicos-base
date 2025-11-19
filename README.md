# Desafios lógicos

### Situação-problema

Você foi contratado para trabalhar em um programa que reúne diversos desafios de lógica pensados para treinar futuros desenvolvedores iniciantes. O programa funciona como um **hub de exercícios interativos**, cada desafio representando um pequeno jogo ou problema matemático executável diretamente no console — sem interface gráfica.

Você irá trabalhar em um **projeto base de desafios de lógica de programação**, que já contém toda a estrutura inicial, incluindo arquivos de teste (`testes.js`) e placeholders para cada desafio na pasta desafios. Seu objetivo é **implementar as funções de cada desafio**, seguindo os requisitos obrigatórios e, se desejar, os opcionais.

---

### Descrição

Neste projeto, você irá criar um programa executado pelo Node.js que apresenta um diversos **desafios lógicos**. Cada desafio representa um problema independente, que deve ser resolvido utilizando conceitos de **variáveis, estruturas condicionais, laços de repetição e funções**.

O arquivo `testes.js` permite verificar automaticamente se suas funções estão funcionando corretamente, sem depender da interação pelo terminal (exceto pelos desafios 8 e 9, que são opcionais).

Após implementar as funções obrigatórias, ao rodar o arquivo `testes.js` no terminal, serão exibidos os `console.log` correspondentes de cada função criada. Confira se a saída é esperada para cada função.

Exemplo de exibição no console após a execução de `testes.js`:

```powershell
--- Testes da função parOuImpar ---
Teste par passou.
Teste impar passou.
Teste zero passou.
Teste negativo passou.
```

Dica: Rode `teste.js` a cada função criada. Além disso, você pode testar cada arquivo de maneira independente, pra testar se ela está sendo retornando os valores como deveria.

---

**Interação com o prompt**

Ao rodar o arquivo `index.js` no terminal, o menu abaixo é exibido:

```powershell
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

Escolha uma opção:
```

Ao escolher uma opção, a função de interação correspondente à opção escolhida é chamada.

Essas funções já estão criadas, mas sua lógica ainda não está implementada. Sua implementação é opcional. Se você implementá-las, será possível executar os desafios diretamente pelo terminal.

Após a execução de um desafio pelo prompt, o comportamento atual do programa é **voltar para o menu principal automaticamente**.

Como segundo desafio opcional, você pode implementar um **menu de navegação pós-desafio**, oferecendo ao usuário as seguintes opções:

```powershell
O que deseja fazer agora?
1. Executar este desafio novamente
2. Voltar ao menu de desafios
3. Encerrar o programa
```

---

### Objetivos de aprendizado

- Consolidar conceitos de **lógica de programação**.
- Praticar **organização de código em funções** e modularização.
- Trabalhar com **entrada e saída de dados**.
- Exercitar **condicionais, loops e operações matemáticas**.
- Aprender boas práticas de código e tratamento de erros.
- Explorar desafios opcionais para ir além dos requisitos mínimos.
- Compreender a importância de modularizar programas maiores.
- Desenvolver raciocínio lógico e resolução de problemas.

---

### Passo a passo para o aluno

1. **Fazer um fork do projeto:**
    
    https://github.com/suncodeacademy/m1-pi-desafios-logicos-base
    
2. **Clonar seu fork localmente:**
    
    ```bash
    git clone <seu-link-do-fork>
    cd desafios-logicos
    ```
    
3. **Instalar dependências:**
    
    ```bash
    npm install
    ```
    
4. **Abrir os arquivos de desafios e implementar as funções obrigatórias**:
    - `desafio()` → lógica principal
        
        Exemplo:
        
        ```jsx
        /**
         * Desafio 1 – Teste de Par ou Ímpar
         * Recebe um número e informa se ele é par ou ímpar.
         * @param {number} numero - Número.
         * @returns {string}
         * 'Par' se o número for par,
         * 'Impar' se for ímpar,
         * 'Entrada inválida. Digite um número válido.' se a entrada for inválida.
         */
        
        export function parOuImpar() {
        	// Implemente sua solução aqui (obrigatório)
        }
        ```
        
        Dica: atente-se ao que é pedido em `@param` e em `@returns`, para saber o que a função deverá receber como parâmetro e qual deve ser o retorno dela.
        
    - (Opcional) `desafioPrompt()` → interação pelo terminal
        
        Exemplo:
        
        ```
        // ========================
        // INTEGRAÇÃO COM O MENU PRINCIPAL
        // ========================
        export function parOuImparPrompt() {
        	console.log('\n=== PAR OU ÍMPAR ===\n');
        
        	// Implemente sua solução aqui (opcional)
        }
        ```
        
5. **Executar os testes para validar sua implementação:**
    
    ```bash
    node testes.js
    ```
    
    O arquivo deve rodar sem erro e os `console.log` exibidos devem condizer com o esperado para cada função.
    
    Exemplo:
    
    ```powershell
    --- Testes da função parOuImpar ---
    Teste par passou.
    Teste impar passou.
    
    Opcionais:
    Teste de erro passou.
    ```
    
6. **(Opcional) Executar pelo terminal com menu interativo:**
    
    ```bash
    node index.js
    ```
    
    - Isso funciona **somente se você implementou as funções `desafioPrompt()`**.
    - O menu pós-desafio também é opcional e pode ser implementado para exibir opções como “testar novamente” ou “voltar ao menu”.

---

### Requisitos obrigatórios

1. **Implementar cada desafio como função independente**
    - Cada desafio deve estar em seu próprio arquivo na pasta desafios.
    - As funções principais devem ser capazes de receber parâmetros e retornar resultados ou fazer `console.log` (não precisam obrigatoriamente usar prompt).
2. **Criar as funções principais de cada desafio**
    - Funções como `parOuImpar()`, `maiorOuMenor()`, `conversorTemperatura()`, etc.
    - Essas funções devem **retornar ou exibir a resposta correta** para os testes automáticos (`testes.js`).
3. **Seguir os requisitos de cada desafio**
    - Exemplo: calcular média, gerar tabuada, comparar números, etc.
    - Receber os parâmetros necessários e retornar o resultado conforme pedido para cada desafio.
4. **Testar as funções usando `testes.js`**
    - O arquivo `testes.js` já está configurado para verificar se suas funções estão corretas.
    - **Não é necessário interagir pelo terminal** para que os testes funcionem. Basta rodar:
        
        ```bash
        node testes.js
        ```
        

---

### Desafios opcionais (para quem quiser ir além)

1. **Implementar funções de interação pelo terminal**
    - Funções como `parOuImparPrompt()`, `maiorOuMenorPrompt()`, etc.
    - Permite executar os desafios pelo terminal usando `prompt-sync`.
    - **Opcional:** mensagens amigáveis ou instruções adicionais para o usuário.
2. **Criar menu pós-desafio**
    - Após a execução de um desafio pelo prompt, exibir:
    
    ```jsx
    O que deseja fazer agora?
    1. Executar este desafio novamente
    2. Voltar ao menu de desafios
    3. Encerrar o programa
    ```
    
3. **Implementar funcionalidades extras nos desafios**
    - Exemplo: escolher intervalos, formatar resultados, exibir mensagens personalizadas, etc.
4. **Aprimorar validações e experiência do usuário**
    - Tratar entradas inválidas de forma amigável.
    - Evitar erros como divisão por zero ou valores fora de intervalo.
5. **Criar novos desafios lógicos**
    - Adicionar desafios extras seguindo o mesmo padrão dos existentes.
    - Criar funções principais e, opcionalmente, funções de prompt.

---

# DESAFIOS

## 1. Teste de Par ou Ímpar

Crie um programa que receba um número e analise esse valor e retorne se ele é par ou ímpar.

### Requisitos obrigatórios

- Receber um número.
- Retornar se ele é par ou ímpar.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `numero` - tipo: `number`
    - Retorno: `string` com o resultado
        - `Par`
        - `Impar`

### Implementações opcionais (para quem quiser ir além)

- Validar se a entrada foi número.

### Exemplo de execução

Chamada:

```jsx
parOuImpar(7);
```

Retorno esperado:

```powershell
Impar
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Digite um número: 7
```

Saída esperada:

```powershell
O número 7 é Impar.
```

---

## 2. Jogo “Maior que… menor que…”

Desenvolva um programa que compare dois números informados pelo usuário. Após receber os valores, ele deve analisar qual é maior ou indicar se são iguais.

### Requisitos obrigatórios

- Receber dois números.
- Retornar falando qual é maior ou se são iguais.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `num1` - tipo: `number`
        - `num2` - tipo: `number`
    - Retorno: `string` com o resultado
        - `O primeiro número (${num1}) é MAIOR que o segundo (${num2}).`
        - `O segundo número (${num2}) é MAIOR que o primeiro (${num1}).`
        - `Os dois números são IGUAIS (${num1}).`

### Exemplo de execução

Chamada:

```jsx
maiorOuMenor(25, 42);
```

Retorno esperado:

```powershell
O segundo número (42) é MAIOR que o primeiro (25).
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Digite o primeiro número: 25
Digite o segundo número: 42
```

Saída esperada:

```powershell
O segundo número (42) é MAIOR que o primeiro (25).
```

---

## 3. Conversor de Temperatura

Crie um programa que receba um valor de temperatura e o tipo de conversão desejada:

- 1. Celsius→Fahrenheit
- 2. Fahrenheit→Celsius.

O programa deve realizar o cálculo e retornar o resultado convertido conforme a escolha do usuário.

### Requisitos obrigatórios

- Receber o valor em temperatura.
- Receber o tipo de conversão desejada.
- Retornar o valor convertido.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `temperatura` - tipo: `number`
        - `tipoConversao` - tipo: `number`
    - Retorno: `number` com o resultado

### Implementações opcionais (para quem quiser ir além)

- Exibir também Kelvin.
- Validar se o usuário digitou unidades válidas.
- Formatar com número fixo de casas decimais.

### Exemplo de execução

Chamada:

```jsx
conversorTemperatura(30, 1);
```

Retorno esperado:

```powershell
86
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Digite a temperatura: 30
Converter para:
1. Fahrenheit
2. Celsius
Escolha uma opção: 1
```

Saída esperada:

```powershell
86
```

---

## 4. Sistema de Média com Situação

Crie um programa que receba três notas numéricas informadas pelo usuário, calcule a média aritmética entre elas e exiba a situação do aluno com base nesse resultado.

O programa deve classificar o aluno como **Aprovado**, **Recuperação** ou **Reprovado**, seguindo as faixas definidas nos requisitos.

### **Requisitos obrigatórios**

- Receber três notas.
- Calcular e retornar a média e a situação:
    - Aprovado (>= 7)
    - Recuperação (>= 5)
    - Reprovado (< 5)

- Parâmetros e retorno da função:
    - Parâmetros:
        - `nota1` - tipo: `number`
        - `nota2` - tipo: `number`
        - `nota3` - tipo: `number`
    - Retorno: `string` com mensagem com a média e a situação do aluno.
        - `Média: ${media}, Situação: ${situacao}`

### Implementações opcionais (para quem quiser ir além)

- Permitir escolher quantas notas serão usadas.
- Retornar a média com arredondamento.
- Exibir diferença até a próxima faixa.

### Exemplo de execução

Chamada:

```jsx
sistemaDeMedia(4, 6, 5);
```

Retorno esperado:

```powershell
Média: 5, Situação: Recuperação
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Informe a primeira nota: 4
Informe a segunda nota: 6
Informe a terceira nota: 5
```

Saída esperada:

```powershell
Média: 5, Situação: Recuperação
```

---

## **5. Calculadora Interativa**

Crie uma calculadora interativa que permita ao usuário realizar operações matemáticas básicas entre dois números.

O programa deve receber os dois valores numéricos e a operação desejada e retornar o resultado correspondente.

A calculadora deve funcionar de maneira simples e direta, realizando apenas uma operação por execução (a menos que você implemente os desafios opcionais).

### Requisitos obrigatórios

- Receber dois números.
- Receber a operação desejada (`+`, `-`, `*`, `/`).
- Executar a operação correta e retornar o resultado.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `num1` - tipo: `number`
        - `num2` - tipo: `number`
        - `operacao` - tipo: `string` (`+`, `-`, `*`, `/`)
    - Retorno: `number` com o resultado

### Implementações **opcionais (para quem quiser ir além)**

- Validar se o usuário digitou uma operação válida.
- Impedir divisão por zero.
- Retornar o resultado formatado com duas casas decimais.
- Permitir continuar usando o último resultado sem digitar novamente
- Criar operação de potenciação
- Criar operação de raiz quadrada (usando apenas JS básico)

### Exemplo de execução

Chamada:

```jsx
calculadoraInterativa(12, 4, '/');
```

Retorno esperado:

```powershell
3
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Digite o primeiro número: 12
Digite o segundo número: 4
Qual operação deseja realizar? (+, -, *, /): /
```

Saída esperada:

```powershell
Resultado: 3
```

---

## 6. Gerador de Tabuada

Desenvolva um programa que receba um número inteiro e gere automaticamente a tabuada de multiplicação correspondente, mostrando os resultados de 1 a 10.

O programa deve apresentar cada operação em formato legível, facilitando a visualização do cálculo.

### Requisitos obrigatórios

- Receber um número.
- Exibir a tabuada de 1 a 10 daquele número.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `numero` - tipo: `number`
    - Retorno:  `void` - ou seja, não retorna nada.

### Implementações opcionais (para quem quiser ir além)

- Permitir escolher o limite (ex: até 20).

### Exemplo de execução

Entrada:

```jsx
geradorTabuada(7);
```

Saída esperada:

```powershell
Tabuada do 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Informe um número: 7
```

Saída esperada:

```powershell
Tabuada do 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

---

## 7. Contador Inteligente

Crie um programa que inicie uma contagem a partir de um número informado pelo usuário e exiba cada número até chegar a zero, mostrando o valor atual a cada passo.

A contagem deve ser feita automaticamente, sem que o usuário precise interagir após digitar o número inicial.

### **Requisitos obrigatórios**

- Receber o número inicial.
- Usar um laço de repetição.
- Exibir o valor atual a cada iteração.

- Parâmetros e retorno da função:
    - Parâmetros:
        - `inicio` - tipo: `number`
    - Retorno:  `void` - ou seja, não retorna nada.

### Implementações opcionais (para quem quiser ir além)

- Definir valor de fim.
- Permitir escolher o passo (ex: de 2 em 2).

### Exemplo de execução

Chamada:

```jsx
contadorInteligente(5);
```

Saída esperada:

```powershell
5
4
3
2
1
0
```

### Exemplo de execução no prompt (opcional)

Entrada:

```powershell
Digite o número inicial: 5
```

Saída esperada:

```powershell
5
4
3
2
1
0
```

---

## 8. Quiz de Perguntas (desafio extra)

Desenvolva um programa que faça um pequeno quiz de três perguntas de conhecimentos gerais. A cada pergunta, o usuário informa sua resposta. Ao final, o programa deve mostrar quantas respostas estavam corretas.

O quiz deve rodar do início ao fim automaticamente, sem novas escolhas durante as perguntas.

### Requisitos obrigatórios

- Fazer pelo menos 3 perguntas.
- Contar quantas respostas estão corretas.
- Exibir a pontuação final.

- Parâmetros e retorno da função:
    - Parâmetros: sem parâmetros
    - Retorno:  `void` - ou seja, não retorna nada.

### Implementações opcionais (para quem quiser ir além)

- Exibir mensagens diferentes conforme a pontuação.

### Exemplo de execução no prompt

Entrada:

```powershell
Pergunta 1: Qual é o maior planeta do sistema solar?
Resposta: Júpiter

Pergunta 2: Em que continente fica o Egito?
Resposta: África

Pergunta 3: Quanto é 9 * 9?
Resposta: 81
```

Saída:

```powershell
Você acertou 3 de 3 perguntas.
```

---

## 9. Jogo de Adivinhação (desafio extra)

Crie um jogo em que o computador escolhe um número secreto aleatório entre 1 e 20 e o jogador precisa descobri-lo.

A cada palpite, o programa deve informar se o valor digitado é maior ou menor que o número correto. O jogo continua até que o jogador acerte. Não é necessário mostrar o número secreto antes do usuário acertar.

### **Requisitos obrigatórios**

- Gerar um número secreto aleatório.
- Solicitar palpite ao usuário.
- Usar laços até o usuário acertar.
- Informar se o palpite é maior ou menor.

- Parâmetros e retorno da função:
    - Parâmetros: sem parâmetros
    - Retorno:  `void` - ou seja, não retorna nada.

### Implementações **opcionais (para quem quiser ir além)**

- Contar tentativas e exibir ao final.
- Limitar o número total de tentativas.
- Mostrar se está “perto” do número secreto (ex: diferença menor que 5)
- Permitir escolher o intervalo (ex: 1 a 500)

### Exemplo de execução no prompt

Entradas e saídas:

```powershell
Estou pensando em um número entre 1 e 20...
Qual é o seu palpite? 10
O número secreto é MENOR que o seu palpite.

Qual é o seu palpite? 4
O número secreto é MAIOR que o seu palpite.

Qual é o seu palpite? 6
Parabéns! Você acertou!
```

---

## **10. Sair**

Finaliza o programa.

---

# Estrutura do projeto

O projeto já vem com os seguintes arquivos e pastas:

```powershell
desafios-logicos/
│
├─ desafios/
│  ├─ 1-parOuImpar.js
│  ├─ 2-maiorOuMenor.js
│  ├─ 3-conversorTemperatura.js
│  ├─ 4-sistemaMedia.js
│  ├─ 5-calculadoraInterativa.js
│  ├─ 6-geradorTabuada.js
│  ├─ 7-contadorInteligente.js
│  ├─ 8-quizPerguntas.js
│  └─ 9-jogoAdivinhacao.js
│
├─ testes.js
├─ index.js
├─ package.json
└─ .gitignore
```

**Detalhes importantes:**

- Cada arquivo em `desafios/` já contém duas funções vazias para você implementar:
    1. `desafio()` → executa a lógica principal do desafio (obrigatório)
    2. `desafioPrompt()` → interage com o usuário via terminal (opcional)
    
    Por exemplo, em `1-parOuImpar.js`:
    
    ```jsx
    export function parOuImpar() {
      // Implemente sua solução aqui (obrigatório)
    }
    
    export function parOuImparPrompt() {
      console.log('\n=== PAR OU ÍMPAR ===\n');
      // Implemente sua solução aqui (opcional)
    }
    ```
    
    Você deve implementar a lógica da função `parOuImpar()`. Essa função é chamada no arquivo `testes.js`.
    
    A implementação da lógica da função `parOuImparPrompt()` é opcional. Essa função é chamada no arquivo `index.js`.
    
    Além disso, cada função tem um comentário indicando os parâmetros básicos e retorno esperado. Exemplo:
    
    ```jsx
    /**
     * Desafio 1 – Teste de Par ou Ímpar
     * Recebe um número e informa se ele é par ou ímpar.
     * @param {number} numero - Número.
     * @returns {string} 'Par' se o número for par, 'Impar' se for ímpar.
     */
    ```
    
    Esses parâmetros e retorno consideram apenas os requisitos obrigatórios de cada desafio. Caso decida implementar os pontos opcionais, avalie se precisará de outros parâmetros e tipos de retorno.
    
- O arquivo `testes.js` está pronto para **testar automaticamente suas implementações**.
    
    **Seu objetivo principal** é fazer com que todos os testes obrigatórios passem.
    
- O arquivo `index.js` executa os desafios pelo terminal **somente se você implementar as funções de prompt**.

---

# Estrutura de cada desafio

Para cada desafio, você deverá:

1. **Implementar a função principal:**
    
    ```jsx
    export function desafio(parametros) {
      // lógica do desafio
    }
    ```
    
2. **Testes manuais:**
    - Teste suas funções manualmente, chamando ela em seus próprios arquivos, passando diferentes argumentos.
3. **Implementar a função de prompt (opcional):**
    
    ```jsx
    export function desafioPrompt() {
      // interação com o usuário via prompt-sync
    }
    ```
    
4. **Testes automatizados:**
    - O arquivo `testes.js` já contém chamadas de teste para suas funções.
    - Não altere `testes.js`, apenas implemente suas funções corretamente.

---

# Entrega

- O projeto deve ser enviado por meio de um repositório no **GitHub**.
- O repositório deve conter todos os arquivos necessários para executar o programa.
- Data da entrega: xx/xx/2026

## Observações

- A parte de **prompt e menu pós-desafio** é **opcional**, mas é recomendada para quem quiser uma experiência completa.
- Seu principal objetivo é **implementar a lógica de cada desafio para que os testes passem**.
- Sinta-se à vontade para explorar os desafios opcionais de cada exercício para ir além dos requisitos mínimos.

# Dicas e Lembretes importantes

- **Comece simples**
    
    Implemente primeiro os *requisitos obrigatórios* de cada desafio. Depois, se sobrar tempo, avance para os desafios opcionais.
    
- **Use funções separadas**
    
    Cada desafio deve estar dentro de uma função independente. Isso deixa o código organizado e facilita a correção.
    
- **Não use `var`**
    
    Prefira `let` e `const`.
    
    Isso evita bugs e segue boas práticas modernas de JavaScript.
    
- **Teste vários cenários**
    
    Antes de entregar, rode seu código mais de uma vez e tente:
    
    - Valores inesperados
    - Números negativos
    - Strings quando deveria ser número
    - Várias execuções seguidas no menu
    
- **Cuidado com loops infinitos**
    
    Sempre garanta uma condição de saída no while ou do...while.
    
- **Se usar módulos (opcional)**
    
    Lembre-se de exportar a função:
    
    ```jsx
    module.exports = meuDesafio;
    ```
    
    E importar no index:
    
    ```jsx
    const meuDesafio = require("./desafios/meuDesafio");
    ```
    
- **Não é necessário interface gráfica**
    
    O projeto é todo **em console**, com menu textual.
    
    Não perca tempo tentando criar interface visual.
    

- **Se der erro, leia a mensagem com calma**
    
    Ela quase sempre aponta a linha exata do problema.
    
    Faz parte do processo errar → ajustar → testar.
    

# Critérios de Avaliação

| **Critério** | **Descrição** | **Ruim** | **Regular** | **Bom** | **Ótimo** |
| --- | --- | --- | --- | --- | --- |
| **Entrada e saída de dados** | Coerência e clareza na forma como o programa recebe dados e exibe resultados | Não recebe corretamente os dados ou não exibe resultado compreensível | Recebe e exibe dados, mas com mensagens confusas ou mal formatadas | Entrada e saída claras, com mensagens compreensíveis | Entrada e saída muito bem estruturadas, com textos claros, amigáveis e padronizados |
| **Corretude da lógica** | O programa executa corretamente o que foi pedido | Não atende aos requisitos básicos; erros graves de lógica | Funciona parcialmente, mas com erros de cálculo ou de fluxo | Atende aos requisitos principais, sem erros relevantes | Funciona perfeitamente, cobrindo todos os cenários esperados |
| **Uso de condicionais e laços** | Aplicação correta de if/else, switch, for, while etc. | Uso incorreto ou inexistente de estruturas de controle | Estruturas presentes, mas com problemas de lógica ou repetição desnecessária | Condicionais e laços usados corretamente e de forma eficiente | Uso natural, bem estruturado e otimizado, sem redundâncias |
| **Uso de funções** | Organização do código com funções reutilizáveis | Código totalmente linear, sem funções ou mal estruturado | Usa funções, mas com má divisão de responsabilidades | Funções bem estruturadas, com parâmetros e retornos corretos | Código modular, funções coesas, bem nomeadas e reaproveitáveis |
| **Boas práticas de código** | Nomenclatura, indentação, comentários, uso de let/const | Código confuso, mal indentado, nomes ruins ou uso de var desnecessário | Organização parcial; alguns problemas de clareza ou padrões inconsistentes | Código organizado, indentado, bom uso de let e const, nomes claros | Código limpo, bem comentado quando necessário, clareza exemplar |
| **Tratamento básico de erros** | Evita falhas previsíveis (ex: divisão por zero, entradas vazias) | Nenhum tratamento; o programa quebra facilmente | Alguns cuidados, mas ainda falha em situações comuns | Evita erros simples e fornece mensagens informativas | Tratamento consistente, evita falhas e orienta o usuário quando algo está errado |
| **Implementação dos desafios opcionais** | Percentual de desafios extras implementados | Nenhum desafio extra | Implementou parcialmente algum extra | Fez pelo menos 1 extra completo | Implementou vários extras, ampliou o projeto com criatividade |
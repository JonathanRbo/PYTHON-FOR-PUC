# 📗 Nível 1 - Iniciante (Começando do Zero)

## 🎯 O que você vai aprender

- ✅ O que é Python e por que ele é incrível
- ✅ Fazer o computador "falar" com você
- ✅ Guardar informações em variáveis
- ✅ Fazer contas (calculadora)
- ✅ Trabalhar com textos
- ✅ Seu primeiro programa interativo!

---

## 🌟 Aula 1: Seu Primeiro "Olá, Mundo!"

### O que é Python?

Python é como uma língua que você usa para conversar com o computador! 🗣️💻

Imagine que você tem um robô amigo que só entende Python. Quando você fala Python, ele faz tudo que você pedir!

### Vamos começar!

**1. Abra o IDLE ou seu editor favorito**

**2. Digite isso:**

```python
print("Olá, Mundo!")
```

**3. Aperte F5 (ou clique em Run)**

**4. TADAM! 🎉** O computador vai escrever "Olá, Mundo!" na tela!

### 🤔 Entendendo o código

- `print()` - É como você pede pro computador MOSTRAR algo na tela
- `"Olá, Mundo!"` - Tudo que está entre aspas é TEXTO

### 🎮 Desafio 1

Faça o computador dizer:
1. Seu nome
2. Sua idade
3. Sua comida favorita

Exemplo:
```python
print("Meu nome é João")
print("Tenho 10 anos")
print("Amo pizza!")
```

---

## 🎨 Aula 2: Variáveis - Caixinhas Mágicas

### O que são variáveis?

Variáveis são como caixinhas onde você guarda informações! 📦

Imagine que você tem várias caixas:
- 📦 Uma caixa com seu nome
- 📦 Uma caixa com sua idade
- 📦 Uma caixa com seus pontos no jogo

### Como criar variáveis

```python
# Guardando informações
nome = "Ana"
idade = 12
pontos = 100

# Mostrando na tela
print(nome)
print(idade)
print(pontos)
```

### 🤔 Entendendo

- `nome = "Ana"` - Criou uma caixinha chamada "nome" e colocou "Ana" dentro
- `idade = 12` - Criou uma caixinha chamada "idade" e colocou o número 12
- `=` - Significa "guarda isso aqui"

### 💡 Regras importantes

✅ **PODE:**
- `meu_nome = "João"`
- `idade_pessoa = 15`
- `pontos_jogo = 1000`

❌ **NÃO PODE:**
- `meu nome = "João"` (sem espaço!)
- `2idade = 15` (não começa com número!)
- `idade-pessoa = 10` (usa _ em vez de -)

### 🎮 Desafio 2

Crie variáveis para:
1. Seu nome
2. Sua idade
3. Sua cidade
4. Seu animal favorito

Depois, use `print()` para mostrar tudo!

**Resposta esperada:**
```python
nome = "Maria"
idade = 11
cidade = "São Paulo"
animal_favorito = "Cachorro"

print(nome)
print(idade)
print(cidade)
print(animal_favorito)
```

---

## 🔢 Aula 3: Matemática com Python

Python é uma calculadora super poderosa! 🧮

### Operações básicas

```python
# Soma
print(5 + 3)  # Resultado: 8

# Subtração
print(10 - 4)  # Resultado: 6

# Multiplicação
print(6 * 7)  # Resultado: 42

# Divisão
print(20 / 4)  # Resultado: 5.0

# Potência (elevado)
print(2 ** 3)  # Resultado: 8 (2x2x2)
```

### Usando variáveis na matemática

```python
minha_idade = 10
idade_irmao = 8

soma_idades = minha_idade + idade_irmao
print(soma_idades)  # Resultado: 18
```

### 🎮 Desafio 3: Calculadora Pessoal

Crie uma calculadora que:
1. Guarda dois números em variáveis
2. Faz todas as operações (soma, subtração, multiplicação, divisão)
3. Mostra os resultados

```python
numero1 = 15
numero2 = 3

print(numero1 + numero2)
print(numero1 - numero2)
print(numero1 * numero2)
print(numero1 / numero2)
```

---

## 💬 Aula 4: Conversando com o Usuário

Até agora, só NÓS falamos com o computador. E se o COMPUTADOR perguntar algo pra gente? 🤝

### O comando `input()`

```python
nome = input("Qual é o seu nome? ")
print("Olá, " + nome + "!")
```

**O que acontece:**
1. O programa PERGUNTA: "Qual é o seu nome?"
2. Você DIGITA seu nome
3. O programa GUARDA na variável `nome`
4. O programa MOSTRA: "Olá, [seu nome]!"

### Juntando textos

```python
nome = "João"
idade = "10"

# Forma 1: Usando +
print("Meu nome é " + nome + " e tenho " + idade + " anos")

# Forma 2: Usando vírgula
print("Meu nome é", nome, "e tenho", idade, "anos")
```

### 🎮 Desafio 4: Questionário

Crie um programa que pergunta:
1. Seu nome
2. Sua idade
3. Sua cor favorita

Depois, mostra tudo junto!

```python
nome = input("Qual é o seu nome? ")
idade = input("Quantos anos você tem? ")
cor = input("Qual é sua cor favorita? ")

print("Seu nome é", nome)
print("Você tem", idade, "anos")
print("Sua cor favorita é", cor)
```

---

## 🧮 Aula 5: Números e Textos são Diferentes!

### Problema: Somar números do input

```python
# CUIDADO! Isso não vai funcionar como esperado
numero1 = input("Digite um número: ")
numero2 = input("Digite outro número: ")
resultado = numero1 + numero2
print(resultado)

# Se você digitar 5 e 3, vai aparecer "53" em vez de 8! 😱
```

### Por quê?

O `input()` SEMPRE guarda as coisas como TEXTO!

"5" + "3" = "53" (juntou os textos)
5 + 3 = 8 (somou os números)

### Solução: Converter para número!

```python
numero1 = int(input("Digite um número: "))
numero2 = int(input("Digite outro número: "))
resultado = numero1 + numero2
print("A soma é:", resultado)
```

### 🤔 Tipos de conversão

- `int()` - Transforma em número INTEIRO (1, 2, 3, -5...)
- `float()` - Transforma em número COM VÍRGULA (3.14, 2.5, -1.8...)
- `str()` - Transforma em TEXTO ("123", "olá"...)

### 🎮 Desafio 5: Calculadora Interativa

Crie uma calculadora que:
1. Pergunta dois números ao usuário
2. Faz a soma, subtração, multiplicação e divisão
3. Mostra todos os resultados

```python
print("=== CALCULADORA MÁGICA ===")

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

print("Soma:", num1 + num2)
print("Subtração:", num1 - num2)
print("Multiplicação:", num1 * num2)
print("Divisão:", num1 / num2)
```

---

## 🎯 PROJETO FINAL DO NÍVEL 1: Criador de Histórias

Vamos criar um programa que gera histórias personalizadas! 📖✨

### Objetivo

O programa vai perguntar várias coisas e criar uma história engraçada!

### Código Completo

```python
print("=== CRIADOR DE HISTÓRIAS MALUCAS ===")
print("Responda as perguntas para criar sua história!\n")

# Coletando informações
nome = input("Qual é o seu nome? ")
idade = input("Quantos anos você tem? ")
animal = input("Qual seu animal favorito? ")
cor = input("Qual sua cor favorita? ")
comida = input("Qual sua comida favorita? ")
lugar = input("Nome de um lugar legal: ")
numero = input("Digite um número de 1 a 100: ")

# Criando a história
print("\n" + "="*50)
print("SUA HISTÓRIA:")
print("="*50 + "\n")

print("Era uma vez uma pessoa chamada", nome)
print("que tinha", idade, "anos.")
print("Um dia,", nome, "encontrou um", animal, "mágico de cor", cor)
print("O", animal, "disse: 'Se você me der", comida + ",")
print("eu vou te levar para", lugar + "!'")
print(nome, "ficou tão feliz que pulou", numero, "vezes!")
print("\nE viveram felizes para sempre! 🎉")
```

### 🎮 Como usar

1. Rode o programa
2. Responda todas as perguntas
3. Veja sua história maluca aparecer!
4. Rode de novo com respostas diferentes!

### 🚀 Desafios extras

1. **Fácil:** Adicione mais perguntas (verbo, profissão, objeto)
2. **Médio:** Crie uma segunda versão da história
3. **Difícil:** Faça o programa gerar 3 histórias diferentes

---

## ✅ Checklist do Nível 1

Antes de ir pro Nível 2, você deve saber:

- [ ] Usar `print()` para mostrar coisas na tela
- [ ] Criar variáveis com nomes descritivos
- [ ] Fazer operações matemáticas (+, -, *, /)
- [ ] Usar `input()` para perguntar ao usuário
- [ ] Converter texto em número com `int()` e `float()`
- [ ] Juntar textos com + ou vírgula
- [ ] Criar um programa do zero

---

## 🎉 Parabéns!

Você completou o Nível 1! 🏆

Você já sabe:
- ✅ Conversar com o computador
- ✅ Guardar informações
- ✅ Fazer cálculos
- ✅ Criar programas interativos

### 🚀 Próximo passo

**[👉 CONTINUE NO NÍVEL 2 - INTERMEDIÁRIO](nivel-2-intermediario.md)**

No próximo nível, você vai aprender:
- 🔁 Fazer o programa repetir coisas (loops)
- 🤔 Tomar decisões (if/else)
- 📝 Trabalhar com listas
- 🎮 Criar jogos!

---

💡 **Dica:** Revise este nível sempre que precisar! Esses conceitos são a base de tudo!

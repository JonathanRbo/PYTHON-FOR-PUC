# 📘 Nível 2 - Intermediário (Ficando Esperto)

## 🎯 O que você vai aprender

- ✅ Tomar decisões com if/else
- ✅ Repetir ações com loops (for e while)
- ✅ Trabalhar com listas
- ✅ Criar suas próprias funções
- ✅ Fazer um jogo completo!

---

## 🤔 Aula 1: Tomando Decisões (if/else)

### Por que isso é importante?

Imagine que você está criando um jogo. Você precisa que o programa faça coisas diferentes dependendo da situação:

- Se o jogador acertou → Ganhou pontos! 🎉
- Se o jogador errou → Perdeu uma vida 💔

### Estrutura básica do if

```python
idade = 15

if idade >= 18:
    print("Você é maior de idade!")
else:
    print("Você é menor de idade!")
```

### 🤔 Entendendo

- `if` significa "SE"
- `else` significa "SENÃO"
- `>=` significa "maior ou igual"
- **ATENÇÃO:** Os espaços antes do `print` são OBRIGATÓRIOS! (é a indentação)

### Operadores de comparação

```python
# Igual
5 == 5  # True (verdadeiro)

# Diferente
5 != 3  # True (verdadeiro)

# Maior que
10 > 5  # True

# Menor que
3 < 7  # True

# Maior ou igual
5 >= 5  # True

# Menor ou igual
4 <= 10  # True
```

### 🎮 Desafio 1: Verificador de Senha

```python
senha_correta = "python123"
senha = input("Digite a senha: ")

if senha == senha_correta:
    print("✅ Acesso liberado!")
else:
    print("❌ Senha incorreta!")
```

---

## 🎚️ Aula 2: Múltiplas Condições (elif)

E se você tem MAIS de duas opções? Use `elif`!

### Exemplo: Sistema de notas

```python
nota = float(input("Digite sua nota (0-10): "))

if nota >= 9:
    print("🏆 Excelente!")
elif nota >= 7:
    print("😊 Bom!")
elif nota >= 5:
    print("😐 Regular")
else:
    print("😞 Precisa estudar mais")
```

### 🤔 Lendo o código

1. **SE** nota >= 9 → Excelente
2. **SENÃO SE** nota >= 7 → Bom
3. **SENÃO SE** nota >= 5 → Regular
4. **SENÃO** → Precisa estudar mais

### 🎮 Desafio 2: Jogo de Escolhas

```python
print("=== AVENTURA NA FLORESTA ===")
print("Você encontra uma bifurcação:")
print("1 - Ir para a esquerda")
print("2 - Ir para a direita")
print("3 - Voltar")

escolha = input("O que você faz? ")

if escolha == "1":
    print("🐻 Você encontrou um urso! GAME OVER!")
elif escolha == "2":
    print("💎 Você encontrou um tesouro! VITÓRIA!")
elif escolha == "3":
    print("🏃 Você voltou pra casa com segurança.")
else:
    print("❌ Opção inválida!")
```

---

## 🔁 Aula 3: Repetindo Ações - Loop While

### Por que loops?

Imagine que você precisa fazer o computador contar até 100. Você vai escrever 100 linhas de `print()`? NUNCA! Use loops! 🔄

### O loop while

```python
contador = 1

while contador <= 5:
    print("Contagem:", contador)
    contador = contador + 1

print("Fim!")
```

**Resultado:**
```
Contagem: 1
Contagem: 2
Contagem: 3
Contagem: 4
Contagem: 5
Fim!
```

### 🤔 Como funciona?

1. **ENQUANTO** contador for menor ou igual a 5
2. Faz o que está dentro (com indentação)
3. Aumenta o contador
4. Volta pro começo e verifica de novo

### ⚠️ CUIDADO: Loop infinito!

```python
# NUNCA FAÇA ISSO!
contador = 1
while contador <= 5:
    print(contador)
    # Esqueci de aumentar o contador! 😱
    # O programa vai ficar preso aqui pra sempre!
```

**Sempre lembre de AUMENTAR o contador!**

### 🎮 Desafio 3: Jogo de Adivinhação Simples

```python
numero_secreto = 7
tentativas = 0

print("=== JOGO DE ADIVINHAÇÃO ===")
print("Estou pensando em um número de 1 a 10!")

while True:
    palpite = int(input("Seu palpite: "))
    tentativas = tentativas + 1

    if palpite == numero_secreto:
        print(f"🎉 PARABÉNS! Você acertou em {tentativas} tentativas!")
        break
    elif palpite < numero_secreto:
        print("📈 Muito baixo! Tente novamente.")
    else:
        print("📉 Muito alto! Tente novamente.")
```

---

## 🔂 Aula 4: Loop For - Repetição Inteligente

O `for` é perfeito quando você sabe QUANTAS VEZES quer repetir!

### Contando com range()

```python
# Contar de 0 até 4
for numero in range(5):
    print(numero)

# Resultado: 0, 1, 2, 3, 4
```

```python
# Contar de 1 até 5
for numero in range(1, 6):
    print(numero)

# Resultado: 1, 2, 3, 4, 5
```

```python
# Contar de 2 em 2
for numero in range(0, 11, 2):
    print(numero)

# Resultado: 0, 2, 4, 6, 8, 10
```

### 🎮 Desafio 4: Tabuada

```python
numero = int(input("Digite um número para ver a tabuada: "))

print(f"\n=== TABUADA DO {numero} ===")
for i in range(1, 11):
    resultado = numero * i
    print(f"{numero} x {i} = {resultado}")
```

---

## 📝 Aula 5: Listas - Guardando Várias Coisas

### O que são listas?

Imagine uma mochila onde você pode guardar várias coisas! 🎒

```python
# Criando uma lista
frutas = ["maçã", "banana", "laranja", "uva"]

# Mostrando a lista completa
print(frutas)

# Mostrando um item específico (começa do 0!)
print(frutas[0])  # maçã
print(frutas[1])  # banana
print(frutas[2])  # laranja
```

### Operações com listas

```python
# Criar lista vazia
minhas_coisas = []

# Adicionar item
minhas_coisas.append("celular")
minhas_coisas.append("chave")
print(minhas_coisas)  # ['celular', 'chave']

# Remover item
minhas_coisas.remove("chave")
print(minhas_coisas)  # ['celular']

# Quantos itens tem?
print(len(minhas_coisas))  # 1
```

### Loop em listas

```python
animais = ["cachorro", "gato", "pássaro", "peixe"]

# Jeito 1: Percorrer os itens
for animal in animais:
    print("Eu gosto de", animal)

# Jeito 2: Percorrer com índice
for i in range(len(animais)):
    print(f"{i+1}. {animais[i]}")
```

### 🎮 Desafio 5: Lista de Tarefas

```python
tarefas = []

print("=== LISTA DE TAREFAS ===")

while True:
    print("\n1 - Adicionar tarefa")
    print("2 - Ver tarefas")
    print("3 - Remover tarefa")
    print("4 - Sair")

    opcao = input("\nEscolha uma opção: ")

    if opcao == "1":
        tarefa = input("Digite a tarefa: ")
        tarefas.append(tarefa)
        print("✅ Tarefa adicionada!")

    elif opcao == "2":
        if len(tarefas) == 0:
            print("📝 Nenhuma tarefa ainda!")
        else:
            print("\n=== SUAS TAREFAS ===")
            for i in range(len(tarefas)):
                print(f"{i+1}. {tarefas[i]}")

    elif opcao == "3":
        if len(tarefas) == 0:
            print("Não há tarefas para remover!")
        else:
            for i in range(len(tarefas)):
                print(f"{i+1}. {tarefas[i]}")
            indice = int(input("Qual remover? ")) - 1
            tarefas.pop(indice)
            print("✅ Tarefa removida!")

    elif opcao == "4":
        print("👋 Até logo!")
        break

    else:
        print("❌ Opção inválida!")
```

---

## 🎪 Aula 6: Funções - Criando Seus Próprios Comandos

### Por que usar funções?

Imagine que você precisa fazer a mesma coisa várias vezes. Em vez de repetir o código, crie uma FUNÇÃO!

### Função simples

```python
def saudar():
    print("Olá!")
    print("Bem-vindo!")
    print("Divirta-se!")

# Usando a função
saudar()
saudar()
saudar()
```

### Funções com parâmetros

```python
def saudar_pessoa(nome):
    print(f"Olá, {nome}!")
    print("Seja bem-vindo!")

saudar_pessoa("João")
saudar_pessoa("Maria")
saudar_pessoa("Pedro")
```

### Funções que retornam valores

```python
def somar(a, b):
    resultado = a + b
    return resultado

total = somar(5, 3)
print(total)  # 8

print(somar(10, 20))  # 30
```

### 🎮 Desafio 6: Calculadora com Funções

```python
def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Erro: Não pode dividir por zero!"
    return a / b

print("=== CALCULADORA ===")
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

print("\nRESULTADOS:")
print("Soma:", somar(num1, num2))
print("Subtração:", subtrair(num1, num2))
print("Multiplicação:", multiplicar(num1, num2))
print("Divisão:", dividir(num1, num2))
```

---

## 🎯 PROJETO FINAL DO NÍVEL 2: Jogo Completo

### Quiz Interativo + Jogo de Adivinhação

```python
import random

# Função para o Quiz
def jogar_quiz():
    print("\n" + "="*50)
    print("🧠 QUIZ DE CONHECIMENTOS GERAIS")
    print("="*50)

    pontos = 0

    # Pergunta 1
    print("\n1. Qual é a capital do Brasil?")
    print("a) São Paulo")
    print("b) Brasília")
    print("c) Rio de Janeiro")
    resposta = input("Sua resposta: ").lower()
    if resposta == "b":
        print("✅ Correto!")
        pontos += 1
    else:
        print("❌ Errado! A resposta é Brasília.")

    # Pergunta 2
    print("\n2. Quanto é 7 x 8?")
    print("a) 54")
    print("b) 56")
    print("c) 64")
    resposta = input("Sua resposta: ").lower()
    if resposta == "b":
        print("✅ Correto!")
        pontos += 1
    else:
        print("❌ Errado! A resposta é 56.")

    # Pergunta 3
    print("\n3. Quantos planetas tem no sistema solar?")
    print("a) 7")
    print("b) 8")
    print("c) 9")
    resposta = input("Sua resposta: ").lower()
    if resposta == "b":
        print("✅ Correto!")
        pontos += 1
    else:
        print("❌ Errado! São 8 planetas.")

    print(f"\n🏆 Você fez {pontos} de 3 pontos!")
    return pontos

# Função para o Jogo de Adivinhação
def jogar_adivinhacao():
    print("\n" + "="*50)
    print("🎲 JOGO DE ADIVINHAÇÃO")
    print("="*50)

    numero_secreto = random.randint(1, 50)
    tentativas = 0
    max_tentativas = 7

    print(f"\nEstou pensando em um número de 1 a 50!")
    print(f"Você tem {max_tentativas} tentativas!\n")

    while tentativas < max_tentativas:
        palpite = int(input(f"Tentativa {tentativas + 1}/{max_tentativas}: "))
        tentativas += 1

        if palpite == numero_secreto:
            print(f"\n🎉 INCRÍVEL! Você acertou em {tentativas} tentativas!")
            return 10 - tentativas  # Quanto menos tentativas, mais pontos
        elif palpite < numero_secreto:
            print("📈 Muito baixo!")
        else:
            print("📉 Muito alto!")

    print(f"\n😞 Suas tentativas acabaram! O número era {numero_secreto}")
    return 0

# Menu Principal
def menu():
    print("\n" + "="*50)
    print("🎮 ARCADE DE JOGOS")
    print("="*50)
    print("\n1 - Quiz de Conhecimentos")
    print("2 - Jogo de Adivinhação")
    print("3 - Jogar os 2 (Modo Campeão)")
    print("4 - Ver Ranking")
    print("5 - Sair")

    return input("\nEscolha um jogo: ")

# Sistema de Ranking
ranking = []

def adicionar_ao_ranking(nome, pontos):
    ranking.append({"nome": nome, "pontos": pontos})
    # Ordenar do maior para o menor
    ranking.sort(key=lambda x: x["pontos"], reverse=True)

def mostrar_ranking():
    if len(ranking) == 0:
        print("\n📊 Ranking ainda vazio! Seja o primeiro a jogar!")
    else:
        print("\n" + "="*50)
        print("🏆 RANKING DOS CAMPEÕES")
        print("="*50)
        for i in range(len(ranking)):
            print(f"{i+1}º lugar: {ranking[i]['nome']} - {ranking[i]['pontos']} pontos")

# Loop principal do jogo
print("="*50)
print("🎮 BEM-VINDO AO ARCADE DE JOGOS!")
print("="*50)
nome_jogador = input("\nQual é o seu nome? ")

while True:
    opcao = menu()
    pontos_total = 0

    if opcao == "1":
        pontos_total = jogar_quiz()
        adicionar_ao_ranking(nome_jogador, pontos_total)

    elif opcao == "2":
        pontos_total = jogar_adivinhacao()
        adicionar_ao_ranking(nome_jogador, pontos_total)

    elif opcao == "3":
        print("\n🏆 MODO CAMPEÃO - Jogue os 2 e some os pontos!")
        pontos_quiz = jogar_quiz()
        pontos_adivinhacao = jogar_adivinhacao()
        pontos_total = pontos_quiz + pontos_adivinhacao
        print(f"\n⭐ PONTUAÇÃO TOTAL: {pontos_total} pontos!")
        adicionar_ao_ranking(nome_jogador, pontos_total)

    elif opcao == "4":
        mostrar_ranking()

    elif opcao == "5":
        print("\n👋 Obrigado por jogar! Até a próxima!")
        mostrar_ranking()
        break

    else:
        print("\n❌ Opção inválida!")

    input("\nPressione ENTER para continuar...")
```

---

## ✅ Checklist do Nível 2

Antes de ir pro Nível 3, você deve saber:

- [ ] Usar if/elif/else para tomar decisões
- [ ] Criar loops com while e for
- [ ] Trabalhar com listas (append, remove, len)
- [ ] Percorrer listas com loops
- [ ] Criar funções com def
- [ ] Usar parâmetros e return em funções
- [ ] Combinar tudo para criar programas completos

---

## 🎉 Parabéns!

Você completou o Nível 2! 🏆

Agora você já sabe:
- ✅ Tomar decisões inteligentes
- ✅ Repetir ações automaticamente
- ✅ Organizar dados em listas
- ✅ Criar suas próprias funções
- ✅ Fazer jogos interativos!

### 🚀 Próximo passo

**[👉 CONTINUE NO NÍVEL 3 - AVANÇADO](nivel-3-avancado.md)**

No próximo nível, você vai aprender:
- 🎨 Programação Orientada a Objetos (criar suas próprias "coisas")
- 📁 Salvar e ler arquivos
- 🎮 Criar jogos ainda mais complexos
- 💼 Criar programas profissionais!

---

💡 **Dica:** Pratique MUITO os exercícios deste nível! Eles são a base para programas mais complexos!

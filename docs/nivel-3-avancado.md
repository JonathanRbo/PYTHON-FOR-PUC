# 📙 Nível 3 - Avançado (Virando Ninja)

## 🎯 O que você vai aprender

- ✅ Programação Orientada a Objetos (POO)
- ✅ Trabalhar com arquivos (salvar e ler dados)
- ✅ Tratamento de erros
- ✅ Módulos e bibliotecas
- ✅ Criar programas profissionais completos!

---

## 🎨 Aula 1: Programação Orientada a Objetos (POO)

### O que é POO?

Imagine que você está criando um jogo com vários personagens. Cada personagem tem:
- **Características:** nome, vida, força
- **Ações:** atacar, defender, curar

Em vez de criar variáveis soltas para cada personagem, você cria um "MOLDE" (classe) e depois cria vários personagens a partir dele!

### Criando sua primeira classe

```python
class Personagem:
    def __init__(self, nome, vida, forca):
        self.nome = nome
        self.vida = vida
        self.forca = forca

    def atacar(self):
        print(f"{self.nome} ataca com {self.forca} de força!")

    def defender(self):
        print(f"{self.nome} se defende!")

    def mostrar_status(self):
        print(f"\n=== {self.nome} ===")
        print(f"❤️  Vida: {self.vida}")
        print(f"⚔️  Força: {self.forca}")

# Criando personagens
heroi = Personagem("Thor", 100, 25)
vilao = Personagem("Loki", 80, 20)

# Usando os personagens
heroi.mostrar_status()
heroi.atacar()

vilao.mostrar_status()
vilao.atacar()
```

### 🤔 Entendendo o código

- `class Personagem:` - Cria o molde
- `__init__` - Função especial que roda quando criamos um personagem
- `self` - Referência ao próprio objeto
- `self.nome` - Característica do personagem
- `def atacar(self):` - Ação que o personagem pode fazer

### 🎮 Desafio 1: Sistema de Pokémons

```python
class Pokemon:
    def __init__(self, nome, tipo, nivel):
        self.nome = nome
        self.tipo = tipo
        self.nivel = nivel
        self.hp = nivel * 10

    def atacar(self, outro_pokemon):
        dano = self.nivel * 5
        outro_pokemon.hp -= dano
        print(f"\n{self.nome} atacou {outro_pokemon.nome}!")
        print(f"💥 Dano: {dano}")
        print(f"{outro_pokemon.nome} ficou com {outro_pokemon.hp} HP")

    def esta_vivo(self):
        return self.hp > 0

    def mostrar_info(self):
        print(f"\n🎮 {self.nome}")
        print(f"Tipo: {self.tipo}")
        print(f"Nível: {self.nivel}")
        print(f"HP: {self.hp}")

# Criando pokémons
pikachu = Pokemon("Pikachu", "Elétrico", 10)
charmander = Pokemon("Charmander", "Fogo", 8)

pikachu.mostrar_info()
charmander.mostrar_info()

# Batalha!
print("\n⚔️  BATALHA POKÉMON!")
pikachu.atacar(charmander)
charmander.atacar(pikachu)
```

---

## 🎭 Aula 2: Herança - Classes que herdam de outras

### O que é herança?

Imagine que você tem uma classe `Animal`. Você pode criar classes `Cachorro` e `Gato` que HERDAM características de `Animal`!

```python
class Animal:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def fazer_som(self):
        print("Algum som...")

    def dormir(self):
        print(f"{self.nome} está dormindo... 😴")

class Cachorro(Animal):
    def fazer_som(self):
        print(f"{self.nome}: Au au! 🐕")

    def buscar_bola(self):
        print(f"{self.nome} foi buscar a bola! 🎾")

class Gato(Animal):
    def fazer_som(self):
        print(f"{self.nome}: Miau! 🐱")

    def arranhar(self):
        print(f"{self.nome} arranhou o sofá! 😼")

# Criando animais
rex = Cachorro("Rex", 3)
mimi = Gato("Mimi", 2)

rex.fazer_som()
rex.buscar_bola()
rex.dormir()

mimi.fazer_som()
mimi.arranhar()
mimi.dormir()
```

### 🎮 Desafio 2: Sistema de RPG com Herança

```python
class Personagem:
    def __init__(self, nome, vida, forca):
        self.nome = nome
        self.vida = vida
        self.vida_maxima = vida
        self.forca = forca

    def atacar(self, alvo):
        dano = self.forca
        alvo.vida -= dano
        print(f"\n{self.nome} atacou {alvo.nome}!")
        print(f"💥 Dano: {dano}")
        return dano

    def esta_vivo(self):
        return self.vida > 0

class Guerreiro(Personagem):
    def __init__(self, nome):
        super().__init__(nome, vida=120, forca=25)
        self.armadura = 10

    def ataque_especial(self, alvo):
        dano = self.forca * 2
        alvo.vida -= dano
        print(f"\n⚔️  {self.nome} usou GOLPE PODEROSO!")
        print(f"💥 Dano crítico: {dano}")
        return dano

class Mago(Personagem):
    def __init__(self, nome):
        super().__init__(nome, vida=80, forca=15)
        self.mana = 50

    def ataque_especial(self, alvo):
        if self.mana >= 20:
            dano = self.forca * 3
            alvo.vida -= dano
            self.mana -= 20
            print(f"\n🔮 {self.nome} lançou BOLA DE FOGO!")
            print(f"💥 Dano mágico: {dano}")
            return dano
        else:
            print("Mana insuficiente!")
            return 0

    def restaurar_mana(self):
        self.mana = 50
        print(f"{self.nome} restaurou toda a mana!")

# Testando
guerreiro = Guerreiro("Thor")
mago = Mago("Merlin")

print("=== BATALHA ===")
guerreiro.atacar(mago)
mago.ataque_especial(guerreiro)
guerreiro.ataque_especial(mago)
```

---

## 📁 Aula 3: Trabalhando com Arquivos

### Por que usar arquivos?

Até agora, quando você fecha o programa, TUDO é perdido! 😱

Com arquivos, você pode:
- 💾 Salvar dados
- 📖 Ler dados salvos
- 🔄 Manter informações entre execuções

### Salvando dados em arquivo

```python
# Escrevendo em um arquivo
arquivo = open("meu_arquivo.txt", "w", encoding="utf-8")
arquivo.write("Olá, mundo!\n")
arquivo.write("Esta é a segunda linha!\n")
arquivo.write("Python é incrível!")
arquivo.close()

print("✅ Arquivo salvo!")
```

### Lendo dados de arquivo

```python
# Lendo um arquivo
arquivo = open("meu_arquivo.txt", "r", encoding="utf-8")
conteudo = arquivo.read()
print(conteudo)
arquivo.close()
```

### Jeito melhor: usando `with`

```python
# Escrever
with open("notas.txt", "w", encoding="utf-8") as arquivo:
    arquivo.write("Python: 10\n")
    arquivo.write("Matemática: 9\n")
    arquivo.write("História: 8\n")

# Ler
with open("notas.txt", "r", encoding="utf-8") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)
```

### 🎮 Desafio 3: Diário Pessoal

```python
def adicionar_entrada():
    print("\n=== NOVA ENTRADA NO DIÁRIO ===")
    data = input("Data (dd/mm/aaaa): ")
    texto = input("O que aconteceu hoje? ")

    with open("diario.txt", "a", encoding="utf-8") as arquivo:
        arquivo.write(f"\n{'='*50}\n")
        arquivo.write(f"Data: {data}\n")
        arquivo.write(f"{texto}\n")

    print("✅ Entrada salva no diário!")

def ler_diario():
    try:
        with open("diario.txt", "r", encoding="utf-8") as arquivo:
            conteudo = arquivo.read()
            if conteudo:
                print("\n" + "="*50)
                print("📖 MEU DIÁRIO")
                print("="*50)
                print(conteudo)
            else:
                print("📝 Diário ainda está vazio!")
    except FileNotFoundError:
        print("📝 Você ainda não criou nenhuma entrada!")

# Menu
while True:
    print("\n=== DIÁRIO PESSOAL ===")
    print("1 - Nova entrada")
    print("2 - Ler diário")
    print("3 - Sair")

    opcao = input("Escolha: ")

    if opcao == "1":
        adicionar_entrada()
    elif opcao == "2":
        ler_diario()
    elif opcao == "3":
        print("👋 Até logo!")
        break
```

---

## 🛡️ Aula 4: Tratamento de Erros

### Por que tratar erros?

Quando algo dá errado, o programa QUEBRA! 💥

Com tratamento de erros, você pode:
- ✅ Evitar que o programa quebre
- ✅ Mostrar mensagens amigáveis
- ✅ Dar segunda chance ao usuário

### Try/Except básico

```python
try:
    numero = int(input("Digite um número: "))
    resultado = 100 / numero
    print(f"Resultado: {resultado}")
except ValueError:
    print("❌ Isso não é um número válido!")
except ZeroDivisionError:
    print("❌ Não pode dividir por zero!")
```

### 🎮 Desafio 4: Calculadora Segura

```python
def calculadora_segura():
    print("=== CALCULADORA SEGURA ===")

    while True:
        try:
            num1 = float(input("\nPrimeiro número: "))
            operacao = input("Operação (+, -, *, /): ")
            num2 = float(input("Segundo número: "))

            if operacao == "+":
                resultado = num1 + num2
            elif operacao == "-":
                resultado = num1 - num2
            elif operacao == "*":
                resultado = num1 * num2
            elif operacao == "/":
                resultado = num1 / num2
            else:
                print("❌ Operação inválida!")
                continue

            print(f"\n✅ Resultado: {resultado}")

            continuar = input("\nNovo cálculo? (s/n): ")
            if continuar.lower() != "s":
                break

        except ValueError:
            print("❌ Digite apenas números!")
        except ZeroDivisionError:
            print("❌ Não pode dividir por zero!")
        except Exception as e:
            print(f"❌ Erro inesperado: {e}")

calculadora_segura()
```

---

## 📦 Aula 5: Módulos e Bibliotecas

### O que são módulos?

Módulos são "caixas de ferramentas" prontas que você pode usar!

### Módulos úteis

```python
# Random - números aleatórios
import random

numero = random.randint(1, 100)
print(numero)

fruta = random.choice(["maçã", "banana", "uva"])
print(fruta)

# Time - trabalhar com tempo
import time

print("Contagem regressiva:")
for i in range(5, 0, -1):
    print(i)
    time.sleep(1)  # Espera 1 segundo
print("🚀 LANÇAMENTO!")

# Datetime - datas
from datetime import datetime

agora = datetime.now()
print(f"Hoje é: {agora.day}/{agora.month}/{agora.year}")
print(f"Hora atual: {agora.hour}:{agora.minute}")

# Math - matemática avançada
import math

print(math.sqrt(16))  # Raiz quadrada: 4.0
print(math.pi)  # Pi: 3.14159...
print(math.pow(2, 3))  # Potência: 8.0
```

---

## 🎯 PROJETO FINAL: Sistema Completo de Gerenciamento

### Sistema de Cadastro de Alunos

```python
import json
from datetime import datetime

class Aluno:
    def __init__(self, nome, idade, curso):
        self.nome = nome
        self.idade = idade
        self.curso = curso
        self.notas = []
        self.data_cadastro = datetime.now().strftime("%d/%m/%Y %H:%M")

    def adicionar_nota(self, materia, nota):
        self.notas.append({"materia": materia, "nota": nota})

    def calcular_media(self):
        if not self.notas:
            return 0
        total = sum(nota["nota"] for nota in self.notas)
        return total / len(self.notas)

    def para_dict(self):
        return {
            "nome": self.nome,
            "idade": self.idade,
            "curso": self.curso,
            "notas": self.notas,
            "data_cadastro": self.data_cadastro
        }

    def mostrar_info(self):
        print(f"\n{'='*50}")
        print(f"👤 Nome: {self.nome}")
        print(f"🎂 Idade: {self.idade}")
        print(f"📚 Curso: {self.curso}")
        print(f"📅 Cadastrado em: {self.data_cadastro}")

        if self.notas:
            print("\n📊 NOTAS:")
            for nota_info in self.notas:
                print(f"  • {nota_info['materia']}: {nota_info['nota']}")
            print(f"\n📈 Média: {self.calcular_media():.2f}")
        else:
            print("\n📝 Nenhuma nota registrada ainda")
        print("="*50)

class SistemaEscolar:
    def __init__(self):
        self.alunos = []
        self.carregar_dados()

    def salvar_dados(self):
        try:
            dados = [aluno.para_dict() for aluno in self.alunos]
            with open("alunos.json", "w", encoding="utf-8") as arquivo:
                json.dump(dados, arquivo, indent=4, ensure_ascii=False)
            print("✅ Dados salvos com sucesso!")
        except Exception as e:
            print(f"❌ Erro ao salvar: {e}")

    def carregar_dados(self):
        try:
            with open("alunos.json", "r", encoding="utf-8") as arquivo:
                dados = json.load(arquivo)
                for dado in dados:
                    aluno = Aluno(dado["nome"], dado["idade"], dado["curso"])
                    aluno.notas = dado["notas"]
                    aluno.data_cadastro = dado["data_cadastro"]
                    self.alunos.append(aluno)
            print(f"✅ {len(self.alunos)} aluno(s) carregado(s)")
        except FileNotFoundError:
            print("📝 Nenhum dado anterior encontrado. Começando do zero!")
        except Exception as e:
            print(f"❌ Erro ao carregar dados: {e}")

    def cadastrar_aluno(self):
        print("\n=== CADASTRAR NOVO ALUNO ===")
        nome = input("Nome: ")

        try:
            idade = int(input("Idade: "))
            if idade < 0 or idade > 150:
                print("❌ Idade inválida!")
                return
        except ValueError:
            print("❌ Digite uma idade válida!")
            return

        curso = input("Curso: ")

        aluno = Aluno(nome, idade, curso)
        self.alunos.append(aluno)
        self.salvar_dados()
        print(f"✅ Aluno {nome} cadastrado com sucesso!")

    def listar_alunos(self):
        if not self.alunos:
            print("\n📝 Nenhum aluno cadastrado ainda!")
            return

        print("\n" + "="*50)
        print("📋 LISTA DE ALUNOS")
        print("="*50)
        for i, aluno in enumerate(self.alunos, 1):
            media = aluno.calcular_media()
            print(f"{i}. {aluno.nome} - {aluno.curso} (Média: {media:.2f})")

    def buscar_aluno(self, nome):
        for aluno in self.alunos:
            if aluno.nome.lower() == nome.lower():
                return aluno
        return None

    def adicionar_nota_aluno(self):
        self.listar_alunos()
        if not self.alunos:
            return

        nome = input("\nNome do aluno: ")
        aluno = self.buscar_aluno(nome)

        if aluno:
            materia = input("Matéria: ")
            try:
                nota = float(input("Nota (0-10): "))
                if 0 <= nota <= 10:
                    aluno.adicionar_nota(materia, nota)
                    self.salvar_dados()
                    print(f"✅ Nota adicionada! Nova média: {aluno.calcular_media():.2f}")
                else:
                    print("❌ Nota deve estar entre 0 e 10!")
            except ValueError:
                print("❌ Digite uma nota válida!")
        else:
            print("❌ Aluno não encontrado!")

    def ver_detalhes_aluno(self):
        self.listar_alunos()
        if not self.alunos:
            return

        nome = input("\nNome do aluno: ")
        aluno = self.buscar_aluno(nome)

        if aluno:
            aluno.mostrar_info()
        else:
            print("❌ Aluno não encontrado!")

    def remover_aluno(self):
        self.listar_alunos()
        if not self.alunos:
            return

        nome = input("\nNome do aluno para remover: ")
        aluno = self.buscar_aluno(nome)

        if aluno:
            confirma = input(f"Tem certeza que deseja remover {nome}? (s/n): ")
            if confirma.lower() == "s":
                self.alunos.remove(aluno)
                self.salvar_dados()
                print(f"✅ Aluno {nome} removido!")
        else:
            print("❌ Aluno não encontrado!")

    def estatisticas(self):
        if not self.alunos:
            print("\n📝 Nenhum aluno cadastrado ainda!")
            return

        total_alunos = len(self.alunos)
        alunos_com_notas = [a for a in self.alunos if a.notas]

        if not alunos_com_notas:
            print("\n📊 Nenhum aluno tem notas registradas ainda!")
            return

        medias = [a.calcular_media() for a in alunos_com_notas]
        media_geral = sum(medias) / len(medias)
        melhor_aluno = max(alunos_com_notas, key=lambda a: a.calcular_media())

        print("\n" + "="*50)
        print("📊 ESTATÍSTICAS GERAIS")
        print("="*50)
        print(f"👥 Total de alunos: {total_alunos}")
        print(f"📝 Alunos com notas: {len(alunos_com_notas)}")
        print(f"📈 Média geral da turma: {media_geral:.2f}")
        print(f"🏆 Melhor aluno: {melhor_aluno.nome} ({melhor_aluno.calcular_media():.2f})")

    def menu(self):
        while True:
            print("\n" + "="*50)
            print("🎓 SISTEMA DE GERENCIAMENTO ESCOLAR")
            print("="*50)
            print("1 - Cadastrar aluno")
            print("2 - Listar alunos")
            print("3 - Ver detalhes de aluno")
            print("4 - Adicionar nota")
            print("5 - Remover aluno")
            print("6 - Ver estatísticas")
            print("7 - Sair")

            opcao = input("\nEscolha uma opção: ")

            if opcao == "1":
                self.cadastrar_aluno()
            elif opcao == "2":
                self.listar_alunos()
            elif opcao == "3":
                self.ver_detalhes_aluno()
            elif opcao == "4":
                self.adicionar_nota_aluno()
            elif opcao == "5":
                self.remover_aluno()
            elif opcao == "6":
                self.estatisticas()
            elif opcao == "7":
                print("\n👋 Salvando dados e encerrando...")
                self.salvar_dados()
                print("Até logo!")
                break
            else:
                print("❌ Opção inválida!")

            input("\nPressione ENTER para continuar...")

# Executar o sistema
if __name__ == "__main__":
    sistema = SistemaEscolar()
    sistema.menu()
```

---

## ✅ Checklist do Nível 3

Você completou o nível 3 se souber:

- [ ] Criar classes com atributos e métodos
- [ ] Usar herança entre classes
- [ ] Salvar e ler arquivos
- [ ] Trabalhar com JSON
- [ ] Tratar erros com try/except
- [ ] Usar módulos (random, time, datetime, math)
- [ ] Criar sistemas completos com múltiplas funcionalidades
- [ ] Organizar código em funções e classes

---

## 🎉 PARABÉNS! VOCÊ É OFICIALMENTE UM PROGRAMADOR PYTHON!

### 🏆 O que você conquistou

Você agora sabe:
- ✅ Todos os fundamentos de Python
- ✅ Criar programas interativos complexos
- ✅ Trabalhar com dados persistentes
- ✅ Organizar código profissionalmente
- ✅ Resolver problemas reais com programação

### 🚀 Próximos Passos

1. **Praticar muito!** - Faça projetos pessoais
2. **Aprender bibliotecas específicas:**
   - 🌐 **Web:** Flask ou Django
   - 📊 **Dados:** Pandas, NumPy, Matplotlib
   - 🤖 **IA:** TensorFlow, PyTorch
   - 🎮 **Jogos:** Pygame
   - 🖥️ **Desktop:** Tkinter, PyQt

3. **Participar de comunidades:**
   - Stack Overflow
   - GitHub
   - Reddit r/learnpython
   - Discord de programação

4. **Construir portfólio:**
   - Crie projetos interessantes
   - Publique no GitHub
   - Compartilhe com outros

### 💡 Dicas Finais

- 📚 **Nunca pare de aprender** - Tecnologia sempre evolui
- 🤝 **Ajude outros iniciantes** - Ensinar é a melhor forma de aprender
- 🐛 **Erre sem medo** - Bugs fazem parte da programação
- 🎯 **Foque em projetos** - Aprenda fazendo
- 😊 **Divirta-se** - Programação é criatividade!

---

## 🎁 Projetos Bônus para Praticar

### Nível Fácil
1. **Sistema de Biblioteca** - Cadastrar livros, empréstimos, devoluções
2. **Jogo da Forca** - Versão completa com temas e dificuldades
3. **Lista de Compras Inteligente** - Com categorias e orçamento

### Nível Médio
4. **Sistema Financeiro Pessoal** - Controle de gastos, categorias, relatórios
5. **Jogo de RPG Completo** - Com múltiplos personagens, itens, combate
6. **Sistema de Notas/To-Do** - Com prioridades, tags, busca

### Nível Avançado
7. **Mini Rede Social** - Posts, comentários, likes, seguir pessoas
8. **E-commerce Simples** - Produtos, carrinho, pagamento simulado
9. **Sistema de Hotel** - Reservas, quartos, clientes, check-in/out

---

💜 **Você é incrível!** Parabéns por completar toda essa jornada!

🐍 **Bem-vindo à comunidade Python!** Agora você faz parte de milhões de programadores ao redor do mundo!

🎯 **O céu é o limite!** Use seus conhecimentos para criar coisas incríveis!

---

[⬅️ VOLTAR PARA O INÍCIO](README.md)

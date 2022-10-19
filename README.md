<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 5 | 2022 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo

- Relembrar os conceitos relacionados a objeto em Javascript;
- Aprender conceitos de função construtora e tipos de instanciação;
- Aprender utilização de prototype em JS.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recaptulando](#recaptulando)
    - [Objetos Literais](#objetos-literais)
    - [Pensando além](#pensando-além)
  - [Função Construtora](#função-construtora)
    - [Functional Instantiation](#functional-instantiation)
    - [Functional Instantiation with Shared Methods](#functional-instantiation-with-shared-methods)
  - [Prototype](#prototype)
    - [Prototypal Instantiation](#prototypal-instantiation)
    - [Pseudoclassical Instantiation](#pseudoclassical-instantiation)
  - [Considerações finais ... por enquanto!](#considerações-finais--por-enquanto)

- [Exercícios](#exercícios)
- [Material da aula](#material-da-aula)
- [Links Úteis](#links-úteis)
- [Contatos](#contatos)

# Conteúdo

## Recaptulando...

### Objetos Literais

O objeto JavaScript é um tipo de dados _não primitivo_ que permite armazenar várias coleções de dados.
Normalmente, são usados chaves `{...}`. Essa declaração é chamada de _objeto literal_.
Dessa maneira nós podemos simplesmente criar um objeto por colocar propriedades (cada par chave-valor) dentro das chaves:

```javascript
let animal = {
	type: 'cachorro',
	name: 'Aslam',
	age: 3,
	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
	'can I have': true,
};
```

ou

```javascript
let animal = {};

animal.type = 'cachorro';
animal.name = 'Aslam';
animal.age = 3;
animal.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal['can I have'] = true;
```

As duas maneiras de criar um objeto são válidas. Nós vamos utilizar como está na segunda maneira, que é a maneira que mais encontramos pela internet quando falamos de protótipos com JavaScript, mas ambas estão corretas.

É possível acessar as propriedades de um objeto usando a notação de ponto: `console.log(animal.name)` ou a notação de colchetes: `console.log(animal["can I have"])`.

Caso eu tente acessar uma propriedade inexistente, o programa retorna _undefined_.

```javascript
console.log(animal.email); //undefined
```

Lembrando que apesar de variáveis normalmente não poderem ser nomeadas com palavras reservadas, as propriedades de objetos não possuem essa restrição.
Também não há restrições quanto a tipos, é possível ter tipos primitivos, objetos ou até mesmo funções como valores de uma propriedade.

_Como propriedade:_

```javascript
let animal = {
	type: 'cachorro',
	//...
	eat: function eat() {
		console.log('O animal está comendo');
	},
};
```

ou

```javascript
let animal = {
	type: 'cachorro',
	//...
	eat() {
		console.log('O animal está comendo');
	},
};
```

_Expressão de Função:_

```javascript
let animal = {};

(animal.type = 'cachorro'),
	//...
	(animal.eat = function eat() {
		console.log('O animal está comendo');
	});
```

_Funções pré-existentes:_

```javascript
function eat() {
	console.log('O animal está comendo');
}

let animal = {};

(animal.type = 'cachorro'),
	//...
	(animal.eat = eat);
```

É comum que métodos precisem acessar informações que estão armazenadas em outras propriedades do objeto.
Para acessar o objeto (suas propriedades), o método pode usar a palavra `this`:

```javascript
let animal = {
	type: 'cachorro',
	name: 'Aslam',
	age: 3,
	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
	'can I have': true,
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},
};
```

ou

```javascript
let animal = {};

animal.type = 'cachorro';
animal.name = 'Aslam';
animal.age = 3;
animal.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal['can I have'] = true;

animal.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
};
```

No JavaScript, `this` se comporta de maneira diferente da maioria das outras linguagens de programação.
Ele pode ser usado em qualquer função, mesmo que não seja um método de um objeto.
O valor de `this` é avaliado durante o tempo de execução, dependendo do contexto. Se não houver valor, `undefined` será retornado.

#### → Vamos aplicar? [Exercício 1](/exercicios/para-sala/exercicio-1)

### Pensando além

Da maneira que criamos o objeto animal acima, toda vez que eu quiser criar um novo animal, será necessário repetir todo esse código, o que pode ser completamente inviável a depender do tamanho e complexidade do nosso código.

Então, vamos pensar um pouco além...

**Pergunta:**
Como vocês acham que é possível reutilizar o código de um objeto literal, como o escrito anteriormente, para criar outros animais sem precisar reescrever tudo novamente?

**Resposta**
Nós podemos colocar todo esse código dentro de uma função, para que seja possível criar outros objetos semelhantes:

```javascript
function Animal() {
	let animal = {};

	animal.type = 'cachorro';
	animal.name = 'Aslam';
	animal.age = 3;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal();
const animal2 = Animal();

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);
```

Porém, dessa maneira, todos os objetos criados a partir da função Animal têm os mesmos dados, pois eles estão fixos dentro da função.

**Pergunta:**
Como fazer para criar diferentes objetos de uma maneira dinâmica?

**Resposta:**
Precisamos receber os valores das propriedades dinamicamente, para cada animal que for criado.

## Função Construtora

Nós temos então o que chamamos de _Função Construtora_, que são funções que "constroem" um novo objeto a partir das propriedades que ela, obrigatoriamente, deve receber de qualquer instância de objeto que a invocar.

Vocês aprenderam em orientação a objetos, que uma classe possui um _constructor_, responsável por receber parâmetros e associá-los ao objeto que está sendo criado.
A ideia de uma função construtora é muito semelhante.
Ela recebe parâmetros para construir um objeto com esses valores.

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
const animal2 = Animal('gato', 'Caju', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat(); //O cachorro chamado Aslam está comendo
animal2.eat(); //O gato chamado Caju está comendo
```

**Nos exemplos acima, estamos criando uma função que recebe parâmetros, cria um objeto utilizando os parâmetros recebidos como valores das propriedades desse objeto e, por fim, retorna esse objeto criado para quem chamou a função.**

Em resumo:
Uma função construtora é função especial que cria e inicializa uma instância de um objeto.
O propósito de um construtor é criar um novo objeto a partir das propriedades existentes de outro objeto, sem que haja repetição de código.

#### → Vamos aplicar? [Exercício 2](/exercicios/para-sala/exercicio-2)

Existem diversos modos ou tipos de instanciação, os que serão abordados ao longo do curso são:

- [ ] Functional Instantiation (Instanciação Funcional)
- [ ] Functional Instantiation with Shared Methods (Instanciação Funcional com métodos compartilhados)
- [ ] Prototypal Instantiation (Instanciação Prototípica)
- [ ] Pseudoclassical Instantiation (Instanciação Pseudoclássica)
- [ ] ES6 Instantiation (Instanciação ES6)

### Functional Instantiation

Uma função construtora do tipo _Functional_ é a que estamos utilizando até o momento:

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}
```

Essa é a maneira mais simples e intuitiva de criar uma função construtora.
Nesse caso, primeiro criamos uma função. Dentro da função criamos um objeto e adicionamos propriedades e métodos a ele. Em seguida, retornamos esse objeto.

Toda vez que a função for chamada teremos acesso às propriedades e métodos que foram criados.

```javascript
const animal1 = Animal('cachorro', 'Aslam', 3);
const animal2 = Animal('gato', 'Caju', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat(); //O cachorro chamado Aslam está comendo
animal2.eat(); //O gato chamado Caju está comendo
```

#### → Vamos aplicar? [Exercício 3](/exercicios/para-sala/exercicio-3)

#### Vantagens da Functional Instantiation:

- Fácil de aprender e de aplicar;
- Fácil de ler.

#### Desvantagens da Functional Instantiation:

- Os métodos estão contidos na função, então toda vez que se cria uma nova instância desse objeto, todas as propriedades e métodos na memória são recriados;
  - Cada um desses métodos não é apenas dinâmico, mas também completamente genérico. O que isso significa é que não há razão para recriar esses métodos como estamos fazendo atualmente sempre que criamos um novo animal. Estamos apenas desperdiçando memória e tornando cada objeto animal maior do que precisa ser.

<p align="center">
  <img width="700px" src="https://user-images.githubusercontent.com/26902816/195221636-40492884-30af-427b-81f9-34a3dc2ba873.png" />
</p>

- Se você criar um novo objeto usando esta função, alterar um métodos da função e criar uma nova instância, os dois objetos criados farão referência a métodos diferentes.

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
animal1.eat(); //O cachorro chamado Aslam está comendo

Animal = (type, name, age) => {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`${this.name} é um animal do tipo ${this.type} e está comendo`);
	};

	return animal;
};

const animal2 = Animal('gato', 'Caju', 1);
animal2.eat(); //Caju é um animal do tipo gato está comendo
```

### Functional Instantiation with Shared Methods

Ou apenas Functional Shared Instantiation.

A função construtora do tipo _Functional Shared_ busca sanar a limitação de memória da instanciação funcional, tornando os métodos compartilhados entre todos os objetos.

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
		this.energy += 5;
		console.log(`Energia atual: ${this.energy}`);
	},

	sleep: function sleep(amount) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += amount;
		console.log(`Energia atual: ${this.energy}`);
	},
};

function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;

	return animal;
}
```

1. Começamos criando uma função construtora com um objeto para o qual definimos suas propriedades dentro dessa função.
2. Os métodos são definidos em **outro objeto**.
3. Em seguida, estendemos nosso objeto com esses métodos.
4. No final, retornamos o objeto.

Cada objeto criado por instanciação compartilhada funcional terá um ponteiro para os mesmos métodos sem duplicação.

```javascript
const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1);
animal1.eat();
animal1.sleep(10);

const animal2 = Animal('gato', 'Caju', 1);
console.log(animal2);
animal2.eat();
animal2.sleep(10);
```

#### → Vamos aplicar? [Exercício 4](/exercicios/para-sala/exercicio-4)

#### Vantagens da Functional Instantiation with Shared Methods:

- Remove a duplicação de métodos encontrados na instanciação funcional, o que melhora o gerenciamento de memória.

<p align="center">
  <img width="700px" src="https://user-images.githubusercontent.com/26902816/195227607-8aaf867d-13ec-40d3-953f-366241a339a8.png" />
</p>

#### Desvantagens da Functional Instantiation with Shared Methods:

- Para usar esse método, você precisa criar um objeto, decorá-lo e depois retorná-lo da função construtora.

- Os ponteiros para os métodos compartilhados são criados quando o objeto é instanciado. Se você modificar os métodos e depois criar novos objetos, o objeto original e o novo objeto farão referência a métodos diferentes.

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},
};

function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = animalMethods.eat;

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
animal1.eat(); //O cachorro chamado Aslam está comendo

animalMethods.eat = function eat() {
	console.log(`${this.name} é um animal do tipo ${this.type} e está comendo`);
};

const animal2 = Animal('gato', 'Caju', 1);
animal2.eat(); //Caju é um animal do tipo gato está comendo
```

<p align="center">
  <img width="700px" src="https://user-images.githubusercontent.com/26902816/195229027-b1656391-3d19-4656-8002-809a4dd39fb0.png" />
</p>

#### Object.create()
Antes de continuarmos, vamos entender esse método do JavaScript, o `Object.create()`.
Em resumo, o `Object.create()` permite que você crie um objeto a partir de outro, então quando forem buscadas propriedades que não existem nesse objeto criado, o código olhará para o objeto 'pai' que deu origem a ele, em busca dessa propriedade faltante.

```javascript
const parent = {
	name: 'Marcela',
	age: 35,
	heritage: 'Brasileira',
};

const child = Object.create(parent);
child.name = 'Valentina';
child.age = 7;

console.log(parent.name); // Marcela
console.log(parent.age); // 35

console.log(child.name); // Valentina
console.log(child.age); // 7
console.log(child.heritage); // Brasileira

console.log(child.email); //undefined
```

Então, no exemplo acima, como o objeto `child` foi criado com `Object.create(parent)`, sempre que uma propriedade não existir em `child`, o código olhará para o objeto que deu origem a ele.

Portanto, mesmo que o objeto `child` não contenha a propriedade `heritage`, o objeto `parent`, que deu origem a ele, contem, então ele retorna o valor dessa propriedade, que nesse caso, é `Brasileira`.

Caso o objeto que deu origem também não contenha essa propriedade, é retornado `undefined`;

Com isso, conseguimos melhorar a nossa função construtora criada anteriormente.

#### Functional Instantiation with Shared Methods and Object.create()

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
		this.energy += 5;
		console.log(`Energia atual: ${this.energy}`);
	},

	sleep: function sleep(amount) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += amount;
		console.log(`Energia atual: ${this.energy}`);
	},
};

function Animal(type, name, age) {
	let animal = Object.create(animalMethods);

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal;
}
```

Dessa maneira agora, ainda criamos um objeto separado onde os métodos são definidos.
Porém, no momento de criar nosso objeto dentro da nossa função construtora, ao invés de criar um objeto vazio de início, criamos um objeto utilizando o Object.create() e passamos o objeto de métodos como parâmetro.

Dessa maneira, não precisamos definir os métodos dentro da função construtora, pois quando os métodos forem chamados, o código olhará diretamente para o objeto de métodos que deu origem ao objeto da função construtora.

```javascript
const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1);
animal1.eat();
animal1.sleep(10);

const animal2 = Animal('gato', 'Caju', 1);
console.log(animal2);
animal2.eat();
animal2.sleep(10);
```

#### → Vamos aplicar? [Exercício 5](/exercicios/para-sala/exercicio-5)

## Prototype

Bom, ainda há algumas melhorias que podemos fazer.
Parece um pouco estranho precisar criar um objeto separado (`animalMethods`) para compartilhar métodos entre as instâncias do nosso objeto.

Acontece que o JavaScript possui uma solução pra isso: `prototype`.

"O que é o `prototype`?", vocês me perguntam.

Simplificando, toda função que criamos no JavaScript tem uma propriedade, chamada `prototype`, que faz referência a um **objeto**.
Ou seja, *a gente já tem um objeto prontinho pra ser usado*. Não precisamos criar outro.

```javascript
function qualquerFuncao() {}

console.log(qualquerFuncao.prototype); //{}
```

### Prototypal Instantiation

Então, ao invés de criar um método novo pra colocar os nossos métodos, como estamos criando o `animalMethods`, podemos colocar todos esses métodos dentro do objeto que o JavaScript já nos dá: o `Animal.prototype`. E daí então, ao invés de passarmos o `animalMethods` dentro do `Object.create()`, passamos o `Animal.prototype`:

```javascript
function Animal(type, name, age) {
	let animal = Object.create(Animal.prototype);

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal;
}

Animal.prototype.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
	this.energy += 5;
	console.log(`Energia atual: ${this.energy}`);
};

Animal.prototype.sleep = function sleep(amount) {
	console.log(`O ${this.type} chamado ${this.name} está dormindo`);
	this.energy += amount;
	console.log(`Energia atual: ${this.energy}`);
};
```

Pronto! Temos o nosso objeto de métodos da mesma maneira, mas é um objeto que toda função em JavaScript já tem por padrão.

Toda a nossa funcionalidade ainda é a mesma, mas agora ao invés de ter que gerenciar um objeto separado para todos os métodos, podemos simplesmente usar outro objeto que vem embutido na própria função `Animal`, a `Animal.prototype`.

```javascript
const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1);
animal1.eat();
animal1.sleep(10);

const animal2 = Animal('gato', 'Caju', 1);
console.log(animal2);
animal2.eat();
animal2.sleep(10);
```

#### → Vamos aplicar? [Exercício 6](/exercicios/para-sala/exercicio-6)

### Pseudoclassical Instantiation

Vamos entrar um pouco mais fundo agora.
Até esse ponto, nós já sabemos:
1. Como criar uma função construtora.
2. Como adicionar métodos ao `prototype`da função.
3. Como usar o `Object.create()` para delegar um objeto de origem que fornecerá as propriedades que o objeto originado não possua.

Tendo entendido tudo isso, conseguimos buscar agora uma maneira mais simples de realizar tudo isso, e é agora que introduzimos a palavra `new`.

O que é bom sobre a abordagem lenta e metódica que adotamos para chegar aqui, é que agora você terá uma compreensão profunda de exatamente o que acontece nos bastidores do JavaScript com a palavra-chave `new`.

Olhando novamente para a Função construtora no nosso `Animal`, as duas partes mais importantes são:
- Criar o objeto
- Retornar o objeto

Sem **criar** o objeto com `Object.create()`, não é possível delegar as funções do `prototype` para os objetos instanciados. Sem **retornar** o objeto, não é possível receber o objeto que foi criado.

```javascript
function Animal(type, name, age) {
	let animal = Object.create(Animal.prototype); //Criação do objeto

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal; //Retorno do objeto
}
```

Aqui está o que é interessante a respeito do `new`: quando você invoca uma função usando a palavra-chave `new`, essas duas linhas são feitas para você implicitamente ("por baixo dos panos") e o objeto que é criado é chamado `this`.

Usando comentários para mostrar o que acontece nos bastidores e assumindo que a função construtora `Animal` é chamada com a palavra-chave `new`, o objeto pode ser reescrito como `this`:

```javascript
function Animal(type, name, age) {
	//let this = Object.create(Animal.prototype); //Criação do objeto

	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;

	//return this; //Retorno do objeto
}

const animal1 = new Animal('cachorro', 'Aslam', 3);
const animal2 = new Animal('gato', 'Caju', 1);

console.log(animal1);
console.log(animal2);
```

E sem os comentários:

```javascript
function Animal(type, name, age) {
	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;
}

Animal.prototype.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
	this.energy += 5;
	console.log(`Energia atual: ${this.energy}`);
};

Animal.prototype.sleep = function sleep(amount) {
	console.log(`O ${this.type} chamado ${this.name} está dormindo`);
	this.energy += amount;
	console.log(`Energia atual: ${this.energy}`);
};

const animal1 = new Animal('cachorro', 'Aslam', 3);
const animal2 = new Animal('gato', 'Caju', 1);

console.log(animal1);
console.log(animal2);
```

Novamente, a razão pela qual isso funciona e que o objeto `this` é criado para nós, é porque chamamos a função construtora com a palavra-chave `new`.
Se você quando invocarmos a função, não utilizarmos a palavra `new`, esse objeto `this` nunca será criado nem retornado implicitamente. Podemos ver o problema com isso no exemplo abaixo:

```javascript
function Animal(type, name, age) {
	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1); //undefined
```

#### → Vamos aplicar? [Exercício 7](/exercicios/para-sala/exercicio-7)

#### Vantagens da Pseudoclassical Instantiation:

- Ao utilizar a funcionalidade incorporada ao JavaScript, a Pseudoclassical Instantiation é o método mais otimizado de criação de objetos.

#### Desvantagens da Pseudoclassical Instantiation:

- É um pouco mais complexo em seu design e implementação quando comparado aos outros métodos.

## Considerações finais ... por enquanto!

Bom...
Se JavaScript não é a sua primeira linguagem de programação, você pode pensar: ok, essa me parece uma versão piorada de Classe.

Como vocês viram em aulas anteriores, uma classe permite que você crie uma "forma" para um objeto. Então, sempre que você cria uma instância dessa classe, você obtém um objeto com as propriedades e métodos definidos nessa "forma".

Soa familiar? Isso é basicamente o que fizemos com nossa função construtora `Animal` acima.
No entanto, em vez de usar a palavra-chave `class`, usamos apenas uma função JavaScript antiga e regular para recriar a **mesma funcionalidade**.

Pronto! Deu um pouco de trabalho extra, bem como algum conhecimento sobre o que acontece "sob os panos" do JavaScript, mas os resultados são os mesmos.

Aqui está a boa notícia: JavaScript não é uma linguagem morta. Está sendo constantemente aprimorado e adicionado pelo [comitê TC-39](https://ui.dev/ecmascript).

O que isso significa é que mesmo que a versão inicial do JavaScript não suporte classes, não há razão para que eles não possam ser adicionados à especificação oficial. Na verdade, foi exatamente isso que o comitê TC-39 fez. Em 2015, o EcmaScript (a especificação oficial do JavaScript) 6 foi lançado com suporte para Classes e a palavra-chave `class`. Mas isso é assunto para a próxima aula...

---

### Exercícios

- [Exercicio para sala](/exercicios/para-sala/)
- [Exercicio para casa](/exercicios/para-casa/)

### Material da aula

- [Material](/material)

### Links Úteis
#### Objects
- [Object: the basics](https://javascript.info/object-basics)
	- [Objects](https://javascript.info/object)
	- [Object methods, "this"](https://javascript.info/object-methods)
- [JavaScript Objects](https://www.programiz.com/javascript/object)
- [JavaScript Methods and this Keyword](https://www.programiz.com/javascript/methods)

#### Prototype
- [A Beginner’s Guide to JavaScript’s Prototype](https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/)
- [Instantiation Patterns in JavaScript (por Jennifer Bland)](https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b)
- [Instantiation Patterns in JavaScript (por Taylor Shephard)](https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839)
- [A Quick Guide to Instantiation Patterns in JavaScript](https://dev.to/mconner89/a-quick-guide-to-instantiation-in-javascript-6n)
- [Prototype in JavaScript](https://www.tutorialsteacher.com/javascript/prototype-in-javascript)
- [Prototypes, inheritance - F.prototype](https://javascript.info/function-prototype)
- [JavaScript Prototype](https://www.programiz.com/javascript/prototype)
- [Prototypes in JavaScript (por Rupesh Mishra)](https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b)

### Contatos

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>

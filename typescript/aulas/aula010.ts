// ============ UNION TYPES ============
// Permite que uma variável tenha MÚLTIPLOS tipos

// Variável pode ser string OU número
let id: string | number;
id = 'ABC123'; // OK - é string
id = 123; // OK - é número
// id = true;   // ERRO - não é string nem número

// Função que aceita string ou número
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId('ABC'); // OK
printId(123); // OK

let user: string | null;
user = 'Peixe';
user = null;

// ============ TYPE ALIASES ============
// Cria um apelido para um tipo que você usa várias vezes

// Type simples
type ID = string | number;

let userId: ID = 'USER001';
let productId: ID = 789;

// Type para objetos
type User = {
  name: string;
  age: number;
};

let user1: User = { name: 'João', age: 25 };
let user2: User = { name: 'Maria', age: 30 };

// ============ COMBINANDO UNION COM TYPE ============

type Status = 'ativo' | 'inativo' | 'bloqueado';

let userStatus: Status = 'ativo'; // OK
// let userStatus: Status = "deletado";  // ERRO - não está na lista

type Response = string | number | boolean;

function getValue(): Response {
  return 'sucesso';
}

// ============ TYPE PARA FUNÇÃO ============

type Callback = (data: string) => void;

function subscribe(callback: Callback) {
  callback('evento disparado');
}

subscribe((message) => {
  console.log(message);
});

// ============ TYPE PARA OBJETO COM PROPRIEDADES OPCIONAIS ============

type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number; // opcional
};

let product: Product = {
  id: 1,
  name: 'Notebook',
  price: 3000,
  // discount é opcional
};

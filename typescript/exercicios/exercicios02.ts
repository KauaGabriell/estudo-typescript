/**
 * ============================================
 * EXERCÍCIOS - SESSÃO 2 (Aulas 011 a 017)
 * ============================================
 *
 * Conceitos cobertos:
 * - Interfaces
 * - Herança de interfaces (extends)
 * - Intersecção de tipos (&)
 * - Type vs Interface
 * - Type Assertion (as)
 * - Restringindo valores (Literal Types)
 * - Enums
 *
 * INSTRUÇÕES: Complete cada exercício substituindo os comentários "// ???"
 * pelo código correto. Execute com: npx ts-node exercicios02.ts
 */

// ============================================
// EXERCÍCIO 1: Interfaces Básicas
// ============================================
/**
 * CENÁRIO: Você está criando um sistema de e-commerce.
 * Crie uma interface "Produto" com as propriedades:
 * - id (número)
 * - nome (string)
 * - preco (número)
 * - disponivel (boolean)
 */

interface Produto {
  id: number;
  nome: string;
  preco: number;
  disponivel: boolean;
}

const notebook: Produto = {
  id: 1,
  nome: 'Tablet',
  preco: 300,
  disponivel: true,
};
console.log('Exercício 1:', notebook);

// ============================================
// EXERCÍCIO 2: Herança de Interfaces (extends)
// ============================================
/**
 * CENÁRIO: Sistema de gestão de funcionários.
 *
 * 1. Crie uma interface base "Funcionario" com: id, nome, email
 * 2. Crie "Gerente" que estende Funcionario e adiciona: departamento, equipe (array de strings)
 * 3. Crie "Desenvolvedor" que estende Funcionario e adiciona: tecnologias (array de strings), nivel ('junior' | 'pleno' | 'senior')
 */

interface Funcionario {
  id: number;
  nome: string;
  email: string;
}

interface Gerente extends Funcionario {
  departamento: string;
  equipe: string[];
}

interface Desenvolvedor extends Funcionario {
  tecnologias: string[];
  nivel: 'junior' | 'pleno' | 'senior';
}

const dev: Desenvolvedor = {
  id: 1,
  nome: 'Peixe',
  email: 'Peixe@dev.com',
  tecnologias: ['NodeJs', 'Git e GitHub', 'TypeScript'],
  nivel: 'junior',
};

console.log('Exercício 02', dev);

// ============================================
// EXERCÍCIO 3: Intersecção de Tipos (&)
// ============================================
/**
 * CENÁRIO: Sistema de pedidos de restaurante.
 * Usando TYPE (não interface), crie:
 *
 * 1. ItemPedido: nome, quantidade, precoUnitario
 * 2. InfoEntrega: endereco, telefone, observacao (opcional)
 * 3. Pedido: Combine ItemPedido & InfoEntrega e adicione: id, status
 */

type ItemPedido = {
  nome: string;
  quantidade: number;
  precoUnitario: number;
};

type InfoEntrega = {
  endereco: string;
  telefone: string;
  observacao?: string;
};

type Pedido = ItemPedido &
  InfoEntrega & {
    id: number;
    status: 'Em Preparo' | 'Saiu para Entrega' | 'Entregue';
  };

const pedido: Pedido = {
  id: 1,
  nome: 'Flash Smash 3.0',
  quantidade: 2,
  precoUnitario: 27.0,
  endereco: 'Jardim das Américas - Rua Chile',
  telefone: '(62)999332211',
  status: 'Em Preparo',
};
console.log('Exercício 3:', pedido);

// ============================================
// EXERCÍCIO 4: Type Assertion (as)
// ============================================
/**
 * CENÁRIO: Você recebe dados de uma API externa.
 * A função abaixo simula uma resposta de API que retorna 'unknown'.
 * Use Type Assertion para tipar corretamente os dados.
 */

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

function buscarDadosAPI(): unknown {
  // Simula resposta da API
  return {
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
  };
}

const usuario = buscarDadosAPI() as Usuario;
console.log('Exercício 4:', usuario.nome);

// ============================================
// EXERCÍCIO 5: Restringindo Valores (Literal Types)
// ============================================
/**
 * CENÁRIO: Sistema de tickets de suporte.
 *
 * 1. Crie um type "Prioridade" que aceite apenas: 'baixa' | 'media' | 'alta' | 'critica'
 * 2. Crie um type "StatusTicket" que aceite apenas: 'aberto' | 'em_andamento' | 'resolvido' | 'fechado'
 * 3. Crie um type "Ticket" com: id, titulo, prioridade (Prioridade), status (StatusTicket)
 */

// ??? Crie os types aqui
type Prioridade = 'baixa' | 'media' | 'alta' | 'critica';
type StatusTicket = 'aberto' | 'em_andamento' | 'resolvido' | 'fechado';
type Ticket = {
  id: number;
  titulo: string;
  prioridade: Prioridade;
  status: StatusTicket;
};

const ticket: Ticket = {
  id: 1,
  titulo: 'Bug no login',
  prioridade: 'alta',
  status: 'aberto',
};
console.log('Exercício 5:', ticket);

// const ticketErrado: Ticket = {
//   id: 2,
//   titulo: "Teste",
//   prioridade: "urgente",  ERRO - o valor atribuído não está dentre as opções.
//   status: "aberto"
// };

// ============================================
// EXERCÍCIO 6: Enums
// ============================================
/**
 * CENÁRIO: Sistema de pagamentos.
 *
 * 1. Crie um enum "MetodoPagamento" com: Pix = 1, Cartao = 2, Boleto = 3, Transferencia = 4
 * 2. Crie um enum "StatusPagamento" com: Pendente, Processando, Aprovado, Rejeitado (valores automáticos)
 * 3. Crie uma interface "Pagamento" que use esses enums
 */

// ??? Crie os enums e a interface aqui

enum MetodoPagamento {
  Pix = 1,
  Cartao = 2,
  Boleto = 3,
  Transferencia = 4,
}

enum StatusPagamento {
  Pendente,
  Processando,
  Aprovado,
  Rejeitado,
}

interface Pagamento {
  id: number;
  valor: number;
  metodo: MetodoPagamento;
  status: StatusPagamento;
}

const pagamento: Pagamento = {
  id: 1,
  valor: 150.0,
  metodo: MetodoPagamento.Pix,
  status: StatusPagamento.Aprovado,
};
console.log('Exercício 6:', pagamento);
console.log('Método:', MetodoPagamento[pagamento.metodo]); // Deve imprimir "Pix"

// ============================================
// EXERCÍCIO 7: DESAFIO FINAL - Combinando Tudo!
// ============================================
/**
 * CENÁRIO: Sistema de gerenciamento de tasks (tipo Trello).
 *
 * Requisitos:
 * 1. Enum "PrioridadeTask" com valores: Baixa = 1, Media = 2, Alta = 3
 * 2. Type "StatusTask" restrito a: 'backlog' | 'todo' | 'doing' | 'done'
 * 3. Interface base "ItemBase" com: id, criadoEm (Date), atualizadoEm (Date)
 * 4. Interface "Task" que estende ItemBase e adiciona:
 *    - titulo: string
 *    - descricao: string (opcional)
 *    - prioridade: PrioridadeTask
 *    - status: StatusTask
 *    - tags: string[]
 *
 * 5. Crie uma função "criarTask" que recebe dados parciais e retorna uma Task completa
 *    (use Type Assertion para simular dados vindos de uma API)
 */

enum PrioridadeTask {
  Baixa = 1,
  Media = 2,
  Alta = 3,
}

type StatusTask = 'backlog' | 'todo' | 'doing' | 'done';

interface ItemBase {
  id: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

interface Task extends ItemBase {
  titulo: string;
  descricao?: string;
  prioridade: PrioridadeTask;
  status: StatusTask;
  tags: string[];
}

// Tipo para os dados que o USUÁRIO fornece (sem os campos de ItemBase)
type DadosNovaTask = Omit<Task, 'id' | 'criadoEm' | 'atualizadoEm'>;

function criarTask(dados: DadosNovaTask): Task {
  // A função gera os campos automáticos e combina com os dados do usuário
  const taskCompleta = {
    id: Math.floor(Math.random() * 1000),
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    ...dados,
  } as Task;
  return taskCompleta;
}

const minhaTask = criarTask({
  titulo: 'Estudar TypeScript',
  prioridade: PrioridadeTask.Alta,
  status: 'doing',
  tags: ['estudo', 'programação'],
});
console.log('Exercício 7:', minhaTask);

export {};

/**
 * ========================================
 * EXERCÍCIOS - UTILITY TYPES DO TYPESCRIPT
 * ========================================
 *
 * Conceitos abordados:
 * - Partial<T>   (aula 018)
 * - Pick<T, K>   (aula 019)
 * - Omit<T, K>   (aula 020)
 * - Record<K, V> (aula 021)
 * - typeof       (aula 022)
 * - keyof        (aula 023)
 *
 * Dica: Resolva um exercício por vez e teste com `npx ts-node exercicios03.ts`
 */

// ============================================
// INTERFACE BASE PARA OS EXERCÍCIOS
// ============================================

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  categoria: string;
}

// ============================================
// EXERCÍCIO 1 - Partial<T>
// ============================================
/**
 * CENÁRIO: Sistema de e-commerce
 *
 * Você está desenvolvendo uma função para atualizar produtos.
 * O usuário pode querer atualizar APENAS o preço, ou APENAS o estoque,
 * ou qualquer combinação de campos.
 *
 * TAREFA: Crie uma variável `atualizacaoProduto` que represente uma
 * atualização parcial de um produto, onde apenas o `preco` e `estoque`
 * serão modificados.
 *
 * PISTA: Qual utility type permite que TODAS as propriedades se tornem opcionais?
 * Revise a aula 018 se necessário.
 */

// Resolva aqui:
const atualizacaoProduto: Partial<Produto> = {
  preco: 450,
  estoque: 2,
};

// ============================================
// EXERCÍCIO 2 - Pick<T, K>
// ============================================
/**
 * CENÁRIO: Vitrine de loja online
 *
 * Na página inicial da loja, você só precisa exibir:
 * - nome do produto
 * - preco
 *
 * Não faz sentido carregar descrição, estoque, etc na vitrine.
 *
 * TAREFA: Crie uma variável `produtoVitrine` que contenha APENAS
 * as propriedades `nome` e `preco` do tipo Produto.
 *
 * PISTA: Existe um utility type que "pega" apenas as propriedades que você quer.
 * Qual seria ele?
 */

// Resolva aqui:
const produtoVitrine: Pick<Produto, 'nome' | 'preco'> = {
  nome: 'Notebook Gamer - Acer Nitro V16',
  preco: 6700,
};

// ============================================
// EXERCÍCIO 3 - Omit<T, K>
// ============================================
/**
 * CENÁRIO: Formulário de cadastro de produto
 *
 * Quando um novo produto é cadastrado, o `id` é gerado automaticamente
 * pelo banco de dados. Portanto, o formulário NÃO deve ter o campo `id`.
 *
 * TAREFA: Crie uma variável `novoProduto` que tenha todas as propriedades
 * de Produto, EXCETO o `id`.
 *
 * PISTA: Se Pick "pega", existe outro que "omite". Qual seria?
 */

// Resolva aqui:
const novoProduto: Omit<Produto, 'id'> = {
  nome: 'Tablet',
  preco: 200,
  descricao: 'Perfeito e bom',
  estoque: 3,
  categoria: 'Eletrônicos',
};

// ============================================
// EXERCÍCIO 4 - Record<K, V>
// ============================================
/**
 * CENÁRIO: Sistema de avaliação de produtos
 *
 * Cada produto pode ter uma avaliação de 1 a 5 estrelas.
 * Você precisa armazenar quantas avaliações cada nota recebeu.
 *
 * Exemplo: o produto teve 10 avaliações de 5 estrelas, 5 de 4 estrelas, etc.
 *
 * TAREFA:
 * a) Crie um type `Estrela` que só permita os valores "1" | "2" | "3" | "4" | "5"
 * b) Crie uma variável `avaliacoes` que mapeie cada estrela para um número (quantidade)
 *
 * PISTA: Record permite criar um objeto onde você define o tipo das chaves E dos valores.
 */

// Resolva aqui:
type Estrela = '1' | '2' | '3' | '4' | '5'; // <- Defina as possíveis estrelas

const avaliacoes: Record<Estrela, number> = {
  1: 4,
  2: 3,
  3: 4,
  4: 12,
  5: 900,
}; // <- Use Record com o tipo Estrela

// ============================================
// EXERCÍCIO 5 - typeof
// ============================================
/**
 * CENÁRIO: Configurações do sistema
 *
 * Você tem um objeto de configuração padrão. Outros objetos de configuração
 * devem seguir exatamente a mesma estrutura.
 *
 * TAREFA: Crie uma variável `configuracaoUsuario` que tenha o MESMO TIPO
 * de `configuracaoPadrao`, mas com valores diferentes.
 *
 * PISTA: Você pode "inferir" o tipo de uma variável existente. Como?
 */

const configuracaoPadrao = {
  tema: 'claro',
  idioma: 'pt-BR',
  notificacoes: true,
  itemsPorPagina: 10,
};

// Resolva aqui:
const configuracaoUsuario: typeof configuracaoPadrao = {
  tema: 'escuro',
  idioma: 'en-us',
  notificacoes: false,
  itemsPorPagina: 4,
};

// ============================================
// EXERCÍCIO 6 - keyof
// ============================================
/**
 * CENÁRIO: Função de busca por campo
 *
 * Você quer criar uma função que busca produtos por qualquer campo.
 * O primeiro parâmetro é o nome do campo, que deve ser RESTRITO
 * às chaves que existem em Produto.
 *
 * TAREFA: Crie um type `CampoProduto` que represente APENAS as chaves
 * válidas da interface Produto.
 *
 * PISTA: keyof extrai as chaves de um tipo. O que acontece quando usamos
 * keyof Produto?
 */

// Resolva aqui:
type CampoProduto = keyof Produto;

// Descomente a linha abaixo para testar:
// const campoValido: CampoProduto = "nome"; // Deve funcionar
// const campoInvalido: CampoProduto = "cor"; // Deve dar erro!

// ============================================
// EXERCÍCIO 7 - DESAFIO: Combinando Conceitos
// ============================================
/**
 * CENÁRIO: API de produtos
 *
 * Você está criando um sistema onde:
 * 1. A resposta da API sempre retorna `id`, `nome` e `preco`
 * 2. Você quer armazenar essas respostas em um objeto onde a CHAVE
 *    é o ID do produto (number) e o VALOR é o produto resumido
 *
 * TAREFA:
 * a) Crie um type `ProdutoResumido` usando Pick para pegar só id, nome e preco
 * b) Crie uma variável `cacheProdutos` usando Record onde:
 *    - Chave: number (id do produto)
 *    - Valor: ProdutoResumido
 *
 * PISTA: Combine Pick e Record!
 */

// Resolva aqui:
type ProdutoResumido = Pick<Produto, 'id' | 'nome' | 'preco'>; // <- Use Pick

const cacheProdutos: Record<number, ProdutoResumido> = {
  1: { id: 2, nome: 'Tablet', preco: 250 },
  2: { id: 3, nome: 'PC', preco: 250 },
  3: { id: 4, nome: 'Joelho', preco: 2232350 },
};

// ============================================
// EXERCÍCIO 8 - DESAFIO: typeof + keyof
// ============================================
/**
 * CENÁRIO: Sistema de ícones
 *
 * Você tem um objeto que mapeia nomes de ícones para seus caminhos.
 * Quer garantir que ao usar um ícone, você só possa usar nomes válidos.
 *
 * TAREFA:
 * a) Crie um type `IconesDisponiveis` que infere o tipo do objeto `icones`
 * b) Crie um type `NomeIcone` que extrai APENAS as chaves válidas
 * c) Crie uma variável `iconeAtual` tipada como NomeIcone
 *
 * PISTA: Primeiro use typeof, depois keyof!
 */

const icones = {
  carrinho: '/icons/cart.svg',
  usuario: '/icons/user.svg',
  configuracao: '/icons/settings.svg',
  sair: '/icons/logout.svg',
};

// Resolva aqui:
type IconesDisponiveis = typeof icones; // <- Use typeof
type NomeIcone = keyof IconesDisponiveis; // <- Use keyof no tipo acima

const iconeAtual: NomeIcone = 'carrinho';

// ============================================
// TESTE SEUS CONHECIMENTOS
// ============================================
/**
 * Para cada utility type, responda mentalmente:
 *
 * 1. Partial<T> - Quando você usaria no mundo real?
 * 2. Pick<T, K> - Qual a diferença entre Pick e criar uma nova interface?
 * 3. Omit<T, K> - Pick e Omit são opostos. Quando usar cada um?
 * 4. Record<K, V> - Por que é melhor que usar `{ [key: string]: valor }`?
 * 5. typeof - Qual a vantagem de inferir vs declarar o tipo?
 * 6. keyof - Como keyof ajuda a evitar erros de digitação?
 */

export {};

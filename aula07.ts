// ===========================================
// AULA 07 - Tipagem em Funções
// ===========================================

// Tipando parâmetros e retorno
function somar(a: number, b: number): number {
  return a + b;
}

// Arrow function tipada
const subtrair = (a: number, b: number): number => a - b;

// Função sem retorno (void)
function exibirMensagem(msg: string): void {
  console.log(msg);
}

// Parâmetros opcionais (usar ?)
function saudacao(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`;
  }
  return `Olá, ${nome}!`;
}

// Parâmetros com valor padrão
function criarUsuario(nome: string, ativo: boolean = true): object {
  return { nome, ativo };
}

// Exemplos de uso
console.log(somar(5, 3)); // 8
console.log(subtrair(10, 4)); // 6
exibirMensagem('Olá TypeScript!'); // Olá TypeScript!
console.log(saudacao('Kauã')); // Olá, Kauã!
console.log(saudacao('Kauã', 'Gabriell')); // Olá, Kauã Gabriell!
console.log(criarUsuario('Ana')); // { nome: "Ana", ativo: true }

export {};

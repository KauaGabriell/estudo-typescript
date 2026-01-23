// ===========================================
// AULA 05 - O tipo "any" e alternativas melhores
// ===========================================

// ❌ O tipo "any" - EVITE USAR!
// O "any" desabilita a verificação de tipos do TypeScript.
// É como voltar a escrever JavaScript puro.

let valorAny: any = 'texto';
valorAny = 123; // OK - aceita qualquer coisa
valorAny = true; // OK - aceita qualquer coisa
valorAny = { a: 1 }; // OK - aceita qualquer coisa
// valorAny.metodoQueNaoExiste(); // TypeScript NÃO avisa, mas quebra em runtime!

// -----------------------------------------
// ✅ O tipo "unknown" - Alternativa SEGURA
// -----------------------------------------
// "unknown" também aceita qualquer valor, MAS você é obrigado
// a verificar o tipo antes de usar.

let valorUnknown: unknown = 'Olá mundo';

// ❌ Isso NÃO compila:
// valorUnknown.toUpperCase(); // Erro: Object is of type 'unknown'

// ✅ Você precisa verificar primeiro (Type Guard):
if (typeof valorUnknown === 'string') {
  console.log(valorUnknown.toUpperCase()); // Agora funciona!
}

// -----------------------------------------
// 📝 Type Guards - Verificando tipos em runtime
// -----------------------------------------
function processarValor(valor: unknown): string {
  // Verificando se é string
  if (typeof valor === 'string') {
    return valor.toUpperCase();
  }

  // Verificando se é número
  if (typeof valor === 'number') {
    return valor.toFixed(2);
  }

  // Verificando se é array
  if (Array.isArray(valor)) {
    return valor.join(', ');
  }

  return 'Tipo não suportado';
}

console.log(processarValor('hello')); // "HELLO"
console.log(processarValor(42.567)); // "42.57"
console.log(processarValor([1, 2, 3])); // "1, 2, 3"

// -----------------------------------------
// 🎯 Quando usar cada um?
// -----------------------------------------
// any     → Último recurso (migração de JS, bibliotecas sem tipos)
// unknown → Quando você não sabe o tipo, mas quer segurança
// Tipos específicos (string, number, etc.) → SEMPRE que possível!

export {};

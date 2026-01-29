/****
 * ///////////////////////////////////////////
 *
 *              Interface X Type
 *
 * ///////////////////////////////////////////
 */

/**
 * TYPE ALIAS
 * - Usa a palavra-chave `type` para criar um alias (apelido) para um tipo
 * - Pode representar tipos primitivos, unions, tuples, objetos, etc.
 * - Não pode ser "reaberto" para adicionar novas propriedades depois de definido
 */

// Define um tipo para o status de uma requisição
// O `?` torna a propriedade opcional
// O `|` cria uma Union Type (aceita apenas 'pending' OU 'completed')
type StatusReq = {
  name?: 'pending' | 'completed';
};

/**
 * INTERSECTION TYPE (&)
 * - Combina múltiplos tipos em um só
 * - O tipo resultante terá TODAS as propriedades dos tipos combinados
 * - Diferente de `extends` em interfaces, aqui usamos `&` para composição
 */

// Req herda todas as propriedades de StatusReq E adiciona `data`
type Req = StatusReq & {
  data: string;
};

/**
 * USANDO O TIPO
 * A variável req01 precisa satisfazer:
 * - name?: 'pending' | 'completed' (herdado de StatusReq, opcional)
 * - data: string (obrigatório)
 */
let req01: Req = {
  name: 'pending',
  data: 'teste',
};

console.log(req01);

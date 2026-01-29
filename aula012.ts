/**
 * Extendendo Interfaces (Extends - Herança)
 *
 * A herança de interfaces permite criar novas interfaces que
 * reutilizam propriedades de interfaces existentes, evitando
 * repetição de código (princípio DRY).
 */

/**
 * Interface base que define atributos comuns a todas as "pessoas".
 * Ao centralizar `id` e `name` aqui, evitamos duplicação nas interfaces filhas.
 * Se precisarmos adicionar um novo atributo comum (ex: email),
 * basta adicioná-lo aqui e todas as interfaces que a estendem herdarão.
 */
interface Person {
  id: number;
  name: string;
}

/**
 * Interface Teacher estende Person.
 * Herda automaticamente `id` e `name`, e adiciona `subjects` como atributo específico.
 */
interface Teacher extends Person {
  // id: number;    <- herdado de Person
  // name: string;  <- herdado de Person
  subjects: string[];
}

/**
 * Interface Student estende Person.
 * Herda automaticamente `id` e `name`, e adiciona `age` como atributo específico.
 */
interface Student extends Person {
  // id: number;    <- herdado de Person
  // name: string;  <- herdado de Person
  age: number;
}

export {};

/**Intersecção de Tipos */

type Person = {
  id: number;
  name: string;
};

type Teacher = Person & {
  subjects: string[];
};

type Student = Person & {
  age: number;
};

/**Para fazer da mesma forma com que fizemos na herança utilizando interfaces, podemos fazer utilizando o type, para isso usamos o operador "&" */

export {};

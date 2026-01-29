/***
 *
 *  ------- PICK -------
 *
 * Podemos utlizar o pick para pegar apenas algumas propriedade de um tipo.
 * Podemos fazer isso com uma ou mais propriedades.
 * 
 * Só sera obrigatório passar as propriedades que eu declarei no pick.
 */
interface Book {
  title: string;
  pages: number;
  author: string;
}

const HarryPotter: Pick<Book, 'title' | 'pages'> = {
  title: 'Harry Potter e a Pedra Filosofal',
  pages: 340,
};

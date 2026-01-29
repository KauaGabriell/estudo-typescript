/**
 * ENUMS - Podemos nomear constantes, melhorando a legibilidade do código
 * Nesse exemplo atribuimos valores para cada tipo de perfil, ao utilizar o Enum, podemos substituir números por constantes, facilitando a compreensão do código.
 */

enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

let profile: number = Profile.Admin
console.log(Profile.Seller) 
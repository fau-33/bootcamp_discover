// 1.Declare uma variável de nome weight
 // let weight;

// 2.Que tipo de dado é a variável acima?
  //console.log(typeof weight)
/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
     * name: string
     * age: Number (integer)
     * stars: Number (float)
     * isSubscribed: Boolean
 *  */
  // let name = 'Flávio'
  // let age = 30
  // let stars = 4.5
  // let isSubscribed = true


 /**
  *  4. A variável student abaixo é de que tipo de dado?
  *     //object
  *   4.1 Atribua a ela os mesmas propriedades de valores do exercício 3
  *   4.2 Mostre no console a seguinte mensage:
  *       <name> de idade <age> pesa <weight>kg
  *       
  *     Atenção, substitua <name><age> e <weight> pelos valores de cada proriedade do objeto   
  */
  
  let student = {
    name:'Flávio',
    age: 30,
    weight: 74.5,
    isSubscribed: true
  }

  //console.log(student)
  //console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} kg`)

  /**
   * 5. Declare uma variável do tipo Array, de nome students e atríbua a ela nenhum valor, ou seja, somente o Array vazio  
   */

   let students = []

   /**
    * 6. Reatribua valor para a variável acima, colocando dentro dela o object student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir um novo Array). 
    */

   students = [
      student
    ]

    //console.log(students)

    /**
     * 7. Coloque no console o valor da posição zero do array acima
     */

     //console.log(students[0])


      /**
     * 8. Crie um novo student e coloque na posição 1 do array students 
     */

     const john = {
      name: 'John',
      age: 23,
      weight: 65.9,
      isSubscribed: true
     } 
       
     

     students = [
       student,
       john
     ]
     students[1] = john
     //console.log(students)

     /**
      * 9. Sem rodar o código qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
      * 
      * console.log(a)
      * var a = 1 
      */


     //console.log(a)
     //var a = 1 

     console.log(a)
     let a = 1 




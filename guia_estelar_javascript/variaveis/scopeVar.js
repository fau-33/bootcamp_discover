/**
    * Scope
      * Escopo determina a visibilidade de alguma variável no JS
    * Block Statement
      // Vamo iniciar um bloco
      {
        // Aqui dentro é um bloco e posso colocar qualquer código

      }  // aqui fechamos o bloco
      
    * O bloco, também criará um novo escopo. Chamamos de `block-scoped`
    
 */

 //let x = 0
 //console.log(x)

 
  // Var
    // é global e funciona fora do escopo de um bloco e também local
    // hoisting(elevação)
    console.log('> existe x antes do bloco? ', x)
    {
      var x = 0
    }
    console.log('> existe x depois do bloco? ', x)
     
     
  
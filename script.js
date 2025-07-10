
const taskList = document.getElementById ("taskList");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
/*getElementById("taskList") é um método que retorna uma referência ao elemento HTML com o ID taskList. Se não houver nenhum elemento com esse ID, ele retornará null.
Quando você usa const, está dizendo que o identificador (nome da variável) não pode ser reatribuído. Isso ajuda a garantir que o valor da variável não seja alterado acidentalmente.
A palavra-chave const em JavaScript é usada para declarar variáveis que têm um valor constante. Isso significa que uma vez que uma variável é atribuída com const, ela não pode ser reatribuída com um novo valor.a variavel n pode ser atribuida a um novo valor*/


function validateForm(event) {
    /* é uma função de JavaScript usada para validar um formulário antes de submetê-lo. O parâmetro event é o objeto de evento que é passado automaticamente para a função quando ela é chamada como um manipulador de eventos.
    A função validateForm é chamada quando o formulário é enviado (ou seja, quando o usuário clica no botão de envio).*/
   
    event.preventDefault();
    /*qui, event.preventDefault() impede que o formulário seja enviado e que a página seja recarregada. Isso permite que você valide os dados ou execute outras ações antes de decidir se deve ou não enviar o formulário.*/
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    /* Previne problemas de armazenamento onde espaços extras podem causar inconsistências. Remove espaços em branco do início e do fim do texto, garantindo que apenas dados significativos sejam considerados.*/
    
    if (name === '' || email === ''){
        /*||: O operador lógico ou (OR) combina as duas condições. */
       alert ('Preencha todos os campos!')
    } else { 
        alert(`Nome: ${name}\nEmail: ${email}`);
      /*\n é um caractere de nova linha. Ele insere uma quebra de linha na mensagem para que "Email: ${email}" apareça em uma linha separada de "Nome: ${name}".${email} são placeholders que serão substituídos pelos valores das variáveis name e email, respectivamente.*/
       
    }
}
taskList.addEventListener('click', validateForm);
//decalração das constantes
const form = document.querySelector('form');
const pesquisaCep = document.querySelector('#cep');

//limpa formulario
const limpaForm = () => {


// Manipulador de evento para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

// TESTE

  // Limpa os campos de dados pessoais
  document.querySelector('#nome').value = '';
  document.querySelector('#sobrenome').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#dataNasc').value = '';
  document.querySelector('#telefone').value = '';
  document.querySelector('#rg').value = '';
  document.querySelector('#cpf').value = '';
  document.querySelector('#genero').value = 'masculino'; 
    document.querySelector('#uf').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#logradouro').value = '';
}; 

// callback 
const meuCallback = (conteudo) => {

    if (!('erro' in conteudo)) {
      document.querySelector('#cep').value = (cep);
        document.querySelector('#uf').value = (conteudo.uf);
        document.querySelector('#cidade').value = (conteudo.localidade);
        document.querySelector('#bairro').value = (conteudo.bairro);
        document.querySelector('#logradouro').value = (conteudo.logradouro);
        document.querySelector('#numero').value = (conteudo.numero);
    }
    else{
        // cep não encontrado
        limpaForm();
        alert('CEP não encontrado.');
    }
    // Manipulador de evento para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário
  limpaForm(); // Limpa o formulário após o envio
});

};

//invalida a submissão de dados do formulario
form.onsubmit = () => false;

//evento que preenche automaticamente o endereço de acordo com o cep preeenchido
pesquisaCep.addEventListener('blur', () => {

    //elimina carateres especiais deixando somente numeros
    let cep = pesquisaCep.value.replace(/\D/g, '');

    // verifica se o campo cep possui valor informado
    if(cep != '') {  //!significa diferente

        //valida o cep
        let validaCep = /^[0-9]{8}$/;
        
        //valida o fromato do cep
        if (validaCep.test(cep)) {

            // cria elemento js
            let script = document.createElement('script');

            // sincroniza callback
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meuCallback';
            
            // inserew o script no documento e carrega o conteudo
            document.body.appendChild(script);

        }
        else {

            // cep invalido
            limpaForm();
            alert('CEP invalido.');
        }

      

    }

});






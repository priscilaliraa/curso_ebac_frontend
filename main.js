$(document).ready(function() {
    $('#campo-telefone').mask('(00) 00000-0000');
    $('#campo-cep').mask('00000-000');
    $('#campo-cpf').mask('000.000.000-00');
    $('#campo-estado').mask('SS', {
        placeholder: 'ex: SP'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, digite seu nome completo',
            email: 'Por favor, digite seu e-mail',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu CPF',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite o CEP do endereço',
            estado:'Por favor, digite o estado conforme exemplo: "SP"',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    })
})
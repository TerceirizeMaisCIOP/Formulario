
const handleSubmit = (event) =>{
    event.preventDefault();

    const Escola = document.querySelector('input[name=Escola]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida]').value;
    const Codigo = document.querySelector('input[name=Codigo]').value;
    const Produto = document.querySelector('input[name=Produto]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida]').value;
    const QtdAtual = document.querySelector('input[name=Qtd-Atual]').value;

    alert('Validado Alcool Liquido 70%')

    fetch('https://api.sheetmonkey.io/form/iGhuL7E8qr7sBsfjFgZqUr', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Escola, Supervisor, Medida, Codigo, Produto, QtdPedida, QtdAtual  }),


    });


} 


const handleSubmit2 = (event) =>{
    event.preventDefault();

    const Escola = document.querySelector('input[name=Escola]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida2]').value;
    const Codigo = document.querySelector('input[name=Codigo2]').value;
    const Produto = document.querySelector('input[name=Produto2]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida2]').value;
    const QtdAtual = document.querySelector('input[name=Qtd-Atual2]').value;
    const linha3 = document.querySelector('.produto3');



    alert('Validado Agua Sanitaria')

    fetch('https://api.sheetmonkey.io/form/iGhuL7E8qr7sBsfjFgZqUr', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Escola, Supervisor, Medida, Codigo, Produto, QtdPedida, QtdAtual  }),


    });


} 

const handleSubmit3 = (event) =>{
    event.preventDefault();

    const Escola = document.querySelector('input[name=Escola]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida3]').value;
    const Codigo = document.querySelector('input[name=Codigo3]').value;
    const Produto = document.querySelector('input[name=Produto3]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida3]').value;
    const QtdAtual = document.querySelector('input[name=Qtd-Atual3]').value;
    const linha3 = document.querySelector('.produto3');



    alert('Validado Balde 10L')

    fetch('https://api.sheetmonkey.io/form/iGhuL7E8qr7sBsfjFgZqUr', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Escola, Supervisor, Medida, Codigo, Produto, QtdPedida, QtdAtual  }),


    });


} 



document.querySelector('form') .addEventListener ('submit', handleSubmit);
document.querySelector('form') .addEventListener ('submit', handleSubmit2);
document.querySelector('form') .addEventListener ('submit', handleSubmit3);
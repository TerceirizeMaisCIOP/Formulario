const options = ["CMEI ABDIAS DO NASCIMENTO","CMEI APARECIDO NORATO CLARO","CMEI ANTONIETA TRINDADE","CMEI CAROLINA BENEDITA DOS SANTOS","CMEI CLEMILDE DE MARTINI LOPES DOS SANTOS","CMEI DIRCE DE ALMEIDA BARROS BAPTISTA",
"CMEI DURVALINA PEREIRA OLIVEIRA DE ASSIS","CMEI FRANCISCO QUESADA ORTEGA","CMEI FRANCISCO SEIXAS","CMEI HELENA OMETTO TORRES","CMEI IRMA MARIA NIVEA","CMEI JOÃO RAMPAZZO","CMEI KALIM YOUSSEF YOUSSEF",
"CMEI LAVINIA MONTEIRO DE MORAES","CMEI LEONIDAS SOBRINHO PORTO","CMEI MARISA ARRUDA DOS SANTOS","CMEI MARINA SABOIA NASCIMENTO","CMEI MALVINA POPPI PEDRIALLI","CMEI PROF. CLELIA REGINA GUILHERME DE ALMEIDA",
"CMEI PROF. ROSANGELA O. ROMANO","CMEI RAFAELA KEMMER DE MORAES","CMEI RUTH DOS SANTOS SILVA","CMEI SANDRA REGINA MAXIMIANO LEME","CMEI TELMA CAVALHERI MOTTA SANCHES","CMEI VALERIA VERONESI",
"CMEI VILMA ELIZA COLOMBO RIBEIRO","CMEI WATER OKANO","CMEI YOLANDA SALGADO VIEIRA LIMA","E. M. A. M. ARTHUR THOMAZ","E. M. AMÉRICO SABINO COIMBRA","E. M. ANITA GARIBALDI","E. M. ARISTEU DOS SANTOS RIBAS",
"E. M. ATANAZIO LEONEL","E. M. BARTOLOMEU DE GUSMÃO","E. M. CARLOS DA COSTA BRANCO","E. M. CARLOS DIETZ","E. M. CARLOS KRAEMER","E. M. CLAUDIA RIZZI","E. M. CLAUDIO DE ALMEIDA E SILVA","E. M. CORINA MANTOVAN OKANO",
"E. M. CORVETA CAMAQUÃ","E. M. DALVA FAHL BOAVENTURA","E. M. DAVID DEQUECH","E. M. DO CAMPO, TRABALHO E SABER","E. M. DO CAMPO EGIDIO DOMINGOS BRUNETTO","E. M. DOUTOR JOSE HOSKEN DE NOVAES",
"E. M. EDMUNDO ODEBRECHT","E. M. ELIAS KAUAM","E. M. EUGENIO BRUGIN","E. M. FRANCISCO AQUINO TOLEDO","E. M. FRANCISCO PEREIRA DE ALMEIDA JUNIOR","E. M. HAYDEE COLLI MONTEIRO","E. M. HELVIO ESTEVES",
"E. M. IGNEZ CORSO ANDREAZZA","E. M. IRENE APARECIDA DA SILVA","E. M. JADIR DUTRA DE SOUZA","E. M. JOÃO XXIII","E. M. JOHN KENNEDY","E. M. JULIANO STINGHEN","E. M. MACHADO DE ASSIS",
"E. M. MAESTRO ANDREA NUZZI","E. M. MAESTRO ROBERTO PEREIRA PANICO","E. M. MARIA CANDIDA PEIXOTO SALLES","E. M. MARIA CARMELITA VILELA MAGALHAES","E. M. MARIA SHIRLEY BARNABÉ LYRA","E. M. MIGUEL BASPALHOK",
"E. M. MARI CARRERA BUENO","E. M. MABIO GONÇALVES PALHANO","E. M. MELVIM JONES","E. M. NARA MANELLA","E. M. NEMAN SAHYUN","E. M. NINA GADERMANN","E. M. NORMAN PROCHET","E. M. OSVALDO CRUZ",
"E. M. PADRE ANCHIETA","E. M. PROF ARACY SOARES DOS SANTOS","E. M. PROF. BENTO MUNHOZ DA ROCHA NETO","E. M. PROF. CARLOS ZEWE COIMBRA","E. M. PROF. CLELIA REGINA GUILHERME DE ALMEIDA",
"E. M. PROF. DR. JOAQUIM VICENTE DE CASTRO","E. M. PROF. EURIDES CUNHA","E. M. PROF. HELVIO ESTEVES","E. M. PROF. JULIANO STINGHEN","E. M. PROF. JOVITA KAISER",
"E. M. PROF. MOACYR CAMARGO MARTINS","E. M. PROF. MOACYR TEIXEIRA","E. M. PROF. ODÉSIO FRANCISCON","E. M. PROF. RUTH LEMOS","E. M. PROF. TEREZA CANHADAS BERTAN",
"E. M. PROF. VILMA RODRIGUES ROMERO","E. M. REVERENDO ODILON","E. M. RUTH FERREIRA DE SOUZA","E. M. SALIM ABORIHAM","E. M. SAN IZIDRO","E. M. SENADOR GASPAR VELLOSO",
"E. M. SONIA PARREIRA DEBEI","E. M. SUELY IDERIHA","E. M. VITORIO LIBARDI","E. M. ZUMBI DOS PALMARES"];
    

   document.getElementById("myInput").addEventListener("input", function() {
       const input = this.value;
       const itemsContainer = document.getElementById("autocomplete-list");
       itemsContainer.innerHTML = ""; // Limpa as sugestões anteriores
       
       if (!input) {
           return; // Se o campo estiver vazio, não exibe nada
       }
       
       const filteredOptions = options.filter(option => option.toLowerCase().includes(input.toLowerCase()));
       
       filteredOptions.forEach(option => {
           const item = document.createElement("div");
           item.classList.add("autocomplete-item");
           item.textContent = option;
           item.addEventListener("click", function() {
               document.getElementById("myInput").value = this.textContent; // Define o valor do campo
               itemsContainer.innerHTML = ""; // Limpa as opções após a seleção
           });
           itemsContainer.appendChild(item);
       });
   });

   // Fecha a lista de sugestões ao clicar fora
   document.addEventListener("click", function() {
       document.getElementById("autocomplete-list").innerHTML = "";
   });

const handleSubmit = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida]').value;
    const Codigo = document.querySelector('input[name=Codigo]').value;
    const Produto = document.querySelector('input[name=Produto]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual]').value;
    

    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({  Data, Escola, Supervisor, Medida, Codigo, Produto,EstoqueAtual,QtdPedida  }),


    });


} 


const handleSubmit2 = (event) =>{
    event.preventDefault();
    
    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida2]').value;
    const Codigo = document.querySelector('input[name=Codigo2]').value;
    const Produto = document.querySelector('input[name=Produto2]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida2]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual2]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 

const handleSubmit3 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida3]').value;
    const Codigo = document.querySelector('input[name=Codigo3]').value;
    const Produto = document.querySelector('input[name=Produto3]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida3]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual3]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 

const handleSubmit4 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida4]').value;
    const Codigo = document.querySelector('input[name=Codigo4]').value;
    const Produto = document.querySelector('input[name=Produto4]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida4]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual4]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual , QtdPedida  }),


    });


} 

const handleSubmit5 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida5]').value;
    const Codigo = document.querySelector('input[name=Codigo5]').value;
    const Produto = document.querySelector('input[name=Produto5]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida5]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual5]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 


const handleSubmit6 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida6]').value;
    const Codigo = document.querySelector('input[name=Codigo6]').value;
    const Produto = document.querySelector('input[name=Produto6]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida6]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual6]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({Data,  Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 

const handleSubmit7 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida7]').value;
    const Codigo = document.querySelector('input[name=Codigo7]').value;
    const Produto = document.querySelector('input[name=Produto7]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida7]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual7]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 


const handleSubmit8 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida8]').value;
    const Codigo = document.querySelector('input[name=Codigo8]').value;
    const Produto = document.querySelector('input[name=Produto8]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida8]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual8]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 


const handleSubmit9 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida9]').value;
    const Codigo = document.querySelector('input[name=Codigo9]').value;
    const Produto = document.querySelector('input[name=Produto9]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida9]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual9]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


} 


const handleSubmit10 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida10]').value;
    const Codigo = document.querySelector('input[name=Codigo10]').value;
    const Produto = document.querySelector('input[name=Produto10]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida10]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual10]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit11 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida11]').value;
    const Codigo = document.querySelector('input[name=Codigo11]').value;
    const Produto = document.querySelector('input[name=Produto11]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida11]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual11]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit12 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida12]').value;
    const Codigo = document.querySelector('input[name=Codigo12]').value;
    const Produto = document.querySelector('input[name=Produto12]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida12]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual12]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit13 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida13]').value;
    const Codigo = document.querySelector('input[name=Codigo13]').value;
    const Produto = document.querySelector('input[name=Produto13]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida13]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual13]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit14 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida14]').value;
    const Codigo = document.querySelector('input[name=Codigo14]').value;
    const Produto = document.querySelector('input[name=Produto14]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida14]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual14]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit15 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida15]').value;
    const Codigo = document.querySelector('input[name=Codigo15]').value;
    const Produto = document.querySelector('input[name=Produto15]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida15]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual15]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit16 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida16]').value;
    const Codigo = document.querySelector('input[name=Codigo16]').value;
    const Produto = document.querySelector('input[name=Produto16]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida16]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual16]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit17 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida17]').value;
    const Codigo = document.querySelector('input[name=Codigo17]').value;
    const Produto = document.querySelector('input[name=Produto17]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida17]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual17]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit18 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida18]').value;
    const Codigo = document.querySelector('input[name=Codigo18]').value;
    const Produto = document.querySelector('input[name=Produto18]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida18]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual18]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit19 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida19]').value;
    const Codigo = document.querySelector('input[name=Codigo19]').value;
    const Produto = document.querySelector('input[name=Produto19]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida19]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual19]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit20 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida20]').value;
    const Codigo = document.querySelector('input[name=Codigo20]').value;
    const Produto = document.querySelector('input[name=Produto20]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida20]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual20]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit21 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida21]').value;
    const Codigo = document.querySelector('input[name=Codigo21]').value;
    const Produto = document.querySelector('input[name=Produto21]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida21]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual21]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit22 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida22]').value;
    const Codigo = document.querySelector('input[name=Codigo22]').value;
    const Produto = document.querySelector('input[name=Produto22]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida22]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual22]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({  Data,Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit23 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida23]').value;
    const Codigo = document.querySelector('input[name=Codigo23]').value;
    const Produto = document.querySelector('input[name=Produto23]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida23]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual23]').value;




    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit24 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida24]').value;
    const Codigo = document.querySelector('input[name=Codigo24]').value;
    const Produto = document.querySelector('input[name=Produto24]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida24]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual24]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit25 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida25]').value;
    const Codigo = document.querySelector('input[name=Codigo25]').value;
    const Produto = document.querySelector('input[name=Produto25]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida25]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual25]').value;

    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit26 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida26]').value;
    const Codigo = document.querySelector('input[name=Codigo26]').value;
    const Produto = document.querySelector('input[name=Produto26]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida26]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual26]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual , QtdPedida }),


    });


}


const handleSubmit27 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida27]').value;
    const Codigo = document.querySelector('input[name=Codigo27]').value;
    const Produto = document.querySelector('input[name=Produto27]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida27]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual27]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit28 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida28]').value;
    const Codigo = document.querySelector('input[name=Codigo28]').value;
    const Produto = document.querySelector('input[name=Produto28]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida28]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual28]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit29 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida29]').value;
    const Codigo = document.querySelector('input[name=Codigo29]').value;
    const Produto = document.querySelector('input[name=Produto29]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida29]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual29]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual , QtdPedida }),


    });


}

const handleSubmit30 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida30]').value;
    const Codigo = document.querySelector('input[name=Codigo30]').value;
    const Produto = document.querySelector('input[name=Produto30]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida30]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual30]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual , QtdPedida }),


    });


}

const handleSubmit31 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida31]').value;
    const Codigo = document.querySelector('input[name=Codigo31]').value;
    const Produto = document.querySelector('input[name=Produto31]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida31]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual31]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit32 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida32]').value;
    const Codigo = document.querySelector('input[name=Codigo32]').value;
    const Produto = document.querySelector('input[name=Produto32]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida32]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual32]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const handleSubmit33 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida33]').value;
    const Codigo = document.querySelector('input[name=Codigo33]').value;
    const Produto = document.querySelector('input[name=Produto33]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida33]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual33]').value;


    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit34 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida34]').value;
    const Codigo = document.querySelector('input[name=Codigo34]').value;
    const Produto = document.querySelector('input[name=Produto34]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida34]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual34]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}

const handleSubmit35 = (event) =>{
    event.preventDefault();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida35]').value;
    const Codigo = document.querySelector('input[name=Codigo35]').value;
    const Produto = document.querySelector('input[name=Produto35]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida35]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual35]').value;



    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data, Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),


    });


}


const addloading = () =>{
    const input = document.getElementById('enviar');
    input.innerHTML = '<img src="./img/loading.png"class="loading">';
}

const Removeloading = () =>{
    const input = document.getElementById('enviar');
    input.innerHTML = 'Enviar';
}


const handleSubmit36 = (event) =>{
    event.preventDefault();
    addloading();

    const Data = document.querySelector('input[name=date]').value;
    const Escola = document.querySelector('input[name=escolas]').value;
    const Supervisor = document.querySelector('select[name=Supervisor]').value;
    const Medida = document.querySelector('input[name=Un-Medida36]').value;
    const Codigo = document.querySelector('input[name=Codigo36]').value;
    const Produto = document.querySelector('input[name=Produto36]').value;
    const QtdPedida = document.querySelector('input[name=Qtd-Pedida36]').value;
    const EstoqueAtual = document.querySelector('input[name=Qtd-Atual36]').value;

    fetch('https://api.sheetmonkey.io/form/aQCXeiPiwGzVc79CZ7yRma', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify({ Data,Escola, Supervisor, Medida, Codigo, Produto, EstoqueAtual, QtdPedida  }),
        

        
        
    }  )

    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        // Redireciona para outro arquivo HTML
        window.location.href = "./index-enviar.html"; // Substitua 'outro-arquivo.html' pelo nome do seu arquivo
    })
    
}


 

document.querySelector('form') .addEventListener ('submit', handleSubmit);
document.querySelector('form') .addEventListener ('submit', handleSubmit2);
document.querySelector('form') .addEventListener ('submit', handleSubmit3);
document.querySelector('form') .addEventListener ('submit', handleSubmit4);
document.querySelector('form') .addEventListener ('submit', handleSubmit5);
document.querySelector('form') .addEventListener ('submit', handleSubmit6);
document.querySelector('form') .addEventListener ('submit', handleSubmit7);
document.querySelector('form') .addEventListener ('submit', handleSubmit8);
document.querySelector('form') .addEventListener ('submit', handleSubmit9);
document.querySelector('form') .addEventListener ('submit', handleSubmit10);
document.querySelector('form') .addEventListener ('submit', handleSubmit11);
document.querySelector('form') .addEventListener ('submit', handleSubmit12);
document.querySelector('form') .addEventListener ('submit', handleSubmit13);
document.querySelector('form') .addEventListener ('submit', handleSubmit14);
document.querySelector('form') .addEventListener ('submit', handleSubmit15);
document.querySelector('form') .addEventListener ('submit', handleSubmit16);
document.querySelector('form') .addEventListener ('submit', handleSubmit17);
document.querySelector('form') .addEventListener ('submit', handleSubmit18);
document.querySelector('form') .addEventListener ('submit', handleSubmit19);
document.querySelector('form') .addEventListener ('submit', handleSubmit20);
document.querySelector('form') .addEventListener ('submit', handleSubmit21);
document.querySelector('form') .addEventListener ('submit', handleSubmit22);
document.querySelector('form') .addEventListener ('submit', handleSubmit23);
document.querySelector('form') .addEventListener ('submit', handleSubmit24);
document.querySelector('form') .addEventListener ('submit', handleSubmit25);
document.querySelector('form') .addEventListener ('submit', handleSubmit26);
document.querySelector('form') .addEventListener ('submit', handleSubmit27);
document.querySelector('form') .addEventListener ('submit', handleSubmit28);
document.querySelector('form') .addEventListener ('submit', handleSubmit29);
document.querySelector('form') .addEventListener ('submit', handleSubmit30);
document.querySelector('form') .addEventListener ('submit', handleSubmit31);
document.querySelector('form') .addEventListener ('submit', handleSubmit32);
document.querySelector('form') .addEventListener ('submit', handleSubmit33);
document.querySelector('form') .addEventListener ('submit', handleSubmit34);
document.querySelector('form') .addEventListener ('submit', handleSubmit35);
document.querySelector('form') .addEventListener ('submit', handleSubmit36);
/*

{
    function mostrarDiv (){
        window.location = "./index-enviar.html";
     
     } }

*/

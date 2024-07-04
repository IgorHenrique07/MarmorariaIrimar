function menuShow() {
    let mobileiconmenu = document.querySelector('.mobilemenu');
    if (mobileiconmenu.classList.contains('open')){
        mobileiconmenu.classList.remove('open');
        document.querySelector('.icon').src="cores/menu_white_36dp.svg";
    }else{
        mobileiconmenu.classList.add('open')
        document.querySelector('.icon').src="cores/close_white_36dp.svg";
    }
}// Função para calcular o orçamento
function calcularOrcamento(nome, largura, comprimento, material) {
    // Tabela de preços por metro quadrado
    const precos = {
        "AMARELO CAPRI": 500,
        "AMARELO FLORENÇA": 550,
        "AMARELO HUMAITA": 600,
        "AMARELO LARANJA": 650,
        "AMARELO ICARAI": 700,
        "AMARELO ORNAMENTAL": 750,
        "AMARELO VITORIA": 800,
        "BRANCO CEARÁ": 850,
        "BRANCO DALLAS": 900,
        "BRANCO ITAUNAS": 950,
        "BRANCO RAJADO": 1000,
        "BRANCO PARANÁ": 1050,
        "BRANCO SIENA": 1100,
        "BRANCO VITORIA": 1150,
        "BEGE DUNAS": 1200,
        "CAFÉ IMPERIAL": 1250,
        "CINZA ANDORINHA": 1300,
        "CINZA CORUMBA": 1350,
        "CINZA OCRE TABIRA": 1400,
        "MARROM ABSOLUTO": 1450,
        "MARROM BAHIA": 1500,
        "MARROM GUAIBA": 1550,
        "MARROM IMPERIAL": 1600,
        "MARROM SÃO P.": 1650,
        "ROSA CURITIBA": 1700,
        "PRETO ABSOLUTO": 1750,
        "PRETO FLORIDO": 1800,
        "PRETO INDIANO": 1850,
        "PRETO SÃO GABRIEL": 1900,
        "PRETO VIA LÁCTEA": 1950,
        "TRAVERTINO NACIONAL": 2000,
        "VERDE LABRADOR": 2050,
        "VERMELHO CAPÃO B.": 2100
    };

    // Verificar se o material está na tabela de preços
    if (material in precos) {
        // Calcular área em metros quadrados
        var area = (largura / 100) * (comprimento / 100);
        
        // Calcular o preço
        var precoMetroQuadrado = precos[material];
        var precoTotal = area * precoMetroQuadrado;

        return precoTotal;
    } else {
        return null; // Material não encontrado na tabela de preços
    }
}

// Capturar o formulário
var form = document.getElementById('orcamento-form');

// Adicionar evento de envio ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envio padrão do formulário

    // Capturar valores do formulário
    var nome = document.getElementById('nome').value;
    var largura = parseFloat(document.getElementById('largura').value); // Converter para número
    var comprimento = parseFloat(document.getElementById('comprimento').value); // Converter para número
    var material = document.getElementById('material').value;

    // Calcular o orçamento
    var valorOrcamento = calcularOrcamento(nome, largura, comprimento, material);

    // Montar mensagem de retorno
    var mensagem;
    if (valorOrcamento !== null) {
        mensagem = `Olá ${nome}, o seu pré-orçamento é de R$ ${valorOrcamento.toFixed(2)}, sujeito a alterações de acordo com as condições finais.`;
    } else {
        mensagem = `Material selecionado não encontrado.`;
    }

    // Exibir resultado na tela
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;

    // Adicionar classe para aplicar o padding
    var contentContainer = document.querySelector('.content-container');
    contentContainer.classList.add('padding-added');
});

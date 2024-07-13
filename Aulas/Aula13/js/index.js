let conteudoPrincipal = document.getElementById('conteudo-principal')
let cep = document.getElementById('cep')

console.log(conteudoPrincipal)


const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, {
        methods: 'GET'
    }).then(resposta => resposta.json())
        .then(dados => { conteudoPrincipal.innerHTML = `
    <h1>Endereço: </h1>
    <p>CEP: ${dados.cep}</p>
    <p>Logradouro: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Localidade: ${dados.localidade} - ${dados.uf}</p>
    `
    })
}

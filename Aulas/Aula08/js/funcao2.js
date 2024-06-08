var numero1 = document.getElementById('n1')
var numero1 = document.getElementById('n2')


function compararValores(){
    if(Number(numero1.value) == Number(numero2.value)){
        console.log(true)
        alert('Os resultados são iguais!')
    } else{
        console.log(false)
        alert('Os resultados são diferentes!')
    }
}
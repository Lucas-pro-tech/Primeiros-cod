
function somar(){
    var tn1 = window.document.getElementById("txtnum1")
    var tn2 = window.document.getElementById("txtnum2")
    var resultado = window.document.getElementById("txresultado")

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var soma = num1 + num2

    resultado.value = soma
}
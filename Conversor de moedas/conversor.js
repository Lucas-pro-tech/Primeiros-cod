function conversorMoedas(){
    
    var txtvalor = window.document.getElementById("txtvalor")
    var txtresultado = window.document.getElementById("txtresultado")

    var valor = Number(txtvalor.value)
    var resultado = valor / 5.3

    txtresultado.value = resultado.toFixed(2)
}
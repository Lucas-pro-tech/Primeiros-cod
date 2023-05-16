function resultado(){
    var data = window.document.getElementById("txtdata")
    var txtcalculo = window.document.getElementById("txtcalculo")
    var datanasc = new Date(data.value)
    var hoje = new Date()

    var calculo = Math.floor(
        Math.ceil(
            Math.abs( datanasc.getTime() - hoje.getTime())
            / (1000 * 3600 * 24)

        ) / 365.25
    )

    txtcalculo.value = calculo
}
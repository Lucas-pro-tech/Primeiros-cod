        function imprimir(){
            var nome = document.getElementById("Campo1")
            var Nascimento = document.getElementById("Campo2")
            var resultado = document.getElementById("resultado")

            resultado.value = nome.value + " nasceu em " + Nascimento.value
        }